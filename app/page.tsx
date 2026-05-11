import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navigation } from "@/components/Navigation";
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
import { Footer } from "@/components/Footer";
import { serviceSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <AnnouncementBar />
      <Navigation />
      <main id="main">
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
      <Footer />
    </>
  );
}
