import { inquiryRemovalPagePath } from "./inquiryRemovalPage";

export const servicesPagePath = "/credit-repair-services-phoenix-az";

export const servicesPageMeta = {
  title: "Credit Repair Services Phoenix AZ | From $299 — State 48",
  description:
    "Arizona credit repair services — 3 packages starting at $299. Remove collections, late payments & more. Free Phoenix consultation. No monthly fees, no obligation.",
  ogTitle: "Credit Repair Services Phoenix AZ | From $299",
  ogDescription: "3 packages from $299. No monthly fees. Free consultation.",
  ogImage: "/og/services",
} as const;

export const servicesHero = {
  title: "Arizona credit repair services - find the right package for your situation",
  description:
    "State 48 Credit offers credit repair services across Phoenix, Arizona and the entire state - with three packages built for three different situations. Whether you're trying to qualify for a home loan, remove collections and charge-offs from your report, or recover from identity theft, we have a defined scope of work, a transparent price, and a 100% money-back guarantee. Find the package that fits your situation below - and book your free consultation to confirm it's the right one.",
  subheadline:
    "Every credit report is different. Every client gets a solution built for their specific situation - not a one-size-fits-all program.",
  stats: [
    {
      value: "15,892 Items Deleted",
      label: "Across all three bureaus since 2010",
    },
    {
      value: "4.9 ★ rating",
      label: "412 verified Arizona reviews",
    },
  ],
} as const;

export const servicesTrustStrip = {
  headline:
    "2,041 Arizonans served. 15 years of credit repair expertise. $20.4 million in derogatory debt permanently removed.",
  body:
    "State 48 Credit has removed every kind of negative item - collections, bankruptcies, repossessions, foreclosures, student loan defaults, identity theft accounts, inquiries, and more - from Arizona credit reports since 2010. The right package depends on what's on your report and what you're trying to accomplish. Start with the free consultation and we'll tell you exactly which one fits your situation.",
} as const;

export const servicesSelectorCards = [
  {
    id: "home-buyer",
    icon: "home",
    eyebrow: "For home buyers",
    title: "I want to buy a house in Phoenix - and my credit is the only thing stopping me.",
    body:
      "My score is not where it needs to be for a mortgage approval. I may have collections, late payments, or a repossession pulling me down. I need all three bureaus cleaned up so I can qualify for the home loan I need.",
    cta: "I need this",
    href: `${servicesPagePath}#full-sweep`,
    featured: true,
  },
  {
    id: "identity-theft",
    icon: "shield",
    eyebrow: "For identity-theft recovery",
    title: "I'm a victim of identity theft and my credit is a mess I didn't create.",
    body:
      "Someone opened accounts in my name, and now I'm being punished for debts I never owed. I need everything fraudulent removed - and I need it done by someone who knows how to fight back.",
    cta: "This is my situation",
    href: `${servicesPagePath}#total-freedom`,
  },
  {
    id: "approvals",
    icon: "zap",
    eyebrow: "For faster approvals",
    title: "I need to qualify for a car loan, apartment lease, or credit card in Arizona.",
    body:
      "I keep getting denied or hit with sky-high rates because of what is on my report. I need the negative items gone so I can get approved - and stop paying more than I should.",
    cta: "This sounds like me",
    href: `${servicesPagePath}#full-sweep`,
  },
  {
    id: "stuck",
    icon: "spark",
    eyebrow: "For stalled cases",
    title: "I've tried DIY credit repair or paid another company - and I'm still stuck.",
    body:
      "I've been at this for months. I've sent letters, made calls, or paid a company that kept billing me and never delivered. I need someone who actually gets items removed.",
    cta: "Start here",
    href: `${servicesPagePath}#full-sweep`,
  },
] as const;

