import Link from "next/link";

export default function FinalCta() {
	return (
		<section className="py-16 md:py-24">
			<div className="mx-auto max-w-[1200px] px-6">
				<div className="mx-auto max-w-[980px] rounded-[24px] bg-[#b7cdea] px-8 py-16 text-center shadow-[0_10px_20px_rgba(0,0,0,0.12)] md:px-12 md:py-20">
					<h2 className="text-[26px] font-semibold leading-[1.2] tracking-[-0.02em] text-black md:text-[44px]">
						Zamów darmową wycenę pawilonu
					</h2>

					<p className="mx-auto mt-8 max-w-[720px] text-[18px] leading-[1.7] text-black/70 md:text-[20px]">
						Powiedz nam, czego potrzebujesz, a przygotujemy dla Ciebie projekt i ofertę dopasowaną
						do Twojej działalności.
					</p>

					<div className="mt-10">
						<Link
							href="/kontakt"
							className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-[#f3983a] px-9 text-[18px] font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[#eb8d2a]"
						>
							Wypełnij formularz
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
