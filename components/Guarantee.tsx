import { PremiumIcon } from "./PremiumIcons";

export function Guarantee() {
  return (
    <section className="guarantee" aria-labelledby="guarantee-heading">
      <div className="container">
        <div className="guarantee-card">
          <div className="guarantee-bg" aria-hidden="true" />
          <div className="guarantee-inner">
            <div className="guarantee-kicker">
              <div className="guarantee-badge" aria-hidden="true">
                <PremiumIcon name="guaranteeSeal" size={54} strokeWidth={1.5} />
              </div>
            </div>

            <h2 id="guarantee-heading" className="guarantee-headline">
              Our Promise to You — In Plain Language
            </h2>

            <div className="guarantee-prose">
              <p>
                If we do not remove any hard inquiries from your credit report
                within <strong>90 days</strong> of beginning service, you
                receive a full refund — no runaround, no finger-pointing, no
                fine print designed to keep your money.
              </p>
              <p>
                We verify results before processing any refund, because that is
                the honest way to handle it. In nearly 11 years and over{" "}
                <strong>1,123 clients</strong>, we have used a review-first
                qualification standard so clients understand the likely path
                before moving forward. We tell you about the guarantee because
                you deserve to know it exists before you trust us with anything.
              </p>
            </div>

            <p className="guarantee-disclaimer">
              Individual results vary based on each client's specific credit
              report, inquiry type, and bureau response. Most clients see
              removals within 30 to 90 days.
            </p>
          </div>
        </div>
      </div>
</section>
  );
}
