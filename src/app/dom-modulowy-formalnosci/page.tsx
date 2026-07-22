import type { Metadata } from "next";
import Link from "next/link";

import SeoLandingPage, { type SeoFaq, type SeoSection } from "@/components/seo/SeoLandingPage";
import {
	SITE_URL,
	createBreadcrumbSchema,
	createFaqSchema,
	createSeoMetadata,
} from "@/src/lib/seo";

const PATH = "/dom-modulowy-formalnosci";
const UPDATED_DATE = "2026-07-22";

export const metadata: Metadata = createSeoMetadata({
	title: "Dom modułowy – pozwolenie, zgłoszenie i formalności 2026",
	description:
		"Dom modułowy a pozwolenie na budowę lub zgłoszenie. Sprawdź MPZP, warunki zabudowy, dom do 70 m², pawilon tymczasowy i zmianę sposobu użytkowania.",
	path: PATH,
});

const faqs: SeoFaq[] = [
	{
		question: "Czy dom modułowy wymaga pozwolenia na budowę?",
		answer:
			"Technologia modułowa sama o tym nie decyduje. Procedura zależy między innymi od funkcji i parametrów budynku, obszaru oddziaływania, lokalizacji oraz zgodności inwestycji z planem miejscowym albo warunkami zabudowy.",
	},
	{
		question: "Czy każdy dom modułowy do 70 m² można postawić bez pozwolenia?",
		answer:
			"Nie automatycznie. Uproszczona procedura dotyczy inwestycji spełniających warunki określone w przepisach. Trzeba sprawdzić między innymi powierzchnię zabudowy, liczbę kondygnacji, przeznaczenie, działkę i wymaganą dokumentację.",
	},
	{
		question: "Czy pawilon handlowy można postawić na zgłoszenie?",
		answer:
			"W niektórych przypadkach może być stosowana procedura zgłoszenia, ale zależy to od kwalifikacji obiektu, sposobu posadowienia, czasu użytkowania, przeznaczenia i lokalizacji. Ocenę należy wykonać dla konkretnej inwestycji.",
	},
	{
		question: "Co sprawdzić przed zamówieniem obiektu modułowego?",
		answer:
			"Sprawdź miejscowy plan albo potrzebę uzyskania warunków zabudowy, przeznaczenie działki, wymagane odległości, dostęp do drogi, media, możliwość transportu oraz procedurę budowlaną potwierdzoną przez projektanta lub urząd.",
	},
	{
		question: "Czy zmiana funkcji kontenera lub pawilonu wymaga zgłoszenia?",
		answer:
			"Zmiana sposobu użytkowania obiektu albo jego części może wymagać zgłoszenia, szczególnie jeśli zmienia warunki bezpieczeństwa, higieny, ochrony środowiska lub obciążenia obiektu. Zakres należy sprawdzić przed rozpoczęciem nowej działalności.",
	},
];

const officialLinkClass = "font-semibold text-[#c66c0d] underline underline-offset-4";

