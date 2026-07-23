import Image from "next/image";
import Link from "next/link";

import DesktopNavigation from "@/components/sections/DesktopNavigation";
import MobileMenu from "@/components/sections/MobileMenu";
import { SITE_NAME } from "@/src/lib/site";

const navLinks = [
	{ label: "Domy modułowe", href: "/domy-modulowe" },
	{ label: "Pawilony", href: "/pawilony-handlowe" },
	{ label: "Modele pawilonów", href: "/modele" },
	{ label: "Poradnik", href: "/dom-modulowy-formalnosci" },
	{ label: "O firmie", href: "/o-nas" },
	{ label: "Kontakt", href: "/kontakt" },
] as const;

export type HeaderActiveHref = (typeof navLinks)[number]["href"];

type HeaderProps = {
	activeHref?: HeaderActiveHref;
};

export default function Header({ activeHref }: HeaderProps) {
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

				<DesktopNavigation links={navLinks} activeHref={activeHref} />
				<MobileMenu links={navLinks} activeHref={activeHref} />
			</div>
		</header>
	);
}