/**
 * Structured data (JSON-LD) for SEO and AI search optimization.
 * Schema must exactly match visible on-page content.
 */

const SITE_URL = "https://www.inquiryremoval.com";
const route = (path: string) => `${SITE_URL}${path === "/" ? "/" : `${path.replace(/\/$/, "")}/`}`;

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Inquiry Removal",
  legalName: "Inquiry Removal LLC",
  url: SITE_URL,
  logo: `${SITE_URL}/inquiry-removal-logo.avif`,
  telephone: "+1-602-377-6626",
  email: "support@inquiryremoval.com",
  description:
    "The only nationwide service that specializes exclusively in hard inquiry removal. Remove unauthorized hard inquiries from Experian, Equifax, and TransUnion credit reports.",
  foundingDate: "2015",
  sameAs: [
    "https://www.facebook.com/inquiryremoval",
    "https://www.linkedin.com/company/inquiryremoval",
    "https://twitter.com/inquiryremoval",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "312",
    bestRating: "5",
    worstRating: "1",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-602-377-6626",
    contactType: "customer service",
    areaServed: "US",
    availableLanguage: ["English", "Spanish"],
  },
};


export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Inquiry Removal",
  url: SITE_URL,
  image: `${SITE_URL}/inquiry-removal-logo.avif`,
  logo: `${SITE_URL}/inquiry-removal-logo.avif`,
  telephone: "+1-602-377-6626",
  priceRange: "$$",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  address: {
    "@type": "PostalAddress",
    addressRegion: "AZ",
    addressCountry: "US",
  },
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: "Hard Inquiry Removal",
      serviceType: "Credit Report Hard Inquiry Removal",
      areaServed: "United States",
    },
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Inquiry Removal",
  url: SITE_URL,
  inLanguage: "en-US",
  publisher: {
    "@type": "Organization",
    name: "Inquiry Removal",
  },
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Credit Report Hard Inquiry Removal",
  provider: {
    "@type": "Organization",
    name: "Inquiry Removal",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  description:
    "Remove unauthorized hard inquiries from Experian, Equifax, and TransUnion credit reports using federal law.",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: "199",
    priceSpecification: {
      "@type": "PriceSpecification",
      price: "199",
      priceCurrency: "USD",
      description: "Flat fee starting at $199 — no monthly charges",
    },
  },
};

export const servicesPageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Hard Inquiry Removal Services",
  serviceType: "Hard Inquiry Removal Service Plans",
  url: route("/services"),
  provider: {
    "@type": "Organization",
    name: "Inquiry Removal",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  description:
    "Flat-fee hard inquiry removal plans based on total inquiry count across Experian, Equifax, and TransUnion, with custom disputes and a 100% money-back guarantee.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Inquiry Removal Plans",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Starter Plan",
        priceCurrency: "USD",
        price: "199",
        description:
          "For 1 to 10 total inquiries across all three bureaus.",
      },
      {
        "@type": "Offer",
        name: "Standard Plan",
        priceCurrency: "USD",
        price: "299",
        description:
          "For 11 to 30 total inquiries across all three bureaus.",
      },
      {
        "@type": "Offer",
        name: "Elite Plan",
        priceCurrency: "USD",
        price: "499",
        description:
          "For 31 or more total inquiries across all three bureaus.",
      },
    ],
  },
};

export const aboutPagePersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Robert Garcia",
  jobTitle: "Founder",
  worksFor: {
    "@type": "Organization",
    name: "Inquiry Removal",
    url: SITE_URL,
  },
  description:
    "Nationally recognized credit repair expert and former senior credit analyst specializing in hard inquiry removal.",
};

export const howItWorksPageSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How Hard Inquiry Removal Works",
  description:
    "A step-by-step explanation of the Inquiry Removal process, from consultation through dispute, monitoring, and final results.",
  step: [
    {
      "@type": "HowToStep",
      name: "Book your free consultation",
      text: "Schedule a free consultation, review every hard inquiry across Experian, Equifax, and TransUnion, and confirm which inquiries qualify for removal under federal law.",
      url: `${route("/how-it-works")}#step-1`,
    },
    {
      "@type": "HowToStep",
      name: "Build and submit custom disputes",
      text: "Within 24 hours of signup, custom disputes are built for each inquiry and submitted simultaneously to all three bureaus using the federal statutes that apply to the case.",
      url: `${route("/how-it-works")}#step-2`,
    },
    {
      "@type": "HowToStep",
      name: "Monitor bureau responses and escalate when needed",
      text: "Bureau responses are monitored over 30 to 90 days. Verified responses are challenged when authorization is not supported, and follow-up arguments are submitted as needed.",
      url: `${route("/how-it-works")}#step-3`,
    },
    {
      "@type": "HowToStep",
      name: "Receive a cleaner report and move forward",
      text: "As inquiries are removed, credit scores update and clients move forward with the mortgage, car loan, or approval goal that brought them in.",
      url: `${route("/how-it-works")}#step-4`,
    },
  ],
};

