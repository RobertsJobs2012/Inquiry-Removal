export const GOOGLE_REVIEW_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSceniKTv612SZVC6_jf0-vb-5pNaOs-1jrpT9Qv0P5yd-Qchw/formResponse";

export const REVIEW_FIELDS = {
  name: "entry.1443643242",
  email: "entry.1525553918",
  phone: "entry.330440410",
  goal: "entry.1481812974",
  situation: "entry.1677473071",
  count: "entry.1354254818",
  bureau: "entry.766411755",
  reports: "entry.1594186053",
  contactMethod: "entry.1559834442",
  note: "entry.1182319941",
  consent: "entry.1996946225",
} as const;

export const GOALS = [
  "A home loan",
  "A vehicle loan",
  "Business financing",
  "Credit cards or other personal credit",
  "Addressing possible identity theft",
  "Improving my overall credit profile",
] as const;

export const SITUATIONS = [
  "A dealership sent my application to multiple lenders",
  "I did not authorize the inquiry",
  "I was told it would be a soft pull",
  "I do not recognize the company",
  "The inquiry appears to be a duplicate",
  "I may be dealing with identity theft",
  "The inquiry belongs to someone else",
  "I authorized it but want it reviewed",
] as const;

export const INQUIRY_COUNTS = ["1–10", "11–30", "31 or more", "I am not sure"] as const;
export const BUREAUS = ["Experian", "Equifax", "TransUnion", "I am not sure"] as const;
export const REPORT_COPIES = ["Yes", "No", "I need help obtaining them"] as const;
export const CONTACT_METHODS = ["Email", "Phone"] as const;

export const CONTACT_CONSENT =
  "I agree that Inquiry Removal may contact me about this free inquiry review using the phone number or email address I provided.";

export const PLAN_MAP: Record<string, (typeof INQUIRY_COUNTS)[number]> = {
  focused: "1–10",
  complete: "11–30",
  extensive: "31 or more",
};

export const GOAL_MAP: Record<string, (typeof GOALS)[number]> = {
  home: "A home loan",
  vehicle: "A vehicle loan",
  business: "Business financing",
  cards: "Credit cards or other personal credit",
  identity: "Addressing possible identity theft",
  profile: "Improving my overall credit profile",
};

export const BUREAU_MAP: Record<string, (typeof BUREAUS)[number]> = {
  experian: "Experian",
  equifax: "Equifax",
  transunion: "TransUnion",
};

export const SITUATION_MAP: Record<string, (typeof SITUATIONS)[number]> = {
  dealership: "A dealership sent my application to multiple lenders",
  unauthorized: "I did not authorize the inquiry",
  "soft-pull": "I was told it would be a soft pull",
  unrecognized: "I do not recognize the company",
  duplicate: "The inquiry appears to be a duplicate",
  "identity-theft": "I may be dealing with identity theft",
  "incorrect-person": "The inquiry belongs to someone else",
  authorized: "I authorized it but want it reviewed",
};

export const CONTEXT_SITUATION_MAP: Record<string, keyof typeof SITUATION_MAP> = {
  "dealership-inquiries": "dealership",
  "unauthorized-inquiries": "unauthorized",
  "soft-pull-became-hard-inquiry": "soft-pull",
  "unrecognized-inquiries": "unrecognized",
  "duplicate-inquiries": "duplicate",
  "identity-theft-inquiries": "identity-theft",
  "incorrect-person-inquiries": "incorrect-person",
  "authorized-inquiry-removal": "authorized",
};

export const CONTEXT_GOAL_MAP: Record<string, keyof typeof GOAL_MAP> = {
  "mortgage-hard-inquiries": "home",
  "auto-loan-hard-inquiries": "vehicle",
  "business-funding-hard-inquiries": "business",
  "credit-card-hard-inquiries": "cards",
  "identity-theft-inquiries": "identity",
};

export const CONTEXT_BUREAU_MAP: Record<string, keyof typeof BUREAU_MAP> = {
  "experian-hard-inquiry-removal": "experian",
  "equifax-hard-inquiry-removal": "equifax",
  "transunion-hard-inquiry-removal": "transunion",
};
