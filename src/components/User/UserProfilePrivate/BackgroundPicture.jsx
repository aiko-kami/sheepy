"use client";

import Image from "next/image";
import defaultBackgroundPicture from "@/public/images/background2.jpg";

const BackgroundPicture = ({ backgroundPicture }) => {
	return (
		<div className="h-46 relative">
			<Image src={backgroundPicture || defaultBackgroundPicture} fill sizes="100vw, (min-width: 768px) 200px" alt="Background profile picture" className="object-cover" />
		</div>
	);
};
export default BackgroundPicture;
