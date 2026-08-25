export type GuideCard = {
  title: string;
  body: string;
};

export type GuideSection = {
  heading: string;
  body: string[];
  bullets?: string[];
  cards?: GuideCard[];
  visual?: {
    title: string;
    items: string[];
  };
};

export type GuideFaq = {
  question: string;
  answer: string;
};

export type GuidePage = {
  slug: string;
  kind: "service" | "article";
  category: "resources" | "situations";
  eyebrow: string;
  title: string;
  seoTitle: string;
  description: string;
  supporting: string;
  primaryCta: string;
  secondaryCta: string;
  secondaryTarget: string;
  quickTitle: string;
  quickAnswer: string;
  takeaways: string[];
  sections: GuideSection[];
  faqs: GuideFaq[];
  related: Array<{ label: string; href: string }>;
  sources: Array<{ label: string; href: string }>;
};

const proofDisclaimer =
  "Individual results vary. No specific deletion, timeline, score increase, or approval is guaranteed.";

export const guidePages: GuidePage[] = [
  {
    slug: "how-to-remove-hard-inquiries",
    kind: "article",
    category: "resources",
    eyebrow: "The complete hard inquiry removal guide",
    title: "How to Remove Hard Inquiries From Your Credit Report",
    seoTitle: "How to Remove Hard Inquiries | Inquiry Removal",
    description:
      "Learn when hard inquiries can be removed, how to dispute questionable inquiries, and when specialist help makes sense. Start with a free review.",
    supporting:
      "Some hard inquiries belong on your report. Others deserve a much closer look. Learn how to tell the difference and choose your next step.",
    primaryCta: "Get My Free Inquiry Review",
    secondaryCta: "See What Type of Inquiry I Have",
    secondaryTarget: "#section-1",
    quickTitle: "The short answer",
    quickAnswer:
      "Legitimate hard inquiries tied to real credit applications generally cannot simply be removed because you no longer want them displayed. Inaccurate, unauthorized, fraudulent, duplicated, or incorrect-person inquiries can be investigated and disputed.",
    takeaways: [
      "Accurate inquiries generally cannot be deleted solely because you regret applying.",
      "Questionable inquiries should be identified before they are disputed.",
      "Hard inquiries generally remain visible for up to two years.",
      "Consumers can dispute inaccurate information themselves for free.",
    ],
    sections: [
      {
        heading: "What is a hard inquiry?",
        body: [
          "A hard inquiry is created when a lender or another authorized party obtains a credit report in connection with an application or other permissible credit-related purpose. It differs from a soft inquiry, such as checking your own report, which does not affect credit scores.",
          "The important question is not always whether you signed a separate credit-pull form. It is whether the company had a permissible reason to access the report and whether the entry accurately reflects what happened.",
        ],
        visual: {
          title: "Hard pull vs. soft pull",
          items: [
            "Application",
            "Account review",
            "Score impact",
            "Report visibility",
          ],
        },
      },
      {
        heading: "Which hard inquiries may deserve removal?",
        body: [
          "The strongest candidates are inquiries where the underlying access or reporting is genuinely wrong. An unfamiliar name should be identified first because it may belong to a legitimate lender connected with a transaction you remember.",
        ],
        cards: [
          {
            title: "Unauthorized or unrecognized",
            body: "You cannot connect the company with an application or permissible purpose.",
          },
          {
            title: "Identity theft",
            body: "Someone used your information to seek credit in your name.",
          },
          {
            title: "Duplicate or incorrect person",
            body: "The entry repeats or belongs to another consumer.",
          },
          {
            title: "Hard pull presented as soft",
            body: "The representation and the reported inquiry do not match.",
          },
        ],
      },
      {
        heading: "How do you remove a questionable hard inquiry?",
        body: [
          "Pull current reports, inventory every inquiry, identify unfamiliar companies, determine exactly what is wrong, gather supporting documentation, and use the process provided by the affected credit bureau and creditor.",
          "Track submission dates, confirmation numbers, responses, and any report changes. Specific, documented information is more useful than a generic template.",
        ],
        bullets: [
          "Review all affected reports",
          "Identify each creditor",
          "State the exact issue",
          "Include supporting copies",
          "Track the investigation and result",
        ],
      },
      {
        heading: "How long do hard inquiries stay?",
        body: [
          "Hard inquiries generally remain visible for up to two years, while their scoring effect may fade sooner. Qualifying auto-loan, mortgage, and student-loan rate shopping can receive special scoring treatment even when individual inquiries remain visible.",
        ],
      },
      {
        heading: "Should you DIY or use a specialist?",
        body: [
          "DIY is a valid choice. Consumers have the right to dispute inaccurate information directly and for free. Specialist help may make sense when there are many inquiries, several bureaus, a dealership cluster, identity theft, confusing creditor names, or responses that need organized follow-through.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can hard inquiries be removed?",
        answer:
          "Questionable or inaccurate inquiries may be disputed. Accurate inquiries tied to legitimate applications are not automatically removable.",
      },
      {
        question: "How long do hard inquiries stay?",
        answer:
          "They generally remain visible for up to two years, though their practical scoring impact often fades sooner.",
      },
      {
        question: "Does removing an inquiry guarantee a score increase?",
        answer:
          "No. Scores consider many factors, and no particular increase can be guaranteed.",
      },
      {
        question: "Can I dispute inquiries myself?",
        answer:
          "Yes. Consumers can dispute inaccurate credit-report information directly at no cost.",
      },
      {
        question: "What if I expected a soft pull?",
        answer:
          "Preserve the representation, disclosure, email, message, or screenshot and compare it with the inquiry that appeared.",
      },
      {
        question: "What if I suspect identity theft?",
        answer:
          "Protect your credit first, review all three reports, contact affected companies, and use IdentityTheft.gov for a recovery plan.",
      },
    ],
    related: [
      {
        label: "How to dispute a hard inquiry",
        href: "/how-to-dispute-a-hard-inquiry/",
      },
      {
        label: "How long hard inquiries stay",
        href: "/how-long-do-hard-inquiries-stay/",
      },
      { label: "Unauthorized inquiries", href: "/unauthorized-inquiries/" },
      { label: "Identity theft inquiries", href: "/identity-theft-inquiries/" },
    ],
    sources: [
      {
        label: "CFPB: What is a credit inquiry?",
        href: "https://www.consumerfinance.gov/ask-cfpb/what-is-a-credit-inquiry-en-1317/",
      },
      {
        label: "CFPB credit-report dispute guide",
        href: "https://www.consumerfinance.gov/ask-cfpb/how-do-i-dispute-an-error-on-my-credit-report-en-314/",
      },
    ],
  },
  {
    slug: "how-to-dispute-a-hard-inquiry",
    kind: "article",
    category: "resources",
    eyebrow: "Hard inquiry dispute guide",
    title: "How to Dispute a Hard Inquiry on Your Credit Report",
    seoTitle: "How to Dispute a Hard Inquiry | Inquiry Removal",
    description:
      "Learn how to dispute a questionable hard inquiry, what evidence to include, which bureau process to use, and what happens next. Free review available.",
    supporting:
      "Do not start with a generic letter. First identify the inquiry, the company behind it, and the exact reason you believe it is wrong.",
    primaryCta: "Get My Free Inquiry Review",
    secondaryCta: "See the Dispute Roadmap",
    secondaryTarget: "#section-2",
    quickTitle: "The short answer",
    quickAnswer:
      "You can dispute a hard inquiry when you believe it is inaccurate, unauthorized, fraudulent, duplicated, or belongs to someone else. A strong dispute identifies the exact entry, clearly explains what is wrong, and includes supporting copies.",
    takeaways: [
      "Identify the creditor before assuming an inquiry is invalid.",
      "State exactly what is wrong rather than sending a generic demand.",
      "Include copies of relevant documents and keep your originals.",
      "Track submissions, confirmations, responses, and report changes.",
    ],
    sections: [
      {
        heading: "Can you dispute a hard inquiry?",
        body: [
          "Good reasons to investigate include an unknown company, an application you never made, identity theft, a duplicate, another person's inquiry, or a hard pull that was represented as soft.",
          "Wanting an accurate inquiry removed solely because it affects your report is not, by itself, a strong dispute reason.",
        ],
        cards: [
          {
            title: "Unauthorized",
            body: "You did not apply or cannot connect the inquiry to a permissible purpose.",
          },
          {
            title: "Fraud",
            body: "Someone used your identity to seek credit.",
          },
          {
            title: "Duplicate",
            body: "The same inquiry appears more than once.",
          },
          {
            title: "Incorrect person",
            body: "The inquiry belongs to another consumer or mixed file.",
          },
        ],
      },
      {
        heading: "How do you dispute a hard inquiry step by step?",
        body: [
          "Review the actual reports, record the exact inquiry, identify the creditor, decide precisely what is wrong, gather supporting documentation, and choose the correct bureau process. Contact the company that caused the inquiry when appropriate.",
          "Keep copies of what you send, use trackable mail when mailing documents, and record dates, confirmation numbers, and responses.",
        ],
        bullets: [
          "Verify",
          "Identify",
          "Document",
          "Dispute",
          "Track",
          "Review",
          "Follow up",
        ],
        visual: {
          title: "The dispute roadmap",
          items: [
            "Verify",
            "Identify",
            "Document",
            "Dispute",
            "Track",
            "Review",
          ],
        },
      },
      {
        heading: "How do the three bureau paths differ?",
        body: [
          "Experian, Equifax, and TransUnion each publish their own dispute tools and inquiry-specific guidance. Use the current instructions for the bureau showing the inquiry rather than assuming one method applies everywhere.",
        ],
        cards: [
          {
            title: "Experian",
            body: "Use Experian's current dispute center and inquiry instructions.",
          },
          {
            title: "Equifax",
            body: "Use Equifax's current dispute options and preserve the confirmation.",
          },
          {
            title: "TransUnion",
            body: "Review TransUnion's inquiry-specific guidance, including when the creditor should be contacted.",
          },
        ],
      },
      {
        heading: "What should a dispute letter include?",
        body: [
          "Include your identifying and contact information required by the recipient, the exact inquiry and report details, a clear explanation of why the entry is wrong, the correction or removal requested, and copies of documents supporting your position.",
          "Do not submit original identity documents. Avoid exaggerated legal threats or facts you cannot support. Specific beats aggressive.",
        ],
      },
      {
        heading: "What happens after a dispute?",
        body: [
          "The inquiry may be corrected or removed, verified, or require more information from the creditor. If you still disagree, review the result, preserve it, and determine whether additional documentation, a renewed direct dispute, a consumer statement, or a CFPB complaint is appropriate under current rules.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I dispute a hard inquiry?",
        answer:
          "Yes, when you believe the inquiry is inaccurate or does not belong. An accurate inquiry is not automatically removable.",
      },
      {
        question: "Should I contact the creditor or bureau first?",
        answer:
          "It depends on the issue. CFPB guidance generally recommends disputing inaccurate information with both the reporting company and the company that supplied or caused it.",
      },
      {
        question: "What should I include?",
        answer:
          "Identify the exact entry, explain what is wrong, request the correction, and include supporting copies while keeping your originals.",
      },
      {
        question: "How long does a dispute take?",
        answer:
          "Many credit-report investigations are generally handled within 30 days, though circumstances can extend the period. Follow the current bureau notice.",
      },
      {
        question: "Will disputing hurt my score?",
        answer:
          "Submitting a dispute itself is not a new credit application and does not create a hard inquiry.",
      },
      {
        question: "Can Inquiry Removal guarantee success?",
        answer: proofDisclaimer,
      },
    ],
    related: [
      {
        label: "How to remove hard inquiries",
        href: "/how-to-remove-hard-inquiries/",
      },
      {
        label: "Experian dispute guide",
        href: "/experian-hard-inquiry-removal/",
      },
      {
        label: "Equifax dispute guide",
        href: "/equifax-hard-inquiry-removal/",
      },
      {
        label: "TransUnion dispute guide",
        href: "/transunion-hard-inquiry-removal/",
      },
    ],
    sources: [
      {
        label: "CFPB credit-report dispute guide",
        href: "https://www.consumerfinance.gov/ask-cfpb/how-do-i-dispute-an-error-on-my-credit-report-en-314/",
      },
      {
        label: "CFPB sample dispute letters",
        href: "https://www.consumerfinance.gov/consumer-tools/credit-reports-and-scores/sample-letters-dispute-credit-report-information/",
      },
    ],
  },
  {
    slug: "how-long-do-hard-inquiries-stay",
    kind: "article",
    category: "resources",
    eyebrow: "Hard inquiry timeline guide",
    title: "How Long Do Hard Inquiries Stay on Your Credit Report?",
    seoTitle: "How Long Do Hard Inquiries Stay? | Inquiry Removal",
    description:
      "Hard inquiries can stay on credit reports for up to two years, but score impact may fade sooner. See the timeline and when an inquiry deserves review.",
    supporting:
      "Usually up to two years—but visible and hurting your score are not the same thing. See how an inquiry changes as it ages and when waiting may not be the only option.",
    primaryCta: "Get My Free Inquiry Review",
    secondaryCta: "Check My Inquiry Timeline",
    secondaryTarget: "#section-1",
    quickTitle: "The answer in 20 seconds",
    quickAnswer:
      "Hard inquiries generally remain visible for up to two years from the inquiry date. Their effect on credit scores usually fades sooner, and scoring models can use different time windows.",
    takeaways: [
      "Hard inquiries generally remain visible for up to two years.",
      "Visible for two years does not mean equally important for two years.",
      "Rate-shopping inquiries may receive special scoring treatment.",
      "An inaccurate or unauthorized inquiry does not need to be ignored while it ages.",
    ],
    sections: [
      {
        heading: "What does the two-year timeline mean?",
        body: [
          "A hard inquiry can generally remain on a credit report for up to two years from the date the lender accessed the file. Accurate inquiries normally age off automatically.",
          "The reporting period and scoring impact are separate concepts. An entry can remain visible even after its influence on a particular scoring model has diminished.",
        ],
        visual: {
          title: "The 24-month inquiry timeline",
          items: ["Day 1", "6 months", "12 months", "18 months", "24 months"],
        },
      },
      {
        heading: "How long do inquiries affect credit scores?",
        body: [
          "The effect is usually greatest when an inquiry is recent and tends to diminish with time. Different lenders and scoring models can evaluate inquiry history differently, so a visible entry does not have one universal point value.",
          "Removing an inquiry also does not guarantee a score increase because scores consider the full report and many other factors.",
        ],
      },
      {
        heading: "What about auto, mortgage, and student-loan rate shopping?",
        body: [
          "Qualifying inquiries made close together for certain loan types may be grouped for scoring purposes. The individual lender inquiries can still remain visible on the reports even when a scoring model treats the shopping activity as a single event.",
        ],
        cards: [
          {
            title: "Auto loans",
            body: "Several lender inquiries can follow one financing search.",
          },
          {
            title: "Mortgages",
            body: "Close-together applications may receive rate-shopping treatment.",
          },
          {
            title: "Student loans",
            body: "Some models apply similar shopping logic to eligible loan inquiries.",
          },
        ],
      },
      {
        heading: "Should you wait or review the inquiry now?",
        body: [
          "If the inquiry is accurate and authorized, time may be the simplest answer. If it is inaccurate, fraudulent, duplicated, belongs to someone else, or cannot be connected to a legitimate purpose, waiting two years is not the only possible path.",
        ],
        bullets: [
          "Wait when the inquiry is accurate and nearing natural falloff",
          "Review when the company is unknown",
          "Act promptly when identity theft is possible",
          "Investigate duplicates or incorrect-person entries",
        ],
      },
      {
        heading: "How do you estimate the falloff date?",
        body: [
          "Find the inquiry date on the actual credit report and count forward approximately two years. Because report displays and bureau updates can differ, check the current report rather than relying only on a monitoring notification.",
        ],
      },
    ],
    faqs: [
      {
        question: "Do hard inquiries really stay for two years?",
        answer:
          "They generally can remain visible for up to two years from the inquiry date.",
      },
      {
        question: "Do they hurt your score for the full two years?",
        answer:
          "Not necessarily. Their influence usually fades, and scoring models can use different inquiry windows.",
      },
      {
        question: "Do hard inquiries fall off automatically?",
        answer:
          "Accurate inquiries normally age off automatically without a dispute.",
      },
      {
        question: "Can an unauthorized inquiry be removed sooner?",
        answer:
          "Potentially. If it is inaccurate, fraudulent, or does not belong, it can be investigated rather than simply waiting for natural falloff.",
      },
      {
        question: "Does rate shopping make inquiries disappear sooner?",
        answer:
          "No. Rate-shopping rules can change scoring treatment while the individual inquiries remain visible.",
      },
      {
        question: "Will my score rise when an inquiry falls off?",
        answer:
          "It may or may not change. Scores consider many factors, so no increase can be guaranteed.",
      },
    ],
    related: [
      {
        label: "How to remove hard inquiries",
        href: "/how-to-remove-hard-inquiries/",
      },
      {
        label: "How to dispute a hard inquiry",
        href: "/how-to-dispute-a-hard-inquiry/",
      },
      { label: "Dealership inquiries", href: "/dealership-inquiries/" },
      {
        label: "TransUnion inquiry removal",
        href: "/transunion-hard-inquiry-removal/",
      },
    ],
    sources: [
      {
        label: "CFPB: What is a credit inquiry?",
        href: "https://www.consumerfinance.gov/ask-cfpb/what-is-a-credit-inquiry-en-1317/",
      },
      {
        label: "TransUnion inquiry guidance",
        href: "https://www.transunion.com/credit-disputes/credit-disputes-faq",
      },
    ],
  },
];

export const guideSlugs = new Set(guidePages.map((page) => page.slug));
