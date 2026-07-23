import { ImageResponse } from "next/og";

import { SITE_NAME } from "@/src/lib/site";

export const alt = `Domy modułowe i pawilony — ${SITE_NAME}`;
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
	return new ImageResponse(
		<div
			style={{
				display: "flex",
				height: "100%",
				width: "100%",
				alignItems: "center",
				justifyContent: "space-between",
				background: "linear-gradient(135deg, #f7fafb 0%, #ffffff 48%, #fff0df 100%)",
				color: "#13272f",
				padding: "72px 86px",
			}}
		>
			<div style={{ display: "flex", maxWidth: 760, flexDirection: "column" }}>
				<div style={{ color: "#9a4300", fontSize: 30, fontWeight: 700 }}>{SITE_NAME}</div>
				<div
					style={{
						display: "flex",
						marginTop: 28,
						fontSize: 62,
						fontWeight: 700,
						lineHeight: 1.08,
						letterSpacing: "-2px",
					}}
				>
					Domy modułowe i pawilony na Mazowszu
				</div>
				<div style={{ display: "flex", marginTop: 30, color: "#53646b", fontSize: 28 }}>
					Projekt • produkcja • transport • montaż
				</div>
			</div>

			<div
				style={{
					display: "flex",
					height: 245,
					width: 245,
					alignItems: "center",
					justifyContent: "center",
					borderRadius: 42,
					background: "#155e75",
					boxShadow: "0 24px 55px rgba(19,39,47,.22)",
				}}
			>
				<div
					style={{
						display: "flex",
						height: 120,
						width: 150,
						border: "16px solid white",
						borderTop: "0px",
						position: "relative",
					}}
				>
					<div
						style={{
							position: "absolute",
							left: -16,
							top: -72,
							width: 150,
							height: 110,
							borderLeft: "16px solid white",
							borderTop: "16px solid white",
							transform: "rotate(45deg) scale(.72)",
						}}
					/>
					<div
						style={{
							position: "absolute",
							bottom: 0,
							left: 45,
							height: 70,
							width: 45,
							background: "#f59e0b",
						}}
					/>
				</div>
			</div>
		</div>,
		size,
	);
}
