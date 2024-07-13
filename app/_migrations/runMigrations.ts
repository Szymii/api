import { readdir } from "node:fs/promises";
import { db } from "../db";

const files = await readdir(import.meta.dir);

const database = db();

files.forEach(async (file) => {
	if (!file.startsWith("migration_")) return;

	const { up } = require(`${import.meta.dir}/${file}`);

	up(database);
});
