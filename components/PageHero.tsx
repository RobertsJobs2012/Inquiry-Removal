import type { ReactNode } from "react";
import { OrbField } from "@/components/OrbField";

type PageHeroProps = {
  id: string;
  eyebrow?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  meta?: ReactNode;
  actions?: ReactNode;
  copyAfter?: ReactNode;
  children?: ReactNode;
  align?: "split" | "center";
  className?: string;
  shellClassName?: string;
  panelClassName?: string;
};

export function PageHero({
  id,
  eyebrow,
  title,
  subtitle,
  meta,
  actions,
  copyAfter,
  children,
  align = "split",
  className = "",
  shellClassName = "",
  panelClassName = "",
}: PageHeroProps) {
  const sectionClassName = [
    "ir-page-hero",
    align === "center" ? "ir-page-hero-center" : "ir-page-hero-split",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const shellClasses = ["container", "ir-page-hero-shell", shellClassName]
    .filter(Boolean)
    .join(" ");
  const panelClasses = ["ir-page-hero-panel", panelClassName]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClassName} aria-labelledby={id}>
      <OrbField variant="hero" />
      <div className={shellClasses}>
        <div className="ir-page-hero-copy">
          <h1 id={id} className="ir-page-hero-title">
            {title}
          </h1>
          {subtitle ? <div className="ir-page-hero-subtitle">{subtitle}</div> : null}
          {meta ? <div className="ir-page-hero-meta">{meta}</div> : null}
          {actions ? <div className="ir-page-hero-actions">{actions}</div> : null}
          {copyAfter ? <div className="ir-page-hero-copy-after">{copyAfter}</div> : null}
        </div>
        {children ? <aside className={panelClasses}>{children}</aside> : null}
      </div>
    </section>
  );
}
