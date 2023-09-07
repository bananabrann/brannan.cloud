import type { BlogMetaData } from "$lib/interfaces/BlogMetaData.interface";
import moment from "moment";

const data: Array<BlogMetaData> = [
  /*
  {
    slug: "my-first-two-customers",
    title:
      "My First Two Customers In Freelance Web Dev Didn't Know What They Wanted, but I'm Ready to Change",
    date: moment("2023-09-05"),
    tags: [{ name: "opinion" }]
  },
  */
  {
    slug: "code-quality",
    title: "Code Quality: A Concern For Businesses, Bottom Lines, and Empathetic Programmers",
    date: moment("2021-10-18"),
    tags: [{ name: "external" }],
    isExternal: true,
    externalLink:
      "https://stackoverflow.blog/2021/10/18/code-quality-a-concern-for-businesses-bottom-lines-and-empathetic-programmers"
  }
];

export default data;
