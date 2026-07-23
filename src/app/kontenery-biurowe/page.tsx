import type { Metadata } from "next";
import Link from "next/link";

import SeoLandingPage, { type SeoFaq, type SeoSection } from "@/components/seo/SeoLandingPage";
import {
	createBreadcrumbSchema,
	createFaqSchema,
	createSeoMetadata,
	createServiceSchema,
} from "@/src/lib/seo";

const PATH = "/kontenery-biurowe";

export const metadata: Metadata = createSeoMetadata({
	title: "Kontenery biurowe i biura modułowe – wycena | Moduł Expert24",
	description:
		"Kontenery biurowe i biura modułowe dopasowane do potrzeb firmy. Indywidualny układ, instalacje, elewacja, transport oraz montaż. Zapytaj o wycenę.",
	path: PATH,
});

const faqs: SeoFaq[] = [
	{
		question: "Ile kosztuje kontener biurowy?",
		answer:
			"Cena zależy od wymiarów, liczby modułów, układu, przeszkleń, standardu izolacji, instalacji, wyposażenia oraz miejsca transportu i montażu.",
	},
	{
		question: "Czy biuro modułowe może działać całorocznie?",
		answer:
			"Tak, jeżeli izolacja, ogrzewanie, wentylacja i pozostałe instalacje zostaną dobrane do całorocznego użytkowania.",
	},
	{
		question: "Czy można połączyć kilka kontenerów biurowych?",
		answer:
			"Tak. Możliwość łączenia modułów pozwala tworzyć większe pomieszczenia, osobne gabinety, sale spotkań i zaplecze. Układ trzeba uzgodnić na etapie projektu.",
	},
	{
		question: "Czy kontener może mieć łazienkę lub aneks kuchenny?",
		answer:
			"Taki zakres można przewidzieć w konfiguracji, jeżeli lokalizacja pozwala na wykonanie wymaganych przyłączy i instalacji.",
	},
	{
		question: "Czy zapewniacie dostawę kontenera biurowego?",
		answer:
			"Tak. Transport i zakres montażu wyceniamy na podstawie lokalizacji, gabarytów, warunków dojazdu oraz sposobu przygotowania miejsca ustawienia.",
	},
];

const sections: SeoSection[] = [
	{
		eyebrow: "Zastosowania",
		title: "Biuro modułowe dla firmy, inwestycji lub punktu obsługi",
		paragraphs: [
			"Kontener biurowy może pełnić funkcję samodzielnego biura, zaplecza budowy, punktu sprzedaży, portierni, sali spotkań lub dodatkowej przestrzeni przy istniejącej siedzibie. Układ dobieramy do liczby pracowników, stanowisk i wymaganego zaplecza.",
		],
		cards: [
			{
				title: "Biuro na placu budowy",
				text: "Stanowiska dla kierownictwa, miejsce spotkań i zaplecze dla dokumentacji inwestycji.",
			},
			{
				title: "Biuro sprzedaży",
				text: "Reprezentacyjna przestrzeń do obsługi klientów i prezentacji oferty.",
			},
			{
				title: "Zaplecze pracownicze",
				text: "Pomieszczenia biurowe połączone z aneksem, szatnią lub uzgodnioną strefą sanitarną.",
			},
			{
				title: "Punkt ochrony",
				text: "Kompaktowy moduł z dobrą widocznością i miejscem na niezbędne wyposażenie.",
			},
			{
				title: "Sala spotkań",
				text: "Dodatkowa przestrzeń przy zakładzie, magazynie lub siedzibie firmy.",
			},
			{
				title: "Biuro tymczasowe",
				text: "Rozwiązanie dla inwestycji lub działalności prowadzonej w określonej lokalizacji i czasie.",
			},
		],
	},
	{
		eyebrow: "Układ",
		title: "Jeden moduł albo większy zestaw biurowy",
		paragraphs: [
			"Pojedynczy moduł może pomieścić podstawowe stanowiska pracy. Połączenie kilku modułów pozwala wydzielić gabinety, open space, salę konferencyjną, aneks kuchenny, magazyn dokumentów i pomieszczenia pomocnicze.",
		],
		bullets: [
			"Open space lub osobne gabinety",
			"Sala spotkań i strefa obsługi klientów",
			"Aneks kuchenny i zaplecze socjalne",
			"Pomieszczenie sanitarne po uzgodnieniu instalacji",
			"Przeszklenia i rozmieszczenie drzwi",
			"Możliwość późniejszego rozszerzenia zestawu",
		],
	},
	{
		eyebrow: "Wyposażenie",
		title: "Co ustalamy przed przygotowaniem wyceny?",
		cards: [
			{
				title: "Liczba użytkowników",
				text: "Wpływa na powierzchnię, układ stanowisk, komunikację i wymagane zaplecze.",
			},
			{
				title: "Sposób użytkowania",
				text: "Inne potrzeby ma biuro budowy, punkt sprzedaży, portiernia i stała siedziba.",
			},
			{
				title: "Instalacje",
				text: "Uzgadniamy elektrykę, oświetlenie, ogrzewanie, klimatyzację i pozostałe przyłącza.",
			},
			{
				title: "Elewacja",
				text: "Wygląd może być dopasowany do otoczenia i identyfikacji wizualnej firmy.",
			},
			{
				title: "Lokalizacja",
				text: "Sprawdzamy warunki transportu, rozładunku, ustawienia i podłączenia obiektu.",
			},
			{
				title: "Termin użytkowania",
				text: "Planowany czas i sposób użytkowania mają znaczenie również dla formalności.",
			},
		],
	},
	{
		eyebrow: "Powiązana oferta",
		title: "Kontener biurowy czy pawilon usługowy?",
		paragraphs: [
			"Biuro modułowe jest projektowane przede wszystkim z myślą o wygodnej pracy i zapleczu firmy. Pawilon handlowy zwykle mocniej eksponuje witryny, wejście dla klientów i strefę sprzedaży. Obie funkcje można połączyć w jednym uzgodnionym układzie.",
			<>
				Jeżeli obiekt ma służyć głównie sprzedaży lub usługom, zobacz także{" "}
				<Link
					href="/pawilony-handlowe"
					className="font-semibold text-[#9a4300] underline-offset-4 hover:underline"
				>
					pawilony handlowe i usługowe
				</Link>
				.
			</>,
		],
	},
];

