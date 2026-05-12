import type { Metadata } from "next";
import Link from "next/link";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { PageHero } from "@/components/PageHero";
import { PremiumIcon } from "@/components/PremiumIcons";

const COMPARISON_ROWS = [
  {
    feature: "Pricing Model",
    inquiryRemoval: "[good] One-time flat fee",
    lexingtonLaw: "[bad] Monthly subscription",
    creditSaint: "[bad] Monthly subscription",
    creditPeople: "[bad] Monthly subscription",
  },
  {
    feature: "Starting Price",
    inquiryRemoval: "[good] $199 one time",
    lexingtonLaw: "[bad] $99–$149/month",
    creditSaint: "[bad] $79–$129/month",
    creditPeople: "[bad] $99/month",
  },
  {
    feature: "Cost After 6 Months",
    inquiryRemoval: "[good] $199–$499 total",
    lexingtonLaw: "[bad] $594–$894+",
    creditSaint: "[bad] $474–$774+",
    creditPeople: "[bad] $594+",
  },
  {
    feature: "Specialization",
    inquiryRemoval: "[good] Hard inquiry removal only",
    lexingtonLaw: "[bad] Generalist",
    creditSaint: "[bad] Generalist",
    creditPeople: "[bad] Generalist",
  },
  {
    feature: "Inquiry Removal Depth",
    inquiryRemoval: "[good] Primary focus — all federal laws applied",
    lexingtonLaw: "[warn] One item on a checklist",
    creditSaint: "[warn] One item on a checklist",
    creditPeople: "[warn] One item on a checklist",
  },
  {
    feature: "Dispute Letters",
    inquiryRemoval: "[good] Custom-built for each inquiry",
    lexingtonLaw: "[bad] Template-based",
    creditSaint: "[bad] Template-based",
    creditPeople: "[bad] Template-based",
  },
  {
    feature: "Bureaus Covered",
    inquiryRemoval: "[good] All 3 simultaneously",
    lexingtonLaw: "[good] All 3",
    creditSaint: "[good] All 3",
    creditPeople: "[good] All 3",
  },
  {
    feature: "Collections / Late Payments",
    inquiryRemoval: "[bad] Not offered",
    lexingtonLaw: "[good] Yes",
    creditSaint: "[good] Yes",
    creditPeople: "[good] Yes",
  },
  {
    feature: "Charge-Off Removal",
    inquiryRemoval: "[bad] Not offered",
    lexingtonLaw: "[good] Yes",
    creditSaint: "[good] Yes",
    creditPeople: "[good] Yes",
  },
  {
    feature: "Money-Back Guarantee",
    inquiryRemoval: "[good] 100% — 90 days",
    lexingtonLaw: "[warn] Limited / varies",
    creditSaint: "[warn] 90-day money back",
    creditPeople: "[warn] Limited / varies",
  },
  {
    feature: "Defined End Point",
    inquiryRemoval: "[good] Work ends when inquiries are removed",
    lexingtonLaw: "[bad] No defined endpoint",
    creditSaint: "[bad] No defined endpoint",
    creditPeople: "[bad] No defined endpoint",
  },
  {
    feature: "Financial Incentive to Finish Fast",
    inquiryRemoval: "[good] Yes — flat fee, no ongoing billing",
    lexingtonLaw: "[bad] No — monthly billing continues",
    creditSaint: "[bad] No — monthly billing continues",
    creditPeople: "[bad] No — monthly billing continues",
  },
  {
    feature: "Dedicated Specialist",
    inquiryRemoval: "[good] One person assigned to your file",
    lexingtonLaw: "[bad] Rotating case workers",
    creditSaint: "[bad] Rotating case workers",
    creditPeople: "[bad] Rotating case workers",
  },
  {
    feature: "Phone Accessibility",
    inquiryRemoval: "[good] Calls answered directly",
    lexingtonLaw: "[bad] Reported call center delays",
    creditSaint: "[bad] Reported call center delays",
    creditPeople: "[bad] Reported call center delays",
  },
  {
    feature: "Founded",
    inquiryRemoval: "2015",
    lexingtonLaw: "1991",
    creditSaint: "2004",
    creditPeople: "2004",
  },
  {
    feature: "Client Reviews",
    inquiryRemoval: "[good] 4.9 stars — Google",
    lexingtonLaw: "[warn] Mixed — varies by platform",
    creditSaint: "[warn] Mixed — varies by platform",
    creditPeople: "[warn] Mixed — varies by platform",
  },
];

