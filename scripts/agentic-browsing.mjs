// Runs in the existing isolated CI browser environment, not a user profile.
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { chromium } from "playwright";

const base = (process.env.SITE_URL || "https://www.inquiryremoval.com").replace(
  /\/$/,
  "",
);
const directory = ".artifacts/agentic-browsing";
await mkdir(directory, { recursive: true });
const ids = [
  "agent-accessibility-tree",
  "cumulative-layout-shift",
  "webmcp-form-coverage",
  "webmcp-registered-tools",
  "webmcp-schema-validity",
  "llms-txt",
  "ard-schema",
];
const records = [],
  errors = [];
for (const device of ["mobile", "desktop"]) {
  for (const route of ["/", "/free-inquiry-review/"]) {
    const output = path.resolve(
      directory,
      `${device}-${route === "/" ? "home" : "review"}.json`,
    );
    const result = spawnSync(
      process.execPath,
      [
        path.resolve("node_modules/lighthouse/cli/index.js"),
        base + route,
        "--quiet",
        "--output=json",
        `--output-path=${output}`,
        "--only-categories=agentic-browsing",
        ...(device === "desktop" ? ["--preset=desktop"] : []),
        "--chrome-flags=--headless --no-sandbox --disable-dev-shm-usage --enable-features=WebMCP",
        "--disable-full-page-screenshot",
      ],
      {
        env: { ...process.env, CHROME_PATH: chromium.executablePath() },
        stdio: "inherit",
        timeout: 180000,
      },
    );
    if (result.error || result.status !== 0)
      throw new Error(
        `Agentic audit could not complete for ${device} ${route}`,
      );
    const report = JSON.parse(await readFile(output, "utf8"));
    if (report.runtimeError)
      throw new Error(`Agentic audit runtime failure for ${device} ${route}`);
    const audits = ids.map((id) => {
      const a = report.audits[id];
      const record = {
        id,
        title: a?.title,
        score: a?.score,
        mode: a?.scoreDisplayMode,
        explanation: a?.explanation,
        warnings: a?.warnings,
      };
      if (
        !a ||
        ["error", "notApplicable"].includes(a.scoreDisplayMode) ||
        (a.score !== null && a.score < 1)
      )
        errors.push(`${device} ${route}: ${id} ${JSON.stringify(record)}`);
      return record;
    });
    const tools = JSON.stringify(
      report.audits["webmcp-registered-tools"]?.details || {},
    );
    for (const name of [
      "get_inquiry_removal_public_information",
      "find_inquiry_removal_guides",
      "prepare_free_inquiry_review",
    ]) {
      if (!tools.includes(name))
        errors.push(
          `${device} ${route}: real registered tool missing: ${name}`,
        );
    }
    records.push({
      device,
      route,
      lighthouseVersion: report.lighthouseVersion,
      audits,
    });
    console.log(
      `Agentic Browsing ${device} ${route}: ${JSON.stringify(audits)}`,
    );
  }
}
await writeFile(
  path.join(directory, "summary.json"),
  JSON.stringify({ records, errors }, null, 2),
);
if (errors.length) throw new Error(errors.join("\n"));
console.log(
  "All seven Agentic Browsing checks verified on mobile and desktop; all three registered tools present. Informative audit results are not misreported as weighted passes.",
);
