import type { Metadata } from "next";
import Link from "@/components/InstantLink";
import { PageHero } from "@/components/PageHero";
import { PremiumIcon } from "@/components/PremiumIcons";

export const dynamic = "force-static";
export const revalidate = false;
export const fetchCache = "only-cache";

const STEPS = [
  {
    id: "step-1",
    number: "01",
    actor: "You",
    title: "Book Your Free Consultation",
    timeframe: "Day 1 — Takes About 15 Minutes",
    copy: [
      "This is the easiest thing you'll do in this entire process. You schedule a free consultation, we pull up your credit reports together, and we walk through every hard inquiry on your Experian, Equifax, and TransUnion reports. We identify which inquiries are unauthorized, excessive, or fraudulent — and which ones qualify for removal under federal law.",
      "By the end of this conversation, you'll know exactly how many inquiries can be disputed, which plan fits your situation, and what your credit score could realistically look like on the other side. There's no pressure and no obligation. If we can't help you, we'll tell you that in the consultation instead of taking your money and figuring it out later.",
    ],
    whatYouDo: "Schedule. Show up. Ask every question you have.",
    icon: "calendarCheck" as const,
  },
  {
    id: "step-2",
    number: "02",
    actor: "We",
    title: "Build Your Custom Disputes and Submit to All Three Bureaus",
    timeframe: "Within 24 Hours of Signing Up",
    copy: [
      "This is where the work begins — and it's entirely on our end. We don't use templates. We don't run your information through software and print form letters. Every dispute we build is constructed from scratch for your specific inquiries, your specific bureaus, and the specific provisions of federal law that apply to your exact situation.",
      "We determine which statute governs each inquiry — whether that's the Fair Credit Reporting Act, the Fair Debt Collection Practices Act, FACTA, or Metro 2 compliance standards — and we craft each letter around that legal argument precisely. Then we submit directly to Experian, Equifax, and TransUnion simultaneously. We handle every communication. We track every response. You handle nothing.",
    ],
    whatYouDo: "Nothing. This step belongs entirely to us.",
    icon: "tailoredDispute" as const,
  },
  {
    id: "step-3",
    number: "03",
    actor: "We",
    title: "Monitor Every Bureau Response and Push Where Necessary",
    timeframe: "30 to 90 Days",
    copy: [
      "Once disputes are submitted, the bureaus have up to 30 days to investigate and respond. We monitor every response across all three bureaus. When an inquiry is removed, we log it. When a bureau responds with \"verified\" — which is not the same as \"authorized\" — we know exactly how to respond and escalate using the legal argument that applies to that specific situation. We don't accept the first response if the first response is wrong. We push until the result is correct or we've exhausted every legal avenue available.",
    ],
    whatYouDo: "Check your credit score as removals come through. Watch it move.",
    icon: "disputeEngine" as const,
  },
  {
    id: "step-4",
    number: "04",
    actor: "You",
    title: "Enjoy a Cleaner Report and Do What You Came Here to Do",
    timeframe: "30 to 90 Days — Sometimes Sooner",
    copy: [
      "As inquiries are removed, your credit score reflects the change. Depending on how many inquiries are deleted and where your score started, clients typically see increases of 50 to 100 or more points. For most people, that means a mortgage application that now clears underwriting. A car loan at a rate that actually makes sense. A credit card approval that was previously just out of reach. The goal you've been working toward — for most of our clients, that's homeownership — gets measurably closer with every inquiry that disappears.",
    ],
    whatYouDo: "Apply for the home, the car, the credit line, or whatever you came here for.",
    icon: "scoreRise" as const,
  },
];

const YOU_DO = [
  "Schedule your free 15-minute consultation — pick a time that works for you",
  "Sign up and pay your one-time flat fee — no recurring charges, ever",
  "Monitor your credit score as removals come through and your number climbs",
];

const WE_DO = [
  "Pull and analyze your full credit report across Experian, Equifax, and TransUnion — identifying every hard inquiry that qualifies for removal",
  "Research the legal basis for each specific inquiry — FCRA, FDCPA, FACTA, and Metro 2 applied individually, not as a blanket approach",
  "Build custom dispute letters from scratch — tailored to each inquiry, each bureau, and the exact statutory argument that applies",
  "Submit disputes simultaneously to all three bureaus — no delays, no waiting on one before starting the next",
  "Track every bureau response — monitoring Experian, Equifax, and TransUnion responses on parallel timelines",
  "Challenge \"verified\" responses where the bureau's determination doesn't reflect actual authorization — this is where most self-filers stop and where we keep going",
  "Escalate where necessary using follow-up legal arguments specific to each bureau response and inquiry type",
  "Deliver your final results summary — a complete record of every inquiry removed and your documented score improvement",
];

