# Research implementation — October 21, 2026

## Scope and preservation

Applied the supplied research to all 45 public canonical page briefs. Kept the 41 indexable canonical URLs, four intentional noindex pages, existing four pricing tiers, genuine testimonials/company figures, onsite review flow and Google-backed intake. No generated media, new city doorways, ranking guarantees, invented policies, fake case studies or additional tracking services.

The website implementation is not certification of all 553 discovery checks. Build evidence, live delivery, search-account state, real crawler observations and business/legal approval are different evidence layers.

## Page-by-page changes

Every page's title, description and primary heading is mapped in `src/data/editorialPlan.json` using its research brief ID. The build checks all 45 outputs against that registry.

| Page group | Changes |
| --- | --- |
| Homepage | Shorter opening, visible first-screen primary action, distinct pricing action, eligibility limit near the promise, descriptive situation links, accurate results-methodology link. Company figures and testimonials preserved. |
| Pricing | Four tiers unchanged; distinct plan comparison link, factual value explanation, scope/count/payment questions without inventing a cross-bureau billing rule or refund policy. |
| How it works / situations / dealership | Clearer introduction, responsibility split, factual situation triage, dealer paperwork trail, accurate-inquiry limitations and clearer request labels. |
| Experian / Equifax / TransUnion | Distinct practical checklists and official source links, including TransUnion's inquiry-specific company/mail distinction and Equifax's own form requirements. |
| Eligibility / authorized inquiries | Decision aid differentiating normal aging, unfamiliar names, reporting errors, actual fraud, mixed files and disclosure mismatches. No automatic deletion verdict. |
| Unrecognized / unauthorized / who pulled my credit | Identification questions, application/email checks, a sourced bank-versus-retailer example and private worksheet. Unfamiliar does not automatically mean fraudulent. |
| Duplicate / incorrect-person / soft-versus-hard expectation | Specific record comparisons, cross-bureau distinctions, mixed-file considerations and the original disclosure/later-application sequence. |
| Identity theft | Free FTC and bureau protective resources before optional paid assistance; freezes distinguished from deleting old inquiries. |
| How to remove / dispute / letter | Complete free process, recipient-specific routes, meaningful response follow-up, editable/copyable/downloadable factual letter and worksheet. |
| Timeline / score impact / inquiry count / rate shopping | Distinct reporting/scoring clocks; local calendar estimator with leap-day handling; no fixed score-gain or universal inquiry-count threshold; model/window limitations. |
| Mortgage / auto / business funding / cards | Relevant application stages and borrower questions; illustrative lender ledger; mortgage coordination; personal-credit distinction for business applications. |
| Definition / hard versus soft / permissible purpose / removed inquiries / 24-hour claims | Concise answers, examples/decision aids, source links, limitations and concrete next steps instead of universal deletion or approval promises. |
| Service comparison / inquiry versus credit repair | Dated first-party advertised offers, ownership disclosure, DIY comparison, scope/terms questions and explicit unknowns; no self-awarded winner. |
| About / contact / Arizona / service areas | Existing operator identity, actionable published phone number, remote-service explanation and real Arizona consumer resources; no invented offices, qualifications, hours or response SLA. |
| Resources / FAQ | Reader-task paths, contextual destinations and plain-language answers. |
| Free review | Shorter entry, preserved validation and optional note, hidden/inert honeypot, decorative-check accessibility correction, same-page duplicate-send guard and clearer accepted-request follow-up. |
| Results | Methodology title and link promises aligned with today's content. Six explicitly labeled placeholders remain placeholders and the page remains noindex. |
| Privacy / terms | Legal copy preserved; privacy adds factual disclosure for the new local-only tools. Existing separate paid-agreement distinction preserved. |

## Verification

