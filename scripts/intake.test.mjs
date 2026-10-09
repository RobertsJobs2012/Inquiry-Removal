import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import ts from "typescript";

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

const pricingUrl = moduleUrl("src/data/pricing.ts");
const reviewUrl = moduleUrl("src/data/reviewForm.ts", {
  "./pricing.js": pricingUrl,
});
const { POST } = await import(
  moduleUrl("api/free-review.ts", {
    "../src/data/reviewForm.js": reviewUrl,
  })
);
const { REVIEW_FIELDS: f, CONTACT_CONSENT } = await import(reviewUrl);
const complete = () =>
  new URLSearchParams({
    [f.name]: "Intake QA",
    [f.email]: "qa@example.invalid",
    [f.phone]: "2025550123",
    [f.goal]: "A home loan",
    [f.situation]: "I did not authorize the inquiry",
    [f.count]: "1–10",
    [f.bureau]: "Experian",
    [f.reports]: "Yes",
    [f.contactMethod]: "Email",
    [f.consent]: CONTACT_CONSENT,
  });
const request = (body, headers = {}) =>
  new Request("https://www.inquiryremoval.com/api/free-review", {
    method: "POST",
    body,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
      ...headers,
    },
  });

test("required fields, origin, body limits, optional notes, and delivery failures", async () => {
  const originalFetch = globalThis.fetch;
  const originalInfo = console.info;
  const originalError = console.error;
  let calls = 0;
  let upstreamStatus = 200;
  const logs = [];
  globalThis.fetch = async () => {
    calls++;
    return new Response("mock acceptance", { status: upstreamStatus });
  };
  console.info = (...args) => logs.push(args);
  console.error = (...args) => logs.push(args);
  try {
    for (const field of [
      f.name,
      f.email,
      f.phone,
      f.goal,
      f.situation,
      f.count,
      f.bureau,
      f.reports,
      f.contactMethod,
      f.consent,
    ]) {
      const data = complete();
      data.delete(field);
      assert.equal((await POST(request(data))).status, 400, `missing ${field}`);
    }
    assert.equal(calls, 0, "incomplete submissions must never reach Google");
    assert.equal(
      (await POST(request(complete(), { Origin: "https://other.example" })))
        .status,
      403,
    );
    assert.equal(
      (await POST(request(complete(), { "sec-fetch-site": "cross-site" })))
        .status,
      403,
    );
    assert.equal(
      (await POST(request("{}", { "Content-Type": "application/json" })))
        .status,
      415,
    );
    assert.equal((await POST(request("x=" + "x".repeat(50_000)))).status, 413);
    assert.equal(
      (
        await POST(
          request("x=" + "x".repeat(50_000), { "Content-Length": "2" }),
        )
      ).status,
      413,
    );
    const longNote = complete();
    longNote.set(f.note, "x".repeat(2501));
    assert.equal((await POST(request(longNote))).status, 400);
    assert.equal(calls, 0);
    const response = await POST(request(complete()));
    assert.equal(response.status, 200, "the note is optional");
    assert.equal((await response.json()).ok, true);
    const multipart = new FormData();
    for (const [key, value] of complete()) multipart.append(key, value);
    assert.equal(
      (
        await POST(
          new Request("https://www.inquiryremoval.com/api/free-review", {
            method: "POST",
            body: multipart,
            headers: { Accept: "application/json" },
          }),
        )
      ).status,
      200,
    );
    upstreamStatus = 503;
    const failed = await POST(request(complete()));
    assert.equal(failed.status, 502);
    assert.equal((await failed.json()).ok, false);
    assert.doesNotMatch(
      JSON.stringify(logs),
      /qa@example|202555|authorize|Experian|situation|bureaus|sourceContext/,
    );
  } finally {
    globalThis.fetch = originalFetch;
    console.info = originalInfo;
    console.error = originalError;
  }
});

test("progressive enhancement is activated by the complete form module, not an early inline flag", () => {
  const form = readFileSync("src/components/FreeReviewForm.astro", "utf8");
  assert.doesNotMatch(
    form,
    /document\.documentElement\.classList\.add\("js"\)/,
  );
  assert.match(
    form,
    /\.native-review-form\.is-enhanced \.review-noscript-submit/,
  );
  assert.ok(
    form.indexOf('reviewForm.classList.add("is-enhanced")') >
      form.indexOf('addEventListener("submit"'),
  );
  assert.ok(
    form.indexOf("reviewForm.noValidate = true") >
      form.indexOf('addEventListener("submit"'),
  );
  const globalCss = readFileSync("src/styles/global.css", "utf8");
  assert.match(
    globalCss,
    /\[data-reveal\] \{[^}]*opacity: 1;[^}]*transform: none;/,
  );
});
