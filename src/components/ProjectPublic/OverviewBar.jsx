"use client";
import { useRouter } from "next/navigation";
import { IoLocationOutline, IoGlobeOutline, IoHeartOutline, IoHeart, IoFitness } from "react-icons/io5";

import ActionButtons from "@/components/ProjectPublic/ActionButtons";
import { Badge, BadgeRounded } from "@/components/Badges/Badges";

import { ApiPatchLikeProject, ApiPatchUnlikeProject } from "@/lib/api/projectEditionServer";
import { showErrorToast, showSuccessToast } from "@/utils/toast";
import { ERRORS, SUCCESS } from "@/lib/constants";

const OverviewBar = ({ projectId, category, subCategoryDetails, location, likes, userLikeProject, status, statusColorClass, projectLink, talentsNeeded }) => {
	const router = useRouter();

	const colorClassStatus = statusColorClass && !statusColorClass.startsWith("#") ? `text-${statusColorClass}` : "text-gray-400";

	const { onlineOnly = false, city = null, country = null } = location ?? {};

	const likeProject = async () => {
		try {
			const result = await ApiPatchLikeProject(projectId);
			if (!result.ok) {
				showErrorToast(result.message || ERRORS.PROJECT_LIKE.LIKE_FAILED);
				return;
			}

			showSuccessToast(SUCCESS.PROJECT_LIKE.LIKE_SUCCESS);
			router.refresh();
		} catch (error) {
			showErrorToast(error.message || ERRORS.PROJECT_LIKE.LIKE_FAILED);
		}
	};

	const unlikeProject = async () => {
		try {
			const result = await ApiPatchUnlikeProject(projectId);
			if (!result.ok) {
				showErrorToast(result.message || ERRORS.PROJECT_LIKE.UNLIKE_FAILED);
				return;
			}

			showSuccessToast(SUCCESS.PROJECT_LIKE.UNLIKE_SUCCESS);
			router.refresh();
		} catch (error) {
			showErrorToast(error.message || ERRORS.PROJECT_LIKE.UNLIKE_FAILED);
		}
	};

	return (
		<>
			{/* Category, location, likes, project status */}
			<ul className="flex flex-col md:flex-row lg:px-2 md:items-start text-sm space-y-3 md:space-y-0 md:gap-x-6">
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
				<li className="flex items-center text-nowrap md:gap-x-6">
					<div className="flex items-center text-nowrap mr-2 md:mr-0">
						<IoFitness className={`${colorClassStatus} mr-1 text-xl justify-center`} title="Project status" />
						{status || <span className="italic text-gray-400">Status not found</span>}
					</div>
					<div className="flex items-center text-nowrap">
						{userLikeProject ? (
							<button className="relative group mr-1 text-xl" title="Unlike this project" onClick={unlikeProject}>
								<IoHeart className="text-pink-600" />
							</button>
						) : (
							<>
								<button className="relative group mr-1 text-xl" title="Like this project" onClick={likeProject}>
									<IoHeartOutline className="text-pink-600 group-hover:hidden" />
									<IoHeart className="text-pink-600 hidden group-hover:block" />
								</button>
							</>
						)}
						<p>{likes} likes</p>
					</div>
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
