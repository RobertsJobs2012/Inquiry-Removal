import Link from "next/link";
import { PremiumIcon } from "./PremiumIcons";
import { HeroProofBand } from "./HeroProofBand";

const QUALIFIER_CARDS = [
  {
    icon: <PremiumIcon name="homeGoal" />,
    label: "I want to qualify for a home",
    href: "/get-started?goal=home",
  },
  {
    icon: <PremiumIcon name="autoInquiry" />,
    label: "I need to fix dealership inquiries",
    href: "/get-started?goal=dealership",
  },
  {
    icon: <PremiumIcon name="identityShield" />,
    label: "I was a victim of identity theft",
    href: "/get-started?goal=identity-theft",
  },
  {
    icon: <PremiumIcon name="cleanCredit" />,
    label: "I just want clean credit again",
    href: "/get-started?goal=clean-credit",
  },
];

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-orbs" aria-hidden="true">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
      </div>

      <div className="container hero-grid">
        <div className="hero-content">
          <h1 id="hero-heading" className="ir-display-h1 hero-headline">
            Stop Letting Unauthorized{" "}
            <span className="ir-gradient-text">Hard Inquiries</span>{" "}
            <span className="hero-headline-tail">
              Destroy Your <span className="hero-credit-line">Credit Score</span>
            </span>
          </h1>

          <p className="hero-subheadline">
            We remove hard inquiries from your{" "}
            <strong>
              <Link href="/remove-hard-inquiry-experian" className="inline-bureau-link">
                Experian
              </Link>
              ,{" "}
              <Link href="/remove-hard-inquiry-equifax" className="inline-bureau-link">
                Equifax
              </Link>
              , and{" "}
              <Link href="/remove-hard-inquiry-transunion" className="inline-bureau-link">
                TransUnion
              </Link>
            </strong>{" "}
            credit reports — using federal law, custom disputes, and 11 years
            of specialized experience — so your score goes back up and you
            finally get approved for what matters most.
          </p>

          <HeroProofBand className="hero-proof-band-home" />

          <div className="hero-ctas">
            <Link href="/get-started" className="btn btn-primary btn-large">
              Get My Free Credit Analysis
            </Link>
            <Link href="/how-it-works" className="btn btn-secondary btn-large">
              See How It Works
            </Link>
          </div>

          <p className="hero-fear-killer">
            One flat fee starting at <strong>$199</strong>. No monthly charges.
            No credit card required for your free consultation.
          </p>

          <div className="hero-qualifier">
            <p className="hero-qualifier-label">What's bringing you here today?</p>
            <ul className="hero-qualifier-grid">
              {QUALIFIER_CARDS.map((card) => (
                <li key={card.href}>
                  <Link href={card.href} className="qualifier-card">
                    <span className="qualifier-icon" aria-hidden="true">
                      {card.icon}
                    </span>
                    <span className="qualifier-label">{card.label}</span>
                    <span className="qualifier-arrow" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <CreditDashboard />
        </div>
      </div>
</section>
  );
}

function CreditDashboard() {
  return (
    <div className="dashboard-wrap">
      {/* Main score card */}
      <div className="dash-main">
        <div className="dash-main-header">
          <div className="dash-pill">
            <span className="dash-pill-dot" />
            Live credit score
          </div>
          <div className="dash-trend">
            <span className="dash-trend-arrow">↑</span> +94 pts
          </div>
        </div>
        <div className="dash-score">
          <span className="dash-score-num">742</span>
          <div className="dash-score-meta">
            <div className="dash-score-label">Excellent</div>
            <div className="dash-score-from">was 648</div>
          </div>
        </div>
        <div className="dash-gauge" aria-hidden="true">
          <div className="dash-gauge-fill" />
        </div>
        <div className="dash-bureaus">
          <div className="dash-bureau">
            <span className="dash-bureau-name">Experian</span>
            <span className="dash-bureau-score">748</span>
          </div>
          <div className="dash-bureau">
            <span className="dash-bureau-name">Equifax</span>
            <span className="dash-bureau-score">741</span>
          </div>
          <div className="dash-bureau">
            <span className="dash-bureau-name">TransUnion</span>
            <span className="dash-bureau-score">737</span>
          </div>
        </div>
      </div>

      {/* Floating card: removed inquiries */}
      <div className="dash-float dash-float-1">
        <div className="dash-float-icon dash-float-icon-success">
          <PremiumIcon name="checkBadge" size={16} strokeWidth={1.9} />
        </div>
        <div className="dash-float-body">
          <div className="dash-float-title">19 inquiries removed</div>
          <div className="dash-float-meta">in 47 days · all 3 bureaus</div>
        </div>
      </div>

      {/* Floating card: approved */}
      <div className="dash-float dash-float-2">
        <div className="dash-float-icon dash-float-icon-gradient">
          <PremiumIcon name="scoreRise" size={16} strokeWidth={1.9} />
        </div>
        <div className="dash-float-body">
          <div className="dash-float-title">Mortgage approved</div>
          <div className="dash-float-meta">$485,000 · 6.4% APR</div>
        </div>
      </div>
</div>
  );
}