export const resultsPageSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Inquiry Removal",
  url: route("/results"),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "312",
    bestRating: "5",
    worstRating: "1",
    itemReviewed: {
      "@type": "Organization",
      name: "Inquiry Removal",
    },
  },
};

export const pricingPageServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Hard Inquiry Removal",
  serviceType: "Hard Inquiry Removal",
  url: route("/pricing"),
  provider: {
    "@type": "Organization",
    name: "Inquiry Removal",
    url: SITE_URL,
  },
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: route("/get-started"),
    servicePhone: "+1-602-377-6626",
    availableLanguage: ["English"],
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Inquiry Removal Pricing Plans",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Starter Plan",
        priceCurrency: "USD",
        price: "199",
      },
      {
        "@type": "Offer",
        name: "Standard Plan",
        priceCurrency: "USD",
        price: "299",
      },
      {
        "@type": "Offer",
        name: "Elite Plan",
        priceCurrency: "USD",
        price: "499",
      },
    ],
  },
};

export const pricingPageFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Why do you charge a flat fee instead of monthly like other credit repair companies?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Inquiry Removal charges a flat fee because monthly billing creates a financial incentive to move slowly. A flat fee keeps the company's incentive aligned with the client's outcome: removing inquiries as efficiently as possible.",
      },
    },
    {
      "@type": "Question",
      name: "What if I'm not sure how many inquiries I have? How do I know which plan to choose?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The free consultation is designed to answer that question. Inquiry Removal reviews your credit reports, counts the inquiries across Experian, Equifax, and TransUnion, and tells you which plan fits before you pay anything.",
      },
    },
    {
      "@type": "Question",
      name: "Is this actually worth it? What if my inquiries can't be removed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If the inquiries do not qualify for removal, Inquiry Removal tells you during the free consultation before you pay. If you sign up and no inquiries are removed within 90 days, the 100% money-back guarantee applies after verification.",
      },
    },
    {
      "@type": "Question",
      name: "Why should I pay for this when I could dispute the inquiries myself?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Consumers can dispute inquiries themselves, but the process requires knowing which federal law applies to each inquiry type, how to construct a precise argument, and how to respond when a bureau says the inquiry was verified. Inquiry Removal focuses exclusively on that work.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer payment plans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Inquiry Removal does not offer payment plans at this time. The service is structured as a flat fee of $199, $299, or $499 depending on inquiry volume.",
      },
    },
    {
      "@type": "Question",
      name: "I've paid a credit repair company before and got nothing. Why would this be different?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many credit repair companies treat inquiry removal as one item among many. Inquiry Removal specializes only in hard inquiry removal, which means every dollar of the flat fee is focused on that specific outcome rather than a generalist dispute program.",
      },
    },
  ],
};

export const experianServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Experian Hard Inquiry Removal",
  serviceType: "Credit Inquiry Dispute",
  url: route("/remove-hard-inquiry-experian"),
  provider: {
    "@type": "Organization",
    name: "Inquiry Removal",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Experian Hard Inquiry Removal Plans",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Starter Plan",
        priceCurrency: "USD",
        price: "199",
      },
      {
        "@type": "Offer",
        name: "Standard Plan",
        priceCurrency: "USD",
        price: "299",
      },
      {
        "@type": "Offer",
        name: "Elite Plan",
        priceCurrency: "USD",
        price: "499",
      },
    ],
  },
};

