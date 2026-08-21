export type PageSection = {
  heading: string;
  body: string[];
  bullets?: string[];
  links?: Array<{
    label: string;
    href: string;
  }>;
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
    eyebrow: "Hard inquiry removal eligibility",
    title: "Can Your Hard Inquiries Be Removed? Start With a Free Review",
    seoTitle: "Hard Inquiry Removal Eligibility | Inquiry Removal",
    description:
      "Hard inquiry removal starts with the entries you want gone. Show us what happened, and we will review the reports and explain the removal path.",
    aside: ["Your inquiry list", "Your situation", "Your removal path"],
    sections: [
      {
        heading: "Which Hard Inquiries Do You Want Removed?",
        body: [
          "Start with the inquiries that are bothering you, whether they came from a dealership, an unfamiliar creditor, identity theft, a duplicate entry, an unexpected hard pull, or an application you remember making.",
          "You do not need to diagnose the inquiry before contacting us. Show us what appears on the reports and tell us what happened. We will organize the details and explain the removal approach.",
        ],
        bullets: [
          "Dealership and lender inquiries",
          "Unauthorized or unfamiliar inquiries",
          "Identity-theft inquiries",
          "Duplicate or repeated inquiries",
          "Unexpected hard pulls",
          "Other inquiries you want reviewed for removal",
        ],
      },
      {
        heading: "What Does Inquiry Removal Review?",
        body: [
          "We look at the exact report entries, creditor names, dates, affected bureaus, what happened during the application or transaction, and any information that helps explain the inquiry. The goal is to turn a confusing list into a clear removal strategy.",
        ],
        bullets: [
          "Experian, Equifax, and TransUnion",
          "Inquiry names and dates",
          "Application or dealership context",
          "What you were told",
          "What you want removed",
        ],
      },
      {
        heading: "Ready to Find Your Removal Path?",
        body: [
          "Start with the free inquiry review. If the service fits what you want handled, we will confirm the total inquiry count, explain the one-time package, and take the process from there.",
        ],
      },
    ],
  },
  {
    slug: "resources",
    eyebrow: "Hard inquiry resource center",
    title: "Hard Inquiry Resources, Guides & Answers for All Three Bureaus",
    seoTitle: "Hard Inquiry Resources | Guides & Answers | Inquiry Removal",
    description:
      "Hard inquiry resources and guides for removal, disputes, timelines, Experian, Equifax, TransUnion, and common situations. Explore the resource center.",
    aside: ["Hard inquiry fundamentals", "Bureau guides", "Situation guides"],
    kind: "resources",
    sections: [
      {
        heading: "Which hard inquiry resources should you start with?",
        body: [
          "Start with the difference between hard and soft inquiries, how inquiry information appears across the three major credit bureaus, and why the circumstances behind an entry matter.",
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
    slug: "transunion-hard-inquiry-removal",
    kind: "scenario",
    eyebrow: "TransUnion inquiry guide",
    title: "How to Review and Dispute Hard Inquiries on TransUnion.",
    seoTitle: "How to Remove Hard Inquiries From TransUnion | Inquiry Removal",
    description:
      "Learn how to identify, verify, and dispute inaccurate, unfamiliar, or potentially fraudulent hard inquiries appearing on a TransUnion credit report.",
    aside: [
      "Find the exact inquiry",
      "Verify what happened",
      "Use the correct dispute path",
    ],
    sections: [
      {
        heading: "Start with the exact TransUnion inquiry entry.",
        body: [
          "Use a current TransUnion credit report and record the company name, inquiry date, and any contact information shown. A credit-monitoring summary may abbreviate or rename the company, so the full report is the stronger starting point.",
        ],
        bullets: [
          "Company or furnisher name as reported",
          "Date of the hard inquiry",
          "Application or transaction you remember",
          "Any unfamiliar names or duplicate entries",
        ],
      },
      {
        heading: "Decide whether the inquiry is inaccurate or unauthorized.",
        body: [
          "An unfamiliar name is not automatically an unauthorized inquiry. A lender, dealership, finance company, or parent company may appear under a name that differs from the brand you remember.",
          "Accurate inquiries connected to an application you authorized are not automatically removable simply because they are unwanted. The facts, authorization, permissible purpose, and supporting records determine whether a dispute is appropriate. No deletion or score change can be guaranteed in advance.",
        ],
      },
      {
        heading: "Follow TransUnion’s inquiry-specific guidance.",
        body: [
          "TransUnion recommends contacting the company that placed an inquiry you do not recognize and asking why it accessed your report. If someone applied in your name, TransUnion explains that the company can send a deletion request directly to TransUnion, or you can mail information showing that the inquiry was fraudulent. TransUnion currently states that this inquiry-specific process is not available online.",
        ],
        links: [
          {
            label: "Read TransUnion’s official dispute guidance",
            href: "https://www.transunion.com/credit-disputes/credit-disputes-faq",
          },
        ],
      },
      {
        heading: "Remember that consumers can dispute errors for free.",
        body: [
          "The Consumer Financial Protection Bureau explains that consumers have the right to dispute inaccurate credit-report information. Its guidance recommends contacting both the credit reporting company and the company that supplied the information, clearly explaining the error, including supporting copies, and keeping records of what was sent.",
        ],
        links: [
          {
            label: "Read the CFPB’s credit-report dispute guide",
            href: "https://www.consumerfinance.gov/ask-cfpb/how-do-i-dispute-an-error-on-my-credit-report-en-314/",
          },
        ],
      },
      {
        heading: "Prepare a focused TransUnion review.",
        body: [
          "If you want help organizing the inquiry names, dates, authorization facts, and supporting documentation, begin with a free personal review. Do not send Social Security numbers, report logins, payment information, or original identity documents through the website form.",
        ],
        bullets: [
          "Current TransUnion report",
          "Inquiry names and dates",
          "Related applications or dealership visits",
          "Emails, disclosures, or other authorization records",
        ],
      },
    ],
  },
  {
    slug: "areas-we-serve",
    eyebrow: "Nationwide hard inquiry removal",
    title: "Hard Inquiry Removal Nationwide Across All Three Credit Bureaus",
    seoTitle: "Hard Inquiry Removal Nationwide | USA | Inquiry Removal",
    description:
      "Hard inquiry removal nationwide across Experian, Equifax, and TransUnion. Our remote process lets you use a focused specialist anywhere in the U.S.",
    aside: ["Nationwide service", "Remote process", "All 3 bureaus"],
    sections: [
      {
        heading: "Can Inquiry Removal Help You Anywhere in the United States?",
        body: [
          "Yes. Inquiry Removal serves consumers nationwide through a remote process. You do not need to live near an office to have a specialist organize your inquiries, prepare the removal communications, review responses, and handle the follow-through.",
        ],
      },
      {
        heading: "All Three Credit Bureaus. One Focused Removal Process.",
        body: [
          "Experian, Equifax, and TransUnion can show different inquiry lists. We work with the reports actually affected in your case and keep the inquiry-removal process organized across all of them.",
        ],
        bullets: [
          "Experian hard inquiries",
          "Equifax hard inquiries",
          "TransUnion hard inquiries",
          "Dealership inquiry clusters",
          "Unauthorized and identity-theft inquiries",
          "Duplicate and unexpected hard pulls",
        ],
      },
      {
        heading: "Ready to Start Removing Your Hard Inquiries?",
        body: [
          "Start with a free personal review from anywhere in the country. Tell us what happened and how many inquiries you want handled. We will confirm the one-time package that fits your total count and explain what happens next.",
        ],
      },
    ],
  },
  {
    slug: "faq",
    eyebrow: "Hard inquiry removal questions",
    title: "Hard Inquiry Removal FAQs: Service, Pricing, Timing & Results",
    seoTitle: "Hard Inquiry Removal FAQ | Clear Answers | Inquiry Removal",
    description:
      "Hard inquiry removal FAQs covering all three bureaus, one-time packages, timing, dealership inquiries, the removal process, and what happens next.",
    aside: ["All 3 bureaus", "One-time packages", "Removal process", "Results and timing"],
    sections: [
      {
        heading: "Can You Remove Hard Inquiries From All Three Credit Bureaus?",
        body: [
          "Yes. Inquiry Removal works with hard inquiries appearing on Experian, Equifax, and TransUnion. If more than one report is affected, the same one-time package can include all affected bureaus based on the total inquiry count.",
        ],
      },
      {
        heading: "How Does Inquiry Removal Handle the Process for Me?",
        body: [
          "You provide the affected reports and tell us which inquiries you want removed. We organize the entries, prepare and send the dispute communications, review responses, track removals, and continue the follow-through as needed under your service.",
        ],
      },
      {
        heading: "How Much Does Hard Inquiry Removal Cost?",
        body: [
          "Pricing is one time: $199 for 1 to 10 total hard inquiries, $299 for 11 to 30, and $499 for 31 or more. There is no monthly membership fee.",
        ],
      },
      {
        heading: "How Quickly Can Hard Inquiries Be Removed?",
        body: [
          "Some removals can appear in as little as seven days. Many cases take longer and clients should allow up to 90 days. Rare, more complicated situations can extend to 120 days because companies and bureaus respond on different schedules.",
        ],
      },
      {
        heading: "What If a Dealership Ran My Credit Multiple Times?",
        body: [
          "Show us the dealership-related inquiries across the affected reports. We organize the lender names, dates, and bureaus tied to the visit, then handle the inquiry-removal process and response follow-through.",
        ],
      },
      {
        heading: "What If I Remember the Application but Still Want the Inquiry Removed?",
        body: [
          "Tell us the complete story. We review what happened, how the inquiry was disclosed and reported, the company involved, and the surrounding circumstances, then explain the removal path available for that inquiry.",
        ],
      },
      {
        heading: "Do I Have to Send the Disputes Myself?",
        body: [
          "No. Inquiry Removal prepares and sends the dispute communications for you. Your main job is to provide accurate information and let us know when responses or report updates arrive.",
        ],
      },
      {
        heading: "What If the First Response Does Not Remove Every Inquiry?",
        body: [
          "We review what happened and continue the included follow-through with additional rounds as needed under your service agreement. The service is not designed as a one-letter transaction.",
        ],
      },
      {
        heading: "Can Every Hard Inquiry Be Removed?",
        body: [
          "No company can promise the outcome of every inquiry in advance. That is why the first step is a review of the actual report entries and what happened, rather than making you decide on your own before speaking with us.",
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