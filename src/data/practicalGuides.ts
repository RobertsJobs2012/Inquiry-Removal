export type PracticalSection = {
  heading: string;
  intro: string;
  columns?: string[];
  rows?: string[][];
  checklist?: string[];
  links?: { label: string; href: string }[];
};
const dispute = {
  label: "CFPB: document and dispute a report error",
  href: "https://www.consumerfinance.gov/ask-cfpb/how-do-i-dispute-an-error-on-my-credit-report-en-314/",
};
const tu = {
  label: "TransUnion: inquiry-specific creditor and fraud instructions",
  href: "https://www.transunion.com/credit-disputes/dispute-your-credit",
};
const ex = {
  label: "Experian: inquiry removal and identification guidance",
  href: "https://www.experian.com/blogs/ask-experian/how-to-remove-hard-inquiries-from-credit-report/",
};
const eq = {
  label: "Equifax: official dispute request form",
  href: "https://assets.equifax.com/assets/personal/Dispute.pdf",
};
const fico = {
  label: "myFICO: rate-shopping model differences",
  href: "https://www.myfico.com/credit-education/blog/rate-shop",
};
const ficoTiming = {
  label: "myFICO: report visibility and the FICO inquiry lookback",
  href: "https://www.myfico.com/credit-education/credit-reports/does-checking-credit-score-lower-it",
};
export const eligibility: PracticalSection = {
  heading: "Choose a next step, not an automatic eligibility verdict",
  intro:
    "A review is an investigation of the facts, not a promise of deletion. Not opening an account, being denied, or regretting an application does not by itself invalidate a legitimate inquiry.",
  columns: ["What you see", "What to establish", "Useful next step"],
  rows: [
    [
      "A legitimate, accurately reported application",
      "The company, date and application match",
      "Normal aging and monitoring; removal is not promised",
    ],
    [
      "An unfamiliar company name",
      "Whether a partner bank or lender handled an application",
      "Identify the company before alleging fraud",
    ],
    [
      "A repeated entry or wrong date",
      "Which specific record conflicts with the application",
      "Document the mismatch and request an investigation",
    ],
    [
      "An application you did not make",
      "Whether someone actually used your identity",
      "Take protective steps and follow the official fraud route",
    ],
    [
      "Another person's information",
      "Other mixed names, addresses or accounts",
      "Investigate a mixed file; wider corrections may be needed",
    ],
    [
      "A promised soft check followed by a hard pull",
      "The exact disclosure and any later formal application",
      "Preserve the sequence and investigate a real mismatch",
    ],
  ],
  links: [
    {
      label: "Understand an authorized inquiry",
      href: "/authorized-inquiry-removal/",
    },
    {
      label: "Free removal and dispute options",
      href: "/how-to-remove-hard-inquiries/",
    },
  ],
};
export const bureauPaths: PracticalSection = {
  heading: "Choose the bureau-specific route",
  intro:
    "Do not assume one online dispute flow accepts every inquiry issue. Use the current official instructions for the affected bureau; keep copies and use the bureau's secure channel for identity documents. Links checked October 21, 2026; provider instructions can change.",
  columns: ["Bureau", "Start here", "Important distinction"],
  rows: [
    [
      "Experian",
      "Identify the full inquiry and the company; follow inquiry-specific assistance",
      "General online dispute support is not a promise that every inquiry can be disputed online",
    ],
    [
      "Equifax",
      "Match the entry and evidence to the official dispute form/instructions",
      "Use Equifax's own identity and supporting-document requirements, not another bureau's checklist",
    ],
    [
      "TransUnion",
      "Contact an unrecognized inquiring company about the application",
      "Its inquiry FAQ says a company can request deletion, or fraud evidence can be mailed; that inquiry request is not available online",
    ],
  ],
  links: [ex, eq, tu, dispute],
};
export const practicalGuides: Record<string, PracticalSection[]> = {
  "best-hard-inquiry-removal-services": [
    {
      heading: "Compare advertised offers, not promised results",
      intro:
        "Published by Inquiry Removal, which is included below. This is not an independent ranking: we have not purchased or tested these services. Public offers checked October 21, 2026. Prices, eligibility, monitoring costs and written terms may change; a marketing claim is not a verified outcome.",
      columns: [
        "Provider",
        "Advertised price and scope",
        "Follow-up and conditions",
      ],
      rows: [
        [
          "DIY through the bureaus and companies",
          "Free disputes of inaccurate information; you manage the records",
          "Use the affected bureau’s current process; legitimate accurate inquiries generally age off",
        ],
        [
          "Inquiry Removal",
          "$199 / 1–10; $299 / 11–20; $399 / 21–30; $499 / 31+; affected bureaus included",
          "No monthly membership or client portal. Confirm the billable count, written scope, fee timing and cancellation/refund terms before agreement",
        ],
        [
          "Inquiry Removers",
          "$197 for up to 30 inquiries across three bureaus",
          "Advertises up to three rounds. Its refund condition refers to no eligible removals after those rounds; check the full terms",
        ],
        [
          "Remove My Inquiries",
          "$495, unlimited inquiries; Experian-focused offer with Equifax and TransUnion disputes",
          "Advertises a pay-after-removal option. Detailed exclusions, monitoring costs and refund conditions not verified here",
        ],
        [
          "NUFICO",
          "$250 Experian-only targeted option; $600 option described as three-bureau 10+ inquiry removal",
          "Do not confuse these standalone options with its broader credit-repair payment plans; full inquiry-specific conditions not verified here",
        ],
        [
          "Finesse My Credit",
          "$149 up to 3; $249 up to 5; $349 up to 10; $699 up to 40",
          "Its page excludes inquiries attached to open accounts and describes a monitoring service. Confirm ongoing costs and written refund conditions",
        ],
      ],
      links: [
        {
          label: "Our four current plans and scope questions",
          href: "/pricing/",
        },
        {
          label: "Inquiry Removers: advertised offer and refund summary",
          href: "https://inquiryremovers.com/",
        },
        {
          label: "Remove My Inquiries: current pricing page",
          href: "https://www.removemyinquiries.com/pricing.html",
        },
        {
          label: "NUFICO: standalone inquiry options",
          href: "https://nufico.com/pricing/",
        },
        {
          label: "Finesse My Credit: package details and exclusions",
          href: "https://finessemycredit.com/inquiryremoval/",
        },
      ],
    },
    {
      heading: "Ask every provider the same questions",
      intro:
        "No provider is awarded a score, star rating or winner in this guide. A lower headline price does not establish identical scope, and paying more does not establish a better outcome.",
      checklist: [
        "Which specific inquiries and bureaus are covered, and how are entries counted across reports?",
        "Are inquiries linked to open accounts excluded?",
        "Is paid monitoring required, at what recurring cost, and how is it cancelled?",
        "How many rounds or follow-ups are included and when does service end?",
        "How will I receive updates and what records must I provide?",
        "When may fees be collected and what do the written cancellation and refund terms say?",
        "What evidence supports claimed results, without promising my deletion, score gain or approval?",
      ],
      links: [
        {
          label: "Free factual dispute route",
          href: "/how-to-dispute-a-hard-inquiry/",
        },
      ],
    },
  ],
  about: [
    {
      heading: "A real operator and a direct contact",
      intro:
        "Inquiry Removal is led by Robert Garcia, Founder and Senior Credit Analyst. The service focuses on hard inquiries across the affected Experian, Equifax and TransUnion reports, with remote review and phone, text or email updates—not a client portal. The company describes inquiry-focused experience since 2015; that is not a claim about when this domain was registered.",
      links: [
        {
          label: "Call Inquiry Removal at 602-377-6626",
          href: "tel:+16023776626",
        },
        { label: "Contact the business", href: "/contact/" },
        { label: "Understand the actual work", href: "/how-it-works/" },
      ],
    },
  ],
  eligibility: [eligibility],
  "how-to-remove-hard-inquiries": [
    eligibility,
    bureauPaths,
    {
      heading: "A complete free path before optional paid help",
      intro:
        "Read the full reports, identify the entry, explain a specific factual issue, use the appropriate official route, and compare the response with an updated report. You can do this yourself for free.",
      checklist: [
        "Save the company, inquiry date and affected bureau",
        "Match recent applications, dealer paperwork and disclosures",
        "Keep relevant copies; never send account passwords",
        "Record the recipient, channel, date and confirmation",
        "Read the reason if a dispute is unsuccessful; follow up with relevant new evidence rather than repeating an identical request",
      ],
      links: [dispute],
    },
  ],
  "transunion-hard-inquiry-removal": [
    {
      heading: "An actionable TransUnion inquiry checklist",
      intro:
        "TransUnion distinguishes an inquiry from other report disputes. Its current inquiry FAQ directs consumers to the inquiring company and provides a mail route for fraud information; it explicitly says this inquiry request cannot be done online.",
      columns: ["Situation", "Action", "Record to keep"],
      rows: [
        [
          "Company name is unfamiliar",
          "Contact the company and ask what application or transaction explains the pull",
          "Full report entry and the company's explanation",
        ],
        [
          "Company confirms someone else applied",
          "Ask about its direct letter to TransUnion requesting deletion",
          "Company confirmation and letter/delivery details",
        ],
        [
          "You have information showing fraud",
          "Follow TransUnion's current fraud-mail instructions",
          "Evidence copies and delivery confirmation",
        ],
        [
          "A response arrives",
          "Compare the exact entry on an updated TransUnion report",
          "Response, report date, change and anything still unresolved",
        ],
      ],
      links: [
        tu,
        {
          label: "Identify an unfamiliar company first",
          href: "/who-pulled-my-credit/",
        },
      ],
    },
  ],
  "experian-hard-inquiry-removal": [
    {
      heading: "Follow the Experian inquiry, not a generic deletion claim",
      intro:
        "Use the full Experian report to identify the company and date. Experian's inquiry guidance distinguishes legitimate applications, an unfamiliar creditor, and possible fraud; use its current inquiry-specific assistance rather than assuming a general online dispute fits every case.",
      columns: ["Report detail", "Question to resolve", "What helps"],
      rows: [
        [
          "Full company name and contact",
          "Is it a partner lender behind a transaction you recognize?",
          "Report contact details and application confirmation",
        ],
        [
          "Inquiry date",
          "Does it match prequalification, a later application, or neither?",
          "Dated disclosures and application records",
        ],
        [
          "A possible error or fraudulent application",
          "What specific fact is incorrect?",
          "Relevant records and Experian's current assistance instructions",
        ],
        [
          "Investigation response",
          "Is the same entry still on an updated Experian report?",
          "Before report, response and dated updated report",
        ],
      ],
      links: [
        ficoTiming,
        ex,
        {
          label: "Experian dispute support",
          href: "https://www.experian.com/help/dispute-credit/",
        },
      ],
    },
  ],
  "equifax-hard-inquiry-removal": [
    {
      heading: "Organize the Equifax entry and its evidence",
      intro:
        "Equifax's dispute request form has inquiry-removal and incorrect-person/fraud categories. Choose only the reason that fits your records. Consult the current official form for identification, supporting documents and submission details; this checklist is not a substitute for those instructions.",
      columns: ["Prepare", "Illustrative record", "Why it matters"],
      rows: [
        [
          "Exact inquiry",
          "Example only: Example Finance, April 14, Equifax",
          "Prevents investigating a different bureau entry",
        ],
        [
          "Application sequence",
          "The date you checked a rate and any later formal application",
          "Separates a valid later pull from an alleged mismatch",
        ],
        [
          "Specific factual issue",
          "Wrong person, incorrect date, actual fraud or a documented duplicate",
          "Explains the correction sought without a blanket accusation",
        ],
        [
          "Outcome record",
          "Confirmation, response and updated Equifax report",
          "Shows what changed and what remains",
        ],
      ],
      links: [eq, dispute],
    },
  ],
  "how-long-do-hard-inquiries-stay": [
    {
      heading: "Report visibility, scoring and removal are different clocks",
      intro:
        "Hard inquiries generally remain visible for up to two years. FICO generally considers the previous 12 months of inquiries; the score effect varies by file and model. These are not promises of a deletion date or a particular score recovery.",
      columns: ["Stage", "What it means", "What to do"],
      rows: [
        [
          "Recent application",
          "An accurate entry can remain even if no account opens",
          "Confirm the company and date",
        ],
        [
          "Around 12 months",
          "FICO's inquiry lookback and report visibility differ",
          "Do not infer a fixed point gain",
        ],
        [
          "Around 24 months",
          "The normal reporting period is approaching or has passed",
          "Check the actual report rather than relying only on an estimate",
        ],
        [
          "Still present beyond the expected period",
          "Dates or reporting may need investigation",
          "Save the report, verify the entry date and ask the affected bureau to investigate",
        ],
      ],
      links: [
        ficoTiming,
        ex,
        {
          label: "When waiting makes sense",
          href: "/authorized-inquiry-removal/",
        },
        { label: "When an inquiry needs investigation", href: "/eligibility/" },
      ],
    },
  ],
  "how-to-dispute-a-hard-inquiry": [
    bureauPaths,
    {
      heading: "Read the response before choosing a follow-up",
      intro:
        "An unsuccessful first dispute is a reason to read the findings and identify what remains unexplained, not to repeatedly send an identical accusation.",
      columns: ["Response", "Check", "Next action"],
      rows: [
        [
          "Entry corrected or removed",
          "The exact entry on the affected updated report",
          "Keep both reports and the response; check other bureaus separately",
        ],
        [
          "Entry verified",
          "The stated reason and the application/company match",
          "Supply relevant additional evidence if a real inconsistency remains",
        ],
        [
          "More information requested",
          "The recipient's official secure submission requirements",
          "Provide only necessary records through that secure route",
        ],
        [
          "Unresolved factual problem",
          "What you sent, delivery, response and new evidence",
          "Consider the appropriate consumer complaint channel or qualified advice",
        ],
      ],
      links: [
        dispute,
        {
          label: "Choose the right recipient and write the letter",
          href: "/hard-inquiry-removal-letter/",
        },
      ],
    },
  ],
  "hard-inquiry-removal-letter": [
    {
      heading: "Before sending the sample",
      intro:
        "This letter is a starting structure, not a legal opinion or a promise of deletion. A creditor request and a bureau dispute may need different supporting records. TransUnion's inquiry-specific mail/creditor route differs from its general online dispute flow.",
      checklist: [
        "Replace each bracketed field using your own truthful facts",
        "Identify one exact inquiry and the affected bureau",
        "Attach relevant copies, not your original records",
        "Follow the recipient's current identity-verification instructions in its secure channel",
        "Save the final letter, attachments, delivery confirmation and response",
        "Never claim identity theft or lack of authorization if that is not what happened",
      ],
      links: [dispute, tu, eq],
    },
  ],
  "who-pulled-my-credit": [
    {
      heading: "Match a store name with the actual bank",
      intro:
        "For example, Synchrony says it issues the Amazon Store Card. This illustrates why a retailer and a financing company can have different names; it does not prove that a particular inquiry is yours or that every Amazon-branded card has the same issuer. Verify the exact product, application and date. Source checked October 21, 2026.",
      checklist: [
        "Search your own email around the inquiry date for application, prequalification, financing, decision and the exact report name",
        "Compare the sender and product with the original application rather than trusting a search-result lookalike",
        "Keep the confirmation or disclosure with the private worksheet, without adding passwords or full account numbers",
      ],
      links: [
        {
          label: "Synchrony: Amazon Store Card issuer information",
          href: "https://www.synchrony.com/amazon",
        },
      ],
    },
    {
      heading: "Questions to ask the company listed on your report",
      intro:
        "Use contact details from your full report and an independently verified company website. Do not send passwords or sensitive identity documents to a random search result.",
      checklist: [
        "What application or transaction explains the inquiry dated [date]?",
        "Which store, dealership, broker, app or partner referred it?",
        "Was there a preliminary rate check and a separate formal application?",
        "What records or disclosures explain the request?",
        "If the entry is wrong, what correction will you request and how will you confirm it?",
      ],
      links: [tu, ex],
    },
  ],
  "unauthorized-inquiries": [
    {
      heading: "Use a factual contact script before choosing a path",
      intro:
        "I see an inquiry by [company] dated [date] on [bureau]. Please explain the application or transaction connected to it and the records supporting that request. I am trying to identify the entry before deciding whether there is an error.",
      columns: ["What you learn", "Next step"],
      rows: [
        [
          "A legitimate application matches",
          "Check reporting accuracy; regret alone is not a removal reason",
        ],
        [
          "Access remains unexplained",
          "Keep the explanation and investigate the specific records",
        ],
        [
          "Someone actually applied using your identity",
          "Use official identity-theft recovery and bureau protection resources",
        ],
      ],
      links: [
        tu,
        {
          label: "FTC identity-theft recovery",
          href: "https://www.identitytheft.gov/",
        },
      ],
    },
  ],
  "unrecognized-inquiries": [
    {
      heading: "Match the name before drawing a conclusion",
      intro:
        "A lender's legal name can differ from the store, dealership or app you remember. A similar name in an internet search is not proof of a specific relationship.",
      checklist: [
        "Copy the exact report name, date, bureau and listed contact",
        "Search your own application confirmations and emails around that date",
        "Check whether a store, dealer or broker named financing partners",
        "Ask the listed company which transaction explains the request",
        "Record a confirmed connection or the specific unanswered question",
      ],
      links: [
        {
          label: "Use the private inquiry worksheet",
          href: "/who-pulled-my-credit/#practical-tools",
        },
      ],
    },
  ],
  "identity-theft-inquiries": [
    {
      heading: "Free protective steps come first",
      intro:
        "Possible identity theft can affect more than inquiries. You do not need to buy inquiry assistance to access official protection or recovery resources. A freeze helps restrict new access; it does not delete existing inquiries.",
      checklist: [
        "Review all affected credit reports and save unfamiliar applications",
        "Use IdentityTheft.gov for truthful reporting and a recovery plan",
        "Consult each bureau's current freeze and fraud-alert instructions",
        "Contact affected companies using independently verified details",
        "Keep the report and records secure; do not upload them through this initial review form",
      ],
      links: [
        {
          label: "FTC: identity-theft recovery",
          href: "https://www.identitytheft.gov/",
        },
        {
          label: "TransUnion: credit freeze",
          href: "https://www.transunion.com/credit-freeze",
        },
        {
          label: "Experian: security freeze",
          href: "https://www.experian.com/freeze/center.html",
        },
        {
          label: "Equifax: credit freeze",
          href: "https://www.equifax.com/personal/credit-report-services/credit-freeze/",
        },
      ],
    },
  ],
  "authorized-inquiry-removal": [
    {
      ...eligibility,
      heading:
        "An authorized application can leave a legitimate inquiry without an account",
      intro:
        "Being declined, withdrawing the application or not buying the vehicle does not erase an otherwise legitimate, accurate inquiry. Investigate a separate factual error; do not change a true application into a false fraud allegation.",
    },
  ],
  "auto-loan-hard-inquiries": [
    {
      heading:
        "Organize one financing event without assuming every pull is wrong",
      intro:
        "Illustrative example only: three lenders may each appear after one dealership application. Report entries, scoring treatment and a service's billable scope are three separate counts.",
      columns: ["Illustrative lender", "Date / bureau", "Question to resolve"],
      rows: [
        [
          "Example Auto Finance A",
          "April 14 / Experian",
          "Was it among the lenders receiving the application?",
        ],
        [
          "Example Auto Finance B",
          "April 14 / Equifax",
          "Does the dealer paperwork explain the referral?",
        ],
        [
          "Example Auto Finance C",
          "April 15 / TransUnion",
          "Was a further application or referral made?",
        ],
      ],
      checklist: [
        "Before applying: ask hard or soft, which bureaus, and whether the application will reach multiple lenders",
        "Keep the authorization and lender list",
        "Review any unexplained entry on its own facts",
      ],
      links: [fico],
    },
  ],
  "duplicate-inquiries": [
    {
      heading: "Compare similar entries side by side",
      intro:
        "Illustrative patterns, not client outcomes. Similar lender names alone do not establish a duplicate.",
      columns: ["Pattern", "What it may mean", "Evidence to compare"],
      rows: [
        [
          "One company on Experian and Equifax",
          "One event checked on different reports, not automatically an error",
          "Bureau and application records",
        ],
        [
          "One company on two dates",
          "Separate applications or repeated access",
          "Dates, application IDs and creditor explanation",
        ],
        [
          "Same company/date/bureau repeated",
          "A possible duplicate requiring investigation",
          "Full report entries and transaction record",
        ],
      ],
      links: [dispute],
    },
  ],
  "soft-pull-became-hard-inquiry": [
    {
      heading: "Reconstruct the disclosure timeline",
      intro:
        "A soft inquiry does not literally transform into a hard entry. A later formal application may create a separate hard inquiry. Preserve what was said at each step.",
      columns: ["Step", "Save", "Question"],
      rows: [
        [
          "Rate check / prequalification",
          "Exact soft-check disclosure and date",
          "What did that limited step promise?",
        ],
        [
          "Formal application",
          "Application, consent and submission date",
          "Did you authorize a later check?",
        ],
        [
          "Reported hard inquiry",
          "Company, date and bureau",
          "Does the entry match the later application or conflict with the disclosure?",
        ],
      ],
      checklist: [
        "Keep original screenshots privately",
        "Permanently redact personal data before sharing a public example",
        "Describe a mismatch factually, not as automatic fraud",
      ],
    },
  ],
  "incorrect-person-inquiries": [
    {
      heading: "Mixed file or identity theft? Check more than the inquiry",
      intro:
        "A file-matching error and misuse of your identity are different problems. Inquiry-focused assistance is not a substitute for correcting every affected account or identity record.",
      columns: ["Possible issue", "Check", "Do not assume"],
      rows: [
        [
          "Mixed file",
          "Other names, addresses and accounts that belong to another consumer",
          "That fraud necessarily occurred",
        ],
        [
          "Identity theft",
          "Actual unfamiliar applications or accounts using your identity",
          "That every unfamiliar company name proves identity theft",
        ],
        [
          "Accurate old information",
          "Your own application and address history",
          "That changing an address deletes legitimate history",
        ],
      ],
      links: [dispute],
    },
  ],
  "business-funding-hard-inquiries": [
    {
      heading: "Questions for a business lender or funding broker",
      intro:
        "Our service concerns personal hard inquiries, not funding placement, approval, or business-bureau tradelines.",
      checklist: [
        "Will you check my personal credit, business credit, or both?",
        "Is this step a soft check or a formal application?",
        "Which lenders can receive the application?",
        "Will each lender perform its own credit check?",
        "What records identify the personal guarantee or application?",
      ],
      links: [
        {
          label: "Compare card applications",
          href: "/credit-card-hard-inquiries/",
        },
      ],
    },
  ],
  "credit-card-hard-inquiries": [
    {
      heading: "Identify the application stage",
      intro:
        "The current issuer disclosure controls; policies differ. A denied or cancelled application can still leave an accurate inquiry.",
      columns: ["Step", "What to check"],
      rows: [
        ["Prequalification", "Whether this limited check is described as soft"],
        [
          "Formal card application",
          "Whether submitting it authorizes a hard check",
        ],
        [
          "Credit-limit request",
          "Whether the issuer will use a hard or soft check for this request",
        ],
        [
          "Existing-account review",
          "Whether it is a soft account-management check rather than a new application",
        ],
      ],
      links: [
        {
          label: "Compare hard and soft checks",
          href: "/hard-inquiry-vs-soft-inquiry/",
        },
      ],
    },
  ],
  "hard-inquiry-vs-soft-inquiry": [
    {
      heading: "Hard and soft checks at a glance",
      intro:
        "Transaction names alone do not determine the check. Apartment, utility, telecom, personal-loan and buy-now-pay-later processes vary by provider and stage; read the actual disclosure.",
      columns: ["Question", "Hard inquiry", "Soft inquiry"],
      rows: [
        [
          "Common example",
          "Formal new-credit application",
          "Checking your own report or account review",
        ],
        [
          "Score effect",
          "Can affect scores; depends on model and file",
          "Does not affect credit scores",
        ],
        [
          "What you see",
          "Company and date on the report",
          "Can appear on the report you access",
        ],
        [
          "Unexpected result",
          "Identify the application and disclosure",
          "Do not buy soft-inquiry removal as a score service",
        ],
      ],
      links: [ex],
    },
  ],
  "hard-inquiry-credit-score-impact": [
    {
      heading: "Why one point-per-inquiry calculation cannot work",
      intro:
        "A before/after score comparison does not isolate one inquiry if other report facts or the scoring model changed. We do not calculate a promised score boost.",
      columns: ["Factor", "What to compare"],
      rows: [
        ["Model", "The same score family and version, where known"],
        [
          "Inquiry age",
          "Whether it is within that model's consideration window",
        ],
        [
          "Other changes",
          "Balances, payments, accounts and other report changes",
        ],
        [
          "Loan shopping",
          "Whether the model groups qualifying shopping inquiries",
        ],
      ],
      links: [fico],
    },
  ],
  "how-many-hard-inquiries-is-too-many": [
    {
      heading: "The same count can describe different situations",
      intro:
        "Illustrative education, not lender underwriting rules or approval predictions.",
      columns: [
        "Illustrative file",
        "Same count, different context",
        "Useful question",
      ],
      rows: [
        [
          "Four auto lenders in a short shopping period",
          "Qualifying shopping inquiries may be grouped by a scoring model",
          "Which loan type, dates and model apply?",
        ],
        [
          "Four separate card applications",
          "Separate revolving-credit applications are not the same shopping pattern",
          "What do application timing and the wider file show?",
        ],
        [
          "Four older accurate entries",
          "Visibility can outlast FICO's inquiry lookback",
          "Is there a real error, or is normal aging the relevant path?",
        ],
      ],
      links: [fico],
    },
  ],
  "rate-shopping-hard-inquiries": [
    {
      heading: "Three different meanings of count",
      intro:
        "FICO describes 14-day windows in older versions and 45-day windows in newer versions for qualifying loan shopping. Other models and products can differ. Keep shopping focused and ask which score your lender uses.",
      columns: ["Count", "Illustration", "What it does not establish"],
      rows: [
        [
          "Visible report entries",
          "Several lenders appear individually",
          "That the entries are erroneous",
        ],
        [
          "Scoring treatment",
          "Qualifying applications in a model's window may be grouped",
          "That the entries are deleted",
        ],
        [
          "Paid-service scope",
          "A specialist confirms the included entries before quoting",
          "That FICO's grouping determines your bill",
        ],
      ],
      checklist: [
        "Illustration: three auto applications over ten days may fit either FICO shopping window if they meet that model's criteria",
        "A later application outside the relevant window may be treated differently",
        "FICO also describes ignoring certain recent shopping inquiries for 30 days; this is not a deletion deadline",
      ],
      links: [fico],
    },
  ],
  "mortgage-hard-inquiries": [
    {
      heading: "Before and during an active mortgage application",
      intro:
        "Do not assume a dispute speeds underwriting. Ask your loan officer how a proposed credit-report action could affect an active application.",
      columns: ["Stage", "Ask your lender"],
      rows: [
        [
          "Before preapproval",
          "Will this step use a hard pull, which reports, and what shopping window matters?",
        ],
        [
          "Comparing lenders",
          "Which applications belong to this shopping event?",
        ],
        ["During underwriting", "Could further checks occur before closing?"],
        [
          "Unexpected inquiry",
          "Which company, date and application explain it, and how should a correction be coordinated?",
        ],
      ],
      links: [fico],
    },
  ],
  "permissible-purpose-hard-inquiries": [
    {
      heading: "Legal access and scoring classification are separate questions",
      intro:
        "A separate handwritten permission form is not the only possible basis for consumer-report access. The applicable purpose and the way an inquiry is classified require their own review; this is general information, not legal advice.",
      checklist: [
        "Identify the company, transaction and application",
        "Request the explanation and relevant records",
        "Separate a question about access from a question about hard/soft classification",
        "Use qualified legal advice for unresolved rights, liability or legal-interpretation questions",
      ],
      links: [
        {
          label: "FCRA permissible purposes: 15 U.S.C. § 1681b",
          href: "https://www.law.cornell.edu/uscode/text/15/1681b",
        },
        dispute,
      ],
    },
  ],
  "what-happens-when-hard-inquiries-are-removed": [
    {
      heading: "Verify the change before calling it a result",
      intro:
        "A submitted dispute, monitoring alert and updated full report are different records. Check each affected bureau separately, including when an entry reappears.",
      columns: ["Record", "What it establishes", "What to check next"],
      rows: [
        [
          "Submitted dispute",
          "A request was sent",
          "Receipt and investigation response",
        ],
        [
          "Monitoring alert",
          "A reported notification",
          "The exact entry on the full report",
        ],
        [
          "Updated report",
          "What that bureau currently displays",
          "Before/after entry, report dates and unresolved items",
        ],
        [
          "Score movement",
          "A score changed",
          "Model, report version and other changes; not a guaranteed removal benefit",
        ],
      ],
    },
  ],
  "what-is-a-hard-inquiry": [
    {
      heading: "Read an illustrative report entry",
      intro:
        "Example only, not a client record: Example Finance — April 14 — Experian. The name identifies the inquiring company, the date identifies the event, and the bureau identifies the report. A hard inquiry commonly follows a new-credit application; not every legally permissible access is a hard pull.",
      checklist: [
        "Find the full company name, not only a monitoring abbreviation",
        "Compare the date with an application",
        "Note the affected bureau",
        "Identify the hard/soft section before choosing an action",
      ],
      links: [
        {
          label: "Identify a company you do not recognize",
          href: "/who-pulled-my-credit/",
        },
      ],
    },
  ],
  "24-hour-inquiry-removal": [
    {
      heading: "Four steps with different owners and clocks",
      intro:
        "An urgent application does not create a guaranteed deletion deadline. Confirm the actual deadline with your lender and ask what can realistically be done now.",
      columns: ["Step", "Who controls it", "What can be confirmed"],
      rows: [
        [
          "Prepare a request",
          "You or your chosen specialist",
          "The facts, documents and submission",
        ],
        [
          "Creditor correction",
          "The inquiring company",
          "Its decision and any correction request",
        ],
        [
          "Bureau investigation",
          "The bureau and information provider",
          "Receipt, response and applicable process",
        ],
        [
          "Report refresh",
          "The report/monitoring provider",
          "Whether the exact entry has changed",
        ],
      ],
    },
  ],
  "inquiry-removal-vs-credit-repair": [
    {
      heading: "Compare scope, effort and complete terms",
      intro:
        "A narrow inquiry focus is a service description, not an exemption from applicable credit-services laws. Broader services do not all use the same pricing or subscription model.",
      columns: ["Option", "Scope", "Your role"],
      rows: [
        [
          "Free DIY dispute",
          "Address factual errors directly",
          "Organize records, send requests and track responses",
        ],
        [
          "Inquiry-focused assistance",
          "The hard inquiries included in the agreed scope",
          "Provide facts and updates; specialist manages communications",
        ],
        [
          "Broader credit assistance",
          "Other report issues included by that provider",
          "Compare its actual work, cost, limits and written terms",
        ],
      ],
      links: [dispute],
    },
  ],
  "arizona-hard-inquiry-removal": [
    {
      heading: "Arizona help without an office visit",
      intro:
        "The remote review starts with the same companies, dates and affected reports—not a different price or deletion rule based on your city. The Arizona page also serves visitors following our older Phoenix URL.",
      checklist: [
        "Start with an estimate; no report upload or identity documents are needed in the public form",
        "Ask about your situation and confirm scope before deciding",
        "For wider consumer complaints or legal issues, use official resources rather than assuming inquiry assistance covers them",
      ],
      links: [
        {
          label: "Arizona Attorney General consumer information",
          href: "https://www.azag.gov/consumer",
        },
        { label: "Nationwide remote process", href: "/areas-we-serve/" },
      ],
    },
  ],
  "dealership-inquiries": [
    {
      heading:
        "Bring the dealership application trail, not just the inquiry count",
      intro:
        "Multiple lender entries can follow one financing event. Not buying a car, declining an offer or disliking the count does not by itself invalidate an accurate inquiry.",
      checklist: [
        "Application date and dealership name",
        "Credit authorization and lender-routing disclosures",
        "Any hard/soft representations you saved",
        "Company, date and bureau for each entry",
        "Dealer/lender explanations and the specific inconsistency",
      ],
      links: [
        {
          label: "Why auto lenders can create multiple entries",
          href: "/auto-loan-hard-inquiries/",
        },
        {
          label: "How rate-shopping scoring differs from deletion",
          href: "/rate-shopping-hard-inquiries/",
        },
      ],
    },
  ],
  pricing: [
    {
      heading: "Confirm the count and written scope before choosing",
      intro:
        "An estimate is enough to start. All affected bureaus can be included, but bureau coverage does not by itself define how a lender appearing on two reports is billed. We confirm the included entries, price and written scope before you decide.",
      checklist: [
        "Ask how one lender on more than one bureau is counted",
        "Ask how repeated entries and later inquiries affect the included scope",
        "Confirm any change of tier before agreeing to additional work",
        "Read the actual service agreement for completion, cancellation, refund and fee-collection terms",
        "One-time pricing describes the price structure; this website does not collect payment during the free review",
      ],
      links: [
        { label: "Review service fit and limitations", href: "/eligibility/" },
        { label: "Website terms and separate paid agreement", href: "/terms/" },
      ],
    },
  ],
  "how-it-works": [
    {
      heading: "Who does what at each stage?",
      intro:
        "Updates are by phone, text or email. There is no client portal or automatic credit-monitoring integration. Any later sensitive-document handling should follow the secure method explained during your service, not this public intake.",
      columns: ["Stage", "You provide", "We handle / confirm"],
      rows: [
        [
          "Free review",
          "A situation summary and an approximate count",
          "The affected reports and an appropriate next step",
        ],
        [
          "Scope and terms",
          "The inquiry list and your decision",
          "Included work, plan and written service terms",
        ],
        [
          "Communications",
          "Necessary factual records through the explained secure method",
          "Appropriate requests and organized follow-up",
        ],
        [
          "Responses",
          "Updates and responses you receive",
          "What changed, what remains and further work under the agreement",
        ],
      ],
    },
  ],
  "situations-we-handle": [
    {
      ...eligibility,
      heading: "Not sure which situation fits? Start with the facts",
    },
  ],
  "areas-we-serve": [
    {
      heading: "A remote review, not a local-office claim",
      intro:
        "No office visit is required. Use the online request or verified phone number to explain the affected reports. Any service-specific availability and written terms are confirmed before you decide; this site does not claim staffed offices in every city.",
      checklist: [
        "Tell us which reports are affected",
        "Use an estimate if you do not know the count",
        "Choose your contact preference",
        "Do not send SSNs, account credentials, payment details or documents through the public request",
      ],
    },
  ],
  contact: [
    {
      heading: "Choose online review or a real phone call",
      intro:
        "Call 602-377-6626 or request a free review online. An approximate count is enough. We do not publish an unconfirmed response-time promise or claim 24/7 availability.",
      links: [
        { label: "Call 602-377-6626", href: "tel:+16023776626" },
        {
          label: "Start the short online review",
          href: "/free-inquiry-review/#online-review",
        },
      ],
    },
  ],
  resources: [
    {
      heading: "Four useful starting points",
      intro:
        "Choose the task you need to finish, then follow the detailed guide. Tools are free to use without submitting a lead.",
      links: [
        {
          label: "Understand: hard versus soft inquiries",
          href: "/hard-inquiry-vs-soft-inquiry/",
        },
        {
          label: "Identify: who pulled your credit",
          href: "/who-pulled-my-credit/",
        },
        {
          label: "Act: prepare a factual dispute",
          href: "/how-to-dispute-a-hard-inquiry/",
        },
        {
          label: "Compare: DIY or paid assistance",
          href: "/best-hard-inquiry-removal-services/",
        },
      ],
    },
  ],
  faq: [
    {
      heading: "Start with fit, scope and privacy",
      intro:
        "Accurate legitimate inquiries usually need to age off. A free review helps identify what happened; it is not paid enrollment or an automatic eligibility decision. Cancellation, completion, refunds and fee collection are governed by the applicable agreement, not an invented website guarantee.",
      links: [
        { label: "Eligibility and normal aging", href: "/eligibility/" },
        { label: "Pricing and count questions", href: "/pricing/" },
        { label: "Work and follow-up", href: "/how-it-works/" },
        { label: "Initial-review privacy", href: "/privacy/" },
      ],
    },
  ],
};
