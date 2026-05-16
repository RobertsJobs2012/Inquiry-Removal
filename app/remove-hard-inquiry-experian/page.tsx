import type { Metadata } from "next";
import Link from "@/components/InstantLink";
import { BureauHeroVisual } from "@/components/BureauHeroVisual";
import { PageHero } from "@/components/PageHero";
import { ProofImageSlot } from "@/components/ProofImageSlot";
import { PremiumIcon } from "@/components/PremiumIcons";
import { experianFaqSchema, experianServiceSchema } from "@/lib/schema";

export const dynamic = "force-static";
export const revalidate = false;
export const fetchCache = "only-cache";

const TRUST_STATS = [
  { value: "11 Years", label: "Specializing in Hard Inquiry Removal Only" },
  { value: "100,437", label: "Hard Inquiries Permanently Deleted" },
  { value: "Review First", label: "We Evaluate Fit Before Taking a Case" },
  { value: "4.9 ★", label: "Average Rating — 312 Google Reviews" },
];

const PRESS = ["Forbes", "Bloomberg", "CNBC", "Business Insider", "MarketWatch"];

const PAIN_CARDS = [
  {
    title: "A dealership sent your application to twenty lenders and you never agreed to it.",
    body:
      "You told them you were just looking. Or you asked them not to shop your file around. They did it anyway. That single afternoon produced a cluster of hard pulls across your Experian report that has been dragging your score down ever since — from inquiries you had no part in authorizing.",
  },
  {
    title: "There's a hard inquiry on your Experian report from a company you've never heard of.",
    body:
      "You didn't apply for anything with them. You've never used their service. But their name is sitting on your Experian report as a hard pull — which means someone either had your information without your knowledge or pulled your credit without a legally required permissible purpose. Both scenarios are disputable. Both have a legal remedy.",
  },
  {
    title: "You tried disputing with Experian directly and got a verified response.",
    body:
      "You filed the dispute. Experian came back within 30 days and said the inquiry was verified. That response felt final — like the door was closed. It wasn't. Experian verified that the pull happened. They did not verify that you consented to it or that the pulling party had a legal right to access your report. Those are two entirely different questions, and the second one is where your dispute lives.",
  },
  {
    title: "Your Experian score is suppressing every application you submit right now.",
    body:
      "Each hard inquiry can lower your Experian score by 5 to 10 points. A cluster of unauthorized pulls from one dealership visit can drop your score 60 to 100 points or more. That suppressed score is showing up on every mortgage pre-approval, every auto loan application, and every credit card decision being made against your file — costing you in approvals denied and interest rates inflated above what your actual financial behavior warrants.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Step 1 — Free Experian Report Review",
    body:
      "We pull up your Experian credit report together and walk through every hard inquiry line by line. We identify which inquiries are unauthorized, which have no permissible purpose, and which have the strongest legal grounds for removal. You'll know exactly what we can dispute before you spend anything.",
  },
  {
    title: "Step 2 — Custom Experian Dispute Letters",
    body:
      "We build a dispute letter specifically tailored to each removable inquiry on your Experian report. Each letter cites the exact FCRA, FDCPA, or FACTA provision that applies — not a template that Experian's system flags as boilerplate. Experian receives these within 24 hours of your signup.",
  },
  {
    title: "Step 3 — Experian Reinvestigation and Response Monitoring",
    body:
      "Experian has 30 days to investigate and respond to each dispute under the FCRA. We monitor every response. When inquiries are removed, we document the result. When Experian responds with \"verified,\" we assess whether that response is legally defensible and escalate with a targeted follow-up where it isn't.",
  },
  {
    title: "Step 4 — Inquiries Removed. Score Increases. You Move Forward.",
    body:
      "As unauthorized inquiries are deleted from your Experian report, your credit score updates to reflect the change. Most clients see their Experian score begin recovering within 30 to 60 days. The home, loan, or approval you were working toward gets measurably closer with every inquiry that disappears.",
  },
];

