import { phoenixPagePath } from "./phoenixPage";
import { mesaPagePath } from "./mesaPage";
import { servicesPagePath } from "./servicesPage";
import { tucsonPagePath } from "./tucsonPage";
import { yumaPagePath } from "./yumaPage";

export const homePageMeta = {
  title: "Credit Repair Phoenix AZ | #1 Rated | State 48 Credit",
  description:
    "Arizona's top-rated credit repair company. 15,892 items removed. Avg. score up 150+ points. Serving all of Arizona since 2010. Book your free consultation — no obligation.",
  ogTitle: "Credit Repair Phoenix AZ | #1 Rated",
  ogDescription: "Arizona's #1 credit repair. 15,892 items removed. Free consult.",
  ogImage: "/og/home",
} as const;

export const homeHero = {
  badge: "Arizona's #1 rated credit repair since 2010",
  titleLead: "Arizona's Credit Repair Experts",
  titleHighlight: "Stop getting denied,",
  titleTail: "Start getting approved",
  description:
    "State 48 Credit is Arizona's most trusted credit repair company - and we help residents across Phoenix, Mesa, Tucson, and every city in the state remove every negative item from their credit report. No monthly fees. No runaround. No companies that disappear when you call. Just results - so you can finally buy the home, get the loan, and live the life you deserve.",
  primaryCta: "Start Free Audit",
  secondaryCta: "See Process",
  fearKiller:
    "No payment until after your free consultation. Zero pressure. Zero obligation. Just answers.",
  stats: [
    { value: "#1", label: "rated Arizona credit repair" },
    { value: "15,892", label: "items removed & counting" },
    { value: "4.9 ★", label: "412 verified reviews" },
  ],
  sampleClient: {
    label: "Maria C. | 72 days",
    startLabel: "Before",
    startScore: "521",
    endLabel: "After",
    endScore: "710",
    rows: [
      { label: "Negative items", value: "11 collections + 1 repo", tone: "default" as const },
      { label: "Items remaining", value: "0", tone: "success" as const },
      { label: "Mortgage status", value: "Approved - FHA loan", tone: "success" as const },
    ],
    note: "Representative case study based on a recent Arizona client turnaround.",
  },
} as const;

export const homeTrustStrip = {
  title: "Arizona's most trusted credit repair. By the numbers.",
  supportingCopy:
    "Since 2010, State 48 Credit has helped over 2,000 Arizona residents remove every kind of negative item - collections, bankruptcies, repossessions, foreclosures, student loans, identity theft accounts, and more - with an average score increase of 150+ points. We have deleted over $20.4 million worth of derogatory debt from our clients' credit reports. Those aren't marketing numbers. They are client results.",
  award: "🏆 Best of 2025 · Credit Repair Services",
  stats: [
    { value: "15 years", label: "Serving Arizona since 2010" },
    { value: "2,041 clients", label: "Real people. Real results." },
    { value: "15,892 items", label: "Deleted across all three bureaus" },
    { value: "4.9 ★ rating", label: "412 verified reviews" },
  ],
} as const;

// Oversized hero-number section data — the "$20.4M erased" moment.
// Four numeric headlines, each with an eyebrow and a line of supporting
// context. Designed to sit between TrustBar and ProblemMirrorSection.
export const homeBigNumbers = [
  {
    eyebrow: "Derogatory debt erased",
    number: "$20.4M",
    caption:
      "Dollar volume of collections, charge-offs, and bad debt deleted from Arizona credit reports since 2010.",
    tone: "copper" as const,
  },
  {
    eyebrow: "Negative items removed",
    number: "15,892",
    caption:
      "Across Equifax, Experian, and TransUnion. Every line dispute tracked, documented, and filed under a specific federal statute.",
    tone: "turquoise" as const,
  },
  {
    eyebrow: "Average score lift",
    number: "+150",
    caption:
      "Points gained by the average client — measured before and after our disputes cleared all three bureaus.",
    tone: "copper" as const,
  },
  {
    eyebrow: "Clients who walked away free",
    number: "2,041",
    caption:
      "Real Arizonans. Real outcomes. No monthly billing traps, no templated letters, no call-center handoffs.",
    tone: "turquoise" as const,
  },
] as const;

