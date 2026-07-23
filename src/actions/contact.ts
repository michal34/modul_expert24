"use server";

import { randomUUID } from "node:crypto";
import { headers } from "next/headers";
import { Resend } from "resend";

import { CONTACT, CONTACT_FORM_FROM } from "@/src/lib/site";

export type ContactFormState = {
	success?: string;
	error?: string;
	submissionId?: string;
};

type ContactValues = {
	name: string;
	phone: string;
	email: string;
	message: string;
	source: string;
};

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimitStore = new Map<string, number[]>();

function escapeHtml(value: string) {
	return value
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
}

function getString(formData: FormData, field: string) {
	return String(formData.get(field) ?? "").trim();
}

function validateForm(formData: FormData):
	| { values: ContactValues }
	| {
			error: string;
	  } {
	const name = getString(formData, "name");
	const phone = getString(formData, "phone");
	const email = getString(formData, "email").toLowerCase();
	const message = getString(formData, "message");
	const source = getString(formData, "source") || "Formularz kontaktowy";

	if (!name || !phone || !email || !message) {
		return { error: "Uzupełnij wszystkie pola." };
	}

	if (name.length < 2 || name.length > 80) {
		return { error: "Imię powinno mieć od 2 do 80 znaków." };
	}

	const phoneDigits = phone.replace(/\D/g, "");
	const validPhoneCharacters = /^[+()\d\s-]+$/.test(phone);
	if (!validPhoneCharacters || phoneDigits.length < 7 || phoneDigits.length > 15) {
		return { error: "Podaj poprawny numer telefonu." };
	}

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (email.length > 254 || !emailRegex.test(email)) {
		return { error: "Podaj poprawny adres e-mail." };
	}

	if (message.length < 10 || message.length > 3000) {
		return { error: "Wiadomość powinna mieć od 10 do 3000 znaków." };
	}

	return {
		values: {
			name,
			phone,
			email,
			message,
			source: source.slice(0, 80),
		},
	};
}

async function getClientKey() {
	const requestHeaders = await headers();
	const forwardedFor = requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim();

	return forwardedFor || requestHeaders.get("x-real-ip") || "unknown";
}

function isRateLimited(clientKey: string) {
	const now = Date.now();
	const recentRequests = (rateLimitStore.get(clientKey) ?? []).filter(
		(timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
	);

	if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
		rateLimitStore.set(clientKey, recentRequests);
		return true;
	}

	recentRequests.push(now);
	rateLimitStore.set(clientKey, recentRequests);
	return false;
}

async function sendEmail({ name, phone, email, message, source }: ContactValues) {
	const apiKey = process.env.RESEND_API_KEY?.trim();

	if (!apiKey) {
		throw new Error("Brak zmiennej RESEND_API_KEY.");
	}

	const resend = new Resend(apiKey);
	const { error } = await resend.emails.send({
		from: CONTACT_FORM_FROM,
		to: [CONTACT.email],
		replyTo: email,
		subject: `${source}: wiadomość od ${name}`,
		text: [
			`Źródło: ${source}`,
			`Imię: ${name}`,
			`Telefon: ${phone}`,
			`E-mail: ${email}`,
			"",
			message,
		].join("\n"),
		html: `
			<h2>Nowa wiadomość z formularza Moduł Expert24</h2>
			<p><strong>Źródło:</strong> ${escapeHtml(source)}</p>
			<p><strong>Imię:</strong> ${escapeHtml(name)}</p>
			<p><strong>Telefon:</strong> ${escapeHtml(phone)}</p>
			<p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
			<p><strong>Wiadomość:</strong></p>
			<p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
		`,
	});

	if (error) {
		throw new Error(error.message);
	}
}

async function processContactForm(formData: FormData): Promise<ContactFormState> {
	const company = getString(formData, "company");

	// Pole-pułapka: bot otrzymuje neutralną odpowiedź, ale wiadomość nie jest wysyłana.
	if (company) {
		return { success: "Dziękujemy! Wiadomość została wysłana." };
	}

	const validation = validateForm(formData);
	if ("error" in validation) {
		return { error: validation.error };
	}

	const clientKey = await getClientKey();
	if (isRateLimited(clientKey)) {
		return {
			error: "Wysłano zbyt wiele wiadomości. Spróbuj ponownie za kilka minut.",
		};
	}

	try {
		await sendEmail(validation.values);

		return {
			success: "Dziękujemy! Odpowiemy najszybciej, jak to możliwe.",
			submissionId: randomUUID(),
		};
	} catch (error) {
		console.error(
			"Contact form delivery failed:",
			error instanceof Error ? error.message : "Nieznany błąd",
		);

		return {
			error: "Nie udało się wysłać formularza. Spróbuj ponownie lub zadzwoń.",
		};
	}
}

export async function sendContactForm(
	_prevState: ContactFormState,
	formData: FormData,
): Promise<ContactFormState> {
	return processContactForm(formData);
}

export async function sendPricingForm(
	_prevState: ContactFormState,
	formData: FormData,
): Promise<ContactFormState> {
	return processContactForm(formData);
}
