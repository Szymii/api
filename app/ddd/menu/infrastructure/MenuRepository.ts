// Menu repository

import { db } from "../../../db";
import { Menu } from "../domain/Menu";

interface RawMenu {
	name: string;
}

export class MenuRepository {
	private db = db();
	public getAll(): Menu[] {
		const result = this.db.query<Menu, null>("select * from menus").all(null);

		return result;
	}

	public getByIdWithItems(id: string): Menu | null {
		try {
			const result = this.db
				.query<Menu, { $id: string }>("select * from menus where id = $id")
				.get({ $id: id });

			return result;
		} catch (e) {
			// log(e)
			return null;
		}
	}

	public create(menu: RawMenu): Menu | null {
		try {
			const query = this.db.query("INSERT INTO menus (name) VALUES ($name)");
			query.run({ $name: menu.name });

			const result = this.db
				.query<Menu, { $name: string }>(
					"select * from menus where name = $name",
				)
				.get({ $name: menu.name });

			return result;
		} catch (e) {
			// log(e)
			return null;
		}
	}

	public delete(menuId: string): Menu | null {
		// TODO
		return null;
	}

	public persist(menu: Menu) {
		// TODO
		return null;
	}
}
