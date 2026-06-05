import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
export default function Footer() {
	return (
		<footer className="border-t border-black/10 bg-white pt-14 pb-8">
			<div className="mx-auto max-w-[1500px] px-4 md:px-6 lg:px-8">
				<div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1.1fr_1fr_1.4fr] lg:gap-14">
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
							Moduł Expert 24 projektuje i realizuje domy modułowe, domy kontenerowe oraz pawilony
							handlowe dla klientów z Mazowsza, w szczególności z okolic Mińska Mazowieckiego i
							Warszawy.
						</p>
					</div>

					<div>
						<h3 className="text-[18px] font-semibold text-black">Menu</h3>
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
								<Link href="/kontakt" className="transition hover:text-[#ef9228]">
									Kontakt
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-[18px] font-semibold text-black">Obszar działania</h3>
						<div className="mt-3 h-[2px] w-[120px] bg-[#ef9228]" />

						<ul className="mt-5 space-y-3 text-[15px] text-black/75">
							<li>
								<Link
									href="/domy-modulowe-minsk-mazowiecki"
									className="transition hover:text-[#ef9228]"
								>
									Domy modułowe Mińsk Mazowiecki
								</Link>
							</li>

							<li>
								<span className="text-black/55">Obsługujemy również Warszawę i okolice</span>
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

							<li className="flex items-center gap-3">
								<Mail className="h-5 w-5 shrink-0 text-[#ef9228]" />
								<a href="mailto:biuro@modulexpert24.pl" className="transition hover:text-[#ef9228]">
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

					<div className="overflow-hidden rounded-2xl border border-black/10 shadow-sm">
						<iframe
							title="Mapa dojazdu - Moduł Expert 24, Choszczówka Rudzka 13"
							src="https://www.google.com/maps?q=Choszcz%C3%B3wka%20Rudzka%2013%2C%2005-311%20Choszcz%C3%B3wka%20Rudzka%2C%20Polska&z=16&output=embed"
							width="100%"
							height="300"
							style={{ border: 0 }}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="block w-full"
						/>
					</div>
				</div>

				<div className="mt-12 border-t border-black/10 pt-6 text-center text-[14px] text-black/55">
					© {new Date().getFullYear()} Moduł Expert 24. Wszelkie prawa zastrzeżone.
				</div>

				<p className="mt-2 text-center text-[13px] text-black/45">
					Domy modułowe • Pawilony handlowe • Domy kontenerowe • Mińsk Mazowiecki • Warszawa •
					Mazowieckie
				</p>
			</div>
		</footer>
	);
}
