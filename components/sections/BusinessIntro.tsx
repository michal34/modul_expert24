import Link from "next/link";

export default function BusinessIntro() {
	return (
		<section className="py-16 md:py-24">
			<div className="mx-auto flex max-w-[1100px] flex-col items-center px-6 text-center">
				<div className="mt-2 max-w-[980px]">
					<h2 className="text-[24px] font-semibold leading-[1.25] tracking-[-0.02em] text-black md:text-[34px] lg:text-[42px]">
						Pawilony modułowe, kontenery i mobilne biura – nowoczesne rozwiązanie dla biznesu
					</h2>

					<p className="mx-auto mt-8 max-w-[900px] text-[16px] font-medium leading-[1.5] text-black md:text-[22px] lg:text-[26px]">
						Szybka realizacja, atrakcyjna cena, pełna mobilność i elastyczność. Idealne rozwiązanie
						dla biznesów, które potrzebują przestrzeni od zaraz.
					</p>
				</div>

				<Link
					href="/kontakt"
					className="mt-16 inline-flex min-h-[52px] items-center justify-center rounded-full border border-[#ef9228] px-8 text-[15px] font-medium text-black transition-colors duration-300 hover:bg-[#ef9228] hover:text-white md:min-h-[56px] md:px-12 md:text-[18px]"
				>
					Zamów wycenę
				</Link>
			</div>
		</section>
	);
}
