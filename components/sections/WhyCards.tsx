import { Clock, PiggyBank, Repeat } from "lucide-react";

type WhyCard = {
	title: string;
	description: string;
	icon: React.ElementType;
};

const cards: WhyCard[] = [
	{
		title: "Ekspresowy montaż",
		description:
			"Gotowy pawilon lub kontener montujemy w kilka dni. Większość prac powstaje w hali, dzięki czemu realizacja jest szybka i bezproblemowa",
		icon: Clock,
	},
	{
		title: "Atrakcyjna cena",
		description:
			"Koszt budowy obiektu modułowego jest do 40% niższy niż w przypadku klasycznych budynków, bez strat jakości",
		icon: PiggyBank,
	},
	{
		title: "Mobilność i elastyczność",
		description:
			"Pawilon lub kontener można przenieść, rozbudować lub zmienić jego układ w dowolnym momencie",
		icon: Repeat,
	},
];

export default function WhyCards() {
	return (
		<section className="py-16 md:py-12">
			<div className="mx-auto max-w-[1200px] px-6">
				<h2 className="text-center text-[24px] font-semibold leading-[1.2] tracking-[-0.02em] text-black md:text-[34px]">
					Dlaczego warto wybrać pawilon lub kontener modułowy?
				</h2>

				<div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-3">
					{cards.map((card) => {
						const Icon = card.icon;

						return (
							<article
								key={card.title}
								className="group mx-auto flex min-h-[300px] w-full max-w-[250px] flex-col items-center rounded-[18px] bg-[#8fc4df] px-6 py-8 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
							>
								<Icon
									className="h-14 w-14 transition-transform duration-300 group-hover:scale-110"
									strokeWidth={1.2}
								/>
								<h3 className="mt-6 text-[18px] font-semibold leading-[1.2] text-black">
									{card.title}
								</h3>
								<p className="mt-4 text-[15px] leading-[1.45] text-black/80">{card.description}</p>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
}
