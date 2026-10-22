import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import AxeBuilder from "@axe-core/playwright";
import { chromium } from "playwright";

const base = (process.env.SITE_URL || "https://www.inquiryremoval.com").replace(
  /\/$/,
  "",
);
const artifactDir = path.resolve(".artifacts/browser-smoke");
await mkdir(artifactDir, { recursive: true });

const failures = [];
const browser = await chromium.launch({ headless: true });

const expect = (condition, message) => {
  if (!condition) throw new Error(message);
};

const navigationMetrics = (page) =>
  page.evaluate(() => ({
    targetTop: document.querySelector("#specialists").getBoundingClientRect()
      .top,
    clearance: getComputedStyle(document.documentElement).scrollPaddingTop,
    jumpTop: document.querySelector(".page-jump").getBoundingClientRect().top,
    headerBottom: document
      .querySelector("[data-header]")
      .getBoundingClientRect().bottom,
    headerHidden: document
      .querySelector("[data-header]")
      .classList.contains("is-hidden"),
    rootHidden: document.documentElement.classList.contains("header-is-hidden"),
    scrollY: window.scrollY,
  }));

const checkAccessibility = async (name, page) => {
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
    .analyze();

  await writeFile(
    path.join(artifactDir, `${name}-axe.json`),
    JSON.stringify(results, null, 2),
    "utf8",
  );

  const severe = results.violations.filter((violation) =>
    ["serious", "critical"].includes(violation.impact ?? ""),
  );

  if (!severe.length) return;

  const summary = severe
    .map((violation) => {
      const targets = violation.nodes
        .slice(0, 4)
        .flatMap((node) => node.target)
        .join(", ");
      return `${violation.id} (${violation.impact}): ${violation.help}${targets ? ` [${targets}]` : ""}`;
    })
    .join(" | ");

  failures.push(
    `${name}: serious/critical accessibility violations: ${summary}`,
  );
};

const run = async (name, viewport, test, contextOptions = {}) => {
  const context = await browser.newContext({ viewport, ...contextOptions });
  const page = await context.newPage();
  const consoleErrors = [];
  const pageErrors = [];
  const failedLocalRequests = [];

  page.on("console", (message) => {
    if (message.type() !== "error") return;
    const text = message.text();
    if (name === "review-module-fallback" && text.includes("net::ERR_FAILED"))
      return;
    if (
      name === "not-found" &&
      text.includes(
        "Failed to load resource: the server responded with a status of 404",
      )
    ) {
      return;
    }
    consoleErrors.push(text);
  });
  page.on("pageerror", (error) => pageErrors.push(error.message));
  page.on("requestfailed", (request) => {
    if (
      name === "review-module-fallback" &&
      request.resourceType() === "script"
    )
      return;
    if (request.url().startsWith(base))
      failedLocalRequests.push(
        `${request.method()} ${request.url()} ${request.failure()?.errorText ?? "failed"}`,
      );
  });

  try {
    await test(page);
    if (consoleErrors.length)
      failures.push(`${name}: console errors: ${consoleErrors.join(" | ")}`);
    if (pageErrors.length)
      failures.push(`${name}: page errors: ${pageErrors.join(" | ")}`);
    if (failedLocalRequests.length)
      failures.push(
        `${name}: failed same-origin requests: ${failedLocalRequests.join(" | ")}`,
      );
  } catch (error) {
    failures.push(
      `${name}: ${error instanceof Error ? error.message : "browser test failed"}`,
    );
  } finally {
    await page
      .screenshot({
        path: path.join(artifactDir, `${name}.png`),
        fullPage: true,
      })
      .catch(() => {});
    await context.close();
  }
};

