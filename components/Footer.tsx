import Link from "next/link";
import { Logo } from "./Logo";
import { PremiumIcon } from "./PremiumIcons";

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Results", href: "/results" },
  { label: "Compare", href: "/compare" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
];

const SERVICE_LINKS = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Three-bureau removal", href: "/services" },
  { label: "Identity theft inquiries", href: "/services#identity-theft" },
  { label: "Free Analysis", href: "/get-started" },
];

const BUREAU_LINKS = [
  { label: "Experian inquiry removal", href: "/remove-hard-inquiry-experian" },
  { label: "TransUnion inquiry removal", href: "/remove-hard-inquiry-transunion" },
  { label: "Equifax inquiry removal", href: "/remove-hard-inquiry-equifax" },
];

const LEGAL_LINKS: { label: string; href: string }[] = [];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-shell">
        <div className="footer-grid">
          <section className="footer-brand" aria-label="Inquiry Removal company information">
            <Link
              href="/"
              aria-label="Inquiry Removal — homepage"
              className="footer-logo"
            >
              <Logo size="sm" />
            </Link>

            <p className="footer-tagline">
              The only nationwide service that specializes exclusively in hard
              inquiry removal. Since 2015.
            </p>

            <div className="footer-contact">
              <a href="tel:+16023776626" className="footer-contact-link">
                <span className="footer-contact-icon" aria-hidden="true">
                  <PremiumIcon name="phone" size={17} strokeWidth={1.55} />
                </span>
                <span>(602) 377-6626</span>
              </a>
              <a
                href="mailto:support@inquiryremoval.com"
                className="footer-contact-link"
              >
                <span className="footer-contact-icon" aria-hidden="true">
                  <PremiumIcon name="mail" size={17} strokeWidth={1.55} />
                </span>
                <span>Email us</span>
              </a>
            </div>

            <p className="footer-location">
              Nationwide service — founded in Phoenix, Arizona
            </p>

            <div className="footer-proof-pills" aria-label="Trust indicators">
              <span>Flat fee</span>
              <span>SSL secured</span>
              <span>
                <PremiumIcon name="star" size={12} /> 4.9 rating
              </span>
            </div>
          </section>

          <div className="footer-columns">
            <nav className="footer-nav-col footer-company" aria-label="Company links">
              <h3 className="footer-col-title">Company</h3>
              <ul>
                {COMPANY_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="footer-nav-col footer-services" aria-label="Service links">
              <h3 className="footer-col-title">Services</h3>
              <ul>
                {SERVICE_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
              <h3 className="footer-col-title footer-col-title-sub">By bureau</h3>
              <ul>
                {BUREAU_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <section className="footer-start" aria-label="Get started">
              <h3 className="footer-col-title">Get started</h3>
              <p>
                Ready to take the next step? Book your free consultation today —
                no obligation, no pressure.
              </p>

              <Link href="/get-started" className="btn btn-primary footer-primary">
                Get Free Analysis <span aria-hidden="true">→</span>
              </Link>
              <a href="tel:+16023776626" className="footer-call-button">
                Call Robert
              </a>

              <div className="footer-or" aria-hidden="true">
                Or
              </div>

              <div className="footer-record">
                <div className="footer-record-label">Track record</div>
                <strong>100,437 hard inquiries removed for 1,123 clients</strong>
                <Link href="/results">
                  See real results <span aria-hidden="true">→</span>
                </Link>
              </div>
            </section>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {year} Inquiry Removal LLC · Made in Phoenix, Arizona
          </p>

          {LEGAL_LINKS.length > 0 ? (
            <nav className="footer-legal" aria-label="Legal links">
              {LEGAL_LINKS.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          ) : null}

          <p className="footer-disclaimer">
            Inquiry Removal is a credit repair organization. Results vary based
            on individual circumstances. Federal law gives you the right to
            dispute information directly with credit bureaus at no cost.
          </p>
        </div>
      </div>
</footer>
  );
}
