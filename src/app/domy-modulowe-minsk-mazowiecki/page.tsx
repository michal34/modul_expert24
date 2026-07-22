import Header from "@/components/sections/Header";
import Process from "@/components/sections/Process";
import PricingForm from "@/components/sections/PricingForm";
import FinalCta from "@/components/sections/FinalCta";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import type { Metadata } from "next";

const SITE_URL = "https://www.modulexpert24.pl";

const sectionTitleStyle = {
	fontSize: "clamp(30px, 4vw, 44px)",
	lineHeight: 1.1,
	letterSpacing: "-0.03em",
	color: "#13272f",
};

const bodyTextStyle = {
	maxWidth: "850px",
	fontSize: "17px",
	lineHeight: 1.75,
	color: "#53646b",
};

export const metadata: Metadata = {
	title: {
		absolute: "Domy i domki modułowe Mińsk Mazowiecki – wycena",
	},
	description:
		"Całoroczne domy i domki modułowe w Mińsku Mazowieckim. Projekt, produkcja, transport i montaż. Zobacz możliwości i zamów indywidualną wycenę.",
	alternates: {
		canonical: `${SITE_URL}/domy-modulowe-minsk-mazowiecki`,
	},
	openGraph: {
		title: "Domy i domki modułowe Mińsk Mazowiecki – wycena",
		description:
			"Projektujemy i realizujemy domy oraz domki modułowe w Mińsku Mazowieckim i okolicach.",
		url: `${SITE_URL}/domy-modulowe-minsk-mazowiecki`,
		type: "website",
		images: [
			{
				url: "/images/hero.webp",
				width: 1536,
				height: 1024,
				alt: "Nowoczesny dom modułowy Moduł Expert 24",
			},
		],
	},
};

const faqItems = [
	{
		question: "Czy wykonujecie domy modułowe w Mińsku Mazowieckim?",
		answer:
			"Tak. Obsługujemy klientów z Mińska Mazowieckiego oraz okolicznych miejscowości, takich jak Dębe Wielkie, Halinów, Sulejówek, Kałuszyn i Stanisławów.",
	},
	{
		question: "Ile kosztuje dom modułowy?",
		answer:
			"Cena domu modułowego zależy od powierzchni, układu pomieszczeń, standardu wykończenia, zastosowanych materiałów oraz zakresu prac. Każdą wycenę przygotowujemy indywidualnie.",
	},
	{
		question: "Czy dom modułowy może być całoroczny?",
		answer:
			"Tak. Dom modułowy może zostać przygotowany do użytkowania całorocznego z odpowiednią izolacją, instalacjami, ogrzewaniem i wybranym standardem wykończenia.",
	},
	{
		question: "Jak długo trwa realizacja domu modułowego?",
		answer:
			"Czas realizacji zależy od projektu, dostępności materiałów, zakresu prac oraz ustaleń z klientem. Budownictwo modułowe zwykle pozwala skrócić realizację w porównaniu z tradycyjną budową.",
	},
	{
		question: "Czy realizujecie domy modułowe również w Warszawie?",
		answer:
			"Tak. Realizujemy projekty w Warszawie, Mińsku Mazowieckim oraz w innych miejscowościach na terenie województwa mazowieckiego.",
	},
];

const faqSchema = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: faqItems.map(({ question, answer }) => ({
		"@type": "Question",
		name: question,
		acceptedAnswer: {
			"@type": "Answer",
			text: answer,
		},
	})),
};

const localServiceSchema = {
	"@context": "https://schema.org",
	"@type": "Service",
	name: "Domy i domki modułowe w Mińsku Mazowieckim",
	description:
		"Projektowanie i realizacja domów modułowych wraz z transportem i montażem w Mińsku Mazowieckim oraz okolicach.",
	url: `${SITE_URL}/domy-modulowe-minsk-mazowiecki`,
	serviceType: ["Domy modułowe", "Domki modułowe", "Domy modułowe całoroczne"],
	provider: {
		"@type": "HomeAndConstructionBusiness",
		name: "Moduł Expert 24",
		url: SITE_URL,
		telephone: "+48575203444",
	},
	areaServed: [
		{ "@type": "City", name: "Mińsk Mazowiecki" },
		{ "@type": "AdministrativeArea", name: "Mazowieckie" },
	],
};

const breadcrumbSchema = {
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: [
		{
			"@type": "ListItem",
			position: 1,
			name: "Strona główna",
			item: SITE_URL,
		},
		{
			"@type": "ListItem",
			position: 2,
			name: "Domy i domki modułowe Mińsk Mazowiecki",
			item: `${SITE_URL}/domy-modulowe-minsk-mazowiecki`,
		},
	],
};

export default function DomyModuloweMinskMazowieckiPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(localServiceSchema).replace(/</g, "\\u003c"),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
				}}
			/>

			<Header />

			<main>
				<section style={{ padding: "90px 24px", background: "#f6f8f8" }}>
					<div style={{ maxWidth: "1180px", margin: "0 auto" }}>
						<p
							style={{
								color: "#ef9228",
								fontWeight: 700,
								textTransform: "uppercase",
								letterSpacing: ".08em",
							}}
						>
							Mińsk Mazowiecki i okolice
						</p>

						<h1
							style={{
								maxWidth: "850px",
								fontSize: "clamp(38px, 5vw, 62px)",
								lineHeight: 1.08,
								margin: "16px 0",
								color: "#13272f",
							}}
						>
							Domy i domki modułowe Mińsk Mazowiecki
						</h1>

						<p style={{ maxWidth: "780px", fontSize: "20px", lineHeight: 1.7, color: "#53646b" }}>
							Moduł Expert 24 projektuje i realizuje domy oraz domki modułowe dla klientów z Mińska
							Mazowieckiego i okolic. Tworzymy obiekty dopasowane do potrzeb mieszkaniowych,
							rekreacyjnych i inwestycyjnych.
						</p>

						<a
							href="/kontakt"
							style={{
								display: "inline-flex",
								marginTop: "30px",
								padding: "14px 24px",
								borderRadius: "999px",
								background: "#ef9228",
								color: "#13272f",
								fontWeight: 700,
								textDecoration: "none",
							}}
						>
							Poproś o wycenę
						</a>
					</div>
				</section>

				<section style={{ padding: "80px 24px" }}>
					<div style={{ maxWidth: "1180px", margin: "0 auto" }}>
						<h2 style={sectionTitleStyle}>Dom lub domek modułowy dopasowany do Twoich potrzeb</h2>

						<p style={{ ...bodyTextStyle, marginTop: "24px" }}>
							Domy modułowe są dobrym rozwiązaniem dla osób, które szukają szybszej i bardziej
							elastycznej alternatywy dla tradycyjnej budowy. Mogą sprawdzić się jako dom
							całoroczny, dom rekreacyjny, budynek pod wynajem albo dodatkowy obiekt na działce.
						</p>

						<p style={{ ...bodyTextStyle, marginTop: "18px" }}>
							Obsługujemy klientów z Mińska Mazowieckiego, Dębego Wielkiego, Halinowa, Sulejówka,
							Kałuszyna, Stanisławowa, Warszawy oraz innych miejscowości na terenie Mazowsza.
						</p>

						<p style={{ ...bodyTextStyle, marginTop: "18px" }}>
							Możesz zacząć od wyboru jednego z naszych{" "}
							<Link href="/modele" style={{ color: "#c66c0d", fontWeight: 700 }}>
								modeli pawilonów i obiektów modułowych
							</Link>
							, a następnie dopasować układ, wymiary i standard wykończenia do swojej działki oraz
							planowanego sposobu użytkowania.
						</p>
					</div>
				</section>

				<section style={{ padding: "80px 24px", background: "#13272f", color: "white" }}>
					<div style={{ maxWidth: "1180px", margin: "0 auto" }}>
						<h2 style={{ ...sectionTitleStyle, color: "white" }}>
							Dlaczego warto wybrać dom modułowy?
						</h2>

						<div
							style={{
								display: "grid",
								gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
								gap: "20px",
								marginTop: "30px",
							}}
						>
							{[
								"Szybsza realizacja niż tradycyjna budowa",
								"Możliwość dopasowania układu i powierzchni",
								"Nowoczesny wygląd",
								"Opcja użytkowania całorocznego",
								"Transport i montaż",
								"Rozwiązania dla klientów prywatnych i biznesowych",
							].map((item) => (
								<div
									key={item}
									style={{
										padding: "24px",
										borderRadius: "18px",
										background: "rgba(255,255,255,.08)",
									}}
								>
									{item}
								</div>
							))}
						</div>
					</div>
				</section>

				<section style={{ padding: "80px 24px", background: "#f6f8f8" }}>
					<div style={{ maxWidth: "1180px", margin: "0 auto" }}>
						<p
							style={{
								color: "#c66c0d",
								fontWeight: 700,
								textTransform: "uppercase",
								letterSpacing: ".08em",
							}}
						>
							Zakres realizacji
						</p>

						<h2 style={{ ...sectionTitleStyle, maxWidth: "850px", marginTop: "12px" }}>
							Budowa domu modułowego w Mińsku Mazowieckim — od założeń do montażu
						</h2>

						<p style={{ ...bodyTextStyle, marginTop: "20px" }}>
							Każdą realizację rozpoczynamy od poznania przeznaczenia obiektu, oczekiwanego metrażu,
							układu pomieszczeń i miejsca montażu. Na tej podstawie przygotowujemy konfigurację
							oraz indywidualną wycenę domu lub domku modułowego.
						</p>

						<div
							style={{
								display: "grid",
								gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
								gap: "20px",
								marginTop: "34px",
							}}
						>
							{[
								[
									"1. Potrzeby i lokalizacja",
									"Ustalamy sposób użytkowania, planowany metraż oraz warunki transportu i montażu na działce.",
								],
								[
									"2. Układ i wyposażenie",
									"Dobieramy układ pomieszczeń, otwory okienne, elewację, instalacje i standard wykończenia.",
								],
								[
									"3. Produkcja modułów",
									"Elementy obiektu powstają w hali, co ułatwia kontrolę wykonania i organizację kolejnych prac.",
								],
								[
									"4. Transport i montaż",
									"Uzgadniamy logistykę dostawy, ustawienie modułów, montaż oraz końcowe sprawdzenie obiektu.",
								],
							].map(([title, description]) => (
								<article
									key={title}
									style={{
										padding: "26px",
										border: "1px solid #dce4e6",
										borderRadius: "18px",
										background: "white",
									}}
								>
									<h3 style={{ margin: 0, color: "#13272f" }}>{title}</h3>
									<p style={{ margin: "12px 0 0", lineHeight: 1.65, color: "#53646b" }}>
										{description}
									</p>
								</article>
							))}
						</div>
					</div>
				</section>

				<Process variant="house" />

				<section style={{ padding: "80px 24px" }}>
					<div style={{ maxWidth: "1180px", margin: "0 auto" }}>
						<h2 style={sectionTitleStyle}>Dom modułowy, szkieletowy czy murowany — co wybrać?</h2>

						<p style={{ ...bodyTextStyle, marginTop: "20px" }}>
							Każda technologia może być dobrym wyborem, ale różni się organizacją budowy, zakresem
							prac wykonywanych na działce i możliwością późniejszych zmian. Poniższe zestawienie
							pomaga uporządkować najważniejsze różnice przed rozmową o konkretnym projekcie.
						</p>

						<div
							style={{
								display: "grid",
								gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
								gap: "20px",
								marginTop: "30px",
							}}
						>
							{[
								[
									"Dom modułowy",
									"Znaczna część prac odbywa się w hali, a gotowe moduły są transportowane i montowane na działce.",
									"Dojazd, miejsce ustawienia modułów, zakres wykończenia i przygotowanie działki.",
								],
								[
									"Dom szkieletowy",
									"Konstrukcja jest składana z elementów szkieletowych zgodnie z wybranym systemem wykonania.",
									"Parametry przegród, jakość wykonania, ochrona konstrukcji i koordynacja instalacji.",
								],
								[
									"Dom murowany",
									"Większość prac jest prowadzona bezpośrednio na działce z wykorzystaniem technologii tradycyjnych.",
									"Harmonogram ekip, warunki pogodowe, prace mokre i koordynacja kolejnych etapów.",
								],
							].map(([technology, organization, details]) => (
								<article
									key={technology}
									style={{
										overflow: "hidden",
										border: "1px solid #dce4e6",
										borderRadius: "18px",
										background: "white",
									}}
								>
									<h3 style={{ margin: 0, padding: "20px", background: "#13272f", color: "white" }}>
										{technology}
									</h3>
									<div style={{ padding: "22px" }}>
										<p style={{ margin: 0, lineHeight: 1.65, color: "#53646b" }}>{organization}</p>
										<p
											style={{
												margin: "18px 0 0",
												paddingTop: "18px",
												borderTop: "1px solid #dce4e6",
												lineHeight: 1.65,
												color: "#13272f",
											}}
										>
											<strong>Na co zwrócić uwagę:</strong> {details}
										</p>
									</div>
								</article>
							))}
						</div>

						<p style={{ ...bodyTextStyle, marginTop: "24px" }}>
							Jeśli rozważasz budowę w Mińsku Mazowieckim lub okolicy,{" "}
							<Link href="/kontakt" style={{ color: "#c66c0d", fontWeight: 700 }}>
								opisz nam swoją działkę i oczekiwany metraż
							</Link>
							. Na tej podstawie wskażemy możliwy zakres realizacji i przygotujemy indywidualną
							wycenę.
						</p>
					</div>
				</section>

				<section style={{ padding: "80px 24px", background: "#f6f8f8" }}>
					<div style={{ maxWidth: "1180px", margin: "0 auto" }}>
						<h2 style={sectionTitleStyle}>FAQ — domy i domki modułowe Mińsk Mazowiecki</h2>

						<div style={{ marginTop: "30px", display: "grid", gap: "18px" }}>
							{faqItems.map(({ question, answer }) => (
								<details key={question}>
									<summary>{question}</summary>
									<p>{answer}</p>
								</details>
							))}
						</div>
					</div>
				</section>

				<PricingForm />
				<FinalCta />
			</main>

			<Footer />
		</>
	);
}
