import type { GuidePage } from "./guides";

export const troubleshootingGuides: GuidePage[] = [
  {
    slug: "hard-inquiry-dispute-denied",
    kind: "article",
    category: "resources",
    eyebrow: "After the dispute response",
    title: "Hard Inquiry Dispute Denied or Verified: What to Do Next",
    seoTitle: "Hard Inquiry Dispute Denied or Verified? Next Steps",
    description:
      "Read an unsuccessful hard inquiry dispute response, identify missing evidence, and choose a factual follow-up. Includes a free response-review checklist.",
    supporting:
      "A verified inquiry or an unsuccessful dispute is not a reason to send the same letter again. Start with what the response actually says, compare it with the exact report entry, and identify the fact that remains unresolved. This guide helps you choose a next step without inventing a fraud claim or assuming another round will produce a deletion.",
    primaryCta: "Discuss My Inquiry Response",
    secondaryCta: "Use the Response Checklist",
    secondaryTarget: "#practical-next-steps",
    quickTitle: "What should you do after an unsuccessful inquiry dispute?",
    quickAnswer:
      "Read the result, match the company, date and bureau to your original request, and compare the same entry on an updated report. If a specific inconsistency remains, organize the response and relevant new evidence before choosing a follow-up. If the application and reporting are accurate, repeated disputes are not a substitute for normal aging.",
    takeaways: [
      "Verified, incomplete and still pending describe different situations.",
      "A monitoring alert is not the full investigation result.",
      "A useful follow-up explains what remains wrong and what supports that explanation.",
      "A complaint or consumer statement does not guarantee deletion or approval.",
    ],
    sections: [
      {
        heading: "Read the result before deciding that the dispute was denied",
        body: [
          "Save the complete response, not just an app notification. Note who sent it, the response date, the reference number and the inquiry it describes. A request for identity verification or additional records is different from a completed investigation that leaves the entry unchanged.",
          "Check the recipient too. A response about an Experian entry does not settle what appears on TransUnion or Equifax. A creditor's explanation and a bureau's investigation result are separate records.",
        ],
        visual: {
          title: "Build a response review file",
          items: [
            "Original entry",
            "Your request",
            "Response",
            "Remaining issue",
          ],
        },
      },
      {
        heading: "Compare the response with the exact inquiry",
        body: [
          "Open a current report from the affected bureau. Match the company name and inquiry date, then compare the record with your application history. Do not infer a deletion from a score change or assume an inquiry remains simply because an older alert is still visible.",
          "Make a short comparison: what you asked to be investigated, what the response explained, and what it did not explain. If the named company is a partner lender behind an application you recognize, that may resolve the identification question without establishing a reporting error.",
        ],
      },
      {
        heading: "Identify the missing fact, not a stronger accusation",
        body: [
          "Useful follow-up records depend on the actual issue. A dated application confirmation, a disclosure describing a soft check, a wrong-person mismatch, or a company's written explanation may help clarify an inconsistency. No single document is required or decisive in every case.",
          "For your own notes, try: ‘My request concerned [specific entry]. The response explains [finding], but [specific mismatch] remains unresolved. The attached [record] helps explain why.’ This is an organizing aid, not a legal form or an assertion that every inquiry must be removed.",
        ],
        bullets: [
          "Keep the original request, relevant attachments and delivery confirmation.",
          "Explain which fact each additional record supports.",
          "Follow the recipient's current secure identity-verification instructions.",
          "Do not report identity theft unless that is what actually happened.",
        ],
      },
      {
        heading: "Choose the appropriate follow-up route",
        body: [
          "If the company behind the inquiry has not explained the application, use its verified contact details to ask about the transaction. TransUnion's inquiry-specific guidance describes a company-requested deletion route and a separate fraud process; a generic online dispute is not interchangeable with every inquiry request.",
          "If a genuine factual issue remains after a completed bureau dispute, review the bureau's response instructions and the CFPB's options for unresolved disputes. A brief consumer statement may explain your disagreement, but it is not an inquiry deletion or a guaranteed score change. For a persistent or consequential issue, qualified consumer-law advice may be appropriate.",
        ],
      },
      {
        heading: "Check current instructions before a CFPB complaint",
        body: [
          "The CFPB's current credit-reporting complaint notice asks about an earlier direct dispute, whether it is still pending and whether more than 45 days have passed. Its instructions also caution against a premature complaint while an investigation remains active. Read the linked notice and the current submission questions before proceeding; do not treat a complaint as a fast-deletion service.",
          "Keep the account of events factual and consistent. Explain the unresolved issue, include the relevant response and records, and avoid adding sensitive material that the official process does not request. This guide explains an available channel, not whether a particular legal claim is valid.",
        ],
      },
      {
        heading: "Know when another dispute is not the answer",
        body: [
          "If the response connects an accurately reported inquiry to your legitimate application, being declined, not opening an account or regretting the application does not by itself create a removal reason. Focus on the lender's actual decision reasons and the rest of your credit profile rather than escalating an unsupported allegation.",
          "Optional specialist help is useful when you want assistance organizing the record and evaluating a supported next step. It cannot guarantee that a verified inquiry will disappear. You can use the official dispute and consumer-protection resources yourself without paying a company.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does verified mean the inquiry can never change?",
        answer:
          "It describes the result of that review, not a promise about every future fact. A relevant unresolved inconsistency should be documented; an accurate application is not invalid merely because you dislike the result.",
      },
      {
        question: "Should I resend the same letter?",
        answer:
          "First identify what the response addressed and what remains unresolved. Repeating an unsupported or unclear request does not add evidence and is not a reliable removal strategy.",
      },
      {
        question: "Does a complaint guarantee removal?",
        answer:
          "No. Follow the current official complaint instructions and describe the actual unresolved issue. No specific deletion, timing, score change or approval is guaranteed.",
      },
      {
        question: "What if I was actually denied a loan or card?",
        answer:
          "A credit denial and an unsuccessful report dispute are different events. Read the lender's adverse-action notice and use our separate guide to inquiry-related credit denials.",
      },
    ],
    related: [
      {
        label: "Start a factual inquiry dispute",
        href: "/how-to-dispute-a-hard-inquiry/",
      },
      {
        label: "Prepare a letter and evidence",
        href: "/hard-inquiry-removal-letter/",
      },
      {
        label: "Denied credit because of inquiries",
        href: "/denied-credit-too-many-inquiries/",
      },
      {
        label: "TransUnion inquiry-specific process",
        href: "/transunion-hard-inquiry-removal/",
      },
    ],
    sources: [
      {
        label: "CFPB: disagreeing with dispute results",
        href: "https://www.consumerfinance.gov/ask-cfpb/what-if-i-disagree-with-the-results-of-my-credit-report-dispute-en-1327/",
      },
      {
        label: "CFPB: current credit-reporting complaint notice",
        href: "https://www.consumerfinance.gov/complaint/credit-and-consumer-reporting-complaint-notice-2/",
      },
      {
        label: "TransUnion: reading investigation results",
        href: "https://www.transunion.com/blog/credit-advice/how-to-read-your-dispute-investigation-results",
      },
      {
        label: "TransUnion: inquiry-specific instructions",
        href: "https://www.transunion.com/credit-disputes/dispute-your-credit",
      },
      {
        label: "FTC: disputing credit-report errors",
        href: "https://consumer.ftc.gov/articles/disputing-errors-your-credit-reports",
      },
    ],
  },
  {
    slug: "denied-credit-too-many-inquiries",
    kind: "article",
    category: "resources",
    eyebrow: "Understand an inquiry-related credit denial",
    title: "Denied for Too Many Credit Inquiries: What Can You Actually Do?",
    seoTitle: "Denied for Too Many Credit Inquiries? What to Do Next",
    description:
      "Denied a card or loan because of too many inquiries? Read the decision notice, check the right report, and separate accurate applications from reporting errors.",
    supporting:
      "A lender mentioning too many inquiries does not mean every inquiry is wrong or that removing one guarantees approval. Start with the decision notice, the report the lender used and the applications behind those entries. Then separate a possible reporting problem from an underwriting decision about otherwise accurate information.",
    primaryCta: "Discuss My Inquiry Situation",
    secondaryCta: "Use the Denial Review Checklist",
    secondaryTarget: "#practical-next-steps",
    quickTitle: "What is the next step after an inquiry-related denial?",
    quickAnswer:
      "Read the lender's adverse-action notice and identify the reporting company and stated reasons. Check that report for the exact inquiries and any factual errors. Ask the lender about its review process before submitting another application. A legitimate inquiry can remain even if the application was declined, and neither a dispute nor removal guarantees a different lending decision.",
    takeaways: [
      "A credit denial is not the same as an inaccurate credit-report entry.",
      "The report and reasons used by the lender matter more than an app's general score summary.",
      "There is no single inquiry count that guarantees approval or denial at every lender.",
      "Ask whether a new application or reconsideration would require another hard pull.",
    ],
    sections: [
      {
        heading: "Start with the adverse-action notice",
        body: [
          "Keep the lender's decision notice and application confirmation together. The CFPB explains that a rejected credit application should come with specific reasons or instructions for requesting them. Read the notice's deadlines and contact instructions rather than assuming a score alert explains the whole decision.",
          "If a consumer report contributed to the decision, identify the reporting company named in the notice. TransUnion explains the right to request a free report from the reporting agency used within 60 days of the adverse action. That report request is different from applying for credit again.",
        ],
        visual: {
          title: "Separate the decision from the report",
          items: [
            "Lender notice",
            "Affected report",
            "Application trail",
            "Next question",
          ],
        },
      },
      {
        heading: "Check what the lender actually said about inquiries",
        body: [
          "Copy the exact reason into your private notes. ‘Too many recent inquiries,’ limited credit history, high balances and other reasons describe different concerns. Do not assume an inquiry was the only factor when the notice lists several.",
          "If the reason is unclear, ask the lender which report and application it concerns and whether it offers a review of the decision. Ask before authorizing another pull. A reconsideration option, waiting period or approval standard belongs to that lender; this website cannot prescribe a universal one.",
        ],
      },
      {
        heading: "Match each inquiry to its application",
        body: [
          "Use the company name, date and bureau on the actual report. Compare those details with card applications, dealership visits, loan shopping and any later step after a preliminary rate check. A lender's legal name may differ from the store or app you remember.",
          "An accurate inquiry may still appear when an application was declined or abandoned. No resulting account is not, by itself, evidence of fraud or an invalid pull. An unknown company should be identified before you decide which factual issue needs investigation.",
        ],
      },
      {
        heading:
          "Distinguish a reporting error from accurate recent applications",
        body: [
          "If an entry has a specific factual problem, preserve the supporting record and use the affected bureau's current inquiry process. If someone used your identity, start with the official recovery and protection steps; do not use an identity-theft claim to describe an application you made.",
          "If the entries accurately reflect legitimate applications, another dispute does not resolve the lender's concern about recent credit seeking. Review the complete decision reasons and avoid filing repeated applications just to test whether the result changes. Whether waiting or another product is appropriate depends on your situation, not a promised inquiry cutoff.",
        ],
      },
      {
        heading: "Understand why count and score are not the same thing",
        body: [
          "A report can list several lender inquiries while a scoring model groups qualifying loan-shopping activity. The treatment depends on the product and model. Do not assume unrelated card applications receive the same treatment as qualifying mortgage, auto or student-loan shopping.",
          "FICO describes inquiry effects in the context of the full credit history, not a fixed point value multiplied by the number of entries. A lender can also use its own decision rules. Removing an entry therefore does not establish a particular score increase or a future approval.",
        ],
      },
      {
        heading: "Make a focused plan before the next application",
        body: [
          "Keep one private record containing the decision notice, affected report, application dates, questions for the lender and any actual reporting mismatch. Ask whether a preliminary eligibility check is soft and what later action would authorize a hard pull; use the current disclosure, not a general promise from another website.",
          "Our optional review can help organize the hard-inquiry side of the situation. It is not lending, an approval service or a guarantee that accurate inquiries can be erased. Consumers can obtain reports and pursue supported disputes directly without purchasing inquiry-removal assistance.",
        ],
      },
    ],
    faqs: [
      {
        question: "How many inquiries will make a lender deny me?",
        answer:
          "There is no universal cutoff. The product, lender, inquiry timing and wider credit file matter. Use the actual notice rather than treating a general inquiry count as an approval prediction.",
      },
      {
        question: "Can I remove an inquiry because the application was denied?",
        answer:
          "Denial alone does not invalidate an accurate inquiry from a legitimate application. A distinct factual reporting or access issue may still deserve investigation.",
      },
      {
        question: "Will removing an inquiry reverse the denial?",
        answer:
          "No outcome is guaranteed. A report correction, score calculation and lender's decision are separate matters, and the original decision may have involved several factors.",
      },
      {
        question: "Should I apply again immediately?",
        answer:
          "Ask the lender about its review process and whether another request would create a hard pull. There is no universal reapplication interval or assurance that another application will succeed.",
      },
    ],
    related: [
      {
        label: "How many inquiries is too many?",
        href: "/how-many-hard-inquiries-is-too-many/",
      },
      {
        label: "Identify an unfamiliar company",
        href: "/who-pulled-my-credit/",
      },
      {
        label: "Understand rate-shopping treatment",
        href: "/rate-shopping-hard-inquiries/",
      },
      {
        label: "An unsuccessful inquiry dispute",
        href: "/hard-inquiry-dispute-denied/",
      },
      {
        label: "Review an authorized inquiry",
        href: "/authorized-inquiry-removal/",
      },
    ],
    sources: [
      {
        label: "CFPB: a credit application denied because of a report",
        href: "https://www.consumerfinance.gov/ask-cfpb/my-credit-application-was-denied-because-of-my-credit-report-what-can-i-do-en-1253/",
      },
      {
        label: "TransUnion: steps after being denied credit",
        href: "https://www.transunion.com/blog/credit-advice/denied-credit-next-steps",
      },
      {
        label: "Experian: denial and inquiry reporting",
        href: "https://www.experian.com/blogs/ask-experian/does-getting-rejected-affect-your-credit-score/",
      },
      {
        label: "myFICO: inquiries and score impact",
        href: "https://www.myfico.com/credit-education/credit-reports/does-checking-credit-score-lower-it",
      },
      {
        label: "FTC: free identity-theft recovery steps",
        href: "https://www.identitytheft.gov/",
      },
    ],
  },
];
