import Header from "@/components/sections/Header";
import ScrollToSection from "@/components/ScrollToSection";
import { Suspense } from "react";
import Hero from "@/components/Hero";
import Benefits from "@/components/sections/Benefits";
import Models from "@/components/Models";
import BusinessIntro from "@/components/sections/BusinessIntro";
import WhyCards from "@/components/sections/WhyCards";
import WhyDetails from "@/components/sections/WhyDetails";
import UseCases from "@/components/sections/UseCases";
import InteriorFeatures from "@/components/sections/InteriorFeatures";
import PricingForm from "@/components/sections/PricingForm";
import Process from "@/components/sections/Process";
import Gallery from "@/components/Gallery";
import FinalCta from "@/components/sections/FinalCta";
import Footer from "@/components/sections/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Moduł Expert 24 – Domy modułowe i pawilony handlowe | Mazowieckie",
	description:
		"Producent domów modułowych i pawilonów modułowych na terenie Mazowieckiego. Warszawa, Mińsk Mazowiecki i okolice. Sprawdź ofertę i realizacje.",
	alternates: {
		canonical: "https://www.modulexpert24.pl",
	},
};

const localBusinessSchema = {
	"@context": "https://schema.org",
	"@type": "HomeAndConstructionBusiness",
	name: "Moduł Expert24",
	image: "https://www.modulexpert24.pl/og-image.jpg",
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
		{
			"@type": "City",
			name: "Mińsk Mazowiecki",
		},
		{
			"@type": "City",
			name: "Warszawa",
		},
		{
			"@type": "City",
			name: "Sulejówek",
		},
		{
			"@type": "City",
			name: "Halinów",
		},
		{
			"@type": "AdministrativeArea",
			name: "Mazowieckie",
		},
	],
	openingHoursSpecification: [
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
			opens: "08:00",
			closes: "17:00",
		},
	],
	sameAs: [
		// "https://www.facebook.com/twojprofil", "https://www.instagram.com/twojprofil"
	],
};

const serviceSchema = {
	"@context": "https://schema.org",
	"@type": "Service",
	name: "Domy modułowe i pawilony modułowe",
	description:
		"Projektowanie, produkcja i sprzedaż domów modułowych oraz pawilonów modułowych na terenie województwa mazowieckiego, w tym Warszawy i Mińska Mazowieckiego.",
	provider: {
		"@type": "LocalBusiness",
		name: "Moduł Expert24",
		url: "https://www.modulexpert24.pl",
	},
	areaServed: [
		{
			"@type": "City",
			name: "Warszawa",
		},
		{
			"@type": "City",
			name: "Mińsk Mazowiecki",
		},
		{
			"@type": "AdministrativeArea",
			name: "Mazowieckie",
		},
	],
	serviceType: ["Domy modułowe", "Pawilony modułowe", "Domki całoroczne"],
	url: "https://www.modulexpert24.pl",
};

export default function HomePage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(localBusinessSchema),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(serviceSchema),
				}}
			/>
			<Header />
			<main>
				<Suspense fallback={null}>
					<ScrollToSection />
				</Suspense>
				<Hero />
				<Benefits />
				<Models />
				<BusinessIntro />
				<WhyCards />
				<WhyDetails />
				<UseCases />
				<InteriorFeatures />
				<PricingForm />
				<Process />
				{/* <Gallery /> */}
				<FinalCta />
			</main>
			<Footer />
		</>
	);
}
