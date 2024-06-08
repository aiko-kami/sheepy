import Link from "next/link";

const BadgeRounded = ({ badge }) => {
	const { name, size, bgColor, bgColorHover } = badge;

	const link = `/search?search=${badge.name.toLowerCase()}&tab=tabTags`;

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
			<span className={`pt-1 pb-1.5 px-2.5 text-blue-800 font-medium duration-200 rounded-full ${textSizeClass} ${bgColor} hover:${bgColorHover}`}>{name}</span>
		</Link>
	);
};
export default BadgeRounded;
