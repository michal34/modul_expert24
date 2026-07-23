"use client";

import { GOOGLE_ADS_CONSENT_OPEN_EVENT } from "@/src/lib/site";

export default function ConsentSettingsButton() {
	return (
		<button
			type="button"
			onClick={() => window.dispatchEvent(new Event(GOOGLE_ADS_CONSENT_OPEN_EVENT))}
			className="underline decoration-black/25 underline-offset-4 transition hover:text-[#9a4300]"
		>
			Ustawienia pomiaru
		</button>
	);
}
