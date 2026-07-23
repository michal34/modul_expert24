import type { Metadata } from "next";

import GoogleAdsConsent from "@/components/GoogleAdsConsent";
import { SITE_NAME, SITE_URL } from "@/src/lib/site";

import "./globals.css";

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),

	title: {
		default: "Domy modułowe i pawilony modułowe – Mazowieckie | Warszawa | Mińsk Mazowiecki",
		template: `%s | ${SITE_NAME}`,
	},

	description:
		"Domy modułowe, pawilony handlowe i kontenery biurowe w województwie mazowieckim. Projekt, produkcja, transport, montaż i indywidualna wycena.",

	alternates: {
		canonical: "/",
	},

	openGraph: {
		title: "Domy modułowe i pawilony modułowe – Mazowieckie | Warszawa | Mińsk Mazowiecki",
		description:
			"Domy modułowe i pawilony modułowe dla klientów z Mazowsza. Projekt, produkcja, transport, montaż i indywidualna wycena.",
		url: SITE_URL,
		siteName: SITE_NAME,
		locale: "pl_PL",
		type: "website",
		images: [
			{
				url: "/opengraph-image",
				width: 1200,
				height: 630,
				alt: `Domy modułowe i pawilony modułowe — ${SITE_NAME}`,
			},
		],
	},

	twitter: {
		card: "summary_large_image",
		title: `Domy modułowe i pawilony modułowe — ${SITE_NAME}`,
		description:
			"Domy modułowe i pawilony modułowe na Mazowszu. Projekt, produkcja, transport, montaż i indywidualna wycena.",
		images: ["/opengraph-image"],
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
		icon: [{ url: "/favicon.ico" }, { url: "/icon-192.png", sizes: "192x192", type: "image/png" }],
		apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
	},

	manifest: "/site.webmanifest",

	category: "construction",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pl" data-scroll-behavior="smooth">
			<body>
				<a
					href="#main-content"
					className="fixed left-4 top-4 z-[110] -translate-y-24 rounded-full bg-[#13272f] px-5 py-3 font-semibold text-white transition focus:translate-y-0"
				>
					Przejdź do treści
				</a>

				{children}
				<GoogleAdsConsent />
			</body>
		</html>
	);
}
