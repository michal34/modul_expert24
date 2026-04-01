import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { sendContactForm } from "@/src/actions/contact";
import SubmitButton from "@/components/ui/SubmitButton";

export const metadata = {
	title: "Kontakt",
	description:
		"Skontaktuj się z Moduł Expert24. Napisz do nas lub zadzwoń, a przygotujemy ofertę dopasowaną do Twojej inwestycji.",
};

export default async function ContactPage({
	searchParams,
}: {
	searchParams: Promise<{ sent?: string }>;
}) {
	const params = await searchParams;
	return (
		<>
			<Header />

			<main className="bg-[#f5f5f5] text-black">
				<section className="py-16 bg-gradient-to-b from-[#fff7ef] to-white">
					<div className="mx-auto max-w-[1200px] px-4 sm:px-6">
						<div
							className="bg-white px-5 py-7 sm:px-7 md:px-10 md:py-10"
							style={{
								border: "1px solid #e9b070",
								borderRadius: "20px",
								padding: "50px",
							}}
						>
							<h1
								className="font-semibold text-center tracking-[-0.03em]"
								style={{ fontSize: "clamp(28px, 5vw, 46px)", lineHeight: "1.05" }}
							>
								Napisz do nas
							</h1>
							{params?.sent && (
								<div className="mt-10 rounded-xl border border-green-200 bg-green-50 px-6 py-4 text-center text-green-800">
									✅ Dziękujemy! Wiadomość została wysłana. Odpowiemy w ciągu kilku godzin.
								</div>
							)}

							<p className="mt-8 text-center max-w-[760px] text-[16px] leading-[1.8] text-black/70 md:text-[18px]">
								Opisz krótko, czego potrzebujesz. Skontaktujemy się z Tobą i przygotujemy propozycję
								dopasowaną do Twojej inwestycji.
							</p>

							{/* POWODY KONTAKTU */}
							<div className="mt-10 grid gap-6 md:grid-cols-3 text-center text-[15px] text-black/75">
								<div className="flex flex-col items-center gap-2 rounded-xl bg-[#fff7ef] px-6 py-5">
									<span className="text-[28px]">📐</span>
									<span>Wstępna wycena w 24h</span>
								</div>

								<div className="flex flex-col items-center gap-2 rounded-xl bg-[#fff7ef] px-6 py-5">
									<span className="text-[28px]">🏗️</span>
									<span>Pomoc w wyborze modelu</span>
								</div>

								<div className="flex flex-col items-center gap-2 rounded-xl bg-[#fff7ef] px-6 py-5">
									<span className="text-[28px]">📍</span>
									<span>Realizacja w całym Mazowieckim</span>
								</div>
							</div>

							<form action={sendContactForm} className="mt-12 space-y-6">
								{/* anty spam */}
								<input
									type="text"
									name="company"
									className="hidden"
									tabIndex={-1}
									autoComplete="off"
								/>
								<input type="hidden" name="redirectTo" value="/kontakt?sent=1" />

								<div className="mt-6 grid gap-5 md:grid-cols-2">
									<div>
										<label
											htmlFor="name"
											className="mb-2 block text-[15px] font-medium text-black/85"
										>
											Imię
										</label>
										<input
											id="name"
											name="name"
											type="text"
											required
											placeholder="Jan Kowalski"
											className="h-[56px] w-full rounded-full border border-black/10 bg-[#fafafa] px-5 text-[15px] outline-none transition focus:border-[#ef9228]"
										/>
									</div>

									<div>
										<label
											htmlFor="phone"
											className="mb-2 block text-[15px] font-medium text-black/85"
										>
											Telefon
										</label>
										<input
											id="phone"
											name="phone"
											type="tel"
											required
											placeholder="+48 123 123 123"
											className="h-[56px] w-full rounded-full border border-black/10 bg-[#fafafa] px-5 text-[15px] outline-none transition focus:border-[#ef9228]"
										/>
									</div>
								</div>

								<div>
									<label
										htmlFor="email"
										className="mb-2 block text-[15px] font-medium text-black/85"
									>
										E-mail
									</label>
									<input
										id="email"
										name="email"
										type="email"
										required
										placeholder="kontakt@twojadomena.pl"
										className="h-[56px] w-full rounded-full border border-black/10 bg-[#fafafa] px-5 text-[15px] outline-none transition focus:border-[#ef9228]"
									/>
								</div>

								<div>
									<label
										htmlFor="message"
										className="mb-2 block text-[15px] font-medium text-black/85"
									>
										Wiadomość
									</label>
									<textarea
										id="message"
										name="message"
										rows={8}
										required
										placeholder="Napisz, czego potrzebujesz, jaki metraż Cię interesuje i gdzie ma stanąć obiekt."
										className="min-h-[220px] w-full rounded-[24px] border border-black/10 bg-[#fafafa] px-5 py-4 text-[15px] outline-none transition focus:border-[#ef9228]"
									/>
								</div>

								<div className="flex flex-col items-center pt-8">
									<SubmitButton />

									<p className="mt-4 text-center text-[14px] text-black/60">
										Odpowiadamy zwykle w ciągu <strong>2–4 godzin</strong>
									</p>

									<p className="mt-5 max-w-[520px] text-center text-[13px] leading-[1.7] text-black/45">
										Wysyłając formularz, wyrażasz zgodę na kontakt w sprawie zapytania.
									</p>
								</div>
							</form>
						</div>
					</div>
				</section>

				<section className="pb-16 pt-4 md:pb-24">
					<div className="mx-auto max-w-[1000px] px-4 sm:px-6">
						<div className="rounded-[32px] bg-[#eef3f6] px-6 py-12 text-center shadow-[0_10px_24px_rgba(0,0,0,0.04)] md:px-10 md:py-14">
							<h2 className="text-[34px] font-semibold leading-[1.08] tracking-[-0.03em] md:text-[58px]">
								Masz gotowy pomysł?
							</h2>

							<p className="mx-auto mt-5 max-w-[820px] text-[17px] leading-[1.8] text-black/65 md:text-[20px]">
								Zadzwoń lub wyślij formularz — przygotujemy wstępną wycenę i pomożemy dobrać
								najlepszy model dla Twojej inwestycji.
							</p>

							<div className="mt-12 flex flex-col items-center gap-4">
								<a
									href="tel:+48575203444"
									className="inline-flex min-h-[56px] min-w-[220px] items-center justify-center rounded-full border border-[#ef9228] bg-white px-8 text-[17px] font-medium text-black transition-all duration-300 hover:bg-[#ef9228] hover:text-white"
								>
									Zadzwoń teraz
								</a>

								<Link
									href="/modele"
									className="mt-4 inline-flex min-h-[56px] min-w-[220px] items-center justify-center rounded-full border border-black/10 bg-white px-8 text-[17px] font-medium text-black transition-all duration-300 hover:bg-black hover:text-white"
								>
									Zobacz modele
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
