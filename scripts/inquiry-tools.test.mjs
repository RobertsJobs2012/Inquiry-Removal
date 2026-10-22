import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  parseCalendarDate,
  addCalendarMonths,
  LETTER_SAMPLE,
  WORKSHEET_SAMPLE,
} from "../src/lib/inquiry-tools.mjs";

test("calendar estimates handle leap days, month ends and invalid input", () => {
  assert.equal(addCalendarMonths("2024-02-29", 24), "2026-02-28");
  assert.equal(addCalendarMonths("2024-02-29", 12), "2025-02-28");
  assert.equal(addCalendarMonths("2026-01-31", 1), "2026-02-28");
  assert.equal(addCalendarMonths("2026-10-21", 24), "2028-10-21");
  for (const value of [
    "2026-02-29",
    "2026-04-31",
    "2026-00-12",
    "2026-13-01",
    "",
    "10/21/2026",
    "1899-01-01",
  ]) {
    assert.equal(parseCalendarDate(value), null, value);
  }
  assert.throws(() => addCalendarMonths("not a date", 24));
  assert.throws(() => addCalendarMonths("2026-10-21", 1.5));
});

test("ungated samples are complete, factual and avoid automatic fraud assertions", () => {
  for (const field of [
    "[exact company name]",
    "[inquiry date]",
    "[affected bureau]",
    "Attachments:",
    "Sincerely,",
  ])
    assert.ok(LETTER_SAMPLE.includes(field));
  assert.match(LETTER_SAMPLE, /specific facts that are true/);
  assert.match(LETTER_SAMPLE, /if your records confirm/);
  assert.match(WORKSHEET_SAMPLE, /Do not include SSNs, passwords/);
  assert.match(WORKSHEET_SAMPLE, /not automatically an erroneous duplicate/);
});

test("private tool module has no network, persistence or tracking integration", () => {
  const source = readFileSync("src/components/GuideTools.astro", "utf8");
  const module = source.split("<script>")[1].split("</script>")[0];
  assert.doesNotMatch(
    module,
    /fetch\(|XMLHttpRequest|sendBeacon|localStorage|sessionStorage|indexedDB|\.track\(/,
  );
  assert.match(module, /date.value > today/);
  assert.match(source, /aria-live="polite"/);
  assert.match(source, /<noscript>/);
});
