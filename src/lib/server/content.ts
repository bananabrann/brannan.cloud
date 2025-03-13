export interface Post {
	title: string;
	slug: string;
	tags: string[];
	date: string;
	isActive: boolean;
	isFeatured: boolean;
}

export interface ShareSnippet {
	title: string;
	author: string;
	url: string;
	date: string;
	isFeatured: boolean;
	comment?: string;
}

export const SHARE_SNIPPETS: Array<ShareSnippet> = [
	{
		title: "Is High Quality Software Worth the Cost?",
		author: "Martin Fowler",
		url: "https://martinfowler.com/articles/is-quality-worth-cost.html",
		date: "2024-07-08",
		isFeatured: true,
		comment:
			"Software quality is extremely important, but the fruits of the labor are not always immediately visible. Often times this is brushed aside by key stakeholders and decision makers at large companies.\nThis is one of my favorite articles of all time, capturing perfectly how I feel about the importantance of high quality code and why management should care.\n",
	},
	{
		title: "What are some common ways to make a software development team faster?",
		author: "Jay Grieves",
		url: "https://www.quora.com/What-are-some-common-ways-to-make-a-software-development-team-faster/answer/Jay-Grieves?ch=10&oid=95365371&share=92c184f0&srid=ukuZr0&target_type=answer",
		date: "2024-09-30",
		isFeatured: false,
		comment: "",
	},
	{
		title: "Code quality: a concern for businesses, bottom lines, and empathetic programmers",
		author: "Isaac Lyman for Stack Overflow Blog",
		date: "2022-10-19",
		isFeatured: true,
		comment: "",
		url: "https://stackoverflow.blog/2021/10/18/code-quality-a-concern-for-businesses-bottom-lines-and-empathetic-programmers/?cb=1",
	},
	{
		title: "How can a project with high turnover be stabilized even as staff change?",
		author: "Flater on Stack Exchange",
		url: "https://workplace.stackexchange.com/questions/158086/how-can-a-project-with-high-turnover-be-stabilized-even-as-staff-change/158099#158099",
		date: "2023-09-22",
		isFeatured: false,
		comment: "",
	},
	{
		title: "TypeScript compiler changes to Go",
		author: "Anders Hejlsberg",
		url: "https://youtu.be/pNlq-EVld70",
		date: "2025-03-12",
		isFeatured: false,
		comment:
			"Awesome that the developers at Microsoft, who own many in-house tools and languages, chose to use Go (a language from Google) for the new compiler.",
	},
	{
		title: "Amazon Principal Software Engineer on Layoffs and Career Growth",
		author: "Ryan Peterman and Steve Huynh",
		url: "https://youtu.be/pNlq-EVld70",
		date: "2025-03-7",
		isFeatured: false,
		comment:
			"Fantastic interview! I wish there was more long-form content from the upper ranks of software engineers.",
	},
	{
		title: "Please Stop Using Local Storage",
		author: "Randall Degges",
		url: "https://www.rdegges.com/2018/please-stop-using-local-storage/",
		date: "2023-11-11",
		isFeatured: false,
		comment: "",
	},
	{
		title: "Stop using JWTs!",
		author: "samsch",
		url: "https://gist.github.com/samsch/0d1f3d3b4745d778f78b230cf6061452",
		date: "2023-07-14",
		isFeatured: false,
		comment: "",
	},
];

export const POSTS: Array<Post> = [];
