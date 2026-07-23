import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import BackButton from "@/components/BackButton";
import ModelNavigation from "@/components/ModelNavigation";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import { models, type Model } from "@/src/data/models";
import { createSeoMetadata } from "@/src/lib/seo";
import { CONTACT, ORGANIZATION_ID, SITE_NAME, SITE_URL } from "@/src/lib/site";

import styles from "./model-page.module.css";

type Props = {
	params: Promise<{
		slug: string;
	}>;
};

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
	return models.map((model: Model) => ({
		slug: model.slug,
	}));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const model = models.find((item: Model) => item.slug === slug);

	if (!model) {
		return {};
	}

	return createSeoMetadata({
		title: `${model.title} | ${SITE_NAME}`,
		description: model.description,
		path: `/modele/${model.slug}`,
	});
}

export default async function ModelPage({ params }: Props) {
	const { slug } = await params;
	const model = models.find((item: Model) => item.slug === slug);

	if (!model) {
		notFound();
	}

	const currentIndex = models.findIndex((item: Model) => item.slug === slug);
	const prevModel = models[(currentIndex - 1 + models.length) % models.length];
	const nextModel = models[(currentIndex + 1) % models.length];
	const modelUrl = `${SITE_URL}/modele/${model.slug}`;

	const serviceJsonLd = {
		"@context": "https://schema.org",
		"@type": "Service",
		name: model.title,
		description: model.description,
		image: `${SITE_URL}${model.image}`,
		url: modelUrl,
		serviceType: "Projektowanie i wykonanie pawilonu modułowego",
		provider: {
			"@type": "HomeAndConstructionBusiness",
			"@id": ORGANIZATION_ID,
			name: SITE_NAME,
			url: SITE_URL,
			telephone: CONTACT.phoneHref,
		},
		areaServed: [
			{ "@type": "AdministrativeArea", name: "Mazowieckie" },
			{ "@type": "Country", name: "Polska" },
		],
	};

	const breadcrumbJsonLd = {
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
				name: "Modele pawilonów",
				item: `${SITE_URL}/modele`,
			},
			{
				"@type": "ListItem",
				position: 3,
				name: `Model ${model.name}`,
				item: modelUrl,
			},
		],
	};

	return (
		<>
			<Header />

			<main id="main-content" tabIndex={-1} className={styles.page}>
				<BackButton />

				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(serviceJsonLd).replace(/</g, "\\u003c"),
					}}
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
					}}
				/>

				<nav aria-label="Breadcrumb" className={styles.breadcrumb}>
					<Link href="/">Strona główna</Link>
					<span aria-hidden="true">/</span>
					<Link href="/modele">Modele pawilonów</Link>
					<span aria-hidden="true">/</span>
					<span aria-current="page">{model.name}</span>
				</nav>

				<article className={styles.wrapper}>
					<header className={styles.modelHeader}>
						<p>Model pawilonu modułowego</p>
						<h1>Model {model.name}</h1>
						<div>{model.description}</div>
					</header>

					<Image
						src={model.image}
						alt={`Pawilon modułowy ${model.name}`}
						width={1200}
						height={1500}
						priority
						fetchPriority="high"
						sizes="(max-width: 960px) 100vw, 900px"
						className={styles.fullImage}
					/>

					<ModelNavigation prevModel={prevModel} nextModel={nextModel} />

					<section className={styles.seoContent}>
						<div>
							<h2>Najważniejsze cechy modelu {model.name}</h2>
							<ul className={styles.features}>
								{model.features.map((feature) => (
									<li key={feature}>{feature}</li>
								))}
							</ul>
						</div>

						<div>
							<h2>Specyfikacja techniczna modelu {model.name}</h2>
							<div className={styles.tableWrapper}>
								<table>
									<tbody>
										{Object.entries(model.specs).map(([label, value]) => (
											<tr key={label}>
												<th scope="row">{label}</th>
												<td>{value}</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</section>

					<div className={styles.cta}>
						<div>
							<h2>Chcesz skonfigurować model {model.name}?</h2>
							<p>Podaj wymiary, przeznaczenie, lokalizację i oczekiwane wyposażenie.</p>
						</div>
						<Link href="/kontakt">Poproś o wycenę</Link>
					</div>
				</article>
			</main>

			<Footer />
		</>
	);
}
