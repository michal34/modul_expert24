"use client";

import { useActionState, useEffect, useRef } from "react";

import SubmitButton from "@/components/ui/SubmitButton";
import { sendPricingForm, type ContactFormState } from "@/src/actions/contact";
import { trackLeadConversion } from "@/src/lib/googleAds";

type PricingVariant = "general" | "house" | "pavilion";

type PricingFormProps = {
	variant?: PricingVariant;
};

const initialState: ContactFormState = {};

const content: Record<
	PricingVariant,
	{ heading: string; formHeading: string; source: string; bullets: string[] }
> = {
	general: {
		heading: "Co warto ustalić przed wyceną?",
		formHeading: "Opisz planowany obiekt",
		source: "Formularz wyceny na stronie głównej",
		bullets: [
			"Przeznaczenie obiektu",
			"Planowany metraż i układ",
			"Lokalizacja inwestycji",
			"Oczekiwany standard wykończenia",
		],
	},
	house: {
		heading: "Od czego zależy wycena domu?",
		formHeading: "Chcesz wycenę domu modułowego?",
		source: "Formularz wyceny domu modułowego",
		bullets: [
			"Metraż i układ pomieszczeń",
			"Standard całoroczny lub rekreacyjny",
			"Zakres instalacji i wykończenia",
			"Transport oraz warunki na działce",
		],
	},
	pavilion: {
		heading: "Od czego zależy wycena pawilonu?",
		formHeading: "Chcesz wycenę swojego pawilonu?",
		source: "Formularz wyceny pawilonu",
		bullets: [
			"Wymiary i przeznaczenie",
			"Liczba witryn oraz drzwi",
			"Instalacje i wyposażenie",
			"Transport oraz miejsce montażu",
		],
	},
};

export default function PricingForm({ variant = "general" }: PricingFormProps) {
	const [state, formAction] = useActionState(sendPricingForm, initialState);
	const formRef = useRef<HTMLFormElement>(null);
	const lastTrackedSubmission = useRef<string | null>(null);
	const selectedContent = content[variant];
	const fieldPrefix = `pricing-${variant}`;

	useEffect(() => {
		if (!state.submissionId || lastTrackedSubmission.current === state.submissionId) {
			return;
		}

		lastTrackedSubmission.current = state.submissionId;
		trackLeadConversion(state.submissionId);
		formRef.current?.reset();
	}, [state.submissionId]);

	return (
		<section className="py-20">
			<div className="mx-auto max-w-[1200px] px-6">
				<div className="grid items-start gap-12 lg:grid-cols-[1fr_auto_1fr]">
					<div>
						<h2 className="text-[24px] font-semibold md:text-[30px]">{selectedContent.heading}</h2>

						<ul className="mt-8 space-y-4 text-[18px] leading-[1.6]">
							{selectedContent.bullets.map((bullet) => (
								<li key={bullet} className="flex items-start gap-3">
									<span
										aria-hidden="true"
										className="mt-[10px] h-2 w-2 shrink-0 rounded-full bg-black"
									/>
									<span>{bullet}</span>
								</li>
							))}
						</ul>
					</div>

					<div aria-hidden="true" className="hidden h-full w-px bg-black/20 lg:block" />

					<div>
						<h2 className="text-[24px] font-semibold md:text-[30px]">
							{selectedContent.formHeading}
						</h2>

						<form
							ref={formRef}
							action={formAction}
							data-lpignore="true"
							suppressHydrationWarning
							className="mt-8 flex max-w-[460px] flex-col gap-5"
						>
							<input
								type="text"
								name="company"
								tabIndex={-1}
								autoComplete="off"
								data-lpignore="true"
								className="hidden"
								aria-hidden="true"
							/>
							<input type="hidden" name="source" value={selectedContent.source} />

							<label htmlFor={`${fieldPrefix}-name`} className="sr-only">
								Imię
							</label>
							<input
								id={`${fieldPrefix}-name`}
								name="name"
								type="text"
								placeholder="Imię"
								required
								minLength={2}
								maxLength={80}
								autoComplete="name"
								data-lpignore="true"
								className="h-12 rounded-full border border-black/30 px-5 outline-none focus:border-[#ef9228]"
							/>

							<label htmlFor={`${fieldPrefix}-phone`} className="sr-only">
								Telefon
							</label>
							<input
								id={`${fieldPrefix}-phone`}
								name="phone"
								type="tel"
								placeholder="Telefon"
								required
								maxLength={30}
								autoComplete="tel"
								data-lpignore="true"
								inputMode="tel"
								className="h-12 rounded-full border border-black/30 px-5 outline-none focus:border-[#ef9228]"
							/>

							<label htmlFor={`${fieldPrefix}-email`} className="sr-only">
								E-mail
							</label>
							<input
								id={`${fieldPrefix}-email`}
								name="email"
								type="email"
								placeholder="E-mail"
								required
								maxLength={254}
								autoComplete="email"
								data-lpignore="true"
								inputMode="email"
								className="h-12 rounded-full border border-black/30 px-5 outline-none focus:border-[#ef9228]"
							/>

							<label htmlFor={`${fieldPrefix}-message`} className="sr-only">
								Wiadomość
							</label>
							<textarea
								id={`${fieldPrefix}-message`}
								name="message"
								placeholder="Napisz, jaki obiekt planujesz i gdzie ma stanąć"
								required
								minLength={10}
								maxLength={3000}
								rows={4}
								data-lpignore="true"
								className="min-h-28 rounded-[24px] border border-black/30 px-5 py-3 outline-none focus:border-[#ef9228]"
							/>

							<div className="flex justify-center">
								<SubmitButton size="small" />
							</div>

							<div className="min-h-6 text-center" aria-live="polite" aria-atomic="true">
								{state.success && (
									<p role="status" className="text-sm font-medium text-green-700">
										{state.success}
									</p>
								)}
								{state.error && (
									<p role="alert" className="text-sm font-medium text-red-700">
										{state.error}
									</p>
								)}
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
