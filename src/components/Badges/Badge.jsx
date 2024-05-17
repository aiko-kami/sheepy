import Link from "next/link";

const Badge = ({ badge }) => {
	const { name, size, link, bgColor, bgColorHover } = badge;

	let textSizeClass;
	switch (size) {
		case "xs":
			textSizeClass = "text-xs";
			break;
		case "sm":
			textSizeClass = "text-sm";
			break;
		case "std":
			textSizeClass = "text-base";
			break;
		case "xl":
			textSizeClass = "text-lg";
			break;
		default:
			textSizeClass = "text-base";
	}

	return (
		<Link href={link || "#"}>
			<span className={`py-1 px-2.5 text-white font-bold duration-200 rounded ${textSizeClass} ${bgColor} hover:${bgColorHover}`}>{name}</span>
		</Link>
	);
};
export default Badge;