const TIMELINE = [
  {
    title: "Week 1",
    body:
      "Your consultation is complete, your plan is confirmed, and your custom dispute letters are built and submitted to all three bureaus within 24 hours of signing up. The clock starts immediately because your goals are on a timeline and we treat them that way. Some clients with straightforward unauthorized inquiry situations see their first removals within 7 to 14 days — occasionally sooner — depending on the bureau and the nature of the dispute.",
  },
  {
    title: "Weeks 2 to 3",
    body:
      "Bureaus are actively processing your disputes. The FCRA requires a response within 30 days of submission. During this window we are monitoring every bureau response timeline and preparing follow-up action for any response that requires it. For clients with inquiries across all three bureaus simultaneously, removals often begin appearing in waves as each bureau completes its review on its own schedule.",
  },
  {
    title: "Weeks 4 to 5",
    body:
      "The majority of removals happen in this window for most clients. As each inquiry is deleted, your credit score updates to reflect the change. Clients with moderate inquiry counts — 11 to 30 inquiries — typically see the bulk of their score recovery happening here. This is the window where mortgage applicants often go back to their lenders with updated reports and see the numbers they needed.",
  },
  {
    title: "Week 6 and Beyond",
    body:
      "For clients with higher inquiry counts or more complex situations — identity theft victims, clients with inquiries spread across unusual furnisher types — this phase handles remaining disputes and any escalation responses. For the Elite plan, comprehensive results typically arrive fully in this window. The rare cases that take longer than 90 days are genuinely rare — and covered by the money-back guarantee if no inquiries have been removed within that window.",
  },
];

const COMPLICATIONS = [
  {
    title: 'The Bureau Says the Inquiry Was "Verified"',
    body:
      "This is the most common friction point in the entire process — and the one that stops most self-filers permanently. When a bureau says an inquiry was \"verified,\" it means they confirmed that the credit pull happened. It does not mean they confirmed you gave authorization for it. \"Verified\" and \"authorized\" are legally distinct, and that distinction is where our response lives. When we receive a verification response, we escalate using a follow-up argument that addresses permissible purpose specifically — not the existence of the inquiry, but the legal basis for the pull itself. Most verified responses that get challenged correctly do not survive the escalation.",
  },
  {
    title: "An Inquiry Is Removed from One Bureau but Stays on Another",
    body:
      "Credit bureaus operate independently. A dispute submitted to Experian, Equifax, and TransUnion simultaneously does not guarantee all three respond identically — and they often don't. When one bureau removes an inquiry that another leaves in place, we address the remaining bureau with a targeted follow-up dispute using the successful removal from the first bureau as additional supporting context. Each bureau gets its own response until the result is consistent across all three.",
  },
  {
    title: "A Removed Inquiry Reappears on the Report",
    body:
      "This happens occasionally when a furnisher — the lender or company that originally pulled the credit — reinserts an item after it's been removed. The FCRA has specific provisions that govern reinsertion. Furnishers are required to notify consumers before reinserting a deleted item, and failure to follow that process is itself a violation that strengthens the dispute. If a removed inquiry reappears, we address it immediately and use the reinsertion itself as additional legal leverage.",
  },
];

const SUCCESS_COLUMNS = [
  {
    title: "Typical Outcome",
    subtitle: "What Most Clients Experience",
    body:
      "The average Inquiry Removal client comes in with 15 to 25 hard inquiries spread across two or three bureaus. Within 30 to 60 days, the majority of those inquiries are removed. Credit scores increase by 50 to 100 points on average, depending on the starting score and the volume of inquiries deleted. For most clients, that improvement is enough to clear the threshold their lender, landlord, or financial institution needed, and they move forward with the home purchase, car loan, or credit application that brought them to us in the first place.",
  },
  {
    title: "Best Case Outcome",
    subtitle: "What We've Seen at the Top",
    body:
      "Our highest-performing cases involve identity theft victims or clients with large numbers of completely unauthorized inquiries, situations where the legal argument is airtight and the bureau has no defensible basis for keeping the items. In these cases, clients have seen 100% of their disputed inquiries removed within 30 to 45 days, with score improvements exceeding 100 points. Several clients have gone from denial to approval on a mortgage within 60 days of starting the process.",
  },
  {
    title: "Minimum Guaranteed Outcome",
    subtitle: "What the Guarantee Covers",
    body:
      "If we do not remove a single hard inquiry from your credit report within 90 days of beginning service, you receive a full refund of your flat fee with no runaround and no conditions buried in fine print. We verify the result before processing the refund because that is the honest way to handle it. In nearly eleven years and more than 1,123 clients, we have maintained a review-first qualification standard. The guarantee exists not because we expect to use it, but because you deserve to know it is there before you trust us with anything.",
  },
];