await run("desktop-home", { width: 1440, height: 1000 }, async (page) => {
  const response = await page.goto(`${base}/`, { waitUntil: "networkidle" });
  expect(response?.status() === 200, `homepage returned ${response?.status()}`);
  const responseHeaders = response?.headers() ?? {};
  const csp = responseHeaders["content-security-policy"] ?? "";
  expect(Boolean(csp), "homepage is missing enforced Content-Security-Policy");
  expect(
    !responseHeaders["content-security-policy-report-only"],
    "homepage still exposes a report-only CSP instead of enforcement",
  );
  expect(
    csp.includes("default-src 'self'"),
    "homepage CSP is missing the default self restriction",
  );
  expect(
    csp.includes("https://fonts.googleapis.com"),
    "homepage CSP is missing the approved Google Fonts origin",
  );
  const scriptPolicy =
    csp
      .split(";")
      .find((directive) => directive.trim().startsWith("script-src ")) ?? "";
  expect(
    !scriptPolicy.includes("'unsafe-inline'") &&
      !scriptPolicy.includes("'unsafe-eval'"),
    "script CSP still permits unsafe inline/eval code",
  );
  expect(
    csp.includes("script-src-attr 'none'"),
    "inline event handlers are not explicitly blocked",
  );
  expect(await page.locator("h1").isVisible(), "homepage H1 is not visible");
  expect(
    await page.locator("footer.site-footer").isVisible(),
    "footer is not visible",
  );
  expect(
    !(await page.locator("[data-labor-day-announcement]").isVisible()),
    "Labor Day announcement should remain hidden on desktop",
  );
  expect(
    (await page.locator('link[rel="canonical"]').getAttribute("href")) ===
      `${base}/`,
    "homepage canonical is unexpected",
  );
  expect(
    await page.locator('a[href="/duplicate-inquiries/"]').first().isVisible(),
    "homepage duplicate inquiry card does not link directly to its guide",
  );
  expect(
    await page
      .locator('a[href="/incorrect-person-inquiries/"]')
      .first()
      .isVisible(),
    "homepage incorrect-person card does not link directly to its guide",
  );
  expect(
    await page
      .locator('a[href="/authorized-inquiry-removal/"]')
      .first()
      .isVisible(),
    "homepage authorized-review card does not link directly to its guide",
  );
  await page.getByRole("tab", { name: "Experian", exact: true }).click();
  expect(
    (await page
      .getByRole("tab", { name: "Experian", exact: true })
      .getAttribute("aria-selected")) === "true",
    "homepage bureau tab does not respond to pointer clicks",
  );
  await page.getByRole("tab", { name: "All 3", exact: true }).click();
  const firstTab = page.getByRole("tab", { name: "All 3", exact: true });
  await firstTab.press("ArrowRight");
  expect(
    (await page
      .getByRole("tab", { name: "Experian", exact: true })
      .getAttribute("aria-selected")) === "true",
    "bureau tabs ignore keyboard arrows",
  );
  expect(
    (await page.locator('[role="tab"][tabindex="0"]').count()) === 1,
    "bureau tab focus is not roving",
  );
  await page.getByRole("tab", { name: "Experian", exact: true }).press("End");
  expect(
    (await page
      .getByRole("tab", { name: "TransUnion", exact: true })
      .getAttribute("aria-selected")) === "true",
    "bureau tabs ignore End",
  );
  await page
    .getByRole("tab", { name: "TransUnion", exact: true })
    .press("Home");
  expect(
    (await firstTab.getAttribute("aria-selected")) === "true",
    "bureau tabs ignore Home",
  );
  await page.locator('.page-jump a[href="#specialists"]').click();
  await page
    .waitForFunction(() => {
      const targetTop = document
        .querySelector("#specialists")
        .getBoundingClientRect().top;
      const clearance = Number.parseFloat(
        getComputedStyle(document.documentElement).scrollPaddingTop,
      );
      // Wait for the anchor scroll to finish before reversing direction. The
      // jump bar reaches its sticky position before the smooth scroll settles.
      return (
        Math.abs(targetTop - clearance) <= 4 &&
        document.documentElement.classList.contains("header-is-hidden") &&
        document.querySelector(".page-jump").getBoundingClientRect().top <= 12
      );
    })
    .catch(async () => {
      throw new Error(
        `chapter anchor did not settle: ${JSON.stringify(await navigationMetrics(page))}`,
      );
    });
  // Being within four pixels of the target does not mean the compositor has
  // completed the smooth anchor scroll. Require an unchanged position across
  // consecutive animation frames before introducing another input gesture.
  await page.evaluate(
    () =>
      new Promise((resolve, reject) => {
        let previous = window.scrollY;
        let stableFrames = 0;
        let frames = 0;
        const sample = () => {
          const current = window.scrollY;
          stableFrames = current === previous ? stableFrames + 1 : 0;
          previous = current;
          if (stableFrames >= 12) return resolve();
          if (++frames >= 300)
            return reject(new Error("anchor scroll never stopped"));
          requestAnimationFrame(sample);
        };
        requestAnimationFrame(sample);
      }),
  );
  const beforeWheel = await navigationMetrics(page);
  await page.mouse.move(1100, 500);
  await page.mouse.wheel(0, -240);
  await page
    .waitForFunction(
      (previousY) => window.scrollY < previousY - 8,
      beforeWheel.scrollY,
    )
    .catch(async () => {
      throw new Error(
        `upward wheel did not move the page: ${JSON.stringify(await navigationMetrics(page))}`,
      );
    });
  await page
    .waitForFunction(() => {
      const header = document.querySelector("[data-header]");
      const jump = document.querySelector(".page-jump");
      return (
        !header.classList.contains("is-hidden") &&
        jump.getBoundingClientRect().top >=
          header.getBoundingClientRect().bottom
      );
    })
    .catch(async () => {
      throw new Error(
        `upward scroll did not restore header clearance: ${JSON.stringify(await navigationMetrics(page))}`,
      );
    });
  await checkAccessibility("desktop-home", page);
});

