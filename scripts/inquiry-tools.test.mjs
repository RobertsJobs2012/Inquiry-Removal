import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  parseCalendarDate,
  addCalendarMonths,
  inquiryAgeMilestones,
  LETTER_SAMPLE,
  WORKSHEET_SAMPLE,
  inquiryNextStep,
  inquiryNextStepText,
  NEXT_STEP_REASONS,
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

test("all helper routes provide specific guidance and allow uncertainty without an eligibility verdict", () => {
  for (const [reason] of NEXT_STEP_REASONS) {
    for (const bureau of ["unsure", "experian", "equifax", "transunion"]) {
      const result = inquiryNextStep(reason, bureau);
      assert.equal(result.steps.length, 3);
      assert.ok(result.title && result.limit && result.bureauNote);
      assert.ok(
        result.links.some((link) => link.href.includes("consumerfinance.gov")),
      );
      assert.ok(
        result.links.every((link) => /^(https:\/\/|\/(?!\/))/.test(link.href)),
      );
      assert.match(inquiryNextStepText(result), /Nothing has been submitted/);
      if (bureau === "transunion")
        assert.match(result.bureauNote, /not available online/);
    }
  }
  assert.match(
    inquiryNextStep("recognized").limit,
    /Do not turn an application/,
  );
  assert.match(inquiryNextStep("unfamiliar").limit, /does not prove fraud/);
  assert.match(
    inquiryNextStep("identity").limit,
    /does not erase existing inquiries/,
  );
  assert.ok(
    inquiryNextStep("identity").links.some(
      (link) => link.href === "https://www.identitytheft.gov/",
    ),
  );
  assert.match(inquiryNextStep().title, /full report/);
  assert.throws(() => inquiryNextStep("guaranteed"));
  assert.throws(() => inquiryNextStep("unsure", "__proto__"));
});

test("bureau-aware references distinguish scoring, reporting and Experian wording", () => {
  assert.deepEqual(inquiryAgeMilestones("2024-02-29", "experian"), {
    ficoYear: "2025-02-28",
    twoYears: "2026-02-28",
    experianReference: "2026-03-29",
  });
  for (const bureau of ["equifax", "transunion"])
    assert.equal(
      inquiryAgeMilestones("2024-01-31", bureau).experianReference,
      null,
    );
  assert.equal(
    inquiryAgeMilestones("2024-01-31").experianReference,
    "2026-02-28",
  );
  assert.throws(() => inquiryAgeMilestones("2026-02-30"));
  assert.throws(() => inquiryAgeMilestones("2024-01-01", "other"));
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
  assert.match(module, /content.textContent = value/);
  assert.doesNotMatch(module, /innerHTML|document.write|window.open/);
  assert.match(module, /afterprint/);
  assert.match(module, /removePrintout\(\)/);
  assert.match(source, /data-tool-clear/);
});
