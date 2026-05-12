import type { Metadata } from "next";
import Link from "next/link";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Footer } from "@/components/Footer";
import { FounderPhotoCard } from "@/components/FounderPhotoCard";
import { Navigation } from "@/components/Navigation";
import { PageHero } from "@/components/PageHero";
import { PremiumIcon } from "@/components/PremiumIcons";
import { aboutPagePersonSchema } from "@/lib/schema";

const AUDIENCES = [
  {
    title: "The Car Shopper Who Got Ambushed",
    body:
      "You did everything right. You went to see a car, asked questions, maybe filled out one application — and the dealership sent it to twenty lenders without telling you. You woke up to a credit report that looked like you'd applied for a mortgage, four car loans, and three credit cards in a single afternoon. Your score dropped hard. You weren't irresponsible. You were targeted by a practice so common in the auto industry that most consumers don't even realize it's happening until the damage is already done. We dispute every one of those unauthorized pulls using the exact provisions of federal law that dealerships hope you never learn about.",
    icon: "autoInquiry" as const,
  },
  {
    title: "The Identity Theft Victim Who Needs This Cleaned Up Now",
    body:
      "You found inquiries from companies you've never heard of, in cities you've never visited, for products you never applied for. Someone used your information — and they didn't just open accounts. They left hard inquiry footprints across your Experian, Equifax, and TransUnion reports that are actively depressing your score right now. The emotional weight of that is real. The urgency is real. And the legal path to removing those inquiries — every one of them — is real too. We've handled cases exactly like yours. We know which laws apply and how to move as fast as the bureaus allow.",
    icon: "identityShield" as const,
  },
  {
    title: "The Home Buyer Who Is One Score Point Away",
    body:
      "You're not in financial trouble. Your payment history is solid. Your debt is manageable. But your lender keeps coming back with the same message: too many recent hard inquiries. Maybe you rate-shopped for a mortgage. Maybe you applied for credit in the months before you started this process. Whatever created the inquiry cluster, it's standing between you and the life you've been planning. Ninety percent of the clients who come to us share this goal — homeownership. We know what's at stake. We work fast because your closing date doesn't move.",
    icon: "homeGoal" as const,
  },
];

const DIFFERENTIATORS = [
  {
    title: "We Do One Thing, Which Means We Do It Better Than Anyone",
    body:
      "Generalist credit repair companies treat inquiry removal as one item on a long checklist. It's handled with the same strategy they'd use on a collection or a charge-off — a generic dispute, a template letter, a 30-day wait. That approach produces mediocre results on inquiries because inquiries require a completely different legal argument. We have spent eleven years doing only this. Every process, every letter, every escalation strategy in our playbook exists because of inquiry-specific case history. That depth of specialization is not something a generalist company can replicate.",
  },
  {
    title: "Custom Disputes Built for Your Report, Not a Template Factory",
    body:
      "Every dispute letter we send is built from scratch for your specific inquiries, your specific bureaus, and the specific federal laws that apply to your situation. The FCRA provision that applies to a dealership's shotgun credit pull is not the same provision that applies to a debt collector pulling your report without permissible purpose. Metro 2 compliance arguments apply differently depending on how the furnisher reported the inquiry. We know the difference. Bureaus know the difference too — and they dismiss template letters fast. Ours don't look like anyone else's because they aren't.",
  },
  {
    title: "A Flat Fee That Ends When Your Inquiries Are Gone",
    body:
      "You pay once. We work until it's done. There is no month two. There is no \"here's what's still left on your report and here's the new invoice.\" The flat fee structure isn't just a pricing choice — it's a philosophical one. It means our incentive is aligned entirely with your outcome. The faster we resolve your case, the better we've done our job. That alignment is what drives us to move as fast as the law allows.",
  },
  {
    title: "You Can Actually Reach Us",
    body:
      "Robert built this company with a policy that sounds almost radical by industry standards: when a client calls, someone answers. When a client has a question, someone responds. You are not a ticket in a queue. You work with one specialist who knows your file, knows your situation, and can give you a real update when you ask for one. After years of watching the biggest credit repair companies lose clients to voicemail and automated responses, this was a non-negotiable part of what Inquiry Removal would be.",
  },
];

