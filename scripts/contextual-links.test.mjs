import assert from "node:assert/strict";
import test from "node:test";
import { createContextualLinker } from "../src/data/contextualLinks.ts";

test("contextual links preserve exact words, punctuation, case and whitespace", () => {
  const link = createContextualLinker("how-to-remove-hard-inquiries");
  const text =
    "A soft inquiry is different.  Keep the original words & punctuation.";
  const segments = link(text);
  assert.equal(segments.map((segment) => segment.text).join(""), text);
  assert.deepEqual(
    segments.filter((segment) => segment.href),
    [{ text: "soft inquiry", href: "/hard-inquiry-vs-soft-inquiry/" }],
  );
});

test("one destination per page, fresh state per page, no partial-word links", () => {
  const link = createContextualLinker("best-hard-inquiry-removal-services");
  assert.ok(
    link("Inquiry Removal uses one-time packages.").some((s) => s.href === "/"),
  );
  assert.equal(link("Inquiry Removal explains the process.").length, 1);
  assert.ok(
    createContextualLinker("best-hard-inquiry-removal-services")(
      "Inquiry Removal",
    ).some((s) => s.href),
  );
  assert.equal(
    createContextualLinker("soft-pull-became-hard-inquiry")("unauthorized")
      .length,
    1,
  );
});

test("only curated pages receive links and markup is left as plain text", () => {
  const text = '<script>alert("Inquiry Removal")</script>';
  assert.deepEqual(createContextualLinker("unlisted-page")(text), [{ text }]);
  const segments = createContextualLinker("best-hard-inquiry-removal-services")(
    text,
  );
  assert.equal(segments.map((segment) => segment.text).join(""), text);
  assert.ok(
    segments.every((segment) => !segment.href || segment.href.startsWith("/")),
  );
});
