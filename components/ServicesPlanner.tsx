import Link from "next/link";
import { PremiumIcon } from "./PremiumIcons";

type PlanKey = "starter" | "standard" | "elite";


type Plan = {
  key: PlanKey;
  id: string;
  label: string;
  badge?: string;
  price: string;
  range: string;
  tone: "blue" | "pink" | "purple";
  pain: string;
  agitate: string;
  solution: string;
  features: string[];
  bestFor: string;
  cta: string;
};

const PLANS: Plan[] = [
  {
    key: "starter",
    id: "starter-plan",
    label: "Starter Plan",
    price: "$199",
    range: "1 to 10 total inquiries across all three bureaus",
    tone: "blue",
    pain:
      "If you've had a single incident — one dealership visit, one online application that went further than you expected — you may be dealing with a concentrated cluster of unauthorized hard inquiries that dropped your score fast. You didn't apply for ten things. One action caused all of this. And that means it can be targeted and reversed just as specifically.",
    agitate:
      "Every month those inquiries stay on your report, your score pays the price. And so does every application you submit in the meantime.",
    solution:
      "The Starter Plan disputes every unauthorized or excessive hard inquiry on your report across all three bureaus — for a single flat fee with no surprises.",
    features: [
      "Full credit report analysis — every removable inquiry identified across Experian, Equifax, and TransUnion",
      "Custom dispute letters built specifically for your inquiries — never templates",
      "Direct submission to all three bureaus — we handle every communication",
      "Dedicated specialist assigned to your file — one person, not a queue",
      "Post-deletion credit protection strategy — so your gains stay in place",
      "Final results summary — a complete record of everything removed and your score improvement",
      "Free consultation included — you see the plan before you spend anything",
      "100% money-back guarantee if no inquiries are removed within 90 days",
    ],
    bestFor:
      "Someone who had a single dealership visit, one online credit application, or a small cluster of unauthorized inquiries they want resolved quickly and cleanly.",
    cta: "Start With the Starter Plan — $199",
  },
  {
    key: "standard",
    id: "standard-plan",
    label: "Standard Plan",
    badge: "Most popular",
    price: "$299",
    range: "11 to 30 total inquiries across all three bureaus",
    tone: "pink",
    pain:
      "If you've visited multiple dealerships, applied for credit in more than one place, or discovered that a single application triggered a flood of hard pulls across all three bureaus — your report is carrying a heavier load. You may have watched your score fall 60, 80, even 100 points from inquiries you never agreed to. Meanwhile, every lender you approach sees that inquiry count and either denies you outright or offers you terms that cost you thousands more over the life of the loan.",
    agitate:
      "This isn't a small inconvenience. A credit score depressed by unauthorized inquiries is costing you in real dollars — on your interest rate, on your insurance, on whether you get approved at all for the home you've been working toward.",
    solution:
      "The Standard Plan is built for the most common situation we see: a moderate-to-significant inquiry problem that needs a thorough, multi-bureau approach using every federal law at our disposal.",
    features: [
      "Full credit report analysis — every removable inquiry identified across Experian, Equifax, and TransUnion",
      "Custom dispute letters built specifically for each inquiry — FCRA, FDCPA, FACTA, and Metro 2 applied precisely",
      "Direct submission to all three bureaus — we handle every communication, every follow-up",
      "Dedicated specialist assigned to your file — one person who knows your case",
      "Post-deletion credit protection strategy — personalized guidance for keeping your score clean",
      "Final results summary — complete record of every inquiry removed and your score improvement",
      "Free consultation included",
      "100% money-back guarantee",
    ],
    bestFor:
      "Anyone whose credit report has been damaged by multiple dealership visits, repeated applications, or a moderate identity theft incident — and who is ready to move forward toward a home, a car, or financial approval they've been waiting on.",
    cta: "Start With the Standard Plan — $299",
  },
  {
    key: "elite",
    id: "elite-plan",
    label: "Elite Plan",
    price: "$499",
    range: "31 or more total inquiries across all three bureaus",
    tone: "purple",
    pain:
      "If you're carrying 31 or more hard inquiries, your situation is serious — and it didn't happen by accident. You may be a victim of extensive identity theft, with someone else's applications scattered across your report for months or years. You may have spent time rate shopping, visiting dealerships, or applying broadly in a difficult financial window. Whatever the cause, the effect is the same: your score has been systematically pulled down, and lenders are seeing a report that doesn't reflect who you actually are.",
    agitate:
      "With inquiry counts this high, every single application you submit digs the hole a little deeper. Every denial. Every \"we'll need a larger down payment.\" Every rate offer that's three points higher than it should be. It adds up to tens of thousands of dollars over the lifetime of a loan — if you can even get approved.",
    solution:
      "The Elite Plan is our most comprehensive service — an aggressive, fully customized, all-three-bureau dispute campaign built specifically for clients who need the most thorough intervention we offer.",
    features: [
      "Full credit report analysis — every removable inquiry across all three bureaus identified and prioritized",
      "Custom dispute letters for every single inquiry — individually tailored, legally precise, built for maximum impact",
      "Direct submission to Experian, Equifax, and TransUnion — we manage every communication and every response",
      "Dedicated senior specialist assigned to your file — given the complexity, your case gets our most experienced attention",
      "Aggressive multi-law approach — FCRA, FDCPA, FACTA, and Metro 2 applied at every available angle",
      "Post-deletion credit protection strategy — extended guidance appropriate for the scope of your situation",
      "Final results summary — a thorough record of every inquiry removed and your total score improvement",
      "Free consultation included",
      "100% money-back guarantee",
    ],
    bestFor:
      "Identity theft victims, clients who have visited multiple dealerships over an extended period, or anyone carrying a significant unauthorized inquiry burden that requires the most thorough and aggressive removal campaign we can mount.",
    cta: "Start With the Elite Plan — $499",
  },
];

