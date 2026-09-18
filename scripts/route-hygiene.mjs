import { readdir } from "node:fs/promises";
import { resolve } from "node:path";

const roots = [resolve("src/pages"), resolve("src/components")];
const numberedCopy = /\s(?:copy|\d+)\.[^.]+$/i;
const failures = [];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = resolve(directory, entry.name);
    if (entry.isDirectory()) await walk(fullPath);
    else if (numberedCopy.test(entry.name)) failures.push(fullPath);
  }
}

for (const root of roots) await walk(root);

if (failures.length) {
  console.error(
    "Route hygiene check failed. Move numbered drafts outside src/pages and src/components:",
  );
  failures.forEach((file) => console.error(`- ${file}`));
  process.exit(1);
}

console.log("Route hygiene check passed.");
