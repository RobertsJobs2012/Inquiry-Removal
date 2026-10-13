import { readFile, mkdir, writeFile, rename } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { createHash } from "node:crypto";
import { parseArgs } from "node:util";
import {
  SITE_ORIGIN,
  canonicalUrl,
  chooseUrls,
  notify,
  acknowledgedState,
} from "./lib/indexnow.mjs";
const { values } = parseArgs({
  options: {
    "dry-run": { type: "boolean", default: false },
    all: { type: "boolean", default: false },
    live: { type: "boolean", default: false },
    url: { type: "string", multiple: true },
    state: { type: "string", default: ".artifacts/indexnow/state.json" },
  },
});
const statePath = resolve(values.state),
  root = resolve("dist");
async function publicText(url) {
  if (new URL(url).origin !== SITE_ORIGIN)
    throw new Error("Public discovery fetch escaped the production origin.");
  const response = await fetch(url, {
    cache: "no-store",
    redirect: "error",
    signal: AbortSignal.timeout(20_000),
  });
  if (response.status !== 200)
    throw new Error(
      `Public discovery resource returned HTTP ${response.status}; no notifications sent.`,
    );
  return response.text();
}
const sitemap = values.live
    ? await publicText(`${SITE_ORIGIN}/sitemap-0.xml`)
    : await readFile(resolve(root, "sitemap-0.xml"), "utf8"),
  current = {};
const canonicalList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  ([, value]) => canonicalUrl(value.replaceAll("&amp;", "&")),
);
let nextUrl = 0;
await Promise.all(
  Array.from({ length: 4 }, async () => {
    while (nextUrl < canonicalList.length) {
      const url = canonicalList[nextUrl++];
      let html;
      if (values.live) {
        html = await publicText(url);
        if (
          /<meta\b[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(
            html,
          )
        )
          throw new Error(
            "Live sitemap includes a noindex page; refusing notification.",
          );
      } else {
        const file = resolve(root, "." + new URL(url).pathname, "index.html");
        if (!file.startsWith(root + "/"))
          throw new Error("Sitemap path escaped build output.");
        html = await readFile(file);
      }
      current[url] = createHash("sha256").update(html).digest("hex");
    }
  }),
);
if (!Object.keys(current).length)
  throw new Error("No canonical URLs found in the built sitemap.");
let previous = {};
try {
  const saved = JSON.parse(await readFile(statePath, "utf8"));
  if (
    saved.origin !== SITE_ORIGIN ||
    !saved.hashes ||
    typeof saved.hashes !== "object" ||
    Array.isArray(saved.hashes)
  )
    throw new Error(
      "Invalid IndexNow state; refusing a fallback full submission.",
    );
  for (const [url, hash] of Object.entries(saved.hashes)) {
    canonicalUrl(url);
    if (typeof hash !== "string" || !/^[a-f0-9]{64}$/.test(hash))
      throw new Error("Invalid saved URL fingerprint.");
  }
  previous = saved.hashes;
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}
const urlList = chooseUrls(current, previous, {
  all: values.all,
  urls: values.url ?? [],
});
if (values["dry-run"]) {
  console.log(
    JSON.stringify(
      {
        dryRun: true,
        mode: values.all ? "all" : values.url?.length ? "targeted" : "changed",
        urlList,
      },
      null,
      2,
    ),
  );
} else if (!urlList.length) {
  console.log("IndexNow: no changed canonical URLs; no notification sent.");
} else {
  const { statuses } = await notify(urlList);
  await mkdir(dirname(statePath), { recursive: true });
  const next = {
    version: 1,
    origin: SITE_ORIGIN,
    hashes: acknowledgedState(current, previous, urlList),
    acceptedAt: new Date().toISOString(),
    statuses,
  };
  await writeFile(`${statePath}.tmp`, JSON.stringify(next, null, 2));
  await rename(`${statePath}.tmp`, statePath);
  console.log(
    `IndexNow received ${urlList.length} changed/targeted URLs (HTTP ${statuses.join(", ")}).${statuses.includes(202) ? " Ownership validation is still pending." : ""} Receipt is not a guarantee of indexing or rankings.`,
  );
}
