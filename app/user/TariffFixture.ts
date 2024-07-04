export type Tariff = {
	id: string;
	type: "limited" | "unlimited";
	createdAt: Date;
	updatedAt: Date | null;
};

export class TariffFixtureBuilder {
	private id: string;
	private type: "limited" | "unlimited";
	private createdAt: Date;
	private updatedAt: Date | null;

	constructor() {
		this.id = generateId();
		this.type = "limited";
		this.createdAt = new Date();
		this.updatedAt = null;
	}

	public withUnlimited(): TariffFixtureBuilder {
		this.type = "unlimited";
		return this;
	}

	public build(): Tariff {
		return {
			id: this.id,
			type: this.type,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
		};
	}
}

const generateId = () => {
	const id =
		Math.random().toString(36).substring(2, 15) +
		Math.random().toString(36).substring(2, 15);
	return id;
};
