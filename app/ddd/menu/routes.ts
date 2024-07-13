import { Hono } from "hono";
import { MenuRepository } from "./infrastructure/MenuRepository";

export const router = () => {
	const menu = new Hono();
	const menuRepository = new MenuRepository();

	menu.get("/", (c) => {
		const menus = menuRepository.getAll();

		return c.json({ menus: menus });
	});

	menu.get("/:id", (c) => {
		const id = c.req.param("id");

		if (id) {
			const menu = menuRepository.getByIdWithItems(id);

			if (menu) return c.json({ menu: menu });
		}

		return c.json({ error: "Menu not found" }, 404);
	});

	interface MenuRequest {
		name: string;
	}

	menu.post("/", async (c) => {
		const body: MenuRequest = await c.req.json();
		const menu = menuRepository.create(body);

		if (!menu) {
			return c.json({ error: "Menu not created" }, 400);
		}

		return c.json({
			menu: menu,
		});
	});

	return menu;
};