await run("desktop-pricing", { width: 1440, height: 1000 }, async (page) => {
  const response = await page.goto(`${base}/pricing/`, {
    waitUntil: "networkidle",
  });
  expect(response?.status() === 200, `pricing returned ${response?.status()}`);
  expect(await page.locator("h1").isVisible(), "pricing H1 is not visible");
  expect(
    (await page.locator(".pricing-plan-card").count()) === 4,
    "pricing must show four plans",
  );
  expect(
    (await page.locator(".popular").count()) === 0,
    "unverified popularity badge remains",
  );
  expect(
    (await page.locator(".pricing-table thead th").count()) === 5,
    "comparison must contain all four plans",
  );
  for (const [id, price, range] of [
    ["focused", "$199", "1 to 10"],
    ["expanded", "$299", "11 to 20"],
    ["complete", "$399", "21 to 30"],
    ["extensive", "$499", "31 or more"],
  ]) {
    const card = page.locator(`#plan-${id}`);
    expect(
      (await card.locator("h3").innerText()) === price,
      `${id} price mismatch`,
    );
    expect(
      (await card.innerText()).includes(`${range} total hard inquiries`),
      `${id} range mismatch`,
    );
    expect(
      (await card.locator("a").getAttribute("href")) ===
        `/free-inquiry-review/?plan=${id}`,
      `${id} link mismatch`,
    );
    await page.locator(`[data-plan-choice='${id}']`).click();
    expect(
      (await page.locator("[data-result-name]").innerText()).includes(price),
      `${id} selector price mismatch`,
    );
    expect(
      (await page.locator("[data-result-link]").getAttribute("href")) ===
        `#plan-${id}`,
      `${id} selector destination mismatch`,
    );
  }
  await checkAccessibility("desktop-pricing", page);
});

await run("desktop-resources", { width: 1440, height: 1000 }, async (page) => {
  const response = await page.goto(`${base}/resources/`, {
    waitUntil: "networkidle",
  });
  expect(
    response?.status() === 200,
    `resources returned ${response?.status()}`,
  );
  expect(await page.locator("h1").isVisible(), "resources H1 is not visible");
  expect(
    (await page.locator(".resource-hub__group").count()) === 7,
    "resources hub does not contain seven guide clusters",
  );
  expect(
    (await page.locator(".resource-card").count()) >= 35,
    "resources hub is missing expected guide cards",
  );
  expect(
    await page.locator('a[href="/duplicate-inquiries/"]').first().isVisible(),
    "duplicate-inquiry guide is not exposed in Resources",
  );
  expect(
    await page
      .locator('a[href="/permissible-purpose-hard-inquiries/"]')
      .first()
      .isVisible(),
    "permissible-purpose guide is not exposed in Resources",
  );
  await checkAccessibility("desktop-resources", page);
});

