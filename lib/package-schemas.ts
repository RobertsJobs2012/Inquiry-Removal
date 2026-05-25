export const packageSchemas: Record<string, unknown> = {
  "/": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.inquiryremoval.com/#organization",
        "name": "Inquiry Removal",
        "url": "https://www.inquiryremoval.com/",
        "telephone": "602-377-6626",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.inquiryremoval.com/images/logo/inquiry-removal-logo.png"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.inquiryremoval.com/#website",
        "url": "https://www.inquiryremoval.com/",
        "name": "Inquiry Removal",
        "publisher": {
          "@id": "https://www.inquiryremoval.com/#organization"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.inquiryremoval.com/#webpage",
        "url": "https://www.inquiryremoval.com/",
        "name": "Hard Inquiry Removal | 100,437 Removed | Inquiry Removal",
        "description": "Remove unauthorized hard inquiries from your credit report — all 3 bureaus. 100,437+ removed since 2015. Free consult. Flat fee. Get started today.",
        "isPartOf": {
          "@id": "https://www.inquiryremoval.com/#website"
        },
        "about": {
          "@id": "https://www.inquiryremoval.com/#organization"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.inquiryremoval.com/images/og/inquiry-removal-default-og.webp"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.inquiryremoval.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Will this actually work for my situation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — if you have unauthorized, excessive, or fraudulent hard inquiries on your credit report, we can dispute them using federal law. We offer a completely free consultation specifically so you can see exactly what's removable and what your score improvement could look like before you spend anything. No two credit reports are identical, which is why we look at yours first."
            }
          },
          {
            "@type": "Question",
            "name": "Can you really remove hard inquiries — or just dispute them?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We have permanently removed over 100,437 hard inquiries across Experian, Equifax, and TransUnion since 2015. We do this using the FCRA, FDCPA, FACTA, and Metro 2 compliance laws — not generic templates, not guesswork. Our near-100% success rate exists because we know which law applies to which type of inquiry and why. Disputing and removing are the same outcome when you know what you're doing."
            }
          },
          {
            "@type": "Question",
            "name": "How soon will I see results?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Some clients see their first removals in as few as 14 days. Most see full results within 30 to 90 days. We are transparent about timelines from the very first conversation — we work as fast as the law allows because we know your goals are on a real schedule."
            }
          },
          {
            "@type": "Question",
            "name": "What if I've already tried another company and got nothing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We hear this regularly, and the answer is almost always the same: the company you worked with was a generalist. They treated inquiry removal as one item on a long checklist, using the same strategy they'd use for a collection or a late payment. Inquiry removal requires a completely different approach — specific federal laws applied to specific inquiry types, sent to specific bureaus in a specific way. That specialization is the only thing we do. It's why we succeed where others stall."
            }
          }
        ]
      }
    ]
  },
  "/services": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.inquiryremoval.com/services#webpage",
        "url": "https://www.inquiryremoval.com/services",
        "name": "Hard Inquiry Removal Plans | Flat Fee | Inquiry Removal",
        "description": "Remove hard inquiries — 1 or 100. Flat-fee plans from $199, built for your situation. Free consultation. Custom disputes. All 3 bureaus. Guarantee.",
        "isPartOf": {
          "@id": "https://www.inquiryremoval.com/#website"
        },
        "about": {
          "@id": "https://www.inquiryremoval.com/#organization"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.inquiryremoval.com/images/og/inquiry-removal-default-og.webp"
        },
        "breadcrumb": {
          "@id": "https://www.inquiryremoval.com/services#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.inquiryremoval.com/services#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.inquiryremoval.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Hard Inquiry Removal Plans — Flat Fee, Built for Your Inquiry Count",
            "item": "https://www.inquiryremoval.com/services"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.inquiryremoval.com/services#service",
        "name": "Hard Inquiry Removal Plans — Flat Fee, Built for Your Inquiry Count",
        "url": "https://www.inquiryremoval.com/services",
        "provider": {
          "@id": "https://www.inquiryremoval.com/#organization"
        },
        "serviceType": "Hard inquiry review and dispute service"
      }
    ]
  },
  "/about": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://www.inquiryremoval.com/about#webpage",
        "url": "https://www.inquiryremoval.com/about",
        "name": "About | Hard Inquiry Specialist Since 2015 | Inquiry Removal",
        "description": "Robert Garcia built Inquiry Removal after unauthorized hard inquiries wrecked his perfect credit. Learn why that experience changes everything.",
        "isPartOf": {
          "@id": "https://www.inquiryremoval.com/#website"
        },
        "about": {
          "@id": "https://www.inquiryremoval.com/#organization"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.inquiryremoval.com/images/og/inquiry-removal-default-og.webp"
        },
        "breadcrumb": {
          "@id": "https://www.inquiryremoval.com/about#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.inquiryremoval.com/about#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.inquiryremoval.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Hard Inquiry Removal — Who We Are and Why We Built This",
            "item": "https://www.inquiryremoval.com/about"
          }
        ]
      },
      {
        "@type": "Person",
        "@id": "https://www.inquiryremoval.com/about#founder",
        "name": "Robert Garcia",
        "jobTitle": "Founder",
        "worksFor": {
          "@id": "https://www.inquiryremoval.com/#organization"
        }
      }
    ]
  },
  "/how-it-works": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.inquiryremoval.com/how-it-works#webpage",
        "url": "https://www.inquiryremoval.com/how-it-works",
        "name": "Hard Inquiry Removal: How It Works | Inquiry Removal",
        "description": "See exactly how our hard inquiry removal process works — step by step, real timelines, zero surprises. Free consultation to start.",
        "isPartOf": {
          "@id": "https://www.inquiryremoval.com/#website"
        },
        "about": {
          "@id": "https://www.inquiryremoval.com/#organization"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.inquiryremoval.com/images/og/inquiry-removal-default-og.webp"
        },
        "breadcrumb": {
          "@id": "https://www.inquiryremoval.com/how-it-works#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.inquiryremoval.com/how-it-works#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.inquiryremoval.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Hard Inquiry Removal: Simple Steps, Real Results, Zero Surprises",
            "item": "https://www.inquiryremoval.com/how-it-works"
          }
        ]
      },
      {
        "@type": "HowTo",
        "@id": "https://www.inquiryremoval.com/how-it-works#howto",
        "name": "How Hard Inquiry Removal Works",
        "step": [
          {
            "@type": "HowToStep",
            "position": 1,
            "name": "Book Your Free Consultation"
          },
          {
            "@type": "HowToStep",
            "position": 2,
            "name": "Build and Submit Custom Disputes"
          },
          {
            "@type": "HowToStep",
            "position": 3,
            "name": "Monitor Bureau Responses"
          },
          {
            "@type": "HowToStep",
            "position": 4,
            "name": "Review Your Updated Report"
          }
        ]
      }
    ]
  },
  "/results": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.inquiryremoval.com/results#webpage",
        "url": "https://www.inquiryremoval.com/results",
        "name": "Hard Inquiry Removal Results | Real Proof | Inquiry Removal",
        "description": "Hard inquiry removal results — real clients, real proof. 100,437 inquiries deleted. Scores up 50–100+ points. See case studies and testimonials.",
        "isPartOf": {
          "@id": "https://www.inquiryremoval.com/#website"
        },
        "about": {
          "@id": "https://www.inquiryremoval.com/#organization"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.inquiryremoval.com/images/og/inquiry-removal-default-og.webp"
        },
        "breadcrumb": {
          "@id": "https://www.inquiryremoval.com/results#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.inquiryremoval.com/results#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.inquiryremoval.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Hard Inquiry Removal Results — 100,437 Removed. Here's the Proof.",
            "item": "https://www.inquiryremoval.com/results"
          }
        ]
      }
    ]
  },
  "/pricing": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.inquiryremoval.com/pricing#webpage",
        "url": "https://www.inquiryremoval.com/pricing",
        "name": "Hard Inquiry Removal Pricing | From $199 | Inquiry Removal",
        "description": "Hard inquiry removal plans from $199 — one flat fee, no monthly charges. Plans sized by inquiry count. Free consultation. 100% money-back guarantee.",
        "isPartOf": {
          "@id": "https://www.inquiryremoval.com/#website"
        },
        "about": {
          "@id": "https://www.inquiryremoval.com/#organization"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.inquiryremoval.com/images/og/inquiry-removal-default-og.webp"
        },
        "breadcrumb": {
          "@id": "https://www.inquiryremoval.com/pricing#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.inquiryremoval.com/pricing#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.inquiryremoval.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Hard Inquiry Removal Pricing — One Flat Fee. No Monthly Charges.",
            "item": "https://www.inquiryremoval.com/pricing"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.inquiryremoval.com/pricing#service",
        "name": "Hard Inquiry Removal Pricing — One Flat Fee. No Monthly Charges.",
        "url": "https://www.inquiryremoval.com/pricing",
        "provider": {
          "@id": "https://www.inquiryremoval.com/#organization"
        },
        "serviceType": "Hard inquiry review and dispute service"
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.inquiryremoval.com/pricing#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why do you charge a flat fee instead of monthly like other credit repair companies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We charge a flat fee because a monthly subscription would give us a financial incentive to move slowly — and we refuse to build that conflict of interest into our business model. Monthly billing benefits the company, not the client. A flat fee means our incentive is completely aligned with your outcome: the faster your inquiries are removed, the better we've done our job. We chose the structure that works for you, not for us."
            }
          },
          {
            "@type": "Question",
            "name": "What if I'm not sure how many inquiries I have — how do I know which plan to choose?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You don't need to know before the free consultation. That's exactly what the consultation is for — we pull your full credit reports, count every hard inquiry across Experian, Equifax, and TransUnion, and tell you precisely which plan fits your situation before you spend anything. There's no obligation and no credit card required to find out."
            }
          },
          {
            "@type": "Question",
            "name": "Is this actually worth it — what if my inquiries can't be removed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If your inquiries don't qualify for removal, we tell you that in the free consultation — before you pay anything. We have a near-100% success rate across 1,123 clients because we only take cases where the legal grounds for removal exist. The consultation exists specifically so you're never in a situation where you've paid for something we can't deliver. And if you do sign up and we don't remove a single inquiry within 90 days, you receive a full refund under our money-back guarantee."
            }
          },
          {
            "@type": "Question",
            "name": "Why should I pay for this when I could dispute the inquiries myself?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can file your own disputes — we are always honest about that. The challenge is that the process requires knowing which specific provision of federal law applies to each specific inquiry type, how to construct a legally precise argument that a bureau cannot dismiss as a template, and how to escalate correctly when a bureau responds with \"verified\" — which is the response that stops most self-filers permanently. We've spent eleven years doing only this. The knowledge gap between a first-time self-filer and a team that has successfully removed over 100,437 inquiries is not something a weekend of research closes. But if you want to try first and come back, we'll be here."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer payment plans?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We do not offer payment plans at this time. Our flat fees are structured specifically to be accessible — $199 for the Starter Plan, $299 for the Standard, and $499 for the Elite — and are priced well below what comparable services charge on a monthly basis over the same timeframe. If affordability is a concern, we encourage you to consider what the inquiries are currently costing you in interest rates and loan terms — in most cases, the flat fee is recovered within the first few loan payments at the improved rate."
            }
          },
          {
            "@type": "Question",
            "name": "I've paid a credit repair company before and got nothing. Why would this be different?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The most common reason clients come to us after a prior company failed is structural: most credit repair companies treat inquiry removal as one item on a checklist. They use the same generic strategy for inquiries that they'd use for a collection or a late payment — and bureaus dismiss that approach quickly. We do one thing. Inquiry removal is our entire practice, our entire knowledge base, and the only thing every dollar of your flat fee goes toward. That specialization is why we succeed where generalists stall. The results on our Results page are from real clients — many of whom came to us after a prior company failed to deliver."
            }
          }
        ]
      }
    ]
  },
  "/comparison": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.inquiryremoval.com/comparison#webpage",
        "url": "https://www.inquiryremoval.com/comparison",
        "name": "Inquiry Removal vs Lexington Law, Credit Saint & Credit People",
        "description": "Comparing credit repair services for hard inquiry removal? Honest side-by-side: Inquiry Removal vs Lexington Law, Credit Saint, and Credit People.",
        "isPartOf": {
          "@id": "https://www.inquiryremoval.com/#website"
        },
        "about": {
          "@id": "https://www.inquiryremoval.com/#organization"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.inquiryremoval.com/images/og/inquiry-removal-default-og.webp"
        },
        "breadcrumb": {
          "@id": "https://www.inquiryremoval.com/comparison#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.inquiryremoval.com/comparison#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.inquiryremoval.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Hard Inquiry Removal vs Subscription Services — An Honest Comparison",
            "item": "https://www.inquiryremoval.com/comparison"
          }
        ]
      }
    ]
  },
  "/get-started": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.inquiryremoval.com/get-started#webpage",
        "url": "https://www.inquiryremoval.com/get-started",
        "name": "Hard Inquiry Removal Consultation | Free | Inquiry Removal",
        "description": "Book your free hard inquiry removal consultation — 15 minutes. We review your report and tell you exactly what can be removed before you spend anything.",
        "isPartOf": {
          "@id": "https://www.inquiryremoval.com/#website"
        },
        "about": {
          "@id": "https://www.inquiryremoval.com/#organization"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.inquiryremoval.com/images/og/inquiry-removal-default-og.webp"
        },
        "breadcrumb": {
          "@id": "https://www.inquiryremoval.com/get-started#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.inquiryremoval.com/get-started#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.inquiryremoval.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Hard Inquiry Removal — Book Your Free 15-Minute Consultation",
            "item": "https://www.inquiryremoval.com/get-started"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.inquiryremoval.com/get-started#service",
        "name": "Hard Inquiry Removal — Book Your Free 15-Minute Consultation",
        "url": "https://www.inquiryremoval.com/get-started",
        "provider": {
          "@id": "https://www.inquiryremoval.com/#organization"
        },
        "serviceType": "Hard inquiry review and dispute service"
      }
    ]
  },
  "/experian-hard-inquiry-removal": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.inquiryremoval.com/experian-hard-inquiry-removal#webpage",
        "url": "https://www.inquiryremoval.com/experian-hard-inquiry-removal",
        "name": "Experian Hard Inquiry Removal | Since 2015 | Inquiry Removal",
        "description": "Dispute and remove unauthorized hard inquiries from your Experian credit report using federal law. Free consultation. Flat fee. 100% money-back guarantee.",
        "isPartOf": {
          "@id": "https://www.inquiryremoval.com/#website"
        },
        "about": {
          "@id": "https://www.inquiryremoval.com/#organization"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.inquiryremoval.com/images/og/inquiry-removal-default-og.webp"
        },
        "breadcrumb": {
          "@id": "https://www.inquiryremoval.com/experian-hard-inquiry-removal#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.inquiryremoval.com/experian-hard-inquiry-removal#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.inquiryremoval.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Experian Hard Inquiry Removal — Using Federal Law, Not Guesswork",
            "item": "https://www.inquiryremoval.com/experian-hard-inquiry-removal"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.inquiryremoval.com/experian-hard-inquiry-removal#service",
        "name": "Experian Hard Inquiry Removal — Using Federal Law, Not Guesswork",
        "url": "https://www.inquiryremoval.com/experian-hard-inquiry-removal",
        "provider": {
          "@id": "https://www.inquiryremoval.com/#organization"
        },
        "serviceType": "Hard inquiry review and dispute service"
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.inquiryremoval.com/experian-hard-inquiry-removal#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can you remove hard inquiries from an Experian credit report?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Unauthorized, inaccurate, and impermissible hard inquiries can be disputed and removed from your Experian credit report under the Fair Credit Reporting Act. Experian is correct that legitimately authorized hard inquiries — ones where you gave clear, informed consent to a credit pull — are generally not removable before the two-year window expires. The critical distinction is authorization. If a dealership sent your application to lenders you didn't approve, if a company pulled your Experian report without a legally required permissible purpose, or if there are inquiries on your report from an identity theft incident — those are disputable, and removal is the likely outcome when the dispute is constructed correctly."
            }
          },
          {
            "@type": "Question",
            "name": "How do I dispute a hard inquiry on Experian?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can dispute a hard inquiry on Experian through their online dispute center, by mail, or by phone — but the outcome depends almost entirely on how the dispute is framed. Experian's automated system will verify that the pull happened and mark it \"verified\" unless the dispute specifically challenges the authorization or permissible purpose of the pull — not just its existence. A generic \"I don't recognize this\" dispute is the most common approach and the most commonly dismissed. A dispute that cites the specific FCRA provision governing unauthorized pulls, documents the absence of permissible purpose, and requests reinvestigation on those legal grounds produces a fundamentally different outcome."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if Experian says a hard inquiry is \"verified\"?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A \"verified\" response from Experian means they confirmed the credit pull occurred — not that the pull was legally authorized. These are two distinct legal questions, and Experian's initial dispute process primarily answers the first one. When we receive a verified response on an inquiry we believe was unauthorized, we escalate using a follow-up dispute that focuses on permissible purpose specifically. Most \"verified\" responses that are properly challenged at the escalation stage do not survive. This is the step that stops most self-filers and where professional dispute handling produces a different result."
            }
          },
          {
            "@type": "Question",
            "name": "How long do hard inquiries stay on an Experian credit report?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hard inquiries stay on your Experian credit report for two years. Experian reports that most hard inquiries stop significantly affecting your credit score after approximately one year — but they remain visible to lenders for the full two-year period. Unauthorized hard inquiries do not have to remain for two years. They can be disputed and removed before the two-year window if the dispute establishes that the pull lacked authorization or permissible purpose."
            }
          },
          {
            "@type": "Question",
            "name": "How many points does removing a hard inquiry from Experian add to my score?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Removing a hard inquiry from your Experian report typically adds 5 to 10 points per inquiry removed. The exact improvement depends on your starting score, your total credit profile, and how many inquiries are removed simultaneously. Clients who remove large clusters of unauthorized inquiries — particularly those whose scores were disproportionately suppressed by a single incident like a dealership visit — routinely see improvements of 50 to 100 or more points. The lower your starting score and the more inquiries removed, the more significant the recovery tends to be."
            }
          },
          {
            "@type": "Question",
            "name": "Can I dispute a hard inquiry from Experian that I didn't authorize?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — disputing an unauthorized hard inquiry with Experian is specifically supported under the Fair Credit Reporting Act. The FCRA gives consumers the right to dispute any item on their credit report they believe is inaccurate, including hard inquiries obtained without proper authorization or permissible purpose. The dispute must specifically challenge the authorization of the pull — not just flag it as unfamiliar — to trigger the reinvestigation process that gives the dispute its best chance of resulting in removal."
            }
          },
          {
            "@type": "Question",
            "name": "What does \"permissible purpose\" mean for an Experian hard inquiry?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Permissible purpose is the legal requirement under the Fair Credit Reporting Act that governs when a company may legally pull your Experian credit report. A lender, landlord, or creditor must have a specific legally recognized reason — typically a credit application you initiated, a collection action, or a court order — to access your report as a hard inquiry. A company that pulls your Experian report without a permissible purpose has violated the FCRA. That violation is the legal basis for removing the inquiry, and it is one of the strongest grounds available in the dispute process."
            }
          },
          {
            "@type": "Question",
            "name": "Does disputing a hard inquiry with Experian hurt my credit score?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No — filing a dispute with Experian does not hurt your credit score. Disputes do not appear on your credit report and do not factor into credit scoring calculations. The only score impact comes from the outcome: if the dispute results in removal, your score improves. If the dispute is unsuccessful and the inquiry remains, your score is unchanged from where it was before the dispute."
            }
          },
          {
            "@type": "Question",
            "name": "How long does the Experian hard inquiry dispute process take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Experian has 30 days to investigate and respond to a dispute under the FCRA, and in some cases up to 45 days. Most clients see their first Experian removals within 30 to 60 days of their disputes being submitted. Cases that require escalation — where an initial \"verified\" response is challenged with a follow-up legal argument — may take longer. We work as fast as the law allows and set realistic expectations from the first conversation."
            }
          },
          {
            "@type": "Question",
            "name": "What is the Experian dispute center address for removing hard inquiries by mail?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hard inquiry disputes can be submitted to Experian by mail at: Experian, P.O. Box 4500, Allen, TX 75013. Disputes submitted by mail should include a clear written explanation of why the inquiry is being disputed, supporting documentation where available, and a copy of your Experian credit report with the inquiry identified. Our dispute letters are built for mail submission and include everything the reinvestigation requires — including the specific legal argument that most self-written disputes omit."
            }
          },
          {
            "@type": "Question",
            "name": "Should I hire someone to remove hard inquiries from my Experian report or do it myself?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can dispute Experian hard inquiries on your own — and for a single straightforward inquiry with clear documentation, a well-constructed self-dispute sometimes succeeds. The cases where professional help produces meaningfully better outcomes are: multiple inquiries across one or more bureaus, situations where Experian has already returned a \"verified\" response, identity theft incidents with several fraudulent pulls, and any case where the dispute requires citing specific FCRA, FDCPA, or FACTA provisions rather than just flagging an unfamiliar inquiry. The knowledge gap between a first-time self-filer and a team that has removed over 100,437 inquiries is real — but the free consultation lets you assess whether your situation needs professional handling before you spend anything."
            }
          }
        ]
      }
    ]
  },
  "/equifax-hard-inquiry-removal": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.inquiryremoval.com/equifax-hard-inquiry-removal#webpage",
        "url": "https://www.inquiryremoval.com/equifax-hard-inquiry-removal",
        "name": "Equifax Hard Inquiry Removal | Since 2015 | Inquiry Removal",
        "description": "Dispute unauthorized Equifax hard inquiries with custom letters, federal law, and CFPB escalation when needed. Free consultation. Flat fee.",
        "isPartOf": {
          "@id": "https://www.inquiryremoval.com/#website"
        },
        "about": {
          "@id": "https://www.inquiryremoval.com/#organization"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.inquiryremoval.com/images/og/inquiry-removal-default-og.webp"
        },
        "breadcrumb": {
          "@id": "https://www.inquiryremoval.com/equifax-hard-inquiry-removal#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.inquiryremoval.com/equifax-hard-inquiry-removal#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.inquiryremoval.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Equifax Hard Inquiry Removal — Even If Equifax Already Said No",
            "item": "https://www.inquiryremoval.com/equifax-hard-inquiry-removal"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.inquiryremoval.com/equifax-hard-inquiry-removal#service",
        "name": "Equifax Hard Inquiry Removal — Even If Equifax Already Said No",
        "url": "https://www.inquiryremoval.com/equifax-hard-inquiry-removal",
        "provider": {
          "@id": "https://www.inquiryremoval.com/#organization"
        },
        "serviceType": "Hard inquiry review and dispute service"
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.inquiryremoval.com/equifax-hard-inquiry-removal#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can you remove hard inquiries from an Equifax credit report?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Unauthorized, inaccurate, and impermissible hard inquiries can be disputed and removed from your Equifax credit report under the Fair Credit Reporting Act. Equifax is correct that legitimately authorized hard inquiries are generally not removable before the two-year window expires. The distinction is authorization and permissible purpose. If a car dealership sent your application to lenders you didn't approve, if a company pulled your Equifax report without a legally required reason, or if inquiries appeared from an identity theft incident — those are disputable, and removal is the outcome when the dispute is constructed correctly and escalated where necessary."
            }
          },
          {
            "@type": "Question",
            "name": "How do I dispute a hard inquiry with Equifax?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can dispute a hard inquiry with Equifax through myEquifax online, by phone, or by certified mail — but the outcome depends almost entirely on how the dispute is framed and documented. Equifax's automated system will process a standard \"I don't recognize this\" dispute quickly and return a \"verified\" response in most cases. A dispute that specifically challenges the permissible purpose of the pull — citing the FCRA provision that governs unauthorized credit access and requesting documentation of the authorization — triggers a different level of reinvestigation. Submitting by certified mail creates a verifiable paper record that becomes important if escalation to the CFPB becomes necessary."
            }
          },
          {
            "@type": "Question",
            "name": "What is the Equifax dispute mailing address for hard inquiry removal?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hard inquiry disputes can be submitted to Equifax by certified mail at: Equifax Information Services LLC, P.O. Box 740256, Atlanta, GA 30374. Disputes submitted by certified mail should include a clear explanation of why the inquiry is being disputed, the specific FCRA basis for the dispute, any supporting documentation, and a copy of your Equifax credit report with the inquiry identified. Certified mail creates a delivery confirmation record — which matters if Equifax fails to respond within the required 30-day window or if CFPB escalation becomes appropriate later."
            }
          },
          {
            "@type": "Question",
            "name": "What do I do if Equifax denies my hard inquiry dispute?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If Equifax denies your dispute or returns a \"verified\" response, your legal options do not end there. The FCRA requires Equifax to conduct a reasonable investigation of every dispute — and the CFPB fined Equifax $15 million in January 2025 specifically for failing to meet that standard, including ignoring consumer documentation and allowing deleted items to reappear. A denial can be escalated with a follow-up dispute that shifts the argument to permissible purpose specifically, rather than just the existence of the inquiry. If Equifax continues to deny a legitimate dispute, filing a CFPB complaint is a meaningful and legally supported escalation step that carries real consequence for Equifax given their enforcement history."
            }
          },
          {
            "@type": "Question",
            "name": "Can I file a CFPB complaint against Equifax for not removing an unauthorized inquiry?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — filing a CFPB complaint against Equifax is a legitimate and effective escalation step when a valid dispute has been improperly denied. The CFPB ordered Equifax to pay $15 million in January 2025 for improper dispute investigation practices, meaning federal regulators are actively monitoring Equifax's dispute handling. A CFPB complaint creates a formal federal record of the dispute, requires Equifax to respond directly to the regulator, and carries enforcement weight that a standard consumer dispute does not. We guide clients through this process when escalation is warranted."
            }
          },
          {
            "@type": "Question",
            "name": "How do I dispute a hard inquiry on Equifax I didn't authorize?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Disputing an unauthorized hard inquiry on Equifax requires framing the dispute around permissible purpose — not just the unfamiliarity of the inquiry. The FCRA requires any company that pulls your Equifax credit report to have a specific legally recognized reason for doing so. A dispute that documents the absence of that reason, cites the applicable FCRA section, and requests that Equifax provide documentation of the authorization is fundamentally different from a standard \"I don't recognize this\" dispute. The former requires Equifax to investigate the legality of the pull. The latter typically results in an automated \"verified\" response."
            }
          },
          {
            "@type": "Question",
            "name": "How long do hard inquiries stay on an Equifax credit report?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hard inquiries stay on your Equifax credit report for two years. Equifax reports that most hard inquiries stop significantly affecting your score after approximately one year — but they remain visible to lenders for the full two-year period. Unauthorized hard inquiries do not have to remain for two years. They can be disputed and removed before that window if the dispute establishes that the pull lacked proper authorization or permissible purpose under the FCRA."
            }
          },
          {
            "@type": "Question",
            "name": "How many points does removing a hard inquiry from Equifax add to my score?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Removing a hard inquiry from your Equifax report typically adds 5 to 10 points per inquiry removed, depending on your overall credit profile and the number of inquiries removed simultaneously. Clients who remove large clusters of unauthorized inquiries — particularly those suppressed by a single dealership visit that produced multiple pulls — routinely see Equifax score improvements of 50 to 100 or more points. The relationship between inquiry removal and score recovery is most significant when the inquiries were artificially suppressing an otherwise strong credit profile."
            }
          },
          {
            "@type": "Question",
            "name": "What is myEquifax and how do I dispute a hard inquiry through it?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "myEquifax is Equifax's online consumer portal at myequifax.com where you can access your Equifax credit report, file disputes, and track dispute status. The myEquifax dispute process is the fastest submission method — disputes filed online are typically acknowledged within a few days — but the outcome depends on how the dispute is documented and argued, not how it is submitted. The same permissible purpose argument that produces removal through certified mail also applies when submitted through myEquifax. The advantage of certified mail is the verifiable delivery record it creates for escalation purposes."
            }
          },
          {
            "@type": "Question",
            "name": "Does disputing a hard inquiry with Equifax hurt my credit score?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No — filing a dispute with Equifax does not hurt your credit score. Disputes do not appear on your credit report and are not factored into credit scoring calculations. The only score impact comes from the outcome: removal improves your score, an unsuccessful dispute leaves it unchanged. There is no downside to disputing an unauthorized inquiry beyond the time and effort the process requires."
            }
          },
          {
            "@type": "Question",
            "name": "What does \"permissible purpose\" mean for an Equifax hard inquiry?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Permissible purpose is the legal requirement under Section 604 of the Fair Credit Reporting Act that governs when a company may legally pull your Equifax credit report. A company must have a specific legally recognized reason — typically a credit application you initiated, a collection action, employment screening you consented to, or a court order — to access your Equifax report as a hard inquiry. A company that pulls your Equifax report without permissible purpose has violated the FCRA. That violation is the legal basis for removing the inquiry and, where Equifax fails to act on a valid dispute, for escalating to the CFPB."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if Equifax reinserts an inquiry it already deleted?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If Equifax reinserts a hard inquiry that was previously deleted, that action is governed by specific FCRA requirements. Equifax is required to notify you within five business days before reinserting a deleted item and must provide the name of the furnisher who requested the reinsertion. Failure to follow this process is itself an FCRA violation that strengthens your dispute position. If a removed inquiry reappears on your Equifax report, we address it immediately and use the reinsertion as additional leverage in the follow-up dispute."
            }
          }
        ]
      }
    ]
  },
  "/transunion-hard-inquiry-removal": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.inquiryremoval.com/transunion-hard-inquiry-removal#webpage",
        "url": "https://www.inquiryremoval.com/transunion-hard-inquiry-removal",
        "name": "TransUnion Hard Inquiry Removal | Since 2015 | Inquiry Removal",
        "description": "Dispute unauthorized TransUnion hard inquiries — including ones found on Credit Karma. Custom disputes. Free consultation. Flat fee. 100% guarantee.",
        "isPartOf": {
          "@id": "https://www.inquiryremoval.com/#website"
        },
        "about": {
          "@id": "https://www.inquiryremoval.com/#organization"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.inquiryremoval.com/images/og/inquiry-removal-default-og.webp"
        },
        "breadcrumb": {
          "@id": "https://www.inquiryremoval.com/transunion-hard-inquiry-removal#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.inquiryremoval.com/transunion-hard-inquiry-removal#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.inquiryremoval.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "TransUnion Hard Inquiry Removal — Including Credit Karma Inquiries",
            "item": "https://www.inquiryremoval.com/transunion-hard-inquiry-removal"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.inquiryremoval.com/transunion-hard-inquiry-removal#service",
        "name": "TransUnion Hard Inquiry Removal — Including Credit Karma Inquiries",
        "url": "https://www.inquiryremoval.com/transunion-hard-inquiry-removal",
        "provider": {
          "@id": "https://www.inquiryremoval.com/#organization"
        },
        "serviceType": "Hard inquiry review and dispute service"
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.inquiryremoval.com/transunion-hard-inquiry-removal#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can you remove hard inquiries from a TransUnion credit report?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Unauthorized, inaccurate, and impermissible hard inquiries can be disputed and removed from your TransUnion credit report under the Fair Credit Reporting Act. TransUnion is correct that legitimately authorized hard inquiries are generally not removable before the two-year window. The distinction is permissible purpose under Section 604 of the FCRA — 15 U.S.C. § 1681b. If a company pulled your TransUnion report without a legally recognized reason, if a dealership sent your application to lenders you never approved, or if inquiries appeared from an identity theft incident — those are disputable and removal is the outcome when the dispute correctly challenges the authorization of the pull rather than just its existence."
            }
          },
          {
            "@type": "Question",
            "name": "What is a \"regular inquiry\" on a TransUnion credit report?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A \"regular inquiry\" on your TransUnion credit report is the same as a hard inquiry on your Experian or Equifax report — it is a credit pull initiated by a lender, landlord, or creditor that you applied to or that accessed your report for a specific credit decision. TransUnion uses different terminology than the other two major bureaus, which causes significant confusion for consumers trying to identify and dispute hard inquiries. If you see a regular inquiry from a company you don't recognize on your TransUnion report, it carries the same score impact and the same legal dispute rights as a hard inquiry on any other bureau."
            }
          },
          {
            "@type": "Question",
            "name": "Can I dispute a TransUnion hard inquiry through Credit Karma?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — Credit Karma's Direct Dispute tool sends real disputes to TransUnion and is a legitimate starting point. The limitation is in how those disputes are constructed. Credit Karma submits a notification that you are flagging the inquiry as potentially inaccurate. TransUnion processes it and responds — typically within 72 hours — and returns a \"verified\" result in most cases. The Credit Karma dispute does not cite the FCRA's permissible purpose provisions, does not document the absence of authorization specifically, and does not frame the dispute as a legal challenge to the company's right to access your report. Those distinctions are what produce removal. If Credit Karma's Direct Dispute returned a \"verified\" response, the dispute can be escalated with a professionally constructed legal argument that TransUnion's automated system cannot resolve with the same boilerplate response."
            }
          },
          {
            "@type": "Question",
            "name": "How do I dispute a hard inquiry with TransUnion?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can dispute a hard inquiry with TransUnion through TransUnion's online dispute center, by phone, or by certified mail to TransUnion Consumer Solutions, P.O. Box 2000, Chester, PA 19016. The outcome depends almost entirely on how the dispute is framed. A standard \"I don't recognize this\" dispute — whether submitted online, through Credit Karma, or by phone — typically produces a \"verified\" response. A dispute that specifically challenges the permissible purpose of the pull under 15 U.S.C. § 1681b — citing the absence of authorization and requesting documentation of the legal basis for the credit access — triggers a different reinvestigation. Certified mail creates a verifiable delivery record that matters if TransUnion fails to respond within the required 30-day window or if CFPB escalation becomes necessary."
            }
          },
          {
            "@type": "Question",
            "name": "What is the TransUnion dispute mailing address for hard inquiry removal?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hard inquiry disputes can be submitted to TransUnion by certified mail at: TransUnion Consumer Solutions, P.O. Box 2000, Chester, PA 19016. Disputes submitted by certified mail should include a clear explanation of why the inquiry is being disputed, the specific FCRA provision governing unauthorized credit pulls, any supporting documentation, and a copy of your TransUnion credit report with the inquiry identified. The certified mail delivery record is valuable documentation if TransUnion fails to respond within the required 30-day window or if the dispute needs to be escalated."
            }
          },
          {
            "@type": "Question",
            "name": "What do I do if TransUnion won't remove an unauthorized inquiry?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If TransUnion returns a \"verified\" or \"denied\" response on an inquiry you believe was unauthorized, your legal options do not end there. The FCRA requires TransUnion to conduct a reasonable investigation of every dispute — not just confirm that the pull exists in their system. When a verified response does not reflect a genuine investigation of permissible purpose, the appropriate next step is a follow-up dispute specifically challenging the legal basis for the credit access. If TransUnion continues to deny a legitimate dispute, filing a CFPB complaint creates a formal federal record that requires TransUnion to respond to a regulator — which carries enforcement weight that a consumer dispute alone does not."
            }
          },
          {
            "@type": "Question",
            "name": "Can I dispute a TransUnion hard inquiry I didn't authorize?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — the Fair Credit Reporting Act specifically supports disputes of unauthorized hard inquiries. Under 15 U.S.C. § 1681b — Section 604 of the FCRA — any company that pulls your TransUnion credit report must have a legally recognized permissible purpose for doing so. A dispute that documents the absence of that permissible purpose, cites the applicable statutory provision, and requests that TransUnion investigate the authorization of the pull — not just its existence — is the correct legal framing for an unauthorized inquiry dispute. This is fundamentally different from a standard dispute and produces fundamentally different results."
            }
          },
          {
            "@type": "Question",
            "name": "How long do hard inquiries stay on a TransUnion credit report?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hard inquiries stay on your TransUnion credit report for two years and may appear as \"regular inquiries\" under TransUnion's terminology. Most hard inquiries stop significantly affecting your score after approximately one year — but they remain visible to lenders reviewing your TransUnion report for the full two-year period. Unauthorized hard inquiries do not have to remain for two years. They can be disputed and removed before that window when the dispute establishes that the pull lacked authorization or permissible purpose under the FCRA."
            }
          },
          {
            "@type": "Question",
            "name": "How many points does removing a hard inquiry from TransUnion add to my score?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Removing a hard inquiry from your TransUnion report typically adds 5 to 10 points per inquiry removed, with the actual improvement depending on your overall credit profile and the number of inquiries removed simultaneously. For Credit Karma users, the score improvement will appear in the app as your TransUnion score updates following the removal. Clients who remove large clusters of unauthorized inquiries — particularly those whose TransUnion scores were disproportionately suppressed by a dealership visit or identity theft incident — routinely see improvements of 50 to 100 or more points."
            }
          },
          {
            "@type": "Question",
            "name": "Does disputing a hard inquiry with TransUnion hurt my credit score?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No — filing a dispute with TransUnion does not hurt your credit score. Disputes are not reported on your credit file and are not factored into credit scoring calculations on any scoring model. The only score impact comes from the result: a successful removal improves your score, an unsuccessful dispute leaves it unchanged. There is no downside to disputing an unauthorized inquiry beyond the time the process requires."
            }
          },
          {
            "@type": "Question",
            "name": "What is TransUnion's Fraud Victim Assistance Department?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "TransUnion's Fraud Victim Assistance Department is a specialized team within TransUnion that handles credit report issues related to identity theft — including fraudulent hard inquiries placed on your TransUnion report by someone using your information without authorization. Identity theft victims can contact this department directly and submit an FTC identity theft report as supporting documentation for their dispute. In our experience, fraudulent inquiry cases where identity theft documentation exists are among the strongest dispute situations available — the legal argument is airtight and the removal outcome is the most reliable."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if TransUnion reinserts an inquiry it already removed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If TransUnion reinserts a hard inquiry that was previously deleted, the FCRA requires them to notify you within five business days before the reinsertion occurs and to provide the name of the furnisher who requested it. Failure to follow this process is an FCRA violation that strengthens your dispute position considerably. If a removed inquiry reappears on your TransUnion report — or on your Credit Karma score — we address it immediately and use the improper reinsertion as additional leverage in the follow-up dispute."
            }
          },
          {
            "@type": "Question",
            "name": "Can I file a CFPB complaint against TransUnion for not removing an unauthorized inquiry?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — filing a CFPB complaint against TransUnion is a legitimate and effective escalation when a valid dispute has been improperly denied. The CFPB oversees TransUnion's compliance with the FCRA and has enforcement authority over dispute-handling practices. A CFPB complaint creates a formal federal record, requires TransUnion to respond to the regulator directly, and carries enforcement weight that a standard consumer dispute does not. We guide clients through this process when escalation is warranted and the dispute history supports it."
            }
          }
        ]
      }
    ]
  },
  "/car-dealership-inquiry-removal": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.inquiryremoval.com/car-dealership-inquiry-removal#webpage",
        "url": "https://www.inquiryremoval.com/car-dealership-inquiry-removal",
        "name": "Car Dealership Hard Inquiry Removal | FCRA | Inquiry Removal",
        "description": "Car dealership ran your credit without permission? We remove unauthorized dealer hard inquiries from all 3 bureaus. Free consult. Flat fee. Guaranteed.",
        "isPartOf": {
          "@id": "https://www.inquiryremoval.com/#website"
        },
        "about": {
          "@id": "https://www.inquiryremoval.com/#organization"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.inquiryremoval.com/images/og/inquiry-removal-default-og.webp"
        },
        "breadcrumb": {
          "@id": "https://www.inquiryremoval.com/car-dealership-inquiry-removal#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.inquiryremoval.com/car-dealership-inquiry-removal#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.inquiryremoval.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Car Dealership Inquiry Removal — Remove Every Unauthorized Pull",
            "item": "https://www.inquiryremoval.com/car-dealership-inquiry-removal"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.inquiryremoval.com/car-dealership-inquiry-removal#service",
        "name": "Car Dealership Inquiry Removal — Remove Every Unauthorized Pull",
        "url": "https://www.inquiryremoval.com/car-dealership-inquiry-removal",
        "provider": {
          "@id": "https://www.inquiryremoval.com/#organization"
        },
        "serviceType": "Hard inquiry review and dispute service"
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.inquiryremoval.com/car-dealership-inquiry-removal#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can a car dealership run your credit without permission?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A car dealership cannot legally run your credit as a hard inquiry without a permissible purpose under the Fair Credit Reporting Act — and informed consent to a hard pull is the most common permissible purpose required. If a dealership ran your credit without your explicit authorization, pulled a hard inquiry after telling you it was a soft pull, submitted your application to lenders you didn't approve, or ran your credit for a transaction that never happened, the pull likely lacked a legally valid permissible purpose. That makes it disputable and potentially removable under the FCRA."
            }
          },
          {
            "@type": "Question",
            "name": "Is it illegal for a car dealer to run your credit without permission?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Running a hard credit inquiry without a permissible purpose as defined under Section 604 of the Fair Credit Reporting Act — 15 U.S.C. § 1681b — is a violation of federal law. Car dealerships are subject to the FCRA and are required to have a legally recognized reason before accessing your credit report as a hard inquiry. Pulling your credit during a test drive without a financing discussion, running a hard pull after explicitly representing it as a soft pull, or submitting your application to lenders you didn't authorize all represent situations where the required permissible purpose may not exist — and where the resulting inquiry can be challenged and removed."
            }
          },
          {
            "@type": "Question",
            "name": "What do I do if a car dealership ran my credit without permission?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If a car dealership ran your credit without permission, the first step is pulling your full Experian, Equifax, and TransUnion credit reports to identify exactly which inquiries appeared and from which lenders. Then dispute each unauthorized inquiry with each bureau directly — citing the FCRA's permissible purpose requirements rather than just flagging the inquiry as unfamiliar. A dispute that specifically challenges the legal basis for the credit access produces a different outcome than a standard \"I don't recognize this\" dispute. If you want professional help, our free consultation reviews your reports and identifies every removable dealership inquiry before you spend anything."
            }
          },
          {
            "@type": "Question",
            "name": "Can a dealership run your credit multiple times?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A dealership can submit your application to multiple lenders — each of whom may pull your credit independently — but each submission requires the same permissible purpose standard as a single pull. Submitting your application to lenders beyond what you specifically authorized does not meet that standard. If you authorized one lender and the dealership submitted to fifteen, the unauthorized fourteen pulls are disputable regardless of how close together they occurred in time."
            }
          },
          {
            "@type": "Question",
            "name": "Do multiple car loan inquiries count as one inquiry?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "FICO scoring models group multiple auto loan inquiries within a 14-day window (older models) or 45-day window (newer models) and count them as a single inquiry for scoring purposes — but only for inquiries that were part of deliberate rate shopping you authorized. This grouping applies to score calculation only. The inquiries still appear individually on your credit report, are still visible to lenders, and are still disputable if they were unauthorized. The rate shopping window is a scoring protection for consumers who deliberately comparison shop — it is not a legal shield for dealerships that submit applications to lenders without your specific authorization."
            }
          },
          {
            "@type": "Question",
            "name": "Can I remove car dealership inquiries from my credit report?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Unauthorized car dealership inquiries can be disputed and removed from your Experian, Equifax, and TransUnion credit reports using the permissible purpose provisions of the Fair Credit Reporting Act. The dispute must specifically challenge the authorization and legal basis of each pull — not just flag it as unfamiliar. Legitimately authorized pulls — where you gave informed consent to a specific lender for a specific credit check — have weaker grounds for removal. The free consultation identifies which of your dealership inquiries fall into each category before you spend anything."
            }
          },
          {
            "@type": "Question",
            "name": "The dealership said it was a soft pull. Can I dispute the hard pull?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — a hard pull that was misrepresented as a soft pull is one of the strongest dispute situations in this entire niche. A soft pull and a hard pull are legally distinct. If you agreed to a soft pull and the dealership ran a hard inquiry, you did not give informed consent to a hard credit access. The authorization you provided was for a different type of credit check — and a hard pull conducted without informed consent for a hard pull specifically lacks the permissible purpose the FCRA requires. This scenario has clear legal grounds for dispute and is one of the most consistently successful cases we handle."
            }
          },
          {
            "@type": "Question",
            "name": "The dealership ran my credit and I didn't even buy the car. Can those be removed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — inquiries from a dealership visit that did not result in a purchase, where no financing agreement was signed, are among the most legally removable in this entire category. A permissible purpose for a hard credit inquiry requires a specific credit transaction you are genuinely pursuing. A test drive, a trade-in quote, a browsing visit, or a financing conversation that ended without a deal does not provide permissible purpose for a hard pull. If the dealership ran your credit and you walked away — or never agreed to a credit check at all — those inquiries have strong legal grounds for dispute and removal."
            }
          },
          {
            "@type": "Question",
            "name": "Can dealership inquiries affect my mortgage application?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — dealership hard inquiries directly affect your credit score and your mortgage application. Mortgage lenders review all three credit bureau reports and use your credit score as a primary qualification factor. A cluster of unauthorized dealership inquiries that drops your score below a lender's threshold can delay or prevent mortgage approval entirely — regardless of your actual payment history and financial behavior. The inquiries can be disputed and removed, your score can recover, and mortgage applications that were denied because of the inquiry count can be resubmitted at the improved score. We work with the urgency that a pending closing date requires."
            }
          },
          {
            "@type": "Question",
            "name": "How do I remove car dealer hard inquiries from all three credit bureaus?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Removing car dealer hard inquiries from all three bureaus requires submitting a separate dispute to Experian, Equifax, and TransUnion for each unauthorized pull — citing the FCRA permissible purpose standard for each specific inquiry. We handle all three bureaus simultaneously, which means no waiting for one bureau's response before addressing the next. Custom disputes are built for the specific dealership scenario — shotgun submission, soft pull misrepresentation, no-purchase inquiry, or post-walkaway pull — and submitted to all three bureaus within 24 hours of signup."
            }
          }
        ]
      }
    ]
  },
  "/los-angeles-hard-inquiry-removal": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.inquiryremoval.com/los-angeles-hard-inquiry-removal#webpage",
        "url": "https://www.inquiryremoval.com/los-angeles-hard-inquiry-removal",
        "name": "Hard Inquiry Removal Los Angeles | CA Law | Inquiry Removal",
        "description": "Remove unauthorized hard inquiries in Los Angeles. California law gives you extra rights. Free consultation. Flat fee. 100% money-back guarantee.",
        "isPartOf": {
          "@id": "https://www.inquiryremoval.com/#website"
        },
        "about": {
          "@id": "https://www.inquiryremoval.com/#organization"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.inquiryremoval.com/images/og/inquiry-removal-default-og.webp"
        },
        "breadcrumb": {
          "@id": "https://www.inquiryremoval.com/los-angeles-hard-inquiry-removal#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.inquiryremoval.com/los-angeles-hard-inquiry-removal#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.inquiryremoval.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Hard Inquiry Removal Los Angeles — More Rights Under California Law",
            "item": "https://www.inquiryremoval.com/los-angeles-hard-inquiry-removal"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.inquiryremoval.com/los-angeles-hard-inquiry-removal#service",
        "name": "Hard Inquiry Removal Los Angeles — More Rights Under California Law",
        "url": "https://www.inquiryremoval.com/los-angeles-hard-inquiry-removal",
        "provider": {
          "@id": "https://www.inquiryremoval.com/#organization"
        },
        "serviceType": "Hard inquiry review and dispute service",
        "areaServed": {
          "@type": "City",
          "name": "Los Angeles"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.inquiryremoval.com/los-angeles-hard-inquiry-removal#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can hard inquiries be removed from a credit report in California?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Unauthorized, inaccurate, and impermissible hard inquiries can be disputed and removed from your credit report in California under both the federal Fair Credit Reporting Act and the California Consumer Credit Reporting Agencies Act. California residents have dual legal protections — federal FCRA rights plus California's additional consumer credit reporting standards — which provide a stronger legal framework for challenging unauthorized inquiries than federal law alone. If you live in Los Angeles or anywhere in California and have unauthorized hard inquiries on your Experian, Equifax, or TransUnion report, you have legal grounds to dispute them."
            }
          },
          {
            "@type": "Question",
            "name": "Does California have stronger credit dispute rights than federal law?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — California's Consumer Credit Reporting Agencies Act provides additional consumer protections beyond what the federal FCRA requires. California residents challenging unauthorized hard inquiries can pursue remedies under both frameworks simultaneously, and can escalate to the California Department of Financial Protection and Innovation in addition to the federal Consumer Financial Protection Bureau. This dual-layer protection means California consumers have more legal leverage in the dispute process than residents of most other states."
            }
          },
          {
            "@type": "Question",
            "name": "What should I do if a Los Angeles car dealership ran my credit without permission?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If a Los Angeles car dealership ran your credit without permission, pull your full Experian, Equifax, and TransUnion credit reports immediately to identify every inquiry that resulted from the unauthorized access. File disputes with each bureau citing the FCRA's permissible purpose requirements — not just flagging the inquiries as unfamiliar, but specifically challenging the legal basis for each pull. California residents can also escalate to the DFPI if the bureau dispute is inadequately investigated. Our free consultation reviews your LA-area dealership inquiries specifically and tells you which ones have the strongest legal grounds for removal."
            }
          },
          {
            "@type": "Question",
            "name": "Do multiple car dealership inquiries in Los Angeles count as one?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "FICO scoring models group multiple auto loan inquiries within a 14 to 45-day window and count them as one for scoring purposes — but only for inquiries that were part of deliberate rate shopping you authorized. This grouping does not apply to unauthorized dealership pulls, does not remove the inquiries from your credit report, and does not prevent you from disputing them. Southern California has some of the highest dealership traffic in the country — which means LA-area consumers are more frequently subjected to shotgun credit pulls than almost any other metro. The rate shopping window does not protect dealerships that submitted your application to lenders without your specific authorization."
            }
          },
          {
            "@type": "Question",
            "name": "Can I dispute hard inquiries on Credit Karma if I live in Los Angeles?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Credit Karma's Direct Dispute tool sends disputes to TransUnion and is a real starting point for Los Angeles consumers — but the dispute framing it uses typically results in a \"verified\" response because it does not challenge the permissible purpose of the pull specifically. California residents have additional legal grounds under the CCRAA that a Credit Karma dispute does not invoke. If you've already tried Credit Karma's Direct Dispute and received a verified response, that is not the final word — it is the beginning of the professional dispute process that uses the correct legal argument."
            }
          },
          {
            "@type": "Question",
            "name": "How long do hard inquiries stay on my credit report in California?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hard inquiries stay on your credit report for two years under both federal FCRA and California CCRAA standards. They typically stop significantly affecting your credit score after approximately one year — but they remain visible to lenders reviewing your full report for the entire two-year period. Unauthorized hard inquiries do not have to remain for two years. They can be disputed and removed before that window when the dispute establishes that the pull lacked authorization or permissible purpose — under either federal or California law."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a credit repair service for Spanish speakers in Los Angeles?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — Inquiry Removal serves the Spanish-speaking communities of Los Angeles and offers consultations for Spanish-speaking clients. East LA, Boyle Heights, Koreatown, South LA, and communities across the county are fully served. Unauthorized hard inquiries from car dealerships, lenders, and identity theft incidents are among the most common problems affecting Spanish-speaking consumers in Los Angeles — and the legal tools for removing them are equally available regardless of language. Llámenos al 602-377-6626."
            }
          },
          {
            "@type": "Question",
            "name": "How does a suppressed credit score affect buying a home in Los Angeles?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A suppressed credit score has a disproportionate financial impact in Los Angeles because of the city's extreme home prices. The difference between a 680 and 740 credit score on an $800,000 mortgage can mean the difference between qualifying and being denied — or between an interest rate that adds $150,000 in total loan costs and one that doesn't. Unauthorized hard inquiries that suppress a score below a lender's qualifying threshold directly prevent Los Angeles residents from accessing homeownership in one of the most competitive markets in the country. Removing those inquiries restores the score and reopens the application."
            }
          }
        ]
      }
    ]
  },
  "/phoenix-hard-inquiry-removal": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.inquiryremoval.com/phoenix-hard-inquiry-removal#webpage",
        "url": "https://www.inquiryremoval.com/phoenix-hard-inquiry-removal",
        "name": "Hard Inquiry Removal Phoenix | Founded 2015 | Inquiry Removal",
        "description": "Phoenix-based hard inquiry removal specialist — founded after Valley dealerships hit our founder's credit. Free consultation. Flat fee. 100% guarantee.",
        "isPartOf": {
          "@id": "https://www.inquiryremoval.com/#website"
        },
        "about": {
          "@id": "https://www.inquiryremoval.com/#organization"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.inquiryremoval.com/images/og/inquiry-removal-default-og.webp"
        },
        "breadcrumb": {
          "@id": "https://www.inquiryremoval.com/phoenix-hard-inquiry-removal#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.inquiryremoval.com/phoenix-hard-inquiry-removal#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.inquiryremoval.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Hard Inquiry Removal Phoenix — Founded Here in 2015 by Robert Garcia",
            "item": "https://www.inquiryremoval.com/phoenix-hard-inquiry-removal"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.inquiryremoval.com/phoenix-hard-inquiry-removal#service",
        "name": "Hard Inquiry Removal Phoenix — Founded Here in 2015 by Robert Garcia",
        "url": "https://www.inquiryremoval.com/phoenix-hard-inquiry-removal",
        "provider": {
          "@id": "https://www.inquiryremoval.com/#organization"
        },
        "serviceType": "Hard inquiry review and dispute service",
        "areaServed": {
          "@type": "City",
          "name": "Phoenix"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.inquiryremoval.com/phoenix-hard-inquiry-removal#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can hard inquiries be removed from a credit report in Arizona?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Unauthorized, inaccurate, and impermissible hard inquiries can be disputed and removed from your credit report in Arizona under the federal Fair Credit Reporting Act. Arizona residents can escalate unresolved disputes to both the federal Consumer Financial Protection Bureau and the Arizona Attorney General's consumer protection division — giving Arizona consumers two regulatory escalation resources. Inquiry Removal operates in compliance with the Arizona Credit Services Act and has been removing hard inquiries for Valley residents since 2015."
            }
          },
          {
            "@type": "Question",
            "name": "What should I do if a Phoenix car dealership ran my credit without permission?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If a Phoenix-area car dealership ran your credit without permission, pull your full Experian, Equifax, and TransUnion reports immediately to identify every inquiry that resulted from the unauthorized access. File disputes with each bureau specifically challenging the permissible purpose of each pull — not just flagging the inquiries as unfamiliar. Arizona residents can escalate to the Arizona Attorney General's consumer protection division if the bureau's investigation is inadequate. Our free consultation identifies every unauthorized dealership inquiry on your Valley-area credit report before you spend anything."
            }
          },
          {
            "@type": "Question",
            "name": "Does Arizona have its own credit repair law?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — Arizona's Credit Services Act, codified at A.R.S. § 44-1701, governs credit repair organizations doing business in Arizona and provides state-level consumer protections for Arizona residents working with credit repair companies. Inquiry Removal operates in Phoenix and in compliance with applicable Arizona law — which means Valley clients are working with a company subject to Arizona consumer protection standards, not just federal ones. The Arizona Attorney General's Office enforces consumer protection law in Arizona and is an additional resource for Phoenix residents with credit-related complaints."
            }
          },
          {
            "@type": "Question",
            "name": "Why does Arizona have such a high identity theft rate and what does it mean for my credit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Arizona ranks 10th in the nation for identity theft complaints per capita, meaning Phoenix residents face a significantly higher risk of fraudulent hard inquiries appearing on their credit reports than residents of most other states. Fraudulent inquiries from identity theft are among the most legally removable in our entire practice — the combination of an FTC identity theft report filed at IdentityTheft.gov and a local law enforcement report from Phoenix PD or the Maricopa County Sheriff creates documentation that makes the dispute case for fraudulent inquiries exceptionally strong. If you have unrecognized hard inquiries on your report and believe identity theft may be involved, a police report filed locally in Phoenix or Maricopa County strengthens your dispute documentation significantly."
            }
          },
          {
            "@type": "Question",
            "name": "Do Phoenix dealership inquiries affect my mortgage application?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — Phoenix-area dealership hard inquiries directly affect credit scores and mortgage applications in the Valley's competitive homebuying market. Maricopa County mortgage lenders review all three bureau reports and use credit scores as a primary qualification factor. A cluster of unauthorized dealership inquiries that drops a score below a lender's threshold can delay or deny a Phoenix-area home purchase regardless of the buyer's actual payment history and financial behavior. The inquiries can be disputed and removed, the score can recover, and mortgage applications can be resubmitted. We work with the urgency that a pending Valley closing date requires and submit disputes within 24 hours of signup."
            }
          },
          {
            "@type": "Question",
            "name": "How long do hard inquiries stay on a credit report in Arizona?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hard inquiries stay on your credit report for two years under the federal Fair Credit Reporting Act, which applies in Arizona as it does in every state. Most hard inquiries stop significantly affecting your credit score after approximately one year — but they remain visible to Arizona lenders reviewing your full report for the entire two-year period. Unauthorized hard inquiries do not have to remain for two years. Arizona residents can dispute and have them removed before that window when the dispute establishes that the pull lacked authorization or permissible purpose."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a hard inquiry removal service in Phoenix?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — Inquiry Removal is a Phoenix-founded hard inquiry removal company that has operated in the Valley since 2015. Robert Garcia started the company in Phoenix after Valley dealerships ran his credit without permission and dropped his score over 100 points. The company operates fully online, serves all of Maricopa County and greater Arizona, and can be reached directly at 602-377-6626. The free consultation reviews your full credit report and identifies every removable hard inquiry before you spend anything."
            }
          },
          {
            "@type": "Question",
            "name": "What resources does Arizona have for identity theft and credit report disputes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Arizona residents dealing with identity theft and fraudulent credit inquiries have several local resources available. The Phoenix Police Department's Financial Crimes Bureau handles identity theft reports for City of Phoenix residents. The Maricopa County Sheriff's Office handles reports for unincorporated county areas. The Arizona Attorney General's consumer protection division handles credit repair and credit reporting complaints at the state level. The federal FTC identity theft report at IdentityTheft.gov is accepted by all three major credit bureaus as supporting documentation for fraudulent inquiry disputes. We coordinate all of this documentation into the dispute process for Phoenix-area identity theft clients."
            }
          },
          {
            "@type": "Question",
            "name": "Can I dispute multiple Valley dealership inquiries at once?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — and disputing all three bureaus simultaneously is exactly what we do. Phoenix-area dealership visits typically produce hard inquiry clusters across Experian, Equifax, and TransUnion at the same time — because lenders pull all three bureaus when evaluating a financing application. We submit disputes to all three simultaneously, which means no waiting for one bureau to finish before addressing the next. For Valley clients facing a pending mortgage application or a pending closing date, simultaneous three-bureau submission is critical to the timeline."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a Spanish-language credit inquiry removal service in Phoenix?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — Inquiry Removal serves Phoenix's Spanish-speaking communities in Maryvale, South Phoenix, Laveen, West Phoenix, and across Maricopa County, with Spanish-language consultations available. Unauthorized hard inquiries from Valley dealerships and identity theft incidents are among the most common credit problems affecting Spanish-speaking Phoenix residents — and the legal tools for removing them are equally available and equally effective regardless of language. Llame directamente al 602-377-6626 para una consulta gratuita."
            }
          }
        ]
      }
    ]
  },
  "/new-york-city-hard-inquiry-removal": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.inquiryremoval.com/new-york-city-hard-inquiry-removal#webpage",
        "url": "https://www.inquiryremoval.com/new-york-city-hard-inquiry-removal",
        "name": "Hard Inquiry Removal NYC | NY Law Rights | Inquiry Removal",
        "description": "Remove unauthorized hard inquiries in NYC — apartments, dealerships, employers, identity theft. New York law adds extra rights. Free consultation.",
        "isPartOf": {
          "@id": "https://www.inquiryremoval.com/#website"
        },
        "about": {
          "@id": "https://www.inquiryremoval.com/#organization"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.inquiryremoval.com/images/og/inquiry-removal-default-og.webp"
        },
        "breadcrumb": {
          "@id": "https://www.inquiryremoval.com/new-york-city-hard-inquiry-removal#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.inquiryremoval.com/new-york-city-hard-inquiry-removal#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.inquiryremoval.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Hard Inquiry Removal NYC — Apartments, Dealers, Employers, ID Theft",
            "item": "https://www.inquiryremoval.com/new-york-city-hard-inquiry-removal"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.inquiryremoval.com/new-york-city-hard-inquiry-removal#service",
        "name": "Hard Inquiry Removal NYC — Apartments, Dealers, Employers, ID Theft",
        "url": "https://www.inquiryremoval.com/new-york-city-hard-inquiry-removal",
        "provider": {
          "@id": "https://www.inquiryremoval.com/#organization"
        },
        "serviceType": "Hard inquiry review and dispute service",
        "areaServed": {
          "@type": "City",
          "name": "New York City"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.inquiryremoval.com/new-york-city-hard-inquiry-removal#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can a landlord run a hard credit inquiry without permission in New York City?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A landlord in New York City must have a permissible purpose under the Fair Credit Reporting Act to pull your credit as a hard inquiry — which means a formal rental application you submitted and authorized. A landlord who pulls a hard inquiry before you've formally applied, who runs a hard pull after representing it as a soft check, or who accesses your credit without your authorization has likely violated federal law. New York City's tenant protection framework provides additional grounds for challenging unauthorized landlord credit access. If apartment applications have left unauthorized hard inquiries on your credit report, those inquiries are disputable and potentially removable."
            }
          },
          {
            "@type": "Question",
            "name": "How many apartment applications can I submit in NYC before my credit score is damaged?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Every apartment application that triggers a hard inquiry on your Experian, Equifax, or TransUnion report reduces your score by approximately 5 to 10 points per pull. Unlike auto loan inquiries — which FICO groups within a rate-shopping window — apartment application inquiries from different landlords are not grouped and each counts separately. New York City's competitive rental market, where a housing search may require dozens of applications, creates a uniquely damaging inquiry accumulation problem that most other American cities don't face at the same scale. Unauthorized or misrepresented hard pulls from landlords are disputable regardless of how many occurred."
            }
          },
          {
            "@type": "Question",
            "name": "Can my employer run a hard credit inquiry in New York City?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In most cases, no — the NYC Stop Credit Discrimination in Employment Act restricts employers from using credit history in employment decisions and limits when they can legally pull a hard credit inquiry as part of employment screening. Specific exemptions exist for certain regulated industries. An employer credit pull that falls outside the permitted exemptions may violate local law in addition to lacking the permissible purpose the FCRA requires. If you found a hard inquiry from a current or former employer on your credit report, the free consultation identifies whether it qualifies for dispute based on the specific circumstances and role involved."
            }
          },
          {
            "@type": "Question",
            "name": "Does New York have its own credit reporting law beyond the FCRA?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — New York General Business Law Article 28-BB provides New York State residents with additional credit reporting rights and remedies beyond the federal Fair Credit Reporting Act. New York consumers disputing unauthorized hard inquiries can pursue remedies under both the federal FCRA and New York's state law simultaneously. New York City residents also have the NYC Department of Consumer and Worker Protection as a local regulatory escalation resource — in addition to the federal CFPB and the New York Attorney General's consumer protection division."
            }
          },
          {
            "@type": "Question",
            "name": "What is the NYC DCWP and how does it help with credit inquiry disputes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The NYC Department of Consumer and Worker Protection — DCWP — is a New York City agency that enforces local consumer protection laws, including the NYC Stop Credit Discrimination in Employment Act. For credit inquiry disputes involving employer credit pulls or other locally regulated conduct, the DCWP provides a city-level complaint resource in addition to the federal CFPB. Filing a complaint with DCWP creates a formal local record of the dispute and requires the respondent to answer to a city regulatory authority — which carries enforcement weight distinct from a federal consumer complaint."
            }
          },
          {
            "@type": "Question",
            "name": "How do I dispute an apartment application hard inquiry in New York?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Disputing an apartment application hard inquiry in New York requires framing the dispute around the permissible purpose standard — specifically whether the landlord or property manager had a legitimate basis for accessing your credit as a hard inquiry at the time it was pulled. A standard dispute flagging the inquiry as unfamiliar is unlikely to produce removal. A dispute that specifically challenges whether the authorization existed at the time of the pull, cites the FCRA's permissible purpose requirements, and documents the circumstances of the application produces a fundamentally different reinvestigation. Our free consultation reviews the specific landlord or property management inquiry on your report and tells you whether the grounds for dispute are strong before you spend anything."
            }
          },
          {
            "@type": "Question",
            "name": "Can hard inquiries from a co-op board application be disputed in New York?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Co-op board credit pulls made as part of a legitimate board review process — where you submitted an application and authorized the review — are generally authorized pulls with weaker grounds for dispute. Co-op board credit pulls that were made outside the authorized scope of the board review, or before a formal application was submitted, may have grounds for dispute based on the permissible purpose standard. If you have credit pulls from a co-op board process on your report and are uncertain whether they were properly authorized, the free consultation assesses the specific circumstances before any dispute is filed."
            }
          },
          {
            "@type": "Question",
            "name": "How long do hard inquiries stay on a credit report in New York?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hard inquiries stay on your credit report for two years under the federal FCRA, which applies in New York as in every state. New York's General Business Law Article 28-BB applies the same two-year standard. Most hard inquiries stop significantly affecting your credit score after approximately one year — but they remain visible to lenders, landlords, co-op boards, and employers reviewing your full report for the entire two-year period. Unauthorized hard inquiries do not have to remain for two years — they can be disputed and removed before that window when the dispute establishes that the pull lacked authorization or permissible purpose."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a hard inquiry removal service that serves all five boroughs of New York City?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — Inquiry Removal serves all five boroughs of New York City and the broader Tri-State area, operating fully online with no office visit required. We handle unauthorized hard inquiry disputes for Brooklyn, Queens, Manhattan, the Bronx, and Staten Island clients — including the apartment application inquiry scenario that is unique to New York City's rental market, employer credit pull disputes under NYC's Stop Credit Discrimination in Employment Act, car dealership inquiries from the New York metro auto market, and identity theft situations involving fraudulent hard pulls. The free consultation is fifteen minutes and can be scheduled from anywhere in the five boroughs."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a Spanish-language credit inquiry removal service in New York City?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — Inquiry Removal serves the Spanish-speaking communities of New York City across the Bronx, Brooklyn, Queens, Washington Heights, and East Harlem, with Spanish-language consultations available. Unauthorized hard inquiries from apartment applications, car dealerships, and identity theft incidents are among the most common credit problems affecting Spanish-speaking New Yorkers — and the legal tools for removing them are equally available regardless of language. Llame al 602-377-6626 para una consulta gratuita."
            }
          },
          {
            "@type": "Question",
            "name": "Can a New York City resident file a CFPB complaint about a hard inquiry?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — New York City residents can file CFPB complaints about unauthorized hard inquiries when bureau dispute responses are inadequate. In addition to the federal CFPB, New York City residents have the NYC Department of Consumer and Worker Protection and the New York Attorney General's consumer protection division as additional escalation resources. The combination of federal, state, and local regulatory options available to New York residents provides more escalation paths than most other markets in the country. We guide clients through the appropriate escalation when it becomes the right next step."
            }
          }
        ]
      }
    ]
  },
  "/privacy-policy": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.inquiryremoval.com/privacy-policy#webpage",
        "url": "https://www.inquiryremoval.com/privacy-policy",
        "name": "Privacy Policy | Inquiry Removal",
        "description": "Learn how Inquiry Removal collects, uses, and protects your personal and credit information. Plain-language privacy policy for all clients nationwide.",
        "isPartOf": {
          "@id": "https://www.inquiryremoval.com/#website"
        },
        "about": {
          "@id": "https://www.inquiryremoval.com/#organization"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.inquiryremoval.com/images/og/inquiry-removal-default-og.webp"
        },
        "breadcrumb": {
          "@id": "https://www.inquiryremoval.com/privacy-policy#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.inquiryremoval.com/privacy-policy#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.inquiryremoval.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Privacy Policy — Inquiry Removal",
            "item": "https://www.inquiryremoval.com/privacy-policy"
          }
        ]
      }
    ]
  },
  "/hard-inquiry-removal-mortgage": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.inquiryremoval.com/hard-inquiry-removal-mortgage#webpage",
        "url": "https://www.inquiryremoval.com/hard-inquiry-removal-mortgage",
        "name": "Hard Inquiry Removal Mortgage | Flat Fee | Inquiry Removal",
        "description": "Hard inquiries blocking your mortgage? We remove unauthorized pulls from all 3 bureaus. Free consultation. Flat fee. 100% money-back guarantee.",
        "isPartOf": {
          "@id": "https://www.inquiryremoval.com/#website"
        },
        "about": {
          "@id": "https://www.inquiryremoval.com/#organization"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.inquiryremoval.com/images/og/inquiry-removal-default-og.webp"
        },
        "breadcrumb": {
          "@id": "https://www.inquiryremoval.com/hard-inquiry-removal-mortgage#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.inquiryremoval.com/hard-inquiry-removal-mortgage#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.inquiryremoval.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Hard Inquiry Removal for Mortgage Approval — Before Your Closing Date",
            "item": "https://www.inquiryremoval.com/hard-inquiry-removal-mortgage"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.inquiryremoval.com/hard-inquiry-removal-mortgage#service",
        "name": "Hard Inquiry Removal for Mortgage Approval — Before Your Closing Date",
        "url": "https://www.inquiryremoval.com/hard-inquiry-removal-mortgage",
        "provider": {
          "@id": "https://www.inquiryremoval.com/#organization"
        },
        "serviceType": "Hard inquiry review and dispute service"
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.inquiryremoval.com/hard-inquiry-removal-mortgage#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can removing hard inquiries improve my credit score enough to qualify for a mortgage?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — for borrowers whose primary score gap is attributable to hard inquiries rather than payment history or debt levels, removing unauthorized or excessive inquiries frequently produces enough score improvement to cross a lender's qualifying threshold. Each hard inquiry removal typically adds 5 to 10 points per inquiry removed, and clients who remove clusters of unauthorized inquiries commonly see total improvements of 50 to 100 or more points. Whether removal will produce the specific improvement needed for your mortgage depends on your individual credit profile — which is exactly what we assess in the free consultation before you spend anything."
            }
          },
          {
            "@type": "Question",
            "name": "How do hard inquiries affect mortgage qualification specifically?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Mortgage lenders use the middle score across your three credit bureau reports — Experian, Equifax, and TransUnion — for their underwriting decision. Hard inquiries lower scores on each bureau where they appear, which directly affects your middle score. A cluster of unauthorized hard inquiries that suppresses even one bureau's score can pull your middle number below a lender's qualifying threshold even if your other two scores are strong. Removing those inquiries restores the suppressed bureau's score, shifts the middle number upward, and may be enough to clear the underwriting threshold the lender requires."
            }
          },
          {
            "@type": "Question",
            "name": "How quickly can hard inquiries be removed before my closing date?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most clients see their first inquiry removals within 14 to 30 days of disputes being submitted, with full results typically delivered within 30 to 90 days. In cases where the volume of inquiries is moderate and the legal grounds for removal are clear, results sometimes arrive faster. We submit disputes to all three bureaus within 24 hours of your signup — because we understand that a closing date is a real deadline with real financial consequences. If you have a specific closing date, tell us in the free consultation and we plan the process with that timeline in mind."
            }
          },
          {
            "@type": "Question",
            "name": "Will mortgage rate shopping inquiries count against me?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Multiple mortgage inquiries submitted within a 14-day window (older FICO models) or 45-day window (newer models) are grouped and counted as a single inquiry for scoring purposes. This protection applies specifically to mortgage inquiries. Auto loan inquiries, credit card inquiries, and any other credit pulls during the same period are not grouped with your mortgage inquiries — they count separately and carry individual score impacts. Unauthorized pulls from dealerships or lenders your broker submitted to without your specific approval are also not protected by the rate shopping window and are disputable."
            }
          },
          {
            "@type": "Question",
            "name": "What credit score do I need for a mortgage and how do hard inquiries affect it?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "FHA loans require a minimum credit score of 580 for the standard 3.5% down payment program and 500 for a 10% down payment program. Conventional loans typically require a minimum score of 620 to 640. VA loans do not have a minimum score requirement set by the VA, though individual lenders typically apply their own minimums. Many down payment assistance programs have minimum score requirements ranging from 620 to 660. Hard inquiries lower scores on each affected bureau by approximately 5 to 10 points per inquiry — which means a cluster of unauthorized inquiries can push a score below any of these thresholds and block access to the loan program or rate tier you were targeting."
            }
          },
          {
            "@type": "Question",
            "name": "Can I remove inquiries from a mortgage pre-approval that I didn't authorize?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If a mortgage broker or lender submitted your application to lenders you did not specifically authorize — or pulled your credit without your informed consent — those inquiries may lack the permissible purpose the Fair Credit Reporting Act requires and may qualify for dispute. The pre-approval process involves legitimate credit pulls, but broker submissions to lenders beyond what you authorized are not automatically protected. The free consultation reviews each specific inquiry and tells you which ones have legal grounds for removal."
            }
          },
          {
            "@type": "Question",
            "name": "What happens if I go car shopping while my mortgage application is in process?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Going car shopping while a mortgage application is in process is one of the most common and most damaging mistakes home buyers make — not because car shopping is wrong, but because most dealerships run your credit before you realize what's happening. A single dealership visit can produce ten to twenty hard inquiries across all three bureaus, suppressing your middle score at exactly the moment your lender is preparing to finalize your approval. If this has already happened, the dealership inquiries are disputable if they were unauthorized — and we work as fast as the law allows to remove them before your closing date is affected."
            }
          },
          {
            "@type": "Question",
            "name": "Does my lender see all hard inquiries on my credit report even if some are grouped for scoring?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — mortgage underwriters see every hard inquiry that appears on your credit report, regardless of how they are grouped for scoring purposes. A report showing fifteen individual inquiry entries from the past six months raises questions during manual underwriting review even when the scoring model treats some of them as one. Removing unauthorized inquiries cleans the report itself — not just the score — which presents a cleaner picture to every underwriter and lender who reviews your full file during the mortgage process."
            }
          },
          {
            "@type": "Question",
            "name": "How does the interest rate difference matter on a mortgage if my score improves?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The financial impact of a higher credit score on a mortgage is significant over the loan's lifetime. On a $350,000 loan, the difference between a score that qualifies for a 7.5% rate and one that qualifies for a 6.5% rate is approximately $75,000 in total interest paid over 30 years — or more than $200 per month in payments. On larger loans in higher-cost markets like Los Angeles or New York, the difference is proportionally larger. Unauthorized inquiries that suppress a score below a rate tier threshold are costing borrowers in real compounding dollars every month the inquiries remain on the report."
            }
          }
        ]
      }
    ]
  },
  "/unauthorized-hard-inquiry-removal": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.inquiryremoval.com/unauthorized-hard-inquiry-removal#webpage",
        "url": "https://www.inquiryremoval.com/unauthorized-hard-inquiry-removal",
        "name": "Unauthorized Hard Inquiry Removal | FCRA | Inquiry Removal",
        "description": "Company pulled your credit without permission? FCRA violation. We dispute and remove unauthorized hard inquiries from all 3 bureaus. Free consultation.",
        "isPartOf": {
          "@id": "https://www.inquiryremoval.com/#website"
        },
        "about": {
          "@id": "https://www.inquiryremoval.com/#organization"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.inquiryremoval.com/images/og/inquiry-removal-default-og.webp"
        },
        "breadcrumb": {
          "@id": "https://www.inquiryremoval.com/unauthorized-hard-inquiry-removal#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.inquiryremoval.com/unauthorized-hard-inquiry-removal#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.inquiryremoval.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Unauthorized Hard Inquiry Removal — Federal Law Is on Your Side",
            "item": "https://www.inquiryremoval.com/unauthorized-hard-inquiry-removal"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.inquiryremoval.com/unauthorized-hard-inquiry-removal#service",
        "name": "Unauthorized Hard Inquiry Removal — Federal Law Is on Your Side",
        "url": "https://www.inquiryremoval.com/unauthorized-hard-inquiry-removal",
        "provider": {
          "@id": "https://www.inquiryremoval.com/#organization"
        },
        "serviceType": "Hard inquiry review and dispute service"
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.inquiryremoval.com/unauthorized-hard-inquiry-removal#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can unauthorized hard inquiries be removed from my credit report?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — unauthorized hard inquiries can be disputed and removed from your Experian, Equifax, and TransUnion credit reports under Section 604 of the Fair Credit Reporting Act, 15 U.S.C. § 1681b. The legal basis for removal is the absence of permissible purpose — the statutory requirement that any company accessing your credit as a hard inquiry must have a specific, legally recognized reason for doing so. When that reason doesn't exist, the inquiry is legally challengeable and removal is the appropriate outcome when the dispute is correctly constructed around that permissible purpose argument."
            }
          },
          {
            "@type": "Question",
            "name": "What is permissible purpose and how does it apply to my unauthorized inquiry?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Permissible purpose is the legal standard under Section 604 of the FCRA that governs when a company may access your credit report as a hard inquiry. The law provides a defined list of circumstances — initiated credit transactions, court orders, existing account reviews, and a few others — that constitute valid permissible purpose. A company that pulls your credit outside these circumstances has violated the FCRA. The permissible purpose argument is the legal foundation of every unauthorized inquiry dispute we build — because it shifts the dispute from \"I don't recognize this\" to \"this company had no legal right to access my credit report.\""
            }
          },
          {
            "@type": "Question",
            "name": "What should I do if I find a hard inquiry from a company I don't recognize?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "If you find a hard inquiry from a company you don't recognize, the first step is pulling your full Experian, Equifax, and TransUnion reports to confirm the inquiry appears across all three or just one bureau — identity theft pulls often appear on all three simultaneously. Then check your application history around the date of the pull for any credit transaction, inquiry, or contact with a company that might appear under a different name. If no authorized transaction matches the pull, the inquiry likely lacks permissible purpose and qualifies for dispute. Our free consultation walks through this process for your specific report and tells you which inquiries have the strongest legal grounds before you spend anything."
            }
          },
          {
            "@type": "Question",
            "name": "What does \"verified\" from a credit bureau mean when I dispute an unauthorized inquiry?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A \"verified\" response from Experian, Equifax, or TransUnion means the bureau confirmed that the credit pull occurred — not that the pull was legally authorized. These are two distinct legal questions, and the bureau's initial dispute process primarily answers the first one. When a bureau verifies that a pull happened without investigating whether the pulling company had a permissible purpose for accessing your report, that response is legally incomplete. The correct escalation is a follow-up dispute specifically challenging the permissible purpose of the pull — which is a different legal argument than the one most initial disputes make, and one that bureaus cannot resolve with the same automated verification response."
            }
          },
          {
            "@type": "Question",
            "name": "Is it illegal for a company to pull your credit without permission?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — pulling a credit report as a hard inquiry without a permissible purpose as defined under 15 U.S.C. § 1681b is a violation of the Fair Credit Reporting Act. The FCRA provides both individual consumers and the Federal Trade Commission with enforcement tools against companies that access credit reports without lawful purpose. Consumers whose credit was pulled without permissible purpose may have the right to dispute the inquiry and seek its removal, and in some cases may have additional legal remedies under the FCRA's civil liability provisions. We focus on the dispute and removal process — any additional legal remedies should be discussed with an attorney specializing in consumer protection law."
            }
          },
          {
            "@type": "Question",
            "name": "Can a company pull your credit without you knowing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — hard inquiries can be placed on your credit report without your knowledge when a company accesses your report without your authorization. This is how most identity theft-related hard inquiries appear — the person whose information was stolen has no knowledge of the pull until they review their credit report. It is also how some dealership submissions appear — you authorized one lender and the dealership submitted to fifteen without telling you the scope of what they were doing. Reviewing your credit reports regularly at AnnualCreditReport.com is the most reliable way to identify unauthorized pulls as they appear."
            }
          },
          {
            "@type": "Question",
            "name": "How long do unauthorized hard inquiries stay on my credit report?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Unauthorized hard inquiries, like all hard inquiries, remain on your credit report for two years if they are not successfully disputed and removed. The critical distinction is that unauthorized inquiries — those lacking permissible purpose under the FCRA — do not have to remain for two years. They can be disputed and removed before that window closes when the dispute correctly establishes the absence of lawful authorization. Legitimate authorized inquiries, by contrast, generally cannot be removed before the two-year window regardless of any dispute filed."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between an unauthorized hard inquiry and an inaccurate hard inquiry?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An unauthorized hard inquiry is one that was pulled without a legally permissible purpose — the company had no legal right to access your credit at all. An inaccurate hard inquiry is one that appears on your report due to a data error — the pull may have been legitimate but is being incorrectly attributed to you rather than the person who actually authorized it. Both types are disputable under the FCRA, but the legal argument differs. An unauthorized inquiry dispute challenges the permissible purpose of the pull. An inaccuracy dispute challenges the attribution of the pull. Both can result in removal when the dispute is correctly constructed — our free consultation identifies which argument applies to each inquiry on your specific report."
            }
          },
          {
            "@type": "Question",
            "name": "Can I dispute an unauthorized inquiry that a credit bureau already verified?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — a \"verified\" response from a credit bureau is not legally final and does not exhaust your dispute rights. The FCRA requires bureaus to conduct a reasonable investigation of each dispute, which includes investigating the permissible purpose of the pull — not just confirming that the pull happened. When an initial dispute does not frame the permissible purpose argument specifically, the bureau's automated system processes it as a verification of the inquiry's existence rather than an investigation of its legality. A follow-up dispute built around the permissible purpose standard triggers a different reinvestigation and frequently produces a different result."
            }
          },
          {
            "@type": "Question",
            "name": "What FCRA rights do I have against a company that pulled my credit without authorization?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Under the Fair Credit Reporting Act, consumers have the right to dispute any inaccurate or impermissible item on their credit report, including unauthorized hard inquiries. The FCRA also provides civil liability provisions — 15 U.S.C. § 1681n and § 1681o — that allow consumers to seek actual damages, statutory damages, and attorney's fees from companies that willfully or negligently violate the Act, including by pulling credit without a permissible purpose. The dispute and removal process we provide addresses the inquiry on your credit report. If you believe you may have additional legal claims against a company that pulled your credit without authorization, we recommend consulting with a consumer protection attorney to evaluate those options separately."
            }
          }
        ]
      }
    ]
  },
  "/identity-theft-inquiry-removal": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.inquiryremoval.com/identity-theft-inquiry-removal#webpage",
        "url": "https://www.inquiryremoval.com/identity-theft-inquiry-removal",
        "name": "Hard Inquiry Removal — Identity Theft | Inquiry Removal",
        "description": "Someone used your identity to open credit. We remove every fraudulent hard inquiry from all 3 bureaus using your FTC report. Free consultation.",
        "isPartOf": {
          "@id": "https://www.inquiryremoval.com/#website"
        },
        "about": {
          "@id": "https://www.inquiryremoval.com/#organization"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.inquiryremoval.com/images/og/inquiry-removal-default-og.webp"
        },
        "breadcrumb": {
          "@id": "https://www.inquiryremoval.com/identity-theft-inquiry-removal#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.inquiryremoval.com/identity-theft-inquiry-removal#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.inquiryremoval.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Identity Theft Hard Inquiry Removal — Every Fraudulent Pull Removed",
            "item": "https://www.inquiryremoval.com/identity-theft-inquiry-removal"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.inquiryremoval.com/identity-theft-inquiry-removal#service",
        "name": "Identity Theft Hard Inquiry Removal — Every Fraudulent Pull Removed",
        "url": "https://www.inquiryremoval.com/identity-theft-inquiry-removal",
        "provider": {
          "@id": "https://www.inquiryremoval.com/#organization"
        },
        "serviceType": "Hard inquiry review and dispute service"
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.inquiryremoval.com/identity-theft-inquiry-removal#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can fraudulent hard inquiries from identity theft be removed from my credit report?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — fraudulent hard inquiries that appeared on your Experian, Equifax, or TransUnion credit report as a result of identity theft can be disputed and removed under the Fair Credit Reporting Act. The FCRA provides specific identity theft provisions — distinct from standard dispute rights — that require credit bureaus to block fraudulent information when a valid identity theft report is provided. When we submit disputes incorporating your FTC identity theft report, we invoke these specific provisions, which give identity theft victims stronger enforcement tools than ordinary dispute filers and produce the most reliable removal outcomes of any case type we handle."
            }
          },
          {
            "@type": "Question",
            "name": "What is an FTC identity theft report and how do I get one?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An FTC identity theft report is an official federal document created by the Federal Trade Commission's identity theft recovery program at IdentityTheft.gov. Filing the report is free and can be completed online in approximately 15 to 30 minutes. The report creates an official federal record of the fraud, generates a personalized recovery plan specific to your situation, and serves as the primary supporting documentation for hard inquiry disputes under the FCRA's identity theft provisions. You should file your FTC identity theft report before contacting us if possible — or we can guide you through the process during the free consultation."
            }
          },
          {
            "@type": "Question",
            "name": "Should I file a police report for identity theft in addition to the FTC report?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Filing a police report with your local law enforcement agency provides additional documentation of the fraud that strengthens your dispute package — particularly with Equifax, which has historically requested more supporting documentation during identity theft reinvestigations. A police report creates a local official record of the crime, provides a case number that can be referenced in dispute correspondence, and demonstrates that the identity theft was formally reported to law enforcement. It is not required for the dispute process — the FTC identity theft report alone is sufficient — but having both significantly strengthens the case. Contact your local police department's non-emergency line or financial crimes division to file."
            }
          },
          {
            "@type": "Question",
            "name": "How do I know if hard inquiries on my credit report are from identity theft or from applications I authorized?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The pattern of identity theft inquiries is recognizable when you know what to look for — multiple pulls from unfamiliar lenders within a short timeframe, pulls across all three bureaus simultaneously, lenders based in geographic areas you have no connection to, and company names you have absolutely no memory of contacting or applying to. However, some authorized inquiries appear under subsidiary or parent company names that differ from the lender you remember, which can create false alarms. The free consultation reviews every inquiry on your full report together and helps distinguish clearly fraudulent pulls from potentially confusing but authorized ones — before any dispute is filed and before you spend anything."
            }
          },
          {
            "@type": "Question",
            "name": "Can I remove identity theft inquiries if a bureau already said they were verified?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — a \"verified\" bureau response to an identity theft inquiry dispute is frequently the result of an initial dispute that did not include your FTC identity theft report as supporting documentation. Without the FTC report, the bureau processes the dispute as a standard verification — confirming the pull happened — rather than as an identity theft claim invoking the FCRA's blocking provisions. When we submit follow-up disputes incorporating your FTC identity theft report and citing the FCRA's identity theft provisions specifically, the bureau is required to conduct a fundamentally different type of investigation. Most identity theft cases that received \"verified\" responses on initial self-filed disputes without FTC documentation are resolved through this escalation."
            }
          },
          {
            "@type": "Question",
            "name": "Should I freeze my credit while identity theft inquiry disputes are being processed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — placing a credit freeze at Experian, Equifax, and TransUnion while your disputes are being processed prevents any new fraudulent applications from creating new hard inquiries on your report during the removal period. A credit freeze is free at all three bureaus, does not affect your existing accounts, and can be temporarily lifted when you need to authorize a legitimate credit check. We strongly recommend placing a freeze as part of your protective response to the identity theft — before, during, and after the dispute process — to prevent the fraud from continuing while your report is being cleaned up."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to remove identity theft hard inquiries?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most clients in identity theft cases see their first fraudulent inquiry removals within 14 to 30 days of disputes being submitted with complete documentation. Full removal of all identified fraudulent inquiries typically occurs within 30 to 90 days. Cases with complete documentation — both an FTC identity theft report and a local police report — tend to move through the process more quickly because the legal basis for removal is clearly established from the first submission. We submit disputes to all three bureaus within 24 hours of signup and monitor every response through to completion."
            }
          },
          {
            "@type": "Question",
            "name": "Does removing identity theft inquiries restore my credit score?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — removing fraudulent hard inquiries from your credit report restores the score to where it would have been without the fraudulent activity. Identity theft inquiry removal tends to produce the most dramatic score recoveries of any case type we handle — because the score was suppressed entirely by someone else's activity rather than by any financial decision you made. As each fraudulent inquiry is removed, the score updates to reflect your actual credit behavior. Clients in identity theft cases commonly see recoveries of 50 to 100 or more points, with the largest recoveries occurring in cases where the inquiry count was highest and most concentrated."
            }
          },
          {
            "@type": "Question",
            "name": "What if the identity thief also opened accounts in my name — can you help with those too?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Fraudulently opened accounts require a separate dispute process that is distinct from hard inquiry removal — and it is a process we do not provide. We remove hard inquiries exclusively. If the identity theft on your report includes fraudulently opened accounts, payment history on accounts you didn't authorize, or other damage beyond the inquiry category, your FTC identity theft report at IdentityTheft.gov includes a personalized recovery plan that walks you through disputing those items with each bureau specifically. We will identify this during your free consultation and make sure you know exactly which resources to use for the portions of the damage we cannot address — because you deserve a complete recovery, not just the part we specialize in."
            }
          },
          {
            "@type": "Question",
            "name": "What is a fraud alert and should I place one during the inquiry removal process?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A fraud alert is a free notice placed on your credit file that tells lenders to take extra steps to verify your identity before extending credit. An initial fraud alert lasts one year and can be placed by contacting any one of the three bureaus — once placed, that bureau is required to notify the other two. An extended fraud alert — available to confirmed identity theft victims who have filed an FTC identity theft report — lasts seven years and entitles you to two free credit report copies per year from each bureau. We recommend placing a fraud alert and a credit freeze simultaneously as part of your protective response while inquiry disputes are being processed."
            }
          },
          {
            "@type": "Question",
            "name": "Can I get money back from the company that pulled my credit fraudulently?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The Fair Credit Reporting Act's civil liability provisions — 15 U.S.C. § 1681n and § 1681o — provide consumers with potential remedies against companies that willfully or negligently violate the FCRA, which can include companies that accessed credit reports without permissible purpose. The dispute and removal process we provide addresses the fraudulent inquiries on your credit report. Any additional legal claims against companies that pulled your credit using stolen information — including potential claims for actual damages, statutory damages, or attorney's fees — should be evaluated by an attorney specializing in consumer protection law. We are specialists in inquiry removal, not in civil litigation, and we want to be clear about where our expertise ends and where a consumer protection attorney's begins."
            }
          }
        ]
      }
    ]
  },
  "/faq": {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.inquiryremoval.com/faq#webpage",
        "url": "https://www.inquiryremoval.com/faq",
        "name": "Hard Inquiry Removal FAQs | Inquiry Removal",
        "description": "Answers to common questions about hard inquiries, credit bureaus, dealership pulls, identity theft, mortgage preparation, pricing, and the dispute process.",
        "isPartOf": {
          "@id": "https://www.inquiryremoval.com/#website"
        },
        "about": {
          "@id": "https://www.inquiryremoval.com/#organization"
        },
        "breadcrumb": {
          "@id": "https://www.inquiryremoval.com/faq#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.inquiryremoval.com/faq#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.inquiryremoval.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Frequently Asked Questions About Hard Inquiry Removal",
            "item": "https://www.inquiryremoval.com/faq"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.inquiryremoval.com/faq#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Will this actually work for my situation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — if you have unauthorized, excessive, or fraudulent hard inquiries on your credit report, we can dispute them using federal law. We offer a completely free consultation specifically so you can see exactly what's removable and what your score improvement could look like before you spend anything. No two credit reports are identical, which is why we look at yours first."
            }
          },
          {
            "@type": "Question",
            "name": "Can you really remove hard inquiries — or just dispute them?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We have permanently removed over 100,437 hard inquiries across Experian, Equifax, and TransUnion since 2015. We do this using the FCRA, FDCPA, FACTA, and Metro 2 compliance laws — not generic templates, not guesswork. Our near-100% success rate exists because we know which law applies to which type of inquiry and why. Disputing and removing are the same outcome when you know what you're doing."
            }
          },
          {
            "@type": "Question",
            "name": "How soon will I see results?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Some clients see their first removals in as few as 14 days. Most see full results within 30 to 90 days. We are transparent about timelines from the very first conversation — we work as fast as the law allows because we know your goals are on a real schedule."
            }
          },
          {
            "@type": "Question",
            "name": "Why should I pay for this when I could dispute the inquiries myself?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can file your own disputes — we are always honest about that. The challenge is that the process requires knowing which specific provision of federal law applies to each specific inquiry type, how to construct a legally precise argument that a bureau cannot dismiss as a template, and how to escalate correctly when a bureau responds with \"verified\" — which is the response that stops most self-filers permanently. We've spent eleven years doing only this. The knowledge gap between a first-time self-filer and a team that has successfully removed over 100,437 inquiries is not something a weekend of research closes. But if you want to try first and come back, we'll be here."
            }
          },
          {
            "@type": "Question",
            "name": "Can you remove hard inquiries from an Experian credit report?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Unauthorized, inaccurate, and impermissible hard inquiries can be disputed and removed from your Experian credit report under the Fair Credit Reporting Act. Experian is correct that legitimately authorized hard inquiries — ones where you gave clear, informed consent to a credit pull — are generally not removable before the two-year window expires. The critical distinction is authorization. If a dealership sent your application to lenders you didn't approve, if a company pulled your Experian report without a legally required permissible purpose, or if there are inquiries on your report from an identity theft incident — those are disputable, and removal is the likely outcome when the dispute is constructed correctly."
            }
          },
          {
            "@type": "Question",
            "name": "Can you remove hard inquiries from an Equifax credit report?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Unauthorized, inaccurate, and impermissible hard inquiries can be disputed and removed from your Equifax credit report under the Fair Credit Reporting Act. Equifax is correct that legitimately authorized hard inquiries are generally not removable before the two-year window expires. The distinction is authorization and permissible purpose. If a car dealership sent your application to lenders you didn't approve, if a company pulled your Equifax report without a legally required reason, or if inquiries appeared from an identity theft incident — those are disputable, and removal is the outcome when the dispute is constructed correctly and escalated where necessary."
            }
          },
          {
            "@type": "Question",
            "name": "Can you remove hard inquiries from a TransUnion credit report?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Unauthorized, inaccurate, and impermissible hard inquiries can be disputed and removed from your TransUnion credit report under the Fair Credit Reporting Act. TransUnion is correct that legitimately authorized hard inquiries are generally not removable before the two-year window. The distinction is permissible purpose under Section 604 of the FCRA — 15 U.S.C. § 1681b. If a company pulled your TransUnion report without a legally recognized reason, if a dealership sent your application to lenders you never approved, or if inquiries appeared from an identity theft incident — those are disputable and removal is the outcome when the dispute correctly challenges the authorization of the pull rather than just its existence."
            }
          },
          {
            "@type": "Question",
            "name": "Can a car dealership run your credit without permission?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A car dealership cannot legally run your credit as a hard inquiry without a permissible purpose under the Fair Credit Reporting Act — and informed consent to a hard pull is the most common permissible purpose required. If a dealership ran your credit without your explicit authorization, pulled a hard inquiry after telling you it was a soft pull, submitted your application to lenders you didn't approve, or ran your credit for a transaction that never happened, the pull likely lacked a legally valid permissible purpose. That makes it disputable and potentially removable under the FCRA."
            }
          },
          {
            "@type": "Question",
            "name": "Do multiple car loan inquiries count as one inquiry?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "FICO scoring models group multiple auto loan inquiries within a 14-day window (older models) or 45-day window (newer models) and count them as a single inquiry for scoring purposes — but only for inquiries that were part of deliberate rate shopping you authorized. This grouping applies to score calculation only. The inquiries still appear individually on your credit report, are still visible to lenders, and are still disputable if they were unauthorized. The rate shopping window is a scoring protection for consumers who deliberately comparison shop — it is not a legal shield for dealerships that submit applications to lenders without your specific authorization."
            }
          },
          {
            "@type": "Question",
            "name": "Can unauthorized hard inquiries be removed from my credit report?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — unauthorized hard inquiries can be disputed and removed from your Experian, Equifax, and TransUnion credit reports under Section 604 of the Fair Credit Reporting Act, 15 U.S.C. § 1681b. The legal basis for removal is the absence of permissible purpose — the statutory requirement that any company accessing your credit as a hard inquiry must have a specific, legally recognized reason for doing so. When that reason doesn't exist, the inquiry is legally challengeable and removal is the appropriate outcome when the dispute is correctly constructed around that permissible purpose argument."
            }
          },
          {
            "@type": "Question",
            "name": "What is permissible purpose and how does it apply to my unauthorized inquiry?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Permissible purpose is the legal standard under Section 604 of the FCRA that governs when a company may access your credit report as a hard inquiry. The law provides a defined list of circumstances — initiated credit transactions, court orders, existing account reviews, and a few others — that constitute valid permissible purpose. A company that pulls your credit outside these circumstances has violated the FCRA. The permissible purpose argument is the legal foundation of every unauthorized inquiry dispute we build — because it shifts the dispute from \"I don't recognize this\" to \"this company had no legal right to access my credit report.\""
            }
          },
          {
            "@type": "Question",
            "name": "Can fraudulent hard inquiries from identity theft be removed from my credit report?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — fraudulent hard inquiries that appeared on your Experian, Equifax, or TransUnion credit report as a result of identity theft can be disputed and removed under the Fair Credit Reporting Act. The FCRA provides specific identity theft provisions — distinct from standard dispute rights — that require credit bureaus to block fraudulent information when a valid identity theft report is provided. When we submit disputes incorporating your FTC identity theft report, we invoke these specific provisions, which give identity theft victims stronger enforcement tools than ordinary dispute filers and produce the most reliable removal outcomes of any case type we handle."
            }
          },
          {
            "@type": "Question",
            "name": "What is an FTC identity theft report and how do I get one?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "An FTC identity theft report is an official federal document created by the Federal Trade Commission's identity theft recovery program at IdentityTheft.gov. Filing the report is free and can be completed online in approximately 15 to 30 minutes. The report creates an official federal record of the fraud, generates a personalized recovery plan specific to your situation, and serves as the primary supporting documentation for hard inquiry disputes under the FCRA's identity theft provisions. You should file your FTC identity theft report before contacting us if possible — or we can guide you through the process during the free consultation."
            }
          },
          {
            "@type": "Question",
            "name": "Should I freeze my credit while identity theft inquiry disputes are being processed?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — placing a credit freeze at Experian, Equifax, and TransUnion while your disputes are being processed prevents any new fraudulent applications from creating new hard inquiries on your report during the removal period. A credit freeze is free at all three bureaus, does not affect your existing accounts, and can be temporarily lifted when you need to authorize a legitimate credit check. We strongly recommend placing a freeze as part of your protective response to the identity theft — before, during, and after the dispute process — to prevent the fraud from continuing while your report is being cleaned up."
            }
          }
        ]
      }
    ]
  }
};
