import type { MetadataRoute } from "next";

import { models } from "@/src/data/models";
import { SITE_URL } from "@/src/lib/site";

const STATIC_PATHS = [
	"",
	"/domy-modulowe",
	"/modele",
	"/domy-modulowe-minsk-mazowiecki",
	"/domy-modulowe-warszawa",
	"/domy-modulowe-cena",
	"/pawilony-handlowe",
	"/kontenery-biurowe",
	"/dom-modulowy-formalnosci",
	"/o-nas",
	"/kontakt",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
	const staticPages = STATIC_PATHS.map((path) => ({
		url: `${SITE_URL}${path}`,
	}));

	const modelPages = models.map((model) => ({
		url: `${SITE_URL}/modele/${model.slug}`,
	}));

	return [...staticPages, ...modelPages];
}
