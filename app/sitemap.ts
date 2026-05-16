import type { MetadataRoute } from "next";

const siteUrl = "https://www.inquiryremoval.com";
const routes = [
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

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route === "/" ? "/" : `${route}/`}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/services" || route === "/pricing" || route === "/get-started" ? 0.9 : 0.7,
  }));
}
