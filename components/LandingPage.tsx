import Link from "next/link";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Footer } from "@/components/Footer";
import { FounderPhotoCard } from "@/components/FounderPhotoCard";
import { Navigation } from "@/components/Navigation";
import { PageHero } from "@/components/PageHero";
import { PremiumIcon, type PremiumIconName } from "@/components/PremiumIcons";
import type { LandingPageData } from "@/lib/landing-pages";

type Block = LandingPageData["sections"][number]["blocks"][number];
type PageVisualKey = LandingPageData["heroVisual"];

const VISUALS: Record<PageVisualKey, { icon: PremiumIconName; eyebrow: string; title: string; score: string; scoreLabel: string; rows: string[]; badge: string }> = {
  dealer: {
    icon: "autoInquiry",
    eyebrow: "Dealer inquiry file",
    title: "Auto credit pulls",
    score: "+62",
    scoreLabel: "points recovered",
    rows: ["Soft-pull bait and switch", "Shotgun lender submissions", "FCRA permissible purpose"],
    badge: "Dealer dispute",
  },
  la: {
    icon: "lawShield",
    eyebrow: "California dispute file",
    title: "Los Angeles",
    score: "+91",
    scoreLabel: "points recovered",
    rows: ["FCRA + CCRAA framework", "All three bureaus", "LA homebuyer urgency"],
    badge: "CA rights",
  },
  phoenix: {
    icon: "specialist",
    eyebrow: "Phoenix founder story",
    title: "Robert Garcia",
    score: "602",
    scoreLabel: "Phoenix-based",
    rows: ["Founded here in 2015", "Arizona compliance focus", "Valley dealership cases"],
    badge: "Local",
  },
  nyc: {
    icon: "homeGoal",
    eyebrow: "NYC dispute file",
    title: "Five boroughs",
    score: "+67",
    scoreLabel: "points recovered",
    rows: ["Apartment applications", "Employer credit checks", "NY state law framework"],
    badge: "NYC",
  },
  mortgage: {
    icon: "homeGoal",
    eyebrow: "Mortgage approval file",
    title: "Home loan ready",
    score: "+88",
    scoreLabel: "points recovered",
    rows: ["Middle-score recovery", "Closing-date urgency", "All three bureaus"],
    badge: "Mortgage",
  },
  unauthorized: {
    icon: "lawShield",
    eyebrow: "Unauthorized inquiry file",
    title: "FCRA violation review",
    score: "+112",
    scoreLabel: "points recovered",
    rows: ["No permissible purpose", "Custom FCRA disputes", "All three bureaus"],
    badge: "FCRA",
  },
  identityTheft: {
    icon: "identityShield",
    eyebrow: "Identity theft file",
    title: "Fraudulent pulls",
    score: "+112",
    scoreLabel: "points recovered",
    rows: ["FTC identity theft report", "FCRA identity theft provisions", "All three bureaus"],
    badge: "Identity theft",
  },
};