const STORIES = [
  {
    title: "The Monthly Subscriber Who Ran Out of Patience",
    body: [
      "Kevin D. spent four months enrolled with a generalist credit repair company before he called us. Every month, $99 left his account. Every month, he received an update that said disputes were still in progress. Every month, his inquiry count stayed exactly the same. When he finally asked the only question he really cared about, whether those specific inquiries were going to be removed and when, the answer stayed vague.",
      "He came to Inquiry Removal after that. During his free consultation, we identified 27 unauthorized hard inquiries across all three bureaus, explained the legal argument that applied to each one, and submitted custom disputes within 24 hours of signup. Fifty-five days later, all 27 inquiries were gone. His score had climbed 97 points.",
      "The four months he spent with the prior company cost him $396. The work with Inquiry Removal cost $299. The difference was not just financial. It was the experience of working with a company built around finishing one specific job instead of managing a broad monthly service.",
    ],
    quote:
      '"I spent months paying $99 a month and my inquiry count did not move. I paid $299 to Inquiry Removal and 27 inquiries were gone in 55 days. I do not know what the other company was doing, but it was not this."',
    footer: "Kevin D. | Atlanta, GA | 27 Inquiries Removed | +97 Points in 55 Days",
  },
  {
    title: "The Self-Filer Who Hit a Wall",
    body: [
      "Andre W. from Memphis tried to handle his inquiry disputes himself before he contacted us. He had done the research. He knew the FCRA existed. He sent disputes to all three bureaus and waited. Equifax came back with verified. Experian came back with verified. TransUnion deleted two inquiries and verified the rest. After that, the internet gave him five different opinions and no clean next step.",
      "He came to us with 18 remaining inquiries, plenty of frustration, and a healthy amount of skepticism. In the consultation, we explained the difference between a bureau confirming that a pull happened and a bureau proving that it was authorized. That distinction changed the legal angle completely. We built the follow-up disputes from there.",
      "Within 44 days of signup, all 18 remaining inquiries were removed. His score moved up 79 points. For people comparing options, this is the key point: doing it yourself is possible, but knowing exactly what to do after a verified response is where most cases stall.",
    ],
    quote:
      '"I was skeptical. I thought it sounded too good to be true. I had already tried on my own and gotten nowhere. Inquiry Removal removed 18 inquiries in 44 days. I do not know why I waited so long."',
    footer: "Andre W. | Memphis, TN | 18 Inquiries Removed | +79 Points in 44 Days",
  },
];

const WIN_REASONS = [
  {
    title: "We Win on Specialization",
    body:
      "Lexington Law, Credit Saint, and The Credit People are positioned as broader credit-repair services. Inquiry removal is one issue type among many they address. Inquiry Removal is built around one outcome only: removing hard inquiries. That matters because hard inquiries require their own legal framing, their own escalation logic, and their own case history. Since 2015, Inquiry Removal has tracked 100,437 hard inquiries removed. That is not a side statistic. It is the business.",
  },
  {
    title: "We Win on Cost",
    body:
      "If inquiries are the only issue you are trying to solve, a one-time flat fee is usually the cleaner financial choice. The Standard Plan at $299 costs less than three months with Lexington Law at its currently listed monthly price, less than mid-tier multi-month spend with Credit Saint, and less than The Credit People's six-month flat-rate option. When the work is done here, the billing is done too.",
  },
  {
    title: "We Win on Speed",
    body:
      "Inquiry Removal builds custom disputes within 24 hours of signup and submits to all three bureaus at the same time. Most clients see their first removals within 14 to 30 days, with fuller results arriving in the 30-to-90-day window. Marcus T. had 19 inquiries removed in 47 days. Diana R. had 34 fraudulent inquiries removed in 61 days. Kevin D. had 27 removed in 55 days after months of no movement elsewhere.",
  },
  {
    title: "We Win on Access",
    body:
      "This company is deliberately lean. There is no giant support structure between you and the person handling your case. Clients call, ask questions, and get direct answers about their own files. That kind of access matters most when you are on a real timeline, especially if you are trying to qualify for a home and do not have room for vague updates.",
  },
  {
    title: "We Win on Incentive Alignment",
    body:
      "A flat-fee model and a monthly model are structurally different. With a flat fee, the company does not earn more if the work drags on. With a monthly subscription, ongoing service means ongoing billing. That does not automatically make every subscription company bad. It does mean the incentives are different. If your problem is narrowly defined as hard inquiries, alignment matters.",
  },
];

