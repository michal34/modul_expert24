import type { Metadata } from "next";
import Link from "next/link";

import SeoLandingPage, { type SeoFaq, type SeoSection } from "@/components/seo/SeoLandingPage";
import {
	createBreadcrumbSchema,
	createFaqSchema,
	createSeoMetadata,
	createServiceSchema,
} from "@/src/lib/seo";

const PATH = "/domy-modulowe";

export const metadata: Metadata = createSeoMetadata({
	title: "Domy modułowe — projekt, produkcja i montaż | Moduł Expert24",
	description:
		"Domy modułowe całoroczne i rekreacyjne na Mazowszu. Poznaj zakres projektu, produkcji, transportu, montażu oraz elementy wpływające na wycenę.",
	path: PATH,
});

const faqs: SeoFaq[] = [
	{
		question: "Czy dom modułowy może być całoroczny?",
		answer:
			"Tak, jeżeli projekt, izolacja, stolarka, instalacje i ogrzewanie zostaną dobrane do użytkowania całorocznego oraz obowiązujących wymagań.",
	},
	{
		question: "Czy można zmienić układ domu modułowego?",
		answer:
			"Zakres zmian zależy od konstrukcji i wymiarów modułów. Na etapie projektu ustalamy liczbę pomieszczeń, rozmieszczenie otworów, instalacje i standard wykończenia.",
	},
	{
		question: "Od czego zależy cena domu modułowego?",
		answer:
			"Na cenę wpływają między innymi metraż, układ, standard przegród, instalacje, wyposażenie, elewacja, transport, montaż i warunki na działce.",
	},
	{
		question: "Czy zapewniacie transport i montaż?",
		answer:
			"Zakres realizacji może obejmować transport i montaż. Możliwości logistyczne sprawdzamy dla konkretnej działki, trasy dojazdu i gabarytów modułów.",
	},
];

const sections: SeoSection[] = [
	{
		eyebrow: "Zakres realizacji",
		title: "Dom dopasowany do sposobu użytkowania i działki",
		paragraphs: [
			"Rozmowę rozpoczynamy od planowanego metrażu, liczby użytkowników, układu pomieszczeń, standardu całorocznego lub rekreacyjnego oraz lokalizacji inwestycji.",
			"Na tej podstawie można ustalić konstrukcję, przegrody, stolarkę, instalacje, elewację, wyposażenie i zakres prac wykonywanych na działce.",
		],
		cards: [
			{
				title: "Układ i metraż",
				text: "Liczba pomieszczeń, komunikacja, łazienka, kuchnia oraz rozmieszczenie okien i drzwi.",
			},
			{
				title: "Standard techniczny",
				text: "Izolacja, stolarka, ogrzewanie, wentylacja i instalacje dobrane do przeznaczenia obiektu.",
			},
			{
				title: "Wykończenie",
				text: "Uzgodniona elewacja, materiały wewnętrzne oraz zakres wyposażenia stałego.",
			},
		],
	},
	{
		eyebrow: "Przed wyceną",
		title: "Informacje, które pozwalają przygotować konkretną ofertę",
		bullets: [
			"Adres lub miejscowość planowanej inwestycji",
			"Oczekiwany metraż i liczba pomieszczeń",
			"Użytkowanie całoroczne albo rekreacyjne",
			"Preferowany standard wykończenia",
			"Zakres instalacji i wyposażenia",
			"Możliwość dojazdu oraz ustawienia modułów",
		],
		paragraphs: [
			<>
				Jeżeli chcesz wcześniej uporządkować budżet, przeczytaj również{" "}
				<Link
					href="/domy-modulowe-cena"
					className="font-semibold text-[#9a4300] underline-offset-4 hover:underline"
				>
					od czego zależy cena domu modułowego
				</Link>
				.
			</>,
		],
	},
	{
		eyebrow: "Formalności",
		title: "Technologia modułowa nie zwalnia z wymagań budowlanych",
		paragraphs: [
			"Przed zamówieniem trzeba sprawdzić przeznaczenie działki, miejscowy plan albo warunki zabudowy, parametry obiektu, dostęp do drogi i mediów oraz właściwą procedurę budowlaną.",
			<>
				Zebraliśmy podstawowe informacje w poradniku{" "}
				<Link
					href="/dom-modulowy-formalnosci"
					className="font-semibold text-[#9a4300] underline-offset-4 hover:underline"
				>
					dom modułowy — pozwolenie, zgłoszenie i formalności
				</Link>
				. Ostateczną ścieżkę należy potwierdzić z projektantem lub urzędem dla konkretnej
				inwestycji.
			</>,
		],
	},
];

const description =
	"Projektowanie i realizacja domów modułowych całorocznych oraz rekreacyjnych wraz z uzgodnionym transportem i montażem.";

export default function DomyModulowePage() {
	return (
		<SeoLandingPage
			breadcrumbLabel="Domy modułowe"
			eyebrow="Dom dla Ciebie"
			title="Domy modułowe — od projektu do montażu"
			lead="Projektujemy domy modułowe dopasowane do przeznaczenia, działki i oczekiwanego standardu. Zakres ustalamy indywidualnie przed przygotowaniem wyceny."
			secondaryCta={{
				label: "Sprawdź, od czego zależy cena",
				href: "/domy-modulowe-cena",
			}}
			highlights={[
				{
					title: "Indywidualny układ",
					text: "Metraż i pomieszczenia ustalane na podstawie potrzeb użytkowników.",
				},
				{
					title: "Standard całoroczny",
					text: "Możliwość doboru izolacji oraz instalacji do użytkowania przez cały rok.",
				},
				{
					title: "Produkcja w hali",
					text: "Znaczna część prac odbywa się w kontrolowanych warunkach.",
				},
				{
					title: "Transport i montaż",
					text: "Logistyka przygotowana dla lokalizacji, dojazdu i gabarytów obiektu.",
				},
			]}
			sections={sections}
			faqs={faqs}
			relatedLinks={[
				{
					title: "Domy modułowe Mińsk Mazowiecki",
					description: "Oferta dla Mińska Mazowieckiego i okolicznych miejscowości.",
					href: "/domy-modulowe-minsk-mazowiecki",
				},
				{
					title: "Domy modułowe Warszawa",
					description: "Projekt, transport i montaż na terenie Warszawy i okolic.",
					href: "/domy-modulowe-warszawa",
				},
				{
					title: "Domy modułowe — cena",
					description: "Elementy, które wpływają na zakres i koszt realizacji.",
					href: "/domy-modulowe-cena",
				},
			]}
			ctaTitle="Planujesz dom modułowy?"
			ctaText="Podaj metraż, liczbę pomieszczeń, standard oraz lokalizację. Na tej podstawie przygotujemy indywidualną propozycję."
			jsonLd={[
				createServiceSchema({
					name: "Domy modułowe",
					description,
					path: PATH,
					serviceType: ["Domy modułowe", "Domy modułowe całoroczne", "Domy rekreacyjne"],
				}),
				createFaqSchema(faqs),
				createBreadcrumbSchema("Domy modułowe", PATH),
			]}
		/>
	);
}
