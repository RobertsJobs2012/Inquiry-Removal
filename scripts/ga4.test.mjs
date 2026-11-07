import test from "node:test";
import assert from "node:assert/strict";
import { createGa4, GA4_ID, GA4_ORIGIN } from "../src/lib/ga4.mjs";

function fixture(origin = GA4_ORIGIN) {
  const scripts = [];
  const cookies = [];
  const win = {
    location: new URL(origin + "/pricing/?private=discard#discard"),
  };
  const doc = {
    referrer: "https://example.invalid/private?email=discard",
    querySelector: () => ({
      href: GA4_ORIGIN + "/pricing/?private=discard#discard",
    }),
    createElement: () => ({}),
    head: { append: (script) => scripts.push(script) },
    set cookie(value) {
      cookies.push(value);
    },
  };
  return { win, doc, scripts, cookies };
}

test("GA4 is disabled outside the production origin", () => {
  const { win, doc, scripts } = fixture("http://localhost:4324");
  assert.equal(createGa4(win, doc), null);
  assert.equal(scripts.length, 0);
});

test("opt-in loads one analytics-only tag, sends one minimal lead, and can be withdrawn", () => {
  const { win, doc, scripts, cookies } = fixture();
  const ga4 = createGa4(win, doc);
  ga4.reviewAccepted();
  ga4.setAllowed(false);
  assert.equal(win.dataLayer, undefined);
  assert.equal(scripts.length, 0);
  ga4.setAllowed(true);
  ga4.setAllowed(true);
  assert.equal(scripts.length, 1);
  assert.equal(scripts[0].referrerPolicy, "no-referrer");
  assert.equal(
    scripts[0].src,
    "https://www.googletagmanager.com/gtag/js?id=" + GA4_ID,
  );
  const commands = () => win.dataLayer.map((args) => Array.from(args));
  assert.equal(commands()[0][0], "consent");
  assert.equal(commands()[0][1], "default");
  assert.equal(commands()[0][2].analytics_storage, "granted");
  assert.ok(
    commands().findIndex(([command]) => command === "set") <
      commands().findIndex(([command]) => command === "js"),
    "clean page settings must exist before tag initialization",
  );
  assert.equal(
    commands().filter(
      ([command, mode]) => command === "consent" && mode === "update",
    ).length,
    0,
    "initial opt-in must not trigger an early consent-transition page view",
  );
  const config = commands().find(([command]) => command === "config")[2];
  assert.equal(config.page_location, GA4_ORIGIN + "/pricing/");
  assert.equal(config.page_referrer, "https://example.invalid");
  assert.equal(config.allow_google_signals, false);
  assert.equal(config.allow_ad_personalization_signals, false);
  assert.equal(config.send_page_view, false);
  ga4.reviewAccepted({ email: "never collected" });
  ga4.reviewAccepted();
  assert.deepEqual(
    commands().filter(([command]) => command === "event"),
    ["page_view", "generate_lead"].map((event) => [
      "event",
      event,
      {
        page_location: GA4_ORIGIN + "/pricing/",
        page_referrer: "https://example.invalid",
        send_to: GA4_ID,
      },
    ]),
  );
  ga4.setAllowed(false);
  assert.equal(win["ga-disable-" + GA4_ID], true);
  assert.equal(commands().at(-1)[2].analytics_storage, "denied");
  assert.equal(
    cookies.filter((cookie) => cookie.includes("Max-Age=0")).length,
    4,
  );
});
