import Link from "next/link";

type FinalCtaProps = {
	variant?: "general" | "house" | "pavilion";
};

const content = {
	general: {
		title: "Opowiedz nam o swojej inwestycji",
		text: "Podaj przeznaczenie obiektu, planowany metraż i lokalizację. Przygotujemy propozycję dalszych kroków oraz indywidualną wycenę.",
	},
	house: {
		title: "Poproś o wycenę domu modułowego",
		text: "Napisz, jaki metraż, układ i standard Cię interesują oraz gdzie znajduje się działka. Przygotujemy indywidualną propozycję.",
	},
	pavilion: {
		title: "Poproś o wycenę pawilonu",
		text: "Podaj wymiary, przeznaczenie, wyposażenie i lokalizację. Przygotujemy konfigurację oraz indywidualną wycenę.",
	},
} as const;

export default function FinalCta({ variant = "general" }: FinalCtaProps) {
	const selectedContent = content[variant];

	return (
		<section className="py-16 md:py-24">
			<div className="mx-auto max-w-[1200px] px-6">
				<div className="mx-auto max-w-[980px] rounded-[24px] bg-[#b7cdea] px-8 py-16 text-center shadow-[0_10px_20px_rgba(0,0,0,0.12)] md:px-12 md:py-20">
					<h2 className="text-[26px] font-semibold leading-[1.2] tracking-[-0.02em] text-black md:text-[44px]">
						{selectedContent.title}
					</h2>

					<p className="mx-auto mt-8 max-w-[720px] text-[18px] leading-[1.7] text-black/70 md:text-[20px]">
						{selectedContent.text}
					</p>

					<div className="mt-10">
						<Link
							href="/kontakt"
							className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-[#ef9228] px-9 text-[18px] font-semibold text-[#13272f] transition-all duration-300 hover:scale-[1.02] hover:bg-[#d97918]"
						>
							Wypełnij formularz
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
