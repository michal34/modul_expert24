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
		canonical: "https://twojadomena.pl",
	},
};

export default function HomePage() {
	return (
		<>
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
