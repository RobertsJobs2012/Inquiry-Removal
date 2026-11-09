type LinkRule = { phrase: string; href: string };
export type TextSegment = { text: string; href?: string };

// Curated reading paths for the pages highlighted by Search Console. Never
// rewrite the source words, link a page to itself, or repeat a destination.
const rules: Record<string, LinkRule[]> = {
  "hard-inquiry-dispute-denied": [
    { phrase: "TransUnion", href: "/transunion-hard-inquiry-removal/" },
    { phrase: "normal aging", href: "/how-long-do-hard-inquiries-stay/" },
    { phrase: "identity theft", href: "/identity-theft-inquiries/" },
  ],
  "denied-credit-too-many-inquiries": [
    { phrase: "company name", href: "/who-pulled-my-credit/" },
    { phrase: "identity", href: "/identity-theft-inquiries/" },
    { phrase: "scoring model", href: "/rate-shopping-hard-inquiries/" },
  ],
  "how-to-remove-hard-inquiries": [
    { phrase: "soft inquiry", href: "/hard-inquiry-vs-soft-inquiry/" },
    { phrase: "generic template", href: "/hard-inquiry-removal-letter/" },
    { phrase: "up to two years", href: "/how-long-do-hard-inquiries-stay/" },
    { phrase: "Specialist help", href: "/" },
  ],
  "how-to-dispute-a-hard-inquiry": [
    {
      phrase: "TransUnion",
      href: "/transunion-hard-inquiry-removal/",
    },
  ],
  "how-long-do-hard-inquiries-stay": [
    { phrase: "scoring impact", href: "/hard-inquiry-credit-score-impact/" },
    { phrase: "accurate and authorized", href: "/authorized-inquiry-removal/" },
  ],
  "best-hard-inquiry-removal-services": [
    {
      phrase: "broad credit repair",
      href: "/inquiry-removal-vs-credit-repair/",
    },
    { phrase: "Inquiry Removal", href: "/" },
    { phrase: "one-time pricing", href: "/pricing/" },
  ],
  "hard-inquiry-removal-letter": [
    { phrase: "TransUnion", href: "/transunion-hard-inquiry-removal/" },
    { phrase: "Inquiry Removal", href: "/" },
  ],
  "transunion-hard-inquiry-removal": [
    { phrase: "Inquiry Removal", href: "/" },
    { phrase: "identity theft", href: "/identity-theft-inquiries/" },
  ],
  "soft-pull-became-hard-inquiry": [
    { phrase: "Inquiry Removal", href: "/" },
    { phrase: "authorized", href: "/authorized-inquiry-removal/" },
  ],
  "authorized-inquiry-removal": [
    { phrase: "Inquiry Removal", href: "/" },
    { phrase: "soft pull", href: "/soft-pull-became-hard-inquiry/" },
  ],
};

export function createContextualLinker(slug: string) {
  const used = new Set<string>();
  return (text: string): TextSegment[] => {
    if (used.size >= 4) return [{ text }];
    const lower = text.toLowerCase();
    const candidates = (rules[slug] ?? [])
      .filter((rule) => rule.href !== `/${slug}/` && !used.has(rule.href))
      .map((rule) => ({
        ...rule,
        index: lower.indexOf(rule.phrase.toLowerCase()),
      }))
      .filter(({ index, phrase }) => {
        if (index < 0) return false;
        const before = text[index - 1] ?? "";
        const after = text[index + phrase.length] ?? "";
        return !/[\p{L}\p{N}]/u.test(before + after);
      })
      .sort((a, b) => a.index - b.index || b.phrase.length - a.phrase.length);
    const match = candidates[0];
    if (!match) return [{ text }];
    used.add(match.href);
    return [
      { text: text.slice(0, match.index) },
      {
        text: text.slice(match.index, match.index + match.phrase.length),
        href: match.href,
      },
      { text: text.slice(match.index + match.phrase.length) },
    ];
  };
}
