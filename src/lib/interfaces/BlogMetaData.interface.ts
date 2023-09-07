import type { Moment } from "moment";
import { isABlogTag, type BlogTag } from "./BlogTag.interface";

// Meta data of a blog post.
export interface BlogMetaData {
  slug: string;
  date: Moment;
  tags: Array<BlogTag>;
  title: string;
  isExternal?: boolean | undefined;
}

// Type guard for BlogMetaData, returning true if the object is a BlogMetaData.
export function isABlogMetaData(object: any): object is BlogMetaData {
  return (
    typeof object.title === "string" &&
    typeof object.slug === "string" &&
    typeof object.date === "object" &&
    Array.isArray(object.tags) &&
    object.tags.every((tag: any) => isABlogTag(tag))
  );
}
