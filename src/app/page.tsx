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
import Faq from "@/components/sections/Faq";
import Process from "@/components/sections/Process";
import FinalCta from "@/components/sections/FinalCta";
import Footer from "@/components/sections/Footer";
import { createSeoMetadata } from "@/src/lib/seo";
import { CONTACT, ORGANIZATION_ID, SITE_NAME, SITE_URL } from "@/src/lib/site";

export const metadata = createSeoMetadata({
	title: "Domy modułowe i pawilony handlowe na Mazowszu | Moduł Expert24",
	description:
		"Domy modułowe i pawilony handlowe na terenie Mazowsza. Warszawa, Mińsk Mazowiecki i okolice. Sprawdź ofertę i poproś o indywidualną wycenę.",
	path: "",
});

const localBusinessSchema = {
	"@context": "https://schema.org",
	"@type": "HomeAndConstructionBusiness",
	"@id": ORGANIZATION_ID,
	name: SITE_NAME,
	image: `${SITE_URL}/images/hero.webp`,
	url: SITE_URL,
	telephone: CONTACT.phoneHref,
	email: CONTACT.email,
	address: {
		"@type": "PostalAddress",
		streetAddress: CONTACT.streetAddress,
		postalCode: CONTACT.postalCode,
		addressLocality: CONTACT.locality,
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
	sameAs: ["https://www.facebook.com/profile.php?id=61590299923979"],
};

const serviceSchema = {
	"@context": "https://schema.org",
	"@type": "Service",
	name: "Domy modułowe i pawilony modułowe",
	description:
		"Projektowanie, produkcja i sprzedaż domów modułowych oraz pawilonów modułowych na terenie województwa mazowieckiego, w tym Warszawy i Mińska Mazowieckiego.",
	provider: {
		"@type": "HomeAndConstructionBusiness",
		"@id": ORGANIZATION_ID,
		name: SITE_NAME,
		url: SITE_URL,
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
	url: SITE_URL,
};

const faqSchema = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: [
		{
			"@type": "Question",
			name: "Ile kosztuje dom modułowy?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Cena zależy od powierzchni, standardu wykończenia, wyposażenia oraz indywidualnych wymagań projektu. Każdą wycenę przygotowujemy indywidualnie.",
			},
		},
		{
			"@type": "Question",
			name: "Jak długo trwa realizacja domu modułowego?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Czas realizacji zależy od wybranego modelu, zakresu prac oraz aktualnego harmonogramu produkcji. Budownictwo modułowe pozwala skrócić czas realizacji względem tradycyjnej budowy.",
			},
		},
		{
			"@type": "Question",
			name: "Czy dom modułowy może być użytkowany przez cały rok?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Tak. Wykonujemy domy modułowe całoroczne z odpowiednią izolacją oraz instalacjami dostosowanymi do użytkowania przez cały rok.",
			},
		},
		{
			"@type": "Question",
			name: "Czy wykonujecie transport i montaż?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Tak. Zapewniamy transport oraz montaż obiektów modułowych na terenie województwa mazowieckiego i innych regionów Polski.",
			},
		},
		{
			"@type": "Question",
			name: "Czy realizujecie zamówienia w Warszawie i Mińsku Mazowieckim?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Tak. Obsługujemy klientów z Mińska Mazowieckiego, Warszawy, Sulejówka, Halinowa, Choszczówki Rudzkiej oraz innych miejscowości województwa mazowieckiego, a nawet całej Polski.",
			},
		},
		{
			"@type": "Question",
			name: "Czy pawilon handlowy wymaga pozwolenia na budowę?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Wymagania formalne zależą od rodzaju obiektu, jego powierzchni oraz sposobu użytkowania. W razie potrzeby pomagamy klientom uzyskać podstawowe informacje dotyczące formalności.",
			},
		},
		{
			"@type": "Question",
			name: "Czy można zmodyfikować gotowy projekt?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Tak. Oferujemy możliwość dostosowania układu pomieszczeń, wykończenia oraz wyposażenia do indywidualnych potrzeb klienta.",
			},
		},
	],
};

export default function HomePage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(localBusinessSchema).replace(/</g, "\\u003c"),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
				}}
			/>
			<Header />
			<main id="main-content" tabIndex={-1}>
				<Hero />
				<Benefits />
				<Models />
				<BusinessIntro />
				<WhyCards />
				<WhyDetails />
				<UseCases />
				<InteriorFeatures />
				<Process />
				<PricingForm variant="general" />
				<Faq />
				<FinalCta variant="general" />
			</main>
			<Footer />
		</>
	);
}
