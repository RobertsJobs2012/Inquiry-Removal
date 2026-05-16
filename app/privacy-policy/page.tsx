import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { PremiumIcon } from "@/components/PremiumIcons";

import "@/src/styles/pages/experian.css";
import "@/src/styles/pages/privacy-policy.css";
const PRIVACY_SECTIONS = [
  {
    "heading": "Who We Are",
    "blocks": [
      {
        "kind": "p",
        "text": "Inquiry Removal is a hard inquiry removal service founded and operated by Robert Garcia, headquartered in Phoenix, Arizona. We operate exclusively online and serve clients nationwide. Our contact information is:"
      },
      {
        "kind": "contact",
        "text": "Inquiry Removal"
      },
      {
        "kind": "contact",
        "text": "Phoenix, Arizona"
      },
      {
        "kind": "contact",
        "text": "Phone: 602-377-6626"
      },
      {
        "kind": "contact",
        "text": "Email: support@inquiryremoval.com"
      },
      {
        "kind": "contact",
        "text": "Website: www.inquiryremoval.com"
      },
      {
        "kind": "p",
        "text": "This Privacy Policy explains what personal information we collect, how we use it, how we protect it, how long we keep it, and what rights you have regarding your information. We are committed to handling your data with honesty and transparency — the same values we bring to every client relationship."
      }
    ]
  },
  {
    "heading": "What This Policy Covers",
    "blocks": [
      {
        "kind": "p",
        "text": "This Privacy Policy applies to all information collected through our website at www.inquiryremoval.com, through our consultation and intake process, through our service delivery process, and through any communications you have with us by phone, email, or any other channel."
      },
      {
        "kind": "p",
        "text": "By using our website, requesting a consultation, or engaging our services, you agree to the practices described in this policy."
      }
    ]
  },
  {
    "heading": "What Information We Collect",
    "blocks": [
      {
        "kind": "p",
        "text": "We collect information in two ways: information you provide to us directly, and information collected automatically when you visit our website."
      }
    ]
  },
  {
    "heading": "Information You Provide Directly",
    "blocks": [
      {
        "kind": "p",
        "text": "Contact and identity information. When you request a consultation, fill out a form on our website, or contact us directly, we collect your name, email address, and phone number. This is the minimum information required to schedule your free consultation and communicate with you about your case."
      },
      {
        "kind": "p",
        "text": "Credit report and financial information. To provide our hard inquiry removal service, we need to review your Experian, Equifax, and/or TransUnion credit reports. This means we collect and process information contained in your credit reports — including the identity of creditors, lenders, and other entities that appear on your report, the nature and dates of hard inquiries, and your credit account information to the extent it appears on the reports we review together. This is sensitive financial information and we treat it with the highest level of care."
      },
      {
        "kind": "p",
        "text": "Payment information. We accept payment via Zelle and Apple Pay. We do not collect, store, or process credit card numbers, debit card numbers, or bank account numbers directly. Payment transactions are processed through Zelle and Apple Pay respectively, and their privacy policies govern the handling of your payment data on their platforms. We retain records of completed transactions for accounting and legal purposes, but we do not store your payment credentials."
      },
      {
        "kind": "p",
        "text": "Communications. We retain records of emails, phone call notes, and other communications between you and our team. This information is used to manage your case, answer your questions, and maintain an accurate record of what was discussed and agreed to."
      },
      {
        "kind": "p",
        "text": "Identity documentation. In some cases — particularly in identity theft situations — you may provide us with supporting documentation such as an FTC identity theft report, a police report, or other records. We treat this documentation as highly sensitive and use it solely for the purpose of supporting your dispute."
      }
    ]
  },
  {
    "heading": "Information Collected Automatically",
    "blocks": [
      {
        "kind": "p",
        "text": "Website usage information. When you visit our website, we may automatically collect information about your visit, including your IP address, browser type, the pages you viewed, the time and date of your visit, and how you arrived at our site. This information is collected through standard web server logs and may include cookie data."
      },
      {
        "kind": "p",
        "text": "Cookies and tracking technologies. Our website may use cookies — small text files stored on your device — to improve your experience, remember your preferences, and understand how visitors use our site. You can control cookie settings through your browser. Disabling cookies may affect the functionality of some features of our site. We do not use cookies to collect personally identifiable information without your knowledge."
      },
      {
        "kind": "p",
        "text": "Analytics. We may use third-party analytics tools to understand website traffic patterns and improve our content. These tools may collect anonymized or aggregated data about how visitors interact with our site. We do not permit our analytics providers to use your data for their own independent purposes."
      }
    ]
  },
  {
    "heading": "How We Use Your Information",
    "blocks": [
      {
        "kind": "p",
        "text": "We use the information we collect for the following purposes:"
      },
      {
        "kind": "p",
        "text": "To provide our services. The primary use of your personal and credit information is to perform the hard inquiry removal service you engaged us for — reviewing your credit reports, building customized dispute letters, submitting disputes to credit bureaus on your behalf, monitoring bureau responses, and managing the dispute process through to completion."
      },
      {
        "kind": "p",
        "text": "To communicate with you. We use your contact information to schedule consultations, provide updates on your case, respond to your questions, and deliver the results of our work. We communicate primarily by phone and email."
      },
      {
        "kind": "p",
        "text": "To submit disputes to credit bureaus. As part of our service, we submit dispute letters to Experian, Equifax, and TransUnion on your behalf. This requires sharing your identifying information and the specific details of each disputed inquiry with the relevant bureau. We share only what is necessary for the dispute process and do not share your information with credit bureaus for any other purpose."
      },
      {
        "kind": "p",
        "text": "To comply with legal obligations. We may use and retain your information as required by applicable federal and state laws, including the Credit Repair Organizations Act, the Fair Credit Reporting Act, the Federal Trade Commission Act, and applicable state credit services laws."
      },
      {
        "kind": "p",
        "text": "To improve our services. We may use aggregated, anonymized data about client outcomes and service patterns to improve our processes and results. This data does not identify individual clients."
      },
      {
        "kind": "p",
        "text": "To protect our legal rights. We may use your information to enforce our terms of service, protect against fraud, and defend against legal claims where necessary."
      },
      {
        "kind": "p",
        "text": "We do not use your information for marketing to unrelated third parties, behavioral advertising, or any purpose beyond those listed above."
      }
    ]
  },
  {
    "heading": "How We Share Your Information",
    "blocks": [
      {
        "kind": "p",
        "text": "We do not sell your personal information. We do not share your personal information with data brokers, advertisers, or marketing companies. We share your information only in the following limited circumstances:"
      },
      {
        "kind": "p",
        "text": "With credit bureaus as part of your service. When we submit dispute letters to Experian, Equifax, and TransUnion on your behalf, we necessarily share your identifying information and the details of each dispute. This sharing is done with your explicit authorization as part of the services you engaged us for."
      },
      {
        "kind": "p",
        "text": "With service providers. We may work with a limited number of trusted service providers who assist us in operating our business — such as email service providers, phone communication platforms, or document management tools. These providers are permitted to use your information only as necessary to provide services to us and are prohibited from using it for any other purpose."
      },
      {
        "kind": "p",
        "text": "As required by law. We may disclose your information if required to do so by law, regulation, court order, or government request — including requests from law enforcement authorities or regulatory agencies with jurisdiction over our business."
      },
      {
        "kind": "p",
        "text": "To protect rights and safety. We may disclose your information when we believe in good faith that disclosure is necessary to protect our legal rights, prevent fraud, or protect the safety of our clients, our staff, or the public."
      },
      {
        "kind": "p",
        "text": "In a business transfer. If Inquiry Removal is ever sold, merged, or transferred to another entity, your information may be transferred as part of that transaction. We would notify you of any such change and your information would remain subject to the protections in this policy or a policy that provides equivalent protection."
      }
    ]
  },
  {
    "heading": "How We Protect Your Information",
    "blocks": [
      {
        "kind": "p",
        "text": "We take the security of your personal and credit information seriously. We implement reasonable administrative, technical, and physical safeguards to protect your information from unauthorized access, disclosure, alteration, and destruction."
      },
      {
        "kind": "p",
        "text": "Because we handle sensitive financial information — including credit report data — we apply heightened care to how that information is stored, transmitted, and accessed. Our communications with clients and with credit bureaus use secure methods. Access to client information within our organization is limited to those who need it to perform their job functions."
      },
      {
        "kind": "p",
        "text": "No security system is impenetrable. While we work diligently to protect your information, we cannot guarantee that unauthorized parties will never be able to defeat our security measures. If we become aware of a security incident affecting your information, we will notify you as required by applicable law."
      }
    ]
  },
  {
    "heading": "How Long We Keep Your Information",
    "blocks": [
      {
        "kind": "p",
        "text": "We retain your personal information for as long as necessary to provide our services, comply with our legal obligations, resolve disputes, and enforce our agreements."
      },
      {
        "kind": "p",
        "text": "In general, we retain client records — including contact information, credit report information reviewed as part of your case, dispute letters submitted on your behalf, and case outcome documentation — for a period of five years following the completion of your service. This retention period supports our ability to assist with any follow-up matters, respond to any regulatory inquiries, and defend any legal claims related to our work."
      },
      {
        "kind": "p",
        "text": "Website usage data and analytics information are retained for shorter periods consistent with standard industry practice."
      },
      {
        "kind": "p",
        "text": "When retention periods expire, we securely delete or anonymize your information so that it can no longer be associated with you personally."
      }
    ]
  },
  {
    "heading": "Your Privacy Rights",
    "blocks": [
      {
        "kind": "p",
        "text": "Depending on where you live, you may have specific legal rights regarding your personal information. We respect these rights and will respond to valid requests within the timeframes required by applicable law."
      }
    ]
  },
  {
    "heading": "Rights Available to All Clients",
    "blocks": [
      {
        "kind": "p",
        "text": "Right to know. You have the right to know what personal information we hold about you and how we use it. You can request this information by contacting us at support@inquiryremoval.com or 602-377-6626."
      },
      {
        "kind": "p",
        "text": "Right to correct. If you believe any personal information we hold about you is inaccurate or incomplete, you have the right to request that we correct it."
      },
      {
        "kind": "p",
        "text": "Right to delete. You may request that we delete your personal information, subject to limitations — including our legal obligations to retain certain records and our need to retain information to complete services you have engaged us for."
      },
      {
        "kind": "p",
        "text": "Right to withdraw consent. Where we rely on your consent to process your information, you have the right to withdraw that consent at any time. Withdrawal of consent does not affect the lawfulness of processing that occurred before the withdrawal."
      }
    ]
  },
  {
    "heading": "Additional Rights for California Residents",
    "blocks": [
      {
        "kind": "p",
        "text": "If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA) and, as applicable, the California Privacy Rights Act (CPRA), including:"
      },
      {
        "kind": "p",
        "text": "Right to know. You have the right to request disclosure of the categories and specific pieces of personal information we have collected about you, the purposes for which we use it, and the categories of third parties with whom we share it."
      },
      {
        "kind": "p",
        "text": "Right to delete. You have the right to request deletion of personal information we have collected from you, subject to certain exceptions."
      },
      {
        "kind": "p",
        "text": "Right to correct. You have the right to request correction of inaccurate personal information we hold about you."
      },
      {
        "kind": "p",
        "text": "Right to opt out of sale or sharing. We do not sell or share your personal information for cross-context behavioral advertising. If this practice were ever to change, we would provide you with the right to opt out."
      },
      {
        "kind": "p",
        "text": "Right to non-discrimination. We will not discriminate against you for exercising your privacy rights. Exercising your rights will not affect the quality or price of services we provide to you."
      },
      {
        "kind": "p",
        "text": "Sensitive personal information. We collect certain categories of sensitive personal information — including your credit history and financial account information — as necessary to provide our services. We use this information solely for the purpose of delivering the services you engage us for."
      },
      {
        "kind": "p",
        "text": "To exercise your California privacy rights, contact us at support@inquiryremoval.com or 602-377-6626. We will verify your identity before processing your request and respond within the timeframes required by California law."
      }
    ]
  },
  {
    "heading": "Additional Rights for Other State Residents",
    "blocks": [
      {
        "kind": "p",
        "text": "Residents of Virginia, Colorado, Connecticut, Texas, and other states with comprehensive privacy laws may have additional rights similar to those described above. If you are a resident of a state with a comprehensive privacy law, you may exercise your rights by contacting us at support@inquiryremoval.com. We will respond in accordance with the law applicable to your state."
      }
    ]
  },
  {
    "heading": "Rights Under GDPR",
    "blocks": [
      {
        "kind": "p",
        "text": "If you are located in the European Economic Area or the United Kingdom, you may have rights under the General Data Protection Regulation (GDPR) or UK GDPR, including rights of access, rectification, erasure, restriction of processing, data portability, and the right to object to processing. To exercise any of these rights, contact us at support@inquiryremoval.com. We will respond within the timeframes required by applicable law."
      },
      {
        "kind": "p",
        "text": "In most cases, the legal basis for our processing of your personal information is the performance of a contract — specifically, the service agreement between you and Inquiry Removal. In some cases, we process your information on the basis of legitimate interests or legal obligation."
      }
    ]
  },
  {
    "heading": "Children's Privacy",
    "blocks": [
      {
        "kind": "p",
        "text": "Our services are intended for adults and are not directed at children under the age of 18. We do not knowingly collect personal information from anyone under the age of 18. If we become aware that we have inadvertently collected information from a minor, we will delete that information promptly. If you believe we may have collected information from a minor, please contact us at support@inquiryremoval.com."
      }
    ]
  },
  {
    "heading": "Credit Repair Organizations Act Disclosures",
    "blocks": [
      {
        "kind": "p",
        "text": "Inquiry Removal is a credit repair organization as defined under the Credit Repair Organizations Act (CROA), 15 U.S.C. § 1679 et seq. The CROA requires us to make certain disclosures to consumers before entering into a service agreement. These disclosures are provided to you in writing before any service agreement is signed. Consistent with our obligations under CROA, we do not charge any fee for services before those services are fully performed."
      },
      {
        "kind": "p",
        "text": "You have the right to cancel any contract with a credit repair organization within three business days of signing it. You have the right to sue a credit repair organization that violates the CROA."
      }
    ]
  },
  {
    "heading": "Links to Third-Party Websites",
    "blocks": [
      {
        "kind": "p",
        "text": "Our website may contain links to third-party websites, including the websites of credit bureaus, government agencies, and other resources. This Privacy Policy applies only to our website and our services. We are not responsible for the privacy practices of any third-party website. We encourage you to read the privacy policy of any third-party site you visit."
      }
    ]
  },
  {
    "heading": "Do Not Track",
    "blocks": [
      {
        "kind": "p",
        "text": "Some browsers include a \"Do Not Track\" feature that signals to websites that you do not want your online activities tracked. Because there is no universally accepted standard for responding to Do Not Track signals, our website does not currently respond to them differently from standard browser signals. If a standard is adopted in the future, we will update this policy accordingly."
      }
    ]
  },
  {
    "heading": "Changes to This Privacy Policy",
    "blocks": [
      {
        "kind": "p",
        "text": "We may update this Privacy Policy from time to time to reflect changes in our business practices, applicable law, or technology. When we make changes, we will update the \"Last Updated\" date at the top of this policy and post the revised policy on our website. For significant changes, we will make reasonable efforts to notify you directly — by email, by notice on our website, or through other appropriate means — before the changes take effect. Your continued use of our services after a change to this policy constitutes your acceptance of the updated terms."
      }
    ]
  },
  {
    "heading": "How to Contact Us",
    "blocks": [
      {
        "kind": "p",
        "text": "If you have questions about this Privacy Policy, want to exercise your privacy rights, or have a concern about how we handle your information, please contact us:"
      },
      {
        "kind": "contact",
        "text": "Inquiry Removal"
      },
      {
        "kind": "contact",
        "text": "Phoenix, Arizona"
      },
      {
        "kind": "contact",
        "text": "📞 602-377-6626"
      },
      {
        "kind": "contact",
        "text": "✉️ support@inquiryremoval.com"
      },
      {
        "kind": "contact",
        "text": "🌐 www.inquiryremoval.com"
      },
      {
        "kind": "p",
        "text": "We will respond to all privacy-related inquiries within 30 days of receipt, or within the shorter timeframe required by applicable law."
      }
    ]
  },
  {
    "heading": "California-Specific Contact for Privacy Requests",
    "blocks": [
      {
        "kind": "p",
        "text": "California residents may submit privacy rights requests specifically by emailing support@inquiryremoval.com with the subject line \"California Privacy Rights Request\" or by calling 602-377-6626. We will acknowledge receipt of your request within 10 business days and complete the request within 45 days, with a possible extension of an additional 45 days where reasonably necessary."
      },
      {
        "kind": "p",
        "text": "This Privacy Policy was last reviewed and updated on May 14, 2026. The previous version of this policy is available upon request."
      }
    ]
  }
] as const;

const policySchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy | Inquiry Removal",
  url: "https://www.inquiryremoval.com/privacy-policy",
  description:
    "Learn how Inquiry Removal collects, uses, and protects your personal and credit information.",
  publisher: {
    "@type": "Organization",
    name: "Inquiry Removal",
    url: "https://www.inquiryremoval.com",
    telephone: "+16023776626",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Phoenix",
      addressRegion: "AZ",
      addressCountry: "US",
    },
  },
};

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Policy | Inquiry Removal",
  },
  description:
    "Learn how Inquiry Removal collects, uses, and protects your personal and credit information. Plain-language privacy policy for all clients nationwide.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Inquiry Removal",
    description:
      "Learn how Inquiry Removal collects, uses, and protects your personal and credit information. Plain-language privacy policy for all clients nationwide.",
    url: "https://www.inquiryremoval.com/privacy-policy",
  },
  twitter: {
    title: "Privacy Policy | Inquiry Removal",
    description:
      "Learn how Inquiry Removal collects, uses, and protects your personal and credit information. Plain-language privacy policy for all clients nationwide.",
  },
};

function PrivacyVisual() {
  return (
    <div className="privacy-hero-card" aria-label="Privacy policy highlights">
      <div className="privacy-card-icon" aria-hidden="true">
        <PremiumIcon name="lawShield" size={28} />
      </div>
      <span className="privacy-card-eyebrow">Client data protection</span>
      <strong>Plain-language privacy policy for credit report data, consultation details, and client communications.</strong>
      <div className="privacy-card-list">
        <span>
          <PremiumIcon name="checkBadge" size={15} /> No sale of personal information
        </span>
        <span>
          <PremiumIcon name="guaranteeSeal" size={15} /> Sensitive credit data handled with heightened care
        </span>
        <span>
          <PremiumIcon name="phone" size={15} /> Privacy requests accepted by phone or email
        </span>
      </div>
    </div>
  );
}

