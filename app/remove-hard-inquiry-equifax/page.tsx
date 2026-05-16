import type { Metadata } from "next";
import Link from "next/link";
import { BureauHeroVisual } from "@/components/BureauHeroVisual";
import { PageHero } from "@/components/PageHero";
import { ProofImageSlot } from "@/components/ProofImageSlot";
import { PremiumIcon } from "@/components/PremiumIcons";
import { equifaxFaqSchema, equifaxServiceSchema } from "@/lib/schema";

import "@/src/styles/pages/equifax.css";
const TRUST_STATS = [
  { value: "11 Years", label: "Specializing in Hard Inquiry Removal Only" },
  { value: "100,437", label: "Hard Inquiries Permanently Deleted" },
  { value: "Review First", label: "We Evaluate Fit Before Taking a Case" },
  { value: "4.9 ★", label: "Average Rating — 312 Google Reviews" },
];

const PRESS = ["Forbes", "Bloomberg", "CNBC", "Business Insider", "MarketWatch"];

const PAIN_CARDS = [
  {
    title: "A dealership ran your Equifax report multiple times without your permission.",
    body:
      "You went to a car dealership. Maybe you test-drove something. Maybe you just asked about financing. The dealership sent your application to multiple lenders — some you never heard of, some in states you've never visited — and every single one of those pulls landed on your Equifax report as a hard inquiry. You authorized none of them. Your Equifax score dropped hard from a single afternoon you thought was harmless.",
  },
  {
    title: "There's a hard inquiry on your Equifax report that isn't yours.",
    body:
      "It's from a company you've never done business with. It appeared during a period when you weren't applying for credit. It may be the result of identity theft, or it may be a company that pulled your Equifax report without a legally required permissible purpose. Either way, it's sitting on your report, suppressing your score, and showing up on every credit decision made against your file.",
  },
  {
    title: "You already disputed with Equifax and they said it was verified.",
    body:
      "You filed the dispute through myEquifax. You waited 30 days. Equifax came back and said the inquiry was verified. That response felt final — and Equifax's letter made it hard to understand exactly what was investigated and what the result actually means. What it does not mean is that the inquiry was authorized. Verified means the pull happened. It does not mean the company had a legal right to access your Equifax report. That distinction is the legal basis for the next step — and most people never take it.",
  },
  {
    title: "Your Equifax score is the specific number that's blocking your mortgage approval.",
    body:
      "Your payment history is solid. Your debt is manageable. Your Equifax score is the one holding you back — suppressed by a cluster of unauthorized hard pulls that don't reflect a single financial decision you actually made. Your lender has told you the number. You know exactly what it needs to reach. And the inquiries dragging it down have a legal path to removal that most people never find.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Step 1 — Free Equifax Report Review:",
    body:
      "We pull up your Equifax credit report together and go through every hard inquiry. We identify which ones are unauthorized, which have no permissible purpose, and which have the strongest legal grounds for removal or escalation. If you have already received a denial from Equifax, we assess that response specifically and tell you what the next step looks like. You know everything before you spend anything.",
  },
  {
    title: "Step 2 — Custom Equifax Dispute Letters:",
    body:
      "Every dispute letter is built specifically for your inquiries and your Equifax report. Each letter cites the exact FCRA, FDCPA, or FACTA provision that applies to your situation. Where submission by certified mail creates a stronger paper record — particularly in cases where Equifax has already denied once — we build the dispute for that submission method. Disputes are submitted to Equifax within 24 hours of your signup.",
  },
  {
    title: "Step 3 — Response Monitoring and Escalation:",
    body:
      "Equifax has 30 days to investigate and respond under the FCRA. We monitor every response. When inquiries are removed, we document the result. When Equifax responds with \"verified\" or \"denied,\" we assess whether the response reflects a genuine investigation and escalate with a targeted follow-up where it doesn't. If CFPB escalation becomes appropriate, we guide that process. We do not accept a denial that the law does not require us to accept.",
  },
  {
    title: "Step 4 — Inquiries Removed. Score Recovers. You Move Forward.",
    body:
      "As unauthorized inquiries are deleted from your Equifax report, your credit score updates. Most clients see meaningful Equifax score recovery within 30 to 90 days. For clients who came to us after a prior denial — where the escalation process is what produced the result — the timeline may extend beyond the initial 30-day window, but the outcome is the same: unauthorized inquiries removed, score improved, goals back in reach.",
  },
];