export const experianFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you remove hard inquiries from an Experian credit report?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unauthorized, inaccurate, and impermissible hard inquiries can be disputed and removed from an Experian credit report under the Fair Credit Reporting Act. Legitimately authorized hard inquiries are generally not removable before the two-year window expires, so the key issue is whether the pull was truly authorized and supported by permissible purpose.",
      },
    },
    {
      "@type": "Question",
      name: "How do I dispute a hard inquiry on Experian?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A hard inquiry can be disputed with Experian online, by phone, or by mail, but the outcome depends heavily on how the dispute is framed. Disputes that specifically challenge authorization or permissible purpose perform differently from generic unfamiliar-inquiry disputes that Experian may simply mark as verified.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if Experian says a hard inquiry is verified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A verified response from Experian means the company confirmed the inquiry occurred, not necessarily that the pull was legally authorized. That distinction is often the basis for escalation when a dispute is challenged a second time on authorization and permissible-purpose grounds.",
      },
    },
    {
      "@type": "Question",
      name: "How long do hard inquiries stay on an Experian credit report?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hard inquiries stay on an Experian credit report for two years. Unauthorized hard inquiries can be disputed and removed before that window if the dispute shows the pull lacked authorization or permissible purpose.",
      },
    },
    {
      "@type": "Question",
      name: "How many points does removing a hard inquiry from Experian add to my score?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Removing a hard inquiry from an Experian report often recovers roughly 5 to 10 points per inquiry, though the exact result depends on the starting score and overall credit profile. Larger clusters of unauthorized inquiries can produce much larger score recoveries.",
      },
    },
    {
      "@type": "Question",
      name: "Can I dispute a hard inquiry from Experian that I didn't authorize?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Unauthorized hard inquiries can be disputed with Experian under the Fair Credit Reporting Act, especially when the dispute specifically challenges the authorization of the pull rather than only stating that the inquiry is unfamiliar.",
      },
    },
    {
      "@type": "Question",
      name: "What does permissible purpose mean for an Experian hard inquiry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Permissible purpose is the Fair Credit Reporting Act standard that determines whether a company had a legally valid reason to pull an Experian credit report. If a company lacked permissible purpose, that failure is one of the strongest grounds for disputing and removing the inquiry.",
      },
    },
    {
      "@type": "Question",
      name: "Does disputing a hard inquiry with Experian hurt my credit score?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Filing a dispute with Experian does not hurt a credit score. The only score impact comes from the outcome of the dispute, not from the act of disputing itself.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the Experian hard inquiry dispute process take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Experian generally has 30 days to investigate and respond to a dispute, and some cases can take up to 45 days. Many clients see first removals within 30 to 60 days, while escalated cases may take longer.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Experian dispute center address for removing hard inquiries by mail?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Experian's mailing address for disputes is Experian, P.O. Box 4500, Allen, TX 75013. Mail disputes should clearly explain the basis for the challenge, identify the inquiry, and include supporting documentation where available.",
      },
    },
    {
      "@type": "Question",
      name: "Should I hire someone to remove hard inquiries from my Experian report or do it myself?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A straightforward self-dispute can sometimes work for a single clear inquiry, but professional help is often more useful when there are multiple inquiries, a prior verified response, identity theft, or a need to cite specific FCRA, FDCPA, or FACTA provisions accurately.",
      },
    },
  ],
};

export const equifaxServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Equifax Hard Inquiry Removal",
  serviceType: "Credit Inquiry Dispute",
  url: route("/remove-hard-inquiry-equifax"),
  provider: {
    "@type": "Organization",
    name: "Inquiry Removal",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Equifax Hard Inquiry Removal Plans",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Starter Plan",
        priceCurrency: "USD",
        price: "199",
      },
      {
        "@type": "Offer",
        name: "Standard Plan",
        priceCurrency: "USD",
        price: "299",
      },
      {
        "@type": "Offer",
        name: "Elite Plan",
        priceCurrency: "USD",
        price: "499",
      },
    ],
  },
};

