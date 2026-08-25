import { mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const base = (process.env.SITE_URL || "https://www.inquiryremoval.com").replace(/\/$/, "");
const artifactDir = path.resolve(".artifacts/browser-smoke");
await mkdir(artifactDir, { recursive: true });

const failures = [];
const browser = await chromium.launch({ headless: true });

const run = async (name, viewport, test) => {
  const context = await browser.newContext({ viewport });
  const page = await context.newPage();
  const consoleErrors = [];
  const pageErrors = [];
  const failedLocalRequests = [];

  page.on("console", (message) => {
    if (message.type() !== "error") return;
    const text = message.text();
    if (
      name === "not-found" &&
      text.includes("Failed to load resource: the server responded with a status of 404")
    ) {
      return;
    }
    consoleErrors.push(text);
  });
  page.on("pageerror", (error) => pageErrors.push(error.message));
  page.on("requestfailed", (request) => {
    if (request.url().startsWith(base))
      failedLocalRequests.push(`${request.method()} ${request.url()} ${request.failure()?.errorText ?? "failed"}`);
  });

  try {
    await test(page);
    if (consoleErrors.length) failures.push(`${name}: console errors: ${consoleErrors.join(" | ")}`);
    if (pageErrors.length) failures.push(`${name}: page errors: ${pageErrors.join(" | ")}`);
    if (failedLocalRequests.length)
      failures.push(`${name}: failed same-origin requests: ${failedLocalRequests.join(" | ")}`);
  } catch (error) {
    failures.push(`${name}: ${error instanceof Error ? error.message : "browser test failed"}`);
  } finally {
    await page.screenshot({
      path: path.join(artifactDir, `${name}.png`),
      fullPage: true,
    }).catch(() => {});
    await context.close();
  }
};

const expect = (condition, message) => {
  if (!condition) throw new Error(message);
};

await run("desktop-home", { width: 1440, height: 1000 }, async (page) => {
  const response = await page.goto(`${base}/`, { waitUntil: "networkidle" });
  expect(response?.status() === 200, `homepage returned ${response?.status()}`);
  expect(await page.locator("h1").isVisible(), "homepage H1 is not visible");
  expect(await page.locator("footer.site-footer").isVisible(), "footer is not visible");
  expect(
    (await page.locator('link[rel="canonical"]').getAttribute("href")) === `${base}/`,
    "homepage canonical is unexpected",
  );
});

await run("desktop-pricing", { width: 1440, height: 1000 }, async (page) => {
  const response = await page.goto(`${base}/pricing/`, { waitUntil: "networkidle" });
  expect(response?.status() === 200, `pricing returned ${response?.status()}`);
  expect(await page.locator("h1").isVisible(), "pricing H1 is not visible");
  const popular = page.locator(".popular").first();
  expect(await popular.isVisible(), "Most Popular badge is not visible");
});

await run("desktop-resources", { width: 1440, height: 1000 }, async (page) => {
  const response = await page.goto(`${base}/resources/`, { waitUntil: "networkidle" });
  expect(response?.status() === 200, `resources returned ${response?.status()}`);
  expect(await page.locator("h1").isVisible(), "resources H1 is not visible");
  expect((await page.locator(".resource-hub__group").count()) === 7, "resources hub does not contain seven guide clusters");
  expect((await page.locator(".resource-card").count()) >= 35, "resources hub is missing expected guide cards");
  expect(await page.locator('a[href="/duplicate-inquiries/"]').first().isVisible(), "duplicate-inquiry guide is not exposed in Resources");
  expect(await page.locator('a[href="/permissible-purpose-hard-inquiries/"]').first().isVisible(), "permissible-purpose guide is not exposed in Resources");
});

await run("mobile-menu-header", { width: 390, height: 844 }, async (page) => {
  await page.goto(`${base}/`, { waitUntil: "networkidle" });
  const menu = page.locator("[data-menu-button]");
  await menu.click();
  expect((await menu.getAttribute("aria-expanded")) === "true", "header menu did not open");
  expect(await page.locator("[data-mobile-nav]").evaluate((node) => node.classList.contains("is-open")), "mobile navigation lacks is-open state");
  await page.keyboard.press("Escape");
  expect((await menu.getAttribute("aria-expanded")) === "false", "Escape did not close header menu");
  expect(await menu.evaluate((node) => document.activeElement === node), "focus did not return to header menu trigger");
});

await run("mobile-menu-dock", { width: 390, height: 844 }, async (page) => {
  await page.goto(`${base}/`, { waitUntil: "networkidle" });
  await page.evaluate(() => window.scrollTo(0, 1200));
  await page.waitForTimeout(350);
  const dockMenu = page.locator("[data-dock-menu]");
  expect(await dockMenu.isVisible(), "mobile action dock menu is not visible after scrolling");
  await dockMenu.click();
  expect((await dockMenu.getAttribute("aria-expanded")) === "true", "dock menu did not open");
  await page.keyboard.press("Escape");
  expect(await dockMenu.evaluate((node) => document.activeElement === node), "focus did not return to dock trigger");
});

await run("mobile-review-prefill", { width: 390, height: 844 }, async (page) => {
  const response = await page.goto(`${base}/free-inquiry-review/?context=duplicate-inquiries#online-review`, {
    waitUntil: "networkidle",
  });
  expect(response?.status() === 200, `review page returned ${response?.status()}`);
  const form = page.locator("[data-review-form]");
  expect(await form.isVisible(), "review form is not visible");
  expect((await form.getAttribute("action")) === "/api/free-review", "review form action is unexpected");
  const duplicate = page.locator("input[value='The inquiry appears to be a duplicate']");
  expect(await duplicate.isChecked(), "duplicate-inquiry context was not prefilled");

  await page.locator(`input[name='entry.1443643242']`).fill("Browser Smoke Test");
  await page.locator(`input[name='entry.1525553918']`).fill("smoke@example.com");
  await page.locator(`input[name='entry.330440410']`).fill("6025550100");
  await page.locator("[data-review-next]").click();
  expect(await page.locator("[data-review-step='2']").isVisible(), "review form did not advance to step 2");
});

await run("not-found", { width: 1280, height: 900 }, async (page) => {
  const response = await page.goto(`${base}/browser-smoke-not-found-${Date.now()}/`, {
    waitUntil: "networkidle",
  });
  expect(response?.status() === 404, `missing route returned ${response?.status()}`);
  const robots = await page.locator('meta[name="robots"]').getAttribute("content");
  expect(robots?.includes("noindex"), "404 page is missing noindex");
});

const apiContext = await browser.newContext();
const apiResponse = await apiContext.request.get(`${base}/api/free-review`);
if (apiResponse.status() !== 405)
  failures.push(`review API GET expected 405, received ${apiResponse.status()}`);
await apiContext.close();

await browser.close();

if (failures.length) {
  console.error("Browser smoke test failed:\n");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Browser smoke test passed against ${base}.`);
