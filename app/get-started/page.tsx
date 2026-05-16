import type { Metadata } from "next";
import { GetStartedQuiz } from "@/components/GetStartedQuiz";

export const dynamic = "force-static";
export const revalidate = false;
export const fetchCache = "only-cache";

export const metadata: Metadata = {
  title: {
    absolute: "Get Started — Free Hard Inquiry Removal Consultation",
  },
  description:
    "Book your free 15-minute credit consultation. We review your report, count your inquiries, and tell you exactly what can be removed — before you spend anything.",
  alternates: {
    canonical: "/get-started",
  },
  openGraph: {
    title: "Get Started — Free Hard Inquiry Removal Consultation",
    description:
      "Book your free 15-minute credit consultation. We review your report, count your inquiries, and tell you exactly what can be removed — before you spend anything.",
    url: "https://www.inquiryremoval.com/get-started",
  },
  twitter: {
    title: "Get Started — Free Hard Inquiry Removal Consultation",
    description:
      "Book your free 15-minute credit consultation. We review your report, count your inquiries, and tell you exactly what can be removed — before you spend anything.",
  },
};

export default function GetStartedPage() {
  return (
    <>
      <main id="main" className="get-started-page-main">
        <GetStartedQuiz />
      </main>
    </>
  );
}
