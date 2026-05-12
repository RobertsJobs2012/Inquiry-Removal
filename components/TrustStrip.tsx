import { PremiumIcon } from "./PremiumIcons";

interface TrustStat {
  value: string;
  suffix: string;
  iconSuffix?: "star";
  label: string;
  sub: string;
}

const STATS: TrustStat[] = [
  {
    value: "11",
    suffix: "Years",
    label: "Specialized Experience",
    sub: "(Since 2015)",
  },
  {
    value: "1,123",
    suffix: "",
    label: "Clients Helped Nationwide",
    sub: "",
  },
  {
    value: "100,437",
    suffix: "",
    label: "Hard Inquiries Permanently Deleted",
    sub: "",
  },
  {
    value: "4.9",
    suffix: "",
    iconSuffix: "star",
    label: "Average Rating — 312 Google Reviews",
    sub: "",
  },
];

const PRESS_LOGOS = ["Forbes", "Bloomberg", "CNBC", "Business Insider", "MarketWatch"];

export function TrustStrip() {
  return (
    <section className="trust" aria-labelledby="trust-heading">
      <div className="container">
        <h2 id="trust-heading" className="sr-only">
          Trusted nationwide
        </h2>

        <div className="trust-stats">
          {STATS.map((stat, idx) => (
            <div key={idx} className="trust-stat">
              <div className="trust-stat-value">
                <span className="trust-stat-num">{stat.value}</span>
                {stat.suffix && (
                  <span className="trust-stat-suffix">{stat.suffix}</span>
                )}
                {stat.iconSuffix === "star" && (
                  <span className="trust-stat-suffix trust-stat-icon-suffix" aria-hidden="true">
                    <PremiumIcon name="star" size={18} />
                  </span>
                )}
              </div>
              <div className="trust-stat-label">{stat.label}</div>
              {stat.sub ? <div className="trust-stat-sub">{stat.sub}</div> : null}
            </div>
          ))}
        </div>

        <p className="trust-supporting">
          We are <strong>not</strong> a generalist credit repair company. We do
          one thing — remove hard inquiries from your Experian, Equifax, and
          TransUnion credit reports — and we have spent over a decade becoming
          the best in the country at it.
        </p>

        <div className="trust-press">
          <div className="trust-press-logos" aria-label="Press mentions">
            {PRESS_LOGOS.map((logo) => (
              <span key={logo}>{logo}</span>
            ))}
          </div>
          <div className="trust-award">
            <span className="trust-award-icon" aria-hidden="true">
              <PremiumIcon name="trophy" size={20} />
            </span>
            <div>
              <div className="trust-award-title">Best of 2025</div>
            </div>
          </div>
        </div>
      </div>
</section>
  );
}
