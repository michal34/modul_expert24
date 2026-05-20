import Link from "next/link";

type ModelNavItem = {
	slug: string;
	name: string;
};

type Props = {
	prevModel?: ModelNavItem;
	nextModel?: ModelNavItem;
	from?: string;
};

export default function ModelNavigation({ prevModel, nextModel, from }: Props) {
	const query = from === "home" ? "?from=home" : "";

	return (
		<nav className="mx-auto mt-8 flex w-full max-w-[900px] items-center justify-between gap-4 px-5">
			{prevModel ? (
				<Link
					href={`/modele/${prevModel.slug}${query}`}
					className="inline-flex items-center rounded-full bg-neutral-900 px-5 py-3 text-base font-semibold text-white transition hover:bg-orange-500"
					aria-label={`Poprzedni model: ${prevModel.name}`}
				>
					← {prevModel.name}
				</Link>
			) : (
				<span />
			)}

			{nextModel ? (
				<Link
					href={`/modele/${nextModel.slug}${query}`}
					className="inline-flex items-center rounded-full bg-neutral-900 px-5 py-3 text-base font-semibold text-white transition hover:bg-orange-500"
					aria-label={`Następny model: ${nextModel.name}`}
				>
					{nextModel.name} →
				</Link>
			) : (
				<span />
			)}
		</nav>
	);
}
