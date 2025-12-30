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
			imgSizeClass = "w-10 h-10";
			break;
		case "lg":
			imgSizeClass = "w-12 h-12";
			break;
		case "xl":
			imgSizeClass = "w-16 h-16";
			break;
		case "2xl":
			imgSizeClass = "w-34 h-34";
			break;
		case "3xl":
			imgSizeClass = "w-48 h-48 md:w-60 md:h-60";
			break;
		case "3xl":
			imgSizeClass = "w-48 h-48 md:w-60 md:h-60";
			break;
		case "std-xl":
			imgSizeClass = "w-10 h-10 sm:w-16 sm:h-16";
			break;
		default:
			imgSizeClass = "w-10 h-10";
	}
	return (
		<div className={`shrink-0 ${imgSizeClass}`}>
			<Image src={img || talentNeededProfilePicture} className={`w-full h-full rounded-full object-cover`} alt={alt} height={0} width={0} sizes="100vw" />
		</div>
	);
};

export { Avatar };