export const servicesPackages = [
  {
    slug: "one-and-done",
    name: "One & Done",
    subtitle: "Single-bureau credit repair - $299 one-time payment",
    seoHeading: "Single-bureau credit repair - target the one report that's costing you",
    price: 299,
    tone: "standard",
    schemaDescription:
      "Single-bureau credit repair in Arizona for lender-specific pulls, targeted approval goals, and one-report cleanup.",
    problem:
      "If negative items are concentrated on one specific bureau - or if a lender told you that Equifax, Experian, or TransUnion is the one pulling your application down - then paying to fix all three does not make sense. You have a targeted problem. You need a targeted fix. Under the Fair Credit Reporting Act (FCRA), every item on that report has legal dispute rights - and we know exactly how to use them.",
    agitation:
      "Every month that item sits on your report, it keeps you out of the loan you're applying for, the rate you should be getting, and the approval you're waiting on. Every denial adds another inquiry. Every inquiry compounds the damage. Every day of inaction is a day you're paying for it somewhere.",
    solution:
      "The One & Done package focuses our full process on one bureau - the one that matters most for your immediate goal. We review every negative item on that report, build custom dispute letters using the FCRA, FDCPA, FACTA, and Metro 2 compliance standards, submit directly to the bureau, and work through every round of disputes until items are removed.",
    included: [
      "Complete credit report review for the target bureau",
      "Custom dispute letters - one per item, built from scratch",
      "Direct submission to the target bureau on your behalf",
      "All follow-up disputes handled until items are removed",
      "Dedicated specialist assigned to your case - not a call center",
      "Final results report: every item removed, score improvement documented",
      "Post-deletion credit strategy: what to do next to protect your progress",
    ],
    bestFor:
      "One specific bureau is the problem. You have a defined goal - a loan, a lease, a rate improvement - and you need that one report cleaned up.",
    testimonial: {
      quote:
        "I paid two other credit repair companies for almost a year and got absolutely nothing. State 48 deleted 8 negative items in 45 days. Robert actually answers the phone. That alone was shocking.",
      attribution: "James T. | Small Business Owner | Tucson, AZ",
      meta: "+143 points | 8 items removed | 45 days",
    },
    cta: "Start One & Done",
  },
  {
    slug: "full-sweep",
    name: "Full Sweep",
    subtitle: "3-bureau credit repair in Arizona - $599 one-time payment",
    seoHeading: "3-Bureau Credit Repair Arizona - Remove Collections & More",
    price: 599,
    tone: "featured",
    badge: "Most Popular",
    schemaDescription:
      "Three-bureau Arizona credit repair for collections, late payments, charge-offs, medical debt, and mortgage-ready results.",
    problem:
      "If you have collections, late payments, charge-offs, or medical debt showing up across Equifax, Experian, and TransUnion - which is the case for most Arizona residents - fixing one bureau while leaving the other two untouched is only doing part of the job.",
    agitation:
      "Lenders pull all three bureaus. Every single time. A clean Experian report means nothing if Equifax is showing a repossession and TransUnion is showing four collections. You need all three clean before an approval is possible - and every month they aren't, you pay for it in higher rates, denied applications, and missed opportunities. The average Arizona homebuyer with subprime credit pays $40,000 to $80,000 more in lifetime mortgage interest than someone with a prime score. That gap closes the day your bureaus are clean.",
    solution:
      "Full Sweep covers all three bureaus simultaneously. We don't fix one and hope the others follow - we go after Equifax, Experian, and TransUnion at the same time, with custom disputes for every item on every report. This is the package most clients need, and it's the one that delivers complete, mortgage-ready results.",
    extraHeading: "Credit repair for home buyers, mortgage applicants, and car loans in Phoenix",
    extraParagraph:
      "Full Sweep is the package most commonly needed by Arizona residents preparing for a mortgage application - whether that's an FHA loan, VA loan, or conventional financing in Phoenix or anywhere else in the state. First-time home buyers, veterans, and anyone who's been told to \"fix their credit first\" before applying typically need all three bureaus cleaned before a lender will approve their application.",
    included: [
      "Complete 3-bureau credit report review - Equifax, Experian, and TransUnion",
      "Custom dispute letters for every negative item on all three reports",
      "Direct submission to all three bureaus simultaneously",
      "All follow-up dispute rounds handled until items are removed",
      "Dedicated specialist assigned to your case from start to finish",
      "Full transparency throughout - you know what we submitted and when",
      "Final results report: all items removed across all three bureaus, score improvement documented",
      "Post-deletion credit strategy: personalized guidance for protecting your progress",
    ],
    bestFor:
      "You have negative items on more than one bureau. You're working toward a home loan, auto loan, or any approval that requires all three bureaus. This is the right choice for the vast majority of State 48 clients.",
    testimonial: {
      quote:
        "I had 11 collections on my report and honestly thought buying a home was a dream that wasn't meant for me. State 48 removed every single one in 67 days and my score jumped 189 points. We closed on our first home last month.",
      attribution: "Maria C. | First-Time Home Buyer | Phoenix, AZ",
      meta: "+189 points | 11 collections removed | 67 days",
    },
    cta: "Start Full Sweep",
  },
  {
    slug: "total-freedom",
    name: "Total Freedom",
    subtitle:
      "Complete credit restoration - all three bureaus + inquiries + ChexSystems + InnoVis",
    seoHeading: "Complete Credit Restoration - All Bureaus + ChexSystems + InnoVis",
    price: 849,
    tone: "premium",
    schemaDescription:
      "Complete credit restoration in Arizona for identity theft, ChexSystems, InnoVis, hard inquiries, and multi-system damage.",
    problem:
      "If your situation goes beyond the standard three bureaus - identity theft that's created accounts and flags across multiple reporting systems, a ChexSystems record blocking your banking access, InnoVis entries affecting your insurance or background checks, or an inquiry list dragging your score down - a standard 3-bureau repair is not enough. You need the full restoration.",
    agitation:
      "ChexSystems flags don't show up on your Equifax report - but they can prevent you from opening a bank account at most major financial institutions. InnoVis entries affect insurance premiums and specialty lending decisions you may not even know you're being evaluated for. Unauthorized hard inquiries pull your score down every month they sit there. And if you're an identity theft victim, these flags and fraudulent accounts are spread across every system the thief touched. Leaving any of them intact means leaving the job unfinished.",
    solution:
      "Total Freedom is the complete restoration package. We don't stop at Equifax, Experian, and TransUnion. We go after inquiries, ChexSystems, and InnoVis - every reporting system working against you - until your financial record is as clean as it can possibly be. This package was built for credit repair after identity theft, clients with complex multi-system damage, and anyone who needs a complete fresh start.",
    extraHeading:
      "Credit repair after identity theft - full system restoration across all reporting databases",
    extraParagraph:
      "This package was built for identity theft victims, clients with complex multi-system damage, and anyone who needs more than a standard 3-bureau dispute process. If fraudulent accounts, banking flags, and specialty-report damage are all showing up at once, Total Freedom is the package designed to clean up the full picture.",
    included: [
      "Complete 3-bureau review and removal - Equifax, Experian, and TransUnion",
      "Hard inquiry removal - unauthorized and excessive hard inquiries across all three bureaus",
      "ChexSystems removal - banking flags cleared so financial institutions see who you actually are",
      "InnoVis removal - specialty consumer reporting database cleaned",
      "LexisNexis review - identification and dispute of entries affecting background checks and insurance",
      "Custom dispute letters for every item, every system, built from scratch",
      "All follow-up dispute rounds handled until items are removed",
      "Dedicated specialist from initial review through final results",
      "Full progress transparency throughout the entire process",
      "Final results report: complete documentation of all removals across all systems",
      "Post-deletion credit strategy - the full roadmap for protecting everything we built",
    ],
    bestFor:
      "Identity theft victims. Anyone with ChexSystems banking flags. Clients with excessive hard inquiry damage. Anyone who needs the most comprehensive credit and financial record restoration available.",
    testimonial: {
      quote:
        "Someone stole my identity and completely destroyed my credit. I had 17 fraudulent accounts and didn't know where to start. Robert and his team removed all of them in under 90 days. I went from a 512 to a 714.",
      attribution: "Destiny R. | Identity Theft Victim | Mesa, AZ",
      meta: "+202 points | 17 fraudulent accounts removed | 88 days",
    },
    cta: "Start Total Freedom",
  },
] as const;

