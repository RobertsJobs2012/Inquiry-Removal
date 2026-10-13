import { mkdir, readFile, writeFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { chromium } from "playwright";
const origin = (
  process.env.SITE_URL || "https://www.inquiryremoval.com"
).replace(/\/$/, "");
const routes = ["/", "/pricing/", "/free-inquiry-review/"];
const limits = { performance: 0.9, lcp: 3500, cls: 0.1, blocking: 250 };
const median = (values) =>
  [...values].sort((a, b) => a - b)[Math.floor(values.length / 2)];
const records = [],
  errors = [];
await mkdir(".artifacts/performance", { recursive: true });
for (const route of routes) {
  const runs = [];
  for (let run = 0; run < 3; run++) {
    const output = path.resolve(
      `.artifacts/performance/${route === "/" ? "home" : route.replaceAll("/", "")}-${run}.json`,
    );
    const result = spawnSync(
      process.execPath,
      [
        path.resolve("node_modules/lighthouse/cli/index.js"),
        origin + route,
        "--quiet",
        "--output=json",
        `--output-path=${output}`,
        "--only-categories=performance",
        "--chrome-flags=--headless --no-sandbox --disable-dev-shm-usage",
        "--disable-full-page-screenshot",
      ],
      {
        env: { ...process.env, CHROME_PATH: chromium.executablePath() },
        stdio: "inherit",
        timeout: 180_000,
      },
    );
    if (result.status !== 0 || result.error)
      throw new Error(
        `Lighthouse could not audit ${route}; budgets not verified.`,
      );
    const report = JSON.parse(await readFile(output, "utf8"));
    if (report.runtimeError)
      throw new Error(`Lighthouse runtime error on ${route}`);
    runs.push({
      performance: report.categories.performance.score,
      lcp: report.audits["largest-contentful-paint"].numericValue,
      cls: report.audits["cumulative-layout-shift"].numericValue,
      blocking: report.audits["total-blocking-time"].numericValue,
    });
  }
  const metrics = Object.fromEntries(
    Object.keys(limits).map((key) => [
      key,
      median(runs.map((run) => run[key])),
    ]),
  );
  records.push({ route, metrics, runs });
  for (const [key, threshold] of Object.entries(limits)) {
    if (
      !Number.isFinite(metrics[key]) ||
      (key === "performance"
        ? metrics[key] < threshold
        : metrics[key] > threshold)
    )
      errors.push(`${route}: median ${key} ${metrics[key]} fails ${threshold}`);
  }
  console.log(
    `${route}: mobile median performance ${Math.round(metrics.performance * 100)}, LCP ${Math.round(metrics.lcp)}ms, CLS ${metrics.cls.toFixed(3)}, TBT ${Math.round(metrics.blocking)}ms`,
  );
}
await writeFile(
  ".artifacts/performance/lighthouse-budgets.json",
  JSON.stringify({ limits, records }, null, 2),
);
if (errors.length) throw new Error(errors.join("\n"));
console.log(
  "Three-run mobile Lighthouse budgets passed; these are lab measurements, not field Core Web Vitals.",
);
