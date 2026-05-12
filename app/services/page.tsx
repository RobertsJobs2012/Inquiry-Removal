import type { Metadata } from "next";
import Link from "next/link";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { PageHero } from "@/components/PageHero";
import { PremiumIcon } from "@/components/PremiumIcons";
import { ServicesPlanner } from "@/components/ServicesPlanner";
import { servicesPageSchema } from "@/lib/schema";

const TRUST_STATS = [
  { value: "11 Years", label: "Specialized in Inquiry Removal Only" },
  { value: "1,123 Clients", label: "Helped Nationwide" },
  { value: "Review First", label: "We Evaluate Fit Before Taking a Case" },
];

const PRESS_LOGOS = ["Forbes", "Bloomberg", "CNBC", "Business Insider", "MarketWatch"];

export const metadata: Metadata = {
  title: {
    absolute: "Hard Inquiry Removal Services & Pricing",
  },
  description:
    "Remove 1 inquiry or 100 — we have a flat-fee plan built for your situation. Free consultation. Custom disputes. All 3 bureaus. 100% money-back guarantee.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Hard Inquiry Removal Services & Pricing | Inquiry Removal",
    description:
      "Remove 1 inquiry or 100 — we have a flat-fee plan built for your situation. Free consultation. Custom disputes. All 3 bureaus. 100% money-back guarantee.",
    url: "https://www.inquiryremoval.com/services",
  },
  twitter: {
    title: "Hard Inquiry Removal Services & Pricing | Inquiry Removal",
    description:
      "Remove 1 inquiry or 100 — we have a flat-fee plan built for your situation. Free consultation. Custom disputes. All 3 bureaus.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesPageSchema) }}
      />
      <AnnouncementBar />
      <Navigation activePath="/services" />
      <main id="main" className="services-page">
        <PageHero
          id="services-hero-heading"
          title={
            <>
              Find the Inquiry Removal Plan Built for Your <span className="ir-gradient-text">Exact Situation</span>
            </>
          }
          subtitle={
            <p>
              Every credit report is different. Every situation is different. That&apos;s why we built three flat-fee plans based on your total inquiry count — so you only pay for what you actually need, and you get the same white-glove service regardless of which tier you&apos;re in.
            </p>
          }
          meta={
            <>
              <span>
                <PremiumIcon name="checkBadge" size={16} strokeWidth={1.9} />
                100,437 Hard Inquiries Removed
              </span>
              <span>
                <PremiumIcon name="star" size={15} />
                4.9 Stars — 312 Google Reviews
              </span>
            </>
          }
        >
          <div className="services-hero-panel-top">
            <span className="services-hero-panel-icon" aria-hidden="true">
              <PremiumIcon name="flatFee" size={24} />
            </span>
            <p>One flat fee. Three plans. The same result at every level.</p>
          </div>
          <ul className="services-hero-points ir-hero-panel-list">
            <li>Starter Plan — $199</li>
            <li>Standard Plan — $299</li>
            <li>Elite Plan — $499</li>
            <li>Free consultation included</li>
          </ul>
          <Link href="/get-started" className="btn btn-primary services-hero-cta">
            Get My Free Credit Analysis
          </Link>
        </PageHero>

        <section className="services-trust-strip section-divider" aria-labelledby="services-trust-heading">
          <div className="container">
            <h2 id="services-trust-heading" className="sr-only">
              Trust indicators
            </h2>

            <div className="services-stats">
              {TRUST_STATS.map((stat) => (
                <article key={stat.value} className="services-stat">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>

            <div className="services-press" aria-label="Press mentions">
              {PRESS_LOGOS.map((name) => (
                <span key={name}>{name}</span>
              ))}
            </div>
          </div>
        </section>

        <ServicesPlanner />

        <section className="services-explainer section-divider" aria-labelledby="services-explainer-heading">
          <div className="container services-copy-shell">
            <div className="services-copy-head">
              <h2 id="services-explainer-heading">
                Can You Dispute Hard Inquiries Yourself? Yes. Here&apos;s the Honest
                Truth About Why Most People Hit a Wall.
              </h2>
            </div>

            <div className="services-copy-card">
              <p>
                You can file hard inquiry disputes on your own. The Federal Trade
                Commission provides tools, and nothing stops you from writing to
                the bureaus directly. We believe in being transparent about that.
              </p>
              <p>
                Here&apos;s what typically happens: you send a dispute, and the
                bureau responds within 30 days. They either say the inquiry was
                &quot;verified&quot; — which sounds final but isn&apos;t — or they delete it.
                The challenge is that &quot;verified&quot; is not the same as
                &quot;authorized.&quot; Bureaus verify that the pull happened. They do
                not verify that you gave permissible purpose. That legal
                distinction is where most self-filers give up, and where we
                begin.
              </p>
              <p>
                The other reality is the knowledge gap. Knowing which specific
                provision of the FCRA applies to a dealership&apos;s shotgun credit
                pull is different from knowing which provision of the FDCPA
                applies to a debt collector pulling your report without
                permissible purpose. Applying Metro 2 compliance arguments
                requires knowing how furnishers are required to report and what
                happens when they don&apos;t follow the standard. These are not
                things you pick up in an afternoon of research — they are the
                only thing we have spent 11 years doing.
              </p>

              <div className="services-compare-grid">
                <article className="services-compare-card">
                  <h3>What you can do on your own:</h3>
                  <ul>
                    <li>File a basic dispute with each bureau</li>
                    <li>Request your free annual credit reports</li>
                    <li>Flag an inquiry as potentially unauthorized</li>
                  </ul>
                </article>
                <article className="services-compare-card services-compare-card-accent">
                  <h3>What we do that changes the outcome:</h3>
                  <ul>
                    <li>Build legally precise, individualized dispute letters that bureaus cannot dismiss as boilerplate</li>
                    <li>Apply the correct federal statute to each specific inquiry type</li>
                    <li>Follow up strategically when a bureau responds with &quot;verified&quot; rather than accepting it as final</li>
                    <li>Handle every communication so nothing falls through the cracks</li>
                    <li>Move as fast as the law allows because we know your goals are on a timeline</li>
                  </ul>
                </article>
              </div>

              <p>
                If you have already tried on your own and hit a wall, that is
                the most common story we hear. It isn&apos;t a reflection on you —
                it&apos;s a reflection on how specialized this process actually is.
              </p>

              <Link href="/how-it-works" className="services-inline-link">
                See exactly how our process works <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="services-by-bureau section-divider" aria-labelledby="services-by-bureau-heading">
          <div className="container">
            <div className="services-copy-head services-by-bureau-head">
              <h2 id="services-by-bureau-heading">
                Choose Your Bureau — Each One Has Its Own Dispute Process and Its Own Pitfalls
              </h2>
              <p>
                <Link href="/remove-hard-inquiry-equifax" className="inline-bureau-link">
                  Equifax
                </Link>
                ,{" "}
                <Link href="/remove-hard-inquiry-experian" className="inline-bureau-link">
                  Experian
                </Link>
                , and{" "}
                <Link href="/remove-hard-inquiry-transunion" className="inline-bureau-link">
                  TransUnion
                </Link>{" "}
                handle hard inquiry disputes differently. Different mailing
                addresses. Different escalation paths. Different reasons
                disputes fail. Pick the bureau that&apos;s blocking you and get the
                bureau-specific playbook.
              </p>
            </div>

            <div className="services-bureau-grid">
              <Link href="/remove-hard-inquiry-experian" className="services-bureau-card services-bureau-card-experian">
                <div className="services-bureau-card-tone" aria-hidden="true" />
                <div className="services-bureau-card-head">
                  <span className="services-bureau-card-eyebrow">Bureau</span>
                  <h3>Experian</h3>
                </div>
                <p>
                  Experian&apos;s online disputes get auto-processed in days
                  with boilerplate &quot;verified&quot; responses. Custom
                  letters citing the right FCRA provisions trigger an actual
                  reinvestigation — and that&apos;s where removal happens.
                </p>
                <span className="services-bureau-card-cta">
                  Experian inquiry removal <span aria-hidden="true">→</span>
                </span>
              </Link>

              <Link href="/remove-hard-inquiry-transunion" className="services-bureau-card services-bureau-card-transunion">
                <div className="services-bureau-card-tone" aria-hidden="true" />
                <div className="services-bureau-card-head">
                  <span className="services-bureau-card-eyebrow">Bureau</span>
                  <h3>TransUnion</h3>
                </div>
                <p>
                  Credit Karma&apos;s Direct Dispute tool sends real
                  TransUnion disputes — and they almost always come back
                  &quot;verified.&quot; A 15 U.S.C. § 1681b permissible-purpose
                  challenge is a different question entirely.
                </p>
                <span className="services-bureau-card-cta">
                  TransUnion inquiry removal <span aria-hidden="true">→</span>
                </span>
              </Link>

              <Link href="/remove-hard-inquiry-equifax" className="services-bureau-card services-bureau-card-equifax">
                <div className="services-bureau-card-tone" aria-hidden="true" />
                <div className="services-bureau-card-head">
                  <span className="services-bureau-card-eyebrow">Bureau</span>
                  <h3>Equifax</h3>
                </div>
                <p>
                  CFPB ordered Equifax to pay $15M in 2025 for improperly
                  investigating disputes. A &quot;verified&quot; response from
                  Equifax is not the end of the road — it&apos;s often where
                  the actual escalation begins.
                </p>
                <span className="services-bureau-card-cta">
                  Equifax inquiry removal <span aria-hidden="true">→</span>
                </span>
              </Link>
            </div>

            <p className="services-bureau-footnote">
              Most clients have inquiries on more than one bureau. We dispute
              all three simultaneously — the bureau pages above are for
              visitors who came in with a specific bureau on their mind.
            </p>
          </div>
        </section>

        <section className="services-consult section-divider" aria-labelledby="services-consult-heading">
          <div className="container services-copy-shell">
            <div className="services-copy-head">
              <h2 id="services-consult-heading">
                Not Sure Where You Fall? Let&apos;s Figure It Out Together. For Free.
              </h2>
            </div>

            <div className="services-copy-card services-consult-card">
              <p>
                If you do not know your inquiry count, have not pulled your
                reports recently, or are not sure whether your inquiries qualify
                for removal, that is exactly what the free consultation is for.
              </p>
              <p>
                We review your reports with you, identify every inquiry that can
                be disputed, total them across all three bureaus, and tell you
                exactly which plan fits before you spend anything. No pressure.
                No obligation. Just complete information so you can make a
                confident decision.
              </p>

              <Link href="/get-started" className="btn btn-primary btn-large services-consult-cta">
                Book Your Free Consultation Now
              </Link>
            </div>
          </div>
        </section>

        <section className="services-closing" aria-labelledby="services-closing-heading">
          <div className="container">
            <div className="services-closing-card gradient-border">
              <h2 id="services-closing-heading">
                Your Credit Score Doesn&apos;t Have to Stay Where It Is.
              </h2>
              <p>
                The inquiries pulling your number down have a legal path to
                removal. You have federal rights. We know exactly how to use
                them. And we offer a 100% money-back guarantee if we do not
                deliver results within 90 days, because we are that confident in
                what we do.
              </p>

              <div className="services-closing-actions">
                <Link href="/get-started" className="btn btn-primary btn-large">
                  Get My Free Credit Analysis
                </Link>
                <a href="tel:+16023776626" className="btn btn-secondary btn-large services-call-cta">
                  Call Us Directly — 602-377-6626
                </a>
              </div>

              <p className="services-closing-meta">
                One flat fee. No monthly charges. No credit card required for
                your free consultation. Plans start at $199.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
</>
  );
}
