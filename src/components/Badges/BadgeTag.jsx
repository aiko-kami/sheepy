import Link from "next/link";

const BadgeTag = ({ tag }) => {
	let textSizeClass;
	switch (tag.size) {
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
		<Link href={tag.link}>
			<span className={`py-0.5 px-2.5 text-blue-800 font-medium rounded-full ${textSizeClass} ${tag.bgColor}`}>{tag.name}</span>
		</Link>
	);
};
export default BadgeTag;
