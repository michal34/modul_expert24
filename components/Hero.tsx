import Image from "next/image";

export default function Hero() {
	return (
		<section className="relative overflow-hidden">
			<div className="relative h-[720px] w-full sm:h-[780px] md:h-[620px] lg:h-[760px] xl:h-[820px]">
				<Image
					src="/images/hero.jpg"
					alt="Nowoczesny dom modułowy"
					fill
					priority
					sizes="100vw"
					className="object-cover object-[64%_center] sm:object-[60%_center] md:object-center"
				/>

				<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.10)_35%,rgba(0,0,0,0.24)_100%)] md:bg-[linear-gradient(180deg,rgba(0,0,0,0.10)_0%,rgba(0,0,0,0.08)_35%,rgba(0,0,0,0.14)_100%)]" />

				<div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.30)_0%,rgba(0,0,0,0.18)_24%,rgba(0,0,0,0.00)_55%)] md:bg-none" />

				<div className="absolute inset-x-0 top-[46%] z-10 px-5 sm:top-[44%] sm:px-6 md:left-1/2 md:top-10 md:w-full md:-translate-x-1/2 md:px-8">
					<div className="mx-auto max-w-[1400px]">
						<div className="mx-auto max-w-[320px] md:max-w-none text-center">
							<h1 className="text-center text-[30px] font-extralight leading-[1] tracking-[-0.04em] text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] sm:text-[36px] md:text-[48px] lg:text-[60px] xl:text-[68px]">
								Twój Dom w 3 Tygodnie
							</h1>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
