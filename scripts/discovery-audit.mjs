import { readFile, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { NON_INDEXABLE_PATHS, SITE_ORIGIN } from "../src/data/discovery.mjs";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = join(projectRoot, "dist");
const failures = [];
const warnings = [];

const fail = (message) => failures.push(message);
const warn = (message) => warnings.push(message);
const decodeEntities = (value) =>
  value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">");

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => {
      const path = join(directory, entry.name);
      return entry.isDirectory() ? listFiles(path) : [path];
    }),
  );
  return nested.flat();
}

const fileToPathname = (file) => {
  const outputPath = relative(distDir, file).replaceAll("\\", "/");
  if (outputPath === "index.html") return "/";
  if (outputPath === "404.html") return "/404/";
  return `/${outputPath.replace(/index\.html$/, "")}`;
};

const pathnameToFile = (pathname) => {
  const clean = pathname.replace(/^\//, "");
  if (!clean) return join(distDir, "index.html");
  const direct = join(distDir, clean);
  if (existsSync(direct) && !direct.endsWith("/")) return direct;
  return join(distDir, clean, "index.html");
};

const getTagContent = (html, tag) => {
  const match = html.match(
    new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"),
  );
  return match ? decodeEntities(match[1].replace(/<[^>]*>/g, "").trim()) : "";
};

const getMeta = (html, key, attribute = "name") => {
  const pattern = new RegExp(
    `<meta[^>]*${attribute}=["']${key}["'][^>]*content=["']([^"']*)["'][^>]*>|<meta[^>]*content=["']([^"']*)["'][^>]*${attribute}=["']${key}["'][^>]*>`,
    "i",
  );
  const match = html.match(pattern);
  return decodeEntities(match?.[1] ?? match?.[2] ?? "");
};

const getLink = (html, rel) => {
  const match = html.match(
    new RegExp(
      `<link[^>]*rel=["']${rel}["'][^>]*href=["']([^"']+)["'][^>]*>|<link[^>]*href=["']([^"']+)["'][^>]*rel=["']${rel}["'][^>]*>`,
      "i",
    ),
  );
  return decodeEntities(match?.[1] ?? match?.[2] ?? "");
};

if (!existsSync(distDir))
  fail("dist/ does not exist. Run the Astro build first.");

const files = existsSync(distDir) ? await listFiles(distDir) : [];
const htmlFiles = files.filter((file) => file.endsWith(".html"));
const indexablePages = new Map();
const seenTitles = new Map();
const seenDescriptions = new Map();

for (const file of htmlFiles) {
  const pathname = fileToPathname(file);
  const html = await readFile(file, "utf8");
  const title = getTagContent(html, "title");
  const description = getMeta(html, "description");
  const robots = getMeta(html, "robots");
  const canonical = getLink(html, "canonical");
  const expectedCanonical = `${SITE_ORIGIN}${pathname}`;
  const h1Count = (html.match(/<h1(?:\s|>)/gi) ?? []).length;
  const noindex = /(?:^|,)\s*noindex\b/i.test(robots);

  if (!/<html[^>]*lang=["']en["']/i.test(html))
    fail(`${pathname}: missing lang="en".`);
  if (!title) fail(`${pathname}: missing title.`);
  if (!description) fail(`${pathname}: missing meta description.`);
  if (!robots) fail(`${pathname}: missing robots directive.`);
  if (h1Count !== 1) fail(`${pathname}: expected one H1, found ${h1Count}.`);
  if (pathname !== "/404/" && canonical !== expectedCanonical)
    fail(
      `${pathname}: canonical is ${canonical || "missing"}; expected ${expectedCanonical}.`,
    );
  if (getMeta(html, "og:url", "property") !== canonical)
    fail(`${pathname}: Open Graph URL does not match its canonical.`);
  if (!getMeta(html, "og:image", "property"))
    fail(`${pathname}: missing Open Graph image fallback.`);
  if (!getLink(html, "manifest"))
    fail(`${pathname}: missing web manifest link.`);

  const jsonLdBlocks = [
    ...html.matchAll(
      /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,
    ),
  ];
  if (jsonLdBlocks.length === 0) fail(`${pathname}: missing JSON-LD.`);
  const definedSchemaIds = new Set();
  for (const [, json] of jsonLdBlocks) {
    try {
      const parsed = JSON.parse(json);
      const inspectSchema = (value) => {
        if (!value || typeof value !== "object") return;
        if (
          typeof value["@id"] === "string" &&
          Object.keys(value).some((key) => key !== "@id")
        ) {
          if (definedSchemaIds.has(value["@id"]))
            fail(
              `${pathname}: duplicate JSON-LD definition for ${value["@id"]}.`,
            );
          definedSchemaIds.add(value["@id"]);
        }
        for (const child of Object.values(value)) inspectSchema(child);
      };
      inspectSchema(parsed);
    } catch (error) {
      fail(`${pathname}: invalid JSON-LD (${error.message}).`);
    }
  }

  if (pathname === "/404/") {
    if (!noindex) fail("/404/: must be noindex.");
    continue;
  }

  if (NON_INDEXABLE_PATHS.has(pathname) && !noindex)
    fail(`${pathname}: unfinished route must be noindex.`);
  if (!NON_INDEXABLE_PATHS.has(pathname) && noindex)
    fail(`${pathname}: intended landing page is unexpectedly noindex.`);

  if (!noindex) {
    indexablePages.set(pathname, canonical);
    if (seenTitles.has(title))
      fail(
        `${pathname}: duplicate title also used by ${seenTitles.get(title)}.`,
      );
    else seenTitles.set(title, pathname);
    if (seenDescriptions.has(description))
      fail(
        `${pathname}: duplicate description also used by ${seenDescriptions.get(description)}.`,
      );
    else seenDescriptions.set(description, pathname);
    if (title.length > 65)
      warn(
        `${pathname}: title is ${title.length} characters; review search-result fit.`,
      );
    if (description.length < 100 || description.length > 170)
      warn(
        `${pathname}: description is ${description.length} characters; review snippet quality.`,
      );
  }

  const hrefs = [...html.matchAll(/<a\b[^>]*href=["']([^"']+)["']/gi)].map(
    (match) => decodeEntities(match[1]),
  );
  for (const href of hrefs) {
    if (/^(?:#|mailto:|tel:|sms:|javascript:)/i.test(href)) continue;
    const target = new URL(href, expectedCanonical);
    if (target.origin !== SITE_ORIGIN) continue;
    if (!existsSync(pathnameToFile(target.pathname)))
      fail(`${pathname}: broken internal link to ${target.pathname}.`);
  }

  const imageTags = html.match(/<img\b[^>]*>/gi) ?? [];
  for (const tag of imageTags) {
    const source = tag.match(/\bsrc=["']([^"']+)["']/i)?.[1];
    if (!source) fail(`${pathname}: image is missing a source.`);
    if (!/\balt=["'][^"']*["']/i.test(tag))
      fail(`${pathname}: image is missing an alt attribute.`);
    if (!/\bwidth=["']?\d+/i.test(tag) || !/\bheight=["']?\d+/i.test(tag))
      fail(`${pathname}: image is missing intrinsic dimensions.`);
    if (source) {
      const target = new URL(decodeEntities(source), expectedCanonical);
      if (
        target.origin === SITE_ORIGIN &&
        !existsSync(pathnameToFile(target.pathname))
      )
        fail(`${pathname}: broken image source ${target.pathname}.`);
    }
  }
}

const requiredFiles = [
  "robots.txt",
  "llms.txt",
  "site.webmanifest",
  "sitemap-index.xml",
];
for (const filename of requiredFiles) {
  if (!existsSync(join(distDir, filename)))
    fail(`Missing ${filename} in the production build.`);
}

const robotsPath = join(distDir, "robots.txt");
if (existsSync(robotsPath)) {
  const robots = await readFile(robotsPath, "utf8");
  if (!robots.includes(`Sitemap: ${SITE_ORIGIN}/sitemap-index.xml`))
    fail("robots.txt does not advertise the canonical sitemap index.");
  if (/User-agent:\s*\*[\s\S]*?Disallow:\s*\/(?:\s|$)/i.test(robots))
    fail("robots.txt contains a sitewide crawl block.");
}

const sitemapFiles = files.filter((file) =>
  /sitemap-(?!index).*\.xml$/.test(file),
);
const sitemapUrls = new Set();
for (const file of sitemapFiles) {
  const xml = await readFile(file, "utf8");
  for (const [, loc] of xml.matchAll(/<loc>([^<]+)<\/loc>/g))
    sitemapUrls.add(decodeEntities(loc));
}
for (const [pathname, canonical] of indexablePages) {
  if (!sitemapUrls.has(canonical))
    fail(`${pathname}: indexable canonical is missing from the sitemap.`);
}
for (const url of sitemapUrls) {
  const pathname = new URL(url).pathname;
  if (!indexablePages.has(pathname))
    fail(
      `${pathname}: sitemap contains a noindex, redirected, or unknown URL.`,
    );
}

const llmsPath = join(distDir, "llms.txt");
if (existsSync(llmsPath)) {
  const llms = await readFile(llmsPath, "utf8");
  if (!llms.startsWith("# Inquiry Removal\n"))
    fail("llms.txt must start with the site H1.");
  for (const [, href] of llms.matchAll(/\]\((https:\/\/[^)]+)\)/g)) {
    const target = new URL(href);
    if (target.origin !== SITE_ORIGIN) continue;
    if (!indexablePages.has(target.pathname))
      fail(
        `llms.txt links to a non-indexable or unknown page: ${target.pathname}.`,
      );
  }
}

for (const file of files.filter((entry) =>
  /\.(?:html|xml|txt|json)$/.test(entry),
)) {
  const content = await readFile(file, "utf8");
  if (content.includes("https://inquiryremoval.com"))
    fail(`${relative(distDir, file)} contains the noncanonical hostname.`);
}

for (const warning of warnings) console.warn(`WARN ${warning}`);
if (failures.length) {
  for (const failure of failures) console.error(`FAIL ${failure}`);
  console.error(`Discovery audit failed with ${failures.length} issue(s).`);
  process.exit(1);
}

console.log(
  `Discovery audit passed: ${htmlFiles.length} HTML pages, ${indexablePages.size} indexable canonical URLs, ${sitemapUrls.size} sitemap URLs, ${warnings.length} advisory warning(s).`,
);