const sections: SeoSection[] = [
	{
		eyebrow: "Najważniejsza zasada",
		title: "„Modułowy” opisuje technologię, a nie zwolnienie z przepisów",
		paragraphs: [
			"O wymaganej procedurze nie przesądza nazwa handlowa obiektu ani fakt, że został wykonany w hali. Urząd i projektant oceniają przede wszystkim funkcję, parametry, sposób posadowienia, planowany okres użytkowania, obszar oddziaływania oraz lokalizację.",
			"Ten sam moduł może zostać zakwalifikowany inaczej jako dom mieszkalny, obiekt rekreacyjny, biuro, pawilon handlowy albo obiekt tymczasowy. Dlatego formalności trzeba ustalić przed produkcją, a nie dopiero przed dostawą.",
		],
	},
	{
		eyebrow: "Krok 1",
		title: "Sprawdź miejscowy plan albo warunki zabudowy",
		paragraphs: [
			"Miejscowy plan zagospodarowania przestrzennego może określać przeznaczenie terenu, dopuszczalną zabudowę, wysokość, geometrię dachu, linie zabudowy i inne wymagania. Projekt domu lub pawilonu powinien być z nimi zgodny.",
			"Jeżeli dla działki nie obowiązuje plan miejscowy, zwykle potrzebna jest decyzja o warunkach zabudowy. Samo prawo własności działki nie oznacza jeszcze, że można postawić na niej dowolny obiekt.",
		],
		bullets: [
			"Przeznaczenie działki i dopuszczona funkcja obiektu",
			"Linia zabudowy oraz odległości od granic",
			"Dopuszczalna powierzchnia i wysokość zabudowy",
			"Wymagania dotyczące dachu i elewacji",
			"Dostęp do drogi publicznej",
			"Możliwość wykonania lub podłączenia instalacji",
		],
	},
	{
		eyebrow: "Dom mieszkalny",
		title: "Pozwolenie na budowę czy zgłoszenie?",
		paragraphs: [
			<>
				Według informacji rządowych budowa domu jednorodzinnego wymaga uzyskania zgody w jednej z
				przewidzianych procedur: pozwolenia na budowę albo zgłoszenia. Pozwolenie jest wymagane
				między innymi wtedy, gdy obszar oddziaływania projektowanego domu wykracza poza działkę lub
				wymagane jest postępowanie środowiskowe. Szczegóły opisuje usługa{" "}
				<a
					href="https://www.gov.pl/web/gov/uzyskaj-zgode-na-budowe-domu"
					target="_blank"
					rel="noopener noreferrer"
					className={officialLinkClass}
				>
					„Uzyskaj zgodę na budowę domu” na gov.pl
				</a>
				.
			</>,
			"Projektant określa obszar oddziaływania i sprawdza zgodność projektu z przepisami. To dlatego procedury nie powinno się wybierać wyłącznie na podstawie metrażu lub technologii wykonania.",
		],
		cards: [
			{
				title: "Pozwolenie na budowę",
				text: "Decyzja administracyjna stosowana między innymi wtedy, gdy inwestycja nie spełnia warunków pozwalających na zgłoszenie.",
			},
			{
				title: "Zgłoszenie z projektem",
				text: "Możliwe dla inwestycji spełniającej wymagania ustawowe; urząd może wnieść sprzeciw w przewidzianym terminie.",
			},
			{
				title: "Ocena projektanta",
				text: "Projektant sprawdza parametry, działkę, obszar oddziaływania i dokumentację niezbędną do właściwej procedury.",
			},
		],
	},
	{
		eyebrow: "Dom do 70 m²",
		title: "Uproszczona procedura ma konkretne warunki",
		paragraphs: [
			<>
				Materiały rządowe opisują uproszczone zgłoszenie dla wolno stojących domów o powierzchni
				zabudowy do 70 m², nie więcej niż dwóch kondygnacjach, realizowanych przy spełnieniu
				dodatkowych warunków. Nadal potrzebne są między innymi dokumenty dotyczące działki i
				projekt. Zobacz oficjalną stronę{" "}
				<a
					href="https://www.gov.pl/web/mieszkanie-dla-ciebie/dom-bez-formalnosci"
					target="_blank"
					rel="noopener noreferrer"
					className={officialLinkClass}
				>
					„Dom bez formalności”
				</a>
				.
			</>,
			"Nie należy utożsamiać powierzchni użytkowej z powierzchnią zabudowy. Nie każdy domek oferowany jako „70 m²” automatycznie spełni wymagania uproszczonej procedury.",
		],
	},
	{
		eyebrow: "Pawilony i kontenery",
		title: "Znaczenie ma funkcja, czas użytkowania i sposób ustawienia",
		paragraphs: [
			<>
				Dla części tymczasowych obiektów budowlanych przepisy przewidują zgłoszenie i obowiązek
				przeniesienia albo rozbiórki w terminie wskazanym w przepisach. Jeżeli obiekt ma pozostać
				dłużej, może być konieczne uzyskanie pozwolenia przed upływem tego terminu. Aktualną
				procedurę opisuje{" "}
				<a
					href="https://www.biznes.gov.pl/pl/portal/ou550"
					target="_blank"
					rel="noopener noreferrer"
					className={officialLinkClass}
				>
					biznes.gov.pl — zgłoszenie budowy lub innych robót
				</a>
				.
			</>,
			"Pawilon działający jako sklep, gastronomia, gabinet lub biuro musi również spełniać wymagania wynikające ze sposobu użytkowania, bezpieczeństwa, instalacji, dostępu i lokalnych przepisów. Sama możliwość przewiezienia obiektu nie oznacza automatycznie braku formalności.",
			<>
				Zmiana dotychczasowej funkcji obiektu może wymagać osobnego zgłoszenia. Informacje urzędowe
				znajdują się w usłudze{" "}
				<a
					href="https://www.biznes.gov.pl/pl/portal/ou555"
					target="_blank"
					rel="noopener noreferrer"
					className={officialLinkClass}
				>
					zmiana sposobu użytkowania obiektu budowlanego
				</a>
				.
			</>,
		],
	},
	{
		eyebrow: "Lista kontrolna",
		title: "Co ustalić przed zamówieniem domu lub pawilonu?",
		bullets: [
			"Numer działki, jej przeznaczenie i stan prawny",
			"Miejscowy plan albo decyzja o warunkach zabudowy",
			"Docelowa funkcja i planowany czas użytkowania obiektu",
			"Powierzchnia zabudowy, wysokość i liczba kondygnacji",
			"Odległości od granic oraz obszar oddziaływania",
			"Dostęp do drogi i możliwość dojazdu transportu",
			"Warunki podłączenia prądu, wody i kanalizacji",
			"Projekt oraz procedura potwierdzona przez uprawnionego projektanta",
		],
		paragraphs: [
			"Artykuł ma charakter informacyjny i nie zastępuje analizy projektu, porady prawnej ani stanowiska właściwego urzędu. Przepisy i interpretacje mogą się zmieniać, dlatego przed inwestycją należy potwierdzić aktualne wymagania.",
		],
	},
];

