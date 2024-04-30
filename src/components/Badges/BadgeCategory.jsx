import Link from "next/link";

const BadgeCategory = ({ category }) => {
	return (
		<Link href={category.link}>
			<span className={`text-xs block py-1 px-2.5 leading-none text-center whitespace-nowrap font-bold duration-200 text-white rounded ${category.bgColor} hover:${category.bgColorHover}`}>
				{category.name}
			</span>
		</Link>
	);
};
export default BadgeCategory;