const FAQS = [
  {
    q: "Can you remove hard inquiries from an Experian credit report?",
    a: "Unauthorized, inaccurate, and impermissible hard inquiries can be disputed and removed from your Experian credit report under the Fair Credit Reporting Act. Experian is correct that legitimately authorized hard inquiries — ones where you gave clear, informed consent to a credit pull — are generally not removable before the two-year window expires. The critical distinction is authorization. If a dealership sent your application to lenders you didn't approve, if a company pulled your Experian report without a legally required permissible purpose, or if there are inquiries on your report from an identity theft incident — those are disputable, and removal is the likely outcome when the dispute is constructed correctly.",
  },
  {
    q: "How do I dispute a hard inquiry on Experian?",
    a: "You can dispute a hard inquiry on Experian through their online dispute center, by mail, or by phone — but the outcome depends almost entirely on how the dispute is framed. Experian's automated system will verify that the pull happened and mark it \"verified\" unless the dispute specifically challenges the authorization or permissible purpose of the pull — not just its existence. A generic \"I don't recognize this\" dispute is the most common approach and the most commonly dismissed. A dispute that cites the specific FCRA provision governing unauthorized pulls, documents the absence of permissible purpose, and requests reinvestigation on those legal grounds produces a fundamentally different outcome.",
  },
  {
    q: "What happens if Experian says a hard inquiry is verified?",
    a: "A \"verified\" response from Experian means they confirmed the credit pull occurred — not that the pull was legally authorized. These are two distinct legal questions, and Experian's initial dispute process primarily answers the first one. When we receive a verified response on an inquiry we believe was unauthorized, we escalate using a follow-up dispute that focuses on permissible purpose specifically. Most \"verified\" responses that are properly challenged at the escalation stage do not survive. This is the step that stops most self-filers and where professional dispute handling produces a different result.",
  },
  {
    q: "How long do hard inquiries stay on an Experian credit report?",
    a: "Hard inquiries stay on your Experian credit report for two years. Experian reports that most hard inquiries stop significantly affecting your credit score after approximately one year — but they remain visible to lenders for the full two-year period. Unauthorized hard inquiries do not have to remain for two years. They can be disputed and removed before the two-year window if the dispute establishes that the pull lacked authorization or permissible purpose.",
  },
  {
    q: "How many points does removing a hard inquiry from Experian add to my score?",
    a: "Removing a hard inquiry from your Experian report typically adds 5 to 10 points per inquiry removed. The exact improvement depends on your starting score, your total credit profile, and how many inquiries are removed simultaneously. Clients who remove large clusters of unauthorized inquiries — particularly those whose scores were disproportionately suppressed by a single incident like a dealership visit — routinely see improvements of 50 to 100 or more points. The lower your starting score and the more inquiries removed, the more significant the recovery tends to be.",
  },
  {
    q: "Can I dispute a hard inquiry from Experian that I didn't authorize?",
    a: "Yes — disputing an unauthorized hard inquiry with Experian is specifically supported under the Fair Credit Reporting Act. The FCRA gives consumers the right to dispute any item on their credit report they believe is inaccurate, including hard inquiries obtained without proper authorization or permissible purpose. The dispute must specifically challenge the authorization of the pull — not just flag it as unfamiliar — to trigger the reinvestigation process that gives the dispute its best chance of resulting in removal.",
  },
  {
    q: "What does permissible purpose mean for an Experian hard inquiry?",
    a: "Permissible purpose is the legal requirement under the Fair Credit Reporting Act that governs when a company may legally pull your Experian credit report. A lender, landlord, or creditor must have a specific legally recognized reason — typically a credit application you initiated, a collection action, or a court order — to access your report as a hard inquiry. A company that pulls your Experian report without a permissible purpose has violated the FCRA. That violation is the legal basis for removing the inquiry, and it is one of the strongest grounds available in the dispute process.",
  },
  {
    q: "Does disputing a hard inquiry with Experian hurt my credit score?",
    a: "No — filing a dispute with Experian does not hurt your credit score. Disputes do not appear on your credit report and do not factor into credit scoring calculations. The only score impact comes from the outcome: if the dispute results in removal, your score improves. If the dispute is unsuccessful and the inquiry remains, your score is unchanged from where it was before the dispute.",
  },
  {
    q: "How long does the Experian hard inquiry dispute process take?",
    a: "Experian has 30 days to investigate and respond to a dispute under the FCRA, and in some cases up to 45 days. Most clients see their first Experian removals within 30 to 60 days of their disputes being submitted. Cases that require escalation — where an initial \"verified\" response is challenged with a follow-up legal argument — may take longer. We work as fast as the law allows and set realistic expectations from the first conversation.",
  },
  {
    q: "What is the Experian dispute center address for removing hard inquiries by mail?",
    a: "Hard inquiry disputes can be submitted to Experian by mail at: Experian, P.O. Box 4500, Allen, TX 75013. Disputes submitted by mail should include a clear written explanation of why the inquiry is being disputed, supporting documentation where available, and a copy of your Experian credit report with the inquiry identified. Our dispute letters are built for mail submission and include everything the reinvestigation requires — including the specific legal argument that most self-written disputes omit.",
  },
  {
    q: "Should I hire someone to remove hard inquiries from my Experian report or do it myself?",
    a: "You can dispute Experian hard inquiries on your own — and for a single straightforward inquiry with clear documentation, a well-constructed self-dispute sometimes succeeds. The cases where professional help produces meaningfully better outcomes are: multiple inquiries across one or more bureaus, situations where Experian has already returned a \"verified\" response, identity theft incidents with several fraudulent pulls, and any case where the dispute requires citing specific FCRA, FDCPA, or FACTA provisions rather than just flagging an unfamiliar inquiry. The knowledge gap between a first-time self-filer and a team that has removed over 100,437 inquiries is real — but the free consultation lets you assess whether your situation needs professional handling before you spend anything.",
  },
];

