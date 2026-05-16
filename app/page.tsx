import type { Metadata } from "next";
import { serviceSchema } from "@/lib/schema";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { ProblemMirror } from "@/components/ProblemMirror";
import { Solution } from "@/components/Solution";
import { HowItWorks } from "@/components/HowItWorks";
import { SocialProof } from "@/components/SocialProof";
import { FeatureBento } from "@/components/FeatureBento";
import { Guarantee } from "@/components/Guarantee";
import { FinalCTA } from "@/components/FinalCTA";
import { FAQ } from "@/components/FAQ";

export const dynamic = "force-static";
export const revalidate = false;
export const fetchCache = "only-cache";

export const metadata: Metadata = {
  title: {
    absolute: "Hard Inquiry Removal Service | Inquiry Removal",
  },
  description:
    "Remove unauthorized hard inquiries from your credit report — all 3 bureaus. 100,437+ deleted since 2015. Free consultation. Flat fee. 100% money-back guarantee.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hard Inquiry Removal Service | Inquiry Removal",
    description:
      "Remove unauthorized hard inquiries from your credit report — all 3 bureaus. 100,437+ deleted since 2015. Free consultation. Flat fee. 100% money-back guarantee.",
    url: "https://www.inquiryremoval.com/",
    images: [
      {
        url: "/og/home.png",
        width: 1200,
        height: 630,
        alt: "Inquiry Removal hard inquiry removal service for Experian, Equifax, and TransUnion.",
      },
    ],
  },
  twitter: {
    title: "Hard Inquiry Removal Service | Inquiry Removal",
    description:
      "Remove unauthorized hard inquiries from your credit report — all 3 bureaus. 100,437+ deleted since 2015. Free consultation. Flat fee. 100% money-back guarantee.",
    images: ["/og/home.png"],
  },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <main id="main" className="home-page">
        <Hero />
        <TrustStrip />
        <ProblemMirror />
        <Solution />
        <HowItWorks />
        <SocialProof />
        <FeatureBento />
        <Guarantee />
        <FinalCTA />
        <FAQ />
      </main>
    </>
  );
}
