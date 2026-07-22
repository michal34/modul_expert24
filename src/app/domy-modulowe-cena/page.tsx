import type { Metadata } from "next";
import Link from "next/link";

import SeoLandingPage, { type SeoFaq, type SeoSection } from "@/components/seo/SeoLandingPage";
import {
	createBreadcrumbSchema,
	createFaqSchema,
	createSeoMetadata,
	createServiceSchema,
} from "@/src/lib/seo";

const PATH = "/domy-modulowe-cena";

export const metadata: Metadata = createSeoMetadata({
	title: "Domy modułowe – cena i zakres wyceny | Moduł Expert24",
	description:
		"Sprawdź, co wpływa na cenę domu modułowego: metraż, konstrukcja, elewacja, instalacje, wykończenie, transport i montaż. Zamów indywidualną wycenę.",
	path: PATH,
});

const faqs: SeoFaq[] = [
	{
		question: "Ile kosztuje dom modułowy?",
		answer:
			"Nie ma jednej ceny dla wszystkich realizacji. Koszt zależy od powierzchni, układu, standardu konstrukcji i wykończenia, instalacji, wyposażenia oraz miejsca transportu i montażu.",
	},
	{
		question: "Czy cena obejmuje transport i montaż?",
		answer:
			"Zakres wyceny jest każdorazowo wskazany w ofercie. Transport i montaż zależą od lokalizacji, liczby modułów, warunków dojazdu oraz przygotowania działki.",
	},
	{
		question: "Co trzeba podać, żeby otrzymać wycenę?",
		answer:
			"Najważniejsze informacje to lokalizacja, przeznaczenie obiektu, orientacyjny metraż, liczba pomieszczeń, oczekiwany standard oraz planowany termin realizacji.",
	},
	{
		question: "Czy mniejszy dom zawsze ma niższą cenę za metr?",
		answer:
			"Nie zawsze. W każdym domu występują elementy stałe, takie jak instalacje, łazienka, kuchnia, transport i montaż, dlatego prosty koszt za metr nie pokazuje pełnego obrazu.",
	},
	{
		question: "Czy można etapami ograniczyć zakres wykończenia?",
		answer:
			"Zakres realizacji można omówić indywidualnie. Trzeba jednak jasno określić, które prace i materiały pozostają po stronie inwestora, aby porównanie ofert było rzetelne.",
	},
];

const sections: SeoSection[] = [
	{
		eyebrow: "Najważniejsze czynniki",
		title: "Od czego zależy cena domu modułowego?",
		paragraphs: [
			"Dwie realizacje o podobnym metrażu mogą mieć różną cenę, jeśli różnią się układem, liczbą przeszkleń, standardem izolacji, elewacją, instalacjami lub wyposażeniem. Dlatego wiarygodna wycena powinna opisywać nie tylko kwotę, lecz również dokładny zakres.",
		],
		cards: [
			{
				title: "Powierzchnia i bryła",
				text: "Metraż, liczba modułów, wysokość, układ pomieszczeń i stopień skomplikowania konstrukcji.",
			},
			{
				title: "Stolarka",
				text: "Liczba, wymiary i parametry okien, drzwi, witryn oraz dodatkowych osłon.",
			},
			{
				title: "Elewacja",
				text: "Wybrany materiał, kolorystyka, detale i sposób łączenia różnych okładzin.",
			},
			{
				title: "Instalacje",
				text: "Elektryka, wod-kan, ogrzewanie, wentylacja, klimatyzacja i przygotowanie pod wyposażenie.",
			},
			{
				title: "Wykończenie",
				text: "Zakres prac wewnętrznych, podłogi, ściany, łazienka, kuchnia i elementy dodatkowe.",
			},
			{
				title: "Transport i montaż",
				text: "Odległość, gabaryty, warunki dojazdu, rozładunek, ustawienie i łączenie modułów.",
			},
		],
	},
	{
		eyebrow: "Zakres oferty",
		title: "Jak czytać wycenę domu modułowego?",
		paragraphs: [
			"Najniższa kwota nie zawsze oznacza najkorzystniejszą ofertę. Przed porównaniem sprawdź, czy ceny obejmują ten sam etap wykonania, parametry materiałów, instalacje, transport, montaż oraz dokumentację techniczną.",
		],
		bullets: [
			"Dokładne wymiary i powierzchnia obiektu",
			"Opis konstrukcji, przegród i elewacji",
			"Parametry oraz liczba okien i drzwi",
			"Zakres instalacji i wyposażenia",
			"Standard wykończenia wnętrza",
			"Transport, rozładunek i montaż",
			"Prace pozostające po stronie inwestora",
			"Warunki płatności i termin ważności oferty",
		],
	},
	{
		eyebrow: "Budżet",
		title: "Jak przygotować zapytanie, żeby dostać dokładniejszą cenę?",
		paragraphs: [
			"Zamiast pytać wyłącznie o koszt metra kwadratowego, opisz sposób użytkowania domu. Wskaż, ile osób będzie z niego korzystać, jakie pomieszczenia są potrzebne, czy obiekt ma być całoroczny i gdzie ma zostać ustawiony.",
			"Jeżeli masz plan działki, szkic układu lub przykłady stylistyki, dołącz je do wiadomości. Pozwala to szybciej ocenić realny zakres i ogranicza liczbę założeń przy pierwszej kalkulacji.",
		],
		cards: [
			{ title: "Lokalizacja", text: "Miejscowość i podstawowe informacje o dojeździe na działkę." },
			{ title: "Metraż", text: "Orientacyjna powierzchnia oraz liczba kondygnacji i modułów." },
			{
				title: "Program pomieszczeń",
				text: "Liczba sypialni, łazienek, kuchnia, salon i dodatkowe funkcje.",
			},
			{
				title: "Standard",
				text: "Stan konstrukcyjny, częściowe wykończenie albo szerszy zakres prac.",
			},
			{ title: "Instalacje", text: "Oczekiwane ogrzewanie, wentylacja i pozostałe systemy." },
			{ title: "Termin", text: "Planowany moment rozpoczęcia i docelowy termin użytkowania." },
		],
	},
	{
		eyebrow: "Bez ukrytych założeń",
		title: "Dlaczego nie publikujemy jednej uniwersalnej ceny?",
		paragraphs: [
			"Jedna liczba bez opisu standardu mogłaby wprowadzać w błąd. Cena domu bez transportu, fundamentu, instalacji lub wykończenia nie jest porównywalna z ofertą obejmującą szerszy zakres.",
			<>
				Po ustaleniu potrzeb przygotowujemy indywidualną ofertę. Możesz wcześniej zobaczyć{" "}
				<Link
					href="/modele"
					className="font-semibold text-[#c66c0d] underline-offset-4 hover:underline"
				>
					dostępne modele i zakres konfiguracji
				</Link>
				.
			</>,
		],
	},
];

