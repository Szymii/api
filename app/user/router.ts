import { Hono } from "hono";
import { TariffFixtureBuilder } from "./TariffFixture";
import { UserFixtureBuilder } from "./UserFixture";

export const router = () => {
	const user = new Hono();

	user.get("/", (c) => {
		const user = new UserFixtureBuilder()
			.withActive()
			.withAddress()
			.witTariff(new TariffFixtureBuilder().withUnlimited().build())
			.build();

		return c.json({ user });
	});

	return user;
};
