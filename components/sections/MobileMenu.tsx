"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type MobileMenuProps = {
	links: ReadonlyArray<{
		label: string;
		href: string;
	}>;
	activeHref?: string;
};

export default function MobileMenu({ links, activeHref }: MobileMenuProps) {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);
	const buttonRef = useRef<HTMLButtonElement>(null);
	const firstLinkRef = useRef<HTMLAnchorElement>(null);

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

	useEffect(() => {
		if (!isOpen) {
			return;
		}

		firstLinkRef.current?.focus();

		function handleKeyDown(event: KeyboardEvent) {
			if (event.key === "Escape") {
				setIsOpen(false);
				buttonRef.current?.focus();
			}
		}

		document.addEventListener("keydown", handleKeyDown);
		return () => document.removeEventListener("keydown", handleKeyDown);
	}, [isOpen]);

	function closeMenu() {
		setIsOpen(false);
	}

	return (
		<div className="lg:hidden">
			<button
				ref={buttonRef}
				type="button"
				onClick={() => setIsOpen((current) => !current)}
				aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
				aria-expanded={isOpen}
				aria-controls="mobile-menu"
				className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-sm transition hover:border-[#ef9228] hover:text-[#9a4300]"
			>
				{isOpen ? <X size={22} /> : <Menu size={22} />}
			</button>

			{isOpen && (
				<div
					id="mobile-menu"
					className="absolute inset-x-0 top-full border-t border-black/10 bg-white shadow-lg"
				>
					<nav
						className="mx-auto flex max-w-[1400px] flex-col px-4 py-3"
						aria-label="Nawigacja mobilna"
					>
						{links.map((link, index) => {
							const active = isLinkActive(link.href);

							return (
								<Link
									ref={index === 0 ? firstLinkRef : undefined}
									key={link.href}
									href={link.href}
									onClick={closeMenu}
									aria-current={active ? "page" : undefined}
									className={`border-b border-black/5 py-4 text-[17px] font-semibold transition-colors ${
										active
											? "border-l-4 border-l-[#ef9228] bg-[#fff7ef] pl-4 text-[#9a4300]"
											: "text-black hover:text-[#9a4300]"
									}`}
								>
									{link.label}
								</Link>
							);
						})}
					</nav>
				</div>
			)}
		</div>
	);
}