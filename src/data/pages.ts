export type PageSection = {
  heading: string;
  body: string[];
  bullets?: string[];
};

export type SitePage = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  aside: string[];
  sections: PageSection[];
  kind?: "resources" | "analysis" | "scenario";
};

export const pages: SitePage[] = [
  {
    slug: "eligibility",
    eyebrow: "What can be disputed",
    title: "The facts decide—not the sales pitch.",
    description:
      "Understand the situations that may warrant a closer review and the outcomes no responsible inquiry specialist should promise in advance.",
    aside: [
      "Worth reviewing",
      "What we do not promise",
      "Get a specialist review",
    ],
    sections: [
      {
        heading: "Situations worth reviewing.",
        body: [
          "A hard inquiry may deserve a closer look when you do not recognize it, did not knowingly authorize it, believe your information was used fraudulently, see inaccurate information, or question whether there was permissible purpose.",
        ],
        bullets: [
          "Unknown company or creditor",
          "No remembered authorization",
          "Potential identity theft or fraud",
          "Inaccurate inquiry information",
          "Questions about permissible purpose",
        ],
      },
      {
        heading: "What we do not promise.",
        body: [
          "We do not promise removal of accurate information simply because someone regrets applying. We do not guarantee that every inquiry will be removed or that a credit score will increase by a particular amount.",
        ],
        bullets: [
          "No automatic eligibility",
          "No predetermined deletion outcome",
          "No guaranteed score increase",
          "No blanket treatment of every inquiry",
        ],
      },
      {
        heading: "Not sure where you fit?",
        body: [
          "That is exactly what the free analysis is for. A specialist can help you organize the inquiry information and understand which questions are worth asking next.",
        ],
      },
    ],
  },
  {
    slug: "results",
    eyebrow: "Evidence center",
    title: "Real cases. Documented outcomes.",
    description:
      "A transparent evidence center designed for permissioned, redacted case documentation—not vague claims or unverified success counters.",
    aside: ["Documentation standard", "Case format", "Individual results vary"],
    sections: [
      {
        heading: "Proof before persuasion.",
        body: [
          "This page is structured to publish verified case material only after substantiation and client permission. Final case evidence will be redacted to protect private information.",
        ],
        bullets: [
          "Situation and bureau",
          "Number reviewed or disputed",
          "Documented outcome",
          "Timeline",
          "Documentation status",
        ],
      },
      {
        heading: "Context stays attached.",
        body: [
          "When authentic score data is available, it will be presented as client-reported context during the service period—not as proof that inquiry removals alone caused the movement.",
        ],
      },
      {
        heading: "Case library coming next.",
        body: [
          "Verified cases and redacted documentation will be added during the content and compliance phase. Until then, no fictional result is presented as real.",
        ],
        bullets: [
          "Dealership",
          "Identity theft",
          "Unauthorized",
          "Experian",
          "Equifax",
          "TransUnion",
        ],
      },
    ],
  },
  {
    slug: "about",
    eyebrow: "Why we specialize",
    title: "Built around one problem.",
    description:
      "Inquiry Removal was built to focus exclusively on hard inquiry review and dispute support—nothing else.",
    aside: ["Founder story", "Specialization", "Operating philosophy"],
    sections: [
      {
        heading: "A firsthand beginning.",
        body: [
          "Robert Garcia’s final founder story will explain the personal experience that led to Inquiry Removal. Professional photography and substantiated background details will be added with the final content.",
        ],
      },
      {
        heading: "Why inquiries only?",
        body: [
          "Specialization creates a clearer process, a more focused service, and a brand consumers can understand immediately. Hard inquiries are not one category among many here—they are the category.",
        ],
      },
      {
        heading: "Calm, precise, transparent.",
        body: [
          "The company is designed around evidence, honest eligibility language, defined scope, and explanations that do not require consumers to decode hype.",
        ],
      },
    ],
  },
  {
    slug: "resources",
    eyebrow: "Resource center",
    title: "Understand the report before you challenge it.",
    description:
      "Plain-language education about hard inquiries, authorization, credit bureaus, identity theft, dealership inquiries, and consumer dispute rights.",
    aside: ["Hard inquiry fundamentals", "Bureau guides", "Situation guides"],
    kind: "resources",
    sections: [
      {
        heading: "Hard inquiry fundamentals",
        body: [
          "Final educational articles will be written to explain first and sell second.",
        ],
        bullets: [
          "Hard vs. soft inquiries",
          "How long inquiries remain",
          "Rate shopping",
          "Permissible purpose",
          "DIY dispute rights",
          "Common misconceptions",
        ],
      },
      {
        heading: "Bureau and situation guides",
        body: [
          "Dedicated educational pathways will cover Experian, Equifax, TransUnion, dealership inquiries, unauthorized inquiries, identity theft, and preparing for financing.",
        ],
      },
    ],
  },
  {
    slug: "faq",
    eyebrow: "Questions answered",
    title: "Clarity without fine-print fog.",
    description:
      "Straight answers about eligibility, process, pricing, outcomes, score context, DIY disputes, and what to expect from an inquiry review.",
    aside: ["Eligibility", "Process", "Outcomes", "Consumer rights"],
    sections: [
      {
        heading: "Can every inquiry be removed?",
        body: [
          "No. Each inquiry and its surrounding circumstances must be reviewed. Accurate, authorized inquiries are not automatically removable.",
        ],
      },
      {
        heading: "Can I do this myself?",
        body: [
          "Yes. Consumers can dispute inaccurate credit-report information directly. Our value is specialized review, organization, documentation, process management, and follow-through.",
        ],
      },
      {
        heading: "Will my score increase?",
        body: [
          "Credit scores are affected by many factors. No particular score movement is promised or attributed solely to inquiry disputes.",
        ],
      },
      {
        heading: "Do you cover all three bureaus?",
        body: [
          "The service is designed to review inquiry information appearing on Experian, Equifax, and TransUnion reports.",
        ],
      },
    ],
  },
  {
    slug: "free-inquiry-analysis",
    eyebrow: "Free personal review",
    title: "Get your free inquiry review.",
    description:
      "Tell us what happened and what you want removed. A specialist will help organize your inquiry-removal next steps.",
    aside: ["No pressure", "No monthly fees", "Response within 24 hours"],
    kind: "analysis",
    sections: [
      {
        heading: "Your intake, designed around context.",
        body: [
          "The final secure intake and consent workflow will be connected before launch. The form below establishes the planned experience without transmitting private information yet.",
        ],
      },
    ],
  },
  {
    slug: "get-started",
    eyebrow: "Free personal review",
    title: "Get your free inquiry review.",
    description:
      "Tell us what happened and what you want removed. A specialist will help organize your inquiry-removal next steps.",
    aside: ["No pressure", "No monthly fees", "Response within 24 hours"],
    kind: "analysis",
    sections: [
      {
        heading: "Your intake, designed around context.",
        body: [
          "The secure intake and consent workflow is being connected. This preview lets you review the experience without transmitting private information.",
        ],
      },
    ],
  },
  {
    slug: "dealership-hard-inquiries",
    kind: "scenario",
    eyebrow: "Situation guide",
    title: "One dealership. Multiple inquiries.",
    description:
      "Understand how a dealership application can reach multiple lenders and why authorization and scoring considerations still require an individual review.",
    aside: ["Application routing", "Authorization", "Rate-shopping context"],
    sections: [
      {
        heading: "Why several inquiries can appear.",
        body: [
          "A dealership may submit information to multiple potential lenders. That can result in several inquiries appearing across one or more reports.",
        ],
        bullets: [
          "Identify every listed lender",
          "Compare inquiry dates",
          "Review what was authorized",
          "Consider rate-shopping context",
        ],
      },
      {
        heading: "Multiple does not automatically mean disputable.",
        body: [
          "The number of inquiries alone does not establish that they were unauthorized or inaccurate. The surrounding facts matter.",
        ],
      },
    ],
  },
  {
    slug: "unauthorized-hard-inquiries",
    kind: "scenario",
    eyebrow: "Situation guide",
    title: "When authorization is the question.",
    description:
      "A focused guide to inquiries you do not remember authorizing and the information worth gathering before deciding what to do next.",
    aside: ["Recognition", "Authorization", "Documentation"],
    sections: [
      {
        heading: "Start by identifying the inquiry.",
        body: [
          "Record the company name, bureau, and date shown on the report. Consider whether the name may differ from a brand or lender you recognize.",
        ],
        bullets: [
          "Company or furnisher name",
          "Inquiry date",
          "Reporting bureau",
          "Related application or transaction",
        ],
      },
      {
        heading: "A closer review may be appropriate.",
        body: [
          "If the inquiry remains unfamiliar or you do not believe you knowingly authorized it, a specialist review can help organize the next questions.",
        ],
      },
    ],
  },
  {
    slug: "dealership-inquiries",
    kind: "scenario",
    eyebrow: "Dealership inquiry removal",
    title: "One application should not tell the wrong story.",
    description:
      "Review dealership hard inquiries created when one financing application is sent to multiple potential lenders.",
    aside: ["Application routing", "Multiple lenders", "Focused review"],
    sections: [
      {
        heading: "Dealership shotgunning can create an inquiry cluster.",
        body: [
          "A dealership may send one application to multiple lenders. We review the inquiry dates, listed lender names, affected reports, and what you understood or authorized at the time.",
        ],
        bullets: [
          "Identify every listed lender",
          "Compare inquiry dates",
          "Review the application and disclosures",
          "Organize the affected bureau reports",
        ],
      },
      {
        heading: "Start with a personal review.",
        body: [
          "The number of inquiries alone does not determine the outcome. The free review helps establish what happened and which removal path may be available.",
        ],
      },
    ],
  },
  {
    slug: "unauthorized-inquiries",
    kind: "scenario",
    eyebrow: "Unauthorized inquiry removal",
    title: "When you did not authorize the credit check.",
    description:
      "Get a focused review of hard inquiries you do not recognize or do not believe you authorized.",
    aside: [
      "Identify the inquiry",
      "Review authorization",
      "Organize next steps",
    ],
    sections: [
      {
        heading: "Start with the exact report information.",
        body: [
          "Record the company name, inquiry date, and credit bureau. A listed name can differ from the business name you remember, so identification comes before assumptions.",
        ],
        bullets: [
          "Company or furnisher name",
          "Inquiry date",
          "Reporting bureau",
          "Related application or transaction",
        ],
      },
      {
        heading: "We review what happened.",
        body: [
          "If the inquiry remains unfamiliar or you do not believe you knowingly authorized it, we help organize the facts and determine the available removal approach.",
        ],
      },
    ],
  },
  {
    slug: "soft-pull-became-hard-inquiry",
    kind: "scenario",
    eyebrow: "Soft-pull promise",
    title: "You were told it would not affect your credit.",
    description:
      "Review a hard inquiry that appeared after a company described its credit check as a soft pull or no-impact eligibility check.",
    aside: ["What was promised", "What was reported", "Available next steps"],
    sections: [
      {
        heading: "Preserve what you were told.",
        body: [
          "Save the application language, advertisement, email, text message, or other disclosure that described the check as a soft inquiry or said it would not affect your credit.",
        ],
        bullets: [
          "Capture the original offer language",
          "Record the inquiry date and bureau",
          "Identify the company shown on the report",
          "Keep related emails or messages",
        ],
      },
      {
        heading: "Compare the promise with the report.",
        body: [
          "A focused review connects what you were told with what actually appeared on your credit report and helps determine the available removal path.",
        ],
      },
    ],
  },
  {
    slug: "identity-theft-inquiries",
    kind: "scenario",
    eyebrow: "Situation guide",
    title: "Unknown inquiries can be a warning sign.",
    description:
      "Educational guidance for consumers who suspect their information may have been used fraudulently.",
    aside: [
      "Recognize the sign",
      "Protect your information",
      "Review the report",
    ],
    sections: [
      {
        heading: "Treat suspected identity theft seriously.",
        body: [
          "An unfamiliar inquiry may have an innocent explanation, but it can also warrant prompt investigation. Protecting accounts and identity information may be more urgent than the inquiry dispute itself.",
        ],
        bullets: [
          "Review all three reports",
          "Check related accounts and alerts",
          "Document unfamiliar activity",
          "Use official identity-theft resources",
        ],
      },
      {
        heading: "Inquiry support is one part of the response.",
        body: [
          "Final content will include appropriate official resources and clear limits on what Inquiry Removal does and does not provide.",
        ],
      },
    ],
  },
  {
    slug: "duplicate-inquiries",
    kind: "scenario",
    eyebrow: "Duplicate inquiry removal",
    title: "When the same inquiry appears more than once.",
    description:
      "Review repeated company names, matching dates, and multiple hard inquiries connected to one financing event.",
    aside: ["Compare the entries", "Connect the event", "Address each report"],
    sections: [
      {
        heading: "Repeated entries need context.",
        body: [
          "Duplicates may appear on one report or across multiple reports. We compare creditor names, dates, bureau records, and the application event behind them.",
        ],
        bullets: [
          "Match company names and dates",
          "Compare affected bureau reports",
          "Connect related entries to one event",
          "Separate unrelated inquiries",
        ],
      },
      {
        heading: "Every repeated inquiry gets organized.",
        body: [
          "The free review helps determine whether the entries are true duplicates and how each inquiry should be addressed in the removal process.",
        ],
      },
    ],
  },
  {
    slug: "unrecognized-inquiries",
    kind: "scenario",
    eyebrow: "Unrecognized inquiry removal",
    title: "When the creditor name does not look familiar.",
    description:
      "Identify the company behind an unfamiliar report entry and determine what happened before moving forward with removal.",
    aside: ["Identify the name", "Trace the application", "Review the inquiry"],
    sections: [
      {
        heading: "The reporting name may be different.",
        body: [
          "A store card, dealership, financing offer, or online application may appear under the name of a bank or third-party lender rather than the business name you remember.",
        ],
        bullets: [
          "Record the exact reporting name",
          "Check the inquiry date and bureau",
          "Compare recent applications",
          "Identify the company behind the entry",
        ],
      },
      {
        heading: "Identification comes before the removal path.",
        body: [
          "We help determine the source of the inquiry, connect it to what you remember, and explain the next step based on the complete story.",
        ],
      },
    ],
  },
  {
    slug: "incorrect-person-inquiries",
    kind: "scenario",
    eyebrow: "Incorrect-person inquiry removal",
    title: "When the inquiry appears to belong to someone else.",
    description:
      "Review hard inquiries connected to mixed files, incorrect identifying information, data-entry problems, or another person’s activity.",
    aside: [
      "Document the mismatch",
      "Separate the records",
      "Correct the report",
    ],
    sections: [
      {
        heading: "You should not carry someone else’s inquiry.",
        body: [
          "An inquiry may appear because of incorrect identifying information, a mixed credit file, a data-entry problem, or another person’s application activity.",
        ],
        bullets: [
          "Identify the incorrect entry",
          "Compare personal information",
          "Document the mismatch",
          "Review every affected bureau",
        ],
      },
      {
        heading: "We organize the correction path.",
        body: [
          "Inquiry Removal helps document the mismatch and handle the inquiry-removal process with the companies and credit bureaus involved.",
        ],
      },
    ],
  },
  {
    slug: "authorized-inquiry-removal",
    kind: "scenario",
    eyebrow: "Authorized inquiry review",
    title: "You authorized it, but still want it reviewed.",
    description:
      "Examine an inquiry you remember authorizing when the disclosure, reporting, outcome, or surrounding circumstances deserve a closer look.",
    aside: [
      "Tell the full story",
      "Review the disclosure",
      "Understand the path",
    ],
    sections: [
      {
        heading: "Remembering the application is only one fact.",
        body: [
          "Perhaps the application never led anywhere, the disclosure was unclear, the inquiry appeared differently than expected, or your goals have changed.",
        ],
        bullets: [
          "Application circumstances",
          "Disclosure language",
          "Company identity and timing",
          "How the inquiry was reported",
        ],
      },
      {
        heading: "Start with an honest review.",
        body: [
          "Tell us what happened. We examine the complete story and explain the available inquiry-removal path and next step.",
        ],
      },
    ],
  },
  ...["experian", "equifax", "transunion"].map((bureau) => ({
    slug: `${bureau}-inquiry-disputes`,
    eyebrow: "Bureau guide",
    title: `${bureau[0].toUpperCase() + bureau.slice(1)} inquiry disputes.`,
    description: `Understand how hard inquiry information can appear on a ${bureau[0].toUpperCase() + bureau.slice(1)} credit report and the circumstances worth reviewing.`,
    aside: ["Read the report", "Review the facts", "Understand next steps"],
    sections: [
      {
        heading: `Start with the ${bureau[0].toUpperCase() + bureau.slice(1)} report.`,
        body: [
          "Identify the company, inquiry date, and surrounding application context before making assumptions about authorization or accuracy.",
        ],
        bullets: [
          "Confirm the furnisher name",
          "Record the inquiry date",
          "Compare related applications",
          "Preserve relevant documentation",
        ],
      },
      {
        heading: "Every bureau response requires context.",
        body: [
          "Final bureau-specific content and dispute guidance will be completed during the legal and editorial review phase.",
        ],
      },
    ],
  })),
  {
    slug: "guarantee",
    eyebrow: "90-day framework",
    title: "A guarantee should be clear enough to understand.",
    description:
      "The guarantee framework will define every trigger, qualification, responsibility, and refund step before launch.",
    aside: ["Trigger", "Qualifications", "Responsibilities", "Refund process"],
    sections: [
      {
        heading: "No hidden traps.",
        body: [
          "The final guarantee terms will state what triggers the guarantee, what qualifies, what the consumer must do, what the company must do, and exactly how refunds work.",
        ],
        bullets: [
          "Plain-language eligibility",
          "Specific time period",
          "Documented responsibilities",
          "Clear request process",
          "Defined refund method",
        ],
      },
      {
        heading: "Final terms require legal review.",
        body: [
          "This page intentionally avoids inventing binding terms before the service workflow, contracts, fee timing, and legal requirements are finalized.",
        ],
      },
    ],
  },
  ...[
    "privacy",
    "terms",
    "consumer-disclosures",
    "cancellation",
    "accessibility",
    "contact",
    "credit-services-agreement",
    "text-message-terms",
    "cookie-policy",
    "results-disclosure",
  ].map((slug) => ({
    slug,
    eyebrow: "Trust & legal",
    title: slug
      .split("-")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" "),
    description: `The final ${slug.replaceAll("-", " ")} policy will be completed before public launch.`,
    aside: ["Draft framework", "Legal review required", "Final copy pending"],
    sections: [
      {
        heading: "Policy framework prepared.",
        body: [
          "This page is reserved in the site architecture so the final reviewed policy can be published at a permanent, accessible URL.",
        ],
        bullets: [
          "Plain-language summary",
          "Effective date",
          "Consumer rights and responsibilities",
          "Contact information",
          "Version history where appropriate",
        ],
      },
      {
        heading: "Final language pending.",
        body: [
          "Qualified counsel and the business owner will finalize this content before traffic, intake, or payment collection begins.",
        ],
      },
    ],
  })),
];
