export type ResultsGalleryItem = {
  slug: string;
  name: string;
  city: string;
  score: number;
  timeframe: string;
  tag: string;
  outcome: string;
  detail: string;
  quote: string;
  accent: "copper" | "turquoise";
  imageSrc?: string;
  imageAlt?: string;
};

// After-only gallery data.
//
// When final 4:5 score screenshots are ready, add `imageSrc` values that point
// at files in `/public/images/results/*`. Until then, the gallery renders a
// polished score-led proof frame so the layout still feels complete.
export const resultsGallery: ResultsGalleryItem[] = [
  {
    slug: "carlos-m-glendale",
    name: "Carlos M.",
    city: "Glendale, AZ",
    score: 701,
    timeframe: "84 days",
    tag: "Lease approved",
    outcome: "Apartment and auto loan approved.",
    detail: "9 collections and 3 late payment notations resolved.",
    quote: "I finally felt like I could move forward again.",
    accent: "turquoise",
    imageSrc: "/images/results/carlos-m-final-score-701.avif",
    imageAlt:
      "Credit repair before after Glendale AZ - Carlos M. score increased from 498 to 701 in 84 days apartment approved",
  },
  {
    slug: "maria-c-phoenix",
    name: "Maria C.",
    city: "Phoenix, AZ",
    score: 710,
    timeframe: "67 days",
    tag: "Mortgage ready",
    outcome: "FHA approved. First home closed.",
    detail: "11 collections and 1 repossession removed from her report.",
    quote: "We closed on our first home last month.",
    accent: "copper",
    imageSrc: "/images/results/maria-c-final-score-710.avif",
    imageAlt:
      "Credit repair before after Phoenix AZ - Maria C. score increased from 521 to 710 in 67 days FHA approved",
  },
  {
    slug: "destiny-r-mesa",
    name: "Destiny R.",
    city: "Mesa, AZ",
    score: 714,
    timeframe: "88 days",
    tag: "Banking restored",
    outcome: "ChexSystems cleared. Auto loan approved.",
    detail: "17 fraudulent accounts removed across all three bureaus.",
    quote: "My credit finally tells the truth again.",
    accent: "turquoise",
    imageSrc: "/images/results/destiny-r-final-score-714.avif",
    imageAlt:
      "Credit repair after identity theft Mesa AZ - Destiny R. score increased from 512 to 714 in 88 days",
  },
  {
    slug: "james-t-tucson",
    name: "James T.",
    city: "Tucson, AZ",
    score: 723,
    timeframe: "45 days",
    tag: "Auto approved",
    outcome: "Vehicle financing approved within the week.",
    detail: "8 negative items removed across all three bureaus.",
    quote: "Done in 45 days after a year of getting nowhere.",
    accent: "copper",
    imageSrc: "/images/results/james-t-final-score-723.avif",
    imageAlt:
      "Credit repair before after Tucson AZ - James T. score increased from 580 to 723 in 45 days auto approved",
  },
  {
    slug: "priya-n-chandler",
    name: "Priya N.",
    city: "Chandler, AZ",
    score: 728,
    timeframe: "38 days",
    tag: "DIY replaced",
    outcome: "Fast first results after 8 months of trying solo.",
    detail: "6 items removed after custom disputes replaced DIY attempts.",
    quote: "Custom disputes did what 8 months of DIY could not.",
    accent: "copper",
    imageSrc: "/images/results/priya-n-final-score-728.avif",
    imageAlt:
      "Credit repair before after Chandler AZ - Priya N. score increased from 601 to 728 in 38 days",
  },
];
