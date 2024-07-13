import { MenuRepository } from "./MenuRepository";
import { describe, expect, it } from "bun:test";

describe("Menu repository", () => {
	it("Should create Menu", () => {
		const repository = new MenuRepository();

		const menu = repository.create({ name: "Menu 1" });

		expect(menu).not.toBeNull();
	});

	it("Should get Menu by id with menu items", () => {
		const repository = new MenuRepository();

		const menu = repository.getByIdWithItems("1");

		expect(menu).not.toBeNull();
	});

	it("Should get all Menus", () => {
		const repository = new MenuRepository();

		const menus = repository.getAll();

		expect(menus.length).toBeGreaterThan(0);
	});

	it.skip("Should delete Menu", () => {
		// Not implemented yet
	});

	it.skip("Should update Menu", () => {
		// Not implemented yet
	});
});
