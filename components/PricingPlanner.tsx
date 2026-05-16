"use client";

import Link from "@/components/InstantLink";
import { useMemo, useState } from "react";

type PlanKey = "starter" | "standard" | "elite";
type LoanType = "mortgage" | "auto" | "card";

type Plan = {
  key: PlanKey;
  label: string;
  price: string;
  range: string;
  badge?: string;
  summary?: string;
  features: string[];
  bestFor: string;
  comparison?: string;
  cta: string;
};

const PLANS: Plan[] = [
  {
    key: "starter",
    label: "Starter Plan",
    price: "$199",
    range: "1 to 10 Total Inquiries Across All Three Bureaus",
    features: [
      "Full credit report analysis — every removable inquiry identified across all three bureaus",
      "Custom dispute letters built specifically for your inquiries — never templates",
      "Direct submission to Experian, Equifax, and TransUnion — we handle every communication",
      "Dedicated specialist assigned to your file",
      "Post-deletion credit protection strategy",
      "Final results summary",
      "Free consultation included",
      "100% money-back guarantee",
    ],
    bestFor:
      "Someone who had a single dealership visit, one online application that triggered an unexpected cluster of pulls, or a small group of unauthorized inquiries they want resolved quickly and cleanly.",
    cta: "Start With the Starter Plan — $199",
  },
  {
    key: "standard",
    label: "Standard Plan",
    price: "$299",
    range: "11 to 30 Total Inquiries Across All Three Bureaus — Most Popular",
    badge: "Most Popular",
    summary:
      "Most clients fall here. This plan represents the full power of everything we do, applied to the most common inquiry volume we see.",
    features: [
      "Full credit report analysis — every removable inquiry identified across Experian, Equifax, and TransUnion",
      "Custom dispute letters built specifically for each inquiry — FCRA, FDCPA, FACTA, and Metro 2 applied precisely",
      "Direct submission to all three bureaus — we handle every communication and every follow-up",
      "Dedicated specialist assigned to your file — one person who knows your case",
      "All bureau responses monitored — \"verified\" responses challenged, not accepted",
      "Post-deletion credit protection strategy — personalized guidance for protecting your score going forward",
      "Final results summary — complete record of every inquiry removed and your score improvement",
      "Free consultation included",
      "100% money-back guarantee",
    ],
    bestFor:
      "Anyone whose report has been hit by multiple dealership visits, repeated applications, or a moderate identity theft incident — and who is ready to move toward a home, a car, or a financial approval they've been waiting on.",
    comparison:
      "The value comparison: At $299 for up to 30 inquiries, this plan costs less than three months of a competitor's subscription service — and unlike a subscription, it ends the moment your inquiries are gone.",
    cta: "Start With the Standard Plan — $299 ← Most Popular",
  },
  {
    key: "elite",
    label: "Elite Plan",
    price: "$499",
    range: "31 or More Total Inquiries Across All Three Bureaus",
    features: [
      "Full credit report analysis — every removable inquiry identified across all three bureaus",
      "Custom dispute letters built for every single inquiry — individually tailored, not templated",
      "Direct submission to Experian, Equifax, and TransUnion simultaneously",
      "Senior dedicated specialist assigned to your file",
      "Aggressive multi-law approach — FCRA, FDCPA, FACTA, and Metro 2 applied at every available angle",
      "All bureau responses monitored and challenged where necessary",
      "Post-deletion credit protection strategy — extended guidance for your situation",
      "Final results summary — complete record of every inquiry removed and your score improvement",
      "Free consultation included",
      "100% money-back guarantee",
    ],
    bestFor:
      "Identity theft victims, clients who visited multiple dealerships over an extended period, or anyone carrying 31 or more unauthorized or excessive hard inquiries that require the most thorough and aggressive removal campaign we offer.",
    cta: "Start With the Elite Plan — $499",
  },
];

