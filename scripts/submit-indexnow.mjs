import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const SITE_ORIGIN = "https://www.inquiryremoval.com";
const KEY = "9db1eb516e99ccbf93962d2ee991beb3";
const KEY_LOCATION = `${SITE_ORIGIN}/${KEY}.txt`;
const dryRun = process.argv.includes("--dry-run");
const sitemapPath = resolve("dist/sitemap-0.xml");
const sitemap = await readFile(sitemapPath, "utf8");
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  ([, url]) => url,
);

if (!urlList.length)
  throw new Error("No URLs were found in dist/sitemap-0.xml.");
if (urlList.some((url) => !url.startsWith(`${SITE_ORIGIN}/`)))
  throw new Error("The sitemap contains a URL outside the canonical origin.");

const payload = {
  host: new URL(SITE_ORIGIN).host,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList,
};

if (dryRun) {
  console.log(JSON.stringify(payload, null, 2));
  process.exit(0);
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
  signal: AbortSignal.timeout(15_000),
});

if (!response.ok)
  throw new Error(
    `IndexNow returned ${response.status} ${response.statusText}.`,
  );

console.log(
  `IndexNow accepted ${urlList.length} canonical URLs (${response.status}).`,
);
