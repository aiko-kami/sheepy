"use client";

import { useTheme } from "@/contexts";

const BackgroundStarfield = () => {
	const { theme } = useTheme();

	if (theme !== "starfield") return null;

	const size = Math.random();
	return (
		<>
			<div className="fixed inset-0 z-0">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#0a0a2e_0%,_#030014_50%,_#000000_100%)]" />
				{Array.from({ length: 600 }).map((_, i) => (
					<div
						key={i}
						className="absolute rounded-full bg-white"
						style={{
							width: `${size * 1.5 + 0.5}px`,
							height: `${size * 1.5 + 0.5}px`,
							top: `${Math.random() * 100}%`,
							left: `${Math.random() * 100}%`,
							opacity: Math.random() * 0.8 + 0.2,
							animation: `twinkle ${Math.random() * 4 + 2}s ease-in-out infinite`,
							animationDelay: `${Math.random() * 4}s`,
						}}
					/>
				))}
			</div>
		</>
	);
};

export default BackgroundStarfield;