export const metadata: Metadata = {
  title: {
    absolute: "Inquiry Removal vs Lexington Law, Credit Saint & Credit People",
  },
  description:
    "Comparing credit repair companies for inquiry removal? See an honest side-by-side of Inquiry Removal vs Lexington Law, Credit Saint, and The Credit People.",
  alternates: {
    canonical: "/compare",
  },
  openGraph: {
    title: "Inquiry Removal vs Lexington Law, Credit Saint & Credit People",
    description:
      "Comparing credit repair companies for inquiry removal? See an honest side-by-side of Inquiry Removal vs Lexington Law, Credit Saint, and The Credit People.",
    url: "https://www.inquiryremoval.com/compare",
  },
  twitter: {
    title: "Inquiry Removal vs Lexington Law, Credit Saint & Credit People",
    description:
      "Comparing credit repair companies for inquiry removal? See an honest side-by-side of Inquiry Removal vs Lexington Law, Credit Saint, and The Credit People.",
  },
};

function comparisonTone(value: string) {
  if (value.startsWith("[good] ")) return { icon: "checkBadge" as const, tone: "good", label: value.replace("[good] ", "") };
  if (value.startsWith("[bad] ")) return { icon: "xBadge" as const, tone: "bad", label: value.replace("[bad] ", "") };
  if (value.startsWith("[warn] ")) return { icon: "warningDiamond" as const, tone: "warn", label: value.replace("[warn] ", "") };
  return null;
}

function ComparisonCell({ value }: { value: string }) {
  const status = comparisonTone(value);
  if (!status) return <>{value}</>;

  return (
    <span className={`compare-status compare-status-${status.tone}`}>
      <PremiumIcon name={status.icon} size={15} strokeWidth={1.85} />
      <span>{status.label}</span>
    </span>
  );
}

