import Image from "next/image";
import { Check } from "lucide-react";

const features = [
	"Dowolny układ pomieszczeń",
	"Możliwość łączenia modułów",
	"Różne warianty wykończenia",
	"Instalacje: elektryka, ogrzewanie, klimatyzacja",
	"Przeszklone fronty",
];

export default function InteriorFeatures() {
	return (
		<section className="py-16 md:py-24">
			<div className="mx-auto max-w-[1200px] px-6">
				<div className="grid items-center gap-10 md:gap-14 lg:grid-cols-[1fr_1fr]">
					<div className="relative mx-auto aspect-[1.55/1] w-full max-w-[520px] overflow-hidden rounded-[24px]">
						<Image
							src="/images/interior-features.jpg"
							alt="Nowoczesne wnętrze pawilonu modułowego"
							fill
							className="object-cover"
							sizes="(max-width: 1024px) 100vw, 520px"
						/>
					</div>

					<div className="max-w-[520px]">
						<ul className="space-y-6 text-[20px] leading-[1.6] text-black md:text-[22px]">
							{features.map((feature) => (
								<li key={feature} className="flex items-center gap-4">
									<Check className="h-5 w-5 shrink-0 text-black/80" />
									<span>{feature}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}
