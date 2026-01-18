import Image from "next/image";
import defaultBackgroundPicture from "@/public/images/background2.jpg";

const Background = ({ img, size, alt = "" }) => {
	let imgSize;
	switch (size) {
		case "sm":
			imgSize = "100vw, (min-width: 768px) 200px";
			break;
		case "std":
			imgSize = "100vw, (min-width: 768px) 200px";
			break;
		case "lg":
			imgSize = "100vw, (min-width: 768px) 200px";
			break;
		default:
			imgSize = "100vw, (min-width: 768px) 200px";
	}
	return <Image src={img || defaultBackgroundPicture} fill sizes={imgSize} alt={alt} className="object-cover" />;
};

export { Background };
