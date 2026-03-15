import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, FactoryIcon } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="mt-24 border-t pt-12 pb-10">
			<div className="mx-auto max-w-[1600px] px-6">
				<div className="grid items-start gap-16 md:grid-cols-2 md:justify-items-center lg:grid-cols-[1fr_1fr_1fr_1.6fr] lg:gap-24">
					{/* LOGO + OPIS */}
					<div className="max-w-[260px] md:max-w-none">
						<div className="flex items-center gap-3">
							<Image src="/images/logo.svg" alt="Moduł Expert24" width={160} height={60} priority />
						</div>

						<div className="mt-4 h-[2px] w-[140px] bg-[#ef9228]" />

						<p className="mt-4 max-w-[260px] text-[14px] leading-[1.6] text-black/80">
							Moduł Expert 24 tworzy nowoczesne pawilony i kontenery modułowe klasy premium,
							zaprojektowane z myślą o szybkim i efektywnym starcie działalności. To estetyczna i
							elastyczna alternatywa dla tradycyjnej budowy.
						</p>
					</div>

					{/* SKRÓTY */}
					<div className="max-w-[200px]">
						<h3 className="text-[20px] mt-7 font-semibold">Skróty</h3>

						<div className="mt-3 h-[2px] w-[80px] bg-[#ef9228]" />

						<ul className="mt-5 space-y-3 text-[15px]">
							{/* <li>
                <Link href="/oferta" className="hover:opacity-70">
                  Oferta
                </Link>
              </li>

              <li>
                <Link href="/realizacje" className="hover:opacity-70">
                  Realizacje
                </Link>
              </li>

              <li>
                <Link href="/modele" className="hover:opacity-70">
                  Nasze Modele
                </Link>
              </li>

              <li>
                <Link href="/dlaczego-my" className="hover:opacity-70">
                  Dlaczego my?
                </Link>
              </li> */}

							<li>
								<Link href="/kontakt" className="hover:opacity-70">
									Kontakt
								</Link>
							</li>
						</ul>
					</div>

					{/* DANE KONTAKTOWE */}
					<div className="max-w-[240px]">
						<h3 className="mt-6 text-[20px] font-semibold">Dane kontaktowe</h3>

						<div className="mt-3 h-[2px] w-[140px] bg-[#ef9228]" />

						<ul className="mt-5 space-y-4 text-[15px]">
							<li className="flex items-start gap-3">
								<MapPin className="mt-[3px] h-5 w-5 text-[#ef9228]" />
								<address className="not-italic leading-[1.6]">
									Mikołaja Kopernika 17
									<br />
									05-300 Mińsk Mazowiecki
									<br />
									Polska
								</address>
							</li>

							<li className="flex items-center gap-3">
								<Mail className="h-5 w-5 text-[#ef9228]" />
								<a href="mailto:kontakt@modulexpert24.pl" className="hover:underline">
									kontakt@modulexpert24.pl
								</a>
							</li>

							<li className="flex items-center gap-3">
								<Phone className="h-5 w-5 text-[#ef9228]" />
								<a href="tel:+48123123123" className="hover:underline">
									+48 123 123 123
								</a>
							</li>

							<li className="flex items-center gap-3">
								<Phone className="h-5 w-5 text-[#ef9228]" />
								<a href="tel:+48321321321" className="hover:underline">
									+48 321 321 321
								</a>
							</li>
						</ul>

						<div className="mt-4 space-y-3 text-[15px]">
							<a
								href="https://facebook.com"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 text-[#ef9228] transition hover:text-[#d87e1c]"
							>
								<FaFacebookF className="h-5 w-5" />
								<span className="text-black/85">modułexpert24</span>
							</a>
							<a
								href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 text-[#ef9228] transition hover:text-[#d87e1c]"
							>
								<FaInstagram className="h-5 w-5" />
								<span className="text-black/85">@modułexpert24</span>
							</a>
						</div>
					</div>

					{/* MAPA */}
					<div className="w-full overflow-hidden rounded-[10px] border border-black/10 shadow-sm">
						<iframe
							title="Mapa dojazdu - Mikołaja Kopernika 17, Mińsk Mazowiecki"
							src="https://www.google.com/maps?q=Miko%C5%82aja%20Kopernika%2017%2C%2005-300%20Mi%C5%84sk%20Mazowiecki%2C%20Polska&z=16&output=embed"
							width="100%"
							height="320"
							style={{ border: 0 }}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="w-full"
						/>
					</div>
				</div>

				{/* COPYRIGHT */}
				<div className="mt-12 border-t pt-6 text-center text-sm text-black/60">
					© {new Date().getFullYear()} Moduł Expert24. Wszelkie prawa zastrzeżone.
				</div>
			</div>
		</footer>
	);
}
