import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const dist = join(root, "dist");
const budgetPath = join(root, "performance-budget.json");
const budget = JSON.parse(readFileSync(budgetPath, "utf8"));

if (!existsSync(dist)) {
  console.error("dist/ was not found. Run npm run build before running the performance budget check.");
  process.exit(1);
}

const files = [];
function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    const stat = statSync(path);
    if (stat.isDirectory()) walk(path);
    else files.push({ path, size: stat.size, ext: extname(path).toLowerCase() });
  }
}
walk(dist);

const kb = (bytes) => Math.round((bytes / 1024) * 10) / 10;
const byExt = (exts) => files.filter((file) => exts.includes(file.ext));
const jsKb = kb(byExt([".js"]).reduce((sum, file) => sum + file.size, 0));
const cssKb = kb(byExt([".css"]).reduce((sum, file) => sum + file.size, 0));
const imageFiles = byExt([".avif", ".webp", ".jpg", ".jpeg", ".png", ".svg"]);
const largestImage = imageFiles.sort((a, b) => b.size - a.size)[0];
const largestImageKb = largestImage ? kb(largestImage.size) : 0;
const totalKb = kb(files.reduce((sum, file) => sum + file.size, 0));

const failures = [];
const { limits } = budget;
if (jsKb > limits.initialJavaScriptKB) failures.push(`JavaScript is ${jsKb} KB, over ${limits.initialJavaScriptKB} KB.`);
if (cssKb > limits.initialCssKB) failures.push(`CSS is ${cssKb} KB, over ${limits.initialCssKB} KB.`);
if (largestImageKb > limits.largestImageKB) failures.push(`Largest image is ${largestImageKb} KB (${largestImage?.path}), over ${limits.largestImageKB} KB.`);
if (totalKb > limits.totalPageWeightKB) failures.push(`Total dist weight is ${totalKb} KB, over ${limits.totalPageWeightKB} KB.`);

console.log("Performance budget summary:");
console.log(`- JavaScript: ${jsKb} KB`);
console.log(`- CSS: ${cssKb} KB`);
console.log(`- Largest image: ${largestImageKb} KB${largestImage ? ` (${largestImage.path.replace(root, "")})` : ""}`);
console.log(`- Total dist assets: ${totalKb} KB`);

if (failures.length) {
  console.error("\nBudget failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("\nBudget passed.");
