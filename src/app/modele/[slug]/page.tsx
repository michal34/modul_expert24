import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { models, type Model } from "@/src/data/models";
import ModelNavigation from "@/components/ModelNavigation";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

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

	return {
		title: `${model.title} | DEFRO Modular`,
		description: model.description,

		alternates: {
			canonical: `/modele/${model.slug}`,
		},

		openGraph: {
			title: model.title,
			description: model.description,
			images: [model.image],
		},
	};
}

export default async function ModelPage({ params }: Props) {
	const { slug } = await params;

	const model = models.find((item: Model) => item.slug === slug);

	if (!model) {
		notFound();
	}

	const currentIndex = models.findIndex((item: Model) => item.slug === slug);

	const prevModel = currentIndex > 0 ? models[currentIndex - 1] : undefined;

	const nextModel = currentIndex < models.length - 1 ? models[currentIndex + 1] : undefined;

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Product",
		name: model.title,
		description: model.description,
		image: model.image,

		brand: {
			"@type": "Brand",
			name: "DEFRO Modular",
		},
	};

	return (
		<>
			<Header />
			<main className={styles.page}>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(jsonLd),
					}}
				/>

				<article className={styles.wrapper}>
					<Image
						src={model.image}
						alt={`Model ${model.name} - ${model.description}`}
						width={1400}
						height={1800}
						priority
						className={styles.fullImage}
					/>

					<ModelNavigation prevModel={prevModel} nextModel={nextModel} />

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
