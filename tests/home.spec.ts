import { test, expect } from "@playwright/test";

test("home page renders the default create-next-app content", async ({
	page,
}) => {
	await page.goto("/");
	await expect(page).toHaveTitle("CatFang Landing Page");
	await expect(
		page.getByRole("heading", { name: "catfang page" }),
	).toBeVisible();
});
