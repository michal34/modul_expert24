"use client";

import { useActionState, useEffect, useRef } from "react";

import SubmitButton from "@/components/ui/SubmitButton";
import { sendContactForm, type ContactFormState } from "@/src/actions/contact";
import { trackLeadConversion } from "@/src/lib/googleAds";

const initialState: ContactFormState = {};

const inputClassName =
	"h-[56px] w-full rounded-full border border-black/15 bg-[#fafafa] px-5 text-[15px] outline-none transition focus:border-[#ef9228]";

export default function ContactForm() {
	const [state, formAction] = useActionState(sendContactForm, initialState);
	const formRef = useRef<HTMLFormElement>(null);
	const lastTrackedSubmission = useRef<string | null>(null);

	useEffect(() => {
		if (!state.submissionId || lastTrackedSubmission.current === state.submissionId) {
			return;
		}

		lastTrackedSubmission.current = state.submissionId;
		trackLeadConversion(state.submissionId);
		formRef.current?.reset();
	}, [state.submissionId]);

	return (
		<form
			ref={formRef}
			action={formAction}
			data-lpignore="true"
			suppressHydrationWarning
			className="mt-12 space-y-6"
		>
			<input
				type="text"
				name="company"
				className="hidden"
				tabIndex={-1}
				autoComplete="off"
				data-lpignore="true"
				aria-hidden="true"
			/>
			<input type="hidden" name="source" value="Formularz na stronie kontaktowej" />

			<div className="grid gap-5 md:grid-cols-2">
				<div>
					<label
						htmlFor="contact-name"
						className="mb-2 block text-[15px] font-medium text-black/85"
					>
						Imię
					</label>
					<input
						id="contact-name"
						name="name"
						type="text"
						required
						minLength={2}
						maxLength={80}
						autoComplete="name"
						data-lpignore="true"
						placeholder="Jan Kowalski"
						className={inputClassName}
					/>
				</div>

				<div>
					<label
						htmlFor="contact-phone"
						className="mb-2 block text-[15px] font-medium text-black/85"
					>
						Telefon
					</label>
					<input
						id="contact-phone"
						name="phone"
						type="tel"
						required
						maxLength={30}
						autoComplete="tel"
						data-lpignore="true"
						inputMode="tel"
						placeholder="+48 123 123 123"
						className={inputClassName}
					/>
				</div>
			</div>

			<div>
				<label htmlFor="contact-email" className="mb-2 block text-[15px] font-medium text-black/85">
					E-mail
				</label>
				<input
					id="contact-email"
					name="email"
					type="email"
					required
					maxLength={254}
					autoComplete="email"
					data-lpignore="true"
					inputMode="email"
					placeholder="kontakt@email.pl"
					className={inputClassName}
				/>
			</div>

			<div>
				<label
					htmlFor="contact-message"
					className="mb-2 block text-[15px] font-medium text-black/85"
				>
					Wiadomość
				</label>
				<textarea
					id="contact-message"
					name="message"
					rows={8}
					required
					minLength={10}
					maxLength={3000}
					data-lpignore="true"
					placeholder="Napisz, czego potrzebujesz, jaki metraż Cię interesuje i gdzie ma stanąć obiekt."
					className="min-h-[220px] w-full rounded-[24px] border border-black/15 bg-[#fafafa] px-5 py-4 text-[15px] outline-none transition focus:border-[#ef9228]"
				/>
			</div>

			<div className="flex flex-col items-center pt-8">
				<SubmitButton />

				<div className="mt-5 min-h-6 text-center" aria-live="polite" aria-atomic="true">
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

				<p className="mt-4 text-center text-[14px] text-black/60">
					Odpowiadamy najszybciej, jak to możliwe.
				</p>
				<p className="mt-5 max-w-[520px] text-center text-[13px] leading-[1.7] text-black/50">
					Wysyłając formularz, prosisz o kontakt w sprawie swojego zapytania.
				</p>
			</div>
		</form>
	);
}
