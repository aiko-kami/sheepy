import Link from "next/link";

const BadgeCategory = ({ category }) => {
	let textSizeClass;
	switch (category.size) {
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
		<Link href={category.link}>
			<span className={`block py-1 px-2.5 leading-none text-center whitespace-nowrap font-bold duration-200 text-white rounded ${textSizeClass} ${category.bgColor} hover:${category.bgColorHover}`}>
				{category.name}
			</span>
		</Link>
	);
};
export default BadgeCategory;
