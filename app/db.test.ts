import { db } from "./db";
import { describe, expect, it } from "bun:test";

describe("DB is working", () => {
	it("should create (in memory) table, insert data, and read them", () => {
		const testDb = db();
		testDb.run(
			"CREATE TABLE messages (id INTEGER PRIMARY KEY, message INTEGER)",
		);

		const query = testDb.query(
			"INSERT INTO messages (message) VALUES ($message)",
		);
		query.run({ $message: "Hello" });

		const result = testDb
			.query<string, null>("select * from messages")
			.all(null);

		expect(result.length).toBe(1);
	});
});
