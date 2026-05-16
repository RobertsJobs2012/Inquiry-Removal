"use client";

import Link from "@/components/InstantLink";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { PremiumIcon, type PremiumIconName } from "./PremiumIcons";

type GoalKey = "home" | "car" | "credit" | "cleanup";
type ProblemKey = "dealership" | "identity" | "too-many" | "review";
type ReadinessKey = "have-count" | "have-unsure" | "not-pulled" | "outdated";
type FearKey = "home-loss" | "higher-rates" | "score-fall" | "wasted-time";
type TimelineKey = "asap" | "deadline" | "weeks" | "researching";

type QuizSelections = {
  goal?: GoalKey;
  problem?: ProblemKey;
  readiness?: ReadinessKey;
  fear?: FearKey;
  timeline?: TimelineKey;
};

type FormState = {
  firstName: string;
  email: string;
  phone: string;
};

type StepCard<T extends string> = {
  value: T;
  icon: PremiumIconName;
  title: string;
  description: string;
  primary?: boolean;
};

const GOAL_CARDS: StepCard<GoalKey>[] = [
  {
    value: "home",
    icon: "homeGoal",
    title: "Buying a home",
    description:
      "Getting approved for a mortgage and finally owning the home I've been planning for",
    primary: true,
  },
  {
    value: "car",
    icon: "autoInquiry",
    title: "Getting a car loan at a fair rate",
    description:
      "Qualifying for financing without being penalized by an inflated interest rate",
  },
  {
    value: "credit",
    icon: "scoreRise",
    title: "Getting approved for credit",
    description:
      "Opening a credit card or line of credit I keep getting denied for",
  },
  {
    value: "cleanup",
    icon: "checkBadge",
    title: "Cleaning up my credit report",
    description:
      "Getting unauthorized or excessive hard inquiries off my report so my score reflects who I actually am",
  },
];

const PROBLEM_CARDS: StepCard<ProblemKey>[] = [
  {
    value: "dealership",
    icon: "autoInquiry",
    title: "Dealership inquiries I didn't authorize",
    description:
      "I went to one or more car dealerships and ended up with a flood of hard pulls I never agreed to",
  },
  {
    value: "identity",
    icon: "identityShield",
    title: "Inquiries I don't recognize — possible identity theft",
    description:
      "There are hard pulls on my report from companies I've never heard of or applied to",
  },
  {
    value: "too-many",
    icon: "tailoredDispute",
    title: "Too many hard inquiries from applying for credit",
    description:
      "I applied for loans, credit cards, or mortgages in multiple places and the inquiry count piled up",
  },
  {
    value: "review",
    icon: "specialistFocus",
    title: "I'm not completely sure — I need someone to review my report",
    description:
      "I know something is wrong but I haven't been able to get clear answers about what can be fixed",
  },
];

const READINESS_CARDS: StepCard<ReadinessKey>[] = [
  {
    value: "have-count",
    icon: "checkBadge",
    title: "Yes — I have my reports and know my inquiry count",
    description:
      "I've already reviewed my Experian, Equifax, and/or TransUnion reports",
  },
  {
    value: "have-unsure",
    icon: "tailoredDispute",
    title: "I've pulled them but I'm not sure what I'm looking at",
    description:
      "I have the reports but don't know which inquiries qualify for removal",
  },
  {
    value: "not-pulled",
    icon: "xBadge",
    title: "No — I haven't pulled them yet",
    description:
      "I haven't checked recently and don't know what's on my report",
  },
  {
    value: "outdated",
    icon: "guaranteeLoop",
    title: "I pulled them a while ago — they may be outdated",
    description:
      "I've seen my report before but it's been a few months or more",
  },
];

const FEAR_CARDS: StepCard<FearKey>[] = [
  {
    value: "home-loss",
    icon: "homeGoal",
    title: "Losing the home I've been working toward",
    description:
      "Another denial, another delay, another year of watching the opportunity slip further away",
  },
  {
    value: "higher-rates",
    icon: "flatFee",
    title: "Paying higher interest rates than I should",
    description:
      "Being stuck with a worse loan offer because my score doesn't reflect my actual financial behavior",
  },
  {
    value: "score-fall",
    icon: "warningDiamond",
    title: "My score continuing to fall while I wait",
    description:
      "Hard inquiries staying on my report for two years and costing me every application in the meantime",
  },
  {
    value: "wasted-time",
    icon: "guaranteeLoop",
    title: "Wasting more time and money on companies that don't deliver",
    description:
      "Paying another monthly fee to another company that treats my situation like a line item instead of a priority",
  },
];

