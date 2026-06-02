import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import FinalCta from "@/components/sections/FinalCta";
import type { Metadata } from "next";
import "./o-nas.css";

export const metadata: Metadata = {
	title: "O nas | Moduł Expert 24",
	description:
		"Poznaj firmę Moduł Expert 24 z Dębego Wielkiego. Projektujemy domy modułowe, domy kontenerowe i pawilony handlowe w Warszawie, Mińsku Mazowieckim i na Mazowszu.",
	alternates: {
		canonical: "https://www.modulexpert24.pl/o-nas",
	},
};

const aboutSchema = {
	"@context": "https://schema.org",
	"@type": "AboutPage",
	name: "O nas | Moduł Expert 24",
	url: "https://www.modulexpert24.pl/o-nas",
	description:
		"Informacje o firmie Moduł Expert 24, producencie domów modułowych, domów kontenerowych i pawilonów handlowych na Mazowszu.",
	mainEntity: {
		"@type": "HomeAndConstructionBusiness",
		name: "Moduł Expert 24",
		url: "https://www.modulexpert24.pl",
		telephone: "+48575203444",
		address: {
			"@type": "PostalAddress",
			streetAddress: "Choszczówka Rudzka 13",
			postalCode: "05-311",
			addressLocality: "Choszczówka Rudzka",
			addressCountry: "PL",
		},
		areaServed: [
			"Warszawa",
			"Mińsk Mazowiecki",
			"Dębe Wielkie",
			"Sulejówek",
			"Halinów",
			"Mazowieckie",
		],
	},
};

export default function AboutPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
			/>

			<Header />

			<main className="aboutPage">
				<section className="aboutHero">
					<div className="aboutContainer aboutHeroGrid">
						<div className="aboutHeroContent">
							<p className="aboutEyebrow">O firmie</p>

							<h1>Moduł Expert 24</h1>

							<p className="aboutLead">
								Projektujemy i realizujemy domy modułowe, domy kontenerowe oraz pawilony handlowe
								dla klientów z Mazowsza.
							</p>

							<p className="aboutHeroText">
								Jesteśmy firmą z Mińsk Mazowieckiego. Obsługujemy głównie okolice Mińska
								Mazowieckiego, Warszawy, Sulejówka, Halinowa oraz całe województwo mazowieckie.
							</p>

							<div className="aboutHeroActions">
								<a href="/kontakt" className="aboutButtonPrimary">
									Skontaktuj się z nami
								</a>

								<a href="/modele" className="aboutButtonSecondary">
									Zobacz modele
								</a>
							</div>

							<div className="aboutStats">
								<div>
									<strong>Mazowieckie</strong>
									<span>obszar działania</span>
								</div>

								<div>
									<strong>Domy modułowe</strong>
									<span>indywidualne projekty</span>
								</div>

								<div>
									<strong>Pawilony</strong>
									<span>dla firm i usług</span>
								</div>
							</div>
						</div>

						<div className="aboutHeroCard">
							<p className="aboutHeroCardLabel">Specjalizacja</p>
							<h2>Obiekty modułowe dopasowane do potrzeb</h2>

							<ul>
								<li>Domy modułowe całoroczne</li>
								<li>Domy kontenerowe</li>
								<li>Pawilony handlowe i usługowe</li>
								<li>Realizacje na zamówienie</li>
							</ul>
						</div>
					</div>
				</section>

				<section className="aboutSection">
					<div className="aboutContainer">
						<div className="aboutSectionHeader">
							<p className="aboutEyebrow">Co robimy?</p>
							<h2>Budownictwo modułowe dla domu i biznesu</h2>
							<p>
								Tworzymy obiekty modułowe dopasowane do przeznaczenia, lokalizacji, budżetu i
								oczekiwanego standardu wykończenia.
							</p>
						</div>

						<div className="aboutCards">
							<div className="aboutCard">
								<h3>Domy modułowe</h3>
								<p>
									Dla klientów prywatnych szukających szybszej alternatywy dla tradycyjnej budowy.
								</p>
							</div>

							<div className="aboutCard">
								<h3>Pawilony handlowe</h3>
								<p>Dla sklepów, punktów usługowych, gastronomii i małych biznesów.</p>
							</div>

							<div className="aboutCard">
								<h3>Domy kontenerowe</h3>
								<p>Funkcjonalne obiekty mieszkalne, biurowe, usługowe lub techniczne.</p>
							</div>
						</div>
					</div>
				</section>

				<section className="aboutDarkSection">
					<div className="aboutContainer aboutTwoColumns">
						<div>
							<p className="aboutEyebrow">Jak pracujemy?</p>
							<h2>Od pierwszej rozmowy do gotowego obiektu</h2>
							<p>
								Pomagamy przejść przez cały proces: od ustalenia potrzeb, przez wycenę i projekt, aż
								po przygotowanie, transport oraz montaż.
							</p>
						</div>

						<div className="aboutSteps">
							<div>
								<span>01</span>
								<p>Konsultacja i poznanie potrzeb</p>
							</div>
							<div>
								<span>02</span>
								<p>Dobór rozwiązania i wstępna wycena</p>
							</div>
							<div>
								<span>03</span>
								<p>Ustalenie szczegółów projektu</p>
							</div>
							<div>
								<span>04</span>
								<p>Produkcja, transport i montaż</p>
							</div>
						</div>
					</div>
				</section>

				<section className="aboutSection">
					<div className="aboutContainer aboutTwoColumns">
						<div>
							<p className="aboutEyebrow">Lokalnie</p>
							<h2>Działamy głównie na Mazowszu</h2>
							<p>
								Obsługujemy klientów z Warszawy, Mińska Mazowieckiego, Dębego Wielkiego, Sulejówka,
								Halinowa, Otwocka, Wołomina i okolic.
							</p>
						</div>

						<div className="aboutLocationBox">
							<h3>Główne lokalizacje</h3>
							<ul>
								<li>Mińsk Mazowiecki</li>
								<li>Warszawa</li>
								<li>Dębe Wielkie</li>
								<li>Sulejówek</li>
								<li>Halinów</li>
								<li>Mazowieckie</li>
							</ul>
						</div>
					</div>
				</section>

				<FinalCta />
			</main>

			<Footer />
		</>
	);
}