await run("desktop-article", { width: 1440, height: 1000 }, async (page) => {
  const response = await page.goto(`${base}/what-is-a-hard-inquiry/`, {
    waitUntil: "networkidle",
  });
  expect(response?.status() === 200, `article returned ${response?.status()}`);
  expect(
    (await page.locator('meta[property="og:type"]').getAttribute("content")) ===
      "article",
    "article Open Graph type is not article",
  );
  expect(await page.locator("h1").isVisible(), "article H1 is not visible");
  await checkAccessibility("desktop-article", page);
});

await run("mobile-home", { width: 390, height: 844 }, async (page) => {
  const response = await page.goto(`${base}/`, { waitUntil: "networkidle" });
  expect(response?.status() === 200, `homepage returned ${response?.status()}`);

  expect(
    await page.locator("h1").isVisible(),
    "mobile homepage H1 is not visible",
  );
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
    "mobile homepage overflows horizontally",
  );
  // The September campaign is expired; do not require an obsolete promotion.
  expect(
    !(await page.locator("[data-labor-day-announcement]").isVisible()),
    "expired Labor Day offer is still visible",
  );
  await checkAccessibility("mobile-home", page);
});

for (const width of [320, 768, 1024]) {
  await run(`resources-${width}`, { width, height: 1024 }, async (page) => {
    await page.goto(`${base}/resources/`, { waitUntil: "networkidle" });
    const widths = await page
      .locator(".resource-card h3")
      .evaluateAll((nodes) =>
        nodes.map((node) => node.getBoundingClientRect().width),
      );
    expect(
      widths.length > 0 && widths.every((width) => width >= 200),
      "resource card text columns are too narrow",
    );
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      "resources page overflows horizontally",
    );
  });
}

await run("small-phone-results", { width: 320, height: 844 }, async (page) => {
  await page.goto(`${base}/results/`, { waitUntil: "networkidle" });
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
    "Results page overflows on a small phone",
  );
});

await run("mobile-menu-header", { width: 390, height: 844 }, async (page) => {
  await page.goto(`${base}/`, { waitUntil: "networkidle" });
  const menu = page.locator("[data-menu-button]");
  await menu.click();
  expect(
    (await menu.getAttribute("aria-expanded")) === "true",
    "header menu did not open",
  );
  expect(
    await page
      .locator("[data-mobile-nav]")
      .evaluate((node) => node.classList.contains("is-open")),
    "mobile navigation lacks is-open state",
  );
  expect(
    (await page
      .locator("[data-mobile-nav]")
      .evaluate((node) => getComputedStyle(node).backgroundColor)) ===
      "rgb(255, 255, 255)",
    "mobile menu background allows page text to show through",
  );
  await page.keyboard.press("Escape");
  expect(
    (await menu.getAttribute("aria-expanded")) === "false",
    "Escape did not close header menu",
  );
  expect(
    await menu.evaluate((node) => document.activeElement === node),
    "focus did not return to header menu trigger",
  );
});

await run("mobile-menu-dock", { width: 390, height: 844 }, async (page) => {
  await page.goto(`${base}/`, { waitUntil: "networkidle" });
  await page.evaluate(() => window.scrollTo(0, 1200));
  await page.waitForTimeout(350);
  const dockMenu = page.locator("[data-dock-menu]");
  expect(
    await dockMenu.isVisible(),
    "mobile action dock menu is not visible after scrolling",
  );
  await dockMenu.click();
  expect(
    (await dockMenu.getAttribute("aria-expanded")) === "true",
    "dock menu did not open",
  );
  await page.keyboard.press("Escape");
  expect(
    await dockMenu.evaluate((node) => document.activeElement === node),
    "focus did not return to dock trigger",
  );
});

