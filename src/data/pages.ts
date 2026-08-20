export type PageSection = {
  heading: string;
  body: string[];
  bullets?: string[];
};

export type SitePage = {
  slug: string;
  eyebrow: string;
  title: string;
  seoTitle?: string;
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
    slug: "resources",
    eyebrow: "Resource center",
    title: "Understand Hard Inquiries and Your Next Step.",
    description:
      "Plain-language education about hard inquiries, authorization, credit bureaus, identity theft, dealership inquiries, and consumer dispute rights.",
    aside: ["Hard inquiry fundamentals", "Bureau guides", "Situation guides"],
    kind: "resources",
    sections: [
      {
        heading: "Begin with the hard inquiry fundamentals.",
        body: [
          "Understand the difference between hard and soft inquiries, how inquiry information appears across the three major credit bureaus, and why the circumstances behind an entry matter.",
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
        heading: "Start with the situation that matches what happened.",
        body: [
          "Use the situation guides to explore dealership inquiries, unfamiliar companies, possible identity theft, duplicate reporting, and other common reasons consumers request a closer review.",
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
    slug: "contact",
    eyebrow: "Contact Inquiry Removal",
    title: "Speak with a hard inquiry specialist.",
    description:
      "Contact Inquiry Removal by phone for a focused review of hard inquiries appearing on Experian, Equifax, or TransUnion.",
    aside: ["Nationwide service", "All three bureaus", "Direct phone support"],
    sections: [
      {
        heading: "A direct human contact method.",
        body: [
          "Call Inquiry Removal to discuss the inquiries on your credit reports and the circumstances surrounding them. Do not provide Social Security numbers, dates of birth, report logins, payment information, or other highly sensitive information during the initial conversation.",
        ],
      },
      {
        heading: "What to have available.",
        body: [
          "An estimate of the inquiry count, the names of the affected credit bureaus, and a short explanation of what happened are enough to begin a free personal review.",
        ],
        bullets: [
          "Approximate inquiry count",
          "Affected credit reports",
          "The event or application involved",
          "What you are preparing for next",
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
    slug: "unauthorized-inquiries",
    kind: "scenario",
    eyebrow: "Unauthorized inquiry removal",
    title: "When you did not authorize the credit check.",
    description:
      "Get a focused review of hard inquiries you do not recognize or do not believe you authorized, including the report details and documentation to gather.",
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
      "Learn what to do when unfamiliar hard inquiries may be connected to identity theft, including what to document and when to consider broader fraud protections.",
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
          "If identity theft is suspected, inquiry review should be considered alongside broader identity-protection steps. Official recovery resources, account monitoring, fraud alerts, and credit freezes may also be appropriate depending on the circumstances.",
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
    seoTitle: "Incorrect-Person Hard Inquiry Review | Inquiry Removal",
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
];
