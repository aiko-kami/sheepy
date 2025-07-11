import Link from "next/link";

const Badge = ({ badge, size }) => {
	const { name, link } = badge;
	const { bgColor, bgColorHover } = badge.colors;

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
		<Link href={link || "javascript:;"}>
			<span className={`py-1 px-2.5 text-white font-bold text-nowrap duration-200 rounded ${textSizeClass} ${bgColor} hover:${bgColorHover}`}>{name}</span>
		</Link>
	);
};

const BadgeRounded = ({ badge, size }) => {
	const { name } = badge;
	const { bgColor, bgColorHover } = badge.colors;

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
			<span className={`pt-1 pb-1.5 px-2.5 text-blue-800 font-medium text-nowrap duration-200 rounded-full ${textSizeClass} ${bgColor} hover:${bgColorHover}`}>{name}</span>
		</Link>
	);
};

const Status = ({ name, size, rounded, bgColor }) => {
	let textSizeClass;
	switch (size) {
		case "xs":
			textSizeClass = "text-xs min-w-20";
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

	let roundedClass;
	switch (rounded) {
		case "none":
			roundedClass = "rounded-none";
			break;
		case "sm":
			roundedClass = "rounded-sm";
			break;
		case "std":
			roundedClass = "rounded";
			break;
		case "lg":
			roundedClass = "rounded-lg";
			break;
		case "xl":
			roundedClass = "rounded-xl";
			break;
		case "full":
			roundedClass = "rounded-full";
			break;
		default:
			roundedClass = "rounded";
	}

	return (
		<div>
			<div className={`inline-block rounded uppercase py-1 px-2.5 text-white text-center font-bold text-nowrap duration-200 ${textSizeClass} ${roundedClass} ${bgColor}`}>{name}</div>
		</div>
	);
};

export { Badge, BadgeRounded, Status };
