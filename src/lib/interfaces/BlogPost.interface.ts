import { isABlogPostTag, type BlogPostTag } from "./BlogPostTag.interface";

// Content of a blog post, including the slug, title, summary, HTML content, and tags.
// Blog posts are stored in src/routes/blog/[slug]/+page.server.ts.
export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  htmlContent: string;
  tags: Array<BlogPostTag>;
}

// Type guard for BlogPost, returning true if the object is a BlogPost.
export function isABlogPost(object: any): object is BlogPost {
  return (
    typeof object.slug === "string" &&
    typeof object.title === "string" &&
    typeof object.summary === "string" &&
    typeof object.htmlContent === "string" &&
    Array.isArray(object.tags) &&
    object.tags.every((tag: any) => isABlogPostTag(tag))
  );
}
