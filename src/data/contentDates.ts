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
  "hard-inquiry-removal-letter",
  "experian-hard-inquiry-removal",
  "who-pulled-my-credit",
]);

const NOVEMBER_8_REVIEWED_SLUGS = new Set([
  "best-hard-inquiry-removal-services",
  "transunion-hard-inquiry-removal",
]);

export function guideReviewDate(slug: string) {
  if (NOVEMBER_8_REVIEWED_SLUGS.has(slug))
    return { iso: "2026-11-08", label: "November 8, 2026" };
  return NOVEMBER_REVIEWED_SLUGS.has(slug)
    ? { iso: "2026-11-02", label: "November 2, 2026" }
    : { iso: EDITORIAL_UPDATED_ISO, label: EDITORIAL_UPDATED_LABEL };
}
