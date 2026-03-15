import Image from "next/image";

export default function Gallery() {
	const items = Array.from({ length: 9 });

	return (
		<section className="py-20 max-w-6xl mx-auto px-6">
			<div className="grid md:grid-cols-3 gap-8">
				{items.map((_, i) => (
					<Image
						key={i}
						src="/model.jpg"
						alt="Realizacja pawilonu modułowego"
						width={350}
						height={220}
						className="rounded-lg"
					/>
				))}
			</div>
		</section>
	);
}
