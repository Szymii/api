import { app } from "../../..";
import { describe, expect, it } from "bun:test";

describe("Menu repository", () => {
	let id: string;
	it("POST /menus should create menu", async () => {
		const res = await app.request("/menus", {
			method: "POST",
			body: JSON.stringify({ name: "Menu form request" }),
		});

		expect(res.status).toBe(200);
		const resJson = (await res.json()) as {
			menu: {
				id: string;
				name: string;
			};
		};

		id = resJson.menu.id;

		expect(resJson.menu.name).toBe("Menu form request");
	});

	it("GET /menus:id should return exact menu", async () => {
		const res = await app.request(`/menus/${id}`);

		expect(res.status).toBe(200);
		const resJson = (await res.json()) as {
			menu: {
				id: string;
				name: string;
			};
		};

		expect(resJson.menu.name).toBe("Menu form request");
	});

	it("GET /menus should return all menus", async () => {
		const res = await app.request("/menus");

		expect(res.status).toBe(200);
		const resJson = (await res.json()) as {
			menus: {
				id: string;
				name: string;
			}[];
		};

		expect(resJson.menus.length).toBeGreaterThan(0);
	});
});
