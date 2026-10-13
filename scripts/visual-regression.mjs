import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";
const origin = (
  process.env.SITE_URL || "https://www.inquiryremoval.com"
).replace(/\/$/, "");
const recordOnly = process.env.VISUAL_MODE === "record";
const baselineRoot = path.resolve("tests/visual-baselines"),
  out = ".artifacts/visual";
const samples = [
  ["home", "/"],
  ["pricing", "/pricing/"],
  ["review", "/free-inquiry-review/"],
  ["guide", "/how-long-do-hard-inquiries-stay/"],
];
const results = [],
  failures = [];
await mkdir(out, { recursive: true });
const browser = await chromium.launch({ headless: true });
try {
  for (const [device, viewport] of [
    ["desktop", { width: 1440, height: 1000 }],
    ["mobile", { width: 390, height: 844 }],
  ]) {
    for (const [name, route] of samples) {
      const context = await browser.newContext({
        viewport,
        deviceScaleFactor: 1,
        reducedMotion: "reduce",
        colorScheme: "light",
      });
      try {
        const page = await context.newPage();
        const response = await page.goto(origin + route, {
          waitUntil: "networkidle",
        });
        if (response?.status() !== 200)
          throw new Error("snapshot route did not load");
        await page.evaluate(() => document.fonts.ready);
        const file = `${device}-${name}.png`;
        const bytes = await page.screenshot({
          animations: "disabled",
          caret: "hide",
          fullPage: false,
        });
        await writeFile(path.join(out, file), bytes);
        if (recordOnly) {
          results.push({ file, status: "AWAITING_BASELINE_REVIEW" });
          continue;
        }
        const current = PNG.sync.read(bytes),
          baseline = PNG.sync.read(
            await readFile(path.join(baselineRoot, file)),
          );
        if (
          current.width !== baseline.width ||
          current.height !== baseline.height
        )
          throw new Error(`${file}: snapshot dimensions changed`);
        const changed = pixelmatch(
          baseline.data,
          current.data,
          null,
          current.width,
          current.height,
          { threshold: 0.15 },
        );
        const ratio = changed / (current.width * current.height);
        results.push({ file, changedPixels: changed, ratio, limit: 0.005 });
        if (ratio > 0.005)
          failures.push(
            `${file}: ${(ratio * 100).toFixed(2)}% changed pixels exceeds reviewed 0.5% limit`,
          );
      } finally {
        await context.close();
      }
    }
  }
} finally {
  await browser.close();
}
await writeFile(
  path.join(out, "results.json"),
  JSON.stringify(
    { mode: recordOnly ? "record-for-review" : "compare", results },
    null,
    2,
  ),
);
if (failures.length) throw new Error(failures.join("\n"));
console.log(
  recordOnly
    ? "Eight initial snapshots captured for review; visual comparison is not yet certified."
    : "Eight reviewed desktop/mobile visual snapshots match within the 0.5% tolerance.",
);
