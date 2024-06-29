import { Hono } from "hono";
import { createBunWebSocket } from "hono/bun";
import { router } from "./app/home/routes";

const app = new Hono();

const { upgradeWebSocket, websocket } = createBunWebSocket();
app.route("/", router(upgradeWebSocket));

Bun.serve({
	fetch: app.fetch,
	websocket,
});
