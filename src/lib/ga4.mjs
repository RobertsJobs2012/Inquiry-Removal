export const GA4_ID = "G-RYH6WBPGJR";
export const GA4_ORIGIN = "https://www.inquiryremoval.com";
export const GA4_PREFERENCE = "ir-ga4-preference-v1";
export const GA4_REVIEW_ACCEPTED = "ir:review-accepted";

export function createGa4(win, doc) {
  if (win.location.origin !== GA4_ORIGIN) return null;

  const disabled = `ga-disable-${GA4_ID}`;
  const adConsent = {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  };
  let allowed = false;
  let initialized = false;
  let leadSent = false;
  let startSent = false;
  let pageContext = { page_location: GA4_ORIGIN + "/", page_referrer: "" };
  win[disabled] = true;

  function tag(..._args) {
    win.dataLayer ??= [];
    // Google tag expects queued commands as Arguments objects.
    win.dataLayer.push(arguments);
  }

  function setAllowed(next) {
    if (next === allowed) return;
    allowed = next;
    win[disabled] = !allowed;
    if (!allowed) {
      if (initialized) {
        tag("consent", "update", { ...adConsent, analytics_storage: "denied" });
      }
      for (const name of ["ir_ga", `ir_ga_${GA4_ID.slice(2)}`]) {
        const removal = `${name}=; Max-Age=0; Path=/; Secure; SameSite=Lax`;
        try {
          doc.cookie = removal;
          doc.cookie = `${removal}; Domain=${win.location.hostname}`;
        } catch {
          // The browser may block cookies independently of this preference.
        }
      }
      return;
    }

    if (!initialized) {
      initialized = true;
      win.gtag = tag;
      // Use only the site's generated canonical path, never the live URL's
      // query or hash. Reduce any inbound referrer to its origin.
      const canonical = new URL(
        doc.querySelector('link[rel="canonical"]')?.href ?? GA4_ORIGIN,
      );
      const pageLocation =
        GA4_ORIGIN +
        (canonical.origin === GA4_ORIGIN ? canonical.pathname : "/");
      let referrer = "";
      try {
        const source = new URL(doc.referrer);
        if (["http:", "https:"].includes(source.protocol))
          referrer = source.origin;
      } catch {
        // No web referrer.
      }
      pageContext = { page_location: pageLocation, page_referrer: referrer };
      // This queue is created only AFTER opt-in. Starting granted here avoids
      // a consent-transition page view before the clean page settings exist.
      tag("consent", "default", { ...adConsent, analytics_storage: "granted" });
      tag("set", { ...pageContext, send_page_view: false });
      tag("js", new Date());
      tag("config", GA4_ID, {
        ...pageContext,
        send_page_view: false,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
        cookie_prefix: "ir",
        cookie_domain: win.location.hostname,
        cookie_expires: 90 * 24 * 60 * 60,
        linker: { accept_incoming: false },
      });
      tag("event", "page_view", { ...pageContext, send_to: GA4_ID });
      const script = doc.createElement("script");
      script.async = true;
      script.referrerPolicy = "no-referrer";
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
      doc.head.append(script);
    } else {
      tag("consent", "update", { ...adConsent, analytics_storage: "granted" });
    }
  }

  function sendEvent(name) {
    tag("event", name, { ...pageContext, send_to: GA4_ID });
  }

  function reviewStarted() {
    if (!allowed || startSent) return;
    startSent = true;
    sendEvent("review_start");
  }

  function callClicked() {
    if (allowed) sendEvent("click_to_call");
  }

  function reviewAccepted() {
    if (!allowed || leadSent) return;
    leadSent = true;
    sendEvent("generate_lead");
  }

  return { setAllowed, reviewStarted, callClicked, reviewAccepted };
}
