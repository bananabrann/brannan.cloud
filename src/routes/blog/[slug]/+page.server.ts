import { prisma } from "$lib/server/prisma";
import type { Post } from "@prisma/client";
import type { PageServerLoad } from "./$types";
import type { PostWithAllDetails } from "$lib/types/PostWithAllDetails";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ locals, params }) => {
	const post = await prisma.post.findUnique({
		where: {
			slug: params.slug,
		},
		include: {
			tags: true,
			author: true,
		},
	});

	if (!post) {
		error(404, {
			message: `Couldn't find article "${params.slug}". It may have been an renamed or removed.`,
		});
	}

	return {
		post: post,
		metadata: {
			title: `TBC Blog | ${post.title}`,
		},
	};
};
