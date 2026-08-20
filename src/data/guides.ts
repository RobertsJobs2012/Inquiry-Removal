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
    slug: "transunion-hard-inquiry-removal",
    kind: "service",
    category: "resources",
    eyebrow: "TransUnion hard inquiry removal",
    title: "How to Remove Hard Inquiries From TransUnion",
    seoTitle: "Remove Hard Inquiries From TransUnion | Inquiry Removal",
    description:
      "Need TransUnion hard inquiry removal? See what can be disputed, how TransUnion inquiry issues work, and how our specialists can help. Free review.",
    supporting:
      "We review the inquiries appearing on your TransUnion report, what caused them, and which removal or dispute path fits the situation. Hard inquiry specialists—nothing else.",
    primaryCta: "Get My Free TransUnion Review",
    secondaryCta: "See Real Inquiry Results",
    secondaryTarget: "/#results",
    quickTitle: "Start with the exact inquiry",
    quickAnswer:
      "A questionable TransUnion hard inquiry may be challenged when the facts support a dispute. An accurate inquiry you knowingly authorized is not automatically removable simply because you later want it gone.",
    takeaways: [
      "Review the company name, inquiry date, and affected report.",
      "An unfamiliar lender name is not automatically an unauthorized inquiry.",
      "Different situations require different TransUnion-specific next steps.",
      "You can dispute inaccurate credit-report information yourself for free.",
    ],
    sections: [
      {
        heading: "Do you see a TransUnion inquiry you don't recognize?",
        body: [
          "An unfamiliar lender, duplicate pull, dealership cluster, identity-theft inquiry, or hard pull you thought would be soft can each require a different response.",
          "Sometimes a lender appears under a bank, parent company, financing partner, or legal name different from the business you remember. If you still cannot explain it, the inquiry deserves a closer look.",
        ],
        cards: [
          {
            title: "Unknown company",
            body: "You cannot connect the name with an application or transaction.",
          },
          {
            title: "Dealership cluster",
            body: "One financing visit produced several lender inquiries.",
          },
          {
            title: "Possible identity theft",
            body: "You do not recognize the application, company, or transaction.",
          },
          {
            title: "Unexpected hard pull",
            body: "You expected a soft check or no-impact prequalification.",
          },
        ],
        visual: {
          title: "TransUnion inquiry review graphic",
          items: ["Creditor", "Date", "Authorization", "Next step"],
        },
      },
      {
        heading: "How can you remove a hard inquiry from TransUnion?",
        body: [
          "Begin with a current TransUnion report rather than relying only on an abbreviated monitoring-app entry. Identify the company, date, contact details, and any applications near the same time.",
          "Then determine what the company says caused the inquiry and preserve any application records, dealership paperwork, emails, messages, or disclosures that help explain what happened.",
        ],
        bullets: [
          "Review the actual TransUnion entry",
          "Identify the company that placed it",
          "Compare it with what you authorized",
          "Follow the path that fits the facts",
          "Keep copies of every relevant record and response",
        ],
      },
      {
        heading: "Why choose a TransUnion hard inquiry specialist?",
        body: [
          "Hard inquiries are our entire focus. We do not bundle the work into a broad credit-repair membership or an endless monthly billing cycle.",
          "A dealership cluster is not the same as identity theft. An unfamiliar lender is not automatically fraudulent. We review the individual facts, affected bureau, and supporting records before determining the next step.",
        ],
        cards: [
          {
            title: "Focused expertise",
            body: "Hard inquiries are not an add-on to an unrelated service.",
          },
          {
            title: "Bureau-specific review",
            body: "The TransUnion report and inquiry circumstances shape the process.",
          },
          {
            title: "One-time pricing",
            body: "Plans are based on total inquiry count, not monthly membership billing.",
          },
          {
            title: "Continued follow-through",
            body: "Responses are reviewed and next steps are organized under your service.",
          },
        ],
      },
      {
        heading: "What does the process look like?",
        body: [
          "Start with a free personal review. We organize the inquiry list, creditor names, dates, affected bureaus, and what you remember happening. If the service fits, we prepare the appropriate communications and review the responses that follow.",
        ],
        bullets: [
          "Free personal review",
          "Inquiry organization",
          "Appropriate communications",
          "Response review and follow-up",
        ],
      },
      {
        heading: "How much does TransUnion inquiry removal cost?",
        body: [
          "Pricing is one time and based on the total number of hard inquiries included across the affected reports: $199 for 1–10, $299 for 11–30, and $499 for 31 or more.",
          "If you are unsure how many inquiries you have, begin with the free review. We can help organize the count before you decide.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I dispute hard inquiries on TransUnion?",
        answer:
          "You can dispute information you believe is inaccurate or does not belong to you. The appropriate method depends on the inquiry and the current TransUnion instructions.",
      },
      {
        question: "What if I don't recognize the company?",
        answer:
          "First identify whether the name belongs to a lender, bank, parent company, or financing partner connected with something you remember. If it remains unexplained, investigate further.",
      },
      {
        question: "Can dealership inquiries be reviewed?",
        answer:
          "Yes. We organize the lenders, dates, reports, and dealership event so the full inquiry cluster can be reviewed together.",
      },
      {
        question: "Can identity-theft inquiries be removed?",
        answer:
          "Fraudulent inquiries may qualify for dispute or blocking processes. Protecting the rest of your credit should also be addressed promptly.",
      },
      {
        question: "Can I remove an inquiry I knowingly authorized?",
        answer:
          "An accurate, authorized inquiry is not automatically removable. We review the disclosure, reporting, company identity, and surrounding facts without promising a deletion.",
      },
      {
        question: "Do you guarantee a deletion or score increase?",
        answer: proofDisclaimer,
      },
    ],
    related: [
      {
        label: "Experian hard inquiry removal",
        href: "/experian-hard-inquiry-removal/",
      },
      {
        label: "Equifax hard inquiry removal",
        href: "/equifax-hard-inquiry-removal/",
      },
      {
        label: "How to dispute a hard inquiry",
        href: "/how-to-dispute-a-hard-inquiry/",
      },
      { label: "Dealership hard inquiries", href: "/dealership-inquiries/" },
    ],
    sources: [
      {
        label: "TransUnion credit dispute guidance",
        href: "https://www.transunion.com/credit-disputes/credit-disputes-faq",
      },
      {
        label: "CFPB credit-report dispute guide",
        href: "https://www.consumerfinance.gov/ask-cfpb/how-do-i-dispute-an-error-on-my-credit-report-en-314/",
      },
    ],
  },
  {
    slug: "experian-hard-inquiry-removal",
    kind: "service",
    category: "resources",
    eyebrow: "Experian hard inquiry removal",
    title: "How to Remove Hard Inquiries From Experian: Know What to Do Next",
    seoTitle: "Remove Hard Inquiries From Experian | Inquiry Removal",
    description:
      "Learn what makes an Experian inquiry questionable, what to verify, and how focused hard inquiry removal works. Get a free Experian review.",
    supporting:
      "We review the creditor, date, affected reports, and the circumstances behind the inquiry—then help organize the path that fits the facts.",
    primaryCta: "Get My Free Experian Review",
    secondaryCta: "See Real Inquiry Results",
    secondaryTarget: "/#results",
    quickTitle: "Can Experian hard inquiries be removed?",
    quickAnswer:
      "A hard inquiry may be removable when it is inaccurate, unauthorized, fraudulent, duplicated, or otherwise does not belong. A legitimate inquiry connected with an application you authorized is not automatically removable.",
    takeaways: [
      "Use the exact Experian report entry, not only a monitoring summary.",
      "Identify unfamiliar creditor names before assuming fraud.",
      "Preserve documentation that supports what actually happened.",
      "Consumers can dispute inaccurate information directly for free.",
    ],
    sections: [
      {
        heading: "Is there an Experian inquiry you cannot explain?",
        body: [
          "You may not recognize the creditor, may not remember authorizing the pull, or may see several inquiries after one dealership visit. You may also have expected a soft pull or suspect that someone used your identity.",
          "Those situations look similar on a report but can require very different next steps.",
        ],
        cards: [
          {
            title: "Creditor name mismatch",
            body: "The report name may belong to the bank behind a retailer or lender.",
          },
          {
            title: "No remembered authorization",
            body: "You know the company but cannot connect it to permission for a hard pull.",
          },
          {
            title: "Multiple auto lenders",
            body: "A dealer may have routed one application to several financing companies.",
          },
          {
            title: "Possible fraud",
            body: "You never applied and cannot connect the inquiry to a legitimate event.",
          },
        ],
        visual: {
          title: "Experian inquiry decision tree",
          items: ["Recognized", "Authorized", "Duplicated", "Fraud-related"],
        },
      },
      {
        heading: "How do you review an inaccurate Experian inquiry?",
        body: [
          "Record the exact creditor name, inquiry date, and affected report. Identify the company behind the name, compare the entry with what you authorized, and collect supporting information before using Experian's current inquiry-specific instructions.",
          "Avoid a vague or aggressive dispute. A clear explanation tied to the actual entry and supporting records gives the reviewer something concrete to investigate.",
        ],
        bullets: [
          "Review the exact entry",
          "Identify the company",
          "Compare the inquiry with the transaction",
          "Gather copies of supporting records",
          "Track every response",
        ],
      },
      {
        heading: "Why use a company focused only on hard inquiries?",
        body: [
          "Specialization matters because every inquiry is not the same. We review Experian-specific entries, look across all affected reports when needed, and organize the communications and follow-through without a recurring membership.",
        ],
        cards: [
          {
            title: "Experian-specific review",
            body: "The affected report and current bureau process guide the work.",
          },
          {
            title: "All three reports when needed",
            body: "We compare Experian, Equifax, and TransUnion when the event crosses bureaus.",
          },
          {
            title: "One-time pricing",
            body: "No endless monthly credit-repair subscription.",
          },
        ],
      },
      {
        heading: "How does Experian inquiry removal work with us?",
        body: [
          "We begin with a free review, organize the Experian inquiry list, determine the appropriate path, prepare the necessary communications, and review what changes after responses arrive.",
        ],
        bullets: [
          "Free Experian review",
          "Inquiry list and date review",
          "Appropriate communication path",
          "Response review",
          "Included follow-through",
        ],
      },
      {
        heading: "What does Experian inquiry removal cost?",
        body: [
          "One-time plans are $199 for 1–10 total inquiries, $299 for 11–30, and $499 for 31 or more across the reports included in your service.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I dispute a hard inquiry on Experian?",
        answer:
          "Yes, if you believe it is inaccurate or does not belong. Review Experian's current options and submit specific supporting information.",
      },
      {
        question: "Can I dispute an Experian inquiry online?",
        answer:
          "Experian provides online dispute tools, but the correct path can depend on the inquiry and the issue you are raising. Follow its current official instructions.",
      },
      {
        question: "Why don't I recognize the creditor?",
        answer:
          "Retail cards, dealership lenders, banks, and financing partners can appear under legal names that differ from the brand you remember.",
      },
      {
        question: "Can one inquiry appear only on Experian?",
        answer:
          "Yes. A creditor may check one bureau and not the others, so report contents can differ.",
      },
      {
        question: "Should I check all three reports?",
        answer:
          "Yes when the event may have affected more than one bureau. The inquiry lists can differ.",
      },
      {
        question: "Can Inquiry Removal guarantee a deletion?",
        answer: proofDisclaimer,
      },
    ],
    related: [
      {
        label: "Equifax hard inquiry removal",
        href: "/equifax-hard-inquiry-removal/",
      },
      {
        label: "TransUnion hard inquiry removal",
        href: "/transunion-hard-inquiry-removal/",
      },
      { label: "Unauthorized inquiries", href: "/unauthorized-inquiries/" },
      {
        label: "How long inquiries stay",
        href: "/how-long-do-hard-inquiries-stay/",
      },
    ],
    sources: [
      {
        label: "Experian dispute center",
        href: "https://www.experian.com/disputes/main.html",
      },
      {
        label: "CFPB credit-report dispute guide",
        href: "https://www.consumerfinance.gov/ask-cfpb/how-do-i-dispute-an-error-on-my-credit-report-en-314/",
      },
    ],
  },
  {
    slug: "equifax-hard-inquiry-removal",
    kind: "service",
    category: "resources",
    eyebrow: "Equifax hard inquiry removal",
    title:
      "How to Remove Hard Inquiries From Equifax and Know What Happens Next",
    seoTitle: "Remove Hard Inquiries From Equifax | Inquiry Removal",
    description:
      "See how Equifax hard inquiry removal works, what to verify, and when a questionable inquiry deserves review. Start with a free Equifax review.",
    supporting:
      "We organize the Equifax entry, the company behind it, what you authorized, and the documents that can support the appropriate next step.",
    primaryCta: "Get My Free Equifax Review",
    secondaryCta: "See Real Inquiry Results",
    secondaryTarget: "/#results",
    quickTitle: "Can hard inquiries be removed from Equifax?",
    quickAnswer:
      "Potentially—when the inquiry is inaccurate, unauthorized, fraudulent, duplicated, or belongs to someone else. Accurate inquiries connected with legitimate applications are not automatically removable.",
    takeaways: [
      "Start with the exact Equifax inquiry entry.",
      "Identify the company behind an unfamiliar reporting name.",
      "Compare the inquiry with what you actually authorized.",
      "The company that accessed the report may matter alongside Equifax.",
    ],
    sections: [
      {
        heading: "Why is that inquiry showing on your Equifax report?",
        body: [
          "The company name may differ from the lender or retailer you remember. A dealership may have sent your application to several companies. You may have expected a soft pull, spotted a duplicate, or discovered an application that was never yours.",
          "Identification comes first because the right response depends on why the inquiry exists.",
        ],
        cards: [
          {
            title: "Different legal name",
            body: "The company shown may be the bank or lender behind the brand.",
          },
          {
            title: "Multiple lender submissions",
            body: "One dealership application may create several visible inquiries.",
          },
          {
            title: "Unexpected hard pull",
            body: "The transaction was described as a soft or no-impact check.",
          },
          {
            title: "Identity theft concern",
            body: "The application and inquiry do not belong to you.",
          },
        ],
        visual: {
          title: "Equifax inquiry review visual",
          items: [
            "Your report",
            "Creditor record",
            "Supporting evidence",
            "Outcome",
          ],
        },
      },
      {
        heading: "How do you review a hard inquiry on Equifax?",
        body: [
          "Look at the actual Equifax report, record the company and date, identify who accessed the file, and compare the inquiry with what occurred. Gather application disclosures, messages, lender communications, dealership paperwork, or identity-theft records that apply.",
          "Use the current Equifax process that matches the problem and keep copies of everything submitted and received.",
        ],
        bullets: [
          "Review the entry",
          "Identify the company",
          "Document the authorization facts",
          "Choose the correct process",
          "Track responses and corrections",
        ],
      },
      {
        heading: "Sometimes the bureau is not the only party that matters",
        body: [
          "Equifax maintains the credit file, while the company behind the inquiry can often explain why it accessed the report. A focused review may involve both the reporting company and the creditor that caused the inquiry.",
        ],
        visual: {
          title: "Consumer side vs. creditor side",
          items: ["You", "Equifax", "Company that accessed the report"],
        },
      },
      {
        heading: "How Inquiry Removal handles Equifax inquiries",
        body: [
          "We review what happened, organize the inquiry list, identify the appropriate path, prepare the required communications, and review the responses. The service uses one-time pricing rather than an open-ended membership.",
        ],
        bullets: [
          "Free review",
          "All affected reports",
          "Focused communications",
          "Response analysis",
          "Continued follow-through",
        ],
      },
      {
        heading: "How much does Equifax inquiry removal cost?",
        body: [
          "One-time pricing is $199 for 1–10 total inquiries, $299 for 11–30, and $499 for 31 or more. The free review helps organize the count first.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I dispute a hard inquiry on Equifax?",
        answer:
          "Yes, when you believe it is inaccurate or does not belong to you. Use Equifax's current dispute options and include specific information.",
      },
      {
        question: "Can I dispute an Equifax inquiry online?",
        answer:
          "Equifax provides online dispute options. The correct route depends on the inquiry and your reason for disputing it.",
      },
      {
        question: "Why don't I recognize the company listed?",
        answer:
          "The entry may use the legal name of a bank, lender, or finance company connected with a transaction you remember.",
      },
      {
        question: "Can dealership inquiries appear on Equifax?",
        answer:
          "Yes. A dealer may submit one financing application to multiple lenders, and the inquiry lists can vary by bureau.",
      },
      {
        question: "Should I review all three reports?",
        answer:
          "Yes when more than one bureau may be affected. Experian, Equifax, and TransUnion can show different inquiry lists.",
      },
      {
        question: "Can you guarantee Equifax will delete an inquiry?",
        answer: proofDisclaimer,
      },
    ],
    related: [
      {
        label: "Experian hard inquiry removal",
        href: "/experian-hard-inquiry-removal/",
      },
      {
        label: "TransUnion hard inquiry removal",
        href: "/transunion-hard-inquiry-removal/",
      },
      { label: "Identity theft inquiries", href: "/identity-theft-inquiries/" },
      {
        label: "How to remove hard inquiries",
        href: "/how-to-remove-hard-inquiries/",
      },
    ],
    sources: [
      {
        label: "Equifax dispute center",
        href: "https://www.equifax.com/personal/credit-report-services/credit-dispute/",
      },
      {
        label: "CFPB credit-report dispute guide",
        href: "https://www.consumerfinance.gov/ask-cfpb/how-do-i-dispute-an-error-on-my-credit-report-en-314/",
      },
    ],
  },
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
    slug: "unauthorized-inquiries",
    kind: "service",
    category: "situations",
    eyebrow: "Unauthorized hard inquiry removal",
    title: "How to Remove a Hard Inquiry You Didn't Authorize",
    seoTitle: "Remove Unauthorized Hard Inquiries | Inquiry Removal",
    description:
      "See a hard inquiry you did not authorize? Find out why it appeared, what to verify, and how Inquiry Removal can help. Start with a free review.",
    supporting:
      "You do not recognize the lender or remember the application. We review the company, date, bureau, and circumstances before deciding what the next step should be.",
    primaryCta: "Get My Free Unauthorized Inquiry Review",
    secondaryCta: "See What Could Have Caused It",
    secondaryTarget: "#section-1",
    quickTitle: "Do not begin with an assumption",
    quickAnswer:
      "An unfamiliar inquiry does not automatically mean the credit check was unauthorized. Identify the company and the possible permissible purpose first. If the inquiry still cannot be explained, document the facts and investigate it promptly.",
    takeaways: [
      "A lender may appear under a legal name you do not recognize.",
      "A dealership may have routed one application to several lenders.",
      "Federal law permits credit access only for recognized permissible purposes.",
      "A truly unexplained inquiry can be an identity-theft warning sign.",
    ],
    sections: [
      {
        heading: "Don't recognize the inquiry? Start here.",
        body: [
          "Search your email and messages around the inquiry date, compare recent applications, and identify whether the name belongs to a bank or finance company behind a retailer, marketplace, or dealership.",
          "If you never applied, do not recognize the company, and cannot connect it to a legitimate transaction, the situation deserves a more urgent review.",
        ],
        cards: [
          {
            title: "Different lender name",
            body: "A retailer or dealership may use a separate issuing bank.",
          },
          {
            title: "Forgotten application",
            body: "A limit increase, financing check, or marketplace request may explain the date.",
          },
          {
            title: "Dealer routing",
            body: "One auto application may have reached several lenders.",
          },
          {
            title: "No legitimate connection",
            body: "Possible unauthorized access or identity theft needs investigation.",
          },
        ],
        visual: {
          title: "What could this inquiry mean?",
          items: [
            "Name mismatch",
            "Prior application",
            "Dealer lender",
            "Possible fraud",
          ],
        },
      },
      {
        heading: "Can a company pull your credit without a separate signature?",
        body: [
          "Sometimes. The legal question is not always whether a standalone authorization form was signed. A company must have a purpose permitted by law, which can include certain consumer-initiated credit transactions and legitimate business needs.",
          "A stronger investigation asks what permissible purpose the company claims and how that claim connects to what actually happened.",
        ],
      },
      {
        heading: "What should you document?",
        body: [
          "Create a simple record of the exact inquiry, your relevant applications, what you were told, and any response from the company. Keep copies rather than originals.",
        ],
        bullets: [
          "Creditor name and inquiry date",
          "Affected bureau",
          "Applications near that date",
          "Disclosures, emails, and messages",
          "Company explanation or denial",
          "Identity-theft records when applicable",
        ],
      },
      {
        heading: "What Inquiry Removal does",
        body: [
          "We identify the inquiry, organize the authorization and permissible-purpose questions, prepare the appropriate communications, and review the responses. You can also handle an accurate credit-report dispute yourself for free.",
        ],
      },
    ],
    faqs: [
      {
        question: "What do I do if I don't recognize a hard inquiry?",
        answer:
          "Identify the company, compare the date with your applications, contact the company when appropriate, and preserve what you learn.",
      },
      {
        question: "Can a company pull credit without authorization?",
        answer:
          "A company needs a permissible purpose recognized by law, but that does not always require a separate handwritten authorization.",
      },
      {
        question: "Does an unknown inquiry mean identity theft?",
        answer:
          "Not always. It can be a different creditor name or transaction you recognize, but a truly unexplained inquiry should be investigated promptly.",
      },
      {
        question: "Can unauthorized inquiries appear on one bureau only?",
        answer: "Yes. Creditors do not always access every bureau.",
      },
      {
        question: "Can I dispute the inquiry myself?",
        answer:
          "Yes. Consumers can dispute inaccurate information directly for free.",
      },
      { question: "Can you guarantee removal?", answer: proofDisclaimer },
    ],
    related: [
      { label: "Identity theft inquiries", href: "/identity-theft-inquiries/" },
      { label: "Dealership inquiries", href: "/dealership-inquiries/" },
      {
        label: "How to dispute a hard inquiry",
        href: "/how-to-dispute-a-hard-inquiry/",
      },
      { label: "How the service works", href: "/how-it-works/" },
    ],
    sources: [
      {
        label: "CFPB credit-report dispute guide",
        href: "https://www.consumerfinance.gov/ask-cfpb/how-do-i-dispute-an-error-on-my-credit-report-en-314/",
      },
      {
        label: "CFPB unfamiliar-creditor guidance",
        href: "https://www.consumerfinance.gov/ask-cfpb/should-i-dispute-a-creditor-on-my-credit-report-if-i-dont-recognize-the-company-en-1331/",
      },
    ],
  },
  {
    slug: "identity-theft-inquiries",
    kind: "service",
    category: "situations",
    eyebrow: "Identity theft hard inquiry removal",
    title: "Remove Hard Inquiries Caused by Identity Theft",
    seoTitle: "Remove Identity Theft Hard Inquiries | Inquiry Removal",
    description:
      "See a hard inquiry caused by identity theft? Protect your credit, understand your removal options, and get a free specialist inquiry review.",
    supporting:
      "If the application was not yours, the inquiry may be only the first thing you found. Protect your credit first—then organize the affected inquiries and removal process.",
    primaryCta: "Get My Identity Theft Review",
    secondaryCta: "Protect My Credit First",
    secondaryTarget: "#section-1",
    quickTitle: "Protect first, then remove",
    quickAnswer:
      "If someone used your identity to apply for credit, protect the rest of your credit immediately. Contact affected companies, place a fraud alert or credit freeze when appropriate, review all three reports, and create an FTC recovery plan.",
    takeaways: [
      "An unfamiliar inquiry can be an early sign of new-account fraud.",
      "A credit freeze can limit access to your credit reports.",
      "A fraud alert tells businesses to verify your identity before opening credit.",
      "IdentityTheft.gov can create an FTC report and recovery plan.",
    ],
    sections: [
      {
        heading: "What should you do right now?",
        body: [
          "Call the fraud department of any company where you know fraud occurred. Review all three credit reports, change compromised logins, and use official identity-theft resources to document the event.",
          "A fraud alert and a credit freeze work differently. An alert requires added identity verification; a freeze limits access to the report until you lift it.",
        ],
        bullets: [
          "Contact affected businesses",
          "Review Experian, Equifax, and TransUnion",
          "Place a fraud alert or freeze when appropriate",
          "Report the theft at IdentityTheft.gov",
          "Save the FTC report and recovery plan",
        ],
        visual: {
          title: "Immediate identity-theft protection checklist",
          items: ["Contact", "Alert", "Freeze", "Report", "Monitor"],
        },
      },
      {
        heading: "How do identity-theft inquiries get addressed?",
        body: [
          "Record every fraudulent inquiry and affected bureau. Contact the lender's fraud department, preserve any case numbers and letters, and follow the bureau's current identity-theft dispute or blocking instructions.",
          "An inquiry can appear even when the fraudulent application was denied. That is why reviewing inquiries matters even when no new account is visible.",
        ],
      },
      {
        heading: "What should you keep?",
        body: [
          "Keep copies of the relevant credit-report pages, the FTC Identity Theft Report, proof of identity and address required by official processes, lender correspondence, bureau confirmations, and any police report you choose or are asked to provide.",
        ],
        bullets: [
          "Inquiry names and dates",
          "Affected reports",
          "FTC Identity Theft Report",
          "Lender fraud case numbers",
          "Bureau submissions and responses",
        ],
      },
      {
        heading: "How Inquiry Removal helps",
        body: [
          "We focus on the hard inquiry portion of the recovery: organizing the fraudulent inquiries, affected reports, lender information, communications, and follow-through. We do not replace law enforcement, legal advice, or the broader steps in your official identity-theft recovery plan.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can identity theft cause a hard inquiry?",
        answer:
          "Yes. A fraudulent application can create an inquiry even if no account is ultimately opened.",
      },
      {
        question: "Should I freeze my credit?",
        answer:
          "A freeze is a strong protective option that limits access to your report. Review the official guidance and place it separately with each bureau if appropriate.",
      },
      {
        question: "What is the difference between a fraud alert and a freeze?",
        answer:
          "A fraud alert requires added identity verification. A freeze limits access to the credit report until it is lifted.",
      },
      {
        question: "Do I need an FTC Identity Theft Report?",
        answer:
          "It can document the theft, create a recovery plan, and support certain identity-theft rights and requests.",
      },
      {
        question: "Do I need to contact all three bureaus?",
        answer:
          "Review all three reports. A fraud alert placed with one nationwide bureau is shared with the others, while freezes are placed separately.",
      },
      {
        question: "Can you guarantee removal or timing?",
        answer: proofDisclaimer,
      },
    ],
    related: [
      { label: "Unauthorized inquiries", href: "/unauthorized-inquiries/" },
      {
        label: "How to dispute a hard inquiry",
        href: "/how-to-dispute-a-hard-inquiry/",
      },
      {
        label: "Equifax inquiry removal",
        href: "/equifax-hard-inquiry-removal/",
      },
      {
        label: "TransUnion inquiry removal",
        href: "/transunion-hard-inquiry-removal/",
      },
    ],
    sources: [
      {
        label: "IdentityTheft.gov recovery steps",
        href: "https://www.identitytheft.gov/Steps",
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
