import type { Metadata } from "next";
import Link from "next/link";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { PageHero } from "@/components/PageHero";
import { faqSchema } from "@/lib/schema";

const FAQS = [
  {
    q: "Will this actually work for my situation?",
    a: "Yes — if you have unauthorized, excessive, or fraudulent hard inquiries on your credit report, we can dispute them using federal law. We offer a completely free consultation specifically so you can see exactly what's removable and what your score improvement could look like before you spend anything. No two credit reports are identical, which is why we look at yours first.",
  },
  {
    q: "Can you really remove hard inquiries — or just dispute them?",
    a: (
      <>
        We have permanently removed over 100,437 hard inquiries across{" "}
        <Link href="/remove-hard-inquiry-experian" className="inline-bureau-link">
          Experian
        </Link>
        ,{" "}
        <Link href="/remove-hard-inquiry-equifax" className="inline-bureau-link">
          Equifax
        </Link>
        , and{" "}
        <Link href="/remove-hard-inquiry-transunion" className="inline-bureau-link">
          TransUnion
        </Link>{" "}
        since 2015. We do this using the FCRA, FDCPA, FACTA, and
        Metro 2 compliance laws — not generic templates, not guesswork. Our
        review-first qualification standard exists because we know which law
        applies to which type of inquiry and why. Disputing and removing are the
        same outcome when you know what you&apos;re doing.
      </>
    ),
  },
  {
    q: "How soon will I see results?",
    a: "Some clients see their first removals in as few as 14 days. Most see full results within 30 to 90 days. We are transparent about timelines from the very first conversation — we work as fast as the law allows because we know your goals are on a real schedule.",
  },
  {
    q: "What if I've already tried another company and got nothing?",
    a: "We hear this regularly, and the answer is almost always the same: the company you worked with was a generalist. They treated inquiry removal as one item on a long checklist, using the same strategy they'd use for a collection or a late payment. Inquiry removal requires a completely different approach — specific federal laws applied to specific inquiry types, sent to specific bureaus in a specific way. That specialization is the only thing we do. It's why we succeed where others stall.",
  },
];

export const metadata: Metadata = {
  title: {
    absolute: "Hard Inquiry Removal Questions We Hear Every Single Day | Inquiry Removal",
  },
  description:
    "Answers to common questions about hard inquiry removal, timelines, results, prior credit repair attempts, and whether your situation may qualify.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Hard Inquiry Removal Questions We Hear Every Single Day | Inquiry Removal",
    description:
      "Answers to common questions about hard inquiry removal, timelines, results, prior credit repair attempts, and whether your situation may qualify.",
    url: "https://www.inquiryremoval.com/faq",
  },
  twitter: {
    title: "Hard Inquiry Removal Questions We Hear Every Single Day | Inquiry Removal",
    description:
      "Answers to common questions about hard inquiry removal, timelines, results, prior credit repair attempts, and whether your situation may qualify.",
  },
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AnnouncementBar />
      <Navigation activePath="/faq" />
      <main id="main" className="faq-page">
        <PageHero
          id="faq-page-heading"
          eyebrow="Answers first"
          align="center"
          title={
            <>
              <span className="ir-gradient-text">Hard Inquiry Removal Questions</span> We Hear Every Single Day
            </>
          }
          subtitle={
            <p>
              Clear answers about hard inquiry removal, timelines, results, prior credit repair attempts, and whether your situation may qualify.
            </p>
          }
        />

        <section className="faq-page-list-section section-divider" aria-label="Frequently asked questions">
          <div className="container faq-page-shell">
            <div className="faq-page-list">
              {FAQS.map((item) => (
                <details key={item.q} className="faq-page-item">
                  <summary>
                    <span>{item.q}</span>
                    <span aria-hidden="true">+</span>
                  </summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
</>
  );
}
