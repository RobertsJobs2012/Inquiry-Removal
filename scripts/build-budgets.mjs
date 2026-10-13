import { readFile, readdir, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { gzipSync } from "node:zlib";

const root = path.resolve("dist");
// Headroom above the measured current site; intentional changes require review,
// not silently moving the ceiling whenever a build gets larger.
const limits = {
  html: 75_000,
  htmlGzip: 18_000,
  jsGzip: 30_000,
  cssGzip: 45_000,
  fonts: 150_000,
};
const records = [],
  errors = [];
const cache = new Map();
async function asset(file) {
  if (!file.startsWith(root + path.sep))
    throw new Error("Asset escaped build output");
  if (!cache.has(file)) {
    const bytes = await readFile(file);
    cache.set(file, {
      text: bytes.toString(),
      raw: bytes.length,
      gzip: gzipSync(bytes).length,
    });
  }
  return cache.get(file);
}
async function walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(file);
      continue;
    }
    if (!file.endsWith(".html")) continue;
    const data = await readFile(file),
      html = data.toString();
    const js = new Set(),
      css = new Set(),
      fonts = new Set();
    async function collectJs(name) {
      if (js.has(name)) return;
      js.add(name);
      for (const [, relative] of (await asset(name)).text.matchAll(
        /["'](\.{1,2}\/[^"']+\.js)["']/g,
      ))
        await collectJs(path.resolve(path.dirname(name), relative));
    }
    for (const [, src] of html.matchAll(
      /<script\b[^>]*\bsrc=["'](\/[^"']+)["']/gi,
    ))
      await collectJs(path.join(root, src));
    for (const [tag] of html.matchAll(/<link\b[^>]*>/gi)) {
      const href = tag.match(/\bhref=["'](\/[^"']+)["']/i)?.[1];
      if (!href) continue;
      const name = path.join(root, href);
      if (/\brel=["']stylesheet["']/i.test(tag)) css.add(name);
      if (/\bas=["']font["']/i.test(tag)) fonts.add(name);
    }
    for (const name of css) {
      for (const [, url] of (await asset(name)).text.matchAll(
        /url\(["']?([^\s)"']+\.woff2)["']?\)/g,
      )) {
        if (/^https?:|^data:/.test(url)) continue;
        fonts.add(
          url.startsWith("/")
            ? path.join(root, url)
            : path.resolve(path.dirname(name), url),
        );
      }
    }
    const sum = async (set, key) =>
      (
        await Promise.all(
          [...set].map(async (name) => (await asset(name))[key]),
        )
      ).reduce((a, b) => a + b, 0);
    const record = {
      file: path.relative(root, file),
      html: data.length,
      htmlGzip: gzipSync(data).length,
      jsGzip: await sum(js, "gzip"),
      cssGzip: await sum(css, "gzip"),
      fonts: await sum(fonts, "raw"),
    };
    for (const [key, max] of Object.entries(limits))
      if (record[key] > max)
        errors.push(
          `${record.file}: ${key} ${record[key]} exceeds ${max} bytes`,
        );
    records.push(record);
  }
}
await walk(root);
await mkdir(".artifacts/performance", { recursive: true });
await writeFile(
  ".artifacts/performance/build-budgets.json",
  JSON.stringify({ limits, records }, null, 2),
);
if (errors.length) throw new Error(errors.join("\n"));
console.log(
  `Build budgets passed across ${records.length} HTML routes (HTML, compressed JS/CSS, fonts).`,
);
