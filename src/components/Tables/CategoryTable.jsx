import Link from "next/link";
import { normalizeCategoryData } from "@/utils/categoryHandlers";

import { Badge, BadgeRounded } from "@/components/Badges/Badges";

const CategoryTable = ({ categories }) => {
	return (
		<>
			<table className="w-full text-xs md:text-sm shadow-lg">
				<thead className="uppercase bg-gray-700 text-gray-300">
					<tr>
						<th scope="col" className="text-center p-2 md:px-4 md:py-3 ">
							Category
						</th>
						<th scope="col" className="text-center p-2 md:px-4 md:py-3 hidden md:table-cell">
							Description
						</th>
						<th scope="col" className="text-center p-2 md:px-4 md:py-3">
							Some sub-categories
						</th>
					</tr>
				</thead>
				<tbody>
					{categories.map((cat, index) => {
						const category = normalizeCategoryData(cat);
						return (
							<tr key={index} className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
								<td className="p-2 md:px-4 md:py-2">
									<div className="text-center">
										<Badge badge={category} size={"sm"} />
									</div>
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2 w-1/2 hidden md:table-cell">
									<div className="text-gray-400 line-clamp-2">
										<Link href={category.link}>{category.description}</Link>
									</div>
								</td>
								<td className="p-2 md:px-4 md:py-2">
									<div className="flex items-center flex-wrap overflow-hidden min-h-9">
										{category.subCategories.map((subCategory, index) => (
											<div key={index} className="mx-1 mt-1.5 mb-2">
												<BadgeRounded badge={subCategory} size={"xs"} />
											</div>
										))}
									</div>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default CategoryTable;
