"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PremiumIcon } from "./PremiumIcons";

type DockConfig = {
  label: string;
  href: string;
  ariaLabel: string;
};

const DEFAULT_ACTION: DockConfig = {
  label: "Free Analysis",
  href: "/get-started",
  ariaLabel: "Start your free inquiry analysis",
};

function getDockAction(pathname: string): DockConfig {
  if (pathname.startsWith("/pricing")) {
    return {
      label: "Choose Plan",
      href: "/pricing#pricing-plans",
      ariaLabel: "Choose the best inquiry removal plan",
    };
  }

  if (pathname.startsWith("/services")) {
    return {
      label: "Find Service",
      href: "/services",
      ariaLabel: "Find the right inquiry removal service",
    };
  }

  if (pathname.startsWith("/results")) {
    return {
      label: "Check Fit",
      href: "/get-started",
      ariaLabel: "Check whether your inquiries may qualify for removal",
    };
  }

  if (pathname.includes("experian")) {
    return {
      label: "Experian Help",
      href: "/get-started?bureau=experian",
      ariaLabel: "Start Experian inquiry removal help",
    };
  }

  if (pathname.includes("equifax")) {
    return {
      label: "Equifax Help",
      href: "/get-started?bureau=equifax",
      ariaLabel: "Start Equifax inquiry removal help",
    };
  }

  if (pathname.includes("transunion")) {
    return {
      label: "TransUnion Help",
      href: "/get-started?bureau=transunion",
      ariaLabel: "Start TransUnion inquiry removal help",
    };
  }

  if (pathname.startsWith("/faq")) {
    return {
      label: "Ask Us",
      href: "/get-started",
      ariaLabel: "Ask Inquiry Removal a question",
    };
  }

  return DEFAULT_ACTION;
}

export function MobileConversionDock() {
  const pathname = usePathname() || "/";
  const action = getDockAction(pathname);

  return (
    <aside className="mobile-conversion-dock" aria-label="Quick contact actions">
      <div className="mobile-conversion-dock-inner">
        <a href="tel:+16023776626" className="mobile-dock-action mobile-dock-action-secondary" aria-label="Call Inquiry Removal at (602) 377-6626" data-event="mobile_dock_call_click">
          <span className="mobile-dock-icon" aria-hidden="true">
            <PremiumIcon name="phone" size={17} strokeWidth={1.9} />
          </span>
          <span>Call</span>
        </a>
        <a href="sms:+16023776626" className="mobile-dock-action mobile-dock-action-secondary" aria-label="Text Inquiry Removal at (602) 377-6626" data-event="mobile_dock_text_click">
          <span className="mobile-dock-icon" aria-hidden="true">
            <PremiumIcon name="chatConsult" size={17} strokeWidth={1.9} />
          </span>
          <span>Text</span>
        </a>
        <Link href={action.href} className="mobile-dock-action mobile-dock-action-primary" aria-label={action.ariaLabel} data-event="mobile_dock_primary_click" data-dock-label={action.label}>
          <span>{action.label}</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </aside>
  );
}
