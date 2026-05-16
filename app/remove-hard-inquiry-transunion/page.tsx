import type { Metadata } from "next";
import Link from "next/link";
import { BureauHeroVisual } from "@/components/BureauHeroVisual";
import { PageHero } from "@/components/PageHero";
import { ProofImageSlot } from "@/components/ProofImageSlot";
import { PremiumIcon } from "@/components/PremiumIcons";
import { transunionFaqSchema, transunionServiceSchema } from "@/lib/schema";

import "@/src/styles/pages/transunion.css";
const TRUST_STATS = [
  { value: "11 Years", label: "Specializing in Hard Inquiry Removal Only" },
  { value: "100,437", label: "Hard Inquiries Permanently Deleted" },
  { value: "Review First", label: "We Evaluate Fit Before Taking a Case" },
  { value: "4.9 ★", label: "Average Rating — 312 Google Reviews" },
];

const PRESS = ["Forbes", "Bloomberg", "CNBC", "Business Insider", "MarketWatch"];

const PAIN_CARDS = [
  {
    title: "You found an inquiry on Credit Karma you don't recognize and the dispute didn't work.",
    body:
      "Credit Karma's Direct Dispute tool sends your dispute to TransUnion and returns a response quickly — often within 72 hours. When the response is \"verified,\" the app marks it resolved and moves on. What it doesn't tell you is that the dispute can be escalated, that \"verified\" is not legally final, and that a professionally constructed dispute using the FCRA's permissible purpose provisions is a fundamentally different legal argument than what Credit Karma submitted on your behalf.",
  },
  {
    title: "A dealership ran your TransUnion report multiple times without your permission.",
    body:
      "You went to look at cars. You asked questions. Maybe you filled out one application. The dealership sent it to multiple lenders — each of whom pulled your TransUnion report independently. You came home to a cluster of hard pulls from lenders you've never spoken to, on a report you never authorized them to access. Each one lowered your TransUnion score. Taken together, they may have dropped it enough to affect every financial decision being made against your file right now.",
  },
  {
    title: "TransUnion has a hard inquiry labeled \"regular inquiry\" and you're not sure what it is.",
    body:
      "TransUnion uses different terminology than the other bureaus. What Experian and Equifax call a \"hard inquiry\" may appear on your TransUnion report as a \"regular inquiry.\" If you're seeing a regular inquiry from a company you don't recognize — or from a lender you never explicitly authorized — it carries the same legal challenge rights as any hard inquiry. The label is different. The dispute process and the legal remedy are identical.",
  },
  {
    title: "Your TransUnion score is the specific number your lender keeps coming back to.",
    body:
      "Mortgage lenders pull all three bureaus. Some use the middle score. Some use the lowest. If your TransUnion score is the one dragging down your profile — because of a cluster of unauthorized hard pulls from a dealership visit, a rate shopping period, or an identity theft incident — the path to your mortgage approval runs directly through removing those inquiries from your TransUnion report.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Step 1 — Free TransUnion Report Review:",
    body:
      "We pull up your TransUnion credit report together — not just your Credit Karma summary — and go through every inquiry line by line, including any labeled as \"regular inquiries\" that are functionally hard inquiries under TransUnion's terminology. We identify which ones are unauthorized, which have no permissible purpose, and which have the strongest legal grounds for removal. If you have already been through Credit Karma's Direct Dispute or TransUnion's dispute center and received a denial, we assess that response specifically. You know everything before you spend anything.",
  },
  {
    title: "Step 2 — Custom TransUnion Dispute Letters:",
    body:
      "Every dispute letter is built specifically for your inquiries, your TransUnion report, and the FCRA provisions that apply to your situation. Each letter cites the permissible purpose requirements under 15 U.S.C. § 1681b, documents the absence of authorization, and is constructed to require a genuine reinvestigation rather than an automated verification. Disputes are submitted directly to TransUnion within 24 hours of your signup — by certified mail to TransUnion Consumer Solutions, P.O. Box 2000, Chester, PA 19016 where the paper record strengthens the position.",
  },
  {
    title: "Step 3 — Response Monitoring and Escalation:",
    body:
      "TransUnion has 30 days to investigate and respond under the FCRA. We monitor every response. When inquiries are removed, we document the result. When TransUnion returns a \"verified\" or \"denied\" response on an inquiry we believe was unauthorized, we assess whether the response reflects a genuine permissible purpose investigation and escalate where it doesn't. When CFPB escalation becomes the appropriate next step, we guide that process. We push through every response that the law gives us grounds to challenge.",
  },
  {
    title: "Step 4 — Inquiries Removed. TransUnion Score Recovers. You Move Forward.",
    body:
      "As unauthorized inquiries are deleted from your TransUnion report, your credit score updates to reflect the change. For Credit Karma users, the score update will appear in the app as your TransUnion score improves. Most clients see meaningful recovery within 30 to 90 days. The mortgage approval, the auto loan at a fair rate, the credit application that finally clears — all of it gets measurably closer with every inquiry that comes off your TransUnion report.",
  },
];

