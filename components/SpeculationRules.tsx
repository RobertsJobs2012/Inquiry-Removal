"use client";

import { useEffect } from "react";

const CORE_PRERENDER_ROUTES = [
  "/services",
  "/pricing",
  "/results",
  "/how-it-works",
  "/about",
  "/get-started",
];

function supportsSpeculationRules() {
  return (
    typeof HTMLScriptElement !== "undefined" &&
    typeof HTMLScriptElement.supports === "function" &&
    HTMLScriptElement.supports("speculationrules")
  );
}

function shouldAvoidSpeculation() {
  if (typeof navigator === "undefined") return true;
  const connection = (navigator as Navigator & {
    connection?: { saveData?: boolean; effectiveType?: string };
  }).connection;

  if (connection?.saveData) return true;
  if (connection?.effectiveType && /(^|-)2g$|slow-2g/i.test(connection.effectiveType)) return true;

  return false;
}

function injectRules() {
  if (document.querySelector('script[data-inquiry-speculation="true"]')) return;

  const rules = {
    prerender: [
      {
        urls: CORE_PRERENDER_ROUTES,
        eagerness: "eager",
      },
      {
        where: {
          selector_matches: "a[data-instant-route]",
        },
        eagerness: "moderate",
      },
    ],
    prefetch: [
      {
        where: {
          selector_matches: "a[data-instant-route]",
        },
        eagerness: "eager",
      },
    ],
  };

  const script = document.createElement("script");
  script.type = "speculationrules";
  script.dataset.inquirySpeculation = "true";
  script.textContent = JSON.stringify(rules);
  document.head.appendChild(script);
}

export function SpeculationRules() {
  useEffect(() => {
    if (shouldAvoidSpeculation() || !supportsSpeculationRules()) return;

    let cancelled = false;
    const win = window as Window & {
      requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    const run = () => {
      if (!cancelled) injectRules();
    };

    let timeoutId: number | undefined;
    let idleId: number | undefined;

    const schedule = () => {
      if (win.requestIdleCallback) {
        idleId = win.requestIdleCallback(run, { timeout: 1400 });
      } else {
        timeoutId = window.setTimeout(run, 900);
      }
    };

    if (document.readyState === "complete") {
      timeoutId = window.setTimeout(schedule, 350);
    } else {
      window.addEventListener("load", schedule, { once: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener("load", schedule);
      if (timeoutId) window.clearTimeout(timeoutId);
      if (idleId) win.cancelIdleCallback?.(idleId);
    };
  }, []);

  return null;
}
