import Database from "bun:sqlite";

const mockDb = new Database(":memory:");
const realDb = new Database("./db.sqlite", { create: true });

export const db = () => {
	return Bun.env.NODE_ENV === "test" ? mockDb : realDb;
};
