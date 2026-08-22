import type { GuidePage } from "../guides";

const proofDisclaimer =
  "Individual results vary. No specific deletion, timeline, score increase, or approval is guaranteed.";

export const softPullGuide: GuidePage = {
    slug: "soft-pull-became-hard-inquiry",
    kind: "service",
    category: "situations",
    eyebrow: "Soft pull became hard inquiry",
    title: "Soft Pull Became Hard Inquiry? Review What You Were Told",
    seoTitle: "Soft Pull Became Hard Inquiry Help | Inquiry Removal",
    description:
      "Soft pull became a hard inquiry? Review what you were told, preserve the evidence, compare the report entry, and get specialist help with removal.",
    supporting:
      "A soft pull became a hard inquiry after you were told the credit check would not affect your credit. That disconnect matters. Maybe it happened during prequalification, rate checking, financing, or an eligibility review where the company specifically described the inquiry as soft. Inquiry Removal helps you preserve what you were told, match it against what appeared on Experian, Equifax, or TransUnion, and pursue the appropriate removal process. We organize the evidence, prepare the communications, review the responses, and continue the follow-through from there.",
    primaryCta: "Review My Soft-Pull Situation",
    secondaryCta: "See How the Process Works",
    secondaryTarget: "/how-it-works/",
    quickTitle: "Were you told it would be a soft pull?",
    quickAnswer:
      "If you were told a credit check would be soft but a hard inquiry appeared, preserve the promise and compare it with the exact report entry. The strongest review connects the wording you saw or heard, the application flow, the company name, the inquiry date, and the affected bureau. Inquiry Removal can organize that evidence and handle the removal communications and follow-through for you.",
    takeaways: [
      "Save the exact language that described the credit check as soft, no-impact, or prequalification-only.",
      "Record the company name, inquiry date, and affected bureau exactly as reported.",
      "A soft inquiry does not affect credit scores, while a hard inquiry can be considered by scoring models.",
      "The dispute should focus on the mismatch between what was represented and what actually appeared on the report.",
    ],
    sections: [
      {
        heading: "What Does It Mean When a Soft Pull Becomes a Hard Inquiry?",
        body: [
          "A soft pull became a hard inquiry when a credit check you understood to be non-impacting or soft was ultimately recorded as a hard inquiry on one or more credit reports. In plain language, the soft inquiry turned into a hard inquiry on the report even though that was not what you expected.",
          "The issue is the mismatch. Prequalification, rate checking, financing tools, and eligibility screens can use different credit-check processes, so the exact language you were shown and the exact entry that appeared both matter.",
        ],
        cards: [
          { title: "Prequalification", body: "You checked eligibility or possible terms and expected only a soft credit review." },
          { title: "Rate check", body: "The company said checking a rate would not affect your credit, then a hard pull appeared." },
          { title: "Financing screen", body: "A merchant or lender presented the step as preliminary or no-impact before the inquiry posted." },
          { title: "Verbal promise", body: "A representative specifically told you the pull would be soft or would not affect your credit." },
        ],
        visual: { title: "Soft-pull promise versus report", items: ["Promise", "Application", "Inquiry", "Bureau", "Evidence"] },
      },
      {
        heading: "What Evidence Should You Save If a Soft Pull Turned Hard?",
        body: [
          "Save anything that shows how the credit check was described before the hard inquiry appeared.",
          "Screenshots are especially useful when an online flow says 'soft pull,' 'no impact,' 'check your rate,' or similar language. Emails, text messages, recorded disclosures you legally possess, application pages, chat transcripts, and written terms can also help connect the promise to the resulting inquiry.",
        ],
        bullets: [
          "Screenshot of the prequalification or rate-check language",
          "Email or text describing the credit check",
          "Application confirmation and date",
          "Exact hard inquiry entry from each affected bureau",
          "Any response from the lender or company explaining the pull",
        ],
      },
      {
        heading: "How Do You Dispute a Hard Inquiry After a Soft-Pull Promise?",
        body: [
          "Dispute the hard inquiry by documenting the exact representation, the exact report entry, and why the hard pull does not match what you were told or agreed to during the transaction.",
          "The goal is not to send a generic complaint. It is to make the factual mismatch easy to understand: what the company represented, what action you took in reliance on that representation, and what ultimately appeared on Experian, Equifax, or TransUnion.",
        ],
      },
      {
        heading: "What Does Inquiry Removal Do With a Soft-Pull Dispute?",
        body: [
          "Inquiry Removal turns the soft-pull-versus-hard-pull problem into an organized removal case.",
          "We map the company, dates, bureau entries, and supporting evidence; prepare the dispute communications; review the responses; track confirmed changes; and continue the follow-through when another step is needed under your service agreement.",
        ],
        cards: [
          { title: "Preserve the promise", body: "We start with what you were told rather than treating the inquiry as an isolated line item." },
          { title: "Match the report", body: "The evidence is connected to the exact inquiry date, company, and bureau entry." },
          { title: "Build the communication", body: "The dispute centers on the specific mismatch instead of generic wording." },
          { title: "Review the response", body: "We compare what comes back with the original issue and organize the next step." },
        ],
      },
      {
        heading: "Does a Soft Inquiry Affect Your Credit Score?",
        body: [
          "A soft inquiry does not affect your credit score, while a hard inquiry may have a temporary negative impact and can remain visible on a credit report for up to two years.",
          "That difference is exactly why a consumer who was specifically promised a soft check may care when the resulting entry is hard instead.",
        ],
      },
      {
        heading: "How Much Does Soft-Pull Inquiry Removal Cost?",
        body: [
          "Soft-pull inquiry removal uses the same one-time plans as the rest of Inquiry Removal: $199 for 1 to 10 total hard inquiries, $299 for 11 to 30, and $499 for 31 or more.",
          "The affected Experian, Equifax, and TransUnion reports can be included based on the total inquiry count. There is no monthly membership fee.",
        ],
      },
    ],
    faqs: [
      { question: "What if I was told soft pull but a hard inquiry appeared?", answer: "Preserve the exact representation and the resulting report entry. The review should connect what the lender said, what you did, when the inquiry appeared, and which bureau reported it. Inquiry Removal can organize and handle the dispute process for you." },
      { question: "Can prequalification cause a hard inquiry?", answer: "Some prequalification processes use soft inquiries, but the process can vary by company and product. The important question in your case is what the company represented and what you actually authorized before the hard inquiry appeared." },
      { question: "What proof should I keep?", answer: "Keep screenshots, emails, texts, application pages, disclosures, confirmation messages, and the exact credit-report inquiry entry. The more directly the evidence connects the promise to the pull, the clearer the review becomes." },
      { question: "Can a hard inquiry appear on only one bureau?", answer: "Yes. A company may pull one bureau and not the others, so Experian, Equifax, and TransUnion can show different inquiry lists from the same period." },
      { question: "Do soft pulls affect credit scores?", answer: "No. Soft inquiries do not affect credit scores. Hard inquiries can be considered by scoring models and may have a temporary negative impact." },
      { question: "Do you guarantee removal?", answer: proofDisclaimer },
    ],
    related: [
      { label: "Hard inquiry vs soft inquiry", href: "/resources/" },
      { label: "How to dispute a hard inquiry", href: "/how-to-dispute-a-hard-inquiry/" },
      { label: "Unauthorized hard inquiries", href: "/unauthorized-inquiries/" },
      { label: "How long hard inquiries stay", href: "/how-long-do-hard-inquiries-stay/" },
    ],
    sources: [
      { label: "CFPB: what is a credit inquiry?", href: "https://www.consumerfinance.gov/ask-cfpb/what-is-a-credit-inquiry-en-1317/" },
      { label: "TransUnion: what is a hard inquiry?", href: "https://www.transunion.com/blog/credit-advice/what-is-a-hard-inquiry" },
    ],
  };
