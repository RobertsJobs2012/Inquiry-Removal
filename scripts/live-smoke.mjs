const base = (process.env.SITE_URL || "https://www.inquiryremoval.com").replace(/\/$/, "");
const failures = [];

const get = async (pathname, options = {}) => {
  const response = await fetch(`${base}${pathname}`, {
    redirect: options.redirect ?? "follow",
    cache: "no-store",
  });
  const body = await response.text();
  return { response, body };
};

const expectStatus = async (pathname, status) => {
  try {
    const { response, body } = await get(pathname);
    if (response.status !== status)
      failures.push(`${pathname}: expected ${status}, received ${response.status}`);
    return { response, body };
  } catch (error) {
    failures.push(`${pathname}: ${error instanceof Error ? error.message : "request failed"}`);
    return null;
  }
};

const routes = [
  "/",
  "/pricing/",
  "/free-inquiry-review/",
  "/transunion-hard-inquiry-removal/",
  "/resources/",
  "/24-hour-inquiry-removal/",
  "/arizona-hard-inquiry-removal/",
  "/hard-inquiry-removal-letter/",
  "/permissible-purpose-hard-inquiries/",
  "/sitemap-index.xml",
  "/robots.txt",
];
for (const route of routes) await expectStatus(route, 200);
await expectStatus(`/technical-smoke-${Date.now()}/`, 404);
await expectStatus("/api/free-review", 405);

const home = await expectStatus("/", 200);
if (home) {
  if (!home.body.includes('<link rel="canonical" href="https://www.inquiryremoval.com/">'))
    failures.push("Homepage canonical is missing or unexpected.");
  for (const [header, expected] of [
    ["x-content-type-options", "nosniff"],
    ["x-frame-options", "DENY"],
    ["referrer-policy", "strict-origin-when-cross-origin"],
  ]) {
    if (home.response.headers.get(header) !== expected)
      failures.push(`Homepage ${header} header is missing or unexpected.`);
  }
}

const review = await expectStatus("/free-inquiry-review/", 200);
if (review) {
  if (!/name="robots" content="noindex, follow"/i.test(review.body))
    failures.push("Free review page should remain noindex, follow.");
  if (!/action="\/api\/free-review"/i.test(review.body))
    failures.push("Free review form is not using the same-site API endpoint.");
}

if (failures.length) {
  console.error("Live smoke test failed:\n");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log(`Live smoke test passed against ${base}.`);