export const homePressMentions = [
  { name: "Forbes", tag: "F" },
  { name: "Bloomberg", tag: "B" },
  { name: "CNBC", tag: "CN" },
  { name: "Business Insider", tag: "BI" },
  { name: "MarketWatch", tag: "MW" },
  { name: "NerdWallet", tag: "NW" },
  { name: "Investopedia", tag: "I" },
  { name: "AP News", tag: "AP" },
  { name: "AZCentral", tag: "AZ" },
  { name: "Phoenix Business Journal", tag: "PBJ" },
  { name: "Yahoo Finance", tag: "YF" },
  { name: "Money", tag: "M" },
] as const;

export const homePainCards = [
  {
    title: "Got denied again - and no one told you why?",
    paragraphs: [
      "You applied for the mortgage, the car loan, or even the apartment - and got a rejection letter with a credit score attached. Nobody told you what to do next. You just got a no, and went home with it.",
      "And every time you get denied, it adds another inquiry to the report that's already hurting you.",
    ],
  },
  {
    title: "Your credit score is holding your entire life hostage.",
    paragraphs: [
      "It's not just the loan. It's the apartment you had to skip. The interest rate that made the monthly payment impossible. The job application that asked about your credit history.",
      "Bad credit doesn't stay in the credit report. It bleeds into every corner of your life - and it keeps bleeding until you stop it.",
    ],
  },
  {
    title: "Tried disputing items yourself and got nowhere?",
    paragraphs: [
      "You wrote the letters. You called the bureaus. They stalled, ignored you, or sent back the same items marked \"verified.\" You spent months doing everything you were supposed to do - and nothing moved.",
    ],
  },
  {
    title: "Paid another credit repair company and got nothing?",
    paragraphs: [
      "They took your money. They sent you a portal login. They told you to be patient. Three months later, four months later - you were still calling them trying to get an update that never came.",
      "Here's the truth: those companies want you to stay a client as long as possible. Every month you're enrolled is another month of billing. That's their business model.",
    ],
  },
  {
    title: "Victim of identity theft - and still being punished for someone else's crime?",
    paragraphs: [
      "Accounts you never opened. Addresses you never lived at. Debts you never created. You filed a report, but the negative items stayed. And now you're the one trying to prove your own innocence.",
    ],
  },
  {
    title: "Need to fix your credit for a mortgage in Phoenix?",
    paragraphs: [
      "The rates keep rising. The prices don't stop. And with your credit score where it is right now, you don't even qualify for the loan you'd need - let alone the rate that makes a mortgage actually livable.",
      "Every month that goes by is a month of equity you're not building. A month of rent you're paying someone else's mortgage. A month further from the home your family deserves.",
    ],
  },
] as const;

export const homeProblemTransition =
  "Here's what most people never find out - about why it keeps happening, and exactly how fast it can stop.";

export const homeSolution = {
  title: "How credit repair works - why State 48 gets results others don't",
  paragraphs: [
    "The credit bureaus and the companies that report to them are not on your side. They are counting on the fact that most people don't know the laws, don't know the dispute process, and don't have the time to fight back the right way. That's the real reason your credit looks the way it does - not because you're a bad person or made unforgivable decisions. Because the system is complicated on purpose, and the companies that were supposed to help you have been dragging it out to keep collecting.",
    "Whether you need credit repair to qualify for an FHA loan, a VA loan, or a conventional mortgage in Phoenix - or you're dealing with collections, charge-offs, late payments, medical debt, or identity theft accounts - State 48 Credit has removed every type of negative item across all three bureaus. We handle credit bureau disputes with Equifax, Experian, and TransUnion directly, using every federal law available. We get results that DIY disputing almost never does.",
    "State 48 Credit was founded by Robert Garcia, a former senior credit analyst in the disputes department of a major financial institution - and a victim of identity theft himself. He knew exactly what the bureaus were doing, exactly what the law required of them, and exactly how to force the outcome that clients deserved. That knowledge became State 48.",
    "We don't use templates. We don't operate a call center. We don't drag the process out. We use every federal law available - the FCRA, the FDCPA, FACTA, Metro 2 compliance - to build custom disputes tailored specifically to your credit report, your bureaus, and your situation. Fast. Transparent. Done.",
    "The villain here isn't you. It's a system that profits from your confusion and a credit repair industry that profits from your frustration. We fight both - alongside you - and we win.",
  ],
  bullets: [
    "No monthly billing traps. You pay once for a defined scope of work. Not every month for a process that never seems to end. Your goal is clean credit, not a long-term subscription.",
    "Custom disputes - not copy-paste templates. Every item on your report gets its own letter, its own legal basis, and its own argument. This is why items actually get removed.",
    "Unlike national credit repair chains that route your file through a call center, State 48 assigns one dedicated specialist to your case - someone who picks up when you call.",
  ],
  cta: "See what negative items we can remove",
} as const;

