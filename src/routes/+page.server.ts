import type WebsiteUpResponse from "$lib/interfaces/WebsiteUpResponse";
import { WebsiteUpStatus } from "$lib/enums/WebsiteUpStatus";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
	return {
		webStatuses: {
			tv: isWebsiteOnline("https://tv.brannan.cloud"),
			files: isWebsiteOnline("https://files.brannan.cloud"),
			chat: isWebsiteOnline("http://146.190.0.104/login"),
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
