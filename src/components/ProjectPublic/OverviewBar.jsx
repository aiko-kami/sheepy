import { IoLocationOutline, IoGlobeOutline, IoHeartOutline, IoHeart, IoFitness } from "react-icons/io5";

import ActionButtons from "@/components/ProjectPublic/ActionButtons";
import { Badge, BadgeRounded } from "@/components/Badges/Badges";

const OverviewBar = ({ category, subCategoryDetails, location, likes, status, statusColorClass, projectLink, talentsNeeded }) => {
	const colorClassStatus = statusColorClass && !statusColorClass.startsWith("#") ? `text-${statusColorClass}` : "text-gray-400";

	return (
		<>
			{/* Category, location, likes, project status */}
			<ul className="sm:flex mb-4 sm:mb-8 lg:px-2 items-center text-sm">
				<div className="flex items-center justify-between mb-2 sm:mb-0">
					<div className="flex gap-2">
						{/* Project category */}
						<li className="flex mb-2 sm:mb-0 justify-center" title="Project category">
							<Badge badge={category} size={"xs-sm"} />
						</li>

						{/* Project sub-category */}
						<li className="flex mb-2 sm:mb-0 sm:ml-4 justify-center" title="Project sub-category">
							<BadgeRounded badge={subCategoryDetails} size={"xs-sm"} />
						</li>
					</div>

					{/* Project location */}
					<li className="flex mb-2 sm:mb-0 sm:ml-4 text-nowrap justify-center items-center">
						{location.onlineOnly ? (
							<>
								<IoGlobeOutline className="text-blue-500 mr-1 text-xl" title="Online project" />
								<p className="font-medium">Online only</p>
							</>
						) : (
							<>
								<IoLocationOutline className="text-gray-400 mr-1 text-xl" title="Project location" />
								<p className="font-semibold">
									{location.city && location.country
										? `${location.city}, ${location.country}`
										: location.city || location.country || <span className="italic text-gray-400">Location not specified</span>}
								</p>
							</>
						)}
					</li>
				</div>

				{/* Project likes */}
				<div className="flex items-center justify-end mb-2 sm:mb-0 gap-2">
					<li className="flex mb-2 sm:mb-0 sm:ml-4 justify-center">
						<button className="relative group mr-1 text-xl" title="Like this project">
							<IoHeartOutline className="text-pink-600 group-hover:hidden" />
							{/* Filled on hover */}
							<IoHeart className="text-pink-600 hidden group-hover:block" />
						</button>
						<p>{likes} likes</p>
					</li>

					{/* Project status */}
					<li className="flex mb-2 sm:mb-0 sm:ml-4">
						<IoFitness className={`${colorClassStatus} mr-1 text-xl justify-center`} title="Project status" />
						<p className={`${colorClassStatus} font-semibold`}>{status}</p>
					</li>
				</div>
				{/* Buttons Join project, Like and Share */}
				<li className="flex ml-auto text-nowrap">
					<ActionButtons projectLink={projectLink} talentsNeeded={talentsNeeded} />
				</li>
			</ul>
		</>
	);
};
export default OverviewBar;
