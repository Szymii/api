import Database from "bun:sqlite";

export const up = async (db: Database) => {
	db.run(
		"CREATE TABLE IF NOT EXISTS menu (id INTEGER PRIMARY KEY, description TEXT)",
	);
};