await run(
  "mobile-review-prefill",
  { width: 390, height: 844 },
  async (page) => {
    const response = await page.goto(
      `${base}/free-inquiry-review/?context=duplicate-inquiries#online-review`,
      {
        waitUntil: "networkidle",
      },
    );
    expect(
      response?.status() === 200,
      `review page returned ${response?.status()}`,
    );
    const form = page.locator("[data-review-form]");
    expect(await form.isVisible(), "review form is not visible");
    expect(
      (await form.getAttribute("action")) === "/api/free-review",
      "review form action is unexpected",
    );
    const duplicate = page.locator(
      "input[value='The inquiry appears to be a duplicate']",
    );
    expect(
      await duplicate.isChecked(),
      "duplicate-inquiry context was not prefilled",
    );

    await page.locator("[data-review-next]").click();
    expect(
      await page.locator("[data-review-step='1']").isVisible(),
      "empty contact step advanced without required fields",
    );

    await page
      .locator(`input[name='entry.1443643242']`)
      .fill("Browser Smoke Test");
    await page
      .locator(`input[name='entry.1525553918']`)
      .fill("smoke@example.com");
    await page.locator(`input[name='entry.330440410']`).fill("6025550100");
    await page.locator("[data-review-next]").click();
    expect(
      await page.locator("[data-review-step='2']").isVisible(),
      "review form did not advance to step 2",
    );
    const expectStepStart = async () => {
      await page.waitForFunction(() => {
        const top = document
          .querySelector("[data-review-progress-wrap]")
          .getBoundingClientRect().top;
        return top >= 68 && top <= 120;
      });
    };
    await expectStepStart();
    await page.locator("[data-review-back]").click();
    await expectStepStart();
    expect(
      (await page.locator("input[autocomplete='name']").inputValue()) ===
        "Browser Smoke Test",
      "Back cleared contact information",
    );
    await page.locator("[data-review-next]").click();
    const chooseOption = async (value) => {
      const input = page.locator(`input[value=${JSON.stringify(value)}]`);
      // The native input is intentionally transparent and non-pointer-active;
      // customers interact with its associated visible choice-card label.
      await page.locator("label.form-choice").filter({ has: input }).click();
      expect(await input.isChecked(), `choice ${value} was not selected`);
    };
    await chooseOption("A home loan");
    await page.locator("[data-review-next]").click();
    await expectStepStart();
    await chooseOption("1–10");
    await chooseOption("TransUnion");
    await chooseOption("Yes");
    await page.locator("[data-review-step='4']").waitFor({ state: "visible" });
    await expectStepStart();
    expect(
      !(await page.locator("[data-review-next]").isVisible()),
      "Continue is visible alongside final Submit",
    );
    expect(
      await page.locator("[data-review-submit]").isVisible(),
      "final Submit is not visible",
    );
    expect(
      (await page.locator("textarea").getAttribute("required")) === null,
      "optional note is required",
    );
    expect(
      (await page
        .locator("[data-back-to-top]")
        .evaluate((node) => getComputedStyle(node).pointerEvents)) === "none",
      "Top shortcut can overlap review controls",
    );
    // Deliberately stop here: no test lead is sent to the production backend.
    await checkAccessibility("mobile-review-prefill", page);
  },
);

await run("not-found", { width: 1280, height: 900 }, async (page) => {
  const response = await page.goto(
    `${base}/browser-smoke-not-found-${Date.now()}/`,
    {
      waitUntil: "networkidle",
    },
  );
  expect(
    response?.status() === 404,
    `missing route returned ${response?.status()}`,
  );
  const robots = await page
    .locator('meta[name="robots"]')
    .getAttribute("content");
  expect(robots?.includes("noindex"), "404 page is missing noindex");
});

const expectNativeFallback = async (page) => {
  const form = page.locator("[data-review-form]");
  expect(await form.isVisible(), "native fallback form is not visible");
  expect(
    !(await form.evaluate((node) => node.noValidate)),
    "native validation was disabled without enhancement",
  );
  for (const step of await page.locator("[data-review-step]").all())
    expect(await step.isVisible(), "a fallback form step is hidden");
  expect(
    await page.locator(".review-noscript-submit").isVisible(),
    "fallback Submit is hidden",
  );
  expect(
    !(await page.locator("[data-review-next]").isVisible()),
    "inactive Continue is visible in fallback",
  );
  const concealed = await page
    .locator("[data-reveal]")
    .evaluateAll(
      (nodes) =>
        nodes.filter((node) => getComputedStyle(node).opacity === "0").length,
    );
  expect(
    concealed === 0,
    `${concealed} content regions depend on JavaScript to become visible`,
  );
};

