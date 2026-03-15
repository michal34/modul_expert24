import Image from "next/image";

const advantages = [
	"niski koszt inwestycji",
	"krótki czas realizacji",
	"wysoką trwałość",
	"możliwość łatwej rozbudowy",
	"przenoszenia obiektu w inne miejsce",
];

export default function WhyDetails() {
	return (
		<section className="py-16 md:py-24">
			<div className="mx-auto max-w-[1280px] px-6">
				<div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
					{/* obrazek */}
					<div className="relative mx-auto aspect-[1.5/1] w-full max-w-[520px]">
						<Image
							src="/images/why-details-building.png"
							alt="Nowoczesny pawilon modułowy"
							fill
							className="object-contain"
							sizes="(max-width: 1024px) 100vw, 520px"
						/>
					</div>

					{/* tekst */}
					<div className="max-w-[520px]">
						<p className="text-[17px] leading-[1.7] text-black md:text-[19px]">
							Pawilony modułowe, kontenery użytkowe oraz mobilne biura to dziś jedno z najbardziej
							opłacalnych, elastycznych i szybkich rozwiązań dla firm.
						</p>

						<p className="mt-8 text-[17px] leading-[1.7] text-black md:text-[19px]">
							Coraz więcej przedsiębiorców wybiera obiekty modułowe ze względu na:
						</p>

						<ul className="mt-6 space-y-4">
							{advantages.map((item) => (
								<li
									key={item}
									className="flex items-start gap-3 text-[17px] leading-[1.7] text-black md:text-[19px]"
								>
									<span className="mt-[2px] text-[20px] text-black/70">✓</span>

									<span>
										{item === "niski koszt inwestycji" && (
											<>
												<strong>niski koszt</strong> inwestycji
											</>
										)}

										{item === "krótki czas realizacji" && (
											<>
												<strong>krótki czas</strong> realizacji
											</>
										)}

										{item === "wysoką trwałość" && <strong>wysoką trwałość</strong>}

										{item === "możliwość łatwej rozbudowy" && (
											<>
												możliwość <strong>łatwej rozbudowy</strong>
											</>
										)}

										{item === "przenoszenia obiektu w inne miejsce" && (
											<>
												<strong>przenoszenia obiektu</strong> w inne miejsce
											</>
										)}
									</span>
								</li>
							))}
						</ul>

						<p className="mt-8 text-[17px] leading-[1.7] text-black md:text-[19px]">
							To idealne rozwiązanie dla biznesów, które chcą działać szybko, profesjonalnie i bez
							zbędnych formalności.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
