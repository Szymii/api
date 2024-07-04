import { Tariff } from "./TariffFixture";

export type User = {
	name: string;
	email: string;
	isActive: boolean;
	address: Address | null;
	tariff: Tariff | null;
	createdAt: Date;
};

type Address = {
	street: string;
	city: string;
	zipCode: number;
};

export class UserFixtureBuilder {
	private name: string;
	private email: string;
	private isActive: boolean;
	private address: Address | null;
	private tariff: Tariff | null;
	private createdAt: Date;
	private updatedAt: Date | null;

	constructor() {
		this.name = "John Doe";
		this.email = "john.doe@example.com";
		this.address = null;
		this.tariff = null;
		this.isActive = false;
		this.createdAt = new Date();
		this.updatedAt = null;
	}

	public withActive() {
		this.isActive = true;
		return this;
	}

	public withAddress() {
		this.address = {
			street: "123 Main St",
			city: "New York",
			zipCode: 10001,
		};
		return this;
	}

	public witTariff(tariff: Tariff) {
		this.tariff = tariff;
		return this;
	}

	public build(): User {
		return {
			name: this.name,
			email: this.email,
			isActive: this.isActive,
			address: this.address,
			tariff: this.tariff,
			createdAt: this.createdAt,
		};
	}
}
