import { describe, expect, test } from "vitest";
import { _isWebsiteOnline } from "./+page.server.js";
import { page } from "./+page.js";

// NOTE - If WebStatusBadge ever becomes self-containing (see GitHub issue #44), the tests
// should probably be moved to WebStatusBadge.test.js instead of here.
describe.concurrent("website status badges", () => {
	test("returns true for a valid website", async () => {
		expect(await _isWebsiteOnline("https://google.com")).toBeTruthy();
	});

	test("returns false for an invalid website", async () => {
		expect(await _isWebsiteOnline("https://google.com/404")).toBeFalsy();
	});
});
