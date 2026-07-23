import type { ReactNode } from "react";
import Link from "next/link";

import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";

export type SeoCard = {
	title: string;
	text: ReactNode;
};

export type SeoSection = {
	eyebrow?: string;
	title: string;
	paragraphs?: ReactNode[];
	bullets?: string[];
	cards?: SeoCard[];
};

export type SeoFaq = {
	question: string;
	answer: string;
};

type RelatedLink = {
	title: string;
	description: string;
	href: string;
};

type SeoLandingPageProps = {
	breadcrumbLabel: string;
	eyebrow: string;
	title: string;
	lead: string;
	highlights: SeoCard[];
	sections: SeoSection[];
	faqs: SeoFaq[];
	relatedLinks: RelatedLink[];
	ctaTitle: string;
	ctaText: string;
	jsonLd: Record<string, unknown>[];
	updatedAt?: string;
	secondaryCta?: {
		label: string;
		href: string;
	};
};

export default function SeoLandingPage({
	breadcrumbLabel,
	eyebrow,
	title,
	lead,
	highlights,
	sections,
	faqs,
	relatedLinks,
	ctaTitle,
	ctaText,
	jsonLd,
	updatedAt,
	secondaryCta = {
		label: "Poznaj ofertę domów",
		href: "/domy-modulowe",
	},
}: SeoLandingPageProps) {
	return (
		<>
			{jsonLd.map((schema, index) => (
				<script
					key={`${String(schema["@type"])}-${index}`}
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(schema).replace(/</g, "\\u003c"),
					}}
				/>
			))}

			<Header />

			<main id="main-content" tabIndex={-1} className="bg-white text-[#13272f]">
				<section className="bg-gradient-to-br from-[#f7fafb] via-white to-[#fff2e4] px-6 py-16 md:py-24">
					<div className="mx-auto max-w-[1180px]">
						<nav
							aria-label="Breadcrumb"
							className="mb-8 flex flex-wrap items-center gap-2 text-sm text-black/55"
						>
							<Link href="/" className="transition hover:text-[#9a4300]">
								Strona główna
							</Link>
							<span aria-hidden="true">/</span>
							<span aria-current="page">{breadcrumbLabel}</span>
						</nav>

						<p className="text-sm font-bold uppercase tracking-[0.14em] text-[#9a4300]">
							{eyebrow}
						</p>
						<h1 className="mt-4 max-w-[980px] text-[38px] font-medium leading-[1.05] tracking-[-0.04em] md:text-[58px] lg:text-[68px]">
							{title}
						</h1>
						<p className="mt-7 max-w-[840px] text-[18px] leading-8 text-[#53646b] md:text-[21px] md:leading-9">
							{lead}
						</p>

						<div className="mt-10 flex flex-wrap gap-4">
							<Link
								href="/kontakt"
								className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#ef9228] px-7 font-semibold text-[#13272f] transition hover:bg-[#d97918]"
							>
								Poproś o wycenę
							</Link>
							<Link
								href={secondaryCta.href}
								className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#13272f]/20 bg-white px-7 font-semibold transition hover:border-[#ef9228] hover:text-[#9a4300]"
							>
								{secondaryCta.label}
							</Link>
						</div>

						{updatedAt && (
							<p className="mt-8 text-sm text-black/50">Ostatnia aktualizacja: {updatedAt}</p>
						)}
					</div>
				</section>

				<section className="bg-[#13272f] px-6 py-14 text-white md:py-[72px]">
					<div className="mx-auto grid max-w-[1180px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
						{highlights.map((item) => (
							<article
								key={item.title}
								className="rounded-[20px] border border-white/10 bg-white/[0.06] p-6"
							>
								<h2 className="text-xl font-semibold">{item.title}</h2>
								<div className="mt-3 text-[15px] leading-7 text-white/75">{item.text}</div>
							</article>
						))}
					</div>
				</section>

				{sections.map((section, index) => (
					<section
						key={section.title}
						className={`px-6 py-16 md:py-24 ${index % 2 ? "bg-[#f6f8f8]" : "bg-white"}`}
					>
						<div className="mx-auto max-w-[1180px]">
							{section.eyebrow && (
								<p className="text-sm font-bold uppercase tracking-[0.14em] text-[#9a4300]">
									{section.eyebrow}
								</p>
							)}
							<h2 className="mt-3 max-w-[920px] text-[30px] font-medium leading-[1.12] tracking-[-0.03em] md:text-[44px]">
								{section.title}
							</h2>

							{section.paragraphs && (
								<div className="mt-6 max-w-[900px] space-y-5 text-[17px] leading-8 text-[#53646b]">
									{section.paragraphs.map((paragraph, paragraphIndex) => (
										<p key={paragraphIndex}>{paragraph}</p>
									))}
								</div>
							)}

							{section.bullets && (
								<ul className="mt-8 grid max-w-[1000px] gap-3 sm:grid-cols-2">
									{section.bullets.map((item) => (
										<li
											key={item}
											className="flex gap-3 rounded-xl border border-black/10 bg-white p-4 leading-7"
										>
											<span className="mt-[10px] h-2 w-2 shrink-0 rounded-full bg-[#ef9228]" />
											<span>{item}</span>
										</li>
									))}
								</ul>
							)}

							{section.cards && (
								<div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
									{section.cards.map((card) => (
										<article
											key={card.title}
											className="rounded-[20px] border border-black/10 bg-white p-6 shadow-sm"
										>
											<h3 className="text-xl font-semibold">{card.title}</h3>
											<div className="mt-3 text-[16px] leading-7 text-[#53646b]">{card.text}</div>
										</article>
									))}
								</div>
							)}
						</div>
					</section>
				))}

				<section className="bg-[#f6f8f8] px-6 py-16 md:py-24">
					<div className="mx-auto max-w-[980px]">
						<p className="text-sm font-bold uppercase tracking-[0.14em] text-[#9a4300]">FAQ</p>
						<h2 className="mt-3 text-[30px] font-medium leading-[1.12] tracking-[-0.03em] md:text-[44px]">
							Najczęściej zadawane pytania
						</h2>
						<div className="mt-8 space-y-4">
							{faqs.map((item) => (
								<details
									key={item.question}
									className="group rounded-[16px] border border-black/10 bg-white p-5 open:shadow-sm"
								>
									<summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold marker:hidden">
										<span>{item.question}</span>
										<span
											aria-hidden="true"
											className="text-2xl font-light text-[#9a4300] transition group-open:rotate-45"
										>
											+
										</span>
									</summary>
									<p className="mt-4 border-t border-black/10 pt-4 leading-7 text-[#53646b]">
										{item.answer}
									</p>
								</details>
							))}
						</div>
					</div>
				</section>

				<section className="px-6 py-16 md:py-24">
					<div className="mx-auto max-w-[1180px]">
						<h2 className="text-[28px] font-medium tracking-[-0.03em] md:text-[38px]">
							Zobacz również
						</h2>
						<div className="mt-7 grid gap-5 md:grid-cols-3">
							{relatedLinks.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									className="rounded-[18px] border border-black/10 p-6 transition hover:-translate-y-1 hover:border-[#ef9228] hover:shadow-md"
								>
									<h3 className="text-xl font-semibold">{item.title}</h3>
									<p className="mt-3 leading-7 text-[#53646b]">{item.description}</p>
									<span className="mt-5 inline-flex font-semibold text-[#9a4300]">
										Czytaj więcej →
									</span>
								</Link>
							))}
						</div>
					</div>
				</section>

				<section className="px-6 pb-16 md:pb-24">
					<div className="mx-auto max-w-[980px] rounded-[24px] bg-[#b7cdea] px-7 py-14 text-center shadow-[0_10px_20px_rgba(0,0,0,0.12)] md:px-12 md:py-[72px]">
						<h2 className="text-[28px] font-semibold leading-tight tracking-[-0.03em] md:text-[44px]">
							{ctaTitle}
						</h2>
						<p className="mx-auto mt-6 max-w-[720px] text-[17px] leading-8 text-black/65 md:text-[19px]">
							{ctaText}
						</p>
						<Link
							href="/kontakt"
							className="mt-8 inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#ef9228] px-8 text-lg font-semibold text-[#13272f] transition hover:bg-[#d97918]"
						>
							Wypełnij formularz
						</Link>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}
