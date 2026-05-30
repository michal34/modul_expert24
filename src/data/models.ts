export type Model = {
	slug: string;
	name: string;
	image: string;
	thumbnail: string;
	title: string;
	description: string;
	features: string[];
	specs: Record<string, string>;
};

export const models: Model[] = [
	{
		slug: "alaska",
		name: "ALASKA",
		image: "/images/described_models/ALASKA.webp",
		thumbnail: "/images/models/alaska.webp",
		title: "Pawilon modułowy ALASKA",
		description:
			"Model ALASKA to nowoczesny pawilon modułowy z frontem off-white i grafitową attyką.",
		features: [
			"Front w kolorze off-white",
			"Attyka w kolorze grafitowym",
			"Ściany boczne off-white",
			"Nowoczesne witryny",
			"Podest dark grey",
		],
		specs: {
			"Rama zewnętrzna": "Profil zimnogięty otwarty",
			Okna: "Rodzaj i rozmieszczenie ustalane indywidualnie",
			Drzwi: "Standardowe albo zamówione indywidualnie",
			Elewacja: "Ściany boczne - blacha, Front - blacha, Attyka - blacha",
			Rolety: "Do wyboru rolety zewnętrzne zamykane ręcznie albo elektrycznie",
			Szerokość: "250 lub 300 cm",
			Długość: "od 200 do 1000 cm",
			Wysokość: "od 240 do 300 cm - co 10 cm",
		},
	},

	{
		slug: "aspen",
		name: "ASPEN",
		image: "/images/described_models/ASPEN.webp",
		thumbnail: "/images/models/aspen.webp",
		title: "Pawilon modułowy ASPEN",
		description: "Model ASPEN z nowoczesną elewacją silver grey i antracytową attyką.",
		features: [
			"Front silver grey",
			"Attyka antracyt",
			"Ściany boczne kaseton",
			"Nowoczesne witryny",
			"Podest dark grey",
		],
		specs: {
			"Rama zewnętrzna": "Profil zimnogięty otwarty",
			Okna: "Rodzaj i rozmieszczenie ustalane indywidualnie",
			Drzwi: "Standardowe albo zamówione indywidualnie",
			Elewacja: "Kaseton blaszany i lamele kompozytowe",
			Rolety: "Do wyboru rolety zewnętrzne zamykane ręcznie albo elektrycznie",
			Szerokość: "250 lub 300 cm",
			Długość: "od 200 do 1000 cm",
			Wysokość: "od 240 do 300 cm - co 10 cm",
		},
	},

	{
		slug: "dakota",
		name: "DAKOTA",
		image: "/images/described_models/DAKOTA.webp",
		thumbnail: "/images/models/dakota.webp",
		title: "Pawilon modułowy DAKOTA",
		description: "Model DAKOTA z attyką w kolorze dąb złoty i elewacją silver grey.",
		features: [
			"Front silver grey",
			"Attyka dąb złoty",
			"Kaseton blaszany",
			"Duże witryny",
			"Podest dark grey",
		],
		specs: {
			"Rama zewnętrzna": "Profil zimnogięty otwarty",
			Okna: "Rodzaj i rozmieszczenie ustalane indywidualnie",
			Drzwi: "Standardowe albo zamówione indywidualnie",
			Elewacja: "Kaseton blaszany oraz lamele kompozytowe",
			Rolety: "Do wyboru rolety zewnętrzne zamykane ręcznie albo elektrycznie",
			Szerokość: "250 lub 300 cm",
			Długość: "od 200 do 1000 cm",
			Wysokość: "od 240 do 300 cm - co 10 cm",
		},
	},

	{
		slug: "denver",
		name: "DENVER",
		image: "/images/described_models/DENVER.webp",
		thumbnail: "/images/models/denver.webp",
		title: "Pawilon modułowy DENVER",
		description: "Model DENVER z drewnianą elewacją w kolorze orzech.",
		features: [
			"Elewacja orzech",
			"Attyka dark grey",
			"Nowoczesne przeszklenia",
			"Lamele kompozytowe",
			"Podest dark grey",
		],
		specs: {
			"Rama zewnętrzna": "Profil zimnogięty otwarty",
			Okna: "Rodzaj i rozmieszczenie ustalane indywidualnie",
			Drzwi: "Standardowe albo zamówione indywidualnie",
			Elewacja: "Lamele kompozytowe struktura drewna",
			Rolety: "Do wyboru rolety zewnętrzne zamykane ręcznie albo elektrycznie",
			Szerokość: "250 lub 300 cm",
			Długość: "od 200 do 1000 cm",
			Wysokość: "od 240 do 300 cm - co 10 cm",
		},
	},

	{
		slug: "idaho",
		name: "IDAHO",
		image: "/images/described_models/IDAHO.webp",
		thumbnail: "/images/models/idaho.webp",
		title: "Pawilon modułowy IDAHO",
		description: "Model IDAHO z elewacją silver grey i antracytową attyką.",
		features: [
			"Front silver grey",
			"Attyka antracyt",
			"Ściany boczne dark grey",
			"Duże przeszklenia",
			"Podest dark grey",
		],
		specs: {
			"Rama zewnętrzna": "Profil zimnogięty otwarty",
			Okna: "Rodzaj i rozmieszczenie ustalane indywidualnie",
			Drzwi: "Standardowe albo zamówione indywidualnie",
			Elewacja: "Lamele kompozytowe i blacha",
			Rolety: "Do wyboru rolety zewnętrzne zamykane ręcznie albo elektrycznie",
			Szerokość: "250 lub 300 cm",
			Długość: "od 200 do 1000 cm",
			Wysokość: "od 240 do 300 cm - co 10 cm",
		},
	},

	{
		slug: "oklahoma",
		name: "OKLAHOMA",
		image: "/images/described_models/OKLAHOMA.webp",
		thumbnail: "/images/models/oklahoma.webp",
		title: "Pawilon modułowy OKLAHOMA",
		description: "Model OKLAHOMA z elewacją orzech i dużymi przeszkleniami.",
		features: [
			"Front orzech",
			"Attyka orzech",
			"Kaseton drewniany",
			"Nowoczesne witryny",
			"Podest dark grey",
		],
		specs: {
			"Rama zewnętrzna": "Profil zimnogięty otwarty",
			Okna: "Rodzaj i rozmieszczenie ustalane indywidualnie",
			Drzwi: "Standardowe albo zamówione indywidualnie",
			Elewacja: "Kaseton blaszany i drewno kompozytowe",
			Rolety: "Do wyboru rolety zewnętrzne zamykane ręcznie albo elektrycznie",
			Szerokość: "250 lub 300 cm",
			Długość: "od 200 do 1000 cm",
			Wysokość: "od 240 do 300 cm - co 10 cm",
		},
	},

	{
		slug: "utah",
		name: "UTAH",
		image: "/images/described_models/UTAH.webp",
		thumbnail: "/images/models/utah.webp",
		title: "Pawilon modułowy UTAH",
		description: "Model UTAH z frontem light grey i grafitową attyką.",
		features: [
			"Front light grey",
			"Attyka dark grey",
			"Ściany off-white",
			"Nowoczesne witryny",
			"Podest dark grey",
		],
		specs: {
			"Rama zewnętrzna": "Profil zimnogięty otwarty",
			Okna: "Rodzaj i rozmieszczenie ustalane indywidualnie",
			Drzwi: "Standardowe albo zamówione indywidualnie",
			Elewacja: "Blacha i lamele kompozytowe",
			Rolety: "Do wyboru rolety zewnętrzne zamykane ręcznie albo elektrycznie",
			Szerokość: "250 lub 300 cm",
			Długość: "od 200 do 1000 cm",
			Wysokość: "od 240 do 300 cm - co 10 cm",
		},
	},

	{
		slug: "wyoming",
		name: "WYOMING",
		image: "/images/described_models/WYOMING.webp",
		thumbnail: "/images/models/wyoming.webp",
		title: "Pawilon modułowy WYOMING",
		description: "Model WYOMING z elewacją w kolorze orzech i białym frontem.",
		features: [
			"Front biały",
			"Attyka orzech",
			"Ściany drewniane",
			"Nowoczesne witryny",
			"Podest dark grey",
		],
		specs: {
			"Rama zewnętrzna": "Profil zimnogięty otwarty",
			Okna: "Rodzaj i rozmieszczenie ustalane indywidualnie",
			Drzwi: "Standardowe albo zamówione indywidualnie",
			Elewacja: "Drewno kompozytowe i blacha",
			Rolety: "Do wyboru rolety zewnętrzne zamykane ręcznie albo elektrycznie",
			Szerokość: "250 lub 300 cm",
			Długość: "od 200 do 1000 cm",
			Wysokość: "od 240 do 300 cm - co 10 cm",
		},
	},
];
