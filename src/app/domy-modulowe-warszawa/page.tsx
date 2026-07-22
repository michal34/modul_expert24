import type { Metadata } from "next";
import Link from "next/link";

import SeoLandingPage, { type SeoFaq, type SeoSection } from "@/components/seo/SeoLandingPage";
import {
	createBreadcrumbSchema,
	createFaqSchema,
	createSeoMetadata,
	createServiceSchema,
} from "@/src/lib/seo";

const PATH = "/domy-modulowe-warszawa";

export const metadata: Metadata = createSeoMetadata({
	title: "Domy modułowe Warszawa – projekt i wycena | Moduł Expert24",
	description:
		"Domy i obiekty modułowe dla klientów z Warszawy i okolic. Indywidualna konfiguracja, produkcja, transport oraz montaż. Zapytaj o możliwości realizacji.",
	path: PATH,
});

const faqs: SeoFaq[] = [
	{
		question: "Czy realizujecie domy modułowe w Warszawie?",
		answer:
			"Tak. Obsługujemy klientów z Warszawy i okolic, a warunki transportu oraz montażu ustalamy indywidualnie dla konkretnej lokalizacji.",
	},
	{
		question: "Ile kosztuje transport domu modułowego do Warszawy?",
		answer:
			"Koszt zależy od liczby i wymiarów modułów, dokładnej trasy, możliwości dojazdu, wymaganej organizacji rozładunku oraz zakresu montażu.",
	},
	{
		question: "Czy dom modułowy może być całoroczny?",
		answer:
			"Tak. Standard przegród, ogrzewania, wentylacji i instalacji trzeba dopasować do całorocznego sposobu użytkowania oraz wymagań projektu.",
	},
	{
		question: "Czy można zmienić gotowy projekt?",
		answer:
			"Zakres zmian zależy od konstrukcji i wybranego modelu. Ustalamy wymiary, układ, stolarkę, elewację i wyposażenie przed przygotowaniem finalnej wyceny.",
	},
	{
		question: "Czy pomagacie w formalnościach?",
		answer:
			"Możemy przekazać informacje techniczne dotyczące planowanego obiektu. Właściwą procedurę dla działki powinien potwierdzić projektant oraz odpowiedni urząd.",
	},
];

const sections: SeoSection[] = [
	{
		eyebrow: "Warszawa i okolice",
		title: "Dom modułowy dopasowany do działki i sposobu użytkowania",
		paragraphs: [
			"Projekt może dotyczyć domu całorocznego, obiektu rekreacyjnego, dodatkowej przestrzeni na działce albo budynku przeznaczonego pod wynajem. Punktem wyjścia jest funkcja, planowany metraż, układ pomieszczeń i oczekiwany standard.",
			"Na terenach miejskich i podmiejskich szczególnie ważne są warunki dojazdu, miejsce rozładunku, odległości od granic działki, przebieg instalacji oraz możliwość sprawnego ustawienia modułów.",
		],
		cards: [
			{
				title: "Dom całoroczny",
				text: "Układ i instalacje dobierane do stałego użytkowania oraz wymagań projektu.",
			},
			{
				title: "Dom rekreacyjny",
				text: "Kompaktowa przestrzeń wypoczynkowa dopasowana do działki i częstotliwości użytkowania.",
			},
			{
				title: "Obiekt pod wynajem",
				text: "Konfiguracja uwzględniająca funkcjonalność, trwałość i prostą obsługę użytkowników.",
			},
		],
	},
	{
		eyebrow: "Logistyka",
		title: "Transport i montaż domu modułowego w Warszawie",
		paragraphs: [
			"Przed realizacją trzeba ocenić trasę dojazdu, szerokość bramy, dostęp dla pojazdu transportowego, możliwość pracy urządzenia rozładunkowego i przygotowanie miejsca posadowienia. Te informacje wpływają na sposób podziału obiektu na moduły i kalkulację dostawy.",
		],
		bullets: [
			"Dokładny adres i warunki wjazdu na działkę",
			"Planowana lokalizacja obiektu względem granic i zabudowy",
			"Liczba, szerokość i długość transportowanych modułów",
			"Miejsce potrzebne do rozładunku i montażu",
			"Stan przygotowania fundamentu lub podpór",
			"Zakres podłączeń wykonywanych po ustawieniu obiektu",
		],
	},
	{
		eyebrow: "Proces",
		title: "Od pierwszej rozmowy do gotowego obiektu",
		cards: [
			{
				title: "1. Założenia",
				text: "Ustalamy funkcję, metraż, liczbę pomieszczeń, lokalizację i budżet inwestycji.",
			},
			{
				title: "2. Konfiguracja",
				text: "Dobieramy układ, stolarkę, elewację, instalacje i standard wykończenia.",
			},
			{
				title: "3. Produkcja",
				text: "Moduły są wykonywane zgodnie z uzgodnioną konfiguracją i zakresem prac.",
			},
			{
				title: "4. Dostawa",
				text: "Organizujemy transport oraz uzgodnione czynności związane z ustawieniem i montażem.",
			},
		],
	},
	{
		eyebrow: "Oferta",
		title: "Jak przygotować się do pierwszej wyceny?",
		paragraphs: [
			"Na początku wystarczą podstawowe informacje: lokalizacja działki, planowane przeznaczenie, orientacyjny metraż, liczba pomieszczeń oraz oczekiwany standard. Jeśli masz mapę działki, inspiracje lub własny szkic, możesz dołączyć je do zapytania.",
			<>
				Jeśli inwestycja znajduje się bliżej Mińska Mazowieckiego, sprawdź również stronę{" "}
				<Link
					href="/domy-modulowe-minsk-mazowiecki"
					className="font-semibold text-[#c66c0d] underline-offset-4 hover:underline"
				>
					domy modułowe Mińsk Mazowiecki
				</Link>
				.
			</>,
		],
	},
];

