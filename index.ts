import { Hono } from "hono";
import { createBunWebSocket } from "hono/bun";
import { router } from "./app/home/routes";

export const app = new Hono();

const { upgradeWebSocket, websocket } = createBunWebSocket();

app.route("/", router(upgradeWebSocket));

app.get("/env", (c) => {
	return c.text(`${Bun.env.NODE_ENV}`);
});

console.log("http://localhost:3000");
Bun.serve({
	fetch: app.fetch,
	websocket,
});
