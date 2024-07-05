import { Context, Next } from "hono";

const path = "log.txt";

export const logger = async (c: Context, next: Next) => {
	const result = `${new Date().toISOString()} [${c.req.method}] ${c.req.url}\n`;
	const file = Bun.file(path);
	const writer = file.writer();

	writer.write(await file.text());
	writer.write(result);

	writer.flush();

	return next();
};
