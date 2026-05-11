import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="final-cta" aria-labelledby="final-cta-heading">
      <div className="final-cta-bg" aria-hidden="true">
        <div className="final-cta-orb final-cta-orb-1" />
        <div className="final-cta-orb final-cta-orb-2" />
      </div>

      <div className="container">
        <div className="final-cta-content">
          <h2 id="final-cta-heading" className="final-cta-headline">
            Ready to Stop Letting Unauthorized Inquiries Control Your Future?
          </h2>

          <p className="final-cta-sub">
            Your credit score is not broken. It has been pulled down by hard
            inquiries that don't belong on your report. We know how to remove
            them. We know which laws apply. We know which bureau to push and
            when. And we work as fast as legally possible — because your goals
            don't have time to wait.
          </p>

          <div className="final-cta-buttons">
            <Link href="/get-started" className="btn btn-primary btn-large">
              Get My Free Credit Analysis
            </Link>
            <Link href="/how-it-works" className="btn btn-secondary btn-large">
              See How It Works
            </Link>
          </div>

          <p className="final-cta-meta">
            One flat fee starting at $199. No monthly charges. No credit card required for your free consultation.
          </p>

          <figure className="final-testimonial">
            <div
              className="final-testimonial-avatar"
              aria-hidden="true"
            >
              SM
            </div>
            <blockquote>
              <p>
                "My lender told me the only thing standing between me and my
                mortgage was my inquiry count. <strong>22 inquiries removed,
                88 points gained,</strong> and we closed six weeks later. Best
                $299 I've ever spent."
              </p>
              <figcaption>
                <strong>Sophia M.</strong>
                <span aria-hidden="true">·</span>
                Mortgage Applicant
                <span aria-hidden="true">·</span>
                Dallas, TX ⭐⭐⭐⭐⭐
              </figcaption>
            </blockquote>
          </figure>

          <p className="final-cta-callback">
            Stop letting unauthorized inquiries control your future. The life you&apos;ve been working toward is closer than you think.
          </p>
        </div>
      </div>
</section>
  );
}
