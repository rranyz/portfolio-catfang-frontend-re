import { defineConfig, devices } from "@playwright/test";

// A dedicated, non-default port: this box can have other apps' dev
// servers already bound to :3000, and `reuseExistingServer` would
// silently attach these tests to whatever is listening there.
const PORT = 3100;
const baseURL = `http://localhost:${PORT}`;

export default defineConfig({
	testDir: "./tests",
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	retries: process.env.CI ? 2 : 0,
	workers: process.env.CI ? 1 : undefined,
	reporter: "html",
	use: {
		baseURL,
		trace: "on-first-retry",
	},
	projects: [
		{
			name: "chromium",
			use: { ...devices["Desktop Chrome"] },
		},
		{
			name: "firefox",
			use: { ...devices["Desktop Firefox"] },
		},
		{
			name: "webkit",
			use: { ...devices["Desktop Safari"] },
		},
	],
	webServer: {
		// Dev server for fast local iteration. CI builds and serves the
		// production bundle instead, closer to what users actually run.
		command: process.env.CI
			? `npm run build && PORT=${PORT} npm run start`
			: `PORT=${PORT} npm run dev`,
		url: baseURL,
		reuseExistingServer: !process.env.CI,
		timeout: 120_000,
	},
});