function parseInquiryCount(value: string) {
  if (!value.trim()) {
    return 0;
  }

  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
}

function getRecommendedPlan(total: number): PlanKey | null {
  if (total <= 0) {
    return null;
  }

  if (total <= 10) {
    return "starter";
  }

  if (total <= 30) {
    return "standard";
  }

  return "elite";
}

const SERVICES_PLANNER_SCRIPT = `
const root = document.querySelector('[data-services-planner]');
if (root && !root.dataset.enhanced) {
  root.dataset.enhanced = 'true';
  const plans = {
    starter: { id: 'starter-plan', label: 'Starter Plan' },
    standard: { id: 'standard-plan', label: 'Standard Plan' },
    elite: { id: 'elite-plan', label: 'Elite Plan' },
  };
  const getPlan = (total) => {
    if (total <= 0) return null;
    if (total <= 10) return 'starter';
    if (total <= 30) return 'standard';
    return 'elite';
  };
  const fields = Array.from(root.querySelectorAll('[data-tier-input]'));
  const totalEl = root.querySelector('[data-tier-total]');
  const messageEl = root.querySelector('[data-tier-message]');
  const cards = Array.from(root.querySelectorAll('[data-plan-key]'));
  const update = () => {
    const total = fields.reduce((sum, field) => {
      const clean = String(field.value || '').replace(/[^0-9]/g, '');
      if (field.value !== clean) field.value = clean;
      return sum + (Number.parseInt(clean || '0', 10) || 0);
    }, 0);
    const recommended = getPlan(total);
    const active = recommended || 'standard';
    if (totalEl) totalEl.textContent = String(total);
    if (messageEl) {
      messageEl.innerHTML = recommended
        ? 'Based on your count, the <a class="tier-plan-link" href="#' + plans[recommended].id + '">' + plans[recommended].label + '</a> is your best fit.'
        : '';
    }
    cards.forEach((card) => {
      const isActive = card.getAttribute('data-plan-key') === active;
      card.classList.toggle('service-plan-active', isActive);
      card.classList.toggle('gradient-border', isActive);
    });
  };
  fields.forEach((field) => field.addEventListener('input', update, { passive: true }));
  update();
}
`;

export function ServicesPlanner() {
  const highlightedPlan: PlanKey = "standard";

  return (
    <>
      <section className="services-plans" aria-labelledby="plans-heading" data-services-planner>
        <div className="container">
          <header className="services-section-head services-plans-head">
            <h2 id="plans-heading">Choose the Plan That Fits Your Inquiry Count</h2>
            <p>
              The only difference between our plans is the volume of inquiries we dispute. The process, the expertise, the attention, and the guarantee are identical across every tier.
            </p>
          </header>

          <div className="tier-calculator gradient-border" aria-labelledby="calculator-heading">
            <h3 id="calculator-heading" className="sr-only">
              Inquiry count calculator
            </h3>

            <div className="tier-calculator-grid">
              <label className="tier-field">
                <span>Experian inquiries</span>
                <input
                  inputMode="numeric"
                  pattern="[0-9]*"
                  defaultValue=""
                  placeholder="0"
                  aria-label="Experian inquiries"
                  data-tier-input="experian"
                />
              </label>
              <label className="tier-field">
                <span>Equifax inquiries</span>
                <input
                  inputMode="numeric"
                  pattern="[0-9]*"
                  defaultValue=""
                  placeholder="0"
                  aria-label="Equifax inquiries"
                  data-tier-input="equifax"
                />
              </label>
              <label className="tier-field">
                <span>TransUnion inquiries</span>
                <input
                  inputMode="numeric"
                  pattern="[0-9]*"
                  defaultValue=""
                  placeholder="0"
                  aria-label="TransUnion inquiries"
                  data-tier-input="transunion"
                />
              </label>
              <div className="tier-total" aria-live="polite">
                <span>Total → Your Plan</span>
                <strong data-tier-total>0</strong>
                <em data-tier-message />
              </div>
            </div>
          </div>

          <div className="services-plan-grid">
            {PLANS.map((plan) => (
              <article
                key={plan.key}
                id={plan.id}
                data-plan-key={plan.key}
                className={`service-plan service-plan-${plan.tone} ${
                  highlightedPlan === plan.key ? "service-plan-active gradient-border" : ""
                }`}
              >
                <div className="service-plan-top">
                  <div>
                    <p className="service-plan-kicker">Problem</p>
                    <p className="service-plan-copy">{plan.pain}</p>
                  </div>
                  <div className="service-plan-price">
                    <span>{plan.label}</span>
                    <strong>{plan.price}</strong>
                    {plan.badge ? <em>{plan.badge}</em> : null}
                  </div>
                </div>

                <div className="service-plan-flow">
                  <div>
                    <p className="service-plan-kicker service-plan-kicker-warn">Agitate</p>
                    <p className="service-plan-copy">{plan.agitate}</p>
                  </div>
                  <div>
                    <p className="service-plan-kicker service-plan-kicker-good">Solution</p>
                    <p className="service-plan-copy">{plan.solution}</p>
                  </div>
                </div>

                <div className="service-plan-range">
                  <span>{plan.range}</span>
                </div>

                <ul className="service-plan-list">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <PremiumIcon name="checkBadge" size={16} strokeWidth={1.9} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="service-plan-bestfor">
                  <strong>Best for:</strong> {plan.bestFor}
                </p>

                <Link href="/get-started" className="btn btn-primary btn-large service-plan-cta">
                  {plan.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
        <script type="module" dangerouslySetInnerHTML={{ __html: SERVICES_PLANNER_SCRIPT }} />
      </section>
</>
  );
}
