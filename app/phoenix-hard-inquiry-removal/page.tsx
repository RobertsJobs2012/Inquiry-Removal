import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { landingPageByKey } from "@/lib/landing-pages";

export const dynamic = "force-static";
export const revalidate = false;
export const fetchCache = "only-cache";

const page = landingPageByKey.phoenix;

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

export default function PhoenixHardInquiryRemovalPage() {
  return <LandingPage page={page} />;
}
