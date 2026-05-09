import type { Metadata } from "next";
import Link from "next/link";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { PageHero } from "@/components/PageHero";
import { PremiumIcon } from "@/components/PremiumIcons";
import { ProofImageSlot } from "@/components/ProofImageSlot";
import dynamic from "next/dynamic";
import { resultsPageSchema } from "@/lib/schema";

const ResultsFilter = dynamic(() =>
  import("@/components/ResultsFilter").then((mod) => mod.ResultsFilter),
);

const HERO_STATS = [
  { value: "100,437", label: "Hard Inquiries Permanently Deleted" },
  { value: "1,123", label: "Clients Helped Nationwide" },
  { value: "50–100+", label: "Average Point Score Increase" },
  { value: "4.9 ★", label: "Average Rating — 312 Google Reviews" },
  { value: "Review First", label: "We Evaluate Fit Before Taking a Case" },
];

const CASE_STUDIES = [
  {
    title: "The Car Shopper Who Got Ambushed",
    client: "Marcus T. | Phoenix, AZ | Standard Plan — $299",
    before:
      "Marcus spent one Saturday visiting three car dealerships. He was upfront with each one — he was comparing options and did not want his application submitted to multiple lenders. Each dealership submitted it anyway. By Monday morning, his Experian, Equifax, and TransUnion reports showed 22 hard inquiries from lenders he had never spoken to. His credit score, which had been a reliable 680, dropped to 612. When he went back to apply for financing on the car he actually wanted, he was denied. When he started looking at homes — the real goal — his lender told him the inquiry count alone was disqualifying.",
    beforeStat:
      "Starting point: 612 credit score | 22 unauthorized hard inquiries across all three bureaus | Frustrated, blindsided, denied.",
    after:
      "Within 24 hours of signing up for the Standard Plan, Marcus's custom dispute letters were submitted to all three bureaus. Fourteen days later, the first wave of removals hit Experian. By day 47, 19 of the 22 inquiries had been permanently deleted. His credit score climbed from 612 to 706 — a 94-point increase. He went back to his mortgage lender with the updated report. He closed on his first home six weeks later.",
    afterStat:
      "End result: 706 credit score | 19 of 22 inquiries removed | First home purchased.",
    bridge:
      "What changed between the before and after was not Marcus's financial behavior, his income, or his payment history. None of that had moved. What changed was the removal of 19 unauthorized hard inquiries that had been artificially suppressing a score he had earned through years of responsible credit use. The inquiries didn't belong there. Removing them revealed the score that was always underneath.",
    quote:
      '"I went to three car dealerships in one weekend and had no idea what was happening to my credit. Inquiry Removal removed 19 inquiries in 47 days and my score jumped 94 points. We closed on our first home last month. None of it would have happened without this team."',
    footer:
      "Marcus T. | First-Time Home Buyer | Phoenix, AZ",
    proof: "19 Inquiries Removed | +94 Points | Home Purchased in 47 Days",
  },
  {
    title: "The Identity Theft Victim Who Needed Everything Gone",
    client: "Diana R. | Houston, TX | Elite Plan — $499",
    before:
      "Diana noticed something wrong when she was denied for a credit card she had used responsibly for years. She pulled her full credit reports and found 34 hard inquiries from lenders, dealerships, and financial institutions she had never heard of — spread across all three bureaus, many of them in states she had never visited. Someone had been using her personal information to apply for credit everywhere. Her score had fallen from 661 to 574. She felt violated, overwhelmed, and completely unsure of where to start.",
    beforeStat:
      "Starting point: 574 credit score | 34 fraudulent and unauthorized hard inquiries | Overwhelmed, violated, unsure of every next step.",
    after:
      "The Elite Plan addressed every one of Diana's 34 fraudulent inquiries simultaneously across Experian, Equifax, and TransUnion. Given the clear identity theft pattern and the lack of any permissible purpose for any of the pulls, the legal argument was airtight across the board. Within 61 days, all 34 inquiries had been permanently removed. Her credit score climbed from 574 to 686 — a 112-point increase — fully restored to above where it had been before the theft began. She was reapproved for her credit card within weeks of the final removal.",
    afterStat:
      "End result: 686 credit score | 34 of 34 inquiries removed — 100% | Financial identity restored.",
    bridge:
      "Diana's situation is one of the most emotionally difficult we see. Identity theft doesn't just damage a credit score — it creates a months-long sense of helplessness as the evidence of someone else's actions follows you everywhere you apply. The legal path to removing fraudulent inquiries exists precisely for cases like hers. What the process restored was not just a number on a report — it was the sense that her financial life was her own again.",
    quote:
      "\"Someone had been using my information everywhere — I found 34 inquiries on my report from companies I'd never heard of. Robert's team removed every single one of them within 61 days. My score went up 112 points. I finally feel like I have my credit — and my life — back.\"",
    footer: "Diana R. | Identity Theft Victim | Houston, TX",
    proof: "34 Fraudulent Inquiries Removed | +112 Points | Full Score Restored in 61 Days",
  },
  {
    title: "The Home Buyer Who Was One Threshold Away",
    client: "Sophia M. | Dallas, TX | Standard Plan — $299",
    before:
      "Sophia had spent two years preparing to buy her first home. She had paid down debt, kept her payment history spotless, and saved a down payment. When she went to her mortgage lender, she expected good news. Instead, her loan officer told her that her recent hard inquiry count — from rate shopping across multiple lenders and a prior car purchase — was pushing her score just below the threshold needed for the rate she had been planning around. She wasn't in financial trouble. She was 22 inquiries away from the life she had spent two years building toward.",
    beforeStat:
      "Starting point: 641 credit score | 22 hard inquiries across all three bureaus | Prepared, frustrated, agonizingly close.",
    after:
      "The Standard Plan disputes were submitted within 24 hours of Sophia signing up. At the 45-day mark, all 22 inquiries had been removed across Experian, Equifax, and TransUnion. Her credit score moved from 641 to 729 — an 88-point increase that cleared her lender's underwriting threshold with room to spare. She closed on her home six weeks after her final inquiry was removed, at a rate that saved her an estimated $47,000 over the life of her loan compared to what she would have paid at her pre-removal score.",
    afterStat:
      "End result: 729 credit score | 22 of 22 inquiries removed | Mortgage approved | Home purchased.",
    bridge:
      "Sophia's case is the one we see most often. Someone who has done everything right, prepared carefully, and arrived at the moment they've been working toward — only to find that a cluster of hard inquiries from the legitimate process of shopping for credit is standing in the way. The inquiries were real. The pulls were mostly authorized. But the cumulative effect on her score was real too — and the legal tools for disputing excess inquiries from rate shopping are as valid as those for disputing unauthorized ones. Knowing which tools apply and how to use them is the entire job.",
    quote:
      "\"My lender told me the only thing standing between me and my mortgage was my inquiry count. 22 inquiries removed, 88 points gained, and I closed six weeks later. Best $299 I've ever spent and I'd do it again without hesitating.\"",
    footer: "Sophia M. | First-Time Home Buyer | Dallas, TX",
    proof: "22 Inquiries Removed | +88 Points | Mortgage Approved in 45 Days",
  },
];