const HOME_SCENARIO = [
  ["Loan Amount", "$300,000", "$300,000", "—"],
  ["Interest Rate", "6.87% (estimated)", "6.22% (estimated)", "0.65%"],
  ["Monthly Payment", "$1,970", "$1,841", "$129/month"],
  ["Total Interest (30 yr)", "$409,122", "$362,869", "$46,254 saved"],
  ["Cost of Standard Plan", "—", "$299", "—"],
  ["Return on Investment", "—", "—", "$45,955 net savings"],
];

const AUTO_SCENARIO = [
  ["Loan Amount", "$35,000", "$35,000", "—"],
  ["Interest Rate", "9.57% (near prime avg.)", "6.27% (prime avg.)", "3.30%"],
  ["Monthly Payment", "$736", "$681", "$55/month"],
  ["Total Interest (60 mo.)", "$9,176", "$5,863", "$3,313 saved"],
  ["Cost of Starter Plan", "—", "$199", "—"],
  ["Return on Investment", "—", "—", "$3,114 net savings"],
];

const CARD_SCENARIO = [
  ["Application Result", "Denied or high APR", "Better approval odds", "Approval unlocked"],
  ["Average APR Offered", "24.57% (estimated)", "19.57% avg.", "5.0% lower"],
  ["Annual Interest on $5,000 balance", "$1,229", "$979", "$250/year saved"],
  ["Cost of Starter Plan", "—", "$199", "—"],
  ["Break-Even", "—", "—", "Less than 10 months"],
];

const RATE_BENCHMARKS = {
  mortgage30: {
    averageRate: 0.0637,
    asOf: "May 7, 2026",
    source: "Freddie Mac PMMS 30-year fixed national average",
  },
  auto60New: {
    averageRate: 0.0697,
    asOf: "May 6, 2026",
    source: "Bankrate 60-month new car national average",
  },
  creditCard: {
    averageRate: 0.1957,
    asOf: "May 6, 2026",
    source: "Bankrate weekly national average credit card APR",
  },
} as const;


function parsePositiveInt(value: string) {
  if (!value.trim()) {
    return 0;
  }

  const parsed = Number.parseInt(value, 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
}

function getRecommendedPlan(total: number): PlanKey | null {
  if (total <= 0) return null;
  if (total <= 10) return "starter";
  if (total <= 30) return "standard";
  return "elite";
}

function clampScore(score: number) {
  if (!Number.isFinite(score) || score <= 0) return 0;
  return Math.max(300, Math.min(850, score));
}

function paymentForLoan(principal: number, annualRate: number, months: number) {
  const monthlyRate = annualRate / 12;
  if (monthlyRate === 0) return principal / months;
  return (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
}

function formatCurrency(value: number, maximumFractionDigits = 0) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits,
  }).format(value);
}

function rateForMortgage(score: number) {
  const average = RATE_BENCHMARKS.mortgage30.averageRate;

  if (score >= 760) return average - 0.0025;
  if (score >= 740) return average - 0.0015;
  if (score >= 700) return average;
  if (score >= 680) return average + 0.0025;
  if (score >= 660) return average + 0.005;
  if (score >= 640) return average + 0.0075;
  if (score >= 620) return average + 0.01;
  return average + 0.015;
}

function rateForAuto(score: number) {
  if (score >= 781) return 0.0466;
  if (score >= 661) return 0.0627;
  if (score >= 601) return 0.0957;
  if (score >= 501) return 0.1317;
  return 0.1601;
}

function rateForCard(score: number) {
  const average = RATE_BENCHMARKS.creditCard.averageRate;

  if (score >= 760) return average - 0.035;
  if (score >= 720) return average - 0.02;
  if (score >= 680) return average;
  if (score >= 640) return average + 0.025;
  if (score >= 600) return average + 0.05;
  return average + 0.075;
}

function planPriceForScoreGain(score: number) {
  if (score >= 700) return 199;
  if (score >= 620) return 299;
  return 499;
}

