import type WebsiteUpResponse from "$lib/interfaces/WebsiteUpResponse";
import { WebsiteUpStatus } from "$lib/enums/WebsiteUpStatus";
import type { PageServerLoad } from "./$types";
import { type ShareSnippet, SHARE_SNIPPETS } from "$lib/server/content";

export const load: PageServerLoad = async ({ locals }) => {
	return {
		/*
		NOTE - Streaming is not currently supported for load functions on Azure SWA. See 
		https://github.com/bananabrann/brannan.cloud/issues/87 for more information.
		*/
		webStatuses: {
			tv: isWebsiteOnline("https://tv.brannan.cloud"),
			files: isWebsiteOnline("https://files.brannan.cloud"),
			chat: isWebsiteOnline("http://146.190.0.104"),
		},
		shareSnippets: getSortedShareSnippets(),
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

function getSortedShareSnippets(): Array<ShareSnippet> {
	const sortedSnippets: Array<ShareSnippet> = SHARE_SNIPPETS
		.sort((a, b) => {
			if (a.isFeatured === b.isFeatured) {
				return new Date(b.date).getTime() - new Date(a.date).getTime();
			}
			return a.isFeatured ? -1 : 1;
		});

	sortedSnippets.forEach(snippet => {
		snippet.date = new Date(snippet.date).toLocaleDateString("en-US", {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	});

	return sortedSnippets;
}