export const homePathOptions = [
  {
    icon: "home",
    eyebrow: "Mortgage prep",
    title: "I want to buy a home.",
    body: "Most home buyers need all three bureaus cleaned before a lender can approve the file.",
    href: `${servicesPagePath}#full-sweep`,
    cta: "View Full Sweep",
    tone: "copper",
  },
  {
    icon: "zap",
    eyebrow: "Fast approval",
    title: "I need a car loan.",
    body: "If one bureau is blocking the approval, a focused single-bureau cleanup may be enough.",
    href: `${servicesPagePath}#one-and-done`,
    cta: "View One & Done",
    tone: "turquoise",
  },
  {
    icon: "trending",
    eyebrow: "Better rates",
    title: "I want better cards and rates.",
    body: "Clean up the items suppressing your score before you apply again and add more inquiries.",
    href: `${servicesPagePath}#full-sweep`,
    cta: "Compare Options",
    tone: "turquoise",
  },
  {
    icon: "shield",
    eyebrow: "Fraud recovery",
    title: "I was hit by identity theft.",
    body: "Fraud cases often need credit bureaus, inquiries, ChexSystems, and specialty reports reviewed together.",
    href: `${servicesPagePath}#total-freedom`,
    cta: "View Total Freedom",
    tone: "copper",
  },
  {
    icon: "spark",
    eyebrow: "Not sure",
    title: "I just want clean credit.",
    body: "Start with the free audit and we will point you to the smallest package that actually fits.",
    href: "/free-credit-repair-consultation-phoenix",
    cta: "Start Free Audit",
    tone: "gold",
  },
] as const;

export const homeHowItWorks = [
  {
    step: 1,
    actor: "You",
    title: "Book your free consultation",
    duration: "Takes 15 minutes",
    detail:
      "Tell us what's on your report and what you're trying to accomplish. We review everything, identify every removable item across all three bureaus, and tell you exactly what we can do. No cost. No commitment. No sales pressure.",
  },
  {
    step: 2,
    actor: "We",
    title: "Build your custom dispute file and go to work",
    duration: "We handle the fight",
    detail:
      "This is where 15 years of Arizona credit repair expertise go to work for you. We draft custom dispute letters for every negative item — using the FCRA, FDCPA, FACTA, and Metro 2 compliance standards — and submit them directly to Equifax, Experian, and TransUnion on your behalf. We handle every response, every follow-up, every round of disputes until items are removed.",
  },
  {
    step: 3,
    actor: "You",
    title: "Watch your score climb. Then do what you've been waiting to do.",
    duration: "14–90 days",
    detail:
      "Most clients see their first removals within 14 to 30 days. Full results typically arrive within 90 days. When we're finished, you get a complete results report — every item removed, your score improvement documented — and the credit strategy to protect what we've built. Then you go get the home, the car, or the loan you've been waiting for.",
  },
] as const;

export const homeTestimonials = [
  {
    name: "Maria C.",
    role: "First-Time Home Buyer",
    city: "Phoenix, AZ",
    result: "+189 Points | 11 Collections Removed | 67 Days",
    quote:
      "I had 11 collections on my report and honestly thought buying a home was a dream that wasn't meant for me. State 48 removed every single one in 67 days and my score jumped 189 points. We closed on our first home last month. I'm still emotional about it.",
  },
  {
    name: "James T.",
    role: "Small Business Owner",
    city: "Tucson, AZ",
    result: "+143 Points | 8 Items Removed | 45 Days",
    quote:
      "I paid two other credit repair companies for almost a year and got absolutely nothing. State 48 deleted 8 negative items in 45 days. Robert actually answers the phone. That alone was shocking.",
  },
  {
    name: "Destiny R.",
    role: "Identity Theft Victim",
    city: "Mesa, AZ",
    result: "+202 Points | 17 Fraudulent Accounts Removed | 88 Days",
    quote:
      "Someone stole my identity and completely destroyed my credit. I had 17 fraudulent accounts and didn't know where to start. Robert and his team removed all of them in under 90 days. I went from a 512 to a 714. I can actually do things again.",
  },
] as const;

