// BlogPostTag represents a tag for a blog post.
export interface BlogTag {
  name: "tutorial" | "news" | "opinion" | "career" | "external";
}

// Type guard for BlogPostTag, returning true if the object is a BlogPostTag.
export function isABlogTag(object: any): object is BlogTag {
  // prettier-ignore
  return (
    object.name === "tutorial" ||
    object.name === "news" ||
    object.name === "opinion" ||
    object.name === "external" ||
    object.name === "career"
  );
}
