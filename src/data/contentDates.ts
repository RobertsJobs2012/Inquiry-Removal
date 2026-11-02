// Explicitly updated with a content release, never advanced automatically by
// the build clock. Historical business and illustrative inquiry dates differ.
export const CONTENT_UPDATED_ISO = "2026-10-13";
export const CONTENT_UPDATED_LABEL = "October 13, 2026";
export const EDITORIAL_UPDATED_ISO = "2026-10-21";
export const EDITORIAL_UPDATED_LABEL = "October 21, 2026";

// Only pages substantively reviewed in this release receive its date.
const NOVEMBER_REVIEWED_SLUGS = new Set([
  "hard-inquiry-dispute-denied",
  "denied-credit-too-many-inquiries",
  "how-long-do-hard-inquiries-stay",
  "how-to-dispute-a-hard-inquiry",
  "how-to-remove-hard-inquiries",
  "best-hard-inquiry-removal-services",
  "hard-inquiry-removal-letter",
  "transunion-hard-inquiry-removal",
  "experian-hard-inquiry-removal",
]);

export function guideReviewDate(slug: string) {
  return NOVEMBER_REVIEWED_SLUGS.has(slug)
    ? { iso: "2026-11-02", label: "November 2, 2026" }
    : { iso: EDITORIAL_UPDATED_ISO, label: EDITORIAL_UPDATED_LABEL };
}
