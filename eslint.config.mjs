import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import eslintConfigPrettier from "eslint-config-prettier";

const eslintConfig = defineConfig([
	...nextVitals,
	...nextTs,
	// Must stay last: turns off any ESLint stylistic rules that conflict with Prettier.
	eslintConfigPrettier,
	// Override default ignores of eslint-config-next.
	globalIgnores([
		// Default ignores of eslint-config-next:
		".next/**",
		"out/**",
		"build/**",
		"next-env.d.ts",
		"node_modules/**",
		"playwright-report/**",
		"tests/**",
		"**/*.spec.ts",
		"**/*.test.ts",
	]),
]);

export default eslintConfig;