const SNAPSHOTS = [
  {
    name: "Marcus T. | Phoenix, AZ | Standard Plan",
    beforeScore: "612",
    afterScore: "706",
    beforeInquiries: "22",
    afterInquiries: "3",
    removed: "19",
    timeframe: "47 Days",
    outcome: "Denied for mortgage",
    result: "Closed on first home",
    quote: "One weekend of car shopping cost me 94 points. Inquiry Removal gave them back.",
  },
  {
    name: "Diana R. | Houston, TX | Elite Plan",
    beforeScore: "574",
    afterScore: "686",
    beforeInquiries: "34",
    afterInquiries: "0",
    removed: "34 (100%)",
    timeframe: "61 Days",
    outcome: "Identity theft victim",
    result: "Fully restored",
    quote: "Every single fraudulent inquiry, gone. All 34 of them.",
  },
  {
    name: "Kevin D. | Atlanta, GA | Standard Plan",
    beforeScore: "591",
    afterScore: "688",
    beforeInquiries: "27",
    afterInquiries: "0",
    removed: "27 (100%)",
    timeframe: "55 Days",
    outcome: "Stuck, denied",
    result: "Approved and moving forward",
    quote: "Months of trying on my own. 55 days with Inquiry Removal. Done.",
  },
  {
    name: "Sophia M. | Dallas, TX | Standard Plan",
    beforeScore: "641",
    afterScore: "729",
    beforeInquiries: "22",
    afterInquiries: "0",
    removed: "22 (100%)",
    timeframe: "45 Days",
    outcome: "Below mortgage threshold",
    result: "Closed on home",
    quote: "Two years of preparation. 45 days to remove the one thing standing in the way.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      '"I applied for a credit card online without reading the fine print and ended up with 14 hard inquiries I never agreed to. My score dropped 71 points overnight. Inquiry Removal removed all 14 within 38 days. I have already been approved for the card I originally wanted."',
    footer: "James L. | Online Application Victim | Chicago, IL",
    proof: "14 Inquiries Removed | +71 Points in 38 Days",
  },
  {
    quote:
      '"Robert picked up the phone every single time I called. I had questions every week and I always got a real answer from someone who knew my case. The 22 inquiries are gone, my score is up 88 points, and I am under contract on a house. Genuinely life-changing."',
    footer: "Maria S. | Home Buyer | San Antonio, TX",
    proof: "22 Inquiries Removed | +88 Points | Under Contract on First Home",
  },
  {
    quote:
      '"I was skeptical. I will be honest. I thought it sounded too good to be true. I had been told by two other companies that my inquiries could not be removed. Inquiry Removal removed 18 of them in 44 days. I do not know what those other companies were doing, but it was not this."',
    footer: "Andre W. | Skeptical First-Timer | Memphis, TN",
    proof: "18 Inquiries Removed | +79 Points in 44 Days",
  },
];

