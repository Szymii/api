import app from ".";
import { describe, expect, it } from "bun:test";

describe("App is up", () => {
	it("/ should return 200", async () => {
		const res = await app.request("/");
		expect(res.status).toBe(200);
	});
});
