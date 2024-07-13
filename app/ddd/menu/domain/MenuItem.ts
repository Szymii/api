// MenuItem entity

import { Price } from "./Price";

export class MenuItem {
	constructor(
		private id: string,
		private name: string,
		private price: Price,
		private createdAt: Date,
		private updatedAt: Date | null,
	) {}

	getId(): string {
		return this.id;
	}

	getName(): string {
		return this.name;
	}

	getPrice(): Price {
		return this.price;
	}

	getCreatedAt(): Date {
		return this.createdAt;
	}

	getUpdatedAt(): Date | null {
		return this.updatedAt;
	}

	// updateName(name: string): void {}
	// updatePrice(price: Price): void {}
}
