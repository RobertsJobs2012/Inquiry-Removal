import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { landingPageByKey } from "@/lib/landing-pages";

const page = landingPageByKey.la;

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

export default function LosAngelesHardInquiryRemovalPage() {
  return <LandingPage page={page} />;
}
