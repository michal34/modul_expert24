"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { MODEL_RETURN_STORAGE_KEY } from "@/components/ModelLink";

export default function BackButton() {
	const router = useRouter();

	return (
		<Link
			href="/modele"
			onClick={(event) => {
				let returnTarget = "/modele";

				try {
					if (window.sessionStorage.getItem(MODEL_RETURN_STORAGE_KEY) === "home") {
						returnTarget = "/#modele";
					}
				} catch {
					// Bez sessionStorage bezpiecznym miejscem powrotu jest katalog modeli.
				}

				if (returnTarget !== "/modele") {
					event.preventDefault();
					router.push(returnTarget);
				}
			}}
			aria-label="Powrót"
			className="
        group
        fixed
        bottom-5
        left-1/2
        z-50
        flex
        -translate-x-1/2
        items-center
        gap-2
        rounded-full
        bg-black/80
        px-4
        py-3
        text-white
        shadow-xl
        backdrop-blur-md
        transition-all
        duration-300
        hover:bg-[#ef9228]
        hover:text-[#13272f]

        sm:bottom-auto
        sm:left-6
        sm:top-24
        sm:translate-x-0
        sm:gap-3
        sm:px-5
      "
		>
			<span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 sm:h-10 sm:w-10">
				<ArrowLeft size={20} strokeWidth={2.5} />
			</span>

			<span className="text-sm font-semibold tracking-wide">Powrót</span>
		</Link>
	);
}
