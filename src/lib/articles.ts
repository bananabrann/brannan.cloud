import type { Article } from "$lib/interfaces/Article.interface";

const data: Array<Article> = [
  {
    slug: "is-quality-worth-the-cost",
    title: "Is High Quality Software Worth the Cost?",
    date: "2023-01-01",
    tags: ["project management"],
    link: "https://martinfowler.com/articles/is-quality-worth-cost.html",
    readTime: "10 min"
  },
  {
    slug: "common-ways-to-make-a-software-development-team-faster",
    title: "What Are Some Common Ways To Make A Software Development Team Faster?",
    date: "2023-07-13",
    tags: ["productivity", "quora"],
    link: "https://qr.ae/pyxSYy",
    readTime: "1 min"
  },
  {
    slug: "no-ask",
    title: "Don't Ask to Ask, Just Ask",
    date: "2023-09-12",
    tags: ["productivity"],
    link: "https://dontasktoask.com/",
    readTime: "2 min"
  },
  {
    slug: "css-section-separator-generator",
    title: "An Awesome CSS Section Separator Generator",
    date: "2022-08-29",
    tags: ["css", "tools"],
    link: "https://wweb.dev/resources/css-separator-generator",
    readTime: "n/a"
  },
  {
    slug: "cronjob-generator",
    title: "Cronjob Generator",
    date: "2021-10-10",
    tags: ["tools"],
    link: "https://crontab.cronhub.io/",
    readTime: "n/a"
  }
];

export default data;
