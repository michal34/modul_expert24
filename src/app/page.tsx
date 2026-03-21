import Header from "@/components/sections/Header";
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
	title: "Domy modułowe i pawilony modułowe Mazowieckie",
	description:
		"Producent domów modułowych i pawilonów modułowych na terenie Mazowieckiego. Warszawa, Mińsk Mazowiecki i okolice. Sprawdź ofertę i realizacje.",
	alternates: {
		canonical: "https://modulexpert24.pl",
	},
};

const localBusinessSchema = {
	"@context": "https://schema.org",
	"@type": "LocalBusiness",
	name: "Moduł Expert24",
	image: "https://modulexpert24.pl/og-image.jpg",
	url: "https://modulexpert24.pl",
	telephone: "+48XXXXXXXXX",
	address: {
		"@type": "PostalAddress",
		streetAddress: "Choszczówka Rudzka 13",
		postalCode: "05-311",
		addressLocality: "Dębe Wielkie",
		addressCountry: "PL",
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
	openingHoursSpecification: [
		{
			"@type": "OpeningHoursSpecification",
			dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
			opens: "08:00",
			closes: "17:00",
		},
	],
	sameAs: ["https://www.facebook.com/twojprofil", "https://www.instagram.com/twojprofil"],
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
			<Header />
			<main>
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
