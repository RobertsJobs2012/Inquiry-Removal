import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { landingPageByKey } from "@/lib/landing-pages";

import "@/src/styles/pages/experian.css";
import "@/src/styles/pages/landing.css";
const page = landingPageByKey.mortgage;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: page.slug },
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
    url: `https://www.inquiryremoval.com${page.slug}`,
  },
  twitter: {
    title: page.metaTitle,
    description: page.metaDescription,
  },
};

export default function HardInquiryRemovalMortgagePage() {
  return <LandingPage page={page} />;
}
