import Link from "next/link";
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

export function FAQ() {
  return (
    <section className="faq" id="faq" aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container">
        <header className="faq-header">
          <h2 id="faq-heading">Questions We Hear Every Single Day</h2>
        </header>

        <div className="faq-list">
          {FAQS.map((item, idx) => (
            <details key={idx} className="faq-item" name="faq-group">
              <summary className="faq-question">
                <span className="faq-question-text">{item.q}</span>
                <b className="faq-icon" aria-hidden="true">+</b>
              </summary>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="faq-footer">
          <Link href="/faq" className="faq-link">
            See All Frequently Asked Questions{" "}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
</section>
  );
}