export const homeFeatureTiles = [
  {
    title: "Custom disputes for every single item",
    body:
      "No templates. No copy-paste. Every negative item on your credit report gets its own custom dispute letter — built around the specific law, the specific bureau, and the specific reason that item must come down. This is why we get results that generic companies cannot.",
    icon: "spark",
    featured: true,
  },
  {
    title: "Credit bureau dispute experts - Equifax, Experian, and TransUnion",
    body:
      "We don't just dispute with one bureau and hope the others follow. We go after Equifax, Experian, and TransUnion simultaneously — plus ChexSystems, InnoVis, and LexisNexis when needed. Total coverage. Nothing left behind.",
    icon: "shield",
  },
  {
    title: "A dedicated specialist — not a call center",
    body:
      "From your first consultation to your final results report, you work with one specialist who knows your file inside and out. You have their direct contact. They pick up. This is not how most companies operate.",
    icon: "users",
  },
  {
    title: "15 years of federal-law expertise",
    body:
      "The FCRA, FDCPA, FACTA, and Metro 2 compliance standards are our weapons. Most people — and most companies — don't know when to use which law, or how. We do. That knowledge is the difference between items that get removed and items that come back.",
    icon: "scale",
  },
  {
    title: "Full transparency from day one",
    body:
      "No surprises. No runaround. No \"just be patient\" with zero updates. You know exactly what we're disputing, when we submitted it, and what happened. If something needs more rounds, we tell you.",
    icon: "check",
  },
  {
    title: "Post-deletion credit strategy",
    body:
      "Getting items removed is step one. Protecting your score after they're gone is step two. Every client receives personalized guidance on what to do — and what not to do — after their credit is restored, so the work we did holds.",
    icon: "trending",
  },
  {
    title: "100% money-back guarantee",
    body:
      "If we don't remove a single item from your credit report within 90 days, you get every dollar back. No negotiations. No loopholes. We verify, then we refund. That's the deal.",
    icon: "award",
  },
  {
    title: "Remove collections, late payments, charge-offs, and more from your Arizona credit report",
    body:
      "Collections. Bankruptcies. Repossessions. Foreclosures. Student loan defaults. Late payments. Charge-offs. Child support. Inquiries. Identity theft accounts. ChexSystems flags. InnoVis records. LexisNexis entries. If it's hurting your score in Arizona, it's on our list.",
    icon: "sparkles",
  },
] as const;

export const homeFeatureAudience = {
  goodFit: [
    "You're ready to buy a home, qualify for an FHA or VA loan, and your credit score is the only thing standing between you and approval.",
    "You've been denied - for a loan, a car, an apartment, or a job - and you're done accepting it.",
    "You're a victim of identity theft and you need someone who knows how to fight back with the right legal tools.",
    "You've tried other companies or DIY and ended up with wasted time and the same items still on your report.",
  ],
  notFit: [
    "Clients looking for a slow, ongoing monthly program with no defined end date.",
    "Anyone who isn't ready to move forward - even though the consultation is completely free and risk-free, this process works best for people ready to commit to the outcome.",
    "Clients expecting overnight results with zero process - real credit repair done legally takes 30 to 90 days.",
  ],
} as const;

export const homeGuarantee = {
  title: "Our 100% money-back guarantee - Arizona's strongest in credit repair",
  paragraphs: [
    "If we don't remove at least one negative item from your credit report within 90 days of starting your case - you get every dollar back.",
    "Not a partial refund. Not a credit toward future services. The full amount you paid, returned to you.",
    "We verify results before processing any refund request, because that's a fair and honest policy. But the guarantee is real, the terms are plain, and we stand behind every case we take. We don't take cases we can't win.",
    "One more thing: we don't start the clock until we start the work. Your 90 days begins on the day your first disputes are submitted - not the day you signed up.",
    "State 48 Credit operates in full compliance with the Credit Repair Organizations Act (CROA) and all applicable Arizona state laws. You have the right to cancel any contract within three business days of signing at no charge. We provide a written contract before any services begin.",
  ],
} as const;