export const metadata: Metadata = {
  title: {
    absolute: "Hard Inquiry Removal Results | Real Clients, Real Proof",
  },
  description:
    "See real before-and-after results from Inquiry Removal clients. 100,437 inquiries deleted. Scores up 50-100+ points. Case studies, testimonials, and proof.",
  alternates: {
    canonical: "/results",
  },
  openGraph: {
    title: "Hard Inquiry Removal Results | Real Clients, Real Proof",
    description:
      "See real before-and-after results from Inquiry Removal clients. 100,437 inquiries deleted. Scores up 50-100+ points. Case studies, testimonials, and proof.",
    url: "https://www.inquiryremoval.com/results",
  },
  twitter: {
    title: "Hard Inquiry Removal Results | Real Clients, Real Proof",
    description:
      "See real before-and-after results from Inquiry Removal clients. 100,437 inquiries deleted. Scores up 50-100+ points. Case studies, testimonials, and proof.",
  },
};

export default function ResultsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resultsPageSchema) }}
      />
      <AnnouncementBar />
      <Navigation />
      <main id="main" className="results-page">
        <PageHero
          id="results-hero-heading"
          eyebrow="Real outcomes"
          title={
            <>
              100,437 Hard Inquiries Removed. Here Is What That Actually Looks Like for <span className="ir-gradient-text">Real People</span>.
            </>
          }
          subtitle={
            <p>
              Numbers are easy to say. What they mean for an actual person — a home they finally qualified for, a car loan at a rate that made sense, a credit report that finally reflects who they actually are — that is what this page is about.
            </p>
          }
          copyAfter={
            <>
              <div className="results-stats-grid">
                {HERO_STATS.map((stat) => (
                  <article key={stat.value + stat.label} className="results-stat-card">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </article>
                ))}
              </div>
              <p className="results-aeo">
                Inquiry Removal has removed over 100,437 hard inquiries across Experian, Equifax, and TransUnion since 2015, with clients seeing credit score increases averaging 50 to 100 or more points within 30 to 90 days of beginning service.
              </p>
            </>
          }
        >
          <ProofImageSlot
            badge="Featured result"
            score="706"
            label="Marcus T. | Phoenix, AZ"
            detail="19 of 22 inquiries removed. Credit score increased 94 points in 47 days."
          />
        </PageHero>


        <section className="results-case-studies section-divider" aria-labelledby="results-case-studies-heading">
          <div className="container">
            <div className="results-head about-centered-head">
              <h2 id="results-case-studies-heading">
                Three Real Clients. Three Very Different Situations. One Outcome.
              </h2>
              <p>
                Every case study below follows the same Before-After-Bridge
                format. The situations are different. The result is consistent.
              </p>
            </div>

            <div className="results-case-list">
              {CASE_STUDIES.map((study) => (
                <article key={study.title} className="results-case-card">
                  <div className="results-case-head">
                    <h3>{study.title}</h3>
                    <p className="results-case-client">{study.client}</p>
                  </div>

                  <div className="results-bab-grid">
                    <section className="results-bab-panel">
                      <p className="results-bab-kicker">The Before</p>
                      <p>{study.before}</p>
                      <strong>{study.beforeStat}</strong>
                    </section>
                    <section className="results-bab-panel">
                      <p className="results-bab-kicker results-bab-kicker-good">The After</p>
                      <p>{study.after}</p>
                      <strong>{study.afterStat}</strong>
                    </section>
                    <section className="results-bab-panel results-bab-bridge">
                      <p className="results-bab-kicker results-bab-kicker-bridge">The Bridge</p>
                      <p>{study.bridge}</p>
                    </section>
                  </div>

                  <blockquote className="results-quote">
                    <p>{study.quote}</p>
                    <footer>{study.footer}</footer>
                    <span>{study.proof}</span>
                    <small>
                      Individual results vary based on each client&apos;s specific
                      credit report, inquiry type, and bureau response.
                    </small>
                  </blockquote>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="results-gallery section-divider" aria-labelledby="results-gallery-heading">
          <div className="container">
            <div className="results-head about-centered-head">
              <h2 id="results-gallery-heading">Before and After — By the Numbers</h2>
              <p>
                Four client snapshots. Every number below is a real outcome from
                a real case.
              </p>
            </div>

            <div className="results-snapshot-grid">
              {SNAPSHOTS.map((snapshot) => (
                <article key={snapshot.name} className="results-snapshot-card">
                  <h3>{snapshot.name}</h3>

                  <div className="results-snapshot-table" aria-label={`Results snapshot for ${snapshot.name}`}>
                    <div className="results-snapshot-header">
                      <span />
                      <strong>Before</strong>
                      <strong>After</strong>
                    </div>
                    <div className="results-snapshot-row">
                      <span>Credit score</span>
                      <strong className="results-snapshot-value-negative">{snapshot.beforeScore}</strong>
                      <strong className="results-snapshot-value-positive">{snapshot.afterScore}</strong>
                    </div>
                    <div className="results-snapshot-row">
                      <span>Total hard inquiries</span>
                      <strong>{snapshot.beforeInquiries}</strong>
                      <strong>{snapshot.afterInquiries}</strong>
                    </div>
                    <div className="results-snapshot-row">
                      <span>Inquiries removed</span>
                      <em>0</em>
                      <strong>{snapshot.removed}</strong>
                    </div>
                    <div className="results-snapshot-row">
                      <span>Timeframe</span>
                      <em>0 Days</em>
                      <strong>{snapshot.timeframe}</strong>
                    </div>
                    <div className="results-snapshot-row">
                      <span>Outcome</span>
                      <span>{snapshot.outcome}</span>
                      <span>{snapshot.result}</span>
                    </div>
                  </div>

                  <p className="results-snapshot-quote">{snapshot.quote}</p>
                </article>
              ))}
            </div>
          </div>
        </section>


        <section className="results-filters section-divider" aria-labelledby="results-filters-heading">
          <div className="container results-copy-shell">
            <div className="results-head">
              <h2 id="results-filters-heading">
                Find Results for Someone in Your Exact Situation
              </h2>
              <p>
                Select the outcome that matches what you&apos;re working toward —
                and see the proof that it&apos;s possible.
              </p>
            </div>

            <ResultsFilter />
          </div>
        </section>

        <section className="results-reviews section-divider" aria-labelledby="results-reviews-heading">
          <div className="container results-copy-shell">
            <div className="results-head">
              <h2 id="results-reviews-heading">
                What 312 Independent Reviewers Said. In Their Own Words.
              </h2>
              <p>
                We can say anything about ourselves. Third-party reviewers have
                nothing to gain from saying something that is not true. That is
                why independent reviews matter more than any claim we make on
                this page.
              </p>
              <p>
                Inquiry Removal holds a 4.9-star rating across 312 Google
                Reviews — the most trusted, most widely indexed, and most
                difficult-to-manipulate review platform available. Every review
                is from a real account. Every account can be verified.
              </p>
            </div>

            <div className="results-google-badge gradient-border">
              <div className="results-google-score">
                <strong>4.9 ★</strong>
                <span>312 Google Reviews</span>
              </div>
            </div>

            <div className="results-testimonial-grid">
              {TESTIMONIALS.map((item) => (
                <article key={item.footer} className="results-testimonial-card">
                  <p>{item.quote}</p>
                  <footer>{item.footer}</footer>
                  <span>{item.proof}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="results-disclaimer section-divider" aria-labelledby="results-disclaimer-heading">
          <div className="container results-copy-shell">
            <div className="results-copy-card">
              <h2 id="results-disclaimer-heading" className="sr-only">
                Results disclaimer
              </h2>
              <p>
                Individual results vary based on each client&apos;s specific credit
                report, starting credit score, inquiry type, furnisher, and
                bureau response. The case studies, testimonials, and before and
                after snapshots on this page reflect real client outcomes but
                are not a guarantee that every client will achieve identical
                results. Most clients see results within 30 to 90 days. In
                cases where no inquiries are removed within 90 days, Inquiry
                Removal&apos;s 100% money-back guarantee applies, subject to
                verification. This service addresses hard inquiry removal only
                and does not remove collections, late payments, charge-offs, or
                other negative credit items.
              </p>
            </div>
          </div>
        </section>

        <section className="results-cta" aria-labelledby="results-cta-heading">
          <div className="container">
            <div className="results-cta-card gradient-border">
              <h2 id="results-cta-heading">Ready to Write Your Own Success Story?</h2>
              <p>
                Every case study on this page started with a free 15-minute
                consultation. One conversation. A review of the credit report. A
                clear picture of what could be removed and what the score could
                look like afterward.
              </p>
              <p>That&apos;s where every single one of these results began. Including yours.</p>

              <div className="results-cta-actions">
                <Link href="/get-started" className="btn btn-primary btn-large">
                  Get My Free Credit Analysis
                </Link>
                <Link href="/how-it-works" className="btn btn-secondary btn-large">
                  See How It Works <span aria-hidden="true">→</span>
                </Link>
              </div>

              <p className="results-fear-killer">
                One flat fee starting at $199. No monthly charges. No credit
                card required for your free consultation. 100% money-back
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
