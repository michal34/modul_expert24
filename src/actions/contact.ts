"use server";

import { Resend } from "resend";
import { redirect } from "next/navigation";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str: string) {
	return str
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
}

async function sendEmail({
	name,
	phone,
	email,
	message,
}: {
	name: string;
	phone: string;
	email: string;
	message: string;
}) {
	await resend.emails.send({
		from: "onboarding@resend.dev",
		to: ["biuro@modulexpert24.pl"],
		replyTo: email,
		subject: `Nowa wiadomość od ${name}`,
		html: `
			<h2>Nowa wiadomość z formularza</h2>
			<p><strong>Imię:</strong> ${escapeHtml(name)}</p>
			<p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>
			<p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
			<p><strong>Wiadomość:</strong></p>
			<p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
		`,
	});
}

export async function sendContactForm(formData: FormData) {
	const name = String(formData.get("name") || "").trim();
	const phone = String(formData.get("phone") || "").trim();
	const email = String(formData.get("email") || "").trim();
	const message = String(formData.get("message") || "").trim();
	const company = String(formData.get("company") || "").trim();

	if (company) {
		redirect("/kontakt?sent=1");
	}

	if (!name || !phone || !email || !message) {
		throw new Error("Uzupełnij wszystkie pola.");
	}

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		throw new Error("Podaj poprawny adres e-mail.");
	}

	await sendEmail({ name, phone, email, message });

	redirect("/kontakt?sent=1");
}

type PricingFormState = {
	success?: string;
	error?: string;
};

export async function sendPricingForm(
	_prevState: PricingFormState,
	formData: FormData,
): Promise<PricingFormState> {
	const name = String(formData.get("name") || "").trim();
	const phone = String(formData.get("phone") || "").trim();
	const email = String(formData.get("email") || "").trim();
	const message = String(formData.get("message") || "").trim();
	const company = String(formData.get("company") || "").trim();

	if (company) {
		return { success: "Dziękujemy! Wiadomość została wysłana." };
	}

	if (!name || !phone || !email || !message) {
		return { error: "Uzupełnij wszystkie pola." };
	}

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		return { error: "Podaj poprawny adres e-mail." };
	}

	try {
		await sendEmail({ name, phone, email, message });
		return { success: "Dziękujemy! Odpowiemy w ciągu kilku godzin." };
	} catch (error) {
		console.error(error);
		return { error: "Nie udało się wysłać formularza. Spróbuj ponownie." };
	}
}
