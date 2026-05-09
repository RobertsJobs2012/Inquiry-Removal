import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.inquiryremoval.com";
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
    },
    {
      url: `${baseUrl}/get-started`,
      lastModified,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified,
    },
    {
      url: `${baseUrl}/results`,
      lastModified,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified,
    },
    {
      url: `${baseUrl}/compare`,
      lastModified,
    },
    {
      url: `${baseUrl}/remove-hard-inquiry-experian`,
      lastModified,
    },
    {
      url: `${baseUrl}/remove-hard-inquiry-equifax`,
      lastModified,
    },
    {
      url: `${baseUrl}/remove-hard-inquiry-transunion`,
      lastModified,
    },
  ];
}
