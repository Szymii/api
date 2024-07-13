import { readdir } from "node:fs/promises";
import { db } from "./app/db";
import { beforeAll } from "bun:test";

// Run migrations before all tests
beforeAll(async () => {
	const path = `${import.meta.dir}/app/_migrations`;
	const files = await readdir(path);

	const database = db();

	files.forEach(async (file) => {
		if (!file.startsWith("migration_")) return;

		const { up } = require(`${path}/${file}`);

		up(database);
	});
});
