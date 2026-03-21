"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
	// { label: "Oferta", href: "#oferta" },
	// { label: "Realizacja", href: "#realizacja" },
	// { label: "Nasze Modele", href: "#modele" },
	// { label: "Dlaczego my?", href: "#dlaczego-my" },
	{ label: "Kontakt", href: "/kontakt" },
];

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	function closeMenu() {
		setIsOpen(false);
	}

	return (
		<header className="top-0 z-50 border-b border-black/15 backdrop-blur">
			<div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-3 md:px-6 lg:px-8">
				<Link href="/" className="flex items-center">
					<Image
						src="/images/logo.svg"
						alt="Moduł Expert24"
						width={180}
						height={70}
						priority
						className="h-auto w-[130px] sm:w-[150px] md:w-[180px]"
					/>
				</Link>

				<nav className="hidden items-center gap-8 lg:flex">
					{navLinks.map((link) => (
						<a
							key={link.label}
							href={link.href}
							className="text-[16px] font-medium text-black transition hover:text-[#ef9228]"
						>
							{link.label}
						</a>
					))}
				</nav>

				<button
					type="button"
					onClick={() => setIsOpen((prev) => !prev)}
					aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
					aria-expanded={isOpen}
					className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-sm transition hover:border-[#ef9228] hover:text-[#ef9228] lg:hidden"
				>
					{isOpen ? (
						<X className="h-5 w-5" strokeWidth={2.2} />
					) : (
						<Menu className="h-5 w-5" strokeWidth={2.2} />
					)}
				</button>
			</div>

			{isOpen && (
				<div className="border-t border-black/10 bg-white lg:hidden">
					<nav className="mx-auto flex max-w-[1400px] flex-col px-4 py-4">
						{navLinks.map((link) => (
							<a
								key={link.label}
								href={link.href}
								onClick={closeMenu}
								className="border-b border-black/5 py-4 text-[17px] font-medium text-black transition hover:text-[#ef9228]"
							>
								{link.label}
							</a>
						))}
					</nav>
				</div>
			)}
		</header>
	);
}
