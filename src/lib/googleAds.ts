import { GOOGLE_ADS_CONVERSION_SEND_TO, GOOGLE_ADS_ID } from "@/src/lib/site";

type ConsentChoice = "granted" | "denied";

const GOOGLE_ADS_SCRIPT_ID = "google-ads-gtag";

function ensureGtag() {
	if (typeof window === "undefined") {
		return;
	}

	window.dataLayer = window.dataLayer || [];

	if (!window.gtag) {
		window.gtag = (...args: unknown[]) => {
			window.dataLayer.push(args);
		};
	}
}

function loadGoogleAds() {
	if (typeof document === "undefined" || document.getElementById(GOOGLE_ADS_SCRIPT_ID)) {
		return;
	}

	window.gtag?.("js", new Date());
	window.gtag?.("config", GOOGLE_ADS_ID);

	const script = document.createElement("script");
	script.id = GOOGLE_ADS_SCRIPT_ID;
	script.async = true;
	script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;
	document.head.appendChild(script);
}

export function updateGoogleAdsConsent(choice: ConsentChoice) {
	if (typeof window === "undefined") {
		return;
	}

	ensureGtag();
	window.gtag?.("consent", "update", {
		ad_storage: choice,
		analytics_storage: choice,
		ad_user_data: choice,
		ad_personalization: choice,
	});

	if (choice === "granted") {
		loadGoogleAds();
	}
}

export function trackLeadConversion(transactionId: string) {
	if (typeof window === "undefined" || typeof window.gtag !== "function") {
		return;
	}

	window.gtag("event", "conversion", {
		send_to: GOOGLE_ADS_CONVERSION_SEND_TO,
		transaction_id: transactionId,
	});
}
