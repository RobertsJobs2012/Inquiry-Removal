import { PremiumIcon, type PremiumIconName } from "./PremiumIcons";

type BureauKey = "experian" | "equifax" | "transunion";

type VisualConfig = {
  bureau: string;
  eyebrow: string;
  score: string;
  scoreLabel: string;
  primaryLabel: string;
  secondaryLabel: string;
  lawLabel: string;
  badge: string;
  icon: PremiumIconName;
};

const VISUALS: Record<BureauKey, VisualConfig> = {
  experian: {
    bureau: "Experian",
    eyebrow: "Report review",
    score: "+94",
    scoreLabel: "points",
    primaryLabel: "Unauthorized",
    secondaryLabel: "Permissible purpose",
    lawLabel: "FCRA",
    badge: "Removed",
    icon: "bureauShield",
  },
  equifax: {
    bureau: "Equifax",
    eyebrow: "Escalation file",
    score: "+97",
    scoreLabel: "points",
    primaryLabel: "Verified",
    secondaryLabel: "CFPB escalation",
    lawLabel: "FCRA",
    badge: "Challenged",
    icon: "lawShield",
  },
  transunion: {
    bureau: "TransUnion",
    eyebrow: "Credit Karma review",
    score: "+79",
    scoreLabel: "points",
    primaryLabel: "Regular inquiry",
    secondaryLabel: "Permissible purpose",
    lawLabel: "15 U.S.C. § 1681b",
    badge: "Removed",
    icon: "scoreRise",
  },
};

export function BureauHeroVisual({ bureau }: { bureau: BureauKey }) {
  const visual = VISUALS[bureau];

  return (
    <aside className={`bureau-hero-visual bureau-hero-visual-${bureau}`} aria-hidden="true">
      <div className="bureau-visual-glow" />
      <div className="bureau-visual-card">
        <div className="bureau-visual-top">
          <span className="bureau-visual-icon">
            <PremiumIcon name={visual.icon} size={22} />
          </span>
          <div>
            <span className="bureau-visual-eyebrow">{visual.eyebrow}</span>
            <strong>{visual.bureau}</strong>
          </div>
          <span className="bureau-visual-badge">{visual.badge}</span>
        </div>

        <div className="bureau-visual-score">
          <span>{visual.score}</span>
          <small>{visual.scoreLabel}</small>
        </div>

        <div className="bureau-visual-meter">
          <span />
        </div>

        <div className="bureau-visual-rows">
          <div className="bureau-visual-row bureau-visual-row-active">
            <span>{visual.primaryLabel}</span>
            <strong>01</strong>
          </div>
          <div className="bureau-visual-row">
            <span>{visual.secondaryLabel}</span>
            <strong>02</strong>
          </div>
          <div className="bureau-visual-row">
            <span>{visual.lawLabel}</span>
            <strong>03</strong>
          </div>
        </div>

        <div className="bureau-visual-rail">
          <i />
          <i />
          <i />
        </div>
      </div>
    </aside>
  );
}
