import { IoLocationOutline, IoGlobeOutline, IoHeartOutline, IoHeart, IoFitness } from "react-icons/io5";

import ActionButtons from "@/components/ProjectPublic/ActionButtons";
import { Badge, BadgeRounded } from "@/components/Badges/Badges";

const OverviewBar = ({ project }) => {
	return (
		<>
			{/* Category, location, likes, project status */}
			<ul className="sm:flex sm:mb-8 lg:px-2 grid grid-cols-2 items-center text-sm">
				{/* Project sub-category */}
				<li className="flex mb-2 sm:mb-0 justify-center" title="Project category">
					<Badge badge={project.category} size={"sm"} />
				</li>

				{/* Project sub-category */}
				<li className="flex mb-2 sm:mb-0 sm:ml-4 justify-center" title="Project sub-category">
					<BadgeRounded badge={project.subCategoryDetails} size={"sm"} />
				</li>

				{/* Project location */}
				<li className="flex mb-2 sm:mb-0 sm:ml-4 col-span-2 justify-center items-center">
					{project.location.onlineOnly ? (
						<>
							<IoGlobeOutline className="text-blue-500 mr-1 text-xl" title="Online project" />
							<p className="font-medium">Online only</p>
						</>
					) : (
						<>
							<IoLocationOutline className="text-gray-400 mr-1 text-xl" title="Project location" />
							<p className="text-gray-700">{project.location.locationCity}</p>
						</>
					)}
				</li>

				{/* Project likes */}
				<li className="flex mb-2 sm:mb-0 sm:ml-4 justify-center">
					<button className="relative group mr-1 text-xl" title="Like this project">
						<IoHeartOutline className="text-pink-600 group-hover:hidden" />
						{/* Filled on hover */}
						<IoHeart className="text-pink-600 hidden group-hover:block" />
					</button>
					<p>{project.likes} likes</p>
				</li>

				{/* Project status */}
				<li className="flex sm:ml-4">
					<IoFitness className={`text-${project.statusInfo.currentStatus.colors.colorBase} mr-1 text-xl justify-center`} title="Project status" />
					<p className={`text-${project.statusInfo.currentStatus.colors.colorBase} font-semibold`}>{project.statusInfo.currentStatus.status}</p>
				</li>

				{/* Buttons Join project, Like and Share */}
				<li className="flex ml-auto">
					<ActionButtons project={project} />
				</li>
			</ul>
		</>
	);
};
export default OverviewBar;