const TIMELINE_CARDS: StepCard<TimelineKey>[] = [
  {
    value: "asap",
    icon: "scoreRise",
    title: "As soon as possible — I'm ready to move",
    description:
      "I understand the process, I've done my research, and I want to get started",
  },
  {
    value: "deadline",
    icon: "calendarCheck",
    title:
      "I have a specific deadline — a closing date, loan application, or approval I'm working toward",
    description:
      "My situation has a timeline and I need this handled with urgency",
  },
  {
    value: "weeks",
    icon: "specialistFocus",
    title: "Within the next few weeks — I'm almost ready",
    description:
      "I want to get moving soon but I still have a question or two before I commit",
  },
  {
    value: "researching",
    icon: "tailoredDispute",
    title: "I'm still researching — not quite ready yet",
    description:
      "I want to understand everything before I decide — no rush on my end",
  },
];


function diagnosticResult(selections: QuizSelections) {
  if (selections.problem === "identity") {
    return {
      label: "Likely best first step",
      title: "Identity-focused 3-bureau inquiry review",
      body:
        "Because you mentioned inquiries you do not recognize, the safest next step is a bureau-by-bureau review before choosing a plan.",
    };
  }

  if (selections.problem === "dealership" || selections.problem === "too-many") {
    return {
      label: "Likely best first step",
      title: "All 3 bureau inquiry count and dispute strategy",
      body:
        "Dealership and application clusters often appear differently across Experian, Equifax, and TransUnion, so we review the full picture first.",
    };
  }

  if (selections.readiness === "not-pulled" || selections.readiness === "outdated") {
    return {
      label: "Likely best first step",
      title: "Fresh report review before plan selection",
      body:
        "You do not need to know your inquiry count yet. We start by helping you understand what is currently reporting.",
    };
  }

  return {
    label: "Likely best first step",
    title: "Free inquiry analysis before choosing a plan",
    body:
      "We will help confirm which inquiries may qualify, which bureaus are involved, and whether Starter, Standard, or Elite makes sense.",
  };
}

function followUpWindow(timeline?: TimelineKey) {
  if (timeline === "asap" || timeline === "deadline") {
    return "2 business hours";
  }
  return "24 hours";
}

function CardIcon({ name }: { name: PremiumIconName }) {
  return <PremiumIcon name={name} size={22} strokeWidth={1.85} />;
}

function InlineIcon({ name }: { name: PremiumIconName }) {
  return <PremiumIcon name={name} size={16} strokeWidth={1.8} />;
}

