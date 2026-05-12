import { site } from "../../lib/site";
import { getStartedPagePath } from "../../lib/getStartedPage";
import { servicesPagePath } from "../../lib/servicesPage";
import { pricingPagePath } from "../../lib/pricingPage";
import { resultsPagePath } from "../../lib/resultsPage";
import { comparisonPagePath } from "../../lib/comparisonPage";
import { areasWeServePagePath } from "../../lib/areasWeServePage";
import { bookPagePath } from "../../lib/bookPage";
import { inquiryRemovalPagePath } from "../../lib/inquiryRemovalPage";

export const highIntentLinks = [
  { href: getStartedPagePath, label: "Start Free Audit" },
  { href: servicesPagePath, label: "Compare Services" },
  { href: pricingPagePath, label: "See Pricing" },
  { href: resultsPagePath, label: "View Results" },
] as const;

export const cityPages = [
  {
    city: "Phoenix",
    slug: "phoenix",
    path: "/credit-repair-phoenix-az",
    title: "Credit Repair Phoenix AZ | State 48 Credit",
    description:
      "Phoenix credit repair with flat-fee packages, custom disputes, and a free consultation. Remove inaccurate collections, late payments, inquiries, and identity-theft damage.",
    eyebrow: "Phoenix credit repair",
    headline: "Credit repair in Phoenix built for approvals, not endless monthly billing",
    intro:
      "State 48 Credit helps Phoenix residents clean up inaccurate, outdated, and unverifiable negative items so mortgage, auto, apartment, and business approvals stop feeling out of reach.",
    proof: "Phoenix clients come to us for FHA readiness, VA loan prep, auto approvals, rental applications, and identity-theft recovery.",
    neighborhoods: ["Downtown Phoenix", "Ahwatukee", "Arcadia", "Maryvale", "North Phoenix", "South Mountain"],
  },
  {
    city: "Mesa",
    slug: "mesa",
    path: "/credit-repair-mesa-az",
    title: "Credit Repair Mesa AZ | State 48 Credit",
    description:
      "Mesa credit repair services for collections, charge-offs, late payments, inquiries, and identity theft. Flat pricing and free consultation.",
    eyebrow: "Mesa credit repair",
    headline: "Credit repair in Mesa for home buyers, families, and identity-theft recovery",
    intro:
      "Mesa residents use State 48 Credit when inaccurate reporting is blocking the next approval. We review all three bureaus, build custom disputes, and keep the process clear from first call to final report.",
    proof: "Mesa cases often involve mortgage prep, medical collections, repo damage, and fraud-related accounts that need bureau-by-bureau pressure.",
    neighborhoods: ["Dobson Ranch", "Eastmark", "Las Sendas", "Red Mountain", "Superstition Springs", "Downtown Mesa"],
  },
  {
    city: "Tucson",
    slug: "tucson",
    path: "/credit-repair-tucson-az",
    title: "Credit Repair Tucson AZ | State 48 Credit",
    description:
      "Tucson credit repair with custom bureau disputes, flat-fee packages, and remote service across Pima County. Start with a free audit.",
    eyebrow: "Tucson credit repair",
    headline: "Tucson credit repair that gives you a clear path to a cleaner file",
    intro:
      "From car-loan timing to home financing, Tucson borrowers need more than generic template letters. State 48 Credit builds dispute strategies around the actual errors and approval goals on your report.",
    proof: "Tucson clients use us to challenge collections, late payments, charge-offs, unauthorized inquiries, and old reporting that should no longer be there.",
    neighborhoods: ["Oro Valley", "Marana", "Sahuarita", "Catalina Foothills", "Vail", "South Tucson"],
  },
  {
    city: "Yuma",
    slug: "yuma",
    path: "/credit-repair-yuma-az",
    title: "Credit Repair Yuma AZ | State 48 Credit",
    description:
      "Yuma credit repair services delivered remotely across Arizona. Remove inaccurate negative items and prepare for approvals with State 48 Credit.",
    eyebrow: "Yuma credit repair",
    headline: "Credit repair in Yuma without the call-center shuffle",
    intro:
      "Yuma clients can work with State 48 Credit remotely from start to finish. We review your reports, identify removable items, and build custom disputes without requiring an office visit.",
    proof: "Yuma cases often center on rental approvals, auto-loan approvals, military-family credit recovery, and rebuilding after collections or fraud.",
    neighborhoods: ["Foothills", "Somerton", "San Luis", "Wellton", "Fortuna Foothills", "Winterhaven"],
  },
] as const;

export const staticPages = {
  services: servicesPagePath,
  pricing: pricingPagePath,
  results: resultsPagePath,
  compare: comparisonPagePath,
  areas: areasWeServePagePath,
  book: bookPagePath,
  inquiryRemoval: inquiryRemovalPagePath,
  getStarted: getStartedPagePath,
  about: "/about",
  process: "/how-credit-repair-works",
  thankYou: "/thank-you",
} as const;

export const defaultFormRecipient = site.email;
