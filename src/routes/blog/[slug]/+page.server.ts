import { prisma } from "$lib/server/prisma";
import type { Post } from "@prisma/client";
import type { PageServerLoad } from "./$types";
import type { PostWithAllDetails } from "$lib/types/PostWithAllDetails";

export const load: PageServerLoad = async ({ locals, params }) => {
	const post: PostWithAllDetails = await prisma.post.findUnique({
		where: {
			slug: params.slug,
		},
		include: {
			tags: true,
			author: true,
		},
	});

	return {
		post: post,
	};
};