export const servicesAddOnsIntro =
  "If you're dealing with excessive hard inquiries dragging your score down, a ChexSystems flag blocking your banking access, or InnoVis entries affecting your insurance rates, you can add these targeted services to any existing package. All add-ons use the same custom dispute approach as your main package - no templates, no shortcuts.";

export const servicesAddOns = [
  {
    name: "Hard Inquiry Removal",
    detail: "Remove unauthorized and excessive hard inquiries from all three bureaus",
    price: 149,
    icon: "spark",
    popular: true,
    note: "Most requested add-on",
  },
  {
    name: "ChexSystems Removal",
    detail: "Clear banking flags that prevent you from opening new accounts",
    price: 199,
    icon: "briefcase",
    note: "Best for banking denials",
  },
  {
    name: "InnoVis Removal",
    detail: "Dispute entries in the InnoVis specialty consumer database",
    price: 79,
    icon: "shield",
    note: "For specialty-report cleanup",
  },
  {
    name: "24-Hour Rush Processing",
    detail: "We begin your custom disputes within 24 hours of sign-up",
    price: 99,
    icon: "zap",
    popular: true,
    note: "Fastest start available",
  },
] as const;

export const servicesPackageComparison = [
  {
    label: "Price",
    oneAndDone: "$299",
    fullSweep: "$599",
    totalFreedom: "$849",
  },
  {
    label: "Bureaus covered",
    oneAndDone: "1 (your choice)",
    fullSweep: "All 3",
    totalFreedom: "All 3",
  },
  {
    label: "Hard inquiry removal",
    oneAndDone: "Not included",
    fullSweep: "Not included",
    totalFreedom: "Included",
  },
  {
    label: "ChexSystems",
    oneAndDone: "Not included",
    fullSweep: "Not included",
    totalFreedom: "Included",
  },
  {
    label: "InnoVis",
    oneAndDone: "Not included",
    fullSweep: "Not included",
    totalFreedom: "Included",
  },
  {
    label: "Best for",
    oneAndDone: "One bureau is the problem",
    fullSweep: "Most Arizona clients",
    totalFreedom: "Identity theft and complex damage",
  },
  {
    label: "Guarantee",
    oneAndDone: "100% money-back in 90 days if no removals",
    fullSweep: "100% money-back in 90 days if no removals",
    totalFreedom: "100% money-back in 90 days if no removals",
  },
] as const;

