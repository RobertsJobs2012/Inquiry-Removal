import test from "node:test";
import assert from "node:assert/strict";
import {
  canonicalUrl,
  chooseUrls,
  notify,
  acknowledgedState,
} from "./lib/indexnow.mjs";
const a = "https://www.inquiryremoval.com/",
  b = "https://www.inquiryremoval.com/pricing/",
  c = "https://www.inquiryremoval.com/removed/";
test("only added/changed/deleted URLs queue; unchanged and targeted URLs deduplicate", () => {
  assert.deepEqual(
    chooseUrls({ [a]: "same", [b]: "new" }, { [a]: "same", [c]: "old" }),
    [b, c],
  );
  assert.deepEqual(chooseUrls({ [a]: "same" }, { [a]: "same" }), []);
  assert.deepEqual(chooseUrls({ [a]: "same" }, {}, { urls: ["/", a] }), [a]);
  assert.throws(() =>
    chooseUrls({ [a]: "same" }, {}, { urls: ["/api/free-review/"] }),
  );
  for (const url of [
    "https://inquiryremoval.com/",
    "https://www.inquiryremoval.com.evil.test/",
    "https://www.inquiryremoval.com/?q=1",
    "/pricing",
    "/pricing/#x",
  ])
    assert.throws(() => canonicalUrl(url));
});
test("retries temporary failures, honors cooldown, and rejects invalid requests without retry", async () => {
  let calls = 0,
    waits = [];
  const result = await notify([a], {
    fetcher: async () =>
      new Response("", { status: ++calls === 1 ? 503 : 200 }),
    sleep: async (ms) => waits.push(ms),
  });
  assert.equal(result.submitted, 1);
  assert.equal(calls, 2);
  assert.deepEqual(waits, [1000]);
  calls = 0;
  await assert.rejects(
    notify([a], {
      fetcher: async () => {
        calls++;
        return new Response("", { status: 422 });
      },
    }),
  );
  assert.equal(calls, 1);
  await assert.rejects(
    notify([a], {
      fetcher: async () =>
        new Response("", { status: 429, headers: { "retry-after": "120" } }),
      sleep: async () => assert.fail("must not retry before cooldown"),
    }),
  );
  assert.equal(
    (
      await notify([], {
        fetcher: () => assert.fail("unchanged queue must not send"),
      })
    ).submitted,
    0,
  );
});
test("targeted acknowledgement never hides other queued changes", () => {
  assert.deepEqual(
    acknowledgedState(
      { [a]: "new", [b]: "new" },
      { [a]: "old", [b]: "old", [c]: "old" },
      [a, c],
    ),
    { [a]: "new", [b]: "old" },
  );
});
