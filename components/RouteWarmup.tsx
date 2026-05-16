"use client";

import { useEffect } from "react";
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

  return Boolean(connection?.saveData || /2g/.test(connection?.effectiveType ?? ""));
}

export function RouteWarmup() {
  const router = useRouter();

  useEffect(() => {
    if (shouldSkipWarmup()) return;

    const warm = () => {
      for (const route of ROUTES_TO_WARM) {
        router.prefetch(route);
      }
    };

    const win = window as Window & {
      requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    if (win.requestIdleCallback) {
      const id = win.requestIdleCallback(warm, { timeout: 2500 });
      return () => win.cancelIdleCallback?.(id);
    }

    const id = window.setTimeout(warm, 1400);
    return () => window.clearTimeout(id);
  }, [router]);

  return null;
}
