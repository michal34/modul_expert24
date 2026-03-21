import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const base = "https://modulexpert24.pl";

	return [
		{
			url: `${base}`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
		},
		{
			url: `${base}/oferta`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: `${base}/modele`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.9,
		},
		{
			url: `${base}/realizacje`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.8,
		},
		{
			url: `${base}/o-nas`,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.6,
		},
		{
			url: `${base}/kontakt`,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.6,
		},
	];
}
