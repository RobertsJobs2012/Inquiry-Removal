export const SITE_ORIGIN = "https://www.inquiryremoval.com";

// These routes remain available for review, but are intentionally excluded
// from search until each route is complete and intentionally approved for indexing.
export const NON_INDEXABLE_PATHS = new Set([
  "/accessibility/",
  "/cancellation/",
  "/consumer-disclosures/",
  "/cookie-policy/",
  "/credit-services-agreement/",
  "/dealership-hard-inquiries/",
  "/equifax-inquiry-disputes/",
  "/experian-inquiry-disputes/",
  "/free-inquiry-analysis/",
  "/free-inquiry-review/",
  "/get-started/",
  "/guarantee/",
  "/privacy/",
  "/results/",
  "/results-disclosure/",
  "/terms/",
  "/text-message-terms/",
  "/transunion-inquiry-disputes/",
  "/unauthorized-hard-inquiries/",
  "/duplicate-inquiries/",
  "/incorrect-person-inquiries/",
  "/authorized-inquiry-removal/",
]);

export const isIndexablePath = (pathname) => !NON_INDEXABLE_PATHS.has(pathname);
