import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import { localBusinessSchema, organizationSchema, websiteSchema } from "@/lib/schema";
import { MobileConversionDock } from "@/components/MobileConversionDock";
import "./styles/base.css";
import "./styles/design-system.css";
import "./styles/page-legacy.css";
import "./styles/component-legacy.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  variable: "--font-heading",
  preload: true,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-body",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.inquiryremoval.com"),
  title: {
    default: "Hard Inquiry Removal Service | Inquiry Removal",
    template: "%s | Inquiry Removal",
  },
  description:
    "Remove unauthorized hard inquiries from your credit report — all 3 bureaus. 100,437+ deleted since 2015. Free consultation. Flat fee. 100% money-back guarantee.",
  keywords: [
    "hard inquiry removal",
    "credit repair",
    "remove hard inquiries",
    "credit report repair",
    "Experian inquiry removal",
    "Equifax inquiry removal",
    "TransUnion inquiry removal",
    "FCRA dispute",
    "unauthorized credit inquiries",
  ],
  authors: [{ name: "Inquiry Removal", url: "https://www.inquiryremoval.com" }],
  creator: "Inquiry Removal",
  publisher: "Inquiry Removal",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.inquiryremoval.com",
    siteName: "Inquiry Removal",
    title: "Hard Inquiry Removal Service | Inquiry Removal",
    description:
      "Remove unauthorized hard inquiries from your credit report — all 3 bureaus. 100,437+ deleted since 2015. Free consultation. Flat fee. 100% money-back guarantee.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hard Inquiry Removal Service | Inquiry Removal",
    description:
      "Remove unauthorized hard inquiries from your credit report — all 3 bureaus. 100,437+ deleted since 2015. Free consultation. Flat fee. 100% money-back guarantee.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0A0A0F",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              prerender: [
                {
                  source: "list",
                  urls: ["/get-started", "/pricing", "/services", "/results"],
                  eagerness: "moderate",
                },
              ],
              prefetch: [
                {
                  source: "document",
                  where: { href_matches: "/*" },
                  eagerness: "conservative",
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {children}
        <MobileConversionDock />
      </body>
    </html>
  );
}
