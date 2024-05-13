import Link from "next/link";

const BadgeRounded = ({ badge }) => {
	let textSizeClass;
	switch (badge.size) {
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
		<Link href={badge.link || "#"}>
			<span className={`py-1 px-2.5 text-blue-800 font-medium duration-200 rounded-full ${textSizeClass} ${badge.bgColor} hover:${badge.bgColorHover}`}>{badge.name}</span>
		</Link>
	);
};
export default BadgeRounded;