export const servicesDiySection = {
  title: "DIY credit repair vs. professional credit repair in Arizona - the honest comparison",
  sections: [
    {
      heading: "What does DIY credit repair actually look like?",
      paragraphs: [
        "Yes - you can dispute items on your credit report yourself, and the law gives you that right. We're not going to pretend otherwise.",
        "Here's what DIY credit repair in Arizona actually looks like in practice: you pull your three bureau reports, identify the negative items, write dispute letters, mail them to Equifax, Experian, and TransUnion, wait 30 to 45 days for a response, interpret whatever they send back, write follow-up letters using the correct legal language under the FCRA and FDCPA, resubmit, and repeat - for every item, on every bureau, through every round.",
        "Some people do this successfully. It takes months, sometimes longer, and requires a working knowledge of the Fair Credit Reporting Act, the Fair Debt Collection Practices Act, and FACTA. Generic template letters are widely available online. They also rarely work - because the bureaus see thousands of identical disputes every month and know exactly how to respond to them.",
      ],
    },
    {
      heading: "Why professional credit repair gets results DIY usually doesn't",
      paragraphs: [
        "What we do differently is the piece that actually matters: custom disputes. Every item we dispute gets its own letter, its own legal basis, and its own argument - written by someone with 15 years of credit dispute experience and a background in the disputes department of a major financial institution. That's the part that produces results that generic letters and DIY approaches consistently fail to produce.",
        "If you want to try it yourself first - go ahead. If you've already tried and hit walls, you know exactly what you're getting when you call us.",
      ],
    },
  ],
  cta: "See Process",
} as const;

