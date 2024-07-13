import { db } from "../db";
import { describe, expect, it } from "bun:test";

// Migrations are run before all tests in setup.ts
describe("Migrations are done", () => {
	it("should have created tables", () => {
		const result1 = db()
			.query("SELECT name FROM sqlite_master WHERE type='table'")
			.all();

		expect(result1.length).toBeGreaterThan(1);
	});
});
