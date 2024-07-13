import Database from "bun:sqlite";

export const up = async (db: Database) => {
	// Menu
	db.run(
		"CREATE TABLE IF NOT EXISTS menus (id INTEGER PRIMARY KEY, name TEXT UNIQUE, created_at DATETIME DEFAULT CURRENT_TIMESTAMP, updated_at DATETIME)",
	);

	// MenuItem
	db.run(
		"CREATE TABLE IF NOT EXISTS menu_items (id INTEGER PRIMARY KEY, name TEXT, price INTEGER, created_at DATETIME DEFAULT CURRENT_TIMESTAMP, updated_at DATETIME)",
	);

	// MenuMenuItem
	db.run(
		"CREATE TABLE IF NOT EXISTS menu_menu_item (menu_id INTEGER, menu_item_id INTEGER, PRIMARY KEY (menu_id, menu_item_id), FOREIGN KEY (menu_id) REFERENCES menu(id), FOREIGN KEY (menu_item_id) REFERENCES menu_item(id))",
	);
};
