import type { Metadata, Viewport } from "next";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Footer } from "@/components/Footer";
import { MobileDock } from "@/components/MobileDock";
import { Navigation } from "@/components/Navigation";
import { RouteWarmup } from "@/components/RouteWarmup";
import { localBusinessSchema, organizationSchema, websiteSchema } from "@/lib/schema";
import "@/src/styles/global.css";
import "@/src/styles/heading-system.css";

const siteUrl = "https://www.inquiryremoval.com";
const schemaPayload = [organizationSchema, localBusinessSchema, websiteSchema];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hard Inquiry Removal Service | Inquiry Removal",
    template: "%s | Inquiry Removal",
  },
  description:
    "Remove unauthorized hard inquiries from your credit report across Experian, Equifax, and TransUnion. Free consultation, flat fee, and 100% money-back guarantee.",
  applicationName: "Inquiry Removal",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Inquiry Removal",
    url: siteUrl,
    title: "Hard Inquiry Removal Service | Inquiry Removal",
    description:
      "Remove unauthorized hard inquiries from your credit report across Experian, Equifax, and TransUnion.",
    images: [
      {
        url: "/og/home.png",
        width: 1200,
        height: 630,
        alt: "Inquiry Removal hard inquiry removal service for Experian, Equifax, and TransUnion.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hard Inquiry Removal Service | Inquiry Removal",
    description:
      "Remove unauthorized hard inquiries from your credit report across Experian, Equifax, and TransUnion.",
    images: ["/og/home.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0F",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {schemaPayload.map((item, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
          />
        ))}
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <AnnouncementBar />
        <Navigation />
        {children}
        <Footer />
        <MobileDock />
        <RouteWarmup />
      </body>
    </html>
  );
}