export const metadata: Metadata = {
  title: {
    absolute: "Remove Hard Inquiries From Experian | Inquiry Removal",
  },
  description:
    "Dispute and remove unauthorized hard inquiries from your Experian credit report using federal law. Free consultation. Flat fee. 100% money-back guarantee.",
  alternates: {
    canonical: "/remove-hard-inquiry-experian",
  },
  openGraph: {
    title: "Remove Hard Inquiries From Experian | Inquiry Removal",
    description:
      "Dispute and remove unauthorized hard inquiries from your Experian credit report using federal law. Free consultation. Flat fee. 100% money-back guarantee.",
    url: "https://www.inquiryremoval.com/remove-hard-inquiry-experian",
  },
  twitter: {
    title: "Remove Hard Inquiries From Experian | Inquiry Removal",
    description:
      "Dispute and remove unauthorized hard inquiries from your Experian credit report using federal law. Free consultation. Flat fee. 100% money-back guarantee.",
  },
};

export default function RemoveHardInquiryExperianPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(experianServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(experianFaqSchema) }}
      />
      <main id="main" className="experian-page">
        <PageHero
          id="experian-hero-heading"
          eyebrow="Experian inquiry removal"
          title={
            <>
              Remove Unauthorized Hard Inquiries From Your <span className="ir-gradient-text">Experian</span> Credit Report — Using Federal Law, Not Guesswork.
            </>
          }
          subtitle={
            <p>
              If there are hard inquiries on your Experian report that you didn&apos;t authorize — from a dealership that sent your application everywhere, a lender who pulled your credit without permission, or someone who used your identity — you have the legal right to dispute them.
            </p>
          }
          meta={
            <>
              <span><PremiumIcon name="checkBadge" size={15} /> 100,437 Hard Inquiries Removed</span>
              <span><PremiumIcon name="star" size={15} /> 4.9 Stars — 312 Google Reviews</span>
              <span><PremiumIcon name="guaranteeSeal" size={15} /> 100% Money-Back Guarantee</span>
            </>
          }
          actions={
            <>
              <Link href="/get-started" className="btn btn-primary btn-large">
                Get My Free Experian Analysis
              </Link>
              <Link href="/how-it-works" className="btn btn-secondary btn-large">
                See How It Works →
              </Link>
            </>
          }
          copyAfter={
            <p className="experian-fear-killer">
              Free consultation. No credit card required. One flat fee starting at $199 — no monthly charges, ever.
            </p>
          }
        >
          <BureauHeroVisual bureau="experian" />
        </PageHero>

        <section className="experian-trust section-divider" aria-labelledby="experian-trust-heading">
          <div className="container">
            <h2 id="experian-trust-heading" className="sr-only">
              Experian trust indicators
            </h2>
            <div className="experian-stats">
              {TRUST_STATS.map((stat) => (
                <article key={stat.value} className="experian-stat">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
            <div className="experian-press">
              {PRESS.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="experian-problem section-divider" aria-labelledby="experian-problem-heading">
          <div className="container experian-copy-shell">
            <div className="experian-copy-head">
              <h2 id="experian-problem-heading">
                Hard Inquiries on Your Experian Report That You Didn&apos;t
                Authorize Don&apos;t Have to Stay There for Two Years.
              </h2>
            </div>

            <div className="experian-copy-card">
              <p>
                Hard inquiries remain on your Experian credit report for up to
                two years. That&apos;s the standard answer — and it&apos;s technically
                true. What most people never find out is that it only applies to
                inquiries you actually authorized. Unauthorized hard inquiries,
                inaccurate hard inquiries, and inquiries obtained without a
                permissible purpose under the Fair Credit Reporting Act are a
                completely different category — and they have a completely
                different legal path.
              </p>
              <p>
                Experian is not going to explain that distinction on their
                dispute page. They process thousands of disputes a day using
                automated systems designed to verify that the inquiry happened
                — not to verify that you gave permission for it. &quot;Verified&quot; in
                Experian&apos;s system means the pull was confirmed to exist. It
                does not mean it was legally authorized. That distinction is
                where most self-filers give up. It is exactly where we begin.
              </p>

              <div className="experian-pain-grid">
                {PAIN_CARDS.map((card) => (
                  <article key={card.title} className="experian-pain-card">
                    <h3>{card.title}</h3>
                    <p>{card.body}</p>
                  </article>
                ))}
              </div>

              <p className="experian-transition">
                Here is what the Fair Credit Reporting Act says about this, and
                why it matters for your specific situation.
              </p>
            </div>
          </div>
        </section>

        <section className="experian-service section-divider" aria-labelledby="experian-service-heading">
          <div className="container experian-copy-shell">
            <div className="experian-copy-head">
              <h2 id="experian-service-heading">
                What Experian Hard Inquiry Removal Actually Involves — and Why
                It Requires More Than a Standard Dispute
              </h2>
            </div>

            <div className="experian-copy-card">
              <p>
                Removing unauthorized hard inquiries from your Experian credit
                report is a legal process governed by the Fair Credit Reporting
                Act, the Fair Debt Collection Practices Act, and FACTA. The
                process itself is not mysterious. What matters is knowing which
                statute applies to which inquiry and how to construct a dispute
                argument that Experian&apos;s reinvestigation process cannot dismiss
                as generic boilerplate.
              </p>
              <p>
                First, we identify exactly which inquiries on your Experian
                report are unauthorized, excessive, or obtained without
                permissible purpose. Not every hard inquiry qualifies for
                dispute, and we tell you that clearly in the free consultation
                before you spend anything.
              </p>
              <p>
                Second, we build a custom dispute letter specific to each
                removable inquiry, citing the exact FCRA provision that applies
                to your situation, documenting the lack of permissible purpose,
                and framing the dispute in a way Experian&apos;s reinvestigation
                team cannot resolve with a simple automated verified response.
              </p>
              <p>
                Third, we submit directly to Experian and monitor the response.
                When Experian responds with verified on an inquiry we believe
                was unauthorized, we escalate using the legal distinction
                between this pull happened and this pull was authorized as the
                foundation for the next round. That is where most self-filers
                stop. It is where we keep going.
              </p>
              <p>
                The FCRA gives you the right to dispute information on your
                credit report that is inaccurate, incomplete, or unverifiable.
                An unauthorized hard inquiry is all three. We know how to use
                that.
              </p>
            </div>
          </div>
        </section>

        <section className="experian-fit section-divider" aria-labelledby="experian-fit-heading">
          <div className="container experian-fit-grid">
            <article className="experian-fit-card">
              <h2 id="experian-fit-heading">This Service Is Built for You If:</h2>
              <ul>
                <li>
                  You visited one or more car dealerships and found multiple
                  unauthorized hard inquiries on your Experian report that you
                  never agreed to
                </li>
                <li>
                  You found a hard inquiry on your Experian report from a
                  company you don&apos;t recognize and have never done business with
                </li>
                <li>
                  You&apos;re a victim of identity theft and fraudulent hard pulls
                  are appearing on your Experian report from the incident
                </li>
                <li>
                  You submitted one credit application online and discovered it
                  was sent to multiple lenders without your knowledge or consent
                </li>
                <li>
                  You already tried disputing with Experian directly, received a
                  verified response, and don&apos;t know where to go from there
                </li>
                <li>
                  Your Experian score is the specific barrier between you and a
                  mortgage pre-approval, auto loan, or credit application you
                  need approved
                </li>
              </ul>
            </article>

            <article className="experian-fit-card experian-fit-card-muted">
              <h2>This Service Is Not for You If:</h2>
              <ul>
                <li>
                  Your hard inquiries on Experian were fully authorized, within
                  a legitimate permissible-purpose window, and there are no
                  inaccuracies to challenge. We won&apos;t take your money on a case
                  where no legitimate dispute exists.
                </li>
                <li>
                  You are looking to remove collections, late payments,
                  charge-offs, or other negative items from your Experian
                  report. Hard inquiry removal is the only service we offer.
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section className="experian-process section-divider" aria-labelledby="experian-process-heading">
          <div className="container">
            <div className="experian-copy-head about-centered-head">
              <h2 id="experian-process-heading">
                How We Remove Hard Inquiries From Your Experian Report — Step by
                Step
              </h2>
            </div>

            <div className="experian-process-grid">
              {PROCESS_STEPS.map((step) => (
                <article key={step.title} className="experian-process-card">
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>

            <Link href="/how-it-works" className="experian-inline-link">
              See the full process in detail <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section className="experian-proof section-divider" aria-labelledby="experian-proof-heading">
          <div className="container experian-copy-shell">
            <div className="experian-copy-head">
              <h2 id="experian-proof-heading">
                What Happens When Someone With Experian Inquiries Works With Us
              </h2>
            </div>

            <div className="bureau-proof-layout">
              <ProofImageSlot
                badge="Experian proof"
                score="+94"
                label="Marcus T. | Phoenix, AZ"
                detail="19 inquiries removed across all three bureaus, including every single one from Experian."
              />

              <div className="experian-proof-stack">
              <article className="experian-proof-card">
                <h3>Case Study — Marcus T. | Phoenix, AZ | Standard Plan</h3>
                <p>
                  Marcus came to us after three dealership visits left 22
                  unauthorized hard inquiries across his Experian, Equifax, and
                  TransUnion reports. His Experian score alone had dropped from
                  680 to a number that was disqualifying him for the mortgage he
                  had been planning around.
                </p>
                <p>
                  Custom dispute letters were submitted to Experian within 24
                  hours of signup. Fourteen days later, the first wave of
                  removals appeared on his Experian report. By day 47, the
                  majority of his unauthorized inquiries had been permanently
                  deleted across all three bureaus. His score climbed 94 points.
                  He closed on his first home six weeks after the final
                  removal.
                </p>
                <blockquote>
                  <p>
                    &quot;Three dealerships. Twenty-two inquiries I never
                    authorized. Inquiry Removal removed 19 of them in 47 days,
                    including every single one from Experian. My score went up
                    94 points and I&apos;m a homeowner. That&apos;s the whole story.&quot;
                  </p>
                  <footer>Marcus T. | Phoenix, AZ | 19 Inquiries Removed Across All 3 Bureaus | +94 Points | Home Purchased in 47 Days</footer>
                </blockquote>
                <small>
                  Individual results vary based on each client&apos;s specific
                  credit report, inquiry type, and bureau response.
                </small>
              </article>

              <article className="experian-proof-card">
                <h3>Additional Testimonial</h3>
                <blockquote>
                  <p>
                    &quot;I found a hard inquiry on my Experian report from a
                    company I had never heard of. I disputed it with Experian
                    directly and got a verified response, which felt like a dead
                    end. Inquiry Removal escalated the dispute with a different
                    legal argument and the inquiry was removed within 34 days.
                    Turns out verified just means Experian confirmed it
                    happened. It doesn&apos;t mean it was authorized. I wish I had
                    known that before I spent three months doing it wrong.&quot;
                  </p>
                  <footer>Linda K. | Denver, CO | 1 Unauthorized Experian Inquiry Removed | Escalated After Verified Response | +31 Points</footer>
                </blockquote>
                <small>
                  Individual results vary based on each client&apos;s specific
                  credit report, inquiry type, and bureau response.
                </small>
              </article>
              </div>
            </div>
          </div>
        </section>

        <section className="experian-faq section-divider" aria-labelledby="experian-faq-heading">
          <div className="container experian-copy-shell">
            <div className="experian-copy-head">
              <h2 id="experian-faq-heading">
                Experian Hard Inquiry Questions We Answer Every Day
              </h2>
            </div>

            <div className="experian-faq-list">
              {FAQS.map((item) => (
                <details key={item.q} className="experian-faq-card" name="experian-faq">
                  <summary>
                    <span>{item.q}</span>
                    <b aria-hidden="true">+</b>
                  </summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="experian-closing section-divider" aria-labelledby="experian-closing-heading">
          <div className="container">
            <div className="experian-closing-card">
              <h2 id="experian-closing-heading">
                Ready to Find Out Exactly Which Inquiries Can Be Removed From
                Your Experian Report?
              </h2>
              <p>
                The free consultation is fifteen minutes. We pull up your
                Experian report together, walk through every hard inquiry,
                identify every unauthorized or inaccurate pull that qualifies
                for dispute, and tell you exactly what the process looks like
                for your specific situation before you spend a single dollar.
              </p>
              <p>
                If your inquiries don&apos;t qualify for removal, we tell you that
                in the consultation. If they do, disputes are submitted to
                Experian within 24 hours of your signup.
              </p>

              <div className="experian-closing-actions">
                <Link href="/get-started" className="btn btn-primary btn-large">
                  Get My Free Experian Analysis
                </Link>
                <a
                  href="/experian-dispute-letter-template.txt"
                  download
                  className="btn btn-secondary btn-large"
                >
                  Download the Experian Dispute Letter Template →
                </a>
              </div>

              <p className="experian-fear-killer">
                No credit card required. No obligation. One flat fee starting
                at $199 — paid once, never again. 100% money-back guarantee if
                no inquiries are removed within 90 days.
              </p>
            </div>
          </div>
        </section>
      </main>
</>
  );
}
