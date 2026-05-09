import Link from "next/link";
import { Logo } from "./Logo";
import { PremiumIcon } from "./PremiumIcons";

const DESKTOP_NAV_ITEMS = [
  { label: "Services", href: "/services" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Results", href: "/results" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

const MOBILE_NAV_ITEMS = [
  ...DESKTOP_NAV_ITEMS,
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
  return (
    <>
      <input
        type="checkbox"
        id="mobile-nav-state"
        className="nav-menu-state"
        aria-hidden="true"
        tabIndex={-1}
      />
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
            {DESKTOP_NAV_ITEMS.map((item) => (
              <li key={item.href} className="nav-item">
                <Link href={item.href} className="nav-link" data-astro-prefetch>
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
              <span aria-hidden="true">
                <PremiumIcon name="phone" size={14} strokeWidth={1.55} />
              </span>
              <span className="nav-phone-text">(602) 377-6626</span>
            </a>

            <Link
              href="/get-started"
              className="btn btn-primary nav-cta"
              data-event="nav_consultation_click"
              data-astro-prefetch
            >
              Free consultation
            </Link>

            <label
              htmlFor="mobile-nav-state"
              className="nav-menu-toggle"
              aria-label="Open menu"
            >
              <span aria-hidden="true">
                <PremiumIcon name="menu" size={20} />
              </span>
            </label>
          </div>
        </nav>
      </header>

      <label
        htmlFor="mobile-nav-state"
        className="mobile-menu-backdrop"
        aria-hidden="true"
      />

      <aside id="mobile-menu" className="mobile-menu" aria-label="Mobile menu">
        <ul className="mobile-menu-links">
          <li className="mobile-menu-group">
            <details className="mobile-menu-details">
              <summary className="mobile-menu-group-toggle">
                <span>Services</span>
                <span className="mobile-menu-group-chevron" aria-hidden="true">
                  <PremiumIcon name="chevronDown" size={18} />
                </span>
              </summary>

              <ul className="mobile-menu-sub-links">
                {MOBILE_SERVICE_ITEMS.map((item) => (
                  <li key={item.href} className="mobile-menu-sub-link">
                    <Link href={item.href} data-astro-prefetch>
                      {item.label}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>

          {MOBILE_NAV_ITEMS.filter((item) => item.href !== "/services").map((item) => (
            <li key={item.href}>
              <Link href={item.href} data-astro-prefetch>
                {item.label}
                <span aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mobile-menu-footer">
          <a
            href="tel:+16023776626"
            className="btn btn-primary mobile-menu-phone"
            data-event="mobile_menu_call_click"
          >
            Call (602) 377-6626
          </a>
          <Link
            href="/get-started"
            className="btn btn-secondary mobile-menu-consult"
            data-event="mobile_menu_consult_click"
            data-astro-prefetch
          >
            Free analysis
          </Link>
        </div>
      </aside>
    </>
  );
}
