export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishDate: string;
  readTime: string;
  heroLabel?: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
  }>;
};

export const blogPosts: BlogPost[] = [];

export function getAllBlogPosts() {
  return [...blogPosts].sort((a, b) => b.publishDate.localeCompare(a.publishDate));
}

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostPath(slug: string) {
  return `/blog/${slug}`;
}