export const metadata: Metadata = {
  title: {
    absolute: "How Hard Inquiry Removal Works | Inquiry Removal",
  },
  description:
    "See exactly what happens when you work with Inquiry Removal — step by step, with real timelines and zero surprises. Simple process. Real results. Free to start.",
  alternates: {
    canonical: "/how-it-works",
  },
  openGraph: {
    title: "How Hard Inquiry Removal Works | Inquiry Removal",
    description:
      "See exactly what happens when you work with Inquiry Removal — step by step, with real timelines and zero surprises. Simple process. Real results. Free to start.",
    url: "https://www.inquiryremoval.com/how-it-works",
  },
  twitter: {
    title: "How Hard Inquiry Removal Works | Inquiry Removal",
    description:
      "See exactly what happens when you work with Inquiry Removal — step by step, with real timelines and zero surprises. Simple process. Real results. Free to start.",
  },
};

export default function HowItWorksPage() {
  return (
    <>
      <main id="main" className="how-page">
        <PageHero
          id="how-page-hero-heading"
          eyebrow="How it works"
          title={
            <>
              Simple <span className="ir-gradient-text">Inquiry Removal Process</span>. Real Results. No Surprises — Here Is Exactly What Happens When You Work with Us.
            </>
          }
          subtitle={
            <p>
              Most people who come to us have never done this before. So here is every step — in plain language, with real timeframes — so you know exactly what you&apos;re walking into before you spend a single dollar.
            </p>
          }
        >
          <span className="how-page-hero-mark" aria-hidden="true">
            <PremiumIcon name="calendarCheck" size={26} />
          </span>
          <h2>From First Conversation to Clean Credit</h2>
          <p>In plain language, with real timeframes.</p>
          <ul className="how-page-hero-points ir-hero-panel-list">
            <li>Day 1 — Takes About 15 Minutes</li>
            <li>Within 24 Hours of Signing Up</li>
            <li>30 to 90 Days</li>
            <li>30 to 90 Days — Sometimes Sooner</li>
          </ul>
        </PageHero>

        <section className="how-page-timeline section-divider" aria-labelledby="how-page-timeline-heading">
          <div className="container">
            <div className="how-page-head about-centered-head">
              <h2 id="how-page-timeline-heading">
                Here Is Every Step — From First Conversation to Clean Credit
              </h2>
            </div>

            <ol className="how-page-steps">
              {STEPS.map((step) => (
                <li key={step.id} id={step.id} className="how-page-step">
                  <article className="how-page-step-card">
                    <div className="how-page-step-top">
                      <span className="how-page-step-number">{step.number}</span>
                      <div>
                        <p className="how-page-step-actor">{step.actor}</p>
                        <h3>{step.title}</h3>
                        <p className="how-page-step-timeframe">{step.timeframe}</p>
                      </div>
                    </div>
                    <div className="how-page-step-body">
                      {step.copy.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    <div className="how-page-step-footer">
                      <strong>What you do:</strong> {step.whatYouDo}
                    </div>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="how-page-worksplit section-divider" aria-labelledby="how-page-worksplit-heading">
          <div className="container">
            <div className="how-page-head about-centered-head">
              <h2 id="how-page-worksplit-heading">
                Your Job Is Simple. Our Job Is Extensive. Here&apos;s the
                Difference.
              </h2>
            </div>

            <div className="how-page-columns">
              <article className="how-page-column how-page-column-you">
                <span className="how-page-column-kicker">What you do</span>
                <ul>
                  {YOU_DO.map((item) => (
                    <li key={item}>
                      <PremiumIcon name="checkBadge" size={16} strokeWidth={1.9} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="how-page-column how-page-column-we">
                <span className="how-page-column-kicker">What we do</span>
                <ul>
                  {WE_DO.map((item) => (
                    <li key={item}>
                      <PremiumIcon name="bureauShield" size={16} strokeWidth={1.8} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="how-page-expectations section-divider" aria-labelledby="how-page-expectations-heading">
          <div className="container how-page-copy-shell">
            <div className="how-page-head">
              <h2 id="how-page-expectations-heading">
                What a Realistic Timeline Looks Like — No Overpromising, No
                Vague Answers
              </h2>
              <p>
                We set honest expectations from the first conversation. Here is
                what the process actually looks like from day one.
              </p>
            </div>

            <div className="how-page-timeline-grid">
              {TIMELINE.map((item) => (
                <article key={item.title} className="how-page-window">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="how-page-complications section-divider" aria-labelledby="how-page-complications-heading">
          <div className="container how-page-copy-shell">
            <div className="how-page-head">
              <h2 id="how-page-complications-heading">
                What Could Go Wrong and How We Handle It
              </h2>
              <p>
                No credit repair company should pretend this process is
                frictionless every single time. It is not. Being prepared for
                complications is what separates a specialist from a generalist.
              </p>
            </div>

            <div className="how-page-complication-list">
              {COMPLICATIONS.map((item) => (
                <article key={item.title} className="how-page-complication-card">
                  <span className="how-page-complication-icon" aria-hidden="true">
                    <PremiumIcon name="warningDiamond" size={18} />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="how-page-compliance section-divider" aria-labelledby="how-page-compliance-heading">
          <div className="container how-page-copy-shell">
            <div className="how-page-head">
              <h2 id="how-page-compliance-heading">
                100% Legal. 100% Ethical. 100% Compliant.
              </h2>
            </div>

            <div className="how-page-copy-card">
              <p>
                Everything we do is grounded in federal consumer protection law.
                We do not use illegal methods, fraudulent identities, file
                segregation, or any practice that puts clients at legal risk.
                Every dispute we submit operates within the framework of the
                laws that exist specifically to protect consumers: the Fair
                Credit Reporting Act, the Fair Debt Collection Practices Act,
                the Fair and Accurate Credit Transactions Act, and Metro 2
                compliance standards.
              </p>
              <p>
                We are not a credit counseling agency and we do not provide
                financial or legal advice. We are a specialized dispute service
                that leverages federal consumer protection statutes to challenge
                unauthorized, excessive, and fraudulent hard inquiries on your
                credit report. Every action we take on your behalf is one the
                law explicitly gives you the right to take. We simply know how
                to take it more effectively than most.
              </p>
            </div>
          </div>
        </section>

        <section className="how-page-success section-divider" aria-labelledby="how-page-success-heading">
          <div className="container">
            <div className="how-page-head about-centered-head">
              <h2 id="how-page-success-heading">
                Three Versions of Success. Be Honest About What to Expect.
              </h2>
            </div>

            <div className="how-page-success-grid">
              {SUCCESS_COLUMNS.map((item) => (
                <article key={item.title} className="how-page-success-card">
                  <h3>{item.title}</h3>
                  <p className="how-page-success-subtitle">{item.subtitle}</p>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>

            <div className="how-page-example gradient-border">
              <h3>Marcus T. - Phoenix, AZ - Standard Plan</h3>
              <ul>
                <li>
                  <strong>Week 1:</strong> Consultation completed, 22 inquiries
                  identified across all three bureaus, custom disputes submitted
                  within 24 hours.
                </li>
                <li>
                  <strong>Weeks 2 to 3:</strong> First 7 inquiries removed from
                  Experian. Score update reflects initial improvement.
                </li>
                <li>
                  <strong>Weeks 4 to 5:</strong> Equifax removes 8 more
                  inquiries. TransUnion removes 4. Running total: 19 of 22
                  removed.
                </li>
                <li>
                  <strong>Week 6:</strong> Final results summary delivered.
                  Score increased 94 points from the starting point. Mortgage
                  application resubmitted. Closed on first home.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="how-page-cta" aria-labelledby="how-page-cta-heading">
          <div className="container">
            <div className="how-page-cta-card gradient-border">
              <h2 id="how-page-cta-heading">
                The Process Is Straightforward. The Guarantee Is Real. The Next
                Step Is Free.
              </h2>
              <p>
                You now know exactly what happens, step by step, complication by
                complication, week by week. There are no hidden phases. No
                surprises. No moment where you find out it costs more than you
                were told.
              </p>
              <p>
                The free consultation is fifteen minutes. You&apos;ll leave knowing
                exactly what&apos;s on your report, exactly what can be removed, and
                exactly which plan fits your situation. If we cannot help you,
                we will tell you that before you spend anything.
              </p>
              <p className="how-page-cta-sub">
                If you&apos;re ready to stop reading about this and start fixing it,
                this is where it begins.
              </p>

              <div className="how-page-cta-actions">
                <Link href="/get-started" className="btn btn-primary btn-large">
                  Book My Free Consultation
                </Link>
                <Link href="/results" className="btn btn-secondary btn-large">
                  See Our Results <span aria-hidden="true">→</span>
                </Link>
              </div>

              <p className="how-page-fear-killer">
                One flat fee starting at $199. No monthly charges. No credit
                card required for your free consultation. 100% money-back
                guarantee if no inquiries are removed within 90 days.
              </p>
            </div>
          </div>
        </section>
      </main>
</>
  );
}
