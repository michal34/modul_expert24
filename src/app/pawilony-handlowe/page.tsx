import type { Metadata } from "next";
import Link from "next/link";

import SeoLandingPage, { type SeoFaq, type SeoSection } from "@/components/seo/SeoLandingPage";
import {
	createBreadcrumbSchema,
	createFaqSchema,
	createSeoMetadata,
	createServiceSchema,
} from "@/src/lib/seo";

const PATH = "/pawilony-handlowe";

export const metadata: Metadata = createSeoMetadata({
	title: "Pawilony handlowe – producent i wycena | Moduł Expert24",
	description:
		"Pawilony handlowe i usługowe na zamówienie. Dobór wymiarów, elewacji, witryn i instalacji, a także transport oraz montaż. Zamów indywidualną wycenę.",
	path: PATH,
});

const faqs: SeoFaq[] = [
	{
		question: "Ile kosztuje pawilon handlowy?",
		answer:
			"Cena zależy między innymi od wymiarów, liczby przeszkleń, rodzaju elewacji, instalacji, wyposażenia, miejsca dostawy i zakresu montażu. Dlatego wycenę przygotowujemy po ustaleniu konfiguracji obiektu.",
	},
	{
		question: "Czy pawilon może być używany przez cały rok?",
		answer:
			"Tak, jeżeli jego przegrody, ogrzewanie, wentylacja i instalacje zostaną odpowiednio dobrane do całorocznego sposobu użytkowania.",
	},
	{
		question: "Czy można zmienić układ okien, drzwi i pomieszczeń?",
		answer:
			"Tak. Rozmieszczenie otworów, układ funkcjonalny, elewację i wyposażenie ustalamy indywidualnie, z uwzględnieniem możliwości technicznych konstrukcji.",
	},
	{
		question: "Czy zapewniacie transport i montaż pawilonu?",
		answer:
			"Tak. Zakres oferty może obejmować transport, ustawienie obiektu, połączenie modułów i uzgodnione prace montażowe na miejscu.",
	},
	{
		question: "Czy pawilon handlowy wymaga pozwolenia na budowę?",
		answer:
			"To zależy od parametrów obiektu, sposobu posadowienia, planowanego czasu użytkowania, lokalizacji i przeznaczenia. Przed zamówieniem należy sprawdzić wymagania dla konkretnej działki i inwestycji.",
	},
];

const sections: SeoSection[] = [
	{
		eyebrow: "Zastosowania",
		title: "Pawilon dopasowany do rodzaju działalności",
		paragraphs: [
			"Pawilon handlowy może pełnić funkcję sklepu, punktu usługowego, salonu sprzedaży, małej gastronomii, showroomu albo sezonowego punktu obsługi. Układ powinien wynikać z liczby stanowisk, potrzebnego zaplecza, ciągów komunikacyjnych i sposobu obsługi klientów.",
		],
		cards: [
			{
				title: "Sklep i punkt sprzedaży",
				text: "Witryny ekspozycyjne, wejście dla klientów, miejsce na ladę i zaplecze magazynowe.",
			},
			{
				title: "Usługi i gabinet",
				text: "Podział na strefę obsługi, stanowiska pracy, poczekalnię i zaplecze sanitarne.",
			},
			{
				title: "Gastronomia",
				text: "Układ przygotowany pod uzgodnione instalacje, zaplecze robocze i wydawanie zamówień.",
			},
			{
				title: "Showroom",
				text: "Duże przeszklenia i przestrzeń do prezentacji produktów lub materiałów.",
			},
			{
				title: "Biuro sprzedaży",
				text: "Miejsce spotkań, stanowiska biurowe i reprezentacyjna elewacja.",
			},
			{
				title: "Punkt sezonowy",
				text: "Kompaktowa konfiguracja dopasowana do okresowej działalności i lokalizacji.",
			},
		],
	},
	{
		eyebrow: "Konfiguracja",
		title: "Wymiary, elewacja, witryny i instalacje",
		paragraphs: [
			"Gotowy model jest punktem wyjścia. Można dopasować długość i szerokość modułu, rozmieszczenie okien i drzwi, kolorystykę, rodzaj elewacji oraz uzgodniony zakres instalacji.",
			<>
				Zobacz dostępne warianty na stronie{" "}
				<Link
					href="/modele"
					className="font-semibold text-[#c66c0d] underline-offset-4 hover:underline"
				>
					modele pawilonów modułowych
				</Link>
				. W specyfikacjach podajemy zakres wymiarów i elementy, które można konfigurować.
			</>,
		],
		bullets: [
			"Rozmieszczenie witryn, okien i drzwi",
			"Elewacja i kolorystyka dopasowana do marki",
			"Układ sali sprzedaży oraz zaplecza",
			"Instalacja elektryczna, ogrzewanie i klimatyzacja",
			"Możliwość łączenia kilku modułów",
			"Transport i ustawienie w uzgodnionej lokalizacji",
		],
	},
	{
		eyebrow: "Wycena",
		title: "Co wpływa na cenę pawilonu handlowego?",
		paragraphs: [
			"Największy wpływ mają powierzchnia obiektu, konstrukcja, liczba i wielkość przeszkleń, standard elewacji, instalacje oraz wyposażenie. W wycenie trzeba również uwzględnić logistykę dostawy i warunki ustawienia modułu na działce.",
		],
		cards: [
			{
				title: "Wymiary",
				text: "Większa powierzchnia i łączenie modułów zmieniają ilość materiałów oraz zakres montażu.",
			},
			{
				title: "Przeszklenia",
				text: "Rodzaj, liczba i wymiary witryn wpływają na konstrukcję i koszt stolarki.",
			},
			{
				title: "Standard wykończenia",
				text: "Elewacja, podłogi, ściany, instalacje i dodatkowe wyposażenie są wyceniane zgodnie z ustalonym zakresem.",
			},
		],
	},
	{
		eyebrow: "Przed zamówieniem",
		title: "Lokalizacja i formalności",
		paragraphs: [
			"Przed wyborem pawilonu warto sprawdzić przeznaczenie terenu, możliwości podłączenia mediów, dojazd dla transportu oraz wymagania administracyjne dla planowanego sposobu użytkowania.",
			<>
				Technologia modułowa nie przesądza sama w sobie o rodzaju procedury. Więcej wyjaśniamy w
				poradniku{" "}
				<Link
					href="/dom-modulowy-formalnosci"
					className="font-semibold text-[#c66c0d] underline-offset-4 hover:underline"
				>
					dom modułowy i pawilon a formalności
				</Link>
				.
			</>,
		],
	},
];

