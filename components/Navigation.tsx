"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { PremiumIcon } from "./PremiumIcons";

const NAV_ITEMS = [
  { label: "Services", href: "/services" },
  { label: "Results", href: "/results" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
];

const MOBILE_SERVICE_ITEMS = [
  { label: "All Services", href: "/services" },
  { label: "Experian", href: "/remove-hard-inquiry-experian" },
  { label: "Equifax", href: "/remove-hard-inquiry-equifax" },
  { label: "TransUnion", href: "/remove-hard-inquiry-transunion" },
];

export function Navigation() {
  const pathname = usePathname() || "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(pathname.includes("services") || pathname.includes("hard-inquiry"));

  useEffect(() => {
    setServicesExpanded(pathname === "/services" || pathname.includes("hard-inquiry"));
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousTouchAction = document.body.style.touchAction;

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.touchAction = previousTouchAction;
    };
  }, [mobileMenuOpen]);

  function isActive(href: string) {
    if (href === "/services") {
      return pathname === "/services" || pathname.includes("hard-inquiry");
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  function navLinkClass(href: string) {
    return ["nav-link", isActive(href) ? "nav-link-active" : ""]
      .filter(Boolean)
      .join(" ");
  }

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

  return (
    <header className="site-header" role="banner">
      <nav className="site-nav" aria-label="Main navigation">
        <Link
          href="/"
          className="nav-logo"
          aria-label="Inquiry Removal — homepage"
          data-event="nav_logo_click"
        >
          <Logo size="md" />
        </Link>

        <ul className="nav-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.href} className="nav-item">
              <Link
                href={item.href}
                className={navLinkClass(item.href)}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a
            href="tel:+16023776626"
            className="nav-phone"
            aria-label="Call (602) 377-6626"
            data-event="nav_phone_click"
          >
            <PremiumIcon name="phone" size={14} strokeWidth={1.55} />
            <span className="nav-phone-text">(602) 377-6626</span>
          </a>

          <Link
            href="/get-started"
            className="btn btn-primary nav-cta"
            data-event="nav_consultation_click"
          >
            Free consultation
          </Link>

          <button
            type="button"
            className="nav-menu-toggle"
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span aria-hidden="true">
              <PremiumIcon name="menu" size={20} />
            </span>
          </button>
        </div>
      </nav>

      <div
        className={["mobile-menu-backdrop", mobileMenuOpen ? "is-open" : ""]
          .filter(Boolean)
          .join(" ")}
        onClick={closeMobileMenu}
        aria-hidden={!mobileMenuOpen}
      />

      <div
        id="mobile-menu"
        className={["mobile-menu", mobileMenuOpen ? "is-open" : ""]
          .filter(Boolean)
          .join(" ")}
        aria-label="Mobile menu"
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-menu-header">
          <Logo size="sm" />
          <button
            type="button"
            className="mobile-menu-close"
            aria-label="Close menu"
            onClick={closeMobileMenu}
          >
            <PremiumIcon name="close" size={20} />
          </button>
        </div>

        <ul className="mobile-menu-links">
          <li className="mobile-menu-group">
            <button
              type="button"
              className="mobile-menu-group-toggle"
              aria-expanded={servicesExpanded}
              onClick={() => setServicesExpanded((value) => !value)}
            >
              <span>Services</span>
              <span className={["mobile-menu-group-chevron", servicesExpanded ? "is-open" : ""].join(" ")} aria-hidden="true">
                <PremiumIcon name="chevronDown" size={18} />
              </span>
            </button>

            <ul className={["mobile-menu-sub-links", servicesExpanded ? "is-open" : ""].filter(Boolean).join(" ")}>
              {MOBILE_SERVICE_ITEMS.map((item) => (
                <li key={item.href} className="mobile-menu-sub-link">
                  <Link href={item.href} onClick={closeMobileMenu}>
                    {item.label}
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {NAV_ITEMS.filter((item) => item.href !== "/services").map((item) => (
            <li key={item.href}>
              <Link href={item.href} onClick={closeMobileMenu}>
                {item.label}
                <span aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mobile-menu-footer">
          <a
            href="tel:+16023776626"
            className="btn btn-secondary mobile-menu-phone"
            data-event="mobile_menu_call_click"
          >
            Call (602) 377-6626
          </a>
          <Link
            href="/get-started"
            className="btn btn-primary mobile-menu-consult"
            data-event="mobile_menu_consult_click"
            onClick={closeMobileMenu}
          >
            Free analysis
          </Link>
        </div>
      </div>
    </header>
  );
}
