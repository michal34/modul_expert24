"use client";

import type { ComponentProps } from "react";
import Link from "next/link";

export const MODEL_RETURN_STORAGE_KEY = "modulexpert24-model-return";

type ModelSource = "home" | "catalog";

type Props = Omit<ComponentProps<typeof Link>, "onClick"> & {
	source: ModelSource;
};

export default function ModelLink({ source, ...props }: Props) {
	return (
		<Link
			{...props}
			onClick={() => {
				try {
					window.sessionStorage.setItem(MODEL_RETURN_STORAGE_KEY, source);
				} catch {
					// Link nadal działa, jeśli przeglądarka blokuje sessionStorage.
				}
			}}
		/>
	);
}