await run(
  "no-javascript-home",
  { width: 1440, height: 1000 },
  async (page) => {
    await page.goto(`${base}/`, { waitUntil: "networkidle" });
    await expectNativeFallback(page);
  },
  { javaScriptEnabled: false, reducedMotion: "no-preference" },
);

await run(
  "no-javascript-review",
  { width: 390, height: 844 },
  async (page) => {
    await page.goto(`${base}/free-inquiry-review/`, {
      waitUntil: "networkidle",
    });
    await expectNativeFallback(page);
  },
  { javaScriptEnabled: false, reducedMotion: "no-preference" },
);

await run(
  "review-module-fallback",
  { width: 390, height: 844 },
  async (page) => {
    await page.route("**/_astro/*.js", (route) => route.abort());
    await page.goto(`${base}/free-inquiry-review/`, {
      waitUntil: "networkidle",
    });
    await expectNativeFallback(page);
  },
  { reducedMotion: "no-preference" },
);

await run("keyboard-mobile-menu", { width: 390, height: 844 }, async (page) => {
  await page.goto(`${base}/`, { waitUntil: "networkidle" });
  const trigger = page.locator("[data-menu-button]");
  await trigger.press("Enter");
  await page.waitForFunction(() =>
    document
      .querySelector("[data-mobile-nav]")
      .contains(document.activeElement),
  );
  expect(
    await page.locator("main").evaluate((node) => node.inert),
    "mobile overlay leaves background keyboard-accessible",
  );
  for (let index = 0; index < 18; index++) {
    await page.keyboard.press("Tab");
    expect(
      await page.evaluate(() =>
        document
          .querySelector("[data-header]")
          .contains(document.activeElement),
      ),
      "keyboard focus escaped the open menu",
    );
  }
  await page.keyboard.press("Escape");
  expect(
    (await trigger.getAttribute("aria-expanded")) === "false",
    "Escape did not close the menu",
  );
  expect(
    await trigger.evaluate((node) => document.activeElement === node),
    "Escape did not restore trigger focus",
  );
  expect(
    !(await page.locator("main").evaluate((node) => node.inert)),
    "closed menu leaves content inert",
  );
});

await run(
  "reduced-motion-home",
  { width: 1440, height: 1000 },
  async (page) => {
    await page.goto(`${base}/`, { waitUntil: "networkidle" });
    expect(
      await page.evaluate(
        () =>
          getComputedStyle(document.documentElement).scrollBehavior === "auto",
      ),
      "reduced motion still forces smooth scrolling",
    );
    expect(
      await page.locator("h1").isVisible(),
      "reduced motion hides the heading",
    );
    expect(
      (await page.locator(".reveal-animate").count()) === 0,
      "reduced motion still starts reveal animations",
    );
  },
  { reducedMotion: "reduce" },
);

for (const width of [320, 720, 768, 1024]) {
  await run(`reflow-review-${width}`, { width, height: 1000 }, async (page) => {
    await page.goto(`${base}/free-inquiry-review/`, {
      waitUntil: "networkidle",
    });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      "review has horizontal overflow at the reflow width",
    );
    expect(
      await page.locator("[data-review-form].is-enhanced").isVisible(),
      "review enhancement failed at reflow width",
    );
    await page.locator("[data-review-next]").click();
    expect(
      await page.locator('[aria-invalid="true"]').isVisible(),
      "missing field is not identified at reflow width",
    );
  });
}

await run(
  "dark-os-review",
  { width: 390, height: 844 },
  async (page) => {
    await page.goto(`${base}/free-inquiry-review/`, {
      waitUntil: "networkidle",
    });
    const colors = await page
      .locator('[data-review-step="1"] input:not([type="hidden"])')
      .evaluateAll((nodes) =>
        nodes.map((node) => ({
          background: getComputedStyle(node).backgroundColor,
          color: getComputedStyle(node).color,
        })),
      );
    expect(
      colors.length >= 3 &&
        colors.every(
          (color) =>
            color.background === "rgb(255, 255, 255)" &&
            color.color === "rgb(23, 32, 51)",
        ),
      "OS dark mode changes contact-field contrast",
    );
  },
  { colorScheme: "dark" },
);

