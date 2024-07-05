import { Hono } from "hono";
import { createBunWebSocket } from "hono/bun";
import { router } from "./app/home/routes";
import { logger } from "./app/logger";
import { router as userRouter } from "./app/user/router";

export const app = new Hono();

const { upgradeWebSocket, websocket } = createBunWebSocket();

app.use(logger);

app.route("/", router(upgradeWebSocket));
app.route("/user", userRouter());

app.get("/env", (c) => {
	return c.text(`${Bun.env.NODE_ENV}`);
});

console.log("http://localhost:3000");
Bun.serve({
	fetch: app.fetch,
	websocket,
});
