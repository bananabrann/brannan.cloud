import { describe, expect, test } from "vitest";
import { isWebsiteOnline, sum } from "./+page.server.js";
import { page } from "./+page.js";

describe.concurrent("website status badges", () => {
  test("returns true for a valid website", async () => {
    expect(await isWebsiteOnline("https://google.com")).toBeTruthy();
  });

  test("returns false for an invalid website", async () => {
    expect(await isWebsiteOnline("https://google.com/404")).toBeFalsy();
  });
});
