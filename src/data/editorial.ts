import plan from "./editorialPlan.json";
import type { GuidePage } from "./guides";

export type EditorialRevision = {
  brief: string;
  seoTitle: string;
  description: string;
  title: string;
  supporting?: string;
  primaryCta: string;
  related: string[];
};
export const editorialPlan: Record<string, EditorialRevision> = plan;

export function reviseGuide(page: GuidePage): GuidePage {
  const revision = editorialPlan[`/${page.slug}/`];
  if (!revision) return page;
  const toolCtas: Record<string, string> = {
    "how-long-do-hard-inquiries-stay": "Use the Free Inquiry-Age Estimator",
    "hard-inquiry-removal-letter": "Use the Free Letter Sample",
    "who-pulled-my-credit": "Use the Private Inquiry Worksheet",
    "how-to-remove-hard-inquiries": "Use the Free Inquiry Worksheet",
  };
  return {
    ...page,
    title: revision.title,
    seoTitle: revision.seoTitle,
    description: revision.description,
    supporting: revision.supporting ?? page.supporting,
    primaryCta: revision.primaryCta,
    secondaryTarget: toolCtas[page.slug]
      ? "#practical-tools"
      : page.secondaryTarget,
    secondaryCta: page.secondaryTarget.includes("/results")
      ? "How results are documented"
      : (toolCtas[page.slug] ?? page.secondaryCta),
    related: [
      ...new Map([
        ...revision.related.map(
          (href) =>
            [
              href,
              {
                href,
                label: editorialPlan[href]?.title ?? "Explore this guide",
              },
            ] as const,
        ),
        ...page.related.map(
          (link) =>
            [
              link.href,
              link.href === "/results/"
                ? { ...link, label: "How results are documented" }
                : link,
            ] as const,
        ),
      ]).values(),
    ],
  };
}
