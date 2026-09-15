import type { Metadata } from "next";
import { Jost, League_Spartan } from "next/font/google";
import "./styles/tokens.scss";
import "./globals.css";
import ThemeProvider from "@/components/theme-management/theme-provider";
import MainHeader from "@/components/main-header";

const jostSans = Jost({
	variable: "--font-jost-sans",
	subsets: ["latin"],
});

const leagueSpartanMono = League_Spartan({
	variable: "--font-league-spartan-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "CatFang Landing Page",
	description: "CatFang's landing page.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="en"
			suppressHydrationWarning
			className={`${leagueSpartanMono.variable} ${jostSans.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col">
				<ThemeProvider>
					<MainHeader />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
