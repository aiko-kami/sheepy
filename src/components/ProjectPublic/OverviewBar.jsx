import { IoLocationOutline, IoGlobeOutline, IoHeartOutline, IoHeart, IoFitness } from "react-icons/io5";

import ActionButtons from "@/components/ProjectPublic/ActionButtons";
import { Badge, BadgeRounded } from "@/components/Badges/Badges";

const OverviewBar = ({ category, subCategoryDetails, location, likes, status, statusColorClass, projectLink, talentsNeeded }) => {
	const colorClassStatus = statusColorClass && !statusColorClass.startsWith("#") ? `text-${statusColorClass}` : "text-gray-400";

	const { onlineOnly = false, city = null, country = null } = location ?? {};

	return (
		<>
			{/* Category, location, likes, project status */}
			<ul className="flex flex-col md:flex-row lg:px-2 md:items-center text-sm space-y-3 md:space-y-0 md:gap-x-6">
				{/* Project category and sub-category */}
				<li className="flex items-center text-nowrap space-x-2">
					<Badge badge={category} size={"xs-sm"} title="Project category" />
					<BadgeRounded badge={subCategoryDetails} size={"xs-sm"} title="Project sub-category" />
				</li>

				{/* Project location */}
				<li className="flex text-nowrap">
					{onlineOnly ? (
						<>
							<IoGlobeOutline className="text-blue-500 mr-1 text-xl" title="Online project" />
							<p className="font-medium">Online only</p>
						</>
					) : (
						<>
							<IoLocationOutline className="text-gray-400 mr-1 text-xl" title="Project location" />
							<p className="font-semibold">{city && country ? `${city}, ${country}` : city || country || <span className="italic text-gray-400">Location not specified</span>}</p>
						</>
					)}
				</li>

				{/* Project status and Project likes */}
				<li className="flex text-nowrap">
					<IoFitness className={`${colorClassStatus} mr-1 text-xl justify-center`} title="Project status" />
					<p className={`${colorClassStatus} font-semibold mr-2`}>{status ? <>{status}</> : <span className="italic text-gray-400">Status not found</span>}</p>
					<button className="relative group mr-1 text-xl" title="Like this project">
						<IoHeartOutline className="text-pink-600 group-hover:hidden" />
						{/* Filled on hover */}
						<IoHeart className="text-pink-600 hidden group-hover:block" />
					</button>
					<p>{likes} likes</p>
				</li>

				{/* Buttons Join project, Edit project */}
				<li className="flex text-nowrap ml-auto">
					<ActionButtons projectLink={projectLink} talentsNeeded={talentsNeeded} />
				</li>
			</ul>
		</>
	);
};
export default OverviewBar;
