type ProcessStep = {
	number: string;
	title: string;
	description: string;
};

type ProcessVariant = "pavilion" | "house";

type ProcessProps = {
	variant?: ProcessVariant;
};

function getProcessSteps(variant: ProcessVariant): ProcessStep[] {
	return [
		{
			number: "1.",
			title: "Projekt i konfiguracja",
			description:
				"Analizujemy Twoje potrzeby i przygotowujemy układ, wykończenie oraz instalacje. Tworzymy dopasowaną koncepcję i finalną wycenę.",
		},
		{
			number: "2.",
			title: "Produkcja w hali",
			description:
				"Moduł powstaje w kontrolowanych warunkach, co pozwala zachować wysoką jakość i precyzję wykonania niezależnie od pogody.",
		},
		{
			number: "3.",
			title: "Transport",
			description:
				"Organizujemy bezpieczny transport gotowych modułów na wskazany adres. Ustalamy termin i szczegóły logistyczne dostawy.",
		},
		{
			number: "4.",
			title: "Montaż na działce",
			description:
				"Ustawiamy moduły w docelowym miejscu i wykonujemy montaż. W przypadku kilku modułów łączymy je zgodnie z przygotowanym projektem.",
		},
		{
			number: "5.",
			title: "Podłączenie instalacji",
			description:
				"Podłączamy prąd, ogrzewanie, klimatyzację oraz inne uzgodnione instalacje. Wszystko zostaje sprawdzone przed odbiorem.",
		},
		{
			number: "6.",
			title: variant === "house" ? "Przekazanie gotowego domu" : "Przekazanie gotowego obiektu",
			description:
				variant === "house"
					? "Przekazujemy gotowy dom modułowy do użytkowania i przeprowadzamy końcowy odbiór obiektu."
					: "Przekazujemy gotowy pawilon po końcowym odbiorze. Rozpoczęcie użytkowania zależy również od spełnienia formalności właściwych dla inwestycji.",
		},
	];
}

const desktopPlacement = [
	"xl:col-start-1 xl:row-start-1 xl:justify-self-start",
	"xl:col-start-1 xl:row-start-3 xl:justify-self-start xl:translate-x-52",
	"xl:col-start-2 xl:row-start-1 xl:justify-self-center xl:-translate-x-12",
	"xl:col-start-2 xl:row-start-3 xl:justify-self-center xl:translate-x-36",
	"xl:col-start-3 xl:row-start-1 xl:justify-self-end xl:-translate-x-28",
	"xl:col-start-3 xl:row-start-3 xl:justify-self-end xl:translate-x-16",
] as const;

export default function Process({ variant = "pavilion" }: ProcessProps) {
	const steps = getProcessSteps(variant);

	const heading =
		variant === "house"
			? "Jak wygląda proces realizacji domu modułowego?"
			: "Jak wygląda proces realizacji?";

	return (
		<section className="bg-[#155e75] py-16 md:py-20 lg:py-24">
			<div className="mx-auto max-w-[1280px] px-6">
				<h2 className="text-center text-[28px] font-medium leading-[1.1] tracking-[-0.03em] text-white md:text-[42px] lg:text-[46px]">
					{heading}
				</h2>

				<div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2 md:gap-6 xl:grid-cols-3 xl:grid-rows-[auto_34px_auto] xl:gap-x-0 xl:gap-y-8">
					<div
						aria-hidden="true"
						className="relative hidden h-[34px] xl:col-span-3 xl:row-start-2 xl:mx-auto xl:block xl:w-full xl:max-w-[1000px]"
					>
						<div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-[#f2a43a]" />

						<TriangleUp className="absolute left-0 top-[3px]" />
						<TriangleDown className="absolute left-[20%] top-[17px]" />
						<TriangleUp className="absolute left-[40%] top-[3px]" />
						<TriangleDown className="absolute left-[60%] top-[17px]" />
						<TriangleUp className="absolute left-[80%] top-[3px]" />
						<TriangleDown className="absolute right-0 top-[17px]" />
					</div>

					{steps.map((step, index) => (
						<article
							key={step.number}
							className={`
								rounded-[18px] border border-white/10 bg-white/5 p-5
								xl:w-[300px] xl:rounded-none xl:border-0 xl:bg-transparent xl:p-0
								${desktopPlacement[index]}
							`}
						>
							<h3 className="text-[22px] font-semibold leading-[1.15] text-white md:text-[22px] lg:text-[25px]">
								{step.number} {step.title}
							</h3>

							<p className="mt-3 text-[15px] leading-[1.55] text-white/85 md:mt-4 md:leading-[1.45] lg:text-[16px]">
								{step.description}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

function TriangleUp({ className = "" }: { className?: string }) {
	return (
		<div
			className={`h-0 w-0 border-b-[14px] border-l-[9px] border-r-[9px] border-b-[#f2a43a] border-l-transparent border-r-transparent ${className}`}
		/>
	);
}

function TriangleDown({ className = "" }: { className?: string }) {
	return (
		<div
			className={`h-0 w-0 border-l-[9px] border-r-[9px] border-t-[14px] border-l-transparent border-r-transparent border-t-[#f2a43a] ${className}`}
		/>
	);
}
