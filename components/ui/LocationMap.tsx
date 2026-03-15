import { ExternalLink, MapPin } from "lucide-react";

const ADDRESS = "Mikołaja Kopernika 17, 05-300 Mińsk Mazowiecki, Polska";
const MAPS_URL =
	"https://www.google.com/maps?q=Miko%C5%82aja%20Kopernika%2017%2C%2005-300%20Mi%C5%84sk%20Mazowiecki%2C%20Polska";
const EMBED_URL =
	"https://www.google.com/maps?q=Miko%C5%82aja%20Kopernika%2017%2C%2005-300%20Mi%C5%84sk%20Mazowiecki%2C%20Polska&z=16&output=embed";

export default function LocationMap() {
	return (
		<div className="w-full overflow-hidden rounded-[8px] border border-black/10 bg-white shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
			<div className="flex items-center justify-between border-b border-black/10 px-4 py-3">
				<div className="flex items-center gap-2">
					<MapPin className="h-4 w-4 text-[#ef9228]" strokeWidth={2} />
					<span className="text-[14px] font-medium text-black">Nasza lokalizacja</span>
				</div>

				<a
					href={MAPS_URL}
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-1 text-[13px] font-medium text-black/70 transition hover:text-black"
					aria-label={`Otwórz adres ${ADDRESS} w Google Maps`}
				>
					Otwórz mapę
					<ExternalLink className="h-3.5 w-3.5" strokeWidth={2} />
				</a>
			</div>

			<div className="relative h-[240px] w-full">
				<iframe
					title="Mapa dojazdu - Mikołaja Kopernika 17, 05-300 Mińsk Mazowiecki, Polska"
					src={EMBED_URL}
					width="100%"
					height="100%"
					style={{ border: 0 }}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					className="absolute inset-0 h-full w-full"
				/>
			</div>
		</div>
	);
}
