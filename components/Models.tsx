import Image from "next/image";
import Link from "next/link";

type ModelItem = {
	name: string;
	image: string;
	href: string;
};

const models: ModelItem[] = [
	{
		name: "Model WYOMING",
		image: "/images/models/wyoming.png",
		href: "/modele/wyoming",
	},
	{
		name: "Model OKLAHOMA",
		image: "/images/models/oklahoma.png",
		href: "/modele/oklahoma",
	},
	{
		name: "Model IDAHO",
		image: "/images/models/idaho.png",
		href: "/modele/idaho",
	},
	{
		name: "Model UTAH",
		image: "/images/models/utah.png",
		href: "/modele/utah",
	},
];

export default function Models() {
	return (
		<section className="py-20 md:py-24">
			<div className="mx-auto max-w-[1400px] px-6 md:px-8">
				<div className="mb-14 md:mb-16">
					<h2 className="text-center text-4xl font-normal tracking-[-0.03em] text-black md:text-5xl lg:text-6xl">
						Nasze Modele
					</h2>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-12">
					{models.map((model, index) => (
						<Link
							key={model.name}
							href={model.href}
							className={`group block ${index === 3 ? "hidden lg:block" : ""}`}
						>
							<article className="flex flex-col items-start">
								<h3 className="mb-4 text-lg font-semibold">{model.name}</h3>

								<div className="relative aspect-[1.6/1] w-full">
									<Image
										src={model.image}
										alt={model.name}
										fill
										className="object-contain transition-transform duration-300 group-hover:scale-110"
									/>
								</div>
							</article>
						</Link>
					))}
				</div>
				<div className="mt-16 flex justify-center">
					<Link
						href="/modele"
						className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-[#ef9228] px-8 text-[15px] font-medium text-black transition-colors duration-300 hover:bg-[#ef9228] hover:text-white md:min-h-[56px] md:px-12 md:text-[18px]"
					>
						Zobacz Wszystkie Modele
					</Link>
				</div>
			</div>
		</section>
	);
}
