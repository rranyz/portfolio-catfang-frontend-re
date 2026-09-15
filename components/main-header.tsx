import Image from "next/image";

import CatFangTextLogo from "@/assets/catfang_resize_logo.png";
import ThemeToggle from "./theme-management/theme-toggle";

function MainHeader() {
	return (
		<header className="sticky top-0  flex px-6 py-3 items-center justify-between dark:bg-primary-500 dark:text-primary-000">
			<h1 className="uppercase">Shop</h1>
			<Image
				src={CatFangTextLogo}
				alt="CatFang Logo Image Text"
				width={100}
				height={50}
			/>
			<ThemeToggle />
		</header>
	);
}

export default MainHeader;