export function PricingPlanner() {
  const [experian, setExperian] = useState("");
  const [equifax, setEquifax] = useState("");
  const [transunion, setTransunion] = useState("");
  const [loanType, setLoanType] = useState<LoanType>("mortgage");
  const [loanAmount, setLoanAmount] = useState("300000");
  const [currentScore, setCurrentScore] = useState("680");

  const inquiryStats = useMemo(() => {
    const exp = parsePositiveInt(experian);
    const eq = parsePositiveInt(equifax);
    const tu = parsePositiveInt(transunion);
    const total = exp + eq + tu;
    const recommended = getRecommendedPlan(total);
    return { total, recommended };
  }, [equifax, experian, transunion]);

  const costProjection = useMemo(() => {
    const score = clampScore(parsePositiveInt(currentScore));
    const amount = parsePositiveInt(loanAmount);
    const improvedScore = score ? Math.min(score + 60, 760) : 0;

    if (!score || !amount) {
      return null;
    }

    if (loanType === "mortgage") {
      const currentRate = rateForMortgage(score);
      const improvedRate = rateForMortgage(improvedScore);
      const months = 360;
      const currentMonthly = paymentForLoan(amount, currentRate, months);
      const improvedMonthly = paymentForLoan(amount, improvedRate, months);
      const currentInterest = currentMonthly * months - amount;
      const improvedInterest = improvedMonthly * months - amount;
      const fee = 299;
      const savings = currentInterest - improvedInterest;

      return {
        currentRate,
        improvedRate,
        currentMonthly,
        improvedMonthly,
        savings,
        fee,
        percentage: savings > 0 ? (fee / savings) * 100 : 0,
        benchmark: RATE_BENCHMARKS.mortgage30,
        months,
      };
    }

    if (loanType === "auto") {
      const currentRate = rateForAuto(score);
      const improvedRate = rateForAuto(improvedScore);
      const months = 60;
      const currentMonthly = paymentForLoan(amount, currentRate, months);
      const improvedMonthly = paymentForLoan(amount, improvedRate, months);
      const currentInterest = currentMonthly * months - amount;
      const improvedInterest = improvedMonthly * months - amount;
      const fee = 199;
      const savings = currentInterest - improvedInterest;

      return {
        currentRate,
        improvedRate,
        currentMonthly,
        improvedMonthly,
        savings,
        fee,
        percentage: savings > 0 ? (fee / savings) * 100 : 0,
        benchmark: RATE_BENCHMARKS.auto60New,
        months,
      };
    }

    const currentRate = rateForCard(score);
    const improvedRate = rateForCard(improvedScore);
    const annualCurrent = amount * currentRate;
    const annualImproved = amount * improvedRate;
    const savings = annualCurrent - annualImproved;
    const fee = planPriceForScoreGain(score);

    return {
      currentRate,
      improvedRate,
      currentMonthly: annualCurrent / 12,
      improvedMonthly: annualImproved / 12,
      savings,
      fee,
      percentage: savings > 0 ? (fee / savings) * 100 : 0,
      benchmark: RATE_BENCHMARKS.creditCard,
      months: 12,
    };
  }, [currentScore, loanAmount, loanType]);

  return (
    <>
      <section id="pricing-plans" className="pricing-tiers" aria-labelledby="pricing-tiers-heading">
        <div className="container">
          <header className="services-section-head pricing-section-head">
            <h2 id="pricing-tiers-heading">
              One Flat Fee. Three Plans. The Same Result at Every Level.
            </h2>
            <p>
              Count your inquiries across Experian, Equifax, and TransUnion,
              then find your plan below. Not sure of your count? The free
              consultation takes care of that.
            </p>
          </header>

          <div className="pricing-calculator">
            <div className="pricing-count-grid">
              <label>
                <span>Experian</span>
                <input
                  type="number"
                  min="0"
                  inputMode="numeric"
                  data-pricing-count="experian"
                  value={experian}
                  onChange={(event) => setExperian(event.target.value)}
                  placeholder="0"
                />
              </label>
              <label>
                <span>Equifax</span>
                <input
                  type="number"
                  min="0"
                  inputMode="numeric"
                  data-pricing-count="equifax"
                  value={equifax}
                  onChange={(event) => setEquifax(event.target.value)}
                  placeholder="0"
                />
              </label>
              <label>
                <span>TransUnion</span>
                <input
                  type="number"
                  min="0"
                  inputMode="numeric"
                  data-pricing-count="transunion"
                  value={transunion}
                  onChange={(event) => setTransunion(event.target.value)}
                  placeholder="0"
                />
              </label>
              <div className="pricing-total-card">
                <span>Total</span>
                <strong data-pricing-total>{inquiryStats.total}</strong>
                <p data-pricing-recommendation>
                  {inquiryStats.recommended
                    ? `Based on your count — the ${
                        PLANS.find((plan) => plan.key === inquiryStats.recommended)?.label
                      } is your best fit.`
                    : ""}
                </p>
              </div>
            </div>
          </div>

          <div className="pricing-plan-grid">
            {PLANS.map((plan) => {
              const highlighted = inquiryStats.recommended === plan.key;
              const featured = plan.key === "standard";

              return (
                <article
                  key={plan.key}
                  className={`pricing-plan-card ${featured ? "pricing-plan-featured" : ""} ${
                    highlighted ? "pricing-plan-highlighted" : ""
                  }`.trim()}
                  data-pricing-plan={plan.key}
                >
                  <div className="pricing-plan-top">
                    <div>
                      {plan.badge ? <span className="pricing-plan-badge">{plan.badge}</span> : null}
                      <h3>{plan.label}</h3>
                      <p className="pricing-plan-price">{plan.price}</p>
                      <p className="pricing-plan-range">{plan.range}</p>
                    </div>
                    {highlighted ? (
                      <span className="pricing-plan-callout">
                        Based on your count — the {plan.label} is your best fit.
                      </span>
                    ) : null}
                  </div>

                  {plan.summary ? <p className="pricing-plan-summary">{plan.summary}</p> : null}

                  <ul className="pricing-plan-features">
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>

                  <p className="pricing-plan-best">
                    <strong>Best For:</strong> {plan.bestFor}
                  </p>

                  {plan.comparison ? (
                    <p className="pricing-plan-comparison">{plan.comparison}</p>
                  ) : null}

                  <Link href="/get-started" className="btn btn-primary pricing-plan-cta">
                    {plan.cta}
                  </Link>
                </article>
              );
            })}
          </div>

          <div className="pricing-payment-note">
            <p>
              <strong>Payment Methods:</strong> Zelle and Apple Pay accepted.
            </p>
            <p>
              No credit card required for your free consultation. Payment is
              collected only after you&apos;ve reviewed your report, confirmed your
              plan, and decided to move forward — not before.
            </p>
          </div>
        </div>
      </section>

      <section className="pricing-roi section-divider" aria-labelledby="pricing-roi-heading">
        <div className="container">
          <header className="services-section-head pricing-section-head">
            <h2 id="pricing-roi-heading">
              What Your Inquiries Are Actually Costing You — Right Now
            </h2>
            <p>
              The price of our service is fixed. The cost of leaving your
              inquiries in place is not.
            </p>
          </header>

          <div className="pricing-roi-calculator">
            <div className="pricing-roi-controls">
              <label>
                <span>Loan type</span>
                <select
                  data-roi-field="loanType"
                  value={loanType}
                  onChange={(event) => setLoanType(event.target.value as LoanType)}
                >
                  <option value="mortgage">Home loan</option>
                  <option value="auto">Auto loan</option>
                  <option value="card">Credit card balance</option>
                </select>
              </label>
              <label>
                <span>{loanType === "card" ? "Balance amount" : "Loan amount"}</span>
                <input
                  type="number"
                  min="0"
                  inputMode="numeric"
                  data-roi-field="loanAmount"
                  value={loanAmount}
                  onChange={(event) => setLoanAmount(event.target.value)}
                  placeholder={loanType === "auto" ? "35000" : loanType === "card" ? "5000" : "300000"}
                />
              </label>
              <label>
                <span>Current credit score</span>
                <input
                  type="number"
                  min="300"
                  max="850"
                  inputMode="numeric"
                  data-roi-field="currentScore"
                  value={currentScore}
                  onChange={(event) => setCurrentScore(event.target.value)}
                  placeholder="680"
                />
              </label>
            </div>

            <div className="pricing-roi-summary">
              {costProjection ? (
                <>
                  <article>
                    <span>Estimated current rate</span>
                    <strong data-roi-output="currentRate">{(costProjection.currentRate * 100).toFixed(2)}%</strong>
                  </article>
                  <article>
                    <span>Estimated improved rate</span>
                    <strong data-roi-output="improvedRate">{(costProjection.improvedRate * 100).toFixed(2)}%</strong>
                  </article>
                  <article>
                    <span>Monthly difference</span>
                    <strong data-roi-output="monthlyDifference">
                      {formatCurrency(costProjection.currentMonthly - costProjection.improvedMonthly)}
                    </strong>
                  </article>
                  <article>
                    <span>
                      {loanType === "card"
                        ? "Estimated annual savings"
                        : "Estimated interest savings"}
                    </span>
                    <strong data-roi-output="savings">{formatCurrency(costProjection.savings)}</strong>
                  </article>
                  <article>
                    <span>Inquiry Removal flat fee</span>
                    <strong data-roi-output="fee">{formatCurrency(costProjection.fee)}</strong>
                  </article>
                  <article>
                    <span>Flat fee as % of savings</span>
                    <strong data-roi-output="percentage">{costProjection.percentage.toFixed(1)}%</strong>
                  </article>
                </>
              ) : (
                <p>Add your numbers above and we&apos;ll estimate the cost gap.</p>
              )}
            </div>

            {costProjection ? (
              <p className="pricing-roi-source-note" data-roi-source-note>
                Rates use {costProjection.benchmark.source}, updated {costProjection.benchmark.asOf}.
                Actual offers vary by lender, loan terms, income, vehicle/home details, and credit profile.
              </p>
            ) : null}
          </div>

          <div className="pricing-scenarios">
            <article className="pricing-scenario-card">
              <h3>Scenario 1 — The Home Buyer</h3>
              <table>
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>With Suppressed Score (680)</th>
                    <th>After Inquiry Removal (740+)</th>
                    <th>Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {HOME_SCENARIO.map((row) => (
                    <tr key={row[0]}>
                      <th scope="row">{row[0]}</th>
                      <td>{row[1]}</td>
                      <td>{row[2]}</td>
                      <td>{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p>
                Mortgage estimates use the current Freddie Mac 30-year fixed
                national average as the baseline, then adjust by credit-score
                tier for illustration. Actual offers vary by lender and loan
                details.
              </p>
            </article>

            <article className="pricing-scenario-card">
              <h3>Scenario 2 — The Car Buyer</h3>
              <table>
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>With Suppressed Score (620)</th>
                    <th>After Inquiry Removal (700+)</th>
                    <th>Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {AUTO_SCENARIO.map((row) => (
                    <tr key={row[0]}>
                      <th scope="row">{row[0]}</th>
                      <td>{row[1]}</td>
                      <td>{row[2]}</td>
                      <td>{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p>
                Auto estimates use current national average and score-tier
                data. Actual offers vary by lender, vehicle, term, and credit
                profile.
              </p>
            </article>

            <article className="pricing-scenario-card">
              <h3>Scenario 3 — The Credit Card Applicant</h3>
              <table>
                <thead>
                  <tr>
                    <th>Metric</th>
                    <th>With Suppressed Score</th>
                    <th>After Inquiry Removal</th>
                    <th>Difference</th>
                  </tr>
                </thead>
                <tbody>
                  {CARD_SCENARIO.map((row) => (
                    <tr key={row[0]}>
                      <th scope="row">{row[0]}</th>
                      <td>{row[1]}</td>
                      <td>{row[2]}</td>
                      <td>{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </article>
          </div>

          <p className="pricing-roi-close">
            The flat fee you pay Inquiry Removal is a one-time number. The
            savings on the other side of a higher credit score are compounding —
            built into every loan payment, every insurance renewal, and every
            financial decision made against your score for years to come. Run
            the numbers for your situation. The math is not close.
          </p>
        </div>
      </section>
    </>
  );
}