const articleSchema = {
	"@context": "https://schema.org",
	"@type": "Article",
	headline: "Dom modułowy – pozwolenie, zgłoszenie i formalności 2026",
	description:
		"Poradnik o formalnościach związanych z domami modułowymi, pawilonami i kontenerami.",
	datePublished: UPDATED_DATE,
	dateModified: UPDATED_DATE,
	mainEntityOfPage: `${SITE_URL}${PATH}`,
	author: {
		"@type": "Organization",
		name: "Moduł Expert 24",
		url: SITE_URL,
	},
	publisher: {
		"@type": "Organization",
		name: "Moduł Expert 24",
		url: SITE_URL,
		logo: {
			"@type": "ImageObject",
			url: `${SITE_URL}/images/logo.svg`,
		},
	},
};

export default function DomModulowyFormalnosciPage() {
	return (
		<SeoLandingPage
			breadcrumbLabel="Dom modułowy – formalności"
			eyebrow="Poradnik inwestora"
			title="Dom modułowy — pozwolenie, zgłoszenie i formalności"
			lead="Technologia modułowa może przyspieszyć produkcję i montaż, ale nie usuwa wymagań administracyjnych. Wyjaśniamy, co sprawdzić przed zamówieniem domu, pawilonu lub kontenera."
			updatedAt="22 lipca 2026"
			highlights={[
				{
					title: "MPZP lub WZ",
					text: "Najpierw sprawdź, jaka zabudowa i funkcja są dopuszczone na konkretnej działce.",
				},
				{
					title: "Funkcja obiektu",
					text: "Dom, rekreacja, handel i biuro mogą podlegać różnym wymaganiom użytkowym.",
				},
				{
					title: "Parametry projektu",
					text: "Powierzchnia zabudowy, wysokość, kondygnacje i obszar oddziaływania wpływają na procedurę.",
				},
				{
					title: "Potwierdzenie",
					text: "Właściwą ścieżkę powinien potwierdzić projektant lub urząd dla konkretnej inwestycji.",
				},
			]}
			sections={sections}
			faqs={faqs}
			relatedLinks={[
				{
					title: "Domy modułowe – cena",
					description: "Sprawdź elementy wpływające na koszt inwestycji.",
					href: "/domy-modulowe-cena",
				},
				{
					title: "Pawilony handlowe",
					description: "Poznaj możliwości konfiguracji obiektu dla biznesu.",
					href: "/pawilony-handlowe",
				},
				{
					title: "Kontenery biurowe",
					description: "Zobacz biura i zaplecza tworzone z modułów.",
					href: "/kontenery-biurowe",
				},
			]}
			ctaTitle="Masz działkę i pomysł na obiekt?"
			ctaText="Napisz, gdzie znajduje się działka, do czego ma służyć obiekt i jaki metraż planujesz. Pomożemy określić informacje techniczne potrzebne do dalszych ustaleń z projektantem."
			jsonLd={[
				articleSchema,
				createFaqSchema(faqs),
				createBreadcrumbSchema("Dom modułowy – formalności", PATH),
			]}
		/>
	);
}
