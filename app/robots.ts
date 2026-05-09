import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const isExplicitStaging =
    process.env.VERCEL_ENV === "preview" ||
    process.env.NEXT_PUBLIC_SITE_ENV === "staging" ||
    process.env.NEXT_PUBLIC_SITE_ENV === "preview";

  if (isExplicitStaging) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },
    ],
    sitemap: "https://www.inquiryremoval.com/sitemap.xml",
    host: "https://www.inquiryremoval.com",
  };
}
