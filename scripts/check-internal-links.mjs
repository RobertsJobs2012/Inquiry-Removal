import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const ROOT = process.cwd();
const ROUTE_EXTENSIONS = new Set([".astro"]);
const CONTENT_EXTENSIONS = new Set([".astro", ".tsx", ".ts", ".mjs", ".js", ".txt", ".json"]);
const INTERNAL_ORIGIN = "https://www.inquiryremoval.com";

function walk(dir) {
  if (!existsSync(dir)) return [];
  const output = [];
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    const stat = statSync(path);
    if (stat.isDirectory()) {
      if (entry === "node_modules" || entry === "dist" || entry === ".astro") continue;
      output.push(...walk(path));
    } else {
      output.push(path);
    }
  }
  return output;
}

function extension(path) {
  const match = path.match(/\.[^.]+$/);
  return match ? match[0] : "";
}

function normalizePath(path) {
  const clean = path.replace(INTERNAL_ORIGIN, "").split("?")[0].split("#")[0];
  if (!clean || clean === "/") return "/";
  return clean.endsWith("/") ? clean.slice(0, -1) : clean;
}

function looksLikeFile(path) {
  return /\.[a-z0-9]{2,8}$/i.test(path.split("/").pop() ?? "");
}

function routeFromPage(file) {
  const rel = relative(join(ROOT, "src/pages"), file).split(sep).join("/");
  if (rel === "index.astro") return "/";
  if (rel === "robots.txt.ts") return "/robots.txt";
  if (rel.endsWith("/index.astro")) return `/${rel.slice(0, -"/index.astro".length)}`;
  if (rel.endsWith(".astro")) return `/${rel.slice(0, -".astro".length)}`;
  return null;
}

const generatedFiles = new Set(["/sitemap-index.xml", "/sitemap-0.xml"]);
const routes = new Set(["/"]);
for (const file of walk(join(ROOT, "src/pages"))) {
  if (!ROUTE_EXTENSIONS.has(extension(file)) && !file.endsWith("robots.txt.ts")) continue;
  const route = routeFromPage(file);
  if (route) routes.add(normalizePath(route));
}

const publicFiles = new Set();
for (const file of walk(join(ROOT, "public"))) {
  publicFiles.add(`/${relative(join(ROOT, "public"), file).split(sep).join("/")}`);
}

const hrefPattern = /(?:href\s*=\s*(?:\{["']|["']))([^"'}]+)|https:\/\/www\.inquiryremoval\.com([^\s"'`<>)]*)/g;
const broken = [];

for (const base of ["app", "components", "src", "lib", "public"]) {
  for (const file of walk(join(ROOT, base))) {
    if (!CONTENT_EXTENSIONS.has(extension(file))) continue;
    const text = readFileSync(file, "utf8");
    for (const match of text.matchAll(hrefPattern)) {
      const rawHref = match[1] ?? match[2] ?? "";
      if (!rawHref || rawHref.startsWith("#") || rawHref.startsWith("mailto:") || rawHref.startsWith("tel:") || rawHref.startsWith("//")) continue;
      if (rawHref.startsWith("http") && !rawHref.startsWith(INTERNAL_ORIGIN)) continue;
      if (rawHref.includes("${")) continue;
      const normalized = normalizePath(rawHref);
      const ok = looksLikeFile(normalized) ? publicFiles.has(normalized) || generatedFiles.has(normalized) || normalized === "/robots.txt" : routes.has(normalized);
      if (!ok) {
        const line = text.slice(0, match.index).split("\n").length;
        broken.push(`${relative(ROOT, file)}:${line} -> ${rawHref}`);
      }
    }
  }
}

if (broken.length) {
  console.error(`Found ${broken.length} broken internal link(s):`);
  for (const item of broken) console.error(`- ${item}`);
  process.exit(1);
}

console.log(`Internal link check passed. ${routes.size} routes and ${publicFiles.size} public files verified.`);
