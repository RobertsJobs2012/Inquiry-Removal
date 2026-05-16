"use client";

import { useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const ROUTES_TO_WARM = [
  "/",
  "/services",
  "/pricing",
  "/results",
  "/how-it-works",
  "/about",
  "/get-started",
  "/compare",
  "/faq",
  "/blog",
  "/remove-hard-inquiry-experian",
  "/remove-hard-inquiry-equifax",
  "/remove-hard-inquiry-transunion",
  "/car-dealership-inquiry-removal",
  "/unauthorized-hard-inquiry-removal",
  "/identity-theft-inquiry-removal",
  "/hard-inquiry-removal-mortgage",
  "/phoenix-hard-inquiry-removal",
  "/los-angeles-hard-inquiry-removal",
  "/new-york-city-hard-inquiry-removal",
  "/privacy-policy",
];

function shouldSkipWarmup() {
  if (typeof navigator === "undefined") return true;
  const connection = (navigator as Navigator & {
    connection?: { saveData?: boolean; effectiveType?: string };
  }).connection;

  // Respect explicit data-saver, but do not skip normal mobile connections.
  return Boolean(connection?.saveData);
}

function normalizeInternalRoute(href: string) {
  try {
    const url = new URL(href, window.location.origin);
    if (url.origin !== window.location.origin) return null;
    if (!url.pathname.startsWith("/")) return null;
    if (url.pathname.includes(".")) return null;
    if (url.pathname === window.location.pathname && !url.search) return null;
    return `${url.pathname.replace(/\/$/, "") || "/"}${url.search}`;
  } catch {
    return null;
  }
}

function addDocumentPrefetch(route: string) {
  const id = `document-prefetch:${route}`;
  if (document.head.querySelector(`link[data-instant-prefetch="${CSS.escape(id)}"]`)) return;

  const link = document.createElement("link");
  link.rel = "prefetch";
  link.as = "document";
  link.href = route;
  link.dataset.instantPrefetch = id;
  document.head.appendChild(link);
}

export function RouteWarmup() {
  const router = useRouter();
  const warmed = useRef(new Set<string>());

  const warmRoute = useCallback(
    (route: string | null, withDocumentHint = false) => {
      if (!route || warmed.current.has(route)) return;
      warmed.current.add(route);
      router.prefetch(route);

      if (withDocumentHint) {
        addDocumentPrefetch(route);
      }
    },
    [router],
  );

  useEffect(() => {
    if (shouldSkipWarmup()) return;

    const warmVisibleRoute = (event: Event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest<HTMLAnchorElement>("a[href]");
      const route = anchor ? normalizeInternalRoute(anchor.href) : null;
      warmRoute(route, true);
    };

    const eventOptions: AddEventListenerOptions = { passive: true, capture: true };
    window.addEventListener("pointerover", warmVisibleRoute, eventOptions);
    window.addEventListener("pointerdown", warmVisibleRoute, eventOptions);
    window.addEventListener("touchstart", warmVisibleRoute, eventOptions);
    window.addEventListener("focusin", warmVisibleRoute, true);

    return () => {
      window.removeEventListener("pointerover", warmVisibleRoute, eventOptions);
      window.removeEventListener("pointerdown", warmVisibleRoute, eventOptions);
      window.removeEventListener("touchstart", warmVisibleRoute, eventOptions);
      window.removeEventListener("focusin", warmVisibleRoute, true);
    };
  }, [warmRoute]);

  useEffect(() => {
    if (shouldSkipWarmup()) return;

    let cancelled = false;
    const timers: number[] = [];

    const warmCoreRoutes = () => {
      if (cancelled) return;
      for (const route of ROUTES_TO_WARM) {
        warmRoute(route);
      }
    };

    const addDocumentHints = () => {
      if (cancelled) return;
      for (const route of ROUTES_TO_WARM) {
        addDocumentPrefetch(route);
      }
    };

    // Start early enough that links feel already warmed, but after first paint.
    timers.push(window.setTimeout(warmCoreRoutes, 120));

    const win = window as Window & {
      requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    let idleId: number | undefined;
    if (win.requestIdleCallback) {
      idleId = win.requestIdleCallback(addDocumentHints, { timeout: 1200 });
    } else {
      timers.push(window.setTimeout(addDocumentHints, 900));
    }

    return () => {
      cancelled = true;
      for (const timer of timers) window.clearTimeout(timer);
      if (idleId) win.cancelIdleCallback?.(idleId);
    };
  }, [warmRoute]);

  return null;
}
