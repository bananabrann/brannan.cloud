// BlogPostTag represents a tag for a blog post.
export interface BlogTag {
  name: "tutorial" | "news" | "opinion" | "career" | "carrera" | "noticia" | "opinión";
}

// Type guard for BlogPostTag, returning true if the object is a BlogPostTag.
export function isABlogTag(object: any): object is BlogTag {
  // prettier-ignore
  return (
    object.name === "tutorial" ||
    object.name === "news" ||
    object.name === "opinion" ||
    object.name === "career" ||
    object.name === "carrera" ||
    object.name === "noticia" ||
    object.name === "opinión"
  );
}
