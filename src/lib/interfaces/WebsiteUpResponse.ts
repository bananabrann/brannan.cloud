import type { WebsiteUpStatus } from "$lib/enums/WebsiteUpStatus";

export default interface WebsiteUpResponse {
	status: WebsiteUpStatus;
	// error: string;
}
