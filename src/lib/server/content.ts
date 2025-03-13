export interface Post {
    title: string,
    slug: string,
    tags: string[],
    date: string,
    isActive: boolean,
    isFeatured: boolean,
}

export interface ShareSnippet {
    title: string,
    author: string,
    url: string,
    date: string,
    isFeatured: boolean,
    comment?: string,
}

export const SHARE_SNIPPETS: Array<ShareSnippet> = [
    {
        title: "Is High Quality Software Worth the Cost?",
        author: "Martin Fowler",
        url: "https://martinfowler.com/articles/is-quality-worth-cost.html",
        date: "2024-07-08",
        isFeatured: true,
        comment: "Software quality is extremely important, but the fruits of the labor are not always immediately visible. Often times this is brushed aside by key stakeholders and decision makers at large companies.\nThis is one of my favorite articles of all time, capturing perfectly how I feel about the importantance of high quality code and why management should care.\n"
    },
    {
        title: "What are some common ways to make a software development team faster?",
        author: "Jay Grieves",
        url: "https://www.quora.com/What-are-some-common-ways-to-make-a-software-development-team-faster/answer/Jay-Grieves?ch=10&oid=95365371&share=92c184f0&srid=ukuZr0&target_type=answer",
        date: "2024-07-08",
        isFeatured: false,
        comment: "Interesting take on how to make a software development team faster."
    },
    {
        title: "Code quality: a concern for businesses, bottom lines, and empathetic programmers",
        author: "Isaac Lyman for Stack Overflow Blog",
        date: "2023-10-18",
        isFeatured: true,
        comment: "",
        url: "https://stackoverflow.blog/2021/10/18/code-quality-a-concern-for-businesses-bottom-lines-and-empathetic-programmers/?cb=1",

    }
]

export const POSTS: Array<Post> = [

];