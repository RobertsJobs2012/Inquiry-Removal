import Link from "next/link";

export function MobileDock() {
  return (
    <aside className="mobile-conversion-dock" aria-label="Mobile contact actions">
      <div className="mobile-conversion-dock-inner">
        <Link
          href="/get-started"
          prefetch={true}
          className="mobile-dock-action mobile-dock-action-secondary mobile-dock-action-analysis"
          aria-label="Start your free inquiry analysis"
          data-event="mobile_dock_primary_click"
          data-dock-label="Free Analysis"
        >
          <span>Free Analysis</span>
          <span aria-hidden="true">→</span>
        </Link>
        <a
          href="tel:+16023776626"
          className="mobile-dock-action mobile-dock-action-primary mobile-dock-action-call"
          aria-label="Call Inquiry Removal at (602) 377-6626"
          data-event="mobile_dock_call_click"
        >
          <span>Call</span>
        </a>
      </div>
    </aside>
  );
}
