"use client";

import { useEffect, useState } from "react";

import { updateGoogleAdsConsent } from "@/src/lib/googleAds";
import { GOOGLE_ADS_CONSENT_OPEN_EVENT, GOOGLE_ADS_CONSENT_STORAGE_KEY } from "@/src/lib/site";

type ConsentChoice = "granted" | "denied";

export default function GoogleAdsConsent() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		let storedChoice: string | null = null;

		try {
			storedChoice = window.localStorage.getItem(GOOGLE_ADS_CONSENT_STORAGE_KEY);
		} catch {
			// Przy zablokowanym localStorage użytkownik nadal może wybrać zgodę dla bieżącej sesji.
		}

		const timeoutId = window.setTimeout(() => {
			setIsVisible(storedChoice !== "granted" && storedChoice !== "denied");
		}, 0);

		if (storedChoice === "granted") {
			updateGoogleAdsConsent("granted");
		}

		function openConsentSettings() {
			setIsVisible(true);
		}

		window.addEventListener(GOOGLE_ADS_CONSENT_OPEN_EVENT, openConsentSettings);

		return () => {
			window.clearTimeout(timeoutId);
			window.removeEventListener(GOOGLE_ADS_CONSENT_OPEN_EVENT, openConsentSettings);
		};
	}, []);

	function saveChoice(choice: ConsentChoice) {
		try {
			window.localStorage.setItem(GOOGLE_ADS_CONSENT_STORAGE_KEY, choice);
		} catch {
			// Aktualizacja Consent Mode nadal działa, nawet jeśli wybór nie może zostać zapisany.
		}

		updateGoogleAdsConsent(choice);
		setIsVisible(false);
	}

	if (!isVisible) {
		return null;
	}

	return (
		<div
			role="dialog"
			aria-label="Ustawienia plików cookie"
			aria-live="polite"
			className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-[760px] rounded-2xl border border-black/10 bg-white p-5 text-[#13272f] shadow-2xl sm:p-6"
		>
			<p className="font-semibold">Pomiar skuteczności strony</p>
			<p className="mt-2 text-sm leading-6 text-black/70">
				Google Ads może używać plików cookie do mierzenia, czy formularz doprowadził do zapytania.
				Możesz zaakceptować lub odrzucić ten pomiar.
			</p>
			<div className="mt-4 flex flex-wrap gap-3">
				<button
					type="button"
					onClick={() => saveChoice("granted")}
					className="min-h-11 rounded-full bg-[#ef9228] px-5 font-semibold text-[#13272f] transition hover:bg-[#d97918]"
				>
					Akceptuję
				</button>
				<button
					type="button"
					onClick={() => saveChoice("denied")}
					className="min-h-11 rounded-full border border-black/20 bg-white px-5 font-semibold transition hover:border-black/40"
				>
					Odrzucam
				</button>
			</div>
		</div>
	);
}