export function GetStartedQuiz() {
  const [selections, setSelections] = useState<QuizSelections>({});
  const [currentStep, setCurrentStep] = useState(1);
  const [formState, setFormState] = useState<FormState>({
    firstName: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

    const firstFocusable = topRef.current?.querySelector<HTMLElement>(
      "[data-quiz-first-focus]",
    );
    if (!firstFocusable) return;

    const isTextEntryField = ["INPUT", "TEXTAREA", "SELECT"].includes(
      firstFocusable.tagName,
    );
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;

    if (isTextEntryField && isCoarsePointer) return;

    firstFocusable.focus({ preventScroll: true });
  }, [currentStep, submitted]);

  function handleAdvance(update: Partial<QuizSelections>) {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }

    setSelections((prev) => ({ ...prev, ...update }));

    timeoutRef.current = window.setTimeout(() => {
      setCurrentStep((prev) => Math.min(prev + 1, 6));
      timeoutRef.current = null;
    }, 400);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  function handleBack() {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    setCurrentStep((prev) => Math.max(prev - 1, 1));
  }

  function cardClass(isSelected: boolean, isPrimary?: boolean) {
    return [
      "quiz-card",
      isPrimary ? "quiz-card-primary" : "",
      isSelected ? "quiz-card-selected" : "",
    ]
      .filter(Boolean)
      .join(" ");
  }

  const heroTrust = "Free. No obligation. No credit card required. Takes under 3 minutes.";
  const diagnostic = diagnosticResult(selections);

  return (
    <section ref={topRef} className="get-started-quiz" aria-labelledby="get-started-heading">
      <div className="container get-started-shell">
        <div className="get-started-copy">
          <h1 id="get-started-heading" className="ir-display-h1">
            Let&apos;s Find Out Exactly What&apos;s on Your Report — and Exactly
            <span className="ir-gradient-text">What We Can Remove</span>.
          </h1>
          <p className="get-started-sub">
            Answer six quick questions. We&apos;ll match you to the right plan,
            confirm your inquiries qualify for removal, and get your free
            consultation scheduled — all before you spend a single dollar.
          </p>
          <p className="get-started-trust">
            <span className="get-started-trust-icon" aria-hidden="true">
              <InlineIcon name="bureauShield" />
            </span>
            <span>{heroTrust}</span>
          </p>
        </div>

        <div className="quiz-shell" aria-live="polite">
          {!submitted ? (
            <>
              <div className="quiz-progress">
                <div className="quiz-progress-top">
                  <strong>
                    Step {currentStep} of 6
                    {currentStep === 4 ? " — You're more than halfway there." : ""}
                    {currentStep === 5 ? " — One step from your personalized plan." : ""}
                    {currentStep === 6 ? " — Almost done." : ""}
                  </strong>
                  {currentStep > 1 ? (
                    <button type="button" className="quiz-back" onClick={handleBack}>
                      ← Back
                    </button>
                  ) : null}
                </div>
                <div className="quiz-progress-bar" aria-hidden="true">
                  <span style={{ width: `${(currentStep / 6) * 100}%` }} />
                </div>
              </div>

              <div className="quiz-panel">
                {currentStep === 1 ? (
                  <>
                    <div className="quiz-head">
                      <h2>What&apos;s the #1 thing you&apos;re working toward right now?</h2>
                      <p>Select the one that fits you best.</p>
                    </div>
                    <div className="quiz-card-grid">
                      {GOAL_CARDS.map((card, index) => (
                        <button
                          key={card.value}
                          type="button"
                          className={cardClass(selections.goal === card.value, card.primary)}
                          data-quiz-first-focus={index === 0 ? true : undefined}
                          onClick={() => handleAdvance({ goal: card.value })}
                        >
                          <span className="quiz-card-icon" aria-hidden="true">
                            <CardIcon name={card.icon} />
                          </span>
                          <strong>{card.title}</strong>
                          <span>{card.description}</span>
                        </button>
                      ))}
                    </div>
                  </>
                ) : null}

                {currentStep === 2 ? (
                  <>
                    <div className="quiz-head">
                      <h2>What&apos;s currently standing in your way?</h2>
                      <p>What best describes your situation right now?</p>
                    </div>
                    <div className="quiz-card-grid">
                      {PROBLEM_CARDS.map((card, index) => (
                        <button
                          key={card.value}
                          type="button"
                          className={cardClass(selections.problem === card.value)}
                          data-quiz-first-focus={index === 0 ? true : undefined}
                          onClick={() => handleAdvance({ problem: card.value })}
                        >
                          <span className="quiz-card-icon" aria-hidden="true">
                            <CardIcon name={card.icon} />
                          </span>
                          <strong>{card.title}</strong>
                          <span>{card.description}</span>
                        </button>
                      ))}
                    </div>
                  </>
                ) : null}

                {currentStep === 3 ? (
                  <>
                    <div className="quiz-head">
                      <h2>Have you pulled your credit reports recently?</h2>
                      <p>This helps us know where to start — there&apos;s no wrong answer.</p>
                    </div>
                    <div className="quiz-card-grid">
                      {READINESS_CARDS.map((card, index) => (
                        <button
                          key={card.value}
                          type="button"
                          className={cardClass(selections.readiness === card.value)}
                          data-quiz-first-focus={index === 0 ? true : undefined}
                          onClick={() => handleAdvance({ readiness: card.value })}
                        >
                          <span className="quiz-card-icon" aria-hidden="true">
                            <CardIcon name={card.icon} />
                          </span>
                          <strong>{card.title}</strong>
                          <span>{card.description}</span>
                        </button>
                      ))}
                    </div>
                  </>
                ) : null}

                {currentStep === 4 ? (
                  <>
                    <div className="quiz-head">
                      <h2>What concerns you most if your inquiry situation stays the way it is?</h2>
                      <p>Select the outcome that worries you most.</p>
                    </div>
                    <div className="quiz-card-grid">
                      {FEAR_CARDS.map((card, index) => (
                        <button
                          key={card.value}
                          type="button"
                          className={cardClass(selections.fear === card.value)}
                          data-quiz-first-focus={index === 0 ? true : undefined}
                          onClick={() => handleAdvance({ fear: card.value })}
                        >
                          <span className="quiz-card-icon" aria-hidden="true">
                            <CardIcon name={card.icon} />
                          </span>
                          <strong>{card.title}</strong>
                          <span>{card.description}</span>
                        </button>
                      ))}
                    </div>
                  </>
                ) : null}

                {currentStep === 5 ? (
                  <>
                    <div className="quiz-head">
                      <h2>How soon are you looking to get this resolved?</h2>
                      <p>Be honest — there&apos;s no pressure either way. This just helps us prioritize.</p>
                    </div>
                    <div className="quiz-card-grid">
                      {TIMELINE_CARDS.map((card, index) => (
                        <button
                          key={card.value}
                          type="button"
                          className={cardClass(selections.timeline === card.value)}
                          data-quiz-first-focus={index === 0 ? true : undefined}
                          onClick={() => handleAdvance({ timeline: card.value })}
                        >
                          <span className="quiz-card-icon" aria-hidden="true">
                            <CardIcon name={card.icon} />
                          </span>
                          <strong>{card.title}</strong>
                          <span>{card.description}</span>
                        </button>
                      ))}
                    </div>
                  </>
                ) : null}

                {currentStep === 6 ? (
                  <>
                    <div className="quiz-head">
                      <h2>You&apos;re One Step Away from Knowing Exactly What Can Be Removed from Your Report.</h2>
                      <p>
                        Enter your details below and we&apos;ll reach out to
                        schedule your free 15-minute consultation — where
                        we&apos;ll review your reports together, identify every
                        removable inquiry, and tell you which plan fits your
                        situation.
                      </p>
                    </div>

                    <div className="quiz-diagnostic-card">
                      <span>{diagnostic.label}</span>
                      <strong>{diagnostic.title}</strong>
                      <p>{diagnostic.body}</p>
                    </div>

                    <form className="quiz-form" onSubmit={handleSubmit}>
                      <label>
                        <span>First Name</span>
                        <input
                          required
                          type="text"
                          name="firstName"
                          autoComplete="given-name"
                          placeholder="Your first name"
                          data-quiz-first-focus
                          value={formState.firstName}
                          onChange={(event) =>
                            setFormState((prev) => ({ ...prev, firstName: event.target.value }))
                          }
                        />
                      </label>

                      <label>
                        <span>Email Address</span>
                        <input
                          required
                          type="email"
                          name="email"
                          autoComplete="email"
                          inputMode="email"
                          placeholder="Your best email address"
                          value={formState.email}
                          onChange={(event) =>
                            setFormState((prev) => ({ ...prev, email: event.target.value }))
                          }
                        />
                      </label>

                      <label>
                        <span>Phone Number</span>
                        <input
                          type="tel"
                          name="phone"
                          autoComplete="tel"
                          inputMode="tel"
                          placeholder="Your phone number (optional — we'll email you either way)"
                          value={formState.phone}
                          onChange={(event) =>
                            setFormState((prev) => ({ ...prev, phone: event.target.value }))
                          }
                        />
                      </label>

                      <button type="submit" className="btn btn-primary btn-large quiz-submit">
                        Get My Free Credit Analysis →
                      </button>

                      <p className="quiz-legal">
                        By submitting this form, you agree to be contacted by
                        Inquiry Removal at the email or phone number provided.
                        We do not sell or share your information. You can opt
                        out at any time.
                      </p>
                      <p className="quiz-mini">
                        No credit card required. No obligation. No monthly fees
                        — ever. Plans start at $199, paid once, only after your
                        consultation confirms we can help.
                      </p>
                    </form>

                    <blockquote className="quiz-testimonial">
                      <p>
                        &quot;I filled out the form not really knowing what to
                        expect. By the end of the consultation I knew exactly
                        how many inquiries I had, which ones could be removed,
                        and what my score could look like afterward. I signed up
                        that same day. Thirty-eight days later, 14 inquiries
                        were gone and my score was up 71 points.&quot;
                      </p>
                      <footer>
                        James L. | Chicago, IL | 5-star review | 14 Inquiries Removed |
                        +71 Points in 38 Days
                      </footer>
                    </blockquote>

                    <p className="quiz-soft-path">
                      Not ready to fill out a form? Call Robert directly.{" "}
                      <a href="tel:+16023776626">602-377-6626</a> — Questions
                      answered. No scripts. No pressure.
                    </p>
                  </>
                ) : null}
              </div>
            </>
          ) : (
            <div className="quiz-panel quiz-confirmation">
              <div className="quiz-confirm-badge">
                <span aria-hidden="true">
                  <InlineIcon name="checkBadge" />
                </span>
                <span>You&apos;re In. Here&apos;s What Happens Next.</span>
              </div>
              <div className="quiz-diagnostic-card quiz-diagnostic-card-confirmed">
                <span>Your recommended starting point</span>
                <strong>{diagnostic.title}</strong>
                <p>{diagnostic.body}</p>
              </div>
              <div className="quiz-head">
                <h2>We&apos;ve Got Your Information — Here&apos;s What We Do From Here.</h2>
                <p>
                  Thank you, {formState.firstName}. Your free consultation
                  request is confirmed. A member of the Inquiry Removal team
                  will reach out within {followUpWindow(selections.timeline)} to
                  schedule your 15-minute credit review.
                </p>
              </div>

              <div className="quiz-confirm-grid">
                <article className="quiz-confirm-step">
                  <strong>Step 1 — Within {followUpWindow(selections.timeline)}</strong>
                  <p>
                    We reach out by email or phone — whichever you prefer — to
                    confirm your consultation time. If you&apos;d rather skip the
                    wait, call us directly at 602-377-6626.
                  </p>
                </article>

                <article className="quiz-confirm-step">
                  <strong>Step 2 — At Your Consultation (15 Minutes)</strong>
                  <p>
                    We pull up your Experian, Equifax, and TransUnion reports
                    together. We walk through every hard inquiry, identify every
                    one that qualifies for removal, total them across all three
                    bureaus, and tell you exactly which plan fits your
                    situation. You&apos;ll leave the call knowing everything —
                    including what your score could look like on the other side.
                  </p>
                </article>

                <article className="quiz-confirm-step">
                  <strong>Step 3 — If You Decide to Move Forward</strong>
                  <p>
                    Custom dispute letters are built and submitted to all three
                    bureaus within 24 hours of signup. Then we handle
                    everything. You monitor your score as the removals come
                    through.
                  </p>
                </article>
              </div>

              <div className="quiz-confirm-stat">
                <strong>
                  We&apos;ve helped 1,123 clients remove over 100,437 hard
                  inquiries since 2015.
                </strong>
                <p>
                  The person who reaches out to you has been doing this — and
                  only this — for years.
                </p>
              </div>

              <blockquote className="quiz-testimonial">
                <p>
                  &quot;The consultation took exactly 15 minutes. By the end of it
                  I knew my inquiry count, which plan I needed, and what my
                  score could look like. I signed up and disputes were submitted
                  the next morning. I wish I had done this six months
                  earlier.&quot;
                </p>
                <footer>
                  Maria S. | San Antonio, TX | 5-star review | 22 Inquiries Removed |
                  +88 Points
                </footer>
              </blockquote>

              <div className="quiz-confirm-links">
                <span>While you&apos;re waiting:</span>
                <div>
                  <Link href="/how-it-works">
                    <InlineIcon name="calendarCheck" />
                    <span>See How It Works →</span>
                  </Link>
                  <Link href="/results">
                    <InlineIcon name="scoreRise" />
                    <span>Read Client Results →</span>
                  </Link>
                  <Link href="/pricing">
                    <InlineIcon name="flatFee" />
                    <span>Review Pricing Details →</span>
                  </Link>
                </div>
              </div>

              <p className="quiz-mini">
                If you don&apos;t hear from us within the timeframe above, call us
                directly at 602-377-6626 or email support@inquiryremoval.com. We
                answer both.
              </p>
            </div>
          )}
        </div>
      </div>
</section>
  );
}
