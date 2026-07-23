import type { Metadata } from "next";

import type { SeoFaq } from "@/components/seo/SeoLandingPage";
import { CONTACT, ORGANIZATION_ID, SITE_NAME, SITE_URL } from "@/src/lib/site";

export { SITE_URL };
export const DEFAULT_OG_IMAGE = "/opengraph-image";

type MetadataInput = {
	title: string;
	description: string;
	path: string;
};

type ServiceSchemaInput = {
	name: string;
	description: string;
	path: string;
	serviceType: string[];
	areas?: string[];
};

export function createSeoMetadata({ title, description, path }: MetadataInput): Metadata {
	return {
		title: { absolute: title },
		description,
		alternates: {
			canonical: `${SITE_URL}${path}`,
		},
		openGraph: {
			title,
			description,
			url: `${SITE_URL}${path}`,
			siteName: SITE_NAME,
			locale: "pl_PL",
			type: "website",
			images: [
				{
					url: DEFAULT_OG_IMAGE,
					width: 1200,
					height: 630,
					alt: `Domy i obiekty modułowe — ${SITE_NAME}`,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [DEFAULT_OG_IMAGE],
		},
	};
}

export function createFaqSchema(faqs: SeoFaq[]) {
	return {
		"@context": "https://schema.org",
		"@type": "FAQPage",
		mainEntity: faqs.map(({ question, answer }) => ({
			"@type": "Question",
			name: question,
			acceptedAnswer: {
				"@type": "Answer",
				text: answer,
			},
		})),
	};
}

export function createBreadcrumbSchema(name: string, path: string) {
	return {
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
				name,
				item: `${SITE_URL}${path}`,
			},
		],
	};
}

export function createServiceSchema({
	name,
	description,
	path,
	serviceType,
	areas = ["Mazowieckie", "Polska"],
}: ServiceSchemaInput) {
	return {
		"@context": "https://schema.org",
		"@type": "Service",
		name,
		description,
		url: `${SITE_URL}${path}`,
		serviceType,
		provider: {
			"@type": "HomeAndConstructionBusiness",
			"@id": ORGANIZATION_ID,
			name: SITE_NAME,
			url: SITE_URL,
			telephone: CONTACT.phoneHref,
		},
		areaServed: areas.map((name) => ({
			"@type":
				name === "Polska" ? "Country" : name === "Mazowieckie" ? "AdministrativeArea" : "City",
			name,
		})),
	};
}
