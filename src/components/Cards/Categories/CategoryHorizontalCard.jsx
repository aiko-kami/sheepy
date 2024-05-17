import Image from "next/image";
import Link from "next/link";
import BadgeRounded from "@/components/Badges/BadgeRounded";

const CategoryHorizontalCard = ({ category }) => {
	const { name, description, cover, link, subCategories } = category;

	return (
		<>
			<div className="items-center shadow-xl w-full h-56">
				{/* Category cover background */}
				<div className="relative h-full">
					<Image src={cover} height={0} width={0} sizes="100vw" alt="Category cover" className="absolute top-0 left-0 -z-10 w-full h-full object-cover rounded-lg" />
					<div className="px-6 py-4 overflow-hidden w-full h-full bg-gradient-to-b from-black/90 to-black/40 text-white rounded-lg">
						{/* Category name */}
						<Link href={link}>
							<h3 className="font-semibold text-center tn:text-left text-xl tn:text-3xl mb-1 overflow-hidden text-ellipsis tn:inline-block">{name}</h3>
						</Link>
						{/* Category description */}
						<p className="text-sm tn:text-base line-clamp-2 mb-2">{description}</p>
						{/* Sub-categories */}
						<p className="text-sm tn:text-base mb-1">Some sub-categories:</p>
						{/* Talents */}
						<div className="flex flex-wrap overflow-hidden mb-1 h-16">
							{subCategories.map((subCategory, index) => (
								<div key={index} className="mx-1 my-1">
									<BadgeRounded badge={subCategory} />
								</div>
							))}
						</div>
					</div>
				</div>
				{/* Username, location, description and talents */}
			</div>
		</>
	);
};

export default CategoryHorizontalCard;
