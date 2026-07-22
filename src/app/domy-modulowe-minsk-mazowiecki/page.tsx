import Header from "@/components/sections/Header";
import Process from "@/components/sections/Process";
import PricingForm from "@/components/sections/PricingForm";
import FinalCta from "@/components/sections/FinalCta";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Domy modułowe Mińsk Mazowiecki | Moduł Expert 24",
	description:
		"Domy modułowe w Mińsku Mazowieckim i okolicach. Moduł Expert 24 projektuje i realizuje domy modułowe całoroczne, rekreacyjne i obiekty modułowe na zamówienie.",
	alternates: {
		canonical: "https://www.modulexpert24.pl/domy-modulowe-minsk-mazowiecki",
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

export default function DomyModuloweMinskMazowieckiPage() {
	return (
		<>
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
							Domy modułowe Mińsk Mazowiecki
						</h1>

						<p style={{ maxWidth: "780px", fontSize: "20px", lineHeight: 1.7, color: "#53646b" }}>
							Moduł Expert 24 projektuje i realizuje domy modułowe dla klientów z Mińska
							Mazowieckiego oraz okolic. Tworzymy nowoczesne obiekty modułowe dopasowane do potrzeb
							mieszkaniowych, rekreacyjnych i inwestycyjnych.
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
						<h2>Dom modułowy dopasowany do Twoich potrzeb</h2>

						<p>
							Domy modułowe są dobrym rozwiązaniem dla osób, które szukają szybszej i bardziej
							elastycznej alternatywy dla tradycyjnej budowy. Mogą sprawdzić się jako dom
							całoroczny, dom rekreacyjny, budynek pod wynajem albo dodatkowy obiekt na działce.
						</p>

						<p>
							Obsługujemy klientów z Mińska Mazowieckiego, Dębego Wielkiego, Halinowa, Sulejówka,
							Kałuszyna, Stanisławowa, Warszawy oraz innych miejscowości na terenie Mazowsza.
						</p>
					</div>
				</section>

				<section style={{ padding: "80px 24px", background: "#13272f", color: "white" }}>
					<div style={{ maxWidth: "1180px", margin: "0 auto" }}>
						<h2>Dlaczego warto wybrać dom modułowy?</h2>

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

				<Process variant="house" />

				<section style={{ padding: "80px 24px", background: "#f6f8f8" }}>
					<div style={{ maxWidth: "1180px", margin: "0 auto" }}>
						<h2>FAQ — domy modułowe Mińsk Mazowiecki</h2>

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