export const homeServiceArea = {
  title: "Credit repair services across all of Arizona - no office visit required",
  metroPhoenix: [
    { name: "Phoenix", href: phoenixPagePath },
    { name: "Mesa", href: mesaPagePath },
    { name: "Chandler" },
    { name: "Gilbert" },
    { name: "Scottsdale" },
    { name: "Tempe" },
    { name: "Glendale" },
    { name: "Peoria" },
    { name: "Surprise" },
    { name: "Goodyear" },
    { name: "Avondale" },
    { name: "Queen Creek" },
  ],
  statewide: [
    { name: "Tucson", href: tucsonPagePath },
    { name: "Flagstaff" },
    { name: "Yuma", href: yumaPagePath },
    { name: "Prescott" },
    { name: "Sedona" },
    { name: "Sierra Vista" },
  ],
  description:
    "All services are delivered remotely - no office visit required. Wherever you are in Arizona, you can book your free credit consultation today and get started within 24 hours.",
  spanishTitle: "¿Necesita reparación de crédito en Phoenix o Arizona?",
  spanishDescription:
    "En State 48 Credit, ofrecemos servicios completos de reparación de crédito en español para residentes de Phoenix, Mesa, Chandler, Glendale y toda Arizona. Llame hoy para su consulta gratuita - sin compromiso, sin presión.",
  cta: "Start Free Audit",
} as const;

export const homeFaq = [
  {
    q: "Will this actually work for my specific situation?",
    a: "Yes - and here is why you can say that with confidence. We have removed bankruptcies, repossessions, foreclosures, collections, student loan defaults, identity theft accounts, child support entries, and every type of inquiry across all three bureaus. In 15 years and 2,041 clients, we have yet to encounter a credit report we couldn't improve. Your specific mix of negative items may vary - that's exactly why the consultation is free. We review your report first, and we tell you honestly what we can do before you commit to anything.",
  },
  {
    q: "How soon will I see results?",
    a: "Most clients see their first item removals within 14 to 30 days. Full results - meaning the majority of targeted items removed - typically arrive within 30 to 90 days. In rare cases involving very complex files or multiple rounds of bureau disputes, it can take slightly longer. We tell you this upfront because we'd rather set honest expectations than overpromise and underdeliver. What we can tell you is that no client has ever waited longer than 90 days without seeing measurable results - and if they did, the guarantee kicks in.",
  },
  {
    q: "How is your process different from other credit repair companies?",
    a: "The honest answer is that most credit repair companies are built to keep you enrolled. Monthly billing, slow timelines, template letters sent out in bulk - it's a subscription model disguised as a service. We don't do that. You pay once for a defined scope of work. We write custom dispute letters for every individual item on your report, using the specific federal law that applies to each one. We work as fast as the bureaus allow - and we push when they stall. Our goal is to finish your case and send you off with a clean report, not to keep collecting your monthly payment.",
  },
  {
    q: "What does this cost, and when do I pay?",
    a: "Pricing is based on the scope of what we're removing, which is why the free consultation comes first. Our packages start at $299 for single-bureau work, $599 for all three bureaus, and $849 for our Total Freedom package - which covers all three bureaus, inquiries, ChexSystems, and InnoVis. You know the price before you commit to anything. No surprises. We accept Zelle and Apple Pay.",
  },
  {
    q: "Is credit repair legal in Arizona? Are you licensed?",
    a: "Yes - credit repair is fully legal in Arizona and throughout the United States when conducted in compliance with the Credit Repair Organizations Act (CROA) and the Fair Credit Reporting Act (FCRA). State 48 Credit operates in full compliance with both federal and Arizona state law. We provide a written contract, a description of your legal rights, and a three-day right to cancel before any services begin.",
  },
] as const;

export const homeFinalCta = {
  title: "Ready to stop getting denied and start living the life you deserve?",
  lead: "Your second chance starts here. Not someday. Right now.",
  paragraphs: [
    "Over 2,041 Arizonans have already made this call. They stopped waiting, stopped feeling stuck, and stopped handing money to companies that weren't getting it done. They gave us 15 minutes - and walked away with a plan.",
    "The home you want isn't out of reach. The car you need isn't impossible. The life you've been putting on hold is closer than your current credit score is telling you.",
  ],
  primaryCta: "Start Free Audit",
  secondaryCta: "See Process",
  secondaryHref: "/how-credit-repair-works",
  fearKiller:
    "No payment today. No pressure. No commitment. Just a free, honest look at your credit and exactly what we can do.",
  testimonial: {
    quote:
      "I went from a 498 to a 701 in 84 days. I'm buying my first home. I wish I hadn't waited as long as I did to make the call.",
    attribution: "Carlos M. | U.S. Army Veteran | Glendale, AZ",
  },
} as const;