const description =
	"Projektowanie i realizacja domów oraz obiektów modułowych dla klientów z Warszawy i okolic, wraz z indywidualną konfiguracją, transportem i montażem.";

export default function DomyModuloweWarszawaPage() {
	return (
		<SeoLandingPage
			breadcrumbLabel="Domy modułowe Warszawa"
			eyebrow="Warszawa i okolice"
			title="Domy modułowe Warszawa"
			lead="Projektujemy i realizujemy domy oraz obiekty modułowe dopasowane do działki, sposobu użytkowania i oczekiwanego standardu. Ustalamy również logistykę dostawy oraz montażu w Warszawie i okolicach."
			highlights={[
				{
					title: "Indywidualny projekt",
					text: "Układ, wymiary, elewacja i instalacje dobierane do potrzeb inwestora.",
				},
				{
					title: "Użytkowanie całoroczne",
					text: "Możliwość konfiguracji przegród i instalacji pod stałe użytkowanie.",
				},
				{
					title: "Produkcja w hali",
					text: "Znaczna część prac wykonywana przed dostawą obiektu na działkę.",
				},
				{
					title: "Dostawa do Warszawy",
					text: "Transport i sposób montażu ustalane na podstawie warunków konkretnej lokalizacji.",
				},
			]}
			sections={sections}
			faqs={faqs}
			relatedLinks={[
				{
					title: "Domy modułowe – cena",
					description: "Zobacz, od czego zależy koszt domu modułowego.",
					href: "/domy-modulowe-cena",
				},
				{
					title: "Formalności",
					description: "Sprawdź pozwolenie, zgłoszenie i dokumenty przed budową.",
					href: "/dom-modulowy-formalnosci",
				},
				{
					title: "Modele",
					description: "Poznaj dostępne warianty i możliwości konfiguracji.",
					href: "/modele",
				},
			]}
			ctaTitle="Planujesz dom modułowy w Warszawie?"
			ctaText="Prześlij lokalizację, planowany metraż i krótki opis potrzeb. Wrócimy z pytaniami potrzebnymi do przygotowania konfiguracji oraz wyceny."
			jsonLd={[
				createServiceSchema({
					name: "Domy modułowe Warszawa",
					description,
					path: PATH,
					serviceType: [
						"Domy modułowe",
						"Domy modułowe całoroczne",
						"Transport i montaż domów modułowych",
					],
					areas: ["Warszawa", "Mazowieckie"],
				}),
				createFaqSchema(faqs),
				createBreadcrumbSchema("Domy modułowe Warszawa", PATH),
			]}
		/>
	);
}
