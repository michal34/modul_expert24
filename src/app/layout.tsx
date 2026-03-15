import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	metadataBase: new URL("https://twojadomena.pl"),

	title: {
		default: "Domy modułowe i pawilony modułowe – Mazowieckie | Warszawa | Mińsk Mazowiecki",
		template: "%s | Moduł Expert24",
	},

	description:
		"Nowoczesne domy modułowe i pawilony modułowe w województwie mazowieckim. Szybka realizacja, atrakcyjna cena i wysoka jakość wykonania. Obsługujemy Warszawę, Mińsk Mazowiecki i okolice.",

	alternates: {
		canonical: "/",
	},

	openGraph: {
		title: "Domy modułowe i pawilony modułowe – Mazowieckie | Warszawa | Mińsk Mazowiecki",
		description:
			"Producent domów modułowych i pawilonów modułowych. Szybka realizacja, wysoka jakość i nowoczesne rozwiązania dla klientów z Mazowsza.",
		url: "https://twojadomena.pl",
		siteName: "Moduł Expert24",
		locale: "pl_PL",
		type: "website",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Domy modułowe i pawilony modułowe – Moduł Expert24",
			},
		],
	},

	twitter: {
		card: "summary_large_image",
		title: "Domy modułowe i pawilony modułowe – Moduł Expert24",
		description:
			"Nowoczesne domy modułowe i pawilony modułowe. Szybka realizacja i wysoka jakość wykonania.",
		images: ["/og-image.jpg"],
	},

	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},

	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/apple-touch-icon.png",
	},

	category: "construction",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pl">
			<body>{children}</body>
		</html>
	);
}
