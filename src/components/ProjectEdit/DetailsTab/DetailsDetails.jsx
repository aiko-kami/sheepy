import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DateTime } from "luxon";

import { IoBarChartSharp, IoHeart, IoBulbOutline, IoCalendar, IoPersonCircleOutline, IoTimeOutline, IoStar } from "react-icons/io5";

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

			<div>
				{/* Project details and stats */}
				<div className="mb-8 md:grid md:grid-cols-2 xl:grid-cols-3 gap-3">
					{/* Project creator */}
					<div className="bg-base-550 rounded-md relative min-h-30 py-4 px-3 mb-3 xl:mb-0">
						<IoBulbOutline className="absolute right-3 top-3 text-5xl p-2 bg-sky-900 rounded-md" />
						<h3 className="flex text-lg mb-4 ">Project creator</h3>
						<div className="flex items-center justify-center">
							<Link href={`/users/${project.creator.userId}`}>
								<Image src={project.creator.profilePicture} height={0} width={0} sizes="100vw" alt="User profile picture" className="object-cover min-w-12 h-12 rounded-full shadow-md mr-1" />
							</Link>
							<div className="font-semibold text-lg">
								<Link href={`/users/${project.creator.userId}`}>{project.creator.username}</Link>
							</div>
						</div>
					</div>

					{/* Project owner(s) */}
					<div className="bg-base-550 rounded-md relative min-h-30 py-4 px-3 mb-3 xl:mb-0">
						<IoPersonCircleOutline className="absolute right-3 top-3 text-5xl p-2 bg-sky-900 rounded-md" />
						<span className="text-lg py-1 px-2.5 rounded bg-blue-500">Project {projectOwners.length > 1 ? "owners" : "owner"}</span>
						<div className="mt-4 pl-12">
							{projectOwners.map((owner) => (
								<span key={owner.userId} className={`flex items-center ${projectOwners.length > 1 ? "mb-3" : ""}`}>
									<Link href={`/users/${owner.userId}`}>
										<Image src={owner.profilePicture} height={0} width={0} sizes="100vw" alt="User profile picture" className="object-cover min-w-12 h-12 rounded-full shadow-md mr-1" />
									</Link>
									<div className="font-semibold text-lg">
										<Link href={`/users/${owner.userId}`}>{owner.username}</Link>
									</div>
								</span>
							))}
						</div>
					</div>

					{/* Project creation date */}
					<div className="bg-base-550 rounded-md relative min-h-30 py-4 px-3 mb-3 xl:mb-0">
						<IoCalendar className="absolute right-3 top-3 text-5xl p-2 bg-sky-900 rounded-md" />
						<h3 className="flex text-lg mb-4">Project created</h3>
						<div className="flex items-center justify-center">
							<span
								className={`font-semibold cursor-pointer text-center block ${isCreationRelative ? "text-3xl" : "text-lg"}`}
								title={isCreationRelative ? projectCreationDate : projectCreationDateRelative}
								onClick={handleToggleDateCreation}
							>
								{isCreationRelative ? projectCreationDateRelative : projectCreationDate}
							</span>
						</div>
					</div>

					{/* Project last update date */}
					<div className="bg-base-550 rounded-md relative min-h-30 py-4 px-3 col-span-2 mb-3 xl:mb-0">
						<IoTimeOutline className="absolute right-3 top-3 text-5xl p-2 bg-sky-900 rounded-md" />
						<h3 className="flex text-lg mb-4">Project last updated</h3>
						<div className="flex items-center justify-center mb-5">
							<span
								className={`font-semibold cursor-pointer text-center block ${isLastUpdateRelative ? "text-3xl" : "text-lg"}`}
								title={isLastUpdateRelative ? projectLastUpdateDate : projectLastUpdateDateRelative}
								onClick={handleToggleDateLastUpdate}
							>
								{isLastUpdateRelative ? projectLastUpdateDateRelative : projectLastUpdateDate}
							</span>
						</div>
						<div className="flex items-center justify-center">
							<span className="ml-8 lg:ml-0 mr-2">by</span>
							<div className="flex items-center justify-center">
								<Link href={`/users/${project.updatedBy.userId}`}>
									<Image src={project.updatedBy.profilePicture} height={0} width={0} sizes="100vw" alt="User profile picture" className="object-cover min-w-12 h-12 rounded-full shadow-md mr-1" />
								</Link>
								<div className="font-semibold text-lg">
									<Link href={`/users/${project.updatedBy.userId}`}>{project.updatedBy.username}</Link>
								</div>
							</div>
						</div>
					</div>

					{/* Project number of likes */}
					<div className="bg-base-550 rounded-md min-h-50 relative mb-3 xl:mb-0">
						<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
							<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 24 24">
								<path fill="#db2777" d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
							</svg>
						</div>
						<div className="absolute top-4/9 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl">
							<span className="font-semibold ">{project.likes}</span>&nbsp;
							{project.likes > 1 ? "Likes" : "Like"}
						</div>
					</div>

					{/* Project crush */}
					{project.crush && (
						<div className="bg-base-550 rounded-md relative min-h-30 py-4 px-3 mb-3 xl:mb-0">
							<IoStar className="absolute right-3 top-3 text-5xl p-2 bg-sky-900 rounded-md" />
							<h3 className="flex text-lg mb-4">Selection</h3>
							<div className="flex flex-col items-center justify-center">
								<div className="mb-4">Your project has been selected as</div>
								<span className="mb-3 py-1 px-2.5 font-bold text-3xl text-nowrap rounded cursor-default bg-yellow-500">CRUSH</span>
								<div className="mb-2 text-xs italic">Crush projects are visible on the front page</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default DetailsDetails;
