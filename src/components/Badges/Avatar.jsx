import Image from "next/image";
import talentNeededProfilePicture from "@/public/images/userTalentNeeded.jpg";

const Avatar = ({ img, size, alt = "" }) => {
	let imgSizeClass;
	switch (size) {
		case "xs":
			imgSizeClass = "w-5 h-5";
			break;
		case "sm":
			imgSizeClass = "w-7 h-7";
			break;
		case "std":
			imgSizeClass = "w-8 h-8";
			break;
		case "xl":
			imgSizeClass = "w-10 h-10";
			break;
		default:
			imgSizeClass = "w-8 h-8";
	}
	return <Image src={img || talentNeededProfilePicture} className={`rounded-full object-cover ${imgSizeClass}`} alt={alt} height={0} width={0} sizes="100vw" />;
};

export { Avatar };
