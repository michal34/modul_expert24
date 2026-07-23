import Image from "next/image";
import Link from "next/link";

import MobileMenu from "@/components/sections/MobileMenu";
import { SITE_NAME } from "@/src/lib/site";

const navLinks = [
	{ label: "Domy modułowe", href: "/domy-modulowe" },
	{ label: "Pawilony", href: "/pawilony-handlowe" },
	{ label: "Modele pawilonów", href: "/modele" },
	{ label: "Poradnik", href: "/dom-modulowy-formalnosci" },
	{ label: "O firmie", href: "/o-nas" },
	{ label: "Kontakt", href: "/kontakt" },
];

export default function Header() {
	return (
		<header className="relative top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-md">
			<div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-3 md:px-6 lg:px-8">
				<Link href="/" aria-label={`Strona główna ${SITE_NAME}`} className="flex items-center">
					<Image
						src="/images/logo.webp"
						alt={SITE_NAME}
						width={180}
						height={64}
						priority
						unoptimized
						className="h-auto w-[130px] sm:w-[150px] md:w-[165px]"
					/>
				</Link>

				<nav className="hidden items-center gap-6 lg:flex xl:gap-9" aria-label="Główna nawigacja">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="group relative px-1 py-2 text-[15px] font-semibold text-[#111111] transition-colors hover:text-[#9a4300] xl:text-[16px]"
						>
							{link.label}
							<span className="absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-[#ef9228] transition-all group-hover:w-7" />
						</Link>
					))}
				</nav>

				<MobileMenu links={navLinks} />
			</div>
		</header>
	);
}