export const equifaxFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you remove hard inquiries from an Equifax credit report?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unauthorized, inaccurate, and impermissible hard inquiries can be disputed and removed from an Equifax credit report under the Fair Credit Reporting Act. Legitimately authorized hard inquiries are generally not removable before the two-year window expires, so the critical questions are authorization and permissible purpose.",
      },
    },
    {
      "@type": "Question",
      name: "How do I dispute a hard inquiry with Equifax?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A hard inquiry can be disputed with Equifax through myEquifax, by phone, or by certified mail, but the result depends heavily on framing and documentation. Disputes that specifically challenge permissible purpose and authorization are materially different from a generic unfamiliar-inquiry dispute.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Equifax dispute mailing address for hard inquiry removal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Equifax Information Services LLC accepts dispute mail at P.O. Box 740256, Atlanta, GA 30374. Certified mail can be useful because it creates a verifiable delivery record that supports later escalation if needed.",
      },
    },
    {
      "@type": "Question",
      name: "What do I do if Equifax denies my hard inquiry dispute?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A denial or verified response from Equifax does not necessarily end the process. The dispute can be escalated by shifting the argument to permissible purpose and, when appropriate, by filing a CFPB complaint supported by the paper trail.",
      },
    },
    {
      "@type": "Question",
      name: "Can I file a CFPB complaint against Equifax for not removing an unauthorized inquiry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Filing a CFPB complaint can be a legitimate escalation step when Equifax has improperly denied a valid dispute. It creates a formal federal record and requires Equifax to respond through a more serious channel.",
      },
    },
    {
      "@type": "Question",
      name: "How do I dispute a hard inquiry on Equifax I didn't authorize?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The strongest Equifax disputes focus on the absence of permissible purpose and authorization, not just unfamiliarity. A dispute that requests documentation of the legal basis for the pull is very different from simply saying the inquiry is not recognized.",
      },
    },
    {
      "@type": "Question",
      name: "How long do hard inquiries stay on an Equifax credit report?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hard inquiries stay on an Equifax credit report for two years. Unauthorized hard inquiries can be disputed and removed before that period if the dispute establishes that the pull lacked proper authorization or permissible purpose.",
      },
    },
    {
      "@type": "Question",
      name: "How many points does removing a hard inquiry from Equifax add to my score?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Removing a hard inquiry from an Equifax report often recovers around 5 to 10 points per inquiry, depending on the broader profile and the number removed at once. Larger clusters of unauthorized pulls can produce much more significant score recovery.",
      },
    },
    {
      "@type": "Question",
      name: "What is myEquifax and how do I dispute a hard inquiry through it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "myEquifax is Equifax's online consumer portal where consumers can access reports, file disputes, and track status. It is a legitimate submission method, but the strength of the dispute still depends on the legal framing and documentation included.",
      },
    },
    {
      "@type": "Question",
      name: "Does disputing a hard inquiry with Equifax hurt my credit score?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Filing a dispute with Equifax does not hurt a credit score. Only the outcome of the dispute affects the score, not the act of disputing itself.",
      },
    },
    {
      "@type": "Question",
      name: "What does permissible purpose mean for an Equifax hard inquiry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Permissible purpose is the Fair Credit Reporting Act standard that determines whether a company had a legally valid reason to pull an Equifax report. If that purpose did not exist, the inquiry is disputable and may be removable.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if Equifax reinserts an inquiry it already deleted?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If Equifax reinserts a previously deleted inquiry, the Fair Credit Reporting Act imposes specific notice requirements. Failure to follow those rules can itself strengthen the consumer's position in a renewed dispute or escalation.",
      },
    },
  ],
};

export const transunionServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "TransUnion Hard Inquiry Removal",
  serviceType: "Credit Inquiry Dispute",
  url: route("/remove-hard-inquiry-transunion"),
  provider: {
    "@type": "Organization",
    name: "Inquiry Removal",
    url: SITE_URL,
  },
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "TransUnion Hard Inquiry Removal Plans",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Starter Plan",
        priceCurrency: "USD",
        price: "199",
      },
      {
        "@type": "Offer",
        name: "Standard Plan",
        priceCurrency: "USD",
        price: "299",
      },
      {
        "@type": "Offer",
        name: "Elite Plan",
        priceCurrency: "USD",
        price: "499",
      },
    ],
  },
};

