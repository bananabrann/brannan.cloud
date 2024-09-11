import type WebsiteUpResponse from "$lib/interfaces/WebsiteUpResponse";
import { WebsiteUpStatus } from "$lib/enums/WebsiteUpStatus";
import { prisma } from "$lib/server/prisma";
import type { PageServerLoad } from "./$types";
import type { Post } from "@prisma/client";
import type { PostWithAllDetails } from "$lib/types/PostWithAllDetails";

export const load: PageServerLoad = async ({ locals }) => {
	return {
		posts: {
			top: (await getTopPosts()) as PostWithAllDetails[],
			latest: (await getLatestPosts()) as PostWithAllDetails[],
			tutorials: (await getTutorialPosts()) as PostWithAllDetails[],
		},
		webStatuses: {
			tv: isWebsiteOnline("https://tv.brannan.cloud"),
			files: isWebsiteOnline("https://files.brannan.cloud"),
			chat: isWebsiteOnline("http://146.190.0.104"),
		},
	};
};

async function isWebsiteOnline(url: string): Promise<WebsiteUpResponse> {
	try {
		const response = await fetch(url, { method: "HEAD" });

		if (response.status >= 200 && response.status < 500) {
			return {
				status: WebsiteUpStatus.Up,
			};
		} else {
			return {
				status: WebsiteUpStatus.Down,
			};
		}
	} catch (error) {
		return {
			status: WebsiteUpStatus.Down,
		};
	}
}

async function getTopPosts(): Promise<Post[]> {
	return await prisma.post.findMany({
		where: {
			published: true,
		},
		include: {
			author: true,
			tags: true,
		},
		orderBy: {
			claps: "desc",
		},
		take: 2,
	});
}

async function getLatestPosts(): Promise<Post[]> {
	return await prisma.post.findMany({
		where: {
			published: true,
		},
		include: {
			author: true,
			tags: true,
		},
		orderBy: {
			postedOn: "desc",
		},
		take: 5,
	});
}

async function getTutorialPosts(): Promise<Post[]> {
	return await prisma.post.findMany({
		where: {
			published: true,
			tutorial: true,
		},
		include: {
			author: true,
			tags: true,
		},
		take: 2,
	});
}

// async function getTopPosts
