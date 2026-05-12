import { createGzip } from "node:zlib";
import { createReadStream } from "node:fs";
import { promises as fs } from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const distDir = path.join(projectRoot, "dist");
const staticDir = path.join(distDir, "_astro");

const budgets = {
  jsKb: Number(process.env.BUDGET_JS_KB ?? 30),
  cssKb: Number(process.env.BUDGET_CSS_KB ?? 15),
  singleAssetKb: Number(process.env.BUDGET_ASSET_KB ?? 90),
};

async function exists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function walk(dir) {
  if (!(await exists(dir))) return [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const fullPath = path.join(dir, entry.name);
      return entry.isDirectory() ? walk(fullPath) : fullPath;
    })
  );
  return files.flat();
}

async function gzipSize(filePath) {
  return new Promise((resolve, reject) => {
    let total = 0;
    const input = createReadStream(filePath);
    const gzip = createGzip({ level: 9 });

    gzip.on("data", (chunk) => {
      total += chunk.length;
    });
    gzip.on("end", () => resolve(total));
    gzip.on("error", reject);
    input.on("error", reject);
    input.pipe(gzip);
  });
}

function formatKb(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

if (!(await exists(distDir))) {
  console.log("No dist directory found. Run `pnpm build` before checking performance budgets.");
  process.exit(0);
}

const assets = (await walk(staticDir)).filter((file) => /\.(js|css)$/.test(file));
const rows = [];

for (const file of assets) {
  const size = (await fs.stat(file)).size;
  const gzip = await gzipSize(file);
  const relative = path.relative(projectRoot, file);
  rows.push({ file: relative, type: path.extname(file).slice(1), size, gzip });
}

const jsTotal = rows.filter((row) => row.type === "js").reduce((sum, row) => sum + row.gzip, 0);
const cssTotal = rows.filter((row) => row.type === "css").reduce((sum, row) => sum + row.gzip, 0);
const largest = [...rows].sort((a, b) => b.gzip - a.gzip).slice(0, 15);

console.log("\nState 48 Credit performance budget check");
console.log("---------------------------------------");
console.log(`Total gzipped JS assets:  ${formatKb(jsTotal)}  budget ${budgets.jsKb} KB`);
console.log(`Total gzipped CSS assets: ${formatKb(cssTotal)}  budget ${budgets.cssKb} KB`);
console.log("\nLargest gzipped assets:");
for (const row of largest) {
  console.log(`${formatKb(row.gzip).padStart(9)}  ${row.file}`);
}

const failures = [];
if (jsTotal / 1024 > budgets.jsKb) failures.push(`JS total exceeds ${budgets.jsKb} KB`);
if (cssTotal / 1024 > budgets.cssKb) failures.push(`CSS total exceeds ${budgets.cssKb} KB`);
for (const row of rows) {
  if (row.gzip / 1024 > budgets.singleAssetKb) {
    failures.push(`${row.file} exceeds single-asset budget of ${budgets.singleAssetKb} KB`);
  }
}

if (failures.length) {
  console.error("\nBudget failures:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("\nPerformance budgets passed.");
