import Image from "next/image";

export default function Hero() {
	return (
		<section className="relative overflow-hidden">
			<div className="relative h-[720px] w-full sm:h-[780px] md:h-[620px] lg:h-[760px] xl:h-[820px]">
				<Image
					src="/images/hero.webp"
					alt="Nowoczesny dom modułowy"
					fill
					priority
					fetchPriority="high"
					quality={60}
					sizes="100vw"
					placeholder="blur"
					blurDataURL="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AA/vuUAAA="
					className="object-cover object-[64%_center] sm:object-[60%_center] md:object-center"
				/>

				<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.10)_35%,rgba(0,0,0,0.24)_100%)] md:bg-[linear-gradient(180deg,rgba(0,0,0,0.10)_0%,rgba(0,0,0,0.08)_35%,rgba(0,0,0,0.14)_100%)]" />

				<div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.30)_0%,rgba(0,0,0,0.18)_24%,rgba(0,0,0,0.00)_55%)] md:bg-none" />

				<div className="absolute inset-x-0 top-[42%] z-10 px-5 sm:top-[40%] sm:px-6 md:left-1/2 md:top-10 md:w-full md:-translate-x-1/2 md:px-8">
					<div className="mx-auto max-w-[1400px]">
						<div className="mx-auto max-w-[350px] text-center md:max-w-[1100px]">
							<h1 className="text-center text-[30px] font-light leading-[1.05] tracking-[-0.04em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] sm:text-[36px] md:text-[46px] lg:text-[56px] xl:text-[64px]">
								Domy modułowe i pawilony na Mazowszu
							</h1>
							<p className="mx-auto mt-5 max-w-[720px] text-[16px] font-medium leading-6 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] sm:text-[18px] md:text-[21px]">
								Projekt, produkcja, transport i montaż dopasowane do Twojej inwestycji
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
