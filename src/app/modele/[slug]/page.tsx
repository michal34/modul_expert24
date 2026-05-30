import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import BackButton from "@/components/BackButton";
import ModelNavigation from "@/components/ModelNavigation";

import { models, type Model } from "@/src/data/models";
import styles from "./model-page.module.css";

type Props = {
	params: Promise<{
		slug: string;
	}>;
	searchParams: Promise<{
		from?: string;
	}>;
};

const SITE_URL = "https://modulexpert24.pl";

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
	return models.map((model: Model) => ({
		slug: model.slug,
	}));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const model = models.find((item: Model) => item.slug === slug);

	if (!model) return {};

	return {
		title: `${model.title} | Moduł Expert24`,
		description: model.description,
		alternates: {
			canonical: `${SITE_URL}/modele/${model.slug}`,
		},
		openGraph: {
			title: model.title,
			description: model.description,
			url: `${SITE_URL}/modele/${model.slug}`,
			images: [
				{
					url: model.image,
					width: 1200,
					height: 1500,
					alt: `Model ${model.name}`,
				},
			],
		},
	};
}

export default async function ModelPage({ params, searchParams }: Props) {
	const { slug } = await params;
	const { from } = await searchParams;

	const model = models.find((item: Model) => item.slug === slug);

	if (!model) {
		notFound();
	}

	const currentIndex = models.findIndex((item: Model) => item.slug === slug);

	const prevModel =
		models.length > 1 ? models[(currentIndex - 1 + models.length) % models.length] : undefined;

	const nextModel = models.length > 1 ? models[(currentIndex + 1) % models.length] : undefined;

	const showBackButton = from === "home";

	const productJsonLd = {
		"@context": "https://schema.org",
		"@type": "Product",
		name: model.title,
		description: model.description,
		image: `${SITE_URL}${model.image}`,
		url: `${SITE_URL}/modele/${model.slug}`,
		brand: {
			"@type": "Brand",
			name: "Moduł Expert24",
		},
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
				name: "Modele",
				item: `${SITE_URL}/modele`,
			},
			{
				"@type": "ListItem",
				position: 3,
				name: `Model ${model.name}`,
				item: `${SITE_URL}/models/${model.slug}`,
			},
		],
	};

	return (
		<>
			<Header />

			<main className={styles.page}>
				{showBackButton ? (
					<BackButton redirect={"/?scrollTo=modele"} />
				) : (
					<BackButton redirect={"/modele"} />
				)}

				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(productJsonLd),
					}}
				/>

				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(breadcrumbJsonLd),
					}}
				/>

				<nav
					aria-label="Breadcrumb"
					className="mx-auto mb-6 flex max-w-[900px] items-center gap-2 px-5 pt-8 text-sm text-neutral-500"
				>
					<Link href="/" className="transition hover:text-orange-500">
						Strona główna
					</Link>

					<span>/</span>

					<Link href="/modele" className="transition hover:text-orange-500">
						Modele
					</Link>

					<span>/</span>

					<span className="font-medium text-black">{model.name}</span>
				</nav>

				<article className={styles.wrapper}>
					<Image
						src={model.image}
						alt={`Model ${model.name} - ${model.description}`}
						width={1200}
						height={1500}
						priority
						fetchPriority="high"
						unoptimized
						className={styles.fullImage}
					/>

					<ModelNavigation prevModel={prevModel} nextModel={nextModel} from={from} />

					<section className={styles.seoContent}>
						<h1>Model {model.name}</h1>

						<p>{model.description}</p>

						<h2>Najważniejsze cechy modelu {model.name}</h2>

						<ul>
							{model.features.map((feature) => (
								<li key={feature}>{feature}</li>
							))}
						</ul>

						<h2>Specyfikacja techniczna modelu {model.name}</h2>

						<table>
							<tbody>
								{Object.entries(model.specs).map(([label, value]) => (
									<tr key={label}>
										<th>{label}</th>
										<td>{value}</td>
									</tr>
								))}
							</tbody>
						</table>
					</section>
				</article>
			</main>

			<Footer />
		</>
	);
}
