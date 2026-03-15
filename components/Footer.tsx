export default function Footer() {
	return (
		<footer className="bg-gray-100 pt-16 pb-10">
			<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-sm">
				<div>
					<h3 className="font-semibold mb-4">Moduł Expert24</h3>
					<p className="text-gray-600">
						Nowoczesne domy i pawilony modułowe – szybka realizacja i wysoka jakość.
					</p>
				</div>

				<div>
					<h4 className="font-semibold mb-4">Skróty</h4>
					<ul className="space-y-2 text-gray-600">
						<li>Oferta</li>
						<li>Realizacja</li>
						<li>Modele</li>
						<li>Kontakt</li>
					</ul>
				</div>

				<div>
					<h4 className="font-semibold mb-4">Dane kontaktowe</h4>
					<p className="text-gray-600">
						Adres: Mińsk Mazowiecki
						<br />
						Tel: +48 123 123 123
						<br />
						E-mail: kontakt@twojadomena.pl
					</p>
				</div>

				<div>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18..."
						width="100%"
						height="150"
						loading="lazy"
						className="rounded-lg"
					/>
				</div>
			</div>

			<div className="text-center text-gray-500 text-xs mt-12">
				© {new Date().getFullYear()} Moduł Expert24
			</div>
		</footer>
	);
}