export const servicesNotSureSection = {
  title: "Not sure which credit repair service you need? Start here.",
  body:
    "Not sure which package fits your situation? That's exactly what the free consultation is for. In 10 to 15 minutes, we review your credit reports, identify every removable item, and tell you exactly which package makes sense - and why. No pressure. No obligation.",
  serviceArea:
    "We serve clients from Phoenix, Mesa, Chandler, Gilbert, Scottsdale, Glendale, Tempe, and Peoria across the Metro Phoenix area - as well as Tucson, Flagstaff, Yuma, Prescott, and every city in Arizona. All services are delivered remotely, so wherever you are, we can get started today.",
  cta: "Take 2-Minute Assessment",
} as const;

export const servicesFaq = [
  {
    q: "How much does credit repair cost in Phoenix?",
    a: "State 48 Credit offers three packages: One & Done for single-bureau repair at $299, Full Sweep for all three bureaus at $599, and Total Freedom - our complete restoration package including ChexSystems, InnoVis, and hard inquiry removal - at $849. All pricing is one-time and disclosed before you commit to anything. We also offer optional add-ons starting at $79. There are no monthly fees and no ongoing billing.",
  },
  {
    q: "Which package do most Arizona clients choose?",
    a: "The Full Sweep package - all three bureaus for $599 - is the right choice for the majority of clients. Most people with credit problems have negative items showing on more than one bureau, and lenders pull all three when evaluating a loan application. If you're working toward a mortgage, car loan, or any approval requiring a credit check, all three bureaus typically need to be in order.",
  },
  {
    q: "Which package do I need if I'm trying to qualify for a mortgage in Phoenix?",
    a: "Most clients preparing for an FHA loan, VA loan, or conventional mortgage need the Full Sweep package. Mortgage lenders use a tri-merge credit report - meaning they pull all three bureaus and base their decision on the middle score. If negative items appear on more than one bureau, all three need to be addressed. We can confirm the right package for your specific report during your free consultation.",
  },
  {
    q: "Can I upgrade my package after starting?",
    a: "Yes. If we discover during your case that additional systems need to be addressed - ChexSystems, InnoVis, or additional bureaus - we can discuss upgrading your package. We'll always tell you upfront if we believe a higher tier is warranted, and you're never locked into a scope that doesn't fit your situation.",
  },
  {
    q: "Is there a payment plan?",
    a: "Current payment options include Zelle and Apple Pay. If payment structure is a concern, ask about it during your free consultation and we'll talk through what is possible.",
  },
] as const;

export const servicesFinalCta = {
  title: "Ready to remove negative items from your Arizona credit report?",
  lead: "The consultation is free. The process is fast. The results are real.",
  body:
    "Over 2,041 Arizonans have already made this call - and the average outcome was 8+ items removed and a 150-point score increase. The only thing standing between where your credit is right now and where it needs to be is 10 minutes on the phone.",
  primary: "Start Free Audit",
  secondary: "See Process",
  fearKiller:
    "No payment today. No commitment required. We review your report first, tell you what we can do, and you decide from there.",
} as const;

export const servicesMenuCards = [
  {
    slug: "one-and-done",
    title: "One & Done",
    summary: "Target one bureau when a lender tells you exactly which report is blocking approval.",
    icon: "spark",
    href: `${servicesPagePath}#one-and-done`,
  },
  {
    slug: "full-sweep",
    title: "Full Sweep",
    summary: "Our most popular package: all three bureaus cleaned at the same time for complete results.",
    icon: "home",
    href: `${servicesPagePath}#full-sweep`,
  },
  {
    slug: "total-freedom",
    title: "Total Freedom",
    summary: "Complete restoration across the bureaus, inquiries, ChexSystems, InnoVis, and more.",
    icon: "shield",
    href: `${servicesPagePath}#total-freedom`,
  },
  {
    slug: "solution-selector",
    title: "Which package fits?",
    summary: "Not sure where to start? We will point you to the right package during the free consultation.",
    icon: "scale",
    href: `${servicesPagePath}#solution-selector`,
  },
] as const;

export const servicesNavItems = [
  {
    slug: "credit-repair",
    title: "Credit Repair",
    href: servicesPagePath,
  },
  {
    slug: "inquiry-removal",
    title: "Inquiry Removal",
    href: inquiryRemovalPagePath,
  },
] as const;
