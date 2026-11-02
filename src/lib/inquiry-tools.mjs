export function parseCalendarDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day, 12));
  if (
    year < 1900 ||
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  )
    return null;
  return date;
}
export function addCalendarMonths(value, count) {
  const date = parseCalendarDate(value);
  if (!date || !Number.isInteger(count))
    throw new Error("Invalid calendar date or month count");
  const target = new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + count, 1, 12),
  );
  const last = new Date(
    Date.UTC(target.getUTCFullYear(), target.getUTCMonth() + 1, 0, 12),
  ).getUTCDate();
  target.setUTCDate(Math.min(date.getUTCDate(), last));
  return target.toISOString().slice(0, 10);
}
export function inquiryAgeMilestones(value, bureau = "unsure") {
  if (!["unsure", "experian", "equifax", "transunion"].includes(bureau))
    throw new Error("Invalid bureau");
  return {
    ficoYear: addCalendarMonths(value, 12),
    twoYears: addCalendarMonths(value, 24),
    experianReference:
      bureau === "experian" || bureau === "unsure"
        ? addCalendarMonths(value, 25)
        : null,
  };
}

export const NEXT_STEP_REASONS = [
  ["unsure", "I am not sure where to start"],
  ["unfamiliar", "I do not recognize the company"],
  ["recognized", "I recognize the application"],
  ["mismatch", "A name, date or other detail looks wrong"],
  ["identity", "I suspect someone used my identity"],
];
const officialDispute = {
  label: "CFPB: document a specific report error",
  href: "https://www.consumerfinance.gov/ask-cfpb/how-do-i-dispute-an-error-on-my-credit-report-en-314/",
};
const bureauResources = {
  unsure: {
    label: "Get your official credit reports",
    href: "https://www.annualcreditreport.com/",
  },
  experian: {
    label: "Experian's current inquiry assistance",
    href: "https://www.experian.com/help/dispute-credit/",
  },
  equifax: {
    label: "Equifax's current dispute instructions",
    href: "https://www.equifax.com/personal/credit-report-services/credit-dispute/",
  },
  transunion: {
    label: "TransUnion's inquiry-specific instructions",
    href: "https://www.transunion.com/credit-disputes/dispute-your-credit",
  },
};
export function inquiryNextStep(reason = "unsure", bureau = "unsure") {
  if (
    !NEXT_STEP_REASONS.some(([value]) => value === reason) ||
    !Object.hasOwn(bureauResources, bureau)
  )
    throw new Error("Choose an available inquiry situation and bureau");
  const routes = {
    unsure: {
      title: "Start with the full report",
      steps: [
        "Find the hard-inquiry entry on the actual report, not only an app alert. Save the exact company name, date and affected bureau.",
        "Compare the date with applications or transactions you remember. A company may use a lending partner's name.",
        "Choose the situation that matches what you can establish. You do not need to decide that an inquiry is wrong before identifying it.",
      ],
      limit:
        "This is an organizing aid, not an eligibility decision. A credit denial or an unopened account does not by itself invalidate an inquiry.",
      guide: {
        label: "How to identify who pulled your credit",
        href: "/who-pulled-my-credit/",
      },
    },
    unfamiliar: {
      title: "Identify the company before making a claim",
      steps: [
        "Compare the inquiry date with store, dealership, loan and card applications, including financing partners.",
        "Contact the business using a verified official channel. Ask which application or permissible purpose produced the inquiry and keep its response.",
        "If a specific mismatch remains, record the evidence and use the affected bureau's current inquiry process. If the facts suggest identity theft, take the official recovery steps too.",
      ],
      limit:
        "An unfamiliar company name alone does not prove fraud or establish that an inquiry can be removed.",
      guide: {
        label: "Investigate an unfamiliar inquiry",
        href: "/unrecognized-inquiries/",
      },
    },
    recognized: {
      title:
        "Check accuracy; do not dispute a genuine application just to remove it",
      steps: [
        "Match the company and date with your application records, including any lender partner.",
        "If the inquiry is legitimate and accurate, normal aging is generally the relevant path; scoring and report-visibility periods are different.",
        "If you find a real reporting mismatch, document that specific fact. Being declined, changing your mind or never opening an account is not itself an error.",
      ],
      limit:
        "This tool cannot predict a deletion, score change or credit approval. Do not turn an application you made into an identity-theft claim.",
      guide: {
        label: "Understand an authorized inquiry",
        href: "/authorized-inquiry-removal/",
      },
    },
    mismatch: {
      title: "Document the exact mismatch",
      steps: [
        "Save the affected report and the record that conflicts with it. Compare the same company, date and bureau; entries on different reports are not automatically duplicates.",
        "Explain what is wrong and why. Keep supporting copies, the requested correction and each communication together.",
        "Follow the current bureau and company instructions, preserve confirmation records and compare the response with an updated report.",
      ],
      limit:
        "A discrepancy needs investigation; it is not an automatic removal verdict. Follow the recipient's secure identity-verification instructions outside this tool.",
      guide: {
        label: "Prepare a factual inquiry dispute",
        href: "/how-to-dispute-a-hard-inquiry/",
      },
    },
    identity: {
      title: "Protect your identity as well as reviewing the inquiry",
      steps: [
        "Use IdentityTheft.gov for the current official recovery plan. You do not need to buy inquiry assistance to use it.",
        "Review the affected reports for unfamiliar accounts or other activity and follow the official freeze and fraud-alert instructions where appropriate.",
        "Contact the business through its official channel and retain relevant records. Use each affected bureau's fraud/inquiry instructions for supporting documents.",
      ],
      limit:
        "A freeze can restrict future access; it does not erase existing inquiries. This tool does not confirm identity theft or file a report or dispute.",
      guide: {
        label: "Read the identity-theft inquiry guide",
        href: "/identity-theft-inquiries/",
      },
    },
  };
  const route = routes[reason];
  return {
    ...route,
    bureauNote:
      bureau === "transunion"
        ? "TransUnion's inquiry FAQ says an inquiring company can request deletion or fraud information can be mailed. It says that particular inquiry request is not available online; use the current instructions."
        : "Use the current inquiry-specific instructions for every bureau showing the entry; general account-dispute options may differ.",
    links: [
      ...(reason === "identity"
        ? [
            {
              label: "FTC: start the free identity-theft recovery plan",
              href: "https://www.identitytheft.gov/",
            },
          ]
        : []),
      bureauResources[bureau],
      officialDispute,
      route.guide,
    ],
  };
}

