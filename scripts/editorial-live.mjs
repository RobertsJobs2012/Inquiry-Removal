import { readFile, mkdir, writeFile } from "node:fs/promises";
const plan = JSON.parse(await readFile("src/data/editorialPlan.json", "utf8"));
const baseline = process.argv.includes("--baseline");
const origin = "https://www.inquiryremoval.com";
const queue = Object.entries(plan),
  results = [],
  failures = [];
const decode = (value) =>
  value
    .replace(/&#(x[0-9a-f]+|\d+);/gi, (_, n) =>
      String.fromCodePoint(
        n[0].toLowerCase() === "x" ? parseInt(n.slice(1), 16) : Number(n),
      ),
    )
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'");
await Promise.all(
  Array.from({ length: 4 }, async () => {
    for (;;) {
      const entry = queue.shift();
      if (!entry) return;
      const [url, revision] = entry;
      try {
        const response = await fetch(origin + url, {
          cache: "no-store",
          signal: AbortSignal.timeout(20000),
        });
        const html = await response.text();
        const title = decode(
          html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? "",
        );
        const description = decode(
          html.match(/name="description" content="([^"]*)"/)?.[1] ?? "",
        );
        const canonical =
          html.match(/rel="canonical" href="([^"]*)"/)?.[1] ?? "";
        const robots = html.match(/name="robots" content="([^"]*)"/)?.[1] ?? "";
        const headerRobots = response.headers.get("x-robots-tag");
        const h1 = decode(
          (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? "")
            .replace(/<[^>]*>/g, "")
            .trim(),
        );
        const indexable = ![
          "/free-inquiry-review/",
          "/privacy/",
          "/results/",
          "/terms/",
        ].includes(url);
        const problems = [];
        if (
          response.status !== 200 ||
          response.url !== origin + url ||
          !response.headers.get("content-type")?.includes("text/html")
        )
          problems.push("response");
        if (canonical !== origin + url) problems.push("canonical");
        if (
          robots.includes("noindex") === indexable ||
          (indexable && headerRobots?.includes("noindex"))
        )
          problems.push("robots");
        for (const [, body] of html.matchAll(
          /<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
        ))
          JSON.parse(body);
        if (
          !baseline &&
          (title !== revision.seoTitle ||
            description !== revision.description ||
            h1 !== revision.title)
        )
          problems.push("editorial output");
        if (
          !baseline &&
          [
            "/how-long-do-hard-inquiries-stay/",
            "/hard-inquiry-removal-letter/",
            "/who-pulled-my-credit/",
            "/how-to-remove-hard-inquiries/",
          ].includes(url) &&
          !html.includes("data-private-tool=")
        )
          problems.push("private tool");
        results.push({
          url,
          status: response.status,
          final: response.url,
          canonical,
          robots,
          headerRobots,
          title,
          description,
          h1,
          problems,
        });
        for (const problem of problems) failures.push(url + ": " + problem);
      } catch (error) {
        failures.push(url + ": " + error.message);
      }
    }
  }),
);
results.sort((a, b) => a.url.localeCompare(b.url));
await mkdir(".artifacts/research", { recursive: true });
await writeFile(
  `.artifacts/research/${baseline ? "baseline" : "production"}-get.json`,
  JSON.stringify(
    {
      checkedAt: new Date().toISOString(),
      origin,
      concurrency: 4,
      baseline,
      results,
      failures,
    },
    null,
    2,
  ),
);
console.log(
  JSON.stringify({
    phase: baseline ? "before" : "after",
    urls: results.length,
    failures,
  }),
);
if (failures.length) process.exitCode = 1;
