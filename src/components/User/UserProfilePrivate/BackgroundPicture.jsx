"use client";

import Image from "next/image";

const BackgroundPicture = ({ backgroundPicture }) => {
	return (
		<div className="h-46 relative">
			<Image src={backgroundPicture} fill sizes="100vw, (min-width: 768px) 200px" alt="Background profile picture" className="object-cover" />
		</div>
	);
};
export default BackgroundPicture;