function renderBlock(block: (typeof PRIVACY_SECTIONS)[number]["blocks"][number], index: number) {
  if (block.kind === "contact") {
    return (
      <p key={`${block.text}-${index}`} className="privacy-contact-line">
        {block.text}
      </p>
    );
  }

  return <p key={`${block.text.slice(0, 24)}-${index}`}>{block.text}</p>;
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(policySchema) }} />
      <main id="main" className="privacy-page">
        <PageHero
          id="privacy-policy-heading"
          eyebrow="Privacy Policy"
          title="INQUIRY REMOVAL — PRIVACY POLICY"
          subtitle={
            <p>
              Learn how Inquiry Removal collects, uses, protects, retains, and shares client information while providing hard inquiry removal services nationwide.
            </p>
          }
          meta={
            <>
              <span>
                <PremiumIcon name="checkBadge" size={15} /> Effective Date: May 14, 2026
              </span>
              <span>
                <PremiumIcon name="calendarCheck" size={15} /> Last Updated: May 14, 2026
              </span>
            </>
          }
          actions={
            <>
              <a href="tel:+16023776626" className="btn btn-primary btn-large">
                Call 602-377-6626
              </a>
              <a href="mailto:support@inquiryremoval.com" className="btn btn-secondary btn-large">
                Email Privacy Request
              </a>
            </>
          }
        >
          <PrivacyVisual />
        </PageHero>

        <section className="privacy-overview section-divider" aria-labelledby="privacy-overview-heading">
          <div className="container privacy-overview-shell">
            <div>
              <span className="privacy-eyebrow">Policy overview</span>
              <h2 id="privacy-overview-heading">Transparent data practices for a credit-sensitive service.</h2>
            </div>
            <p>
              This page explains what data Inquiry Removal collects, why it is collected, how it is protected, how long it is retained, and what rights clients have regarding their information.
            </p>
          </div>
        </section>

        <section className="privacy-content section-divider" aria-label="Privacy policy content">
          <div className="container privacy-layout">
            <aside className="privacy-toc" aria-label="Privacy policy sections">
              <span className="privacy-toc-title">On this page</span>
              <nav>
                {PRIVACY_SECTIONS.map((section, index) => (
                  <a key={section.heading} href={`#privacy-section-${index}`}>
                    {section.heading}
                  </a>
                ))}
              </nav>
            </aside>

            <div className="privacy-sections">
              {PRIVACY_SECTIONS.map((section, index) => (
                <section key={section.heading} id={`privacy-section-${index}`} className="privacy-section-card">
                  <h2>{section.heading}</h2>
                  <div className="privacy-section-copy">{section.blocks.map(renderBlock)}</div>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="privacy-final-cta section-divider" aria-labelledby="privacy-contact-heading">
          <div className="container privacy-final-card">
            <div>
              <span className="privacy-eyebrow">Questions about your data?</span>
              <h2 id="privacy-contact-heading">Contact Inquiry Removal directly.</h2>
              <p>
                Privacy-related inquiries can be sent by email or handled by phone using the contact information listed in the policy.
              </p>
            </div>
            <div className="privacy-final-actions">
              <a href="tel:+16023776626" className="btn btn-primary btn-large">
                Call 602-377-6626
              </a>
              <Link href="/get-started" className="btn btn-secondary btn-large">
                Back to Free Analysis
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
