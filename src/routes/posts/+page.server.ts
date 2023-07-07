import { error } from "@sveltejs/kit";
import { isABlogPost, type BlogPost } from "$lib/interfaces/BlogPost.interface";
import { posts } from "../../postsData";

export function load() {
  const summaries: Array<BlogPost> = posts;

  for (let i = 0; i < summaries.length; i++) {
    if (!isABlogPost(summaries[i])) throw error(500, "Blog post data invalid.");
  }

  return {
    summaries: summaries.map((post: BlogPost) => ({
      slug: post.slug,
      title: post.title,
      summary: post.summary,
      tags: post.tags
    }))
  };
}
