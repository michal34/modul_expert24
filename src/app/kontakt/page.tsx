import Link from "next/link";

import ContactForm from "@/components/ContactForm";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import { createSeoMetadata } from "@/src/lib/seo";

export const metadata = createSeoMetadata({
	title: "Kontakt | Moduł Expert24",
	description:
		"Skontaktuj się z Moduł Expert24. Opisz planowany dom, pawilon lub kontener, a przygotujemy ofertę dopasowaną do inwestycji.",
	path: "/kontakt",
});

export default function ContactPage() {
	return (
		<>
			<Header />

			<main id="main-content" tabIndex={-1} className="bg-[#f5f5f5] text-black">
				<section className="bg-gradient-to-b from-[#fff7ef] to-white py-16">
					<div className="mx-auto max-w-[1200px] px-4 sm:px-6">
						<div className="rounded-[20px] border border-[#d59a58] bg-white px-5 py-8 sm:px-7 md:px-10 md:py-12">
							<h1 className="text-center text-[clamp(28px,5vw,46px)] font-semibold leading-[1.05] tracking-[-0.03em]">
								Napisz do nas
							</h1>

							<p className="mx-auto mt-8 max-w-[760px] text-center text-[16px] leading-[1.8] text-black/70 md:text-[18px]">
								Opisz krótko, czego potrzebujesz. Skontaktujemy się z Tobą i przygotujemy propozycję
								dopasowaną do Twojej inwestycji.
							</p>

							<div className="mt-10 grid gap-6 text-center text-[15px] text-black/75 md:grid-cols-3">
								<div className="flex flex-col items-center gap-2 rounded-xl bg-[#fff7ef] px-6 py-5">
									<span aria-hidden="true" className="text-[28px]">
										📐
									</span>
									<span>Indywidualna wycena</span>
								</div>
								<div className="flex flex-col items-center gap-2 rounded-xl bg-[#fff7ef] px-6 py-5">
									<span aria-hidden="true" className="text-[28px]">
										🏗️
									</span>
									<span>Pomoc w doborze rozwiązania</span>
								</div>
								<div className="flex flex-col items-center gap-2 rounded-xl bg-[#fff7ef] px-6 py-5">
									<span aria-hidden="true" className="text-[28px]">
										📍
									</span>
									<span>Realizacje na terenie Mazowsza</span>
								</div>
							</div>

							<ContactForm />
						</div>
					</div>
				</section>

				<section className="pb-16 pt-4 md:pb-24">
					<div className="mx-auto max-w-[1000px] px-4 sm:px-6">
						<div className="rounded-[32px] bg-[#eef3f6] px-6 py-12 text-center shadow-[0_10px_24px_rgba(0,0,0,0.04)] md:px-10 md:py-14">
							<h2 className="text-[34px] font-semibold leading-[1.08] tracking-[-0.03em] md:text-[58px]">
								Wolisz porozmawiać?
							</h2>
							<p className="mx-auto mt-5 max-w-[820px] text-[17px] leading-[1.8] text-black/65 md:text-[20px]">
								Zadzwoń — pomożemy określić potrzebny metraż, standard i zakres realizacji.
							</p>
							<div className="mt-10 flex flex-col items-center gap-4">
								<a
									href="tel:+48575203444"
									className="inline-flex min-h-[56px] min-w-[220px] items-center justify-center rounded-full bg-[#ef9228] px-8 text-[17px] font-semibold text-[#13272f] transition hover:bg-[#d97918]"
								>
									Zadzwoń teraz
								</a>
								<Link
									href="/modele"
									className="inline-flex min-h-[56px] min-w-[220px] items-center justify-center rounded-full border border-black/15 bg-white px-8 text-[17px] font-medium transition hover:bg-black hover:text-white"
								>
									Zobacz modele pawilonów
								</Link>
							</div>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}