- Node 24 build: 49 generated routes; zero Astro/TypeScript errors, warnings or hints.
- Pricing, mocked intake, CSP, IndexNow and private-tool unit tests pass.
- Discovery/technical checks: 41 indexable canonical routes and 41 sitemap URLs; no advisory warnings.
- All 45 research titles, descriptions and H1s match built HTML; intended canonicals/indexing unchanged.
- Existing HTML, compressed JavaScript/CSS and font budgets pass without raising the limits.
- Manual browser reflow measurements: all 45 pages at 320, 768 and 1440 CSS pixels (135 checks), no page-level horizontal overflow. This is not complete manual visual or screen-reader certification.
- Homepage action fits the tested 1440 × 900 and 1905 × 774 desktop viewports; mobile action fits at 390 × 844.
- Built form blocks empty first-step advancement, hides premature Submit and keeps the honeypot invisible. No new real lead was submitted.
- Local estimator verifies February 29, 2024 → February 28, 2026. Unit tests cover invalid dates and calendar month ends.
- External GET sample: 46 source destinations; 39 returned 200, seven TransUnion destinations rejected the automated client with 403. TransUnion's inquiry guidance was separately readable through the research browser. Those 403s do not establish broken consumer links or verified crawler access.
- Production dependency audit: zero reported vulnerabilities. Gitleaks 8.30.1 scanned 204 existing commits with no leaks; no secret values included in evidence.
- Added production tests for the new tools, download, comparison accessibility, first-screen action and all-page reflow.
- Screenshot review caught an inherited mobile-only introduction rule and insufficient desktop review-breadcrumb clearance. Both corrected; all 45 pages retested at 320/768/1440 with visible introductions, at least 16px opening clearance below the fixed navbar, and no page-level overflow. These conditions are now explicit browser regressions.

Production release and CI outcomes are recorded below after deployment. Earlier production runs and the supplied Search Console statistics are not presented as fresh checks.

## Remaining owner / operational / specialist work

1. Supply privacy-safe case records, permission and permanently redacted evidence before replacing results placeholders. Supply the rating source/scale/count and maintained metric methodology for existing company figures; the figures and genuine reviews have not been dismissed or fabricated.
2. Confirm the billable cross-bureau count, fee-collection timing, monitoring costs if any, service completion, cancellation/refund terms and exact paid agreement. Obtain qualified credit-services/advertising/privacy review; marketing copy is not legal approval.
3. Verify one controlled accepted lead through Google destination/email and any CRM. Implement persistent replay deduplication and consultation/agreement/collected-revenue joins in the actual operational system. The new client guard is not persistent server idempotency.
4. Inspect current Search Console/Bing selected canonicals, queries, indexing cohorts and available AI settings. Inspect verified bot logs and actual WAF/rate-limit enforcement. Source/build results do not establish ranking, crawling or account configuration.
5. Supply original portrait/media when ready. No image-generation credits were used.
6. Complete physical-device, screen-reader, high-contrast and field-CWV review where sufficient real-user data exists. Automated accessibility/lab performance does not establish WCAG conformance or field success.

## Evidence regeneration

- `npm run build`
- `node scripts/editorial-live.mjs` after release; `--baseline` captures the pre-release response state without expecting new copy.
- `node scripts/research-report.mjs "/absolute/path/to/ULTIMATE_WEBSITE_DISCOVERY_STANDARD (2).md"` generates a 553-row scoped coverage ledger and 45-page inventory under `.artifacts/research/`.
- Existing production browser, visual, performance and IndexNow workflows remain in place. Intentional screenshot changes require human visual review before new baselines are accepted.

## Release state

Initial production release: `afccc5ad20318caec3af9121e609031bae13075e`, Vercel `dpl_526vmectCwZdkcsq18LKN5fi7dKx`, READY on the canonical domain. All 45 production GET checks and live smoke checks passed. Build/security CI and production interaction/accessibility tests passed. Visual comparison correctly flagged intentional content/layout changes; baselines are not yet accepted. Final parity/clearance correction and post-release screenshot/performance verification are in progress.
