import { ShoppingCart, HardHat, Utensils, Bath, Briefcase, Presentation } from "lucide-react";

type UseCase = {
	title: string;
	description: string;
	icon: React.ElementType;
};

const useCases: UseCase[] = [
	{
		title: "Pawilon handlowy",
		description: "Świetnie sprawdza się jako punkt sprzedaży w ruchliwych lokalizacjach",
		icon: ShoppingCart,
	},
	{
		title: "Biuro budowlane",
		description: "Wygodne zaplecze biurowe bezpośrednio na placu budowy",
		icon: HardHat,
	},
	{
		title: "Lokal gastronomiczny",
		description: "Idealny dla food trucków, małej gastronomii i sezonowych punktów",
		icon: Utensils,
	},
	{
		title: "Kontener socjalny i sanitarny",
		description: "Zapewnia zaplecze sanitarne i socjalne dla pracowników",
		icon: Bath,
	},
	{
		title: "Gabinet lub punkt usługowy",
		description: "Sprawdza się jako gabinet kosmetyczny, biuro doradcze czy punkt obsługi",
		icon: Briefcase,
	},
	{
		title: "Showroom lub ekspozycja",
		description: "Nowoczesna przestrzeń do prezentacji produktów i usług",
		icon: Presentation,
	},
];

export default function UseCases() {
	return (
		<section className="bg-[#efb77d] py-16 md:py-24">
			<div className="mx-auto max-w-[1200px] px-6">
				<h2 className="text-center text-[24px] font-semibold md:text-[34px]">
					Gdzie sprawdzą się pawilony i kontenery?
				</h2>

				<div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{useCases.map((item) => {
						const Icon = item.icon;

						return (
							<article
								key={item.title}
								className="flex flex-col items-center rounded-[16px] bg-white px-6 py-7 text-center shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
							>
								<Icon className="h-8 w-8" strokeWidth={1.8} />

								<h3 className="mt-4 text-[18px] font-semibold">{item.title}</h3>

								<p className="mt-3 text-[15px] leading-[1.5] text-black/70">{item.description}</p>
							</article>
						);
					})}
				</div>
			</div>
		</section>
	);
}
