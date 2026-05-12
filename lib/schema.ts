import { site, founder, packages, faq } from "./site";
import { pricingPagePath } from "./pricingPage";
import { servicesPagePath } from "./servicesPage";

type Json = Record<string, unknown>;
type FAQItem = { q: string; a: string };
type HowToItem = { step: number; title: string; detail: string };
type HowToOptions = {
  name?: string;
  description?: string;
  totalTime?: string;
  estimatedCost?: string | Record<string, unknown>;
};

export function organizationSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}${site.logoPath}`,
    telephone: site.phone,
    email: site.email,
    foundingDate: site.founded,
    founder: {
      "@type": "Person",
      name: founder.name,
      jobTitle: founder.role,
      image: `${site.url}${founder.photo}`,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    sameAs: Object.values(site.social),
  };
}

export function localBusinessSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": `${site.url}#localbusiness`,
    name: site.name,
    image: `${site.url}${site.ogImage}`,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    priceRange: "$299 – $849",
    paymentAccepted: site.payment.join(", "),
    foundingDate: site.founded,
    founder: { "@id": `${site.url}#founder` },
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    areaServed: site.serviceArea.map((c) => ({
      "@type": "City",
      name: c,
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: site.hours.days,
      opens: site.hours.open,
      closes: site.hours.close,
    },
  };
}

export function personSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.url}#founder`,
    name: founder.name,
    jobTitle: founder.role,
    worksFor: { "@id": `${site.url}#organization` },
    image: `${site.url}${founder.photo}`,
    description: founder.story,
    knowsAbout: [
      "Credit repair",
      "FCRA",
      "FDCPA",
      "Consumer credit law",
      "Arizona credit repair",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.city,
      addressRegion: site.address.region,
    },
  };
}

export function serviceSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Credit Repair",
    provider: { "@id": `${site.url}#organization` },
    areaServed: {
      "@type": "State",
      name: "Arizona",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Credit Repair Packages",
      itemListElement: packages.map((p) => ({
        "@type": "Offer",
        name: p.name,
        price: p.price.toFixed(2),
        priceCurrency: "USD",
        description: p.tagline,
      })),
    },
  };
}

export function servicePackageSchemas(
  items: ReadonlyArray<{
    slug: string;
    name: string;
    price: number;
    schemaDescription: string;
  }>
): Json[] {
  return items.map((item) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}${servicesPagePath}#${item.slug}-schema`,
    name: `${item.name} Credit Repair`,
    serviceType: "Credit Repair",
    description: item.schemaDescription,
    provider: { "@id": `${site.url}#organization` },
    areaServed: {
      "@type": "State",
      name: "Arizona",
    },
    offers: {
      "@type": "Offer",
      price: item.price.toFixed(2),
      priceCurrency: "USD",
      url: `${site.url}${servicesPagePath}#${item.slug}`,
    },
  }));
}

export function offerSchemas(
  items: ReadonlyArray<{
    slug: string;
    name: string;
    price: number;
    description: string;
    path?: string;
  }>
): Json[] {
  return items.map((item) => ({
    "@context": "https://schema.org",
    "@type": "Offer",
    "@id": `${site.url}${item.path ?? pricingPagePath}#${item.slug}-offer`,
    name: item.name,
    description: item.description,
    price: item.price.toFixed(2),
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    eligibleRegion: {
      "@type": "State",
      name: "Arizona",
    },
    seller: { "@id": `${site.url}#organization` },
    url: `${site.url}${item.path ?? pricingPagePath}#${item.slug}`,
  }));
}

export function faqSchema(items: readonly FAQItem[] = faq): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path}`,
    })),
  };
}

export function collectionPageSchema({
  name,
  path,
  description,
}: {
  name: string;
  path: string;
  description?: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${site.url}${path}#collection-page`,
    name,
    url: `${site.url}${path}`,
    ...(description ? { description } : {}),
    isPartOf: { "@id": `${site.url}#website` },
  };
}

export function blogPostingSchema(post: {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  lastUpdated?: string;
  seoDescription?: string;
  coverImage?: string;
  coverAlt?: string;
  category?: string;
  keywords?: string[];
}): Json {
  const path = `/blog/${post.slug}`;
  const imageUrl = `${site.url}${post.coverImage ?? site.ogImage}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${site.url}${path}#blog-post`,
    headline: post.title,
    description: post.seoDescription ?? post.description,
    datePublished: post.publishDate,
    dateModified: post.lastUpdated ?? post.publishDate,
    mainEntityOfPage: `${site.url}${path}`,
    author: {
      "@type": "Person",
      "@id": `${site.url}#founder`,
      name: founder.name,
      url: `${site.url}/about`,
      image: `${site.url}${founder.photo}`,
    },
    publisher: { "@id": `${site.url}#organization` },
    image: [
      {
        "@type": "ImageObject",
        url: imageUrl,
        caption: post.coverAlt ?? post.title,
      },
    ],
    ...(post.category ? { articleSection: post.category } : {}),
    ...(post.keywords?.length ? { keywords: post.keywords.join(", ") } : {}),
    isPartOf: { "@id": `${site.url}#website` },
  };
}

export function howToSchema(
  steps: readonly HowToItem[] = [
    {
      step: 1,
      title: "Free Credit Audit",
      detail: "Book a 15-minute call. We pull all three bureau reports and flag every negative item.",
    },
    {
      step: 2,
      title: "Custom Dispute Strategy",
      detail: "Robert builds your plan and shows you exactly which items we'll challenge - you approve before we move.",
    },
    {
      step: 3,
      title: "We Fight, You Watch",
      detail: "We file the disputes, monitor bureau responses, and send monthly progress updates until your credit is clean.",
    },
  ],
  options: HowToOptions = {}
): Json {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: options.name ?? "How Credit Repair Works with State 48 Credit",
    ...(options.description ? { description: options.description } : {}),
    ...(options.totalTime ? { totalTime: options.totalTime } : {}),
    ...(options.estimatedCost ? { estimatedCost: options.estimatedCost } : {}),
    step: steps.map((step) => ({
      "@type": "HowToStep",
      position: step.step,
      name: step.title,
      text: step.detail,
    })),
  };
}

export function websiteSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}#website`,
    url: site.url,
    name: site.name,
    publisher: { "@id": `${site.url}#organization` },
    inLanguage: "en-US",
  };
}