const FAQS = [
  {
    q: "Can you remove hard inquiries from a TransUnion credit report?",
    a: "Unauthorized, inaccurate, and impermissible hard inquiries can be disputed and removed from your TransUnion credit report under the Fair Credit Reporting Act. TransUnion is correct that legitimately authorized hard inquiries are generally not removable before the two-year window. The distinction is permissible purpose under Section 604 of the FCRA — 15 U.S.C. § 1681b. If a company pulled your TransUnion report without a legally recognized reason, if a dealership sent your application to lenders you never approved, or if inquiries appeared from an identity theft incident — those are disputable and removal is the outcome when the dispute correctly challenges the authorization of the pull rather than just its existence.",
  },
  {
    q: "What is a \"regular inquiry\" on a TransUnion credit report?",
    a: "A \"regular inquiry\" on your TransUnion credit report is the same as a hard inquiry on your Experian or Equifax report — it is a credit pull initiated by a lender, landlord, or creditor that you applied to or that accessed your report for a specific credit decision. TransUnion uses different terminology than the other two major bureaus, which causes significant confusion for consumers trying to identify and dispute hard inquiries. If you see a regular inquiry from a company you don't recognize on your TransUnion report, it carries the same score impact and the same legal dispute rights as a hard inquiry on any other bureau.",
  },
  {
    q: "Can I dispute a TransUnion hard inquiry through Credit Karma?",
    a: "Yes — Credit Karma's Direct Dispute tool sends real disputes to TransUnion and is a legitimate starting point. The limitation is in how those disputes are constructed. Credit Karma submits a notification that you are flagging the inquiry as potentially inaccurate. TransUnion processes it and responds — typically within 72 hours — and returns a \"verified\" result in most cases. The Credit Karma dispute does not cite the FCRA's permissible purpose provisions, does not document the absence of authorization specifically, and does not frame the dispute as a legal challenge to the company's right to access your report. Those distinctions are what produce removal. If Credit Karma's Direct Dispute returned a \"verified\" response, the dispute can be escalated with a professionally constructed legal argument that TransUnion's automated system cannot resolve with the same boilerplate response.",
  },
  {
    q: "How do I dispute a hard inquiry with TransUnion?",
    a: "You can dispute a hard inquiry with TransUnion through TransUnion's online dispute center, by phone, or by certified mail to TransUnion Consumer Solutions, P.O. Box 2000, Chester, PA 19016. The outcome depends almost entirely on how the dispute is framed. A standard \"I don't recognize this\" dispute — whether submitted online, through Credit Karma, or by phone — typically produces a \"verified\" response. A dispute that specifically challenges the permissible purpose of the pull under 15 U.S.C. § 1681b — citing the absence of authorization and requesting documentation of the legal basis for the credit access — triggers a different reinvestigation. Certified mail creates a verifiable delivery record that matters if TransUnion fails to respond within the required 30-day window or if CFPB escalation becomes necessary.",
  },
  {
    q: "What is the TransUnion dispute mailing address for hard inquiry removal?",
    a: "Hard inquiry disputes can be submitted to TransUnion by certified mail at: TransUnion Consumer Solutions, P.O. Box 2000, Chester, PA 19016. Disputes submitted by certified mail should include a clear explanation of why the inquiry is being disputed, the specific FCRA provision governing unauthorized credit pulls, any supporting documentation, and a copy of your TransUnion credit report with the inquiry identified. The certified mail delivery record is valuable documentation if TransUnion fails to respond within the required 30-day window or if the dispute needs to be escalated.",
  },
  {
    q: "What do I do if TransUnion won't remove an unauthorized inquiry?",
    a: "If TransUnion returns a \"verified\" or \"denied\" response on an inquiry you believe was unauthorized, your legal options do not end there. The FCRA requires TransUnion to conduct a reasonable investigation of every dispute — not just confirm that the pull exists in their system. When a verified response does not reflect a genuine investigation of permissible purpose, the appropriate next step is a follow-up dispute specifically challenging the legal basis for the credit access. If TransUnion continues to deny a legitimate dispute, filing a CFPB complaint creates a formal federal record that requires TransUnion to respond to a regulator — which carries enforcement weight that a consumer dispute alone does not.",
  },
  {
    q: "Can I dispute a TransUnion hard inquiry I didn't authorize?",
    a: "Yes — the Fair Credit Reporting Act specifically supports disputes of unauthorized hard inquiries. Under 15 U.S.C. § 1681b — Section 604 of the FCRA — any company that pulls your TransUnion credit report must have a legally recognized permissible purpose for doing so. A dispute that documents the absence of that permissible purpose, cites the applicable statutory provision, and requests that TransUnion investigate the authorization of the pull — not just its existence — is the correct legal framing for an unauthorized inquiry dispute. This is fundamentally different from a standard dispute and produces fundamentally different results.",
  },
  {
    q: "How long do hard inquiries stay on a TransUnion credit report?",
    a: "Hard inquiries stay on your TransUnion credit report for two years and may appear as \"regular inquiries\" under TransUnion's terminology. Most hard inquiries stop significantly affecting your score after approximately one year — but they remain visible to lenders reviewing your TransUnion report for the full two-year period. Unauthorized hard inquiries do not have to remain for two years. They can be disputed and removed before that window when the dispute establishes that the pull lacked authorization or permissible purpose under the FCRA.",
  },
  {
    q: "How many points does removing a hard inquiry from TransUnion add to my score?",
    a: "Removing a hard inquiry from your TransUnion report typically adds 5 to 10 points per inquiry removed, with the actual improvement depending on your overall credit profile and the number of inquiries removed simultaneously. For Credit Karma users, the score improvement will appear in the app as your TransUnion score updates following the removal. Clients who remove large clusters of unauthorized inquiries — particularly those whose TransUnion scores were disproportionately suppressed by a dealership visit or identity theft incident — routinely see improvements of 50 to 100 or more points.",
  },
  {
    q: "Does disputing a hard inquiry with TransUnion hurt my credit score?",
    a: "No — filing a dispute with TransUnion does not hurt your credit score. Disputes do not appear on your credit report and are not factored into credit scoring calculations. The only score impact comes from the outcome: removal improves your score, an unsuccessful dispute leaves it unchanged. There is no downside to disputing an unauthorized inquiry beyond the time and effort the process requires.",
  },
  {
    q: "What is TransUnion's Fraud Victim Assistance Department?",
    a: "TransUnion's Fraud Victim Assistance Department is a specialized team within TransUnion that handles credit report issues related to identity theft — including fraudulent hard inquiries placed on your TransUnion report by someone using your information without authorization. Identity theft victims can contact this department directly and submit an FTC identity theft report as supporting documentation for their dispute. In our experience, fraudulent inquiry cases where identity theft documentation exists are among the strongest dispute situations available — the legal argument is airtight and the removal outcome is the most reliable.",
  },
  {
    q: "What happens if TransUnion reinserts an inquiry it already deleted?",
    a: "If TransUnion reinserts a hard inquiry that was previously deleted, that action is governed by specific FCRA requirements. TransUnion is required to notify you within five business days before reinserting a deleted item and must provide the name of the furnisher who requested the reinsertion. Failure to follow this process is itself an FCRA violation that strengthens your dispute position. If a removed inquiry reappears on your TransUnion report, we address it immediately and use the reinsertion as additional leverage in the follow-up dispute.",
  },
  {
    q: "Can I file a CFPB complaint against TransUnion for not removing an unauthorized inquiry?",
    a: "Yes — filing a CFPB complaint against TransUnion is a legitimate and effective escalation when a valid dispute has been improperly denied. The CFPB oversees TransUnion's compliance with the FCRA and has enforcement authority over dispute-handling practices. A CFPB complaint creates a formal federal record, requires TransUnion to respond to the regulator directly, and carries enforcement weight that a standard consumer dispute does not. We guide clients through this process when escalation is warranted and the dispute history supports it.",
  },
];

