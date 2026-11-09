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
      "A short list of inquiries, such as a few unfamiliar lender names.",
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
      "A longer list, such as lender entries from a dealership visit or several applications.",
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
      "A larger list that may include several lenders, dates or affected reports.",
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
      "31 or more inquiries in scope. This tier has no upper count limit.",
  },
] as const;

export const PLAN_FEATURES = [
  "All affected credit bureaus",
  "Organized inquiry list",
  "Supported disputes prepared and sent",
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
