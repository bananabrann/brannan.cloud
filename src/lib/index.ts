export interface Post {
	title: string;
	slug: string;
	description: string;
	author: string;
	postedOn: string;
	tags: string[];
	isExternal: boolean;
}

export const POSTS_LIST: Array<Post> = [
	{
		title: "Test title",
		slug: "test-title",
		description: "Some description.",
		author: "Lee",
		postedOn: "2021-06-01",
		tags: ["tag1", "tag2"],
		isExternal: false,
	}
]
