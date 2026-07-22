const faqs = [
	{
		question: "Ile kosztuje dom modułowy?",
		answer:
			"Cena zależy od powierzchni, standardu wykończenia, wyposażenia oraz indywidualnych wymagań projektu. Każdą wycenę przygotowujemy indywidualnie.",
	},
	{
		question: "Jak długo trwa realizacja domu modułowego?",
		answer:
			"Czas realizacji zależy od wybranego modelu, zakresu prac oraz aktualnego harmonogramu produkcji. Budownictwo modułowe pozwala jednak skrócić czas realizacji względem tradycyjnej budowy.",
	},
	{
		question: "Czy dom modułowy może być użytkowany przez cały rok?",
		answer:
			"Tak. Wykonujemy domy modułowe całoroczne z odpowiednią izolacją oraz instalacjami dostosowanymi do użytkowania przez cały rok.",
	},
	{
		question: "Czy wykonujecie transport i montaż?",
		answer:
			"Tak. Zapewniamy transport oraz montaż obiektów modułowych na terenie województwa mazowieckiego i innych regionów Polski.",
	},
	{
		question: "Czy realizujecie zamówienia w Warszawie i Mińsku Mazowieckim?",
		answer:
			"Tak. Obsługujemy klientów z Mińska Mazowieckiego, Warszawy, Sulejówka, Halinowa, Choszczówki Rudzkiej oraz innych miejscowości województwa mazowieckiego, a nawet całej Polski.",
	},
	{
		question: "Czy pawilon handlowy wymaga pozwolenia na budowę?",
		answer:
			"Wymagania formalne zależą od rodzaju obiektu, jego powierzchni oraz sposobu użytkowania. W razie potrzeby pomagamy klientom uzyskać podstawowe informacje dotyczące formalności.",
	},
	{
		question: "Czy można zmodyfikować gotowy projekt?",
		answer:
			"Tak. Oferujemy możliwość dostosowania układu pomieszczeń, wykończenia oraz wyposażenia do indywidualnych potrzeb klienta.",
	},
];

export default function Faq() {
	return (
		<section className="bg-white px-4 py-20 md:px-6 lg:px-8">
			<div className="mx-auto max-w-[1100px]">
				<div className="mx-auto max-w-[760px] text-center">
					<p className="text-[14px] font-bold uppercase tracking-[0.12em] text-[#ef9228]">FAQ</p>

					<h2 className="mt-3 text-[34px] font-semibold leading-tight text-[#13272f] md:text-[46px]">
						Najczęściej zadawane pytania
					</h2>

					<p className="mt-4 text-[17px] leading-7 text-black/65">
						Zebraliśmy odpowiedzi na pytania, które najczęściej pojawiają się przy domach
						modułowych, pawilonach handlowych i obiektach kontenerowych.
					</p>
				</div>

				<div className="mt-12 grid gap-4">
					{faqs.map((faq) => (
						<details
							key={faq.question}
							className="group rounded-2xl border border-black/10 bg-[#f6f8f8] p-6 transition hover:border-[#ef9228]/40"
						>
							<summary className="cursor-pointer list-none text-[18px] font-semibold text-[#13272f]">
								<div className="flex items-center justify-between gap-4">
									<span>{faq.question}</span>
									<span className="text-[26px] font-light text-[#ef9228] transition group-open:rotate-45">
										+
									</span>
								</div>
							</summary>

							<p className="mt-4 max-w-[850px] text-[16px] leading-7 text-black/65">{faq.answer}</p>
						</details>
					))}
				</div>
			</div>
		</section>
	);
}