const description =
	"Indywidualna wycena domu modułowego uwzględniająca metraż, konstrukcję, elewację, instalacje, wykończenie, transport i montaż.";

export default function DomyModuloweCenaPage() {
	return (
		<SeoLandingPage
			breadcrumbLabel="Domy modułowe – cena"
			eyebrow="Przewodnik po kosztach"
			title="Domy modułowe — cena i zakres wyceny"
			lead="Koszt domu modułowego zależy od znacznie większej liczby elementów niż sam metraż. Wyjaśniamy, co powinno znaleźć się w ofercie i jakie informacje są potrzebne do przygotowania rzetelnej kalkulacji."
			highlights={[
				{
					title: "Metraż i układ",
					text: "Powierzchnia, liczba pomieszczeń, łazienek oraz podział obiektu na moduły.",
				},
				{
					title: "Standard",
					text: "Konstrukcja, izolacja, elewacja, stolarka i zakres wykończenia wnętrza.",
				},
				{
					title: "Instalacje",
					text: "Elektryka, wod-kan, ogrzewanie, wentylacja i rozwiązania dodatkowe.",
				},
				{
					title: "Logistyka",
					text: "Transport, dojazd na działkę, rozładunek, ustawienie i montaż modułów.",
				},
			]}
			sections={sections}
			faqs={faqs}
			relatedLinks={[
				{
					title: "Domy modułowe Warszawa",
					description: "Oferta dla inwestycji w Warszawie i okolicach.",
					href: "/domy-modulowe-warszawa",
				},
				{
					title: "Domy modułowe Mińsk Mazowiecki",
					description: "Projekt, transport i montaż w Mińsku oraz okolicy.",
					href: "/domy-modulowe-minsk-mazowiecki",
				},
				{
					title: "Formalności",
					description: "Sprawdź, co należy ustalić przed rozpoczęciem inwestycji.",
					href: "/dom-modulowy-formalnosci",
				},
			]}
			ctaTitle="Chcesz poznać cenę swojego domu?"
			ctaText="Podaj lokalizację, orientacyjny metraż, liczbę pomieszczeń i oczekiwany standard. Przygotujemy pytania uzupełniające oraz indywidualną wycenę."
			jsonLd={[
				createServiceSchema({
					name: "Wycena domu modułowego",
					description,
					path: PATH,
					serviceType: [
						"Domy modułowe",
						"Wycena domu modułowego",
						"Projektowanie domów modułowych",
					],
				}),
				createFaqSchema(faqs),
				createBreadcrumbSchema("Domy modułowe – cena", PATH),
			]}
		/>
	);
}
