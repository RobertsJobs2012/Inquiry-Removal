import Link from "next/link";
import { PremiumIcon } from "./PremiumIcons";

export function AnnouncementBar() {
  return (
    <>
      <input
        type="checkbox"
        id="dismiss-announcement"
        className="dismiss-checkbox"
        aria-hidden="true"
        tabIndex={-1}
      />
      <aside
        role="banner"
        aria-label="Site announcement"
        className="announcement-bar"
      >
        <div className="announcement-inner">
          <span className="announcement-pill">
            <PremiumIcon name="star" size={12} />
            4.9★ rated
          </span>
          <span className="announcement-text">
            <span>100,437+ hard inquiries removed</span>
            <span className="announcement-divider" aria-hidden="true">|</span>
            <span className="announcement-mobile-hide">Free analysis available today</span>
          </span>
          <Link href="/get-started" className="announcement-cta" data-event="announcement_start_click">
            Start free <span aria-hidden="true">→</span>
          </Link>
        </div>
        <label
          htmlFor="dismiss-announcement"
          className="announcement-close"
          aria-label="Dismiss announcement"
        >
          <PremiumIcon name="close" size={14} />
        </label>
      </aside>
    </>
  );
}
