"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type DesktopNavigationProps = {
	links: ReadonlyArray<{
		label: string;
		href: string;
	}>;
	activeHref?: string;
};

export default function DesktopNavigation({ links, activeHref }: DesktopNavigationProps) {
	const pathname = usePathname();

	function isLinkActive(href: string) {
		if (activeHref) {
			return href === activeHref;
		}

		if (href === "/modele") {
			return pathname === "/modele" || pathname.startsWith("/modele/");
		}

		if (href === "/domy-modulowe") {
			return pathname.startsWith("/domy-modulowe");
		}

		return pathname === href;
	}

	return (
		<nav className="hidden items-center gap-6 lg:flex xl:gap-9" aria-label="Główna nawigacja">
			{links.map((link) => {
				const active = isLinkActive(link.href);

				return (
					<Link
						key={link.href}
						href={link.href}
						aria-current={active ? "page" : undefined}
						className={`group relative rounded-full px-3 py-2 text-[15px] font-semibold transition-colors xl:text-[16px] ${
							active
								? "bg-[#fff7ef] text-[#9a4300]"
								: "text-[#111111] hover:bg-[#fff7ef] hover:text-[#9a4300]"
						}`}
					>
						{link.label}
						<span
							aria-hidden="true"
							className={`absolute -bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-[#ef9228] transition-all ${
								active ? "w-7" : "w-0 group-hover:w-7"
							}`}
						/>
					</Link>
				);
			})}
		</nav>
	);
}