import type { Metadata } from "next";
import Link from "next/link";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { PageHero } from "@/components/PageHero";
import { PricingPlanner } from "@/components/PricingPlanner";
import { PremiumIcon } from "@/components/PremiumIcons";
import { pricingPageFaqSchema, pricingPageServiceSchema } from "@/lib/schema";

const FAQS = [
  {
    question:
      "Why do you charge a flat fee instead of monthly like other credit repair companies?",
    answer:
      "We charge a flat fee because a monthly subscription would give us a financial incentive to move slowly — and we refuse to build that conflict of interest into our business model. Monthly billing benefits the company, not the client. A flat fee means our incentive is completely aligned with your outcome: the faster your inquiries are removed, the better we've done our job. We chose the structure that works for you, not for us.",
  },
  {
    question:
      "What if I'm not sure how many inquiries I have — how do I know which plan to choose?",
    answer:
      "You don't need to know before the free consultation. That's exactly what the consultation is for — we pull your full credit reports, count every hard inquiry across Experian, Equifax, and TransUnion, and tell you precisely which plan fits your situation before you spend anything. There's no obligation and no credit card required to find out.",
  },
  {
    question: "Is this actually worth it — what if my inquiries can't be removed?",
    answer:
      "If your inquiries don't qualify for removal, we tell you that in the free consultation — before you pay anything. We have a review-first qualification standard across 1,123 clients because we only take cases where the legal grounds for removal exist. The consultation exists specifically so you're never in a situation where you've paid for something we can't deliver. And if you do sign up and we don't remove a single inquiry within 90 days, you receive a full refund under our money-back guarantee.",
  },
  {
    question: "Why should I pay for this when I could dispute the inquiries myself?",
    answer:
      "You can file your own disputes — we are always honest about that. The challenge is that the process requires knowing which specific provision of federal law applies to each specific inquiry type, how to construct a legally precise argument that a bureau cannot dismiss as a template, and how to escalate correctly when a bureau responds with \"verified\" — which is the response that stops most self-filers permanently. We've spent eleven years doing only this. The knowledge gap between a first-time self-filer and a team that has successfully removed over 100,437 inquiries is not something a weekend of research closes. But if you want to try first and come back, we'll be here.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "We do not offer payment plans at this time. Our flat fees are structured specifically to be accessible — $199 for the Starter Plan, $299 for the Standard, and $499 for the Elite — and are priced well below what comparable services charge on a monthly basis over the same timeframe. If affordability is a concern, we encourage you to consider what the inquiries are currently costing you in interest rates and loan terms — in most cases, the flat fee is recovered within the first few loan payments at the improved rate.",
  },
  {
    question:
      "I've paid a credit repair company before and got nothing. Why would this be different?",
    answer:
      "The most common reason clients come to us after a prior company failed is structural: most credit repair companies treat inquiry removal as one item on a checklist. They use the same generic strategy for inquiries that they'd use for a collection or a late payment — and bureaus dismiss that approach quickly. We do one thing. Inquiry removal is our entire practice, our entire knowledge base, and the only thing every dollar of your flat fee goes toward. That specialization is why we succeed where generalists stall. The results on our Results page are from real clients — many of whom came to us after a prior company failed to deliver.",
  },
];

const VALUE_QUOTES = [
  {
    quote:
      '"I almost didn\'t do it because I was worried about the $299. Then I thought about what I was paying in interest on my car loan because of my score. The math was embarrassing. Within 45 days, 22 inquiries were gone, my score was up 88 points, and my mortgage came through at a rate that saves me over $200 a month. I made the $299 back before I even moved in."',
    footer: "Sophia M. | Dallas, TX | Standard Plan",
    proof: "22 Inquiries Removed | +88 Points | Mortgage Approved",
  },
  {
    quote:
      '"I spent four months paying $99 a month to a different company and my inquiry count didn\'t move at all. I paid $299 to Inquiry Removal and 19 inquiries were gone in 47 days. I did the math: the other company cost me $396 and did nothing. This one cost me $299 and changed everything. I think about that a lot."',
    footer: "Marcus T. | Phoenix, AZ | Standard Plan",
    proof: "19 Inquiries Removed | +94 Points | First Home Purchased",
  },
  {
    quote:
      '"Thirty-four fraudulent inquiries — I thought fixing it would cost thousands. The Elite Plan was $499 and every single inquiry was gone in 61 days. My score went up 112 points. I got reapproved for my credit card. I don\'t know how to put a number on what that peace of mind is worth but it\'s a lot more than $499."',
    footer: "Diana R. | Houston, TX | Elite Plan",
    proof: "34 Fraudulent Inquiries Removed | +112 Points | Full Score Restored",
  },
];

export const metadata: Metadata = {
  title: {
    absolute: "Hard Inquiry Removal Pricing | Plans Start at $199",
  },
  description:
    "One flat fee. No monthly charges. No surprises. Plans from $199 to $499 based on your inquiry count. Free consultation. 100% money-back guarantee.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Hard Inquiry Removal Pricing | Plans Start at $199",
    description:
      "One flat fee. No monthly charges. No surprises. Plans from $199 to $499 based on your inquiry count. Free consultation. 100% money-back guarantee.",
    url: "https://www.inquiryremoval.com/pricing",
  },
  twitter: {
    title: "Hard Inquiry Removal Pricing | Plans Start at $199",
    description:
      "One flat fee. No monthly charges. No surprises. Plans from $199 to $499 based on your inquiry count. Free consultation. 100% money-back guarantee.",
  },
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingPageServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingPageFaqSchema) }}
      />
      <AnnouncementBar />
      <Navigation />

      <main id="main" className="pricing-page">
        <PageHero
          id="pricing-hero-heading"
          eyebrow="Flat-fee pricing"
          title={
            <>
              Before We Talk About What This Costs, Let&apos;s Talk About What Your Inquiries Are <span className="ir-gradient-text">Already Costing You</span>.
            </>
          }
          subtitle={
            <p>
              The price of removing hard inquiries is a flat fee between $199 and $499. The price of leaving them there is measured in interest rates, loan denials, and the financial opportunities that quietly disappear while your score stays suppressed.
            </p>
          }
        >
          <div className="pricing-card-icon" aria-hidden="true">
            <PremiumIcon name="scoreRise" size={24} />
          </div>
          <span>Scenario 1 — The Home Buyer</span>
          <strong>$72,720 saved</strong>
          <div className="pricing-meter" aria-hidden="true">
            <i />
          </div>
          <div className="pricing-hero-mini-grid">
            <p>
              <small>With Suppressed Score</small>
              <b>680</b>
            </p>
            <p>
              <small>After Inquiry Removal</small>
              <b>740+</b>
            </p>
          </div>
          <p className="pricing-card-bottom">
            <span>Cost of Standard Plan</span>
            <b>$299</b>
          </p>
        </PageHero>

        <section className="pricing-value section-divider" aria-label="Cost of inaction">
          <div className="container pricing-value-shell">
            <div className="pricing-value-anchor">
              <span>One flat fee</span>
              <strong>$199–$499</strong>
              <p>No monthly charges. No reason for us to move slowly.</p>
            </div>

            <div className="pricing-copy-card">
              <p>
                Most people who find Inquiry Removal aren't thinking about the
                dollar cost of their situation yet. They're thinking about the
                home they can't get approved for. The car loan that came back at
                a rate so high it made the monthly payment unworkable. The
                mortgage application that keeps getting kicked back because of a
                number that doesn't reflect a single financial decision they
                actually made. The feeling that a perfect afternoon at a
                dealership — or someone else's theft of their identity — is
                standing between them and the life they've been building toward.
              </p>
              <p>
                Here is what that feeling costs in actual dollars. On a $300,000
                mortgage, the difference between a 680 credit score and a 740
                credit score is typically 0.5 to 1.5 percentage points of
                interest. At 1 point of difference, that is $3,000 per year —
                $90,000 over the life of a 30-year loan — paid to a lender
                because a cluster of unauthorized hard inquiries suppressed a
                score that should have been higher. On a $35,000 auto loan, the
                same score gap can mean the difference between a 5% rate and a
                10% rate — a difference of over $9,000 in total interest paid.
                And that is before accounting for the applications that don't
                get approved at all — the opportunities that simply never
                materialize because the score didn't clear the threshold.
              </p>
              <p>
                Hard inquiries can lower a credit score by 5 to 10 points each.
                A single dealership visit that results in 20 unauthorized credit
                pulls can drop a score by 80 to 100 points or more in a single
                afternoon. At that level of suppression, the financial
                consequences are not theoretical — they are built into every
                loan offer, every insurance premium, and every credit decision
                made against that score for as long as the inquiries remain.
              </p>
              <p>
                Now look at our pricing. A single flat fee — paid once, never
                again — ranging from $199 to $499 depending on your inquiry
                count. No monthly charges. No reason for us to move slowly. Just
                one payment, one focused effort, and every federal law at our
                disposal applied to getting your score back where it belongs.
                What you spend here is not a cost. It is the thing that stops
                the much larger, much quieter cost that has been running in the
                background every single day those inquiries have been sitting on
                your report.
              </p>
              <p className="pricing-aeo">
                Inquiry Removal charges a one-time flat fee of $199, $299, or
                $499 based on the total number of hard inquiries across all
                three credit bureaus — with the same white-glove service, custom
                dispute letters, and 100% money-back guarantee at every tier.
              </p>
              <p className="pricing-related-links">
                Need a bureau-specific breakdown? Review our{" "}
                <Link href="/remove-hard-inquiry-experian" className="inline-bureau-link" data-astro-prefetch>
                  Experian
                </Link>
                ,{" "}
                <Link href="/remove-hard-inquiry-equifax" className="inline-bureau-link" data-astro-prefetch>
                  Equifax
                </Link>
                , and{" "}
                <Link href="/remove-hard-inquiry-transunion" className="inline-bureau-link" data-astro-prefetch>
                  TransUnion
                </Link>{" "}
                inquiry removal guides.
              </p>
            </div>
          </div>
        </section>

        <PricingPlanner />

        <section className="pricing-guarantee section-divider" aria-labelledby="pricing-guarantee-heading">
          <div className="container pricing-narrow">
            <div className="pricing-section-marker" aria-hidden="true" />
            <h2 id="pricing-guarantee-heading">The Risk Is Ours. Not Yours.</h2>
            <div className="pricing-copy-card pricing-guarantee-card">
              <p>
                Every plan — Starter, Standard, and Elite — is backed by the same
                100% money-back guarantee.
              </p>
              <p>
                If we do not remove a single hard inquiry from your credit
                report within 90 days of beginning service, you receive a full
                refund of your flat fee. No conditions buried in paragraph seven
                of the terms. No "store credit." No "we'll try harder next
                month." A full refund — verified and processed.
              </p>
              <p>
                We verify results before issuing any refund because that is the
                honest and fair way to operate. In nearly eleven years and over
                1,123 clients served nationwide, we have maintained a review-first standard. We offer the guarantee not because we expect to use
                it — but because you have every right to know it's there before
                you trust us with anything.
              </p>
              <p className="pricing-mini-disclaimer">
                Individual results vary based on each client's specific credit
                report, inquiry type, and bureau response.
              </p>
            </div>
          </div>
        </section>

        <section className="pricing-faq section-divider" aria-labelledby="pricing-faq-heading">
          <div className="container">
            <div className="pricing-section-head">
              <div className="pricing-section-marker" aria-hidden="true" />
              <h2 id="pricing-faq-heading">
                Pricing Questions We Hear Before Every Signup
              </h2>
            </div>

            <div className="pricing-faq-list">
              {FAQS.map((item) => (
                <details key={item.question} className="pricing-faq-card" name="pricing-faq">
                  <summary>
                    <span>{item.question}</span>
                    <b aria-hidden="true">+</b>
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
              <Link href="/results" className="pricing-inline-link">
                See the proof for yourself <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="pricing-testimonials section-divider" aria-labelledby="pricing-testimonials-heading">
          <div className="container">
            <div className="pricing-section-head">
              <div className="pricing-section-marker" aria-hidden="true" />
              <h2 id="pricing-testimonials-heading">
                What Clients Say About Whether It Was Worth It
              </h2>
            </div>

            <div className="pricing-testimonial-grid">
              {VALUE_QUOTES.map((quote) => (
                <blockquote key={quote.footer} className="pricing-testimonial-card">
                  <p>{quote.quote}</p>
                  <footer>{quote.footer}</footer>
                  <span>★★★★★ | {quote.proof}</span>
                </blockquote>
              ))}
            </div>
          </div>
        </section>


        <section className="pricing-closing section-divider" aria-labelledby="pricing-closing-heading">
          <div className="container">
            <div className="pricing-closing-card">
              <h2 id="pricing-closing-heading">
                Not Sure Which Plan Fits Your Situation? Let's Figure It Out
                Together — For Free.
              </h2>
              <p>
                You don't need to count your inquiries before you call. You don't
                need to know which plan you need. You don't need to have your
                credit reports pulled. The free consultation takes fifteen
                minutes and answers every one of those questions before you
                spend a single dollar.
              </p>
              <p>
                We'll review your reports together, count every hard inquiry
                across all three bureaus, identify which ones qualify for
                removal, and tell you exactly which plan fits — along with what
                your score could realistically look like on the other side.
              </p>
              <p>No pressure. No obligation. No credit card required.</p>

              <div className="pricing-closing-actions">
                <Link href="/get-started" className="btn btn-primary btn-large">
                  Book My Free Consultation
                </Link>
                <a href="tel:+16023776626" className="btn btn-secondary btn-large">
                  Prefer to call? Reach Robert directly at 602-377-6626
                </a>
              </div>

              <p className="pricing-fear-killer">
                Plans start at $199. Paid once. Never again. 100% money-back
                guarantee if no inquiries are removed within 90 days.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
</>
  );
}
