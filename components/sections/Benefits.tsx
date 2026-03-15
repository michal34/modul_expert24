import { Clock3, Leaf, PiggyBank } from "lucide-react";

type Benefit = {
	title: string;
	description: string;
	icon: React.ElementType;
};

const benefits: Benefit[] = [
	{
		title: "Oszczędność",
		description: "Atrakcyjna cena i minimalne koszty utrzymania",
		icon: PiggyBank,
	},
	{
		title: "Ekologia",
		description: "Ekologiczne materiały i nowoczesne, energooszczędne rozwiązania",
		icon: Leaf,
	},
	{
		title: "Szybka Budowa",
		description: "Całkowity dom w zaledwie kilka tygodni",
		icon: Clock3,
	},
];

export default function Benefits() {
	return (
		<section className="py-12 md:py-16">
			<div className="mx-auto max-w-[1200px] px-6">
				<div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-14">
					{benefits.map((benefit) => {
						const Icon = benefit.icon;

						return (
							<article
								key={benefit.title}
								className="group flex flex-col items-center text-center transition-transform duration-300 md:flex-row md:items-start md:text-left md:gap-6"
							>
								{/* Ikona */}
								<div className="mb-4 flex h-[80px] w-[80px] items-center justify-center md:mb-0 md:h-[100px] md:w-[100px]">
									<Icon
										className="h-[56px] w-[56px] transition-transform duration-300 group-hover:scale-110 md:h-[72px] md:w-[72px]"
										strokeWidth={1}
									/>
								</div>

								{/* Tekst */}
								<div className="max-w-[260px]">
									<h3 className="text-[22px] font-semibold md:text-[26px]">{benefit.title}</h3>

									<p className="mt-2 text-[15px] leading-[1.45] text-black/75 md:text-[16px]">
										{benefit.description}
									</p>
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
}
