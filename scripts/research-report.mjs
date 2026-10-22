// Generates an evidence ledger, not an automatic SEO certification.
import { readFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
const standardFile = process.argv[2];
if (!standardFile)
  throw new Error("Pass the supplied discovery-standard Markdown path.");
const standard = await readFile(standardFile, "utf8");
const checks = [...standard.matchAll(/^- \[ \] \*\*([\d.-]+)\*\* (.+)$/gm)];
const plan = JSON.parse(await readFile("src/data/editorialPlan.json", "utf8"));
const noindex = new Set([
  "/free-inquiry-review/",
  "/privacy/",
  "/results/",
  "/terms/",
]);
const passed = new Map([
  [
    "3.3-01",
    "Established canonical URL paths and hostname preserved; route-hygiene check passes.",
  ],
  [
    "3.3-02",
    "All 45 brief URLs have their expected absolute canonical in built HTML.",
  ],
  [
    "3.4-01",
    "All 49 generated routes contain initial HTML; discovery and technical audits pass.",
  ],
  [
    "4.2-01",
    "All 45 page titles match the reviewed editorial registry; no duplicate titles.",
  ],
  [
    "4.2-02",
    "All 45 descriptions match the editorial registry; no invented ranking guarantees.",
  ],
  ["4.5-01", "No meta-keywords or retired sitelinks-box markup added."],
  [
    "5.3-01",
    "All 45 page purposes mapped; topic-specific openings added except preserved legal text.",
  ],
  [
    "5.10-02",
    "Comparison uses attributed current public offers; no customer tests or winners invented.",
  ],
  [
    "5.11-03",
    "No canonical URL migrations; substantive content dates separated from unchanged legal-policy dates.",
  ],
  [
    "5.15-02",
    "New editorial source links are ordinary links, not paid placements; no blanket nofollow.",
  ],
  [
    "12.2-04",
    "Existing public llms.txt contains public resources, not private tool edits or credentials.",
  ],
  [
    "20.1-05",
    "Existing server validation and invalid-payload fixtures pass; output remains escaped.",
  ],
  [
    "20.1-06",
    "Existing origin/CSRF fixture checks pass; same-site review action preserved.",
  ],
  [
    "21.3-04",
    "Review success event remains after HTTP OK and accepted payload, not button clicks.",
  ],
  [
    "22.6-01",
    "Focused source changes plus pricing, intake, tool, editorial, route, CSP and budget regressions.",
  ],
]);
const warnings = new Map([
  [
    "5.6-01",
    "Official practical guidance sourced; underlying company metric records/rating denominator remain owner evidence.",
  ],
  [
    "5.6-04",
    "No invented credentials or outcomes; qualified high-stakes content/compliance review remains outstanding.",
  ],
  [
    "5.10-01",
    "Four named competitors checked on first-party pages October 21; complete monitoring/refund/enrollment terms not all verified.",
  ],
  [
    "6.4-01",
    "Existing contact/privacy/terms preserved; exact fee timing, count definition and refund conditions need owner confirmation.",
  ],
  [
    "19.2-06",
    "Qualified credit-services/advertising/privacy/consumer-protection review is still needed.",
  ],
  [
    "20.1-08",
    "Existing honeypot preserved outside accessibility tree. Production WAF rate-limit enforcement not changed or certified.",
  ],
  [
    "21.3-03",
    "New client-side send/accept guard prevents repeat sends in the same loaded page; persistent backend deduplication and CRM joins remain unverified.",
  ],
  [
    "23.1-01",
    "Local build, route/metadata/canonical/schema/sitemap audits pass; production verification recorded separately.",
  ],
]);
const na = [
  [/^3\.10-/, "No paginated or infinite-scroll collection."],
  [/^4\.[47]-/, "Single-language site; no localized URL clusters."],
  [/^6\.6-/, "No paywalled or registration-gated public content."],
  [
    /^13\./,
    "WebMCP has not been adopted; ordinary human forms remain the supported path.",
  ],
  [
    /^15\.2-/,
    "No video or audio content was added; media awaits owner assets.",
  ],
  [
    /^16\.5-/,
    "No active video-channel workflow in this website implementation.",
  ],
  [
    /^18(?:\.|-)/,
    "Service-information and lead website, not a product catalog or checkout.",
  ],
  [
    /^19\.[456]-/,
    "No multiple staffed locations, translated sites, or UGC marketplace.",
  ],
  [
    /^20\.4-/,
    "Optional Web Bot Auth not adopted; no auth/security bypass introduced.",
  ],
];
const ledger = checks.map(([, id, requirement]) => {
  const notApplicable = na.find(([pattern]) => pattern.test(id));
  const status = passed.has(id)
    ? "PASS"
    : warnings.has(id)
      ? "WARNING"
      : notApplicable
        ? "N/A"
        : "NOT TESTED";
  return {
    id,
    requirement,
    scope:
      "2026-10-21 source/build implementation; live and account evidence must be assessed separately",
    status,
    evidence:
      passed.get(id) ??
      warnings.get(id) ??
      notApplicable?.[1] ??
      "Not certified by this implementation. Requires the relevant live/manual/account/owner evidence.",
    severity: warnings.has(id)
      ? "medium"
      : status === "NOT TESTED"
        ? "undetermined"
        : "info",
    confidence:
      status === "PASS"
        ? "high within stated scope"
        : status === "N/A"
          ? "high"
          : "limited",
    retest:
      "After deployment or when the stated evidence/dependency becomes available",
  };
});
if (new Set(ledger.map((x) => x.id)).size !== checks.length)
  throw new Error("Duplicate checklist IDs");
const pages = [];
for (const [url, revision] of Object.entries(plan)) {
  const html = await readFile(path.join("dist", url, "index.html"), "utf8");
  pages.push({
    url,
    brief: revision.brief,
    title: revision.title,
    indexingIntent: noindex.has(url) ? "noindex, follow" : "index, follow",
    built: true,
    privateTool: html.match(/data-private-tool="([^"]+)"/)?.[1] ?? null,
    practicalContent: html.includes('id="practical-next-steps"'),
    selectedCanonical: "NOT TESTED",
    searchRanking: "NOT TESTED",
  });
}
await mkdir(".artifacts/research", { recursive: true });
await writeFile(
  ".artifacts/research/discovery-coverage.json",
  JSON.stringify(
    {
      date: "2026-10-21",
      scope:
        "Source/build evidence only; no overall readiness or rank certification",
      checks: ledger,
    },
    null,
    2,
  ),
);
await writeFile(
  ".artifacts/research/page-inventory.json",
  JSON.stringify(pages, null, 2),
);
const counts = Object.fromEntries(
  ["PASS", "WARNING", "N/A", "NOT TESTED"].map((s) => [
    s,
    ledger.filter((x) => x.status === s).length,
  ]),
);
console.log(
  JSON.stringify({
    checklistRows: ledger.length,
    counts,
    briefUrls: pages.length,
    practicalPages: pages.filter((x) => x.practicalContent).length,
    toolPages: pages.filter((x) => x.privateTool).length,
    scope: "Build evidence only; no blanket readiness claim",
  }),
);