export default function ComparePage() {
  return (
    <>
      <AnnouncementBar />
      <Navigation activePath="/compare" />
      <main id="main" className="compare-page">
        <PageHero
          id="compare-hero-heading"
          eyebrow="Honest comparison"
          title={
            <>
              We&apos;ve Done the Comparison for You — Honestly, Including Where We <span className="ir-gradient-text">Fall Short</span>.
            </>
          }
          subtitle={
            <p>
              If you&apos;re weighing Inquiry Removal against Lexington Law, Credit Saint, or The Credit People, this page gives you the side-by-side you actually need — with no spin, no cherry-picked stats, and no pretending we&apos;re the right fit for every situation.
            </p>
          }
          copyAfter={
            <p className="compare-aeo">
              Inquiry Removal is a specialized hard inquiry removal service that charges a one-time flat fee of $199 to $499. Lexington Law, Credit Saint, and The Credit People are generalist credit repair companies that charge monthly subscriptions of $79 to $149 or more.
            </p>
          }
        >
          <div className="compare-hero-panel-head">
            <span className="compare-hero-panel-icon" aria-hidden="true">
              <PremiumIcon name="tailoredDispute" size={24} />
            </span>
            <div>
              <span>The Side-by-Side You Came Here to See</span>
              <strong>Inquiry Removal</strong>
            </div>
          </div>
          <div className="compare-hero-mini-table">
            <span>Pricing Model</span>
            <strong><ComparisonCell value="[good] One-time flat fee" /></strong>
            <span>Specialization</span>
            <strong><ComparisonCell value="[good] Hard inquiry removal only" /></strong>
            <span>Dispute Letters</span>
            <strong><ComparisonCell value="[good] Custom-built for each inquiry" /></strong>
            <span>Defined End Point</span>
            <strong><ComparisonCell value="[good] Work ends when inquiries are removed" /></strong>
          </div>
        </PageHero>

        <section className="compare-table-section section-divider" aria-labelledby="compare-table-heading">
          <div className="container">
            <div className="compare-head about-centered-head">
              <h2 id="compare-table-heading">The Side-by-Side You Came Here to See</h2>
              <p>
                Competitor pricing and features based on publicly available
                information at time of publication. Always verify current
                pricing directly with each company before making a decision.
              </p>
            </div>

            <div className="compare-table-wrap">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th className="compare-highlight-col">Inquiry Removal</th>
                    <th>Lexington Law</th>
                    <th>Credit Saint</th>
                    <th>The Credit People</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row) => (
                    <tr key={row.feature}>
                      <th scope="row">{row.feature}</th>
                      <td className="compare-highlight-col"><ComparisonCell value={row.inquiryRemoval} /></td>
                      <td><ComparisonCell value={row.lexingtonLaw} /></td>
                      <td><ComparisonCell value={row.creditSaint} /></td>
                      <td><ComparisonCell value={row.creditPeople} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="compare-stories section-divider" aria-labelledby="compare-stories-heading">
          <div className="container">
            <div className="compare-head about-centered-head">
              <h2 id="compare-stories-heading">
                What Clients Tell Us When They Arrive from a Competitor
              </h2>
              <p>
                Two short stories from clients who tried a different company
                first — or tried on their own — before finding Inquiry Removal.
                These are the accounts we hear most often.
              </p>
            </div>

            <div className="compare-story-list">
              {STORIES.map((story) => (
                <article key={story.title} className="compare-story-card">
                  <h3>{story.title}</h3>
                  {story.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <blockquote>
                    <p>{story.quote}</p>
                    <footer>{story.footer}</footer>
                  </blockquote>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="compare-fit section-divider" aria-labelledby="compare-fit-heading">
          <div className="container compare-fit-grid">
            <article className="compare-fit-card">
              <h2 id="compare-fit-heading">
                When a Competitor Might Actually Be the Better Choice — We&apos;ll
                Tell You Honestly
              </h2>
              <p>
                This section exists because we believe in giving you complete
                information, not just the parts that make us look good.
              </p>
              <ul>
                <li>
                  <strong>You need more than inquiry removal.</strong> If your
                  report includes collections, charge-offs, late payments,
                  bankruptcies, or other negative items beyond inquiries, a
                  broader credit-repair company may be the better fit.
                </li>
                <li>
                  <strong>You do not have removable inquiries.</strong> If your
                  inquiries are fully authorized and properly documented, the
                  legal argument is weaker. We will tell you that in the free
                  consultation instead of taking your money.
                </li>
                <li>
                  <strong>You want an in-person office relationship.</strong>
                  Inquiry Removal operates online. If sitting down in a local
                  office matters to you, a different model may feel better.
                </li>
              </ul>
              <p className="compare-fit-note">
                Honest acknowledgment: We know that saying &quot;here&apos;s when you
                shouldn&apos;t hire us&quot; is not standard marketing practice. We do it
                because the clients who trust us most are the ones who trusted
                us enough to hear the full picture first — not a curated version
                of it.
              </p>
            </article>

            <article className="compare-fit-card compare-fit-card-strong">
              <h2>Where Inquiry Removal Is the Clear Choice — With Specific Proof</h2>
              <div className="compare-win-list">
                {WIN_REASONS.map((reason) => (
                  <section key={reason.title} className="compare-win-item">
                    <h3>{reason.title}</h3>
                    <p>{reason.body}</p>
                  </section>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="compare-cta section-divider" aria-labelledby="compare-cta-heading">
          <div className="container">
            <div className="compare-cta-shell">
              <h2 id="compare-cta-heading">
                Still Deciding? That&apos;s Completely Fair. Here Is the Easiest Way
                to Get Your Questions Answered.
              </h2>
              <p>
                The free consultation is fifteen minutes. We review your credit
                reports, count every hard inquiry across all three bureaus, tell
                you exactly which ones qualify for removal, and tell you
                honestly if we think another company is a better fit for your
                specific situation.
              </p>
              <p>
                If Inquiry Removal is the right choice for you, you&apos;ll know it
                by the end of that conversation — not because of anything we
                say on this page, but because of what your own credit report
                shows.
              </p>

              <div className="compare-cta-actions">
                <Link href="/get-started" className="btn btn-primary">
                  Book My Free Consultation
                </Link>
                <a href="tel:6023776626" className="btn btn-secondary">
                  Call 602-377-6626
                </a>
              </div>

              <p className="compare-fear-killer">
                No credit card required. No obligation. No pressure. Just
                fifteen minutes and a clear picture of your options — whichever
                direction you choose.
              </p>
              <p className="compare-disclaimer">
                Individual results vary based on each client&apos;s specific credit
                report, inquiry type, and bureau response. Competitor
                information is based on publicly available pricing and service
                pages reviewed on May 5, 2026.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
</>
  );
}
