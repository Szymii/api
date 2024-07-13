// Menu entity - or even aggregate idk 🤨🤔

export class Menu {
	constructor(
		private id: string,
		private name: string,
		private createdAt: Date,
		private updatedAt: Date | null,
	) {}

	getId(): string {
		return this.id;
	}

	getName(): string {
		return this.name;
	}

	getCreatedAt(): Date {
		return this.createdAt;
	}

	getUpdatedAt(): Date | null {
		return this.updatedAt;
	}

	// updateName(name: string): void {}
}
