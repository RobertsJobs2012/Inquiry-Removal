import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import ts from "typescript";
import {
  PRICING_PLANS,
  INQUIRY_COUNTS,
  PLAN_MAP,
  getPlanForInquiryCount,
} from "../src/data/pricing.ts";

test("four authoritative plans, review ranges, and maximum price", () => {
  assert.deepEqual(
    PRICING_PLANS.map(({ id, price, range }) => [id, price, range]),
    [
      ["focused", "$199", "1–10"],
      ["expanded", "$299", "11–20"],
      ["complete", "$399", "21–30"],
      ["extensive", "$499", "31 or more"],
    ],
  );
  assert.deepEqual(INQUIRY_COUNTS, [
    "1–10",
    "11–20",
    "21–30",
    "31 or more",
    "I am not sure",
  ]);
  for (const plan of PRICING_PLANS) assert.equal(PLAN_MAP[plan.id], plan.range);
  for (const [count, price] of [
    [1, 199],
    [10, 199],
    [11, 299],
    [20, 299],
    [21, 399],
    [30, 399],
    [31, 499],
    [40, 499],
    [50, 499],
    [60, 499],
    [100, 499],
    [1000, 499],
    [Number.MAX_SAFE_INTEGER, 499],
  ]) {
    assert.equal(
      getPlanForInquiryCount(count)?.price,
      `$${price}`,
      `count ${count}`,
    );
  }
  for (const count of [0, -1, 1.5, NaN, Infinity])
    assert.equal(getPlanForInquiryCount(count), undefined);
});

test("no stale ranges or three-tier prices in website source", () => {
  function scan(dir) {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const file = join(dir, entry.name);
      if (entry.isDirectory()) scan(file);
      else if (/\.(astro|ts|js|mjs|txt|json)$/.test(file)) {
        const source = readFileSync(file, "utf8");
        assert.doesNotMatch(
          source,
          /11(?:–|-| to )30|three one-time plans|Three clear inquiry ranges|Most Popular|\$199, \$299, (?:and|or) \$499/i,
          file,
        );
      }
    }
  }
  for (const dir of ["src", "api", "public"]) scan(dir);
});

// Compile the actual API and its shared constants in memory. Never send a
// test lead or contact-consent assertion to the live Google Forms backend.
function moduleUrl(file, replacements = {}) {
  let source = readFileSync(file, "utf8");
  for (const [specifier, url] of Object.entries(replacements))
    source = source.replaceAll(`"${specifier}"`, JSON.stringify(url));
  const js = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2022,
    },
  }).outputText;
  return `data:text/javascript;base64,${Buffer.from(js).toString("base64")}`;
}

test("API accepts all new ranges, preserves payload values, and rejects stale input", async () => {
  const pricingUrl = moduleUrl("src/data/pricing.ts");
  const reviewUrl = moduleUrl("src/data/reviewForm.ts", {
    "./pricing.js": pricingUrl,
  });
  const { POST } = await import(
    moduleUrl("api/free-review.ts", { "../src/data/reviewForm.js": reviewUrl })
  );
  const {
    REVIEW_FIELDS: f,
    CONTACT_CONSENT,
    GOOGLE_REVIEW_FORM_ACTION,
  } = await import(reviewUrl);
  const originalFetch = globalThis.fetch;
  const calls = [];
  globalThis.fetch = async (url, options) => {
    assert.equal(url, GOOGLE_REVIEW_FORM_ACTION);
    calls.push(new URLSearchParams(options.body));
    return new Response("mock acceptance", { status: 200 });
  };
  try {
    for (const count of [...INQUIRY_COUNTS, "11–30", "21–30 ", "41+"]) {
      const data = new URLSearchParams({
        [f.name]: "Pricing QA",
        [f.email]: "pricing-qa@example.invalid",
        [f.phone]: "2025550123",
        [f.goal]: "A home loan",
        [f.situation]: "I did not authorize the inquiry",
        [f.count]: count,
        [f.bureau]: "Experian",
        [f.reports]: "Yes",
        [f.contactMethod]: "Email",
        [f.consent]: CONTACT_CONSENT,
        source_page: "/pricing/",
        source_context: "plan-expanded",
      });
      const before = calls.length;
      const response = await POST(
        new Request("https://www.inquiryremoval.com/api/free-review", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: data,
        }),
      );
      if (INQUIRY_COUNTS.includes(count.trim())) {
        assert.equal(response.status, 200);
        assert.equal((await response.json()).ok, true);
        assert.equal(calls.at(-1).get(f.count), count.trim());
      } else {
        assert.equal(response.status, 400);
        assert.equal(calls.length, before, "invalid count reached Google");
      }
    }
  } finally {
    globalThis.fetch = originalFetch;
  }
});
