import Link from "next/link";

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
  const current = FILTERS[0];
  const filterPayload = JSON.stringify(FILTERS).replace(/</g, "\\u003c");

  return (
    <>
      <div className="results-filter-controls" aria-label="Situation filters" data-results-filter>
        <div className="results-filter-desktop">
          {FILTERS.map((filter, index) => (
            <button
              key={filter.key}
              type="button"
              className={`results-filter-button ${index === 0 ? "results-filter-button-active" : ""}`}
              data-result-filter={filter.key}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <label className="results-filter-mobile">
          <span className="sr-only">Choose a situation</span>
          <select defaultValue={current.key} data-result-filter-select>
            {FILTERS.map((filter) => (
              <option key={filter.key} value={filter.key}>
                {filter.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <article className="results-filter-panel gradient-border" data-results-filter-panel>
        <p className="results-filter-lead" data-results-filter-lead>{current.lead}</p>
        <div className="results-filter-copy" data-results-filter-copy>
          {current.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <Link href="/get-started" className="results-filter-link" data-results-filter-link>
          {current.cta} <span aria-hidden="true">→</span>
        </Link>
      </article>

      <script
        data-astro-rerun=""
        dangerouslySetInnerHTML={{
          __html: `(() => {
            const filters = ${filterPayload};
            const root = document.querySelector('[data-results-filter]');
            const panel = document.querySelector('[data-results-filter-panel]');
            if (!root || !panel) return;
            const lead = panel.querySelector('[data-results-filter-lead]');
            const copy = panel.querySelector('[data-results-filter-copy]');
            const link = panel.querySelector('[data-results-filter-link]');
            const select = root.querySelector('[data-result-filter-select]');
            const buttons = Array.from(root.querySelectorAll('[data-result-filter]'));
            const render = (key) => {
              const current = filters.find((item) => item.key === key) || filters[0];
              buttons.forEach((button) => {
                button.classList.toggle('results-filter-button-active', button.dataset.resultFilter === current.key);
              });
              if (select) select.value = current.key;
              if (lead) lead.textContent = current.lead;
              if (copy) copy.replaceChildren(...current.body.map((text) => {
                const p = document.createElement('p');
                p.textContent = text;
                return p;
              }));
              if (link) {
                const arrow = document.createElement('span');
                arrow.setAttribute('aria-hidden', 'true');
                arrow.textContent = '→';
                link.textContent = current.cta + ' ';
                link.appendChild(arrow);
              }
            };
            buttons.forEach((button) => button.addEventListener('click', () => render(button.dataset.resultFilter)));
            if (select) select.addEventListener('change', (event) => render(event.target.value));
          })();`,
        }}
      />
    </>
  );
}
