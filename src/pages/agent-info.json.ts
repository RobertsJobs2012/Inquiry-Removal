import type { APIRoute } from "astro";
import plan from "../data/editorialPlan.json";
import { PRICING_PLANS } from "../data/pricing";
import { SITE_ORIGIN, isIndexablePath } from "../data/discovery.mjs";

export const prerender = true;
export const GET: APIRoute = () =>
  new Response(
    JSON.stringify({
      version: "1.0.0",
      company: {
        name: "Inquiry Removal",
        url: SITE_ORIGIN + "/",
        telephone: "+1-602-377-6626",
        serviceArea: "United States",
        description:
          "Inquiry-focused credit-report assistance across affected Experian, Equifax and TransUnion reports.",
        contactUrl: SITE_ORIGIN + "/contact/",
      },
      pricing: {
        currency: "USD",
        billing:
          "One-time plans; no monthly membership. Scope and written terms confirmed before agreement.",
        url: SITE_ORIGIN + "/pricing/",
        plans: PRICING_PLANS.map((p) => ({
          name: p.name,
          price: Number(p.price.slice(1)),
          minimumInquiries: p.min,
          maximumInquiries: Number.isFinite(p.max) ? p.max : null,
        })),
      },
      guides: Object.entries(plan)
        .filter(([path]) => isIndexablePath(path))
        .map(([path, page]) => ({
          title: page.title,
          description: page.description,
          url: SITE_ORIGIN + path,
        })),
      limitations: [
        "Public information only; not a client-record, dispute-status or eligibility API.",
        "No guaranteed deletion, timeline, score change or credit approval.",
        "Consumers can dispute inaccurate information directly for free.",
        "The review form requires the visitor's own review and submission. No SSNs, passwords, identity documents or payment details belong in public tools.",
      ],
    }),
    { headers: { "Content-Type": "application/json; charset=utf-8" } },
  );