export const metadata: Metadata = {
  title: {
    absolute: "Remove Hard Inquiries From TransUnion | Inquiry Removal",
  },
  description:
    "Dispute unauthorized hard inquiries on your TransUnion credit report — including inquiries you found on Credit Karma. Free consultation. Flat fee. 100% guarantee.",
  alternates: {
    canonical: "/remove-hard-inquiry-transunion",
  },
  openGraph: {
    title: "Remove Hard Inquiries From TransUnion | Inquiry Removal",
    description:
      "Dispute unauthorized hard inquiries on your TransUnion credit report — including inquiries you found on Credit Karma. Free consultation. Flat fee. 100% guarantee.",
    url: "https://www.inquiryremoval.com/remove-hard-inquiry-transunion",
  },
  twitter: {
    title: "Remove Hard Inquiries From TransUnion | Inquiry Removal",
    description:
      "Dispute unauthorized hard inquiries on your TransUnion credit report — including inquiries you found on Credit Karma. Free consultation. Flat fee. 100% guarantee.",
  },
};

export default function RemoveHardInquiryTransUnionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(transunionServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(transunionFaqSchema) }}
      />
      <main id="main" className="transunion-page">
        <PageHero
          id="transunion-hero-heading"
          eyebrow="TransUnion inquiry removal"
          title={
            <>
              Remove Unauthorized Hard Inquiries From Your <span className="ir-gradient-text">TransUnion</span> Credit Report — Including the Ones You Found on Credit Karma.
            </>
          }
          subtitle={
            <p>
              If you spotted a hard inquiry on Credit Karma that you didn&apos;t authorize, couldn&apos;t dispute successfully through Credit Karma&apos;s Direct Dispute tool, or simply don&apos;t recognize — that inquiry is on your TransUnion report and it has a legal path to removal.
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
                Get My Free TransUnion Analysis
              </Link>
              <Link href="/how-it-works" className="btn btn-secondary btn-large">
                See How It Works →
              </Link>
            </>
          }
          copyAfter={
            <p className="transunion-fear-killer">
              Free consultation. No credit card required. One flat fee starting at $199 — no monthly charges, ever.
            </p>
          }
        >
          <BureauHeroVisual bureau="transunion" />
        </PageHero>

        <section className="transunion-trust section-divider" aria-labelledby="transunion-trust-heading">
          <div className="container">
            <h2 id="transunion-trust-heading" className="sr-only">
              TransUnion trust indicators
            </h2>
            <div className="transunion-stats">
              {TRUST_STATS.map((stat) => (
                <article key={stat.value} className="transunion-stat">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
            <div className="transunion-press">
              {PRESS.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="transunion-problem section-divider" aria-labelledby="transunion-problem-heading">
          <div className="container transunion-copy-shell">
            <div className="transunion-copy-head">
              <h2 id="transunion-problem-heading">
                Hard Inquiries on Your TransUnion Report That You Didn&apos;t Authorize Don&apos;t Have to Stay There — Even if You Already Tried to Dispute Them.
              </h2>
            </div>

            <div className="transunion-copy-card">
              <p>
                TransUnion is the bureau most commonly seen through Credit Karma — meaning more consumers discover unauthorized hard inquiries there than through any direct report pull. They see an unfamiliar inquiry in the Credit Karma app, tap &quot;Dispute,&quot; follow the Credit Karma Direct Dispute process, and receive a response within days telling them the inquiry was verified. Then they&apos;re not sure what to do next.
              </p>
              <p>
                Here is what that &quot;verified&quot; response actually means. TransUnion verified that the credit pull happened and that a company with that name submitted an inquiry to their system. They did not verify that you authorized the pull. They did not verify that the company had a legally required permissible purpose under the Fair Credit Reporting Act to access your TransUnion report. Those are entirely different questions — and answering the second one correctly is what produces a removal.
              </p>
              <p>
                There is also a terminology issue unique to TransUnion. On your TransUnion credit report, hard inquiries are sometimes labeled as &quot;regular inquiries&quot; rather than &quot;hard inquiries.&quot; If you&apos;ve been searching for hard inquiries and not finding them — or not recognizing what you&apos;re looking at — this is likely why. Regular inquiries on a TransUnion report are the same as hard inquiries on an Experian or Equifax report. They carry the same score impact. And they have the same legal path to removal when obtained without authorization.
              </p>

              <div className="transunion-pain-grid">
                {PAIN_CARDS.map((card) => (
                  <article key={card.title} className="transunion-pain-card">
                    <h3>{card.title}</h3>
                    <p>{card.body}</p>
                  </article>
                ))}
              </div>

              <p className="transunion-transition">
                Here is what the Fair Credit Reporting Act gives you the legal right to do — and why TransUnion&apos;s response to your first dispute is not the end of the road.
              </p>
            </div>
          </div>
        </section>

        <section className="transunion-service section-divider" aria-labelledby="transunion-service-heading">
          <div className="container transunion-copy-shell">
            <div className="transunion-copy-head">
              <h2 id="transunion-service-heading">
                What TransUnion Hard Inquiry Removal Actually Involves — and Why the Credit Karma Dispute Is Usually Just the First Step
              </h2>
            </div>

            <div className="transunion-copy-card">
              <p>
                Removing unauthorized hard inquiries from your TransUnion credit
                report is a legal process governed by the Fair Credit Reporting
                Act — specifically Section 604, also cited as 15 U.S.C. § 1681b, which establishes the permissible purpose requirement for any credit pull. Every company that accesses your TransUnion report as a hard inquiry must have a legally recognized reason for doing so. When they don&apos;t, the FCRA gives you the right to dispute it and require TransUnion to investigate.
              </p>
              <p>Here is what the correct process looks like:</p>
              <p>
                First, we identify exactly which inquiries on your TransUnion
                report are unauthorized, inaccurate, or obtained without permissible purpose — including any that appear as &quot;regular inquiries&quot; under TransUnion&apos;s terminology. We do this in the free consultation, before you spend anything, and we tell you honestly if your situation doesn&apos;t qualify for dispute.
              </p>
              <p>
                Second, we build a custom dispute letter for each removable
                inquiry. Not a Credit Karma Direct Dispute submission. Not a template. A letter that cites the specific FCRA provision governing unauthorized credit access, documents the absence of permissible purpose, and is structured to require a genuine TransUnion reinvestigation rather than an automated verification response. Where certified mail to TransUnion&apos;s dispute address in Chester, Pennsylvania creates a stronger legal record, we build the dispute for that method.
              </p>
              <p>
                Third, we monitor every TransUnion response. When inquiries are
                removed, we document the result. When TransUnion returns a &quot;verified&quot; response on an inquiry we believe was unauthorized, we escalate — building a follow-up dispute focused specifically on permissible purpose rather than the existence of the pull. When escalation to the CFPB becomes appropriate, we guide that process. We do not accept a denial that the law does not require us to accept.
              </p>
            </div>
          </div>
        </section>

        <section className="transunion-fit section-divider" aria-labelledby="transunion-fit-heading">
          <div className="container transunion-fit-grid">
            <article className="transunion-fit-card">
              <h2 id="transunion-fit-heading">This Service Is Built for You If:</h2>
              <ul>
                <li>
                  You found an unauthorized or unrecognized hard inquiry — or
                  &quot;regular inquiry&quot; — on your TransUnion report through Credit
                  Karma, TransUnion.com, or a direct credit report pull
                </li>
                <li>
                  You tried disputing through Credit Karma&apos;s Direct Dispute
                  tool and received a &quot;verified&quot; response that didn&apos;t result
                  in removal
                </li>
                <li>
                  A car dealership ran your TransUnion report multiple times
                  without your authorization
                </li>
                <li>
                  There is a hard inquiry on your TransUnion report from a
                  company you don&apos;t recognize and have never done business
                  with
                </li>
                <li>
                  You are a victim of identity theft and fraudulent hard pulls
                  are appearing on your TransUnion report
                </li>
                <li>
                  Your TransUnion score is the specific barrier between you and
                  a mortgage approval, auto loan, or credit application — and
                  unauthorized inquiries are the reason
                </li>
              </ul>
            </article>

            <article className="transunion-fit-card transunion-fit-card-muted">
              <h2>This Service Is NOT for You If:</h2>
              <ul>
                <li>
                  Your hard inquiries on TransUnion were genuinely authorized —
                  you applied for credit with each company, the pulls were
                  within a permissible rate-shopping window, and there is no
                  inaccuracy to dispute. We tell you that clearly in the free
                  consultation before you spend anything.
                </li>
                <li>
                  You are looking to remove collections, late payments,
                  charge-offs, or other negative items from your TransUnion
                  report. Hard inquiry removal is the only service we offer.
                </li>
              </ul>
            </article>
          </div>
        </section>

        <section className="transunion-denial section-divider" aria-labelledby="transunion-denial-heading">
          <div className="container transunion-copy-shell">
            <div className="transunion-copy-head">
              <h2 id="transunion-denial-heading">
                Found the Inquiry on Credit Karma? Here Is Exactly What Happened
                — and What to Do Next.
              </h2>
            </div>

            <div className="transunion-copy-card">
              <p>
                Credit Karma is the most widely used free credit monitoring app
                in the United States, and it pulls your score and report data
                directly from TransUnion. This means that for millions of
                consumers, Credit Karma is where they first discover an
                unauthorized hard inquiry — and where they first attempt to
                dispute it.
              </p>
              <p>
                Credit Karma&apos;s Direct Dispute feature is a genuine tool that
                sends real disputes to TransUnion. Using it is not wrong. The
                problem is in how the dispute is constructed and what happens
                after TransUnion responds.
              </p>
              <p>What Credit Karma&apos;s Direct Dispute does:</p>
              <p>
                When you dispute an inquiry through Credit Karma, the platform
                sends a dispute notification to TransUnion flagging the inquiry
                as potentially inaccurate. TransUnion investigates and responds
                — typically within 72 hours for online disputes, up to 30 days
                by law. If TransUnion verifies the inquiry, Credit Karma marks
                the dispute as resolved and the inquiry remains on your report.
              </p>
              <p>What Credit Karma&apos;s Direct Dispute does not do:</p>
              <p>
                It does not construct a legal argument around permissible
                purpose. It does not cite 15 U.S.C. § 1681b or the specific
                FCRA provision that governs unauthorized credit pulls. It does
                not submit the type of dispute that requires TransUnion to
                investigate the authorization of the pull — rather than just
                the existence of it. And it does not escalate when TransUnion
                returns an inadequate response.
              </p>
              <p>What comes after a Credit Karma &quot;verified&quot; response:</p>
              <p>
                A verified response from TransUnion through Credit Karma means
                TransUnion confirmed the pull happened. It does not mean the
                pull was legally authorized. The next step is a professionally
                constructed dispute that shifts the argument to permissible
                purpose specifically — submitted directly to TransUnion with
                certified mail documentation, citing the exact FCRA provision
                that applies to your situation.
              </p>
              <p>
                If you have already been through Credit Karma&apos;s Direct Dispute
                process and received a verified response, that is not the end
                of your options. It is the beginning of the process that
                actually produces removal.
              </p>
            </div>
          </div>
        </section>

        <section className="transunion-process section-divider" aria-labelledby="transunion-process-heading">
          <div className="container">
            <div className="transunion-copy-head about-centered-head">
              <h2 id="transunion-process-heading">
                How We Remove Hard Inquiries From Your TransUnion Report — Step by
                Step
              </h2>
            </div>

            <div className="transunion-process-grid">
              {PROCESS_STEPS.map((step) => (
                <article key={step.title} className="transunion-process-card">
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              ))}
            </div>

            <Link href="/how-it-works" className="transunion-inline-link">
              See the complete process <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section className="transunion-proof section-divider" aria-labelledby="transunion-proof-heading">
          <div className="container transunion-copy-shell">
            <div className="transunion-copy-head">
              <h2 id="transunion-proof-heading">
                What Happens When Someone With Unauthorized TransUnion Inquiries
                Works With Us
              </h2>
            </div>

            <div className="bureau-proof-layout">
              <ProofImageSlot
                badge="TransUnion proof"
                score="+79"
                label="Andre W. | Memphis, TN"
                detail="18 TransUnion inquiries removed after two failed Credit Karma disputes."
              />

              <div className="transunion-proof-stack">
              <article className="transunion-proof-card">
                <h3>Case Study — Andre W. | Memphis, TN | Standard Plan:</h3>
                <p>
                  Andre found 18 hard inquiries on his TransUnion report
                  through Credit Karma — several from a period he didn&apos;t
                  recognize, some from lenders he had never heard of. He used
                  Credit Karma&apos;s Direct Dispute to challenge them. TransUnion
                  returned verified responses on the majority within 72 hours.
                  He tried again. Same result. He came to us with 18 inquiries
                  still on his TransUnion report, a solid skepticism about
                  whether removal was actually possible, and a mortgage
                  application that kept coming back short.
                </p>
                <p>
                  During the free consultation we reviewed his full TransUnion
                  report — not just the Credit Karma summary — identified the
                  legal basis for escalating each verified dispute, and
                  explained exactly why Credit Karma&apos;s dispute framing hadn&apos;t
                  produced a different result. Custom disputes citing
                  permissible purpose under 15 U.S.C. § 1681b were submitted
                  directly to TransUnion within 24 hours. Forty-four days later,
                  all 18 unauthorized inquiries had been permanently removed
                  from his TransUnion report. His score climbed 79 points.
                </p>
                <blockquote>
                  <p>
                    &quot;I tried twice through Credit Karma and both times
                    TransUnion said verified. I thought that was the end of it.
                    Inquiry Removal explained why the Credit Karma dispute
                    isn&apos;t the same as a legal dispute built around permissible
                    purpose. Eighteen inquiries gone in 44 days. I wish I had
                    known the difference six months earlier.&quot;
                  </p>
                  <footer>
                    Andre W. | Memphis, TN | 18 TransUnion Inquiries Removed
                    After Two Failed Credit Karma Disputes | +79 Points in 44
                    Days
                  </footer>
                </blockquote>
                <small>
                  Individual results vary based on each client&apos;s specific
                  credit report, inquiry type, and bureau response.
                </small>
              </article>

              <article className="transunion-proof-card">
                <h3>Additional Testimonial — The Identity Theft Scenario:</h3>
                <blockquote>
                  <p>
                    &quot;I checked Credit Karma and saw 11 hard inquiries from a
                    month I was dealing with identity theft. TransUnion&apos;s
                    fraud department told me to file a dispute. I did. Most
                    came back verified. Inquiry Removal took over from there —
                    built legal disputes around each fraudulent pull and had
                    all 11 removed from my TransUnion report in 39 days. My
                    Credit Karma score jumped 83 points the week the last one
                    was deleted.&quot;
                  </p>
                  <footer>
                    Rachel M. | Orlando, FL | 11 Fraudulent TransUnion
                    Inquiries Removed | +83 Points in 39 Days | Identity Theft
                    Case
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

        <section className="transunion-faq section-divider" aria-labelledby="transunion-faq-heading">
          <div className="container transunion-copy-shell">
            <div className="transunion-copy-head">
              <h2 id="transunion-faq-heading">
                TransUnion Hard Inquiry Questions We Answer Every Day
              </h2>
            </div>

            <div className="transunion-faq-list">
              {FAQS.map((item) => (
                <details key={item.q} className="transunion-faq-card" name="transunion-faq">
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

        <section className="transunion-closing section-divider" aria-labelledby="transunion-closing-heading">
          <div className="container">
            <div className="transunion-closing-card">
              <h2 id="transunion-closing-heading">
                Ready to Find Out Exactly Which TransUnion Inquiries Can Be Removed
                — Including the Ones Credit Karma Said Were Verified?
              </h2>
              <p>
                The free consultation is fifteen minutes. We review your
                full TransUnion report — not just your Credit Karma summary —
                walk through every hard inquiry and regular inquiry, and
                identify every unauthorized or inaccurate pull that qualifies
                for dispute or escalation. If you&apos;ve already been through
                Credit Karma&apos;s Direct Dispute or TransUnion&apos;s dispute center
                and received a denial, we assess that response specifically and
                tell you what the next step looks like for your situation.
              </p>
              <p>
                If your inquiries don&apos;t qualify for removal, we tell you that
                in the consultation. If they do — or if your prior dispute was
                improperly handled — disputes are submitted to TransUnion
                within 24 hours of your signup.
              </p>

              <div className="transunion-closing-actions">
                <Link href="/get-started" className="btn btn-primary btn-large">
                  Get My Free TransUnion Analysis
                </Link>
                <a
                  href="/transunion-dispute-letter-template.txt"
                  download
                  className="btn btn-secondary btn-large"
                >
                  Download the TransUnion Dispute Letter Template →
                </a>
              </div>

              <p className="transunion-fear-killer">
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
