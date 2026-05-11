"use client";

import Link from "next/link";
import { useState } from "react";

type FilterKey = "home" | "dealership" | "identity" | "stuck";

const FILTERS: Array<{
  key: FilterKey;
  label: string;
  cta: string;
  lead: string;
  body: string[];
}> = [
  {
    key: "home",
    label: "Show me results for people who wanted to qualify for a home",
    lead: "Matching proof:",
    body: [
      "Marcus T. — Phoenix, AZ — went from denied to closed in 47 days after 19 inquiries were removed and his score jumped 94 points.",
      "Sophia M. — Dallas, TX — cleared her lender's underwriting threshold after 22 inquiries were removed in 45 days and her score moved from 641 to 729.",
      "90% of Inquiry Removal clients share this goal. It is the most common outcome we produce.",
    ],
    cta: "See if your inquiries qualify — free consultation",
  },
  {
    key: "dealership",
    label: "Show me results for people hit by dealership inquiries",
    lead: "Matching proof:",
    body: [
      "Marcus T. — Phoenix, AZ — three dealership visits produced 22 unauthorized hard pulls. 19 removed in 47 days. Score up 94 points.",
      "Kevin D. — Atlanta, GA — 27 inquiries traced to multiple dealership submissions. All 27 removed in 55 days. Score up 97 points.",
      "The dealership shotgun pull is the most common reason clients find us. It is also one of the most legally actionable.",
    ],
    cta: "Book a free consultation — we'll identify every removable inquiry",
  },
  {
    key: "identity",
    label: "Show me results for identity theft victims",
    lead: "Matching proof:",
    body: [
      "Diana R. — Houston, TX — 34 fraudulent inquiries from an identity theft incident. All 34 removed in 61 days. Score up 112 points and fully restored.",
      "Fraudulent inquiries have among the strongest legal grounds for removal. The faster they're addressed, the better the outcome.",
    ],
    cta: "Start the process — free consultation, no obligation",
  },
  {
    key: "stuck",
    label: "Show me results for people who tried to fix it themselves and got stuck",
    lead: "Matching proof:",
    body: [
      "Kevin D. — Atlanta, GA — spent months filing his own disputes and received \"verified\" responses at every turn. Switched to Inquiry Removal, 27 inquiries removed in 55 days.",
      "\"Verified\" from a bureau is not the end of the road. It's where we begin.",
    ],
    cta: "Let's pick up where you left off — free consultation",
  },
];

export function ResultsFilter() {
  const [active, setActive] = useState<FilterKey>("home");
  const current = FILTERS.find((item) => item.key === active) ?? FILTERS[0];

  return (
    <>
      <div className="results-filter-controls" aria-label="Situation filters">
        <div className="results-filter-desktop">
          {FILTERS.map((filter) => (
            <button
              key={filter.key}
              type="button"
              className={`results-filter-button ${active === filter.key ? "results-filter-button-active" : ""}`}
              onClick={() => setActive(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <label className="results-filter-mobile">
          <span className="sr-only">Choose a situation</span>
          <select value={active} onChange={(event) => setActive(event.target.value as FilterKey)}>
            {FILTERS.map((filter) => (
              <option key={filter.key} value={filter.key}>
                {filter.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <article className="results-filter-panel gradient-border">
        <p className="results-filter-lead">{current.lead}</p>
        <div className="results-filter-copy">
          {current.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <Link href="/get-started" className="results-filter-link">
          {current.cta} <span aria-hidden="true">→</span>
        </Link>
      </article>
</>
  );
}
