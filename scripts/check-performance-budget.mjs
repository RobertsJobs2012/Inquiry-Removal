import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const buildDir = join(root, ".next/static");
const budgetPath = join(root, "performance-budget.json");
const budget = JSON.parse(readFileSync(budgetPath, "utf8"));

if (!existsSync(buildDir)) {
  console.error(".next/static was not found. Run pnpm build before running the performance budget check.");
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
walk(buildDir);

const kb = (bytes) => Math.round((bytes / 1024) * 10) / 10;
const byExt = (exts) => files.filter((file) => exts.includes(file.ext));
const jsKb = kb(byExt([".js"]).reduce((sum, file) => sum + file.size, 0));
const cssKb = kb(byExt([".css"]).reduce((sum, file) => sum + file.size, 0));
const largestJs = byExt([".js"]).sort((a, b) => b.size - a.size)[0];
const largestCss = byExt([".css"]).sort((a, b) => b.size - a.size)[0];
const totalKb = kb(files.reduce((sum, file) => sum + file.size, 0));

console.log("Next.js static asset budget summary:");
console.log(`- Total JavaScript in .next/static: ${jsKb} KB`);
console.log(`- Total CSS in .next/static: ${cssKb} KB`);
console.log(`- Largest JS chunk: ${largestJs ? `${kb(largestJs.size)} KB` : "0 KB"}`);
console.log(`- Largest CSS chunk: ${largestCss ? `${kb(largestCss.size)} KB` : "0 KB"}`);
console.log(`- Total .next/static assets: ${totalKb} KB`);

const failures = [];
const { limits } = budget;
if (largestJs && kb(largestJs.size) > limits.largestJavaScriptChunkKB) {
  failures.push(`Largest JS chunk is ${kb(largestJs.size)} KB, over ${limits.largestJavaScriptChunkKB} KB.`);
}
if (largestCss && kb(largestCss.size) > limits.largestCssChunkKB) {
  failures.push(`Largest CSS chunk is ${kb(largestCss.size)} KB, over ${limits.largestCssChunkKB} KB.`);
}
if (totalKb > limits.totalStaticAssetKB) {
  failures.push(`Total .next/static asset weight is ${totalKb} KB, over ${limits.totalStaticAssetKB} KB.`);
}

if (failures.length) {
  console.error("\nBudget failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("\nBudget passed.");
