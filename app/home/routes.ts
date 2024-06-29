import { Hono } from "hono";
import { UpgradeWebSocket } from "hono/ws";
import { view } from "./view";

export const router = (upgradeWebSocket: UpgradeWebSocket) => {
	const home = new Hono();

	home.get("/", (c) => {
		return c.html(view());
	});

	home.get(
		"/ws",
		upgradeWebSocket((c) => {
			let intervalId: Timer;

			return {
				onOpen(_event, ws) {
					intervalId = setInterval(() => {
						ws.send(new Date().toString());
					}, 200);
				},
				onClose() {
					clearInterval(intervalId);
				},
			};
		}),
	);

	return home;
};
