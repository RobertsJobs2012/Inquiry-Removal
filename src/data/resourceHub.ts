export type ResourceHubCard = {
  tag: string;
  title: string;
  description: string;
  href: string;
};

export type ResourceHubGroup = {
  title: string;
  description: string;
  cards: ResourceHubCard[];
};

export const resourceHubGroups: ResourceHubGroup[] = [
  {
    title: "Hard Inquiry Fundamentals",
    description:
      "Start with the core concepts: what hard inquiries are, how they differ from soft checks, how long they stay, and how they can affect a credit profile.",
    cards: [
      {
        tag: "Basics",
        title: "What Is a Hard Inquiry?",
        description: "Learn what creates a hard credit pull, who can see it, and why it matters.",
        href: "/what-is-a-hard-inquiry/",
      },
      {
        tag: "Basics",
        title: "Hard Inquiry vs. Soft Inquiry",
        description: "Compare score impact, visibility, common triggers, and when a check should be soft.",
        href: "/hard-inquiry-vs-soft-inquiry/",
      },
      {
        tag: "Credit impact",
        title: "Hard Inquiry Credit Score Impact",
        description: "Understand the usual scoring effect, timing, and why no exact point change applies to everyone.",
        href: "/hard-inquiry-credit-score-impact/",
      },
      {
        tag: "Credit impact",
        title: "How Many Hard Inquiries Is Too Many?",
        description: "See why lenders evaluate inquiry patterns in context rather than using one universal cutoff.",
        href: "/how-many-hard-inquiries-is-too-many/",
      },
      {
        tag: "Timeline",
        title: "How Long Do Hard Inquiries Stay?",
        description: "Separate the reporting timeline from the shorter period when an inquiry may affect scoring.",
        href: "/how-long-do-hard-inquiries-stay/",
      },
    ],
  },
  {
    title: "Removing and Disputing Hard Inquiries",
    description:
      "Use these guides when you are ready to understand the removal process, prepare a dispute, evaluate timing claims, or verify what changed after an inquiry is removed.",
    cards: [
      {
        tag: "Removal guide",
        title: "How to Remove Hard Inquiries",
        description: "Understand which inquiries may deserve review and the complete removal process.",
        href: "/how-to-remove-hard-inquiries/",
      },
      {
        tag: "Dispute guide",
        title: "How to Dispute a Hard Inquiry",
        description: "Build a specific, documented dispute instead of relying on a generic template.",
        href: "/how-to-dispute-a-hard-inquiry/",
      },
      {
        tag: "DIY guide",
        title: "Hard Inquiry Removal Letter",
        description: "See what a focused inquiry dispute letter should include before you send it.",
        href: "/hard-inquiry-removal-letter/",
      },
      {
        tag: "After removal",
        title: "What Happens When Hard Inquiries Are Removed?",
        description: "Learn what should change on the report and why a specific score increase is never guaranteed.",
        href: "/what-happens-when-hard-inquiries-are-removed/",
      },
      {
        tag: "Timing claims",
        title: "24-Hour Inquiry Removal",
        description: "Understand what can happen quickly and why no service should promise a universal one-day deletion.",
        href: "/24-hour-inquiry-removal/",
      },
    ],
  },
  {
    title: "Experian, Equifax and TransUnion",
    description:
      "Each bureau can show a different inquiry list and use a different inquiry-specific process. Start with the report that actually contains the pull you are reviewing.",
    cards: [
      {
        tag: "Experian",
        title: "Experian Hard Inquiry Removal",
        description: "Review an Experian hard inquiry and understand the bureau-specific next step.",
        href: "/experian-hard-inquiry-removal/",
      },
      {
        tag: "Equifax",
        title: "Equifax Hard Inquiry Removal",
        description: "Identify and review questionable inquiries appearing on an Equifax report.",
        href: "/equifax-hard-inquiry-removal/",
      },
      {
        tag: "TransUnion",
        title: "TransUnion Hard Inquiry Removal",
        description: "Follow the inquiry-specific review path for a TransUnion report.",
        href: "/transunion-hard-inquiry-removal/",
      },
    ],
  },
  {
    title: "Common Hard Inquiry Situations",
    description:
      "Start with what actually happened. These guides separate dealership financing, fraud, duplicate reporting, unfamiliar creditors, mixed files, and other inquiry problems into clearer paths.",
    cards: [
      {
        tag: "Dealership",
        title: "Dealership Hard Inquiries",
        description: "Understand one application that was routed to multiple auto lenders.",
        href: "/dealership-inquiries/",
      },
      {
        tag: "Authorization",
        title: "Unauthorized Hard Inquiries",
        description: "Review a hard pull you do not believe you authorized or otherwise recognize.",
        href: "/unauthorized-inquiries/",
      },
      {
        tag: "Identity theft",
        title: "Identity Theft Hard Inquiries",
        description: "Handle inquiries connected to fraudulent applications or misuse of personal information.",
        href: "/identity-theft-inquiries/",
      },
      {
        tag: "Soft vs. hard",
        title: "Soft Pull Became a Hard Inquiry",
        description: "Review what happened when a no-impact or soft-check representation became a hard pull.",
        href: "/soft-pull-became-hard-inquiry/",
      },
      {
        tag: "Unknown creditor",
        title: "Unrecognized Hard Inquiries",
        description: "Trace an unfamiliar company name before deciding whether the inquiry is actually unauthorized.",
        href: "/unrecognized-inquiries/",
      },
      {
        tag: "Duplicate",
        title: "Duplicate Hard Inquiries",
        description: "Separate true duplicate reporting from legitimate separate lender pulls.",
        href: "/duplicate-inquiries/",
      },
      {
        tag: "Mixed file",
        title: "Incorrect-Person Hard Inquiries",
        description: "Review a pull that may belong to another consumer or result from mixed credit information.",
        href: "/incorrect-person-inquiries/",
      },
      {
        tag: "Recognized inquiry",
        title: "Authorized Inquiry Removal Review",
        description: "Review a recognized application when another factual reporting or disclosure issue may still exist.",
        href: "/authorized-inquiry-removal/",
      },
    ],
  },
  {
    title: "Mortgage, Auto, Credit Cards and Business Funding",
    description:
      "Different credit products create different inquiry patterns. Use these guides to understand rate shopping, dealership routing, card applications, and business financing that reaches personal credit.",
    cards: [
      {
        tag: "Mortgage",
        title: "Mortgage Hard Inquiries",
        description: "Understand preapproval, mortgage rate shopping, repeated pulls, and inquiry review before closing.",
        href: "/mortgage-hard-inquiries/",
      },
      {
        tag: "Auto loan",
        title: "Auto Loan Hard Inquiries",
        description: "See how dealership lender routing and auto-loan rate shopping can create inquiry clusters.",
        href: "/auto-loan-hard-inquiries/",
      },
      {
        tag: "Rate shopping",
        title: "Rate Shopping Hard Inquiries",
        description: "Learn how FICO shopping windows can treat qualifying mortgage, auto, and student-loan inquiries.",
        href: "/rate-shopping-hard-inquiries/",
      },
      {
        tag: "Credit cards",
        title: "Credit Card Hard Inquiries",
        description: "Understand formal card applications, score impact, and when a card-related inquiry deserves review.",
        href: "/credit-card-hard-inquiries/",
      },
      {
        tag: "Business funding",
        title: "Business Funding Hard Inquiries",
        description: "Learn when business financing can create a hard inquiry on an owner or guarantor's personal credit.",
        href: "/business-funding-hard-inquiries/",
      },
    ],
  },
  {
    title: "Credit Access, Permissible Purpose and Verification",
    description:
      "Use these guides when the central question is who accessed your report, why they were allowed to access it, or whether the inquiry should be investigated further.",
    cards: [
      {
        tag: "FCRA basics",
        title: "Permissible Purpose for Hard Inquiries",
        description: "Understand the federal concept behind when a company may obtain a consumer report.",
        href: "/permissible-purpose-hard-inquiries/",
      },
      {
        tag: "Identification",
        title: "Who Pulled My Credit?",
        description: "Use the report entry, date, and creditor details to trace an unfamiliar hard inquiry.",
        href: "/who-pulled-my-credit/",
      },
      {
        tag: "Eligibility",
        title: "Hard Inquiry Removal Eligibility",
        description: "See which facts matter when deciding whether an inquiry deserves a removal review.",
        href: "/eligibility/",
      },
    ],
  },
  {
    title: "Choosing a Service and Getting Help",
    description:
      "Compare service models, understand one-time pricing and the specialist process, or find the geographic service path that applies to you.",
    cards: [
      {
        tag: "Comparison",
        title: "Inquiry Removal vs. Credit Repair",
        description: "Compare a hard-inquiry specialist with broader credit-repair programs and DIY disputes.",
        href: "/inquiry-removal-vs-credit-repair/",
      },
      {
        tag: "Buyer guide",
        title: "Best Hard Inquiry Removal Services",
        description: "Use a transparent checklist to compare specialization, pricing, process, proof, and limitations.",
        href: "/best-hard-inquiry-removal-services/",
      },
      {
        tag: "Process",
        title: "How Inquiry Removal Works",
        description: "See the review, organization, dispute communication, response review, and follow-through process.",
        href: "/how-it-works/",
      },
      {
        tag: "Pricing",
        title: "Hard Inquiry Removal Pricing",
        description: "Compare the one-time $199, $299, and $499 packages based on total inquiry count.",
        href: "/pricing/",
      },
      {
        tag: "Nationwide",
        title: "Areas We Serve",
        description: "Learn how the remote hard inquiry removal process works throughout the United States.",
        href: "/areas-we-serve/",
      },
      {
        tag: "Arizona",
        title: "Arizona Hard Inquiry Removal",
        description: "Explore statewide Arizona service through the same nationwide remote process.",
        href: "/arizona-hard-inquiry-removal/",
      },
    ],
  },
];
