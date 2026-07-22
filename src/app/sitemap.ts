import type { MetadataRoute } from "next";

const BASE_URL = "https://www.modulexpert24.pl";

// Zmień tę datę po faktycznej aktualizacji treści strony.
const LAST_UPDATED = new Date("2026-07-22");

const MODEL_SLUGS = [
	"alaska",
	"aspen",
	"dakota",
	"denver",
	"idaho",
	"oklahoma",
	"utah",
	"wyoming",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
	const staticPages: MetadataRoute.Sitemap = [
		{
			url: BASE_URL,
			lastModified: LAST_UPDATED,
			changeFrequency: "weekly",
			priority: 1,
		},
		{
			url: `${BASE_URL}/modele`,
			lastModified: LAST_UPDATED,
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: `${BASE_URL}/domy-modulowe-minsk-mazowiecki`,
			lastModified: LAST_UPDATED,
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${BASE_URL}/o-nas`,
			lastModified: LAST_UPDATED,
			changeFrequency: "yearly",
			priority: 0.6,
		},
		{
			url: `${BASE_URL}/kontakt`,
			lastModified: LAST_UPDATED,
			changeFrequency: "yearly",
			priority: 0.6,
		},
	];

	const modelPages: MetadataRoute.Sitemap = MODEL_SLUGS.map((slug) => ({
		url: `${BASE_URL}/modele/${slug}`,
		lastModified: LAST_UPDATED,
		changeFrequency: "monthly",
		priority: 0.8,
	}));

	return [...staticPages, ...modelPages];
}
