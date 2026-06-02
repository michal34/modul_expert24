"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
	{ label: "Nasze modele", href: "/modele" },
	{ label: "O firmie", href: "/o-nas" },
	{ label: "Kontakt", href: "/kontakt" },
];

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	const closeMenu = () => setIsOpen(false);

	function isActive(href: string) {
		return pathname === href || pathname.startsWith(`${href}/`);
	}

	return (
		<header className="top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-md">
			<div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-3 md:px-6 lg:px-8">
				<Link
					href="/"
					onClick={closeMenu}
					aria-label="Strona główna Moduł Expert 24"
					className="flex items-center"
				>
					<Image
						src="/images/logo.svg"
						alt="Moduł Expert 24"
						width={180}
						height={70}
						priority
						className="h-auto w-[130px] sm:w-[150px] md:w-[165px]"
					/>
				</Link>

				<nav className="hidden items-center gap-12 lg:flex" aria-label="Główna nawigacja">
					{navLinks.map((link) => {
						const active = isActive(link.href);

						return (
							<Link
								key={link.href}
								href={link.href}
								aria-current={active ? "page" : undefined}
								className="group relative px-1 py-2 text-[16px] font-semibold text-[#111111] transition-colors hover:text-[#ef9228]"
							>
								{link.label}
								<span
									className={`absolute -bottom-1 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[#ef9228] transition-all ${
										active ? "w-7" : "w-0 group-hover:w-7"
									}`}
								/>
							</Link>
						);
					})}
				</nav>

				<button
					type="button"
					onClick={() => setIsOpen((prev) => !prev)}
					aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
					aria-expanded={isOpen}
					aria-controls="mobile-menu"
					className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-sm transition hover:border-[#ef9228] hover:text-[#ef9228] lg:hidden"
				>
					{isOpen ? <X size={22} /> : <Menu size={22} />}
				</button>
			</div>

			{isOpen && (
				<div id="mobile-menu" className="border-t border-black/10 bg-white lg:hidden">
					<nav
						className="mx-auto flex max-w-[1400px] flex-col px-4 py-3"
						aria-label="Nawigacja mobilna"
					>
						{navLinks.map((link) => {
							const active = isActive(link.href);

							return (
								<Link
									key={link.href}
									href={link.href}
									onClick={closeMenu}
									aria-current={active ? "page" : undefined}
									className={`border-b border-black/5 py-4 text-[17px] font-semibold transition-colors ${
										active ? "text-[#ef9228]" : "text-black hover:text-[#ef9228]"
									}`}
								>
									{link.label}
								</Link>
							);
						})}
					</nav>
				</div>
			)}
		</header>
	);
}
