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

	// Posts that are shown in the "More on" section must have a matching tag and not be
	// the same article that is currently displayed.
	const postsWithMatchingTag = await prisma.post.findMany({
		where: {
			AND: [
				{
					title: {
						not: post.title,
					},
				},
				{
					tags: {
						some: {
							name: {
								in: post.tags.map((t) => t.name),
							},
						},
					},
				},
			],
		},
		take: 8,
		select: {
			slug: true,
			title: true,
			postedOn: true,
			tags: {
				select: {
					name: true,
				},
			},
		},
		orderBy: {
			postedOn: "desc",
		},
	});

	return {
		post: post,
		readNext: postsWithMatchingTag,
		metadata: {
			title: post.title,
		},
	};
};
