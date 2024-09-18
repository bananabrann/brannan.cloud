import { prisma } from "$lib/server/prisma";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals, params }) => {
	const posts = await prisma.post.findMany({
		include: {
			tags: true,
			author: true,
		},
		orderBy: {
			postedOn: "desc",
		},
	});

	const tags = await prisma.tag.findMany({
		orderBy: {
			name: "asc",
		},
	});

	return {
		posts: posts,
		tags: tags,
		metadata: {
			title: "Blog",
		},
	};
};
