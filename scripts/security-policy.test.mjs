import test from "node:test";
import assert from "node:assert/strict";
import { policyProblems } from "./security-policy.mjs";
const policy =
  "script-src 'self' https://va.vercel-scripts.com; script-src-attr 'none'; style-src 'self' 'unsafe-inline'";
test("strict script policy preserves inert schema and external modules", () => {
  assert.deepEqual(
    policyProblems(
      '<script type="application/ld+json">{"@type":"Organization"}</script><script type="module" src="/_astro/app.js"></script>',
      policy,
    ),
    [],
  );
});
test("inline execution and unsafe policy regressions are rejected", () => {
  for (const html of [
    "<script>alert(1)</script>",
    '<script type="module">run()</script>',
    '<button onclick="run()">Go</button>',
    '<a href="javascript:run()">Go</a>',
  ])
    assert.ok(policyProblems(html, policy).length);
  assert.ok(
    policyProblems("", policy.replace("'self'", "'self' 'unsafe-inline'"))
      .length,
  );
  assert.ok(
    policyProblems("", policy.replace("script-src-attr 'none'", "")).length,
  );
});
