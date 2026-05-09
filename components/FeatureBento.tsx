import { PremiumIcon } from "./PremiumIcons";

interface BentoTile {
  area: string;
  title: string;
  description: string;
  accent?: "primary" | "default";
  tone?: "blue" | "purple" | "pink";
  icon: React.ReactNode;
}

const TILES: BentoTile[] = [
  {
    area: "primary",
    accent: "primary",
    tone: "blue",
    title: "Three-bureau inquiry removal — all at once",
    description:
      "We dispute directly and simultaneously with Experian, Equifax, and TransUnion — targeting every unauthorized, excessive, or fraudulent hard inquiry across all three reports. Not just one bureau. Not just the obvious ones. Every inquiry that doesn't belong there.",
    icon: <PremiumIcon name="bureauShield" size={28} />,
  },
  {
    area: "tile2",
    tone: "blue",
    title: "Custom Dispute Letters — Never Templates",
    description:
      "Every letter is built specifically for your inquiries, your bureaus, and the federal laws that apply to your case. Credit bureaus recognize and dismiss boilerplate templates. Ours don't look like anything else because they aren't.",
    icon: <PremiumIcon name="tailoredDispute" />,
  },
  {
    area: "tile3",
    tone: "pink",
    title: "One Flat Fee — No Monthly Charges. Ever.",
    description:
      "Pay once. We work until it's done. No subscriptions. No recurring billing. No financial incentive for us to move slowly. Plans start at $199 based on your total inquiry count.",
    icon: <PremiumIcon name="flatFee" />,
  },
  {
    area: "tile4",
    tone: "purple",
    title: "Federal law as your weapon",
    description:
      "FCRA. FDCPA. FACTA. Metro 2. We know exactly which law applies to which inquiry type and how to use it. This is all we do — and we've been doing it since 2015.",
    icon: <PremiumIcon name="lawShield" />,
  },
  {
    area: "tile5",
    tone: "pink",
    title: "A Dedicated Specialist — Not a Call Center",
    description:
      "You work with one person who knows your file. You can reach us. We answer. That's not a marketing line — it's our policy.",
    icon: <PremiumIcon name="specialist" />,
  },
  {
    area: "tile6",
    tone: "blue",
    title: "100% money-back guarantee",
    description:
      "If no inquiries are removed within 90 days, you receive a full refund. No runaround. No fine print built to trap you.",
    icon: <PremiumIcon name="guaranteeLoop" />,
  },
  {
    area: "tile7",
    tone: "purple",
    title: "Post-Deletion Credit Protection Strategy",
    description:
      "After your inquiries are removed, we give you a personalized plan for protecting your score going forward — so what we fought for stays in place.",
    icon: <PremiumIcon name="protectionPlan" />,
  },
  {
    area: "tile8",
    tone: "pink",
    title: "Free consultation. Zero obligation.",
    description:
      "We review your report first. You see exactly what can be removed before you spend a dollar.",
    icon: <PremiumIcon name="chatConsult" />,
  },
];

const FOR = [
  "You recently visited a car dealership and discovered multiple hard inquiries you never agreed to",
  "You've found unauthorized or unrecognized inquiries on your report and suspect identity theft",
  "You're trying to qualify for a mortgage, auto loan, or credit and your inquiry count is the barrier",
];

const NOT_FOR = [
  "Anyone looking to remove collections, late payments, charge-offs, or other negative items — that's not our specialty and we won't pretend it is",
  "Anyone looking for a monthly subscription with no defined end date and no flat-fee commitment",
];

export function FeatureBento() {
  return (
    <section className="bento" aria-labelledby="bento-heading">
      <div className="container">
        <header className="bento-header">
          <h2 id="bento-heading">Everything You Get When You Work with Inquiry Removal</h2>
        </header>

        <div className="bento-grid">
          {TILES.map((tile) => (
            <article
              key={tile.area}
              className={`bento-tile bento-tile--${tile.area} bento-tile--${tile.tone ?? "blue"} ${tile.accent === "primary" ? "bento-tile--primary" : ""}`}
              style={{ gridArea: tile.area }}
            >
              <span className="bento-icon" aria-hidden="true">
                {tile.icon}
              </span>
              <h3 className="bento-title">{tile.title}</h3>
              <p className="bento-description">{tile.description}</p>
            </article>
          ))}
        </div>

        <div className="bento-fit">
          <div className="bento-fit-col bento-fit-for">
            <div className="bento-fit-header">
              <span className="bento-fit-icon" aria-hidden="true">
                <PremiumIcon name="checkBadge" size={15} strokeWidth={1.9} />
              </span>
              <h3>Who this is for</h3>
            </div>
            <ul>
              {FOR.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="bento-fit-col bento-fit-not">
            <div className="bento-fit-header">
              <span className="bento-fit-icon bento-fit-icon-not" aria-hidden="true">
                <PremiumIcon name="xBadge" size={14} strokeWidth={1.9} />
              </span>
              <h3>Who this is not for</h3>
            </div>
            <ul>
              {NOT_FOR.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
</section>
  );
}
