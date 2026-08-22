import type { GuidePage } from "../guides";

const proofDisclaimer =
  "Individual results vary. No specific deletion, timeline, score increase, or approval is guaranteed.";

export const unauthorizedGuide: GuidePage = {
    slug: "unauthorized-inquiries",
    kind: "service",
    category: "situations",
    eyebrow: "Unauthorized hard inquiry removal",
    title: "Unauthorized Hard Inquiry? Remove Pulls You Did Not Approve",
    seoTitle: "Unauthorized Hard Inquiry Removal | Inquiry Removal",
    description:
      "Unauthorized hard inquiry? Get a focused review, dispute support, response tracking, and continued follow-through across affected credit bureaus.",
    supporting:
      "An unauthorized hard inquiry can leave you staring at a credit report and asking one simple question: who gave this company permission to pull my credit? If you do not recognize the application, do not remember approving a hard pull, or believe a company accessed your report without permission, Inquiry Removal helps you organize the facts and pursue the removal process. We identify the inquiry, review what happened, prepare the dispute communications, track the responses, and continue the follow-through across the affected credit bureaus.",
    primaryCta: "Review My Unauthorized Inquiries",
    secondaryCta: "See How the Process Works",
    secondaryTarget: "/how-it-works/",
    quickTitle: "Company pulled your credit without permission?",
    quickAnswer:
      "An unauthorized hard inquiry should be reviewed against the exact report entry, the company behind it, the transaction involved, and what permission or permissible purpose existed. If the inquiry still does not match anything you authorized, Inquiry Removal can organize the facts, prepare the dispute communications, review the responses, and continue the removal follow-through for you.",
    takeaways: [
      "Record the exact company name, bureau, and inquiry date before doing anything else.",
      "An unfamiliar company name can sometimes be a bank or financing partner behind a transaction you remember.",
      "A company cannot obtain a consumer report without a permissible purpose allowed by law.",
      "If identity theft may be involved, protecting the rest of your credit should happen alongside inquiry removal.",
    ],
    sections: [
      {
        heading: "What Is an Unauthorized Hard Inquiry?",
        body: [
          "An unauthorized hard inquiry is a credit-report pull that you believe was made without a valid application, permission, transaction, or other permissible purpose that fits what actually happened.",
          "The key is not simply that you dislike the inquiry or do not remember the creditor name. The review starts by connecting the exact report entry to the company, date, transaction, application, and authorization facts.",
        ],
        cards: [
          { title: "No application", body: "You did not apply with the company and cannot connect the inquiry to a transaction you initiated." },
          { title: "No remembered permission", body: "You recognize the business but do not remember agreeing to a hard credit check." },
          { title: "Unknown lender", body: "The creditor name does not match any company, dealership, or financing event you recognize." },
          { title: "Possible identity theft", body: "The inquiry may be tied to an application someone else submitted using your information." },
        ],
        visual: { title: "Unauthorized inquiry review", items: ["Company", "Date", "Application", "Permission", "Next step"] },
      },
      {
        heading: "How Do You Remove an Unauthorized Hard Inquiry?",
        body: [
          "Remove an unauthorized hard inquiry by documenting the exact entry, identifying the company that accessed the report, determining why the pull occurred, and disputing the inquiry when the facts show it should not be there. The same process applies when the report shows an unauthorized credit inquiry or hard inquiry without permission.",
          "Inquiry Removal handles that process for clients who do not want to research every company, prepare every communication, interpret every response, and decide on each follow-up step themselves.",
        ],
        bullets: [
          "Capture the inquiry exactly as it appears",
          "Identify the company behind the reported name",
          "Compare the pull with applications or transactions near that date",
          "Preserve disclosures, messages, emails, or other records",
          "Track the response and any report change",
        ],
      },
      {
        heading: "Can a Company Pull Your Credit Without Your Permission?",
        body: [
          "A company does not always need a separate handwritten signature to access a credit report, but it does need a permissible purpose recognized by federal credit-reporting law.",
          "That is why the better question is not only 'Did I sign something?' It is 'What transaction, application, account relationship, written instruction, or other permissible purpose did this company rely on?' If the answer does not fit the facts, the inquiry deserves a closer review.",
        ],
      },
      {
        heading: "What Does Inquiry Removal Do With Unauthorized Inquiries?",
        body: [
          "Inquiry Removal organizes the unauthorized hard inquiry problem from the report entry through the dispute and response process.",
          "We map the company names, dates, bureaus, and related events; prepare the communications; review the responses; track confirmed removals; and continue the follow-through when another round is needed under the service agreement.",
        ],
        cards: [
          { title: "Identify", body: "We start with the exact inquiry rather than assumptions about the company name." },
          { title: "Organize", body: "The bureaus, dates, applications, and supporting facts are placed into one clear inquiry trail." },
          { title: "Dispute", body: "The communications are prepared around the specific issue instead of a generic one-size-fits-all letter." },
          { title: "Follow through", body: "Responses are reviewed and the next step is organized rather than leaving you to interpret the result alone." },
        ],
      },
      {
        heading: "What If the Unauthorized Inquiry Is Identity Theft?",
        body: [
          "If the unauthorized inquiry came from identity theft, inquiry removal should happen alongside steps that protect the rest of your credit and personal information.",
          "That can include reviewing all three reports, reporting identity theft through official resources, considering fraud alerts or credit freezes, checking for accounts you did not open, and preserving the records that connect the fraudulent application to the inquiry.",
        ],
      },
      {
        heading: "How Much Does Unauthorized Inquiry Removal Cost?",
        body: [
          "Unauthorized inquiry removal uses Inquiry Removal's standard one-time pricing: $199 for 1 to 10 total inquiries, $299 for 11 to 30, and $499 for 31 or more.",
          "The same plan can include the affected Experian, Equifax, and TransUnion reports based on the total inquiry count. Start with the free review if you are not sure how many inquiries are involved.",
        ],
      },
    ],
    faqs: [
      { question: "What should I do if I see a hard inquiry I did not authorize?", answer: "Start with the exact company name, inquiry date, and bureau. Determine whether the company name connects to any application or transaction you remember. If it still appears unauthorized, preserve the supporting facts and pursue the dispute or removal path that fits the situation." },
      { question: "Can a company pull my credit without a signature?", answer: "A separate signature is not the only possible basis for access. The important question is whether the company had a permissible purpose under applicable credit-reporting law. The application, transaction, account relationship, disclosure, and other facts should be reviewed together." },
      { question: "What if I do not recognize the creditor name?", answer: "Identify the company before assuming fraud. Retail financing, dealership lenders, parent companies, and partner banks can appear under names different from the brand you remember. If the name still cannot be connected to a legitimate event, investigate further." },
      { question: "Can unauthorized hard inquiries be removed from all three bureaus?", answer: "Yes, inquiries on Experian, Equifax, and TransUnion can each be reviewed when the facts support a dispute or removal request. The same event can appear differently across the three reports." },
      { question: "What if I already disputed the inquiry myself?", answer: "You can still start a review. Bring the current reports, what you sent, and any response you received so the inquiry trail can be reviewed from its current status rather than simply repeating the same step." },
      { question: "Do you guarantee removal of an unauthorized inquiry?", answer: proofDisclaimer },
    ],
    related: [
      { label: "Identity theft hard inquiries", href: "/identity-theft-inquiries/" },
      { label: "Hard inquiry you do not recognize", href: "/unrecognized-inquiries/" },
      { label: "How to dispute a hard inquiry", href: "/how-to-dispute-a-hard-inquiry/" },
      { label: "Can hard inquiries be removed?", href: "/eligibility/" },
    ],
    sources: [
      { label: "CFPB: who can request your credit report", href: "https://www.consumerfinance.gov/ask-cfpb/who-can-request-to-see-my-credit-report-en-1305/" },
      { label: "CFPB permissible-purpose advisory opinion", href: "https://www.consumerfinance.gov/rules-policy/final-rules/fair-credit-reporting-permissible-purposes-for-furnishing-using-and-obtaining-consumer-reports/" },
      { label: "TransUnion unrecognized inquiry guidance", href: "https://www.transunion.com/blog/credit-advice/unrecognized-inquiry-on-credit-report" },
    ],
  };
