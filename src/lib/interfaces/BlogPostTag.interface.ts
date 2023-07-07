// BlogPostTag represents a tag for a blog post.
export interface BlogPostTag {
  name: "tutorial" | "news" | "opinion";
}

// Type guard for BlogPostTag, returning true if the object is a BlogPostTag.
export function isABlogPostTag(object: any): object is BlogPostTag {
  // prettier-ignore
  return (
    object.name === "tutorial" ||
    object.name === "news" ||
    object.name === "opinion"
  );
}
