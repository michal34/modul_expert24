"use client";

import { FormEvent } from "react";

export default function PricingForm() {
	function handleSubmit(e: FormEvent) {
		e.preventDefault();
		// tutaj później możesz dodać wysyłkę formularza
	}

	return (
		<section className="py-20">
			<div className="mx-auto max-w-[1200px] px-6">
				<div className="grid gap-12 lg:grid-cols-[1fr_auto_1fr] items-start">
					{/* lewa kolumna */}
					<div>
						<h2 className="text-[24px] font-semibold md:text-[30px]">
							Dlaczego pawilon się opłaca?
						</h2>

						<ul className="mt-8 space-y-4 text-[18px] leading-[1.6]">
							<li className="flex items-center gap-3">
								<span className="h-[8px] w-[8px] rounded-full bg-black" />
								<span>Niski koszt inwestycji</span>
							</li>

							<li className="flex items-center gap-3">
								<span className="h-[8px] w-[8px] rounded-full bg-black" />
								<span>Brak prac mokrych</span>
							</li>

							<li className="flex items-center gap-3">
								<span className="h-[8px] w-[8px] rounded-full bg-black" />
								<span>Możliwość pracy całorocznej</span>
							</li>

							<li className="flex items-center gap-3">
								<span className="h-[8px] w-[8px] rounded-full bg-black" />
								<span>Brak kosztów tradycyjnej budowy</span>
							</li>
						</ul>
					</div>

					{/* separator */}
					<div className="hidden lg:block w-[1px] bg-black/20 h-full" />

					{/* prawa kolumna */}
					<div>
						<h2 className="text-[24px] font-semibold md:text-[30px]">
							Chcesz wycenę swojego pawilonu?
						</h2>

						<form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5 max-w-[420px]">
							<input
								type="text"
								placeholder="Imię..."
								className="h-[48px] rounded-full border border-black/30 px-5 outline-none focus:border-[#f1892d]"
							/>

							<input
								type="tel"
								placeholder="Telefon..."
								className="h-[48px] rounded-full border border-black/30 px-5 outline-none focus:border-[#f1892d]"
							/>

							<input
								type="email"
								placeholder="E-mail..."
								className="h-[48px] rounded-full border border-black/30 px-5 outline-none focus:border-[#f1892d]"
							/>

							<input
								type="text"
								placeholder="Wiadomość..."
								className="h-[48px] rounded-full border border-black/30 px-5 outline-none focus:border-[#f1892d]"
							/>

							<button
								type="submit"
								className="mt-4 mx-auto rounded-full border border-[#f1892d] px-8 py-2 text-[16px] transition hover:bg-[#f1892d] hover:text-white hover:scale-105"
							>
								Poproś o wycenę
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