const VALUES = [
  {
    title: "Honesty From the First Conversation",
    body:
      "We tell you exactly what can be removed and what realistically cannot before you pay anything. If your inquiries don't qualify for removal, we say so in the free consultation instead of taking your money and figuring it out later.",
  },
  {
    title: "Speed as a Form of Respect",
    body:
      "You came to us because you have somewhere to be — a closing date, a car you need, a financial goal with a timeline. Moving slowly is not an option we allow ourselves. We work as fast as the law permits because your goals don't pause while we catch up.",
  },
  {
    title: "Transparency Over Marketing",
    body:
      "We don't make promises we can't keep. We don't manufacture urgency to pressure a decision. We don't hide our pricing or bury our guarantee in fine print. Every number, every term, and every expectation we set is something we intend to stand behind exactly as stated.",
  },
  {
    title: "Your Outcome Over Our Revenue",
    body:
      "A subscription model would make this company more money. We chose a flat fee because it makes our clients more money — in lower interest rates, better approvals, and faster access to the financial life they've earned. That trade-off was deliberate and it isn't changing.",
  },
];

const PRESS_LOGOS = ["Forbes", "Bloomberg", "CNBC", "Business Insider", "MarketWatch"];

export const metadata: Metadata = {
  title: {
    absolute: "About Inquiry Removal | Robert Garcia, Founder",
  },
  description:
    "Robert Garcia built Inquiry Removal after unauthorized dealership inquiries wrecked his perfect credit. See why that story changes how we fight for you.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Inquiry Removal | Robert Garcia, Founder",
    description:
      "Robert Garcia built Inquiry Removal after unauthorized dealership inquiries wrecked his perfect credit. See why that story changes how we fight for you.",
    url: "https://www.inquiryremoval.com/about",
  },
  twitter: {
    title: "About Inquiry Removal | Robert Garcia, Founder",
    description:
      "Robert Garcia built Inquiry Removal after unauthorized dealership inquiries wrecked his perfect credit. See why that story changes how we fight for you.",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPagePersonSchema) }}
      />
      <AnnouncementBar />
      <Navigation activePath="/about" />
      <main id="main" className="about-page">
        <PageHero
          id="about-hero-heading"
          panelClassName="ir-page-hero-panel-founder"
          eyebrow="Founder story"
          title={
            <>
              Every Person with Unauthorized Hard Inquiries Deserves Someone Who Knows How to <span className="ir-gradient-text">Remove Them</span>.
            </>
          }
          subtitle={
            <p>
              Not a company that charges you every month while your score stands still. Not a call center that transfers you three times before anyone picks up. Someone who has lived this problem, spent a career learning the law behind it, and built an entire company around solving it — and nothing else.
            </p>
          }
        >
          <FounderPhotoCard />
        </PageHero>

        <section className="about-story section-divider" aria-labelledby="about-story-heading">
          <div className="container about-copy-shell">
            <div className="about-copy-head">
              <h2 id="about-story-heading">
                Why This Company Exists — and Why It Had to Be This One
              </h2>
            </div>

            <div className="about-copy-card">
              <p>
                Robert Garcia walked into a car dealership with perfect credit.
                He made one thing clear before they ran anything: do not shop
                my application around. They did it anyway. Within days, his
                credit report was flooded with hard inquiries from lenders he
                had never spoken to, never contacted, and never agreed to give
                access to his financial history. His score — a score he had
                spent years building carefully — dropped over 100 points. Not
                from missed payments. Not from debt. From a single afternoon at
                a dealership that ignored a direct request.
              </p>
              <p>
                What made it worse was knowing exactly what was happening and
                still feeling completely powerless to fix it. Robert had spent
                years working as a senior credit analyst and in the disputes
                department of a major financial institution. He understood the
                Fair Credit Reporting Act. He understood permissible purpose. He
                understood that what the dealership had done — what they do to
                thousands of consumers every single day — was legally
                challengeable. He also understood that almost nobody knew that.
                And almost nobody was doing anything about it in a serious,
                specialized, legally precise way.
              </p>
              <p>
                So in 2015, he started Inquiry Removal. Not a generalist credit
                repair company. Not another subscription service that keeps
                clients paying indefinitely. A single-focus operation built
                around one outcome: removing hard inquiries from credit reports
                using every federal law available, as fast as legally possible,
                for a flat fee that disappears the moment the work is done. He
                built the process from inside the industry — from the disputes
                desk, not from a marketing office — which means every letter,
                every strategy, and every escalation path came from someone who
                has seen how bureaus actually respond, not just how they claim
                to.
              </p>
              <p>
                Nearly eleven years and 100,437 deleted inquiries later, the
                mission is exactly the same. Most of the clients who find
                Inquiry Removal are people Robert recognizes immediately — not
                because of their paperwork, but because of their story. They
                went to a dealership. They applied somewhere online. Their
                information was stolen. They had no idea what was about to
                happen to their credit, and now they&apos;re being denied for the
                home or car or financial opportunity they&apos;ve worked years
                toward. He built this company for them. And it&apos;s still the only
                thing this company does.
              </p>
              <p className="about-copy-note">
                One honest thing worth saying upfront: we don&apos;t have a fancy
                client portal or a corporate office. We operate lean, online,
                and direct — which is exactly what keeps our overhead low, our
                focus sharp, and our clients&apos; flat fees as affordable as they
                are. You get a real specialist, not a building full of overhead
                passed on to you in a monthly bill.
              </p>
            </div>
          </div>
        </section>

        <section className="about-industry section-divider" aria-labelledby="about-industry-heading">
          <div className="container about-copy-shell">
            <div className="about-copy-head">
              <h2 id="about-industry-heading">
                Let&apos;s Talk Honestly About the Credit Repair Industry — Because
                You Deserve to Know What You&apos;re Walking Into.
              </h2>
            </div>

            <div className="about-copy-card about-copy-card-accent">
              <p>
                The credit repair industry has a serious trust problem, and it
                earned it.
              </p>
              <p>
                Most credit repair companies, including some of the biggest
                names you have seen advertised, operate on a monthly
                subscription model. That structure creates a quiet but powerful
                conflict of interest: the longer your credit stays broken, the
                more money they make. There is no financial incentive for a
                subscription-based company to work fast. There is every
                financial incentive to work slowly, add services, find new
                things to dispute indefinitely, and keep you enrolled as long
                as possible.
              </p>
              <p>
                Companies like Lexington Law, Credit Saint, and The Credit
                People are built on that model. Some of them charge $99 to
                $150 a month — month after month — with no defined endpoint and
                no guarantee that the specific problem you came in with will
                ever actually be resolved. Calls go unanswered. Case workers
                rotate. You end up re-explaining your situation every time you
                reach someone. And the inquiries that brought you there in the
                first place? Often still sitting on your report six months
                later.
              </p>
              <p>
                We are built entirely differently — by design and by
                conviction. Inquiry Removal operates on a single flat fee.
                Once. We work on
                your case until your inquiries are removed or your money comes
                back. We do not rotate case workers. We answer the phone. We do
                not have a monthly billing system because we don&apos;t want a
                monthly billing system — it would require us to have a reason to
                keep you in the problem instead of a reason to get you out of it
                as fast as possible.
              </p>
              <p>
                If you have been burned before, that experience was real and it
                was valid. We are not asking you to forget it. We are asking
                you to look at the structure of what we offer and see for
                yourself why it works differently.
              </p>
            </div>
          </div>
        </section>

        <section className="about-audience section-divider" aria-labelledby="about-audience-heading">
          <div className="container">
            <div className="about-copy-head about-centered-head">
              <h2 id="about-audience-heading">The People We Were Built For</h2>
            </div>

            <div className="about-card-grid">
              {AUDIENCES.map((item) => (
                <article key={item.title} className="about-card">
                  <span className="about-card-icon" aria-hidden="true">
                    <PremiumIcon name={item.icon} size={22} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-different section-divider" aria-labelledby="about-different-heading">
          <div className="container">
            <div className="about-copy-head about-centered-head">
              <h2 id="about-different-heading">
                Four Things That Are Genuinely, Specifically Different About How
                We Work
              </h2>
            </div>

            <div className="about-different-grid">
              {DIFFERENTIATORS.map((item, index) => (
                <article key={item.title} className="about-different-card">
                  <span className="about-different-number" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-credentials section-divider" aria-labelledby="about-credentials-heading">
          <div className="container about-copy-shell">
            <div className="about-copy-head">
              <h2 id="about-credentials-heading">The Background Behind the Work</h2>
            </div>

            <div className="about-copy-card">
              <p>
                Robert Garcia is a nationally recognized credit repair expert
                with a professional foundation built from inside the financial
                industry, not from the outside looking in. Before founding
                Inquiry Removal in 2015, he worked as a senior credit analyst
                and spent years in the disputes department of a major financial
                institution, where he learned firsthand how bureaus process
                challenges, how furnishers respond to legal arguments, and where
                the gaps in consumer knowledge are widest and most costly.
              </p>
              <p>
                That institutional knowledge is what Inquiry Removal&apos;s entire
                process is built on. When we say we know which law applies to
                which inquiry, it is because Robert learned that from a desk
                inside the system, not from a certification course.
              </p>
              <p>
                Inquiry Removal&apos;s work has been recognized by some of the most
                authoritative financial media in the country, including Forbes,
                Bloomberg, CNBC, Business Insider, MarketWatch, AP News, Yahoo
                Finance, Money, NerdWallet, and Investopedia. In 2025, the
                company was recognized with a Best of 2025 award.
              </p>

              <div className="about-press-logos" aria-label="Press mentions">
                {PRESS_LOGOS.map((logo) => (
                  <span key={logo}>{logo}</span>
                ))}
              </div>

              <p>
                Since 2015, Inquiry Removal has served 1,123 clients nationwide
                and deleted over 100,437 hard inquiries across all three major
                credit bureaus while maintaining a review-first qualification standard
                throughout.
              </p>
            </div>
          </div>
        </section>

        <section className="about-values section-divider" aria-labelledby="about-values-heading">
          <div className="container">
            <div className="about-copy-head about-centered-head">
              <h2 id="about-values-heading">What This Company Actually Stands For</h2>
            </div>

            <div className="about-card-grid about-values-grid">
              {VALUES.map((item) => (
                <article key={item.title} className="about-card about-value-card">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-cta" aria-labelledby="about-cta-heading">
          <div className="container">
            <div className="about-cta-card gradient-border">
              <h2 id="about-cta-heading">
                Ready to Work with Someone Who Has Lived This Problem and Spent
                a Career Learning How to Fix It?
              </h2>
              <p>
                The free consultation costs nothing. It takes fifteen minutes.
                And at the end of it, you will know exactly how many inquiries
                can be removed from your report, which plan fits your situation,
                and what your score could realistically look like on the other
                side.
              </p>
              <p className="about-cta-sub">
                There is no pressure. No obligation. No credit card required.
                Just complete information so you can make a confident decision
                about your own credit.
              </p>

              <div className="about-cta-actions">
                <Link href="/get-started" className="btn btn-primary btn-large">
                  Book My Free Consultation
                </Link>
                <Link href="/how-it-works" className="btn btn-secondary btn-large">
                  See How It Works <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
</>
  );
}
