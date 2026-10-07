// Shared by pricing displays, plan links, and the review form/API.
export const PRICING_PLANS = [
  {
    id: "focused",
    name: "Focused Removal",
    price: "$199",
    min: 1,
    max: 10,
    range: "1–10",
    rangeLabel: "1 to 10",
    bestFor:
      "Someone with 1 to 10 total hard inquiries who wants a focused cleanup before the next important application.",
  },
  {
    id: "expanded",
    name: "Expanded Removal",
    price: "$299",
    min: 11,
    max: 20,
    range: "11–20",
    rangeLabel: "11 to 20",
    bestFor:
      "Someone with 11 to 20 total hard inquiries, including dealership clusters, repeated applications, or inquiries appearing across multiple reports.",
  },
  {
    id: "complete",
    name: "Complete Removal",
    price: "$399",
    min: 21,
    max: 30,
    range: "21–30",
    rangeLabel: "21 to 30",
    bestFor:
      "Someone with 21 to 30 total hard inquiries who has a larger inquiry file requiring broader removal work across the affected reports.",
  },
  {
    id: "extensive",
    name: "Extensive Removal",
    price: "$499",
    min: 31,
    max: Infinity,
    range: "31 or more",
    rangeLabel: "31 or more",
    bestFor:
      "Someone with 31 or more total hard inquiries who needs the broadest inquiry-removal scope across the affected reports.",
  },
] as const;

export const PLAN_FEATURES = [
  "All affected credit bureaus",
  "Organized inquiry list",
  "Dispute preparation and submission",
  "Response review",
  "Additional follow-up as needed",
  "Phone, text, or email communication",
  "No monthly fees",
] as const;

export const INQUIRY_COUNTS = [
  ...PRICING_PLANS.map((plan) => plan.range),
  "I am not sure",
] as const;

export const PLAN_MAP: Record<string, (typeof INQUIRY_COUNTS)[number]> =
  Object.fromEntries(PRICING_PLANS.map((plan) => [plan.id, plan.range]));

export function getPlanForInquiryCount(count: number) {
  if (!Number.isSafeInteger(count) || count < 1) return undefined;
  return PRICING_PLANS.find((plan) => count >= plan.min && count <= plan.max);
}