const FAQS = [
  {
    q: "Can you remove hard inquiries from an Equifax credit report?",
    a: "Unauthorized, inaccurate, and impermissible hard inquiries can be disputed and removed from your Equifax credit report under the Fair Credit Reporting Act. Equifax is correct that legitimately authorized hard inquiries are generally not removable before the two-year window expires. The distinction is authorization and permissible purpose. If a car dealership sent your application to lenders you didn't approve, if a company pulled your Equifax report without a legally required reason, or if inquiries appeared from an identity theft incident — those are disputable, and removal is the outcome when the dispute is constructed correctly and escalated where necessary.",
  },
  {
    q: "How do I dispute a hard inquiry with Equifax?",
    a: "You can dispute a hard inquiry with Equifax through myEquifax online, by phone, or by certified mail — but the outcome depends almost entirely on how the dispute is framed and documented. Equifax's automated system will process a standard \"I don't recognize this\" dispute quickly and return a \"verified\" response in most cases. A dispute that specifically challenges the permissible purpose of the pull — citing the FCRA provision that governs unauthorized credit access and requesting documentation of the authorization — triggers a different level of reinvestigation. Submitting by certified mail creates a verifiable paper record that becomes important if escalation to the CFPB becomes necessary.",
  },
  {
    q: "What is the Equifax dispute mailing address for hard inquiry removal?",
    a: "Hard inquiry disputes can be submitted to Equifax by certified mail at: Equifax Information Services LLC, P.O. Box 740256, Atlanta, GA 30374. Disputes submitted by certified mail should include a clear explanation of why the inquiry is being disputed, the specific FCRA basis for the dispute, any supporting documentation, and a copy of your Equifax credit report with the inquiry identified. Certified mail creates a delivery confirmation record — which matters if Equifax fails to respond within the required 30-day window or if CFPB escalation becomes appropriate later.",
  },
  {
    q: "What do I do if Equifax denies my hard inquiry dispute?",
    a: "If Equifax denies your dispute or returns a \"verified\" response, your legal options do not end there. The FCRA requires Equifax to conduct a reasonable investigation of every dispute — and the CFPB fined Equifax $15 million in January 2025 specifically for failing to meet that standard, including ignoring consumer documentation and allowing deleted items to reappear. A denial can be escalated with a follow-up dispute that shifts the argument to permissible purpose specifically, rather than just the existence of the inquiry. If Equifax continues to deny a legitimate dispute, filing a CFPB complaint is a meaningful and legally supported escalation step that carries real consequence for Equifax given their enforcement history.",
  },
  {
    q: "Can I file a CFPB complaint against Equifax for not removing an unauthorized inquiry?",
    a: "Yes — filing a CFPB complaint against Equifax is a legitimate and effective escalation step when a valid dispute has been improperly denied. The CFPB ordered Equifax to pay $15 million in January 2025 for improper dispute investigation practices, meaning federal regulators are actively monitoring Equifax's dispute handling. A CFPB complaint creates a formal federal record of the dispute, requires Equifax to respond directly to the regulator, and carries enforcement weight that a standard consumer dispute does not. We guide clients through this process when escalation is warranted.",
  },
  {
    q: "How do I dispute a hard inquiry on Equifax I didn't authorize?",
    a: "Disputing an unauthorized hard inquiry on Equifax requires framing the dispute around permissible purpose — not just the unfamiliarity of the inquiry. The FCRA requires any company that pulls your Equifax credit report to have a specific legally recognized reason for doing so. A dispute that documents the absence of that reason, cites the applicable FCRA section, and requests that Equifax provide documentation of the authorization is fundamentally different from a standard \"I don't recognize this\" dispute. The former requires Equifax to investigate the legality of the pull. The latter typically results in an automated \"verified\" response.",
  },
  {
    q: "How long do hard inquiries stay on an Equifax credit report?",
    a: "Hard inquiries stay on your Equifax credit report for two years. Equifax reports that most hard inquiries stop significantly affecting your score after approximately one year — but they remain visible to lenders for the full two-year period. Unauthorized hard inquiries do not have to remain for two years. They can be disputed and removed before that window if the dispute establishes that the pull lacked proper authorization or permissible purpose under the FCRA.",
  },
  {
    q: "How many points does removing a hard inquiry from Equifax add to my score?",
    a: "Removing a hard inquiry from your Equifax report typically adds 5 to 10 points per inquiry removed, depending on your overall credit profile and the number of inquiries removed simultaneously. Clients who remove large clusters of unauthorized inquiries — particularly those suppressed by a single dealership visit that produced multiple pulls — routinely see Equifax score improvements of 50 to 100 or more points. The relationship between inquiry removal and score recovery is most significant when the inquiries were artificially suppressing an otherwise strong credit profile.",
  },
  {
    q: "What is myEquifax and how do I dispute a hard inquiry through it?",
    a: "myEquifax is Equifax's online consumer portal at myequifax.com where you can access your Equifax credit report, file disputes, and track dispute status. The myEquifax dispute process is the fastest submission method — disputes filed online are typically acknowledged within a few days — but the outcome depends on how the dispute is documented and argued, not how it is submitted. The same permissible purpose argument that produces removal through certified mail also applies when submitted through myEquifax. The advantage of certified mail is the verifiable delivery record it creates for escalation purposes.",
  },
  {
    q: "Does disputing a hard inquiry with Equifax hurt my credit score?",
    a: "No — filing a dispute with Equifax does not hurt your credit score. Disputes do not appear on your credit report and are not factored into credit scoring calculations. The only score impact comes from the outcome: removal improves your score, an unsuccessful dispute leaves it unchanged. There is no downside to disputing an unauthorized inquiry beyond the time and effort the process requires.",
  },
  {
    q: "What does \"permissible purpose\" mean for an Equifax hard inquiry?",
    a: "Permissible purpose is the legal requirement under Section 604 of the Fair Credit Reporting Act that governs when a company may legally pull your Equifax credit report. A company must have a specific legally recognized reason — typically a credit application you initiated, a collection action, employment screening you consented to, or a court order — to access your Equifax report as a hard inquiry. A company that pulls your Equifax report without permissible purpose has violated the FCRA. That violation is the legal basis for removing the inquiry and, where Equifax fails to act on a valid dispute, for escalating to the CFPB.",
  },
  {
    q: "What happens if Equifax reinserts an inquiry it already deleted?",
    a: "If Equifax reinserts a hard inquiry that was previously deleted, that action is governed by specific FCRA requirements. Equifax is required to notify you within five business days before reinserting a deleted item and must provide the name of the furnisher who requested the reinsertion. Failure to follow this process is itself an FCRA violation that strengthens your dispute position. If a removed inquiry reappears on your Equifax report, we address it immediately and use the reinsertion as additional leverage in the follow-up dispute.",
  },
];