function LandingHeroVisual({ visualKey }: { visualKey: PageVisualKey }) {
  if (visualKey === "phoenix") {
    return <FounderPhotoCard priority />;
  }

  const visual = VISUALS[visualKey];

  return (
    <aside className={`landing-hero-visual landing-hero-visual-${visualKey}`} aria-hidden="true">
      <div className="landing-visual-glow" />
      <div className="landing-visual-card">
        <div className="landing-visual-top">
          <span className="landing-visual-icon">
            <PremiumIcon name={visual.icon} size={22} />
          </span>
          <div>
            <span className="landing-visual-eyebrow">{visual.eyebrow}</span>
            <strong>{visual.title}</strong>
          </div>
          <span className="landing-visual-badge">{visual.badge}</span>
        </div>

        <div className="landing-visual-score">
          <span>{visual.score}</span>
          <small>{visual.scoreLabel}</small>
        </div>

        <div className="landing-visual-meter">
          <span />
        </div>

        <div className="landing-visual-rows">
          {visual.rows.map((row, index) => (
            <div key={row} className={index === 0 ? "landing-visual-row landing-visual-row-active" : "landing-visual-row"}>
              <span>{row}</span>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

function renderBlock(block: Block, index: number) {
  if (block.kind === "subhead") {
    return <h3 key={`${block.kind}-${index}`}>{block.text}</h3>;
  }

  if (block.kind === "quote") {
    return (
      <blockquote key={`${block.kind}-${index}`}>
        <p>{block.text}</p>
      </blockquote>
    );
  }

  if (block.kind === "cite") {
    return (
      <p key={`${block.kind}-${index}`} className="landing-citation">
        {block.text}
      </p>
    );
  }

  if (block.kind === "meta") {
    return (
      <p key={`${block.kind}-${index}`} className="landing-meta-line">
        {block.text}
      </p>
    );
  }

  return <p key={`${block.kind}-${index}`}>{block.text}</p>;
}

function Section({ page, section, index }: { page: LandingPageData; section: LandingPageData["sections"][number]; index: number }) {
  const sectionId = `${page.key}-section-${index}`;
  const isProof = /proof|results|real results|what happens/i.test(section.heading);
  const isCta = /ready to|still within reach|right to have|credit report should reflect/i.test(section.heading);

  if (section.type === "faq") {
    return (
      <section className="landing-section landing-faq section-divider" aria-labelledby={sectionId}>
        <div className="container landing-copy-shell">
          <div className="landing-copy-head">
            <h2 id={sectionId}>{section.heading}</h2>
          </div>
          {section.blocks.length ? <div className="landing-copy-card">{section.blocks.map(renderBlock)}</div> : null}
          <div className="landing-faq-list">
            {section.faqs.map((item) => (
              <details key={item.q} className="landing-faq-card" name={`${page.key}-faq`}>
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
    );
  }

  return (
    <section className={`landing-section ${isProof ? "landing-proof" : ""} ${isCta ? "landing-closing" : ""} section-divider`} aria-labelledby={sectionId}>
      <div className="container landing-copy-shell">
        <div className={isCta ? "landing-copy-head landing-centered-head" : "landing-copy-head"}>
          <h2 id={sectionId}>{section.heading}</h2>
        </div>
        <div className={isCta ? "landing-copy-card landing-closing-card" : "landing-copy-card"}>{section.blocks.map(renderBlock)}</div>
        {isCta ? (
          <div className="landing-closing-actions">
            <Link href={page.ctaHref} className="btn btn-primary btn-large">
              {page.hero.primaryCta}
            </Link>
            {page.downloadHref.startsWith("tel:") ? (
              <a href={page.downloadHref} className="btn btn-secondary btn-large">
                {page.downloadCta}
              </a>
            ) : (
              <a href={page.downloadHref} download className="btn btn-secondary btn-large">
                {page.downloadCta}
              </a>
            )}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function LandingPage({ page }: { page: LandingPageData }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(page.schema) }} />
      {page.faqSchema ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(page.faqSchema) }} /> : null}
      <AnnouncementBar />
      <Navigation activePath={page.slug} />
      <main id="main" className={`landing-page ${page.className}`}>
        <PageHero
          id={`${page.key}-hero-heading`}
          eyebrow={page.eyebrow}
          title={page.hero.title}
          subtitle={<p>{page.hero.subtitle}</p>}
          meta={
            <>
              <span>
                <PremiumIcon name="checkBadge" size={15} /> 100,437 Hard Inquiries Removed
              </span>
              <span>
                <PremiumIcon name="star" size={15} /> 4.9 Stars — 312 Google Reviews
              </span>
              <span>
                <PremiumIcon name="guaranteeSeal" size={15} /> 100% Money-Back Guarantee
              </span>
            </>
          }
          actions={
            <>
              <Link href={page.ctaHref} className="btn btn-primary btn-large">
                {page.hero.primaryCta}
              </Link>
              {page.hero.secondaryCta.includes("Call") ? (
                <a href="tel:6023776626" className="btn btn-secondary btn-large">
                  {page.hero.secondaryCta}
                </a>
              ) : (
                <Link href="/how-it-works" className="btn btn-secondary btn-large">
                  {page.hero.secondaryCta}
                </Link>
              )}
            </>
          }
          copyAfter={<p className="landing-fear-killer">{page.hero.fearKiller}</p>}
        >
          <LandingHeroVisual visualKey={page.heroVisual} />
        </PageHero>

        <section className="landing-trust section-divider" aria-labelledby={`${page.key}-trust-heading`}>
          <div className="container">
            <h2 id={`${page.key}-trust-heading`} className="sr-only">
              Trust indicators
            </h2>
            <div className="landing-stats">
              {page.stats.map((stat) => (
                <article key={`${stat.value}-${stat.label}`} className="landing-stat">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
            <div className="landing-press">
              {page.press.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        {page.sections.map((section, index) => (
          <Section key={`${section.heading}-${index}`} page={page} section={section} index={index} />
        ))}
      </main>
      <Footer />
    </>
  );
}
