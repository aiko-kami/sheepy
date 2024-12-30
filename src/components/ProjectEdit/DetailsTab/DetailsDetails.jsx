import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DateTime } from "luxon";

import { IoBarChartSharp, IoHeartCircle, IoBulbOutline, IoCalendar, IoPersonCircleOutline, IoTimeOutline, IoStar } from "react-icons/io5";

const DetailsDetails = ({ project }) => {
	// Manage the toggle state
	const [isCreationRelative, setIsCreationRelative] = useState(true);
	const [isLastUpdateRelative, setIsLastUpdateRelative] = useState(true);

	// Format the dates
	const projectCreationDateRelative = DateTime.fromISO(project.createdAt, { locale: "en" }).toRelative();
	const projectCreationDate = DateTime.fromISO(project.createdAt, { locale: "en" }).toJSDate().toString();
	const projectLastUpdateDateRelative = DateTime.fromISO(project.updatedAt, { locale: "en" }).toRelative();
	const projectLastUpdateDate = DateTime.fromISO(project.updatedAt, { locale: "en" }).toJSDate().toString();

	// Toggle between relative and absolute dates
	const handleToggleDateCreation = () => {
		setIsCreationRelative(!isCreationRelative);
	};
	const handleToggleDateLastUpdate = () => {
		setIsLastUpdateRelative(!isLastUpdateRelative);
	};

	const projectOwners = project.members.filter((member) => member.isOwner);

	return (
		<>
			{/* Project details and stats */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoBarChartSharp className="mr-2 text-2xl" />
				Project details and statistics
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="pl-4">
				{/* Project details and stats */}
				<div className="mb-8">
					{/* Project creator */}
					<div className="mb-4 lg:flex items-center">
						<div className="flex mb-2 lg:mb-0">
							<IoBulbOutline className="mr-2 text-2xl" />
							<span className="mr-2 flex-nowrap">This project was created by</span>
						</div>
						<span className="ml-8 lg:ml-0 flex items-center">
							<Link href={`/users/${project.creator.userId}`}>
								<Image src={project.creator.profilePicture} height={0} width={0} sizes="100vw" alt="User profile picture" className="object-cover min-w-9 h-9 rounded-full shadow-md mr-1" />
							</Link>
							<div className="font-semibold">
								<Link href={`/users/${project.creator.userId}`}>{project.creator.username}</Link>
							</div>
						</span>
					</div>

					{/* Project owner(s) */}
					<div className="mb-4 lg:flex items-center">
						<div className="flex mb-3 lg:mb-0">
							<IoPersonCircleOutline className="mr-2 text-2xl" />
							<span className="mr-2 flex-nowrap">
								<span className="mr-2 py-1 px-2.5 text-white font-bold text-xs text-nowrap rounded cursor-default bg-blue-500">Project {projectOwners.length > 1 ? "Owners" : "Owner"}</span>
								{projectOwners.length > 1 ? "are" : "is"}
							</span>
						</div>
						<span className="ml-8 lg:ml-0 flex flex-wrap items-center">
							{projectOwners.map((owner) => (
								<span key={owner.userId} className="flex items-center mr-3 mb-2 lg:mb-0">
									<Link href={`/users/${owner.userId}`}>
										<Image src={owner.profilePicture} height={0} width={0} sizes="100vw" alt="User profile picture" className="object-cover min-w-9 h-9 rounded-full shadow-md mr-1" />
									</Link>
									<div className="font-semibold">
										<Link href={`/users/${owner.userId}`}>{owner.username}</Link>
									</div>
								</span>
							))}
						</span>
					</div>

					{/* Project creation date */}
					<div className="mb-4 lg:flex items-center">
						<div className="flex mb-2 lg:mb-0">
							<IoCalendar className="mr-2 text-2xl" />
							<span className="mr-1 flex-nowrap">This project was created</span>
						</div>
						<span className="ml-8 lg:ml-0 font-semibold cursor-pointer block" title={isCreationRelative ? projectCreationDate : projectCreationDateRelative} onClick={handleToggleDateCreation}>
							{isCreationRelative ? projectCreationDateRelative : projectCreationDate}
						</span>
					</div>

					{/* Project last update date */}
					<div className="mb-4 lg:flex items-center">
						<div className="flex mb-2 lg:mb-0">
							<IoTimeOutline className="mr-2 text-2xl" />
							<span className="mr-1 flex-nowrap">This project was last updated</span>
						</div>
						<span
							className="ml-8 lg:ml-0 mr-1 mb-2 lg:mb-0 font-semibold cursor-pointer block"
							title={isLastUpdateRelative ? projectLastUpdateDate : projectLastUpdateDateRelative}
							onClick={handleToggleDateLastUpdate}
						>
							{isLastUpdateRelative ? projectLastUpdateDateRelative : projectLastUpdateDate}
						</span>
						<div className="flex items-center">
							<span className="ml-8 lg:ml-0 mr-2">by</span>
							<span className="flex items-center">
								<Link href={`/users/${project.updatedBy.userId}`}>
									<Image src={project.updatedBy.profilePicture} height={0} width={0} sizes="100vw" alt="User profile picture" className="object-cover min-w-9 h-9 rounded-full shadow-md mr-1" />
								</Link>
								<div className="font-semibold">
									<Link href={`/users/${project.updatedBy.userId}`}>{project.updatedBy.username}</Link>
								</div>
							</span>
						</div>
					</div>

					{/* Project number of likes */}
					<div className="mb-4 flex items-center">
						<IoHeartCircle className="mr-2 text-2xl" />
						This project has&nbsp;<span className="font-semibold">{project.likes}</span>&nbsp;Likes
					</div>

					{/* Project crush */}
					{project.crush && (
						<div className="mb-4 flex items-center">
							<IoStar className="mr-2 text-2xl" />
							<span className="mr-2">This project is set as</span>
							<span className="flex-nowrap">
								<span className="py-1 px-2.5 font-bold text-xs text-nowrap rounded cursor-default bg-yellow-500">CRUSH</span>
							</span>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default DetailsDetails;
