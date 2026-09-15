"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "@deemlol/next-icons";

export default function ThemeToggle() {
	const [dark, setDark] = useState(false);
	const { setTheme } = useTheme();

	const toggleTheme = () => {
		const nextTheme = !dark;

		setDark(() => nextTheme);

		setTheme(() => (nextTheme ? "dark" : "light"));
	};

	const SunIcon = <Sun size={30} color="#34A3AB" strokeWidth={1.5} />;
	const MoonIcon = <Moon size={30} color="#0a0a0a" strokeWidth={1.5} />;

	return (
		<button
			id="btnToggleTheme"
			onClick={toggleTheme}
			className="px-2 py-1 text-primary-950 dark:text-primary-100"
		>
			{dark ? MoonIcon : SunIcon}
		</button>
	);
}
