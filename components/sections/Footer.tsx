import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";

const MAPS_URL =
	"https://www.google.com/maps/search/?api=1&query=Choszcz%C3%B3wka+Rudzka+13%2C+05-311+Choszcz%C3%B3wka+Rudzka";

export default function Footer() {
	return (
		<footer className="border-t border-black/10 bg-white pb-8 pt-14">
			<div className="mx-auto max-w-[1500px] px-4 md:px-6 lg:px-8">
				<div className="grid gap-x-10 gap-y-12 md:grid-cols-2 xl:grid-cols-[1.15fr_0.75fr_1.1fr_1.05fr_1.4fr] xl:gap-x-12">
					<div>
						<Link href="/" aria-label="Strona główna Moduł Expert 24">
							<Image
								src="/images/logo.svg"
								alt="Moduł Expert 24"
								width={160}
								height={60}
								className="h-auto w-[150px]"
							/>
						</Link>

						<div className="mt-5 h-[2px] w-[110px] bg-[#ef9228]" />

						<p className="mt-5 max-w-[320px] text-[15px] leading-7 text-black/70">
							Projektujemy i realizujemy domy modułowe, kontenery oraz pawilony handlowe na terenie
							Mazowsza.
						</p>
					</div>

					<div>
						<h3 className="text-[18px] font-semibold text-black">Informacje</h3>
						<div className="mt-3 h-[2px] w-[60px] bg-[#ef9228]" />

						<ul className="mt-5 space-y-3 text-[15px] text-black/75">
							<li>
								<Link href="/modele" className="transition hover:text-[#ef9228]">
									Nasze modele
								</Link>
							</li>

							<li>
								<Link href="/o-nas" className="transition hover:text-[#ef9228]">
									O firmie
								</Link>
							</li>

							<li>
								<Link href="/dom-modulowy-formalnosci" className="transition hover:text-[#ef9228]">
									Poradnik
								</Link>
							</li>

							<li>
								<Link href="/kontakt" className="transition hover:text-[#ef9228]">
									Kontakt
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-[18px] font-semibold text-black">Oferta i obszar</h3>
						<div className="mt-3 h-[2px] w-[120px] bg-[#ef9228]" />

						<ul className="mt-5 space-y-3 text-[15px] text-black/75">
							<li>
								<Link href="/pawilony-handlowe" className="transition hover:text-[#ef9228]">
									Pawilony handlowe
								</Link>
							</li>
							<li>
								<Link href="/kontenery-biurowe" className="transition hover:text-[#ef9228]">
									Kontenery biurowe
								</Link>
							</li>
							<li>
								<Link href="/domy-modulowe-cena" className="transition hover:text-[#ef9228]">
									Domy modułowe — cena
								</Link>
							</li>
							<li>
								<Link href="/domy-modulowe-warszawa" className="transition hover:text-[#ef9228]">
									Domy modułowe Warszawa
								</Link>
							</li>
							<li>
								<Link
									href="/domy-modulowe-minsk-mazowiecki"
									className="transition hover:text-[#ef9228]"
								>
									Domy modułowe Mińsk Mazowiecki
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-[18px] font-semibold text-black">Kontakt</h3>
						<div className="mt-3 h-[2px] w-[80px] bg-[#ef9228]" />

						<ul className="mt-5 space-y-4 text-[15px] leading-7 text-black/75">
							<li className="flex items-start gap-3">
								<MapPin className="mt-[3px] h-5 w-5 shrink-0 text-[#ef9228]" />
								<address className="not-italic leading-7">
									Choszczówka Rudzka 13
									<br />
									05-311 Choszczówka Rudzka
								</address>
							</li>

							<li className="flex items-start gap-3">
								<Mail className="h-5 w-5 shrink-0 text-[#ef9228]" />
								<a
									href="mailto:biuro@modulexpert24.pl"
									className="break-all leading-5 transition hover:text-[#ef9228]"
								>
									biuro@modulexpert24.pl
								</a>
							</li>

							<li className="flex items-center gap-3">
								<Phone className="h-5 w-5 shrink-0 text-[#ef9228]" />
								<a href="tel:+48575203444" className="transition hover:text-[#ef9228]">
									+48 575 203 444
								</a>
							</li>
							<li className="flex items-center gap-3 text-[14px]">
								<FaFacebookF className="h-5 w-5 shrink-0 text-[#ef9228]" />

								<a
									href="https://www.facebook.com/profile.php?id=61590299923979"
									target="_blank"
									rel="noopener noreferrer"
									className="transition hover:text-[#ef9228]"
								>
									ModułExpert24 na Facebook
								</a>
							</li>
						</ul>
					</div>

					<div className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm md:col-span-2 xl:col-span-1">
						<div className="flex items-center justify-between gap-3 border-b border-black/10 px-4 py-3">
							<div className="flex items-center gap-2 text-[14px] font-semibold text-black/80">
								<MapPin className="h-4 w-4 shrink-0 text-[#ef9228]" />
								Mapa dojazdu
							</div>

							<a
								href={MAPS_URL}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Otwórz lokalizację Moduł Expert 24 w Google Maps"
								className="inline-flex shrink-0 items-center gap-1 text-[13px] font-medium text-[#0b72e7] transition hover:text-[#ef9228]"
							>
								Otwórz w Mapach
								<ExternalLink className="h-3.5 w-3.5" />
							</a>
						</div>

						<div className="relative h-[260px] w-full">
							<iframe
								title="Mapa dojazdu - Moduł Expert 24, Choszczówka Rudzka 13"
								src="https://www.google.com/maps?q=Choszcz%C3%B3wka%20Rudzka%2013%2C%2005-311%20Choszcz%C3%B3wka%20Rudzka%2C%20Polska&z=16&output=embed"
								width="100%"
								height="100%"
								style={{ border: 0 }}
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								className="absolute inset-0 h-full w-full"
							/>
						</div>
					</div>
				</div>

				<div className="mt-12 border-t border-black/10 pt-6 text-center text-[14px] text-black/55">
					© {new Date().getFullYear()} Moduł Expert 24. Wszelkie prawa zastrzeżone.
				</div>
			</div>
		</footer>
	);
}
