type ProcessStep = {
	number: string;
	title: string;
	description: string;
};

const topSteps: ProcessStep[] = [
	{
		number: "1.",
		title: "Projekt i konfiguracja",
		description:
			"Analizujemy Twoje potrzeby i przygotowujemy układ, wykończenie oraz instalacje. Tworzymy dopasowaną koncepcję i finalną wycenę.",
	},
	{
		number: "3.",
		title: "Transport",
		description:
			"Organizujemy bezpieczny transport gotowego modułu na wskazany adres. Ustalamy termin i szczegóły logistyczne dostawy.",
	},
	{
		number: "5.",
		title: "Podłączenie instalacji",
		description:
			"Podłączamy prąd, ogrzewanie, klimatyzację oraz inne uzgodnione instalacje. Wszystko zostaje sprawdzone przed odbiorem.",
	},
];

const bottomSteps: ProcessStep[] = [
	{
		number: "2.",
		title: "Produkcja w hali",
		description:
			"Moduł powstaje w kontrolowanych warunkach, co gwarantuje wysoką jakość i precyzję wykonania. Prace realizowane są niezależnie od pogody.",
	},
	{
		number: "4.",
		title: "Montaż na działce",
		description:
			"Ustawiamy moduł w docelowym miejscu i wykonujemy montaż, często w jeden dzień. W przypadku kilku modułów łączymy je na miejscu.",
	},
	{
		number: "6.",
		title: "Przekazanie gotowego obiektu",
		description:
			"Przekazujemy gotowy pawilon do użytkowania. Możesz od razu rozpocząć działalność.",
	},
];

const mobileSteps: ProcessStep[] = [
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
			"Moduł powstaje w kontrolowanych warunkach, co gwarantuje wysoką jakość i precyzję wykonania. Prace realizowane są niezależnie od pogody.",
	},
	{
		number: "3.",
		title: "Transport",
		description:
			"Organizujemy bezpieczny transport gotowego modułu na wskazany adres. Ustalamy termin i szczegóły logistyczne dostawy.",
	},
	{
		number: "4.",
		title: "Montaż na działce",
		description:
			"Ustawiamy moduł w docelowym miejscu i wykonujemy montaż, często w jeden dzień. W przypadku kilku modułów łączymy je na miejscu.",
	},
	{
		number: "5.",
		title: "Podłączenie instalacji",
		description:
			"Podłączamy prąd, ogrzewanie, klimatyzację oraz inne uzgodnione instalacje. Wszystko zostaje sprawdzone przed odbiorem.",
	},
	{
		number: "6.",
		title: "Przekazanie gotowego obiektu",
		description:
			"Przekazujemy gotowy pawilon do użytkowania. Możesz od razu rozpocząć działalność.",
	},
];

export default function Process() {
	return (
		<section className="bg-[#155e75] py-16 md:py-20 lg:py-24">
			<div className="mx-auto max-w-[1280px] px-6">
				<h2 className="text-center text-[28px] font-medium leading-[1.1] tracking-[-0.03em] text-white md:text-[42px] lg:text-[46px]">
					Jak wygląda proces realizacji
				</h2>

				<div className="hidden md:block">
					<div className="mt-16 grid grid-cols-3">
						<div className="justify-self-start -translate-x-8 lg:-translate-x-0">
							<ProcessDesktopCard step={topSteps[0]} />
						</div>

						<div className="justify-self-center -translate-x-6 lg:-translate-x-12">
							<ProcessDesktopCard step={topSteps[1]} />
						</div>

						<div className="justify-self-end -translate-x-4 lg:-translate-x-28">
							<ProcessDesktopCard step={topSteps[2]} />
						</div>
					</div>

					<div className="relative mx-auto mt-10 h-[34px] w-full max-w-[1000px]">
						<div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-[#f2a43a]" />

						<TriangleUp className="absolute left-[0%] top-[3px]" />
						<TriangleDown className="absolute left-[20%] top-[17px]" />
						<TriangleUp className="absolute left-[40%] top-[3px]" />
						<TriangleDown className="absolute left-[60%] top-[17px]" />
						<TriangleUp className="absolute left-[80%] top-[3px]" />
						<TriangleDown className="absolute right-0 top-[17px]" />
					</div>

					<div className="mt-8 grid grid-cols-3">
						<div className="justify-self-start translate-x-10 lg:translate-x-52">
							<ProcessDesktopCard step={bottomSteps[0]} />
						</div>

						<div className="justify-self-center translate-x-8 lg:translate-x-36">
							<ProcessDesktopCard step={bottomSteps[1]} />
						</div>

						<div className="justify-self-end translate-x-6 lg:translate-x-20">
							<ProcessDesktopCard step={bottomSteps[2]} />
						</div>
					</div>
				</div>

				<div className="mt-12 grid gap-5 md:hidden">
					{mobileSteps.map((step) => (
						<article
							key={step.number}
							className="rounded-[18px] border border-white/10 bg-white/5 p-5"
						>
							<h3 className="text-[22px] font-semibold leading-[1.15] text-white">
								{step.number} {step.title}
							</h3>

							<p className="mt-3 text-[15px] leading-[1.55] text-white/85">{step.description}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

function ProcessDesktopCard({ step }: { step: ProcessStep }) {
	return (
		<article className="w-[280px] lg:w-[300px]">
			<h3 className="text-[22px] font-semibold leading-[1.12] text-white/95 lg:text-[25px]">
				{step.number} {step.title}
			</h3>

			<p className="mt-4 max-w-[280px] text-[15px] leading-[1.45] text-white/85 lg:text-[16px]">
				{step.description}
			</p>
		</article>
	);
}

function TriangleUp({ className = "" }: { className?: string }) {
	return (
		<div
			className={`h-0 w-0 border-l-[9px] border-r-[9px] border-b-[14px] border-l-transparent border-r-transparent border-b-[#f2a43a] ${className}`}
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