const description =
	"Projektowanie i realizacja kontenerów biurowych oraz biur modułowych z indywidualnym układem, instalacjami, transportem i montażem.";

export default function KonteneryBiurowePage() {
	return (
		<SeoLandingPage
			breadcrumbLabel="Kontenery biurowe"
			eyebrow="Modułowa przestrzeń do pracy"
			title="Kontenery biurowe i biura modułowe"
			lead="Stwórz biuro dopasowane do liczby pracowników, sposobu obsługi klientów i warunków lokalizacji. Moduły można konfigurować, łączyć i wyposażać w uzgodnione instalacje."
			secondaryCta={{
				label: "Zobacz pawilony handlowe",
				href: "/pawilony-handlowe",
			}}
			highlights={[
				{
					title: "Elastyczny układ",
					text: "Open space, gabinety, sala spotkań, aneks i zaplecze w zależności od potrzeb.",
				},
				{
					title: "Łączenie modułów",
					text: "Możliwość tworzenia większych zestawów biurowych i rozbudowy funkcji obiektu.",
				},
				{
					title: "Praca całoroczna",
					text: "Dobór izolacji, ogrzewania, wentylacji i klimatyzacji do planowanego użytkowania.",
				},
				{
					title: "Dostawa i montaż",
					text: "Logistyka przygotowywana dla konkretnego adresu, gabarytów i warunków działki.",
				},
			]}
			sections={sections}
			faqs={faqs}
			relatedLinks={[
				{
					title: "Pawilony handlowe",
					description: "Obiekty modułowe dla sprzedaży, usług i gastronomii.",
					href: "/pawilony-handlowe",
				},
				{
					title: "Modele",
					description: "Porównaj dostępne warianty elewacji i konfiguracji.",
					href: "/modele",
				},
				{
					title: "Formalności",
					description: "Sprawdź kwestie zgłoszenia, pozwolenia i sposobu użytkowania.",
					href: "/dom-modulowy-formalnosci",
				},
			]}
			ctaTitle="Potrzebujesz dodatkowego biura?"
			ctaText="Podaj liczbę użytkowników, potrzebne pomieszczenia, lokalizację i planowany termin. Przygotujemy propozycję układu oraz wycenę."
			jsonLd={[
				createServiceSchema({
					name: "Kontenery biurowe i biura modułowe",
					description,
					path: PATH,
					serviceType: ["Kontenery biurowe", "Biura modułowe", "Zaplecza biurowe"],
				}),
				createFaqSchema(faqs),
				createBreadcrumbSchema("Kontenery biurowe", PATH),
			]}
		/>
	);
}
