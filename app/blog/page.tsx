import type { Metadata } from "next";
import Link from "next/link";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Footer } from "@/components/Footer";
import { FounderPhotoCard } from "@/components/FounderPhotoCard";
import { Navigation } from "@/components/Navigation";
import { PageHero } from "@/components/PageHero";
import { PremiumIcon } from "@/components/PremiumIcons";
import { getAllBlogPosts, getBlogPostPath } from "@/lib/blog";


export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
  title: {
    absolute: "Inquiry Removal Blog | Hard Inquiry Removal Guides",
  },
  description:
    "Hard inquiry removal guides from Inquiry Removal covering Experian, Equifax, TransUnion, dealership inquiries, identity theft, and credit approval strategy.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Inquiry Removal Blog | Hard Inquiry Removal Guides",
    description:
      "Hard inquiry removal guides from Inquiry Removal covering Experian, Equifax, TransUnion, dealership inquiries, identity theft, and credit approval strategy.",
    url: "https://www.inquiryremoval.com/blog",
  },
  twitter: {
    title: "Inquiry Removal Blog | Hard Inquiry Removal Guides",
    description:
      "Hard inquiry removal guides from Inquiry Removal covering Experian, Equifax, TransUnion, dealership inquiries, identity theft, and credit approval strategy.",
  },
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <AnnouncementBar />
      <Navigation activePath="/blog" />
      <main id="main" className="blog-page">
        <PageHero
          id="blog-hero-heading"
          panelClassName="ir-page-hero-panel-founder"
          eyebrow="Inquiry removal guides"
          title={
            <>
              Practical <span className="ir-gradient-text">Hard Inquiry Removal Guides</span>, Written for People Who Need Answers First.
            </>
          }
          subtitle={
            <p>
              This blog is being structured for bureau-specific guides, dealership inquiry education, identity theft recovery, and approval-focused credit strategy. Full articles will be published here only when the exact website copy is ready.
            </p>
          }
          actions={
            <>
              <Link href="/get-started" className="btn btn-primary btn-large">
                Get My Free Credit Analysis
              </Link>
              <Link href="/how-it-works" className="btn btn-secondary btn-large">
                See How It Works →
              </Link>
            </>
          }
        >
          <FounderPhotoCard priority />
        </PageHero>

        <section className="blog-index section-divider" aria-labelledby="blog-index-heading">
          <div className="container">
            <div className="ir-section-head ir-section-head-wide">
              <h2 id="blog-index-heading">Published Guides</h2>
              <p>
                Articles will appear here after you provide the final approved
                blog content.
              </p>
            </div>

            {posts.length > 0 ? (
              <div className="blog-card-grid">
                {posts.map((post) => (
                  <Link key={post.slug} href={getBlogPostPath(post.slug)} className="blog-card">
                    <span className="ir-icon-surface" aria-hidden="true">
                      <PremiumIcon name="tailoredDispute" size={20} />
                    </span>
                    <span className="blog-card-meta">
                      {post.category} · {post.readTime}
                    </span>
                    <strong>{post.title}</strong>
                    <span>{post.description}</span>
                    <span className="blog-card-link">Read guide →</span>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="blog-empty ir-card-featured">
                <span className="ir-icon-surface" aria-hidden="true">
                  <PremiumIcon name="tailoredDispute" size={20} />
                </span>
                <h3>Article slots are ready.</h3>
                <p>
                  Once the final article copy is provided, each guide can be
                  dropped into the template with a strong hero, mobile jump
                  links, a desktop table of contents, and clear conversion
                  paths.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
