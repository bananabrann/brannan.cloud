import { describe, expect, test } from "vitest";
import { _isWebsiteOnline } from "./+page.server.js";
import { page } from "./+page.js";
const BASE_URL =
	process.env.NODE_ENV !== "development" ? "http://localhost:5173" : "https://brannan.cloud";

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

describe.concurrent("404 error page", () => {
	test("non-existent page returns a 404", async () => {
		console.log("BASE_URL:", BASE_URL);
		expect((await fetch(`${BASE_URL}/apple-pie`)).status).toBe(404);
	});
});