export function inquiryNextStepText(plan) {
  return [
    "PRIVATE INQUIRY NEXT STEPS",
    plan.title,
    "",
    ...plan.steps.map((step, i) => `${i + 1}. ${step}`),
    "",
    plan.limit,
    plan.bureauNote,
    "",
    ...plan.links.map(
      (link) =>
        `${link.label}: ${link.href.startsWith("/") ? "https://www.inquiryremoval.com" : ""}${link.href}`,
    ),
    "",
    "Educational organizing aid only. Nothing has been submitted. No guaranteed deletion, score change or approval.",
  ].join("\n");
}

export const LETTER_SAMPLE = `[Your full name]
[Your mailing address]
[Date]

To: [Credit bureau or inquiring company; verify its current address]
Subject: Investigation of a specific credit inquiry

I am writing about the inquiry by [exact company name] dated [inquiry date] on my [affected bureau] credit report. My report or confirmation reference, if applicable, is [reference].

I believe the entry is incorrect because [describe only the specific facts that are true and explain the mismatch]. The relevant records show [brief factual explanation].

Please investigate this inquiry and correct or remove it if your records confirm that it should not be reported. If you are the inquiring company, please explain the application or transaction and the basis for the request, and tell me what correction you will request if an error is confirmed.

Enclosed are copies of [relevant report page and supporting records]. I have kept the originals. Please provide the result and any updated report or correction confirmation using [appropriate contact details].

Sincerely,
[Your name]

Attachments: [list only the copies actually included]

Before sending: use the recipient's current secure identity-verification instructions. This sample does not assert fraud, promise deletion, or replace bureau-specific requirements.`;
export const WORKSHEET_SAMPLE = `PRIVATE INQUIRY WORKSHEET — keep on your own device
Do not include SSNs, passwords, full account numbers or identity documents.

Company name exactly as reported:
Inquiry date:
Affected bureau:
Contact shown on the full report:
Application/store/dealership you remember:
Application date and any later application step:
Disclosure or record available:
Company contacted / date / explanation:
Specific mismatch still unresolved:
Request recipient / channel / date:
Delivery or confirmation record:
Response date and explanation:
Updated report date / confirmed change / what remains:

Repeat separately for each affected entry. A repeated company on different bureaus is not automatically an erroneous duplicate.`;
