import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { PageHero } from "@/components/PageHero";
import { PremiumIcon } from "@/components/PremiumIcons";
import { getAllBlogPosts, getBlogPost } from "@/lib/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: {
        absolute: "Blog Guide Not Found | Inquiry Removal",
      },
    };
  }

  return {
    title: {
      absolute: `${post.title} | Inquiry Removal`,
    },
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Inquiry Removal`,
      description: post.description,
      url: `https://www.inquiryremoval.com/blog/${post.slug}`,
    },
    twitter: {
      title: `${post.title} | Inquiry Removal`,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const tocItems = post.sections.map((section) => ({
    label: section.heading,
    id: section.heading
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, ""),
  }));

  return (
    <>
      <AnnouncementBar />
      <Navigation />
      <main id="main" className="blog-post-page">
        <PageHero
          id="blog-post-heading"
          eyebrow={
            <Link href="/blog" className="blog-back-link">
              ← Back to blog
            </Link>
          }
          title={<>{post.title}</>}
          subtitle={<p>{post.description}</p>}
          meta={
            <>
              <span>{post.category}</span>
              <span>{post.readTime}</span>
              <span>{post.publishDate}</span>
            </>
          }
        >
          <span className="ir-icon-surface" aria-hidden="true">
            <PremiumIcon name="tailoredDispute" size={20} />
          </span>
          <h2>Quick Navigation</h2>
          <nav className="blog-post-summary-nav" aria-label="Article sections">
            {tocItems.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </nav>
        </PageHero>

        <section className="blog-mobile-jump section-divider" aria-label="Jump to article section">
          <div className="container">
            <div className="blog-jump-scroll">
              {tocItems.map((item) => (
                <a key={item.id} href={`#${item.id}`}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="blog-article section-divider">
          <div className="container blog-article-shell">
            <article className="blog-article-card">
              {post.sections.map((section, index) => {
                const id = tocItems[index]?.id;

                return (
                  <section key={section.heading} id={id} className="blog-article-section">
                    <h2>{section.heading}</h2>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </section>
                );
              })}
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
