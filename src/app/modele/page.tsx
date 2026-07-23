import Image from "next/image";
import Link from "next/link";

import ModelLink from "@/components/ModelLink";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { models } from "@/src/data/models";
import { createSeoMetadata } from "@/src/lib/seo";

import infoStyles from "./models-info.module.css";

export const metadata = createSeoMetadata({
	title: "Modele pawilonów modułowych | Moduł Expert24",
	description:
		"Zobacz modele pawilonów modułowych Moduł Expert24. Porównaj warianty ALASKA, ASPEN, DAKOTA, DENVER, IDAHO, OKLAHOMA, UTAH i WYOMING.",
	path: "/modele",
});

export default function ModelsPage() {
	return (
		<>
			<Header />

			<main id="main-content" tabIndex={-1} className="bg-white text-neutral-950">
				<section className="mx-auto max-w-6xl px-6 py-16">
					<h1
						style={{
							maxWidth: "900px",
							margin: 0,
							fontSize: "clamp(36px, 6vw, 52px)",
							lineHeight: "1.05",
							fontWeight: 600,
							letterSpacing: "-0.04em",
							color: "#111",
						}}
					>
						Wybierz model
						<br />
						dopasowany do Twojej potrzeby
					</h1>

					<p className="mt-8 max-w-3xl text-xl leading-9 text-neutral-600">
						Pawilony mieszkalne, handlowe, usługowe i biurowe w nowoczesnym wydaniu. Każdy model
						można indywidualnie skonfigurować pod względem wymiarów, elewacji, układu okien oraz
						wyposażenia.
					</p>
				</section>

				<section className={infoStyles.modelsGrid}>
					{models.map((model) => (
						<ModelLink
							key={model.slug}
							href={`/modele/${model.slug}`}
							source="catalog"
							className={infoStyles.modelCard}
						>
							<div className={infoStyles.modelImageBox}>
								<Image
									src={model.thumbnail}
									alt={`Model ${model.name} - pawilon modułowy`}
									width={700}
									height={450}
									className={infoStyles.modelImage}
								/>
							</div>

							<div className={infoStyles.modelContent}>
								<h2>Model {model.name}</h2>

								<p>{model.description}</p>

								<span>Zobacz szczegóły →</span>
							</div>
						</ModelLink>
					))}
				</section>

				<section className={infoStyles.section}>
					<div className={infoStyles.box}>
						<p className={infoStyles.label}>Informacje</p>

						<h2 className={infoStyles.title}>Pawilony modułowe dla nowoczesnego biznesu</h2>

						<p className={infoStyles.text}>
							Pawilony modułowe Moduł Expert24 to nowoczesne rozwiązanie dla firm poszukujących
							funkcjonalnej, estetycznej i trwałej przestrzeni użytkowej.
						</p>

						<p className={infoStyles.text}>
							Interesuje Cię obiekt mieszkalny na Mazowszu? Zobacz naszą ofertę{" "}
							<Link href="/domy-modulowe-minsk-mazowiecki">
								domów i domków modułowych w Mińsku Mazowieckim
							</Link>
							.
						</p>

						<div className={infoStyles.grid}>
							{[
								[
									"Modele pawilonów",
									"Nowoczesna architektura i wysoka funkcjonalność dla różnych branż.",
								],
								[
									"Handel i usługi",
									"Idealne dla sklepów, punktów usługowych, showroomów i gastronomii.",
								],
								[
									"Konfiguracja",
									"Wymiary, elewacja, kolorystyka i wyposażenie dopasowane do potrzeb.",
								],
							].map(([title, text]) => (
								<div key={title} className={infoStyles.card}>
									<h3>{title}</h3>
									<p>{text}</p>
								</div>
							))}
						</div>

						<div className={infoStyles.cta}>
							<div>
								<h3>Potrzebujesz pomocy w wyborze modelu?</h3>
								<p>Doradzimy i przygotujemy indywidualną wycenę.</p>
							</div>

							<a href="/kontakt">Skontaktuj się →</a>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}
