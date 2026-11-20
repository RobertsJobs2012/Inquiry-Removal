# Inquiry Removal

Astro 7 website for InquiryRemoval.com, built from the Final Master Brand, Website & Conversion Blueprint.

## Local development

```sh
npm install
npm run dev
```

## Validation

```sh
npm run format:check
npm run build
```

## Publishing model

The production project is intended to use Vercel's GitHub integration. Pushes to the configured production branch deploy automatically; other branches can receive preview deployments.

## Content status

The design system, responsive layouts, route structure, conversion framework, and compliance-safe placeholder content are implemented. Verified metrics, case evidence, founder content, photography, guarantee terms, intake processing, and final legal language must be supplied and reviewed before public launch.

## Review funnel and paid outcomes

Use the existing private intake records, not GA4, as the source of truth for
paid clients. The website context appended to each incoming review contains
the submission reference and source page. Use that reference in the existing
private tracker to record received date, first contact time, qualified date,
first payment date, and amount actually collected. For phone-only leads use
an internal reference and mark the source unknown unless reported by the
caller. Exclude QA and duplicates. Do not upload contact details, reference
IDs, responses, or credit information to analytics.

For opt-in visitors, inspect the GA4 path from `review_cta_click` (site button
location) to `review_start`, `review_step_reached` (2–4),
`review_submit_attempt`, and the existing `generate_lead` acceptance event.
`review_submit_error` means at least one valid send attempt failed on that
page load; it can also occur on a visit that later succeeds. It is not a
field validation event. `click_to_call` is a tap, not a completed call.
Report qualified leads and paid clients by received cohort and source
alongside this opt-in funnel; never treat GA4 submissions as paid sales.
