import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const DIST = path.resolve("dist");
const errors = [];
const advisories = [];

const walk = async (dir) => {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
};

const routeFor = (file) => {
  const rel = path.relative(DIST, file).replaceAll(path.sep, "/");
  if (rel === "index.html") return "/";
  if (rel === "404.html") return "/404/";
  if (rel.endsWith("/index.html")) return `/${rel.slice(0, -"index.html".length)}`;
  return `/${rel.replace(/\.html$/, "/")}`;
};

const text = (html, regex) => html.match(regex)?.[1]?.trim() ?? "";
const normalizeInternal = (href) => {
  if (!href.startsWith("/")) return "";
  const clean = href.split("#")[0].split("?")[0];
  if (!clean || clean.startsWith("/_") || clean.includes(".")) return "";
  return clean === "/" ? "/" : `${clean.replace(/\/+$/, "")}/`;
};

const allFiles = await walk(DIST);
const htmlFiles = allFiles.filter((file) => file.endsWith(".html"));
const records = [];

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const route = routeFor(file);
  const title = text(html, /<title>([\s\S]*?)<\/title>/i);
  const description = text(
    html,
    /<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i,
  );
  const canonical = text(
    html,
    /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i,
  );
  const robots = text(
    html,
    /<meta\s+name=["']robots["']\s+content=["']([^"']*)["']/i,
  ).toLowerCase();
  const indexable = route !== "/404/" && !robots.includes("noindex");
  const hrefs = [...html.matchAll(/<a\b[^>]*\shref=["']([^"']+)["']/gi)].map(
    (match) => match[1],
  );
  const styleSizes = [...html.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)].map(
    (match) => Buffer.byteLength(match[1]),
  );
  const maxInlineStyle = styleSizes.length ? Math.max(...styleSizes) : 0;

  if (maxInlineStyle > 50_000)
    errors.push(
      `${route} contains an inline stylesheet larger than 50 KB (${maxInlineStyle} bytes).`,
    );
  const bytes = Buffer.byteLength(html);
  if (indexable && bytes > 250_000)
    advisories.push(`${route} HTML is ${bytes} bytes; review document weight.`);

  records.push({
    route,
    html,
    title,
    description,
    canonical,
    robots,
    indexable,
    hrefs,
  });
}

const indexable = records.filter((record) => record.indexable);
const duplicateValues = (key) => {
  const map = new Map();
  for (const record of indexable) {
    const value = record[key];
    if (!value) continue;
    const list = map.get(value) ?? [];
    list.push(record.route);
    map.set(value, list);
  }
  return [...map.entries()].filter(([, routes]) => routes.length > 1);
};

for (const [canonical, routes] of duplicateValues("canonical"))
  errors.push(`Duplicate canonical ${canonical}: ${routes.join(", ")}`);
for (const [title, routes] of duplicateValues("title"))
  errors.push(`Duplicate title \"${title}\": ${routes.join(", ")}`);
for (const [, routes] of duplicateValues("description"))
  advisories.push(`Duplicate meta description: ${routes.join(", ")}`);

const inbound = new Map(indexable.map((record) => [record.route, 0]));
for (const record of records) {
  const uniqueTargets = new Set(record.hrefs.map(normalizeInternal).filter(Boolean));
  for (const target of uniqueTargets) {
    if (inbound.has(target)) inbound.set(target, (inbound.get(target) ?? 0) + 1);
  }
}
for (const [route, count] of inbound) {
  if (route !== "/" && count === 0)
    errors.push(`${route} has no internal HTML links pointing to it.`);
}

const reviewPage = records.find((record) => record.route === "/free-inquiry-review/");
if (!reviewPage) errors.push("Missing /free-inquiry-review/ build output.");
else {
  if (!/action=["']\/api\/free-review["']/i.test(reviewPage.html))
    errors.push("Free review form is not routed through /api/free-review.");
  if (/docs\.google\.com\/forms/i.test(reviewPage.html))
    errors.push("Free review HTML still exposes a direct Google Forms submission action.");
}

const receiptPage = records.find((record) => record.route === "/review-received/");
if (!receiptPage) errors.push("Missing /review-received/ fallback page.");
else if (!receiptPage.robots.includes("noindex"))
  errors.push("/review-received/ must remain noindex.");

if (errors.length) {
  console.error("\nTechnical audit failed:\n");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(
  `Technical audit passed: ${htmlFiles.length} HTML files, ${indexable.length} indexable routes, ${advisories.length} advisory item(s).`,
);
if (advisories.length)
  advisories.forEach((item) => console.log(`  advisory: ${item}`));
