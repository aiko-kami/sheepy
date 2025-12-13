"use client";

import { useState } from "react";
import Link from "next/link";
import { DateTime } from "luxon";

import { IoBarChartSharp, IoBulbOutline, IoCalendar, IoPersonCircleOutline, IoTimeOutline, IoStar } from "react-icons/io5";
import { Avatar } from "@/components/Badges/Avatar";

const DetailsDetails = ({ project, creator, owners, createdAt, updatedAt, updatedBy, likes, crush }) => {
	// Manage the toggle state
	const [isCreationRelative, setIsCreationRelative] = useState(true);
	const [isLastUpdateRelative, setIsLastUpdateRelative] = useState(true);

	// Format the dates
	const projectCreationDateRelative = DateTime.fromISO(createdAt, { locale: "en" }).toRelative();
	const projectCreationDate = DateTime.fromISO(createdAt, { locale: "en" }).toJSDate().toString();
	const projectLastUpdateDateRelative = DateTime.fromISO(updatedAt, { locale: "en" }).toRelative();
	const projectLastUpdateDate = DateTime.fromISO(updatedAt, { locale: "en" }).toJSDate().toString();

	// Toggle between relative and absolute dates
	const handleToggleDateCreation = () => {
		setIsCreationRelative(!isCreationRelative);
	};
	const handleToggleDateLastUpdate = () => {
		setIsLastUpdateRelative(!isLastUpdateRelative);
	};

	return (
		<>
			{/* Project details and stats */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoBarChartSharp className="mr-2 text-2xl" />
				Project details and statistics
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="md:px-4">
				{/* Project details and stats */}
				<div className="mb-8 md:grid md:grid-cols-2 xl:grid-cols-6 gap-3">
					{/* Project creator */}
					<div className="bg-base-550 rounded-md relative min-h-30 py-4 px-3 mb-3 xl:mb-0 xl:col-span-2">
						<IoBulbOutline className="absolute right-3 top-3 text-5xl p-2 bg-sky-900 rounded-md" />
						<h3 className="flex text-lg mb-4 ">Project creator</h3>
						<div className="flex items-center justify-center">
							<Link href={`/users/${creator?.userId}`}>
								<div className="mr-2">
									<Avatar img={creator?.profilePicture?.link} size={"lg"} alt="User profile picture" />
								</div>
							</Link>
							<div className="font-semibold text-lg">
								<Link href={`/users/${creator?.userId}`}>{creator?.username}</Link>
							</div>
						</div>
					</div>

					{/* Project owner(s) */}
					<div className="bg-base-550 rounded-md relative min-h-30 py-4 px-3 mb-3 xl:mb-0 xl:col-span-2">
						<IoPersonCircleOutline className="absolute right-3 top-3 text-5xl p-2 bg-sky-900 rounded-md" />
						<span className="text-lg py-1 px-2.5 rounded bg-blue-500">Project {owners?.length > 1 ? "owners" : "owner"}</span>
						<div className="mt-4 pl-12">
							{owners?.map((owner) => (
								<span key={owner?.user?.userId} className={`flex items-center ${owners?.length > 1 ? "mb-3" : ""}`}>
									<Link href={`/users/${owner?.user?.userId}`}>
										<div className="mr-2">
											<Avatar img={owner?.user?.profilePicture?.link} size={"lg"} alt="User profile picture" />
										</div>
									</Link>
									<div className="font-semibold text-lg">
										<Link href={`/users/${owner?.user?.userId}`}>{owner?.user?.username}</Link>
									</div>
								</span>
							))}
						</div>
					</div>

					{/* Project creation date */}
					<div className="bg-base-550 rounded-md relative min-h-30 py-4 px-3 mb-3 xl:mb-0 xl:col-span-2">
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
					<div className="bg-base-550 rounded-md relative min-h-30 py-4 px-3 col-span-3 mb-3 xl:mb-0">
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
								<Link href={`/users/${updatedBy?.userId}`}>
									<div className="mr-2">
										<Avatar img={updatedBy?.profilePicture?.link} size={"lg"} alt="User profile picture" />
									</div>
								</Link>
								<div className="font-semibold text-lg">
									<Link href={`/users/${updatedBy?.userId}`}>{updatedBy?.username}</Link>
								</div>
							</div>
						</div>
					</div>

					{/* Project number of likes */}
					{(likes || likes === 0) && (
						<div className="bg-base-550 rounded-md min-h-50 relative mb-3 xl:mb-0">
							<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
								<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 24 24">
									<path fill="#db2777" d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
								</svg>
							</div>
							<div className="absolute top-4/9 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl">
								<span className="font-semibold ">{likes}</span>&nbsp;
								{likes > 1 ? "Likes" : "Like"}
							</div>
						</div>
					)}

					{/* Project crush */}
					{crush && (
						<div className="bg-base-550 rounded-md relative min-h-30 py-4 px-3 mb-3 xl:mb-0 xl:col-span-2">
							<IoStar className="absolute right-3 top-3 text-5xl p-2 bg-sky-900 rounded-md" />
							<h3 className="flex text-lg mb-4">Selection</h3>
							<div className="flex flex-col items-center justify-center">
								<div className="mb-4">Your project has been selected as</div>
								<span className="mb-3 py-1 px-2.5 font-bold text-3xl text-nowrap rounded cursor-default bg-yellow-500">CRUSH</span>
								<div className="mb-2 text-xs italic">Crush projects are visible on the front page</div>
							</div>
						</div>
					)}

					{/* Project new */}
				</div>
			</div>
		</>
	);
};

export default DetailsDetails;