for (const width of [390, 768, 1440]) {
  await run(`private-tools-${width}`, { width, height: 900 }, async (page) => {
    let toolPosts = 0;
    page.on("request", (request) => {
      if (
        request.method() === "POST" &&
        request.url().includes("/api/free-review")
      )
        toolPosts++;
    });
    await page.goto(
      `${base}/how-long-do-hard-inquiries-stay/#practical-tools`,
      { waitUntil: "networkidle" },
    );
    await page.locator("[data-tool-estimate]").click();
    expect(
      (await page.locator("[data-tool-date]").getAttribute("aria-invalid")) ===
        "true",
      "empty estimator date did not produce an accessible error",
    );
    await page.locator("[data-tool-date]").fill("2024-02-29");
    await page.locator("[data-tool-estimate]").click();
    expect(
      (await page.locator("[data-tool-output]").innerText()).includes(
        "February 28, 2026",
      ),
      "leap-day estimate is wrong",
    );
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      "tool page has horizontal overflow",
    );
    await checkAccessibility(`private-age-${width}`, page);
    await page.goto(`${base}/hard-inquiry-removal-letter/#practical-tools`, {
      waitUntil: "networkidle",
    });
    const sample = await page.locator("[data-tool-text]").inputValue();
    expect(
      sample.includes("[exact company name]") &&
        sample.includes("Attachments:"),
      "complete ungated letter sample is missing",
    );
    await page.locator("[data-tool-text]").fill(sample + "\nPrivate test edit");
    const downloadReady = page.waitForEvent("download");
    await page.locator("[data-tool-download]").click();
    const download = await downloadReady;
    expect(
      download.suggestedFilename() === "inquiry-letter-sample.txt",
      "letter download filename is wrong",
    );
    expect(toolPosts === 0, "a private tool submitted a review request");
    await checkAccessibility(`private-letter-${width}`, page);
    await page.goto(
      `${base}/best-hard-inquiry-removal-services/#practical-next-steps`,
      { waitUntil: "networkidle" },
    );
    expect(
      await page
        .locator(".practical-content")
        .getByText("Inquiry Removers", { exact: true })
        .isVisible(),
      "sourced provider comparison is missing",
    );
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      "comparison table causes page overflow",
    );
    await checkAccessibility(`provider-comparison-${width}`, page);
  });
}
for (const viewport of [
  { width: 1440, height: 900 },
  { width: 1905, height: 774 },
]) {
  await run(`hero-action-${viewport.width}`, viewport, async (page) => {
    await page.goto(base + "/", { waitUntil: "networkidle" });
    const clearance = await page.evaluate(() => ({
      eyebrow: document
        .querySelector(".hero-copy .eyebrow")
        .getBoundingClientRect().top,
      header: document.querySelector("[data-header]").getBoundingClientRect()
        .bottom,
      action: document
        .querySelector('[data-track="home-hero-guided"]')
        .getBoundingClientRect().bottom,
      height: innerHeight,
    }));
    expect(
      clearance.eyebrow > clearance.header + 16,
      "homepage opening overlaps or crowds the fixed navigation",
    );
    expect(
      clearance.action < clearance.height,
      "homepage primary action is below the first screen",
    );
  });
}

const editorialInventory = JSON.parse(
  await readFile("src/data/editorialPlan.json", "utf8"),
);
for (const width of [320, 768, 1440]) {
  await run(
    `all-pages-reflow-${width}`,
    { width, height: 900 },
    async (page) => {
      for (const [route, revision] of Object.entries(editorialInventory)) {
        const response = await page.goto(base + route, {
          waitUntil: "networkidle",
        });
        expect(response?.status() === 200, route + " did not load");
        expect(
          (await page.locator("h1").innerText()).trim() === revision.title,
          route + " H1 differs from its research brief",
        );
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth,
          ),
          route + " overflows at " + width,
        );
      }
    },
  );
}

const apiContext = await browser.newContext();
const apiResponse = await apiContext.request.get(`${base}/api/free-review`);
if (apiResponse.status() !== 405)
  failures.push(
    `review API GET expected 405, received ${apiResponse.status()}`,
  );
await apiContext.close();

await browser.close();

if (failures.length) {
  console.error("Browser smoke test failed:\n");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Browser and accessibility smoke tests passed against ${base}.`);