export const transunionFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you remove hard inquiries from a TransUnion credit report?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unauthorized, inaccurate, and impermissible hard inquiries can be disputed and removed from a TransUnion credit report under the Fair Credit Reporting Act. The key issue is permissible purpose under 15 U.S.C. § 1681b — if the pull was not truly authorized or legally supported, it can be challenged and removed.",
      },
    },
    {
      "@type": "Question",
      name: "What is a regular inquiry on a TransUnion credit report?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A regular inquiry on a TransUnion credit report is the same as a hard inquiry on Experian or Equifax. It carries the same score impact and the same dispute rights when it was obtained without authorization or permissible purpose.",
      },
    },
    {
      "@type": "Question",
      name: "Can I dispute a TransUnion hard inquiry through Credit Karma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Credit Karma's Direct Dispute tool sends real disputes to TransUnion, but it usually does not frame the dispute around permissible purpose or cite the governing FCRA provisions. That is why a verified result through Credit Karma is often just the first step rather than the final outcome.",
      },
    },
    {
      "@type": "Question",
      name: "How do I dispute a hard inquiry with TransUnion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A hard inquiry can be disputed with TransUnion online, by phone, or by certified mail to TransUnion Consumer Solutions, P.O. Box 2000, Chester, PA 19016. The strongest disputes specifically challenge permissible purpose under 15 U.S.C. § 1681b rather than only saying the inquiry is unfamiliar.",
      },
    },
    {
      "@type": "Question",
      name: "What is the TransUnion dispute mailing address for hard inquiry removal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TransUnion Consumer Solutions accepts dispute mail at P.O. Box 2000, Chester, PA 19016. Certified mail can be useful because it creates a verifiable delivery record for any needed follow-up or escalation.",
      },
    },
    {
      "@type": "Question",
      name: "What do I do if TransUnion won't remove an unauthorized inquiry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A verified or denied response from TransUnion does not necessarily end the process. When the response does not reflect a real permissible-purpose investigation, the dispute can be escalated with a follow-up legal challenge and, when appropriate, a CFPB complaint.",
      },
    },
    {
      "@type": "Question",
      name: "Can I dispute a TransUnion hard inquiry I didn't authorize?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Fair Credit Reporting Act supports disputes of unauthorized hard inquiries, especially when the dispute specifically challenges the legal basis for the credit access under 15 U.S.C. § 1681b rather than just flagging the inquiry as unfamiliar.",
      },
    },
    {
      "@type": "Question",
      name: "How long do hard inquiries stay on a TransUnion credit report?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hard inquiries stay on a TransUnion credit report for two years and may appear there as regular inquiries. Unauthorized inquiries can be disputed and removed before the two-year window when the pull lacked authorization or permissible purpose.",
      },
    },
    {
      "@type": "Question",
      name: "How many points does removing a hard inquiry from TransUnion add to my score?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Removing a hard inquiry from TransUnion often recovers roughly 5 to 10 points per inquiry, though the exact result depends on the starting score, the number of inquiries removed, and the overall credit profile.",
      },
    },
    {
      "@type": "Question",
      name: "Does disputing a hard inquiry with TransUnion hurt my credit score?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Filing a dispute with TransUnion does not hurt a credit score. The only score impact comes from the dispute outcome, not from the act of disputing itself.",
      },
    },
    {
      "@type": "Question",
      name: "What is TransUnion's Fraud Victim Assistance Department?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TransUnion's Fraud Victim Assistance Department helps consumers address identity-theft-related credit issues, including fraudulent hard inquiries. Cases supported by identity theft documentation are often among the strongest situations for dispute and removal.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if TransUnion reinserts an inquiry it already removed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If TransUnion reinserts a previously deleted inquiry, the FCRA requires notice and documentation around that reinsertion. Failure to follow that process strengthens the dispute position and can support further escalation.",
      },
    },
    {
      "@type": "Question",
      name: "Can I file a CFPB complaint against TransUnion for not removing an unauthorized inquiry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A CFPB complaint is a legitimate escalation path when a valid TransUnion dispute has been improperly denied. It creates a formal federal record and requires TransUnion to respond through a more serious regulatory channel.",
      },
    },
  ],
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Will this actually work for my situation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — if you have unauthorized, excessive, or fraudulent hard inquiries on your credit report, we can dispute them using federal law. We offer a completely free consultation specifically so you can see exactly what's removable and what your score improvement could look like before you spend anything. No two credit reports are identical, which is why we look at yours first.",
      },
    },
    {
      "@type": "Question",
      name: "Can you really remove hard inquiries — or just dispute them?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We have permanently removed over 100,437 hard inquiries across Experian, Equifax, and TransUnion since 2015. We do this using the FCRA, FDCPA, FACTA, and Metro 2 compliance laws — not generic templates, not guesswork. Our near-100% success rate exists because we know which law applies to which type of inquiry and why. Disputing and removing are the same outcome when you know what you're doing.",
      },
    },
    {
      "@type": "Question",
      name: "How soon will I see results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Some clients see their first removals in as few as 14 days. Most see full results within 30 to 90 days. We are transparent about timelines from the very first conversation — we work as fast as the law allows because we know your goals are on a real schedule.",
      },
    },
    {
      "@type": "Question",
      name: "What if I've already tried another company and got nothing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We hear this regularly, and the answer is almost always the same: the company you worked with was a generalist. They treated inquiry removal as one item on a long checklist, using the same strategy they'd use for a collection or a late payment. Inquiry removal requires a completely different approach — specific federal laws applied to specific inquiry types, sent to specific bureaus in a specific way. That specialization is the only thing we do. It's why we succeed where others stall.",
      },
    },
  ],
};
