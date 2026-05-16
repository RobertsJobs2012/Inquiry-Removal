import Link from "@/components/InstantLink";
import { PremiumIcon } from "./PremiumIcons";

const STEPS = [
  {
    number: "01",
    actor: "YOU",
    time: "takes 15 minutes",
    headline: "Book Your Free Consultation",
    description:
      "We review your credit reports together and identify every hard inquiry that shouldn't be there — across all three bureaus. You'll know exactly what can be removed and what your score could look like before you spend a single dollar. No pressure. No obligation. Just complete clarity.",
    icon: <PremiumIcon name="calendarCheck" />,
  },
  {
    number: "02",
    actor: "WE",
    time: "the heavy lifting",
    headline: "We Build Your Custom Disputes and Fight Every Bureau",
    description:
      "We create personalized dispute letters for every removable inquiry on your Experian, Equifax, and TransUnion reports — using the precise federal laws that apply to your specific situation. We handle every submission, every communication, and every follow-up. No templates. No guesswork. Just targeted legal expertise applied to your exact case.",
    icon: <PremiumIcon name="disputeEngine" />,
  },
  {
    number: "03",
    actor: "YOU",
    time: "the good part",
    headline: "Watch Your Score Climb — Then Do What You've Been Waiting For",
    description:
      "Within 30 to 90 days, unauthorized inquiries start disappearing from your report. Your score goes back up. And the mortgage you've been waiting to qualify for, the car loan you kept getting denied for, the fresh financial start you've been working toward — all of it gets measurably closer.",
    icon: <PremiumIcon name="scoreRise" />,
  },
];

export function HowItWorks() {
  return (
    <section
      className="how"
      id="how-it-works"
      aria-labelledby="how-heading"
    >
      <div className="container">
        <header className="how-header">
          <h2 id="how-heading">Here&apos;s How It Works — Three Steps to a Cleaner Report</h2>
          <p className="how-subtitle">
            And the process is a lot simpler than you&apos;d expect.
          </p>
        </header>

        <ol className="how-steps">
          {STEPS.map((step, idx) => (
            <li key={step.number} className="how-step">
              <div className="how-step-card">
                <div className="how-step-top">
                  <span className="how-step-num" aria-hidden="true">
                    {step.number}
                  </span>
                  <span className="how-step-icon" aria-hidden="true">
                    {step.icon}
                  </span>
                </div>
                <div className="how-step-actor">
                  <strong>{step.actor}</strong>
                  <span aria-hidden="true">·</span>
                  <span className="how-step-time">{step.time}</span>
                </div>
                <h3 className="how-step-headline">
                  <span className="sr-only">Step {idx + 1}: </span>
                  {step.headline}
                </h3>
                <p className="how-step-description">{step.description}</p>
              </div>
              {idx < STEPS.length - 1 && (
                <div className="how-connector" aria-hidden="true">
                  <svg width="24" height="14" viewBox="0 0 24 14" fill="none">
                    <path
                      d="M1 7H22M22 7L16 1M22 7L16 13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </li>
          ))}
        </ol>

        <div className="how-footer">
          <p className="how-footer-kicker">Want the full breakdown?</p>
          <Link href="/how-it-works" className="how-footer-link">
            See the Complete Process{" "}
            <span aria-hidden="true">→</span>
          </Link>
          <p className="how-footer-transition">
            Here is what that process has already done for people in exactly your situation.
          </p>
        </div>
      </div>
</section>
  );
}