const description =
	"Projektowanie i realizacja pawilonów handlowych oraz usługowych z możliwością indywidualnej konfiguracji, transportu i montażu.";

export default function PawilonyHandlowePage() {
	return (
		<SeoLandingPage
			breadcrumbLabel="Pawilony handlowe"
			eyebrow="Oferta dla biznesu"
			title="Pawilony handlowe i usługowe na zamówienie"
			lead="Zaprojektuj przestrzeń dopasowaną do sprzedaży, usług lub obsługi klientów. Ustalamy wymiary, układ, wygląd i instalacje, a następnie przygotowujemy indywidualną wycenę."
			highlights={[
				{
					title: "Indywidualny układ",
					text: "Rozmieszczenie witryn, wejść, sali sprzedaży i zaplecza zgodnie z potrzebami działalności.",
				},
				{
					title: "Konfigurowalny wygląd",
					text: "Dobór elewacji, kolorystyki i przeszkleń do lokalizacji oraz identyfikacji marki.",
				},
				{
					title: "Instalacje",
					text: "Zakres elektryki, ogrzewania, klimatyzacji i wyposażenia uzgadniany przed wyceną.",
				},
				{
					title: "Transport i montaż",
					text: "Ustalenie dostawy, ustawienia modułu i prac wykonywanych w docelowym miejscu.",
				},
			]}
			sections={sections}
			faqs={faqs}
			relatedLinks={[
				{
					title: "Kontenery biurowe",
					description: "Modułowe biura i zaplecza dla firm oraz inwestycji.",
					href: "/kontenery-biurowe",
				},
				{
					title: "Modele",
					description: "Porównaj wygląd i specyfikacje dostępnych wariantów.",
					href: "/modele",
				},
				{
					title: "Domy modułowe – cena",
					description: "Sprawdź, jakie elementy wpływają na koszt realizacji.",
					href: "/domy-modulowe-cena",
				},
			]}
			ctaTitle="Potrzebujesz pawilonu dla swojej działalności?"
			ctaText="Opisz przeznaczenie, przybliżone wymiary i miejsce ustawienia obiektu. Przygotujemy propozycję konfiguracji i indywidualną wycenę."
			jsonLd={[
				createServiceSchema({
					name: "Pawilony handlowe i usługowe",
					description,
					path: PATH,
					serviceType: ["Pawilony handlowe", "Pawilony usługowe", "Pawilony modułowe"],
				}),
				createFaqSchema(faqs),
				createBreadcrumbSchema("Pawilony handlowe", PATH),
			]}
		/>
	);
}
