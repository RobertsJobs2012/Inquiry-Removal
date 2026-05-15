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
  { label: "Car Dealership Inquiries", href: "/car-dealership-inquiry-removal" },
  { label: "Unauthorized Inquiries", href: "/unauthorized-hard-inquiry-removal" },
  { label: "Identity Theft Inquiries", href: "/identity-theft-inquiry-removal" },
  { label: "Mortgage Approval", href: "/hard-inquiry-removal-mortgage" },
  { label: "Los Angeles", href: "/los-angeles-hard-inquiry-removal" },
  { label: "Phoenix", href: "/phoenix-hard-inquiry-removal" },
  { label: "New York City", href: "/new-york-city-hard-inquiry-removal" },
  { label: "Experian", href: "/remove-hard-inquiry-experian" },
  { label: "Equifax", href: "/remove-hard-inquiry-equifax" },
  { label: "TransUnion", href: "/remove-hard-inquiry-transunion" },
];

type NavigationProps = {
  activePath?: string;
};

function normalizePath(path = "/") {
  if (path.length > 1 && path.endsWith("/")) return path.slice(0, -1);
  return path || "/";
}

function navLinkClass(base: string, active: boolean) {
  return active ? `${base} is-active` : base;
}

export function Navigation({ activePath = "/" }: NavigationProps) {
  const currentPath = normalizePath(activePath);
  const isActive = (href: string) => {
    const normalizedHref = normalizePath(href);
    if (
      normalizedHref === "/services" &&
      (currentPath.startsWith("/remove-hard-inquiry-") ||
        currentPath === "/car-dealership-inquiry-removal" ||
        currentPath === "/unauthorized-hard-inquiry-removal" ||
        currentPath === "/identity-theft-inquiry-removal" ||
        currentPath === "/hard-inquiry-removal-mortgage" ||
        currentPath === "/los-angeles-hard-inquiry-removal" ||
        currentPath === "/phoenix-hard-inquiry-removal" ||
        currentPath === "/new-york-city-hard-inquiry-removal")
    ) {
      return true;
    }
    if (normalizedHref === "/") return currentPath === "/";
    return currentPath === normalizedHref || currentPath.startsWith(`${normalizedHref}/`);
  };

  return (
    <>
      <input
        type="checkbox"
        id="mobile-nav-state"
        className="nav-menu-state"
        aria-hidden="true"
        tabIndex={-1}
      />
      <header className="site-header" role="banner" data-mobile-header>
        <nav className="site-nav" aria-label="Main navigation">
          <Link
            href="/"
            className="nav-logo"
            aria-label="Inquiry Removal — homepage"
            prefetch="viewport"
            data-event="nav_logo_click"
          >
            <Logo size="md" priority />
          </Link>

          <ul className="nav-links">
            {DESKTOP_NAV_ITEMS.map((item) => (
              <li key={item.href} className="nav-item">
                <Link
                  href={item.href}
                  prefetch="viewport"
                  className={navLinkClass("nav-link", isActive(item.href))}
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
              aria-label="Call Inquiry Removal at (602) 377-6626"
              data-event="nav_phone_click"
            >
              <span aria-hidden="true">
                <PremiumIcon name="phone" size={15} strokeWidth={1.75} />
              </span>
              <span className="nav-phone-text">(602) 377-6626</span>
            </a>

            <Link
              href="/get-started"
              prefetch="viewport"
              className="btn btn-primary nav-cta"
              data-event="nav_consultation_click"
             
            >
              <span className="nav-cta-full">Free Analysis</span>
            </Link>

            <label
              htmlFor="mobile-nav-state"
              className="nav-menu-toggle"
              aria-label="Open menu"
            >
              <span className="nav-menu-icon" aria-hidden="true">
                <PremiumIcon name="menu" size={19} />
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
        <div className="mobile-menu-top">
          <div>
            <span className="mobile-menu-eyebrow">Inquiry Removal</span>
            <strong>Where do you want to go?</strong>
          </div>
          <label
            htmlFor="mobile-nav-state"
            className="mobile-menu-close"
            aria-label="Close menu"
          >
            <PremiumIcon name="close" size={18} />
          </label>
        </div>

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
                    <Link
                      href={item.href}
                      className={navLinkClass("mobile-menu-link", isActive(item.href))}
                      aria-current={isActive(item.href) ? "page" : undefined}
                    >
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
              <Link
                href={item.href}
                className={navLinkClass("mobile-menu-link", isActive(item.href))}
                aria-current={isActive(item.href) ? "page" : undefined}
              >
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
            Call Now
          </a>
          <Link
            href="/get-started"
            className="btn btn-secondary mobile-menu-consult"
            data-event="mobile_menu_consult_click"
           
          >
            Free Analysis
          </Link>
        </div>
      </aside>
    </>
  );
}
