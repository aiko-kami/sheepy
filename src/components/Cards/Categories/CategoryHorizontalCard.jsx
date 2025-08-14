import Image from "next/image";
import Link from "next/link";

import { BadgeRounded } from "@/components/Badges/Badges";

const CategoryHorizontalCard = ({ category, animate }) => {
	const { name, description, cover, link, subCategories } = category;

	// Conditional classes for animation
	const animationClasses = animate ? "hover:-translate-y-1 transition ease-in duration-75" : "";

	return (
		<>
			<div className={`items-center shadow-xl w-full h-90 ${animationClasses}`}>
				{/* Category cover background */}
				<div className="relative h-full">
					<Image src={cover.link} height={0} width={0} sizes="100vw" alt="Category cover" className="absolute top-0 left-0 -z-10 w-full h-full object-cover rounded-lg" />
					<div className="px-6 py-2 overflow-hidden w-full h-full bg-gradient-to-b from-black/90 to-black/10 text-white rounded-lg">
						{/* Category name */}
						<Link href={`/categories/${link}`}>
							<h3
								className="font-semibold tn:text-left overflow-hidden text-ellipsis font-rowdies text-transparent leading-tight bg-clip-text text-[45px] drop-shadow-[2px_2px_5px_rgba(0,0,0,0.9)]"
								style={{ backgroundImage: `url(${category.coverText.link})`, backgroundPosition: "center" }}
							>
								{name}
							</h3>
						</Link>
						{/* Category description */}
						<p className="text-sm tn:text-base line-clamp-2 mb-2">{description}</p>
						{/* Sub-categories */}
						<p className="text-sm tn:text-base mb-1">Some sub-categories:</p>
						{/* Talents */}
						<div className="flex flex-wrap overflow-hidden mb-1 h-16">
							{subCategories.map((subCategory, index) => {
								return (
									<div key={index} className="mx-1 my-1">
										<BadgeRounded badge={subCategory} size={"xs"} />
									</div>
								);
							})}
						</div>{" "}
					</div>
				</div>
				{/* Username, location, description and talents */}
			</div>
		</>
	);
};

export default CategoryHorizontalCard;