export const metadata: Metadata = {
  title: {
    absolute: "Remove Hard Inquiries From Equifax | Inquiry Removal",
  },
  description:
    "Dispute unauthorized hard inquiries on your Equifax credit report. Custom disputes, federal law, and CFPB escalation when needed. Free consultation. Flat fee.",
  alternates: {
    canonical: "/remove-hard-inquiry-equifax",
  },
  openGraph: {
    title: "Remove Hard Inquiries From Equifax | Inquiry Removal",
    description:
      "Dispute unauthorized hard inquiries on your Equifax credit report. Custom disputes, federal law, and CFPB escalation when needed. Free consultation. Flat fee.",
    url: "https://www.inquiryremoval.com/remove-hard-inquiry-equifax",
  },
  twitter: {
    title: "Remove Hard Inquiries From Equifax | Inquiry Removal",
    description:
      "Dispute unauthorized hard inquiries on your Equifax credit report. Custom disputes, federal law, and CFPB escalation when needed. Free consultation. Flat fee.",
  },
};

export default function RemoveHardInquiryEquifaxPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(equifaxServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(equifaxFaqSchema) }}
      />
      <main id="main" className="equifax-page">
        <PageHero
          id="equifax-hero-heading"
          eyebrow="Equifax inquiry removal"
          title={
            <>
              Remove Unauthorized Hard Inquiries From Your <span className="ir-gradient-text">Equifax</span> Credit Report — Even If Equifax Has Already Said No.
            </>
          }
          subtitle={
            <p>
              If there are unauthorized hard inquiries on your Equifax report, or if Equifax has already verified or denied a dispute you believe should have been removed, you have legal options that go far beyond what Equifax&apos;s dispute center offers.
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
                Get My Free Equifax Analysis
              </Link>
              <Link href="/how-it-works" className="btn btn-secondary btn-large">
                See How It Works →
              </Link>
            </>
          }
          copyAfter={
            <p className="equifax-fear-killer">
              Free consultation. No credit card required. One flat fee starting at $199 — no monthly charges, ever.
            </p>
          }
        >
          <BureauHeroVisual bureau="equifax" />
        </PageHero>

        <section className="equifax-trust section-divider" aria-labelledby="equifax-trust-heading">
          <div className="container">
            <h2 id="equifax-trust-heading" className="sr-only">
              Equifax trust indicators
            </h2>
            <div className="equifax-stats">
              {TRUST_STATS.map((stat) => (
                <article key={stat.value} className="equifax-stat">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
            <div className="equifax-press">
              {PRESS.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="equifax-problem section-divider" aria-labelledby="equifax-problem-heading">
          <div className="container equifax-copy-shell">
            <div className="equifax-copy-head">
              <h2 id="equifax-problem-heading">
                Equifax Hard Inquiries You Didn&apos;t Authorize Don&apos;t Have to Stay
                on Your Report. Even If Equifax Says They Do.
              </h2>
            </div>

            <div className="equifax-copy-card">
              <p>
                Equifax is widely regarded as the most difficult of the three
                major credit bureaus to work with on dispute resolution. The
                Consumer Financial Protection Bureau documented this in January
                2025 — ordering Equifax to pay a $15 million penalty for
                improperly investigating consumer disputes, ignoring supporting
                evidence consumers submitted, allowing deleted inaccuracies to
                reappear on credit reports, and sending consumers confusing
                dispute-result letters that obscured what had actually happened.
              </p>
              <p>
                That is not a minor complaint. That is a federal enforcement
                action against Equifax&apos;s dispute process specifically — the same
                process you are using when you try to remove an unauthorized
                hard inquiry on your own.
              </p>
              <p>
                What this means for you is important: if Equifax says your
                dispute was investigated and the inquiry was verified, that
                response may not reflect a genuine, thorough investigation. The
                FCRA requires Equifax to conduct a reasonable investigation of
                every dispute, and federal regulators found they were not always
                doing that. A denial from Equifax is not necessarily the final
                word. It is often the beginning of the next phase of the
                process.
              </p>

              <div className="equifax-pain-grid">
                {PAIN_CARDS.map((card) => (
                  <article key={card.title} className="equifax-pain-card">
                    <h3>{card.title}</h3>
                    <p>{card.body}</p>
                  </article>
                ))}
              </div>

              <p className="equifax-transition">
                Here is what the Fair Credit Reporting Act says you can do — and
                why Equifax&apos;s denial is not the end of the road.
              </p>
            </div>
          </div>
        </section>

        <section className="equifax-service section-divider" aria-labelledby="equifax-service-heading">
          <div className="container equifax-copy-shell">
            <div className="equifax-copy-head">
              <h2 id="equifax-service-heading">
                What Equifax Hard Inquiry Removal Actually Involves — and Why a
                Standard Dispute Often Isn&apos;t Enough
              </h2>
            </div>

            <div className="equifax-copy-card">
              <p>
                Removing unauthorized hard inquiries from your Equifax credit
                report is a legal process governed by the Fair Credit Reporting
                Act, the Fair Debt Collection Practices Act, and FACTA. Equifax
                is required by federal law to conduct a reasonable
                investigation of every dispute you submit. When they don&apos;t, and
                the CFPB has documented that they sometimes don&apos;t, you have
                escalation options that carry real legal weight.
              </p>
              <p>Here is what the correct process looks like:</p>
              <p>
                First, we identify exactly which inquiries on your Equifax
                report are unauthorized, inaccurate, or obtained without
                permissible purpose. We do this in the free consultation, before
                you spend anything, and we tell you honestly if your inquiries
                don&apos;t qualify for dispute.
              </p>
              <p>
                Second, we build a custom dispute letter for each removable
                inquiry. Not a template that Equifax&apos;s automated system
                recognizes and processes with a boilerplate response. A letter
                that cites the exact FCRA provision governing unauthorized
                credit pulls, documents the absence of permissible purpose, and
                is constructed to require a genuine reinvestigation rather than
                an automated verification. Where submission by certified mail
                creates a stronger record, we use it.
              </p>
              <p>
                Third, we monitor every Equifax response. When inquiries are
                removed, we document the result. When Equifax responds with
                &quot;verified&quot; or &quot;denied&quot; on an inquiry we believe was
                unauthorized, we assess the response and escalate — using a
                follow-up legal argument built specifically around the
                distinction between &quot;this pull happened&quot; and &quot;this company had
                a legal right to pull your Equifax report.&quot; When escalation to
                the CFPB becomes the appropriate next step, we guide you through
                that process too.
              </p>
              <p>
                The FCRA gives you the right to dispute any inaccurate or
                impermissible item on your Equifax credit report. A
                &quot;verified&quot; response from Equifax does not end that right. We
                know exactly what to do next.
              </p>
            </div>
          </div>
        </section>

        <section className="equifax-fit section-divider" aria-labelledby="equifax-fit-heading">
          <div className="container equifax-fit-grid">
            <article className="equifax-fit-card">
              <h2 id="equifax-fit-heading">This Service Is Built for You If:</h2>
              <ul>
                <li>
                  A car dealership ran your Equifax report multiple times
                  without your authorization — or sent your application to
                  lenders you never approved
                </li>
                <li>
                  There is a hard inquiry on your Equifax report from a company
                  you don&apos;t recognize and have never done business with
                </li>
                <li>
                  You are a victim of identity theft and fraudulent hard pulls
                  are appearing on your Equifax report
                </li>
                <li>
                  You already disputed an unauthorized inquiry with Equifax
                  through myEquifax or by mail, received a verified or denied
                  response, and don&apos;t know what to do next
                </li>
                <li>
                  Your Equifax score is the specific barrier between you and a
                  mortgage pre-approval, auto loan, or credit application — and
                  unauthorized inquiries are the reason
                </li>
              </ul>
            </article>

            <article className="equifax-fit-card equifax-fit-card-muted">
              <h2>This Service Is NOT for You If:</h2>
              <ul>
                <li>
                  Your hard inquiries on Equifax were genuinely authorized — you
                  applied for credit with each company, the pulls were within a
                  permissible rate-shopping window, and there is no inaccuracy
                  to dispute. We will not take your money on a case where no
                  legitimate dispute exists, and we tell you that in the free
                  consultation.
                </li>
                <li>
                  You are looking to remove collections, late payments,
                  charge-offs, or other negative items from your Equifax
                  report. Hard inquiry removal is the only service we offer.
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section className="equifax-denial section-divider" aria-labelledby="equifax-denial-heading">
          <div className="container equifax-copy-shell">
            <div className="equifax-copy-head">
              <h2 id="equifax-denial-heading">
                Equifax Already Denied Your Dispute? Here Is Exactly What
                Happens Next.
              </h2>
            </div>

            <div className="equifax-copy-card">
              <p>
                This section exists because a significant portion of the people
                who find us have already been through Equifax&apos;s dispute process
                at least once. They submitted a dispute through myEquifax or by
                mail. Equifax came back within 30 days, sometimes less, and said
                the inquiry was verified. The letter was confusing. The
                explanation was vague. And the inquiry is still sitting on the
                report.
              </p>
              <p>
                If that describes your situation, here is what you need to
                know.
              </p>
              <p>
                A denial from Equifax is not legally final. The FCRA does not
                give Equifax unlimited authority to close a dispute with a
                &quot;verified&quot; response. It requires them to conduct a reasonable
                investigation, and the CFPB&apos;s January 17, 2025 enforcement
                action established that Equifax has a documented history of
                falling short of that standard. A denial that resulted from an
                inadequate investigation is a denial that can be challenged.
              </p>
              <p>The escalation options are real and legally grounded:</p>
              <p>
                When Equifax verifies an inquiry that we believe was
                unauthorized, we build a follow-up dispute that shifts the
                argument from the existence of the pull to the permissible
                purpose behind it. These are legally distinct questions, and
                Equifax&apos;s initial automated system is not designed to answer
                the second one, which is why escalating with the right legal
                framing produces a different result.
              </p>
              <p>
                When Equifax fails to respond within the required timeframe,
                ignores supporting documentation, or reinserts a previously
                deleted inquiry without proper notice, those actions are
                themselves FCRA violations, and they become leverage in the
                escalation process.
              </p>
              <p>
                When a CFPB complaint becomes the appropriate next step, we
                guide you through filing one. The CFPB&apos;s enforcement history
                with Equifax specifically makes this a meaningful escalation for
                consumers with legitimate disputes that have been improperly
                denied.
              </p>
              <p>
                The bottom line: If Equifax has already told you no, that is
                not the end of your options. It is often the beginning of the
                process that actually works.
              </p>
            </div>
          </div>
        </section>

        <section className="equifax-process section-divider" aria-labelledby="equifax-process-heading">
          <div className="container">
            <div className="equifax-copy-head about-centered-head">
              <h2 id="equifax-process-heading">
                How We Remove Hard Inquiries From Your Equifax Report — Step by
                Step
              </h2>
            </div>

            <div className="equifax-process-grid">
              {PROCESS_STEPS.map((step) => (
                <article key={step.title} className="equifax-process-card">
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>

            <Link href="/how-it-works" className="equifax-inline-link">
              See the complete process <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section className="equifax-proof section-divider" aria-labelledby="equifax-proof-heading">
          <div className="container equifax-copy-shell">
            <div className="equifax-copy-head">
              <h2 id="equifax-proof-heading">
                What Happens When Someone With Unauthorized Equifax Inquiries
                Works With Us
              </h2>
            </div>

            <div className="bureau-proof-layout">
              <ProofImageSlot
                badge="Equifax proof"
                score="+97"
                label="Kevin D. | Atlanta, GA"
                detail="27 inquiries removed across all three bureaus after verified responses were escalated."
              />

              <div className="equifax-proof-stack">
              <article className="equifax-proof-card">
                <h3>Case Study — Kevin D. | Atlanta, GA | Standard Plan:</h3>
                <p>
                  Kevin came to us after spending four months with a generalist
                  credit repair company that had not moved his Equifax inquiry
                  count at all. He had 27 unauthorized hard inquiries spread
                  across his Equifax, Experian, and TransUnion reports — the
                  majority of them from a series of dealership visits where his
                  application had been sent to lenders without his knowledge.
                  The prior company had filed generic disputes and received
                  &quot;verified&quot; responses from Equifax without escalating.
                </p>
                <p>
                  We reviewed his Equifax report during the free consultation,
                  identified the legal basis for escalating each verified
                  dispute, and built custom dispute letters submitted within 24
                  hours. Fifty-five days later, all 27 inquiries had been
                  permanently removed across all three bureaus — including every
                  one on Equifax. His score climbed 97 points.
                </p>
                <blockquote>
                  <p>
                    &quot;I spent four months paying a different company and my
                    Equifax inquiry count didn&apos;t move. Inquiry Removal removed
                    all 27 in 55 days. They knew exactly what to do when
                    Equifax said verified — which is the step the other company
                    never took. Worth every dollar.&quot;
                  </p>
                  <footer>
                    Kevin D. | Atlanta, GA | 27 Inquiries Removed Across All 3
                    Bureaus | +97 Points in 55 Days | Escalated Past Equifax
                    &quot;Verified&quot; Response
                  </footer>
                </blockquote>
                <small>
                  Individual results vary based on each client&apos;s specific
                  credit report, inquiry type, and bureau response.
                </small>
              </article>

              <article className="equifax-proof-card">
                <h3>Additional Testimonial — The Denied Dispute Scenario:</h3>
                <blockquote>
                  <p>
                    &quot;Equifax denied my dispute twice. I had a letter from the
                    dealership saying they sent my application to 14 lenders
                    without my permission and Equifax still said verified.
                    Inquiry Removal took one look at it and said Equifax&apos;s
                    response didn&apos;t hold up legally. Every one of those 14
                    inquiries was removed from my Equifax report within 52 days.
                    I didn&apos;t even know escalation was an option.&quot;
                  </p>
                  <footer>
                    Thomas R. | Charlotte, NC | 14 Equifax Inquiries Removed
                    After Two Prior Denials | +68 Points in 52 Days
                  </footer>
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

        <section className="equifax-faq section-divider" aria-labelledby="equifax-faq-heading">
          <div className="container equifax-copy-shell">
            <div className="equifax-copy-head">
              <h2 id="equifax-faq-heading">
                Equifax Hard Inquiry Questions We Answer Every Day
              </h2>
            </div>

            <div className="equifax-faq-list">
              {FAQS.map((item) => (
                <details key={item.q} className="equifax-faq-card" name="equifax-faq">
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

        <section className="equifax-closing section-divider" aria-labelledby="equifax-closing-heading">
          <div className="container">
            <div className="equifax-closing-card">
              <h2 id="equifax-closing-heading">
                Ready to Find Out Exactly Which Equifax Inquiries Can Be Removed
                — Including the Ones Equifax Already Said It Couldn&apos;t?
              </h2>
              <p>
                The free consultation is fifteen minutes. We review your
                Equifax report together, walk through every hard inquiry, and
                identify every unauthorized or inaccurate pull that qualifies
                for dispute or escalation. If you&apos;ve already been through
                Equifax&apos;s dispute process and received a denial, we assess that
                specifically and tell you what the next step looks like.
              </p>
              <p>
                If your inquiries don&apos;t qualify for removal, we tell you that
                in the consultation. If they do — or if your prior dispute was
                improperly handled — disputes and escalations are initiated
                within 24 hours of your signup.
              </p>

              <div className="equifax-closing-actions">
                <Link href="/get-started" className="btn btn-primary btn-large">
                  Get My Free Equifax Analysis
                </Link>
                <a
                  href="/equifax-dispute-letter-template.txt"
                  download
                  className="btn btn-secondary btn-large"
                >
                  Download the Equifax Dispute Letter Template →
                </a>
              </div>

              <p className="equifax-fear-killer">
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
