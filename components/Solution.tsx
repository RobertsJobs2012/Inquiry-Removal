import Link from "@/components/InstantLink";
import { FounderPhotoCard } from "./FounderPhotoCard";
import { PremiumIcon } from "./PremiumIcons";

const DIFFERENTIATORS = [
  {
    icon: <PremiumIcon name="specialistFocus" />,
    title:
      "The only nationwide service that specializes exclusively in hard inquiry removal",
    description:
      "Every dollar, every dispute, every hour goes toward this one result",
  },
  {
    icon: <PremiumIcon name="tailoredDispute" />,
    title:
      "Custom dispute letters built specifically for your report and your inquiries",
    description:
      "Not recycled templates that credit bureaus recognize and dismiss in bulk",
  },
  {
    icon: <PremiumIcon name="lawShield" />,
    title: "Federal law as your weapon",
    description:
      "FCRA, FDCPA, FACTA, and Metro 2 — we know which law applies to which inquiry and exactly why it matters",
  },
];

export function Solution() {
  return (
    <section className="solution" aria-labelledby="solution-heading">
      <div className="solution-bg" aria-hidden="true" />

      <div className="container">
        <header className="solution-header">
          <h2 id="solution-heading">There Is a Better Way. And It Was Built for Exactly This.</h2>
        </header>

        <div className="solution-story-grid">
          <div className="solution-founder-photo">
            <FounderPhotoCard />
          </div>

          <div className="solution-prose">
            <p>
              <span className="solution-pull">Robert Garcia</span> founded Inquiry
              Removal in 2015 after living this problem firsthand. He walked into
              a dealership, told them not to send his application anywhere, and
              watched as his perfect credit took a 100-point hit from inquiries
              he never authorized. As a former senior credit analyst who spent
              years in the disputes department of a major financial institution,
              he knew those inquiries didn't belong there — and he knew which
              federal laws could remove them.
            </p>

            <p>
              So he built the only company in the country that does one thing and
              one thing only: <strong>removes hard inquiries</strong>. Not
              collections. Not late payments. Not charge-offs. Just inquiries.
              That singular focus means our team knows the FCRA, FDCPA, FACTA,
              and Metro 2 compliance standards at a depth that generalist credit
              repair companies simply don't have — because for them, inquiries
              are one line item on a long checklist. For us, they are the entire
              job.
            </p>

            <p>
              The big credit repair companies — Lexington Law, Credit Saint, The
              Credit People — were built on monthly subscriptions. The longer you
              stay stuck, the more they earn. They need you in the problem.{" "}
              <strong>We operate on a single flat fee because we need you out of it.</strong>{" "}
              We fight alongside you against the
              dealerships that ignored your instructions, the identity thieves
              who opened lines of credit in your name, and the bureaus that keep
              verifying inquiries that were never authorized. When you win, we're
              done. That's how it should work.
            </p>

            <p>
              The people who come to us aren't financially irresponsible. They're
              people who went car shopping and got ambushed. They're people whose
              information was stolen. They're people who applied online and had
              no idea their report would be sent to thirty different lenders.
              They deserve better than a monthly subscription that turns their
              problem into someone else's profit.
            </p>
          </div>
        </div>

        <ul className="solution-diffs">
          {DIFFERENTIATORS.map((d, idx) => (
            <li key={idx} className="diff-card">
              <span className="diff-icon" aria-hidden="true">
                {d.icon}
              </span>
              <h3 className="diff-title">{d.title}</h3>
              <p className="diff-description">{d.description}</p>
            </li>
          ))}
        </ul>

        <div className="solution-cta">
          <Link href="/get-started" className="btn btn-primary btn-large">
            Book My Free Consultation — No Obligation, No Pressure
          </Link>
          <p className="solution-cta-meta">
            And the process is a lot simpler than you&apos;d expect.
          </p>
        </div>
      </div>
</section>
  );
}
