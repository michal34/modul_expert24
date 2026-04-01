"use client";

import { useFormStatus } from "react-dom";

type Props = {
	size?: "small" | "large";
};

export default function SubmitButton({ size = "large" }: Props) {
	const { pending } = useFormStatus();
	console.log(size);
	const styles =
		size === "large"
			? {
					height: "64px",
					minWidth: "210px",
					padding: "0 30px",
					fontSize: "18px",
				}
			: {
					height: "48px",
					minWidth: "220px",
					padding: "0 22px",
					fontSize: "16px",
				};

	return (
		<button
			type="submit"
			disabled={pending}
			style={{
				...styles,
				borderRadius: "9999px",
				border: "1px solid #ef9228",
				backgroundColor: "#fff7ef",
				color: "#111111",
				fontWeight: 500,
				letterSpacing: "0.02em",
				boxShadow: "0 8px 18px rgba(239, 146, 40, 0.16)",
				cursor: "pointer",
				opacity: pending ? 0.7 : 1,
			}}
			className="transition-all duration-300 hover:bg-[#ef9228] hover:text-white disabled:hover:bg-[#fff7ef] disabled:hover:text-black"
		>
			{pending ? "Wysyłanie..." : "Poproś o wycenę"}
		</button>
	);
}
