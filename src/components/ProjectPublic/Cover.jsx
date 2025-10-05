import Image from "next/image";
import Link from "next/link";
import { IoLocationOutline, IoGlobeOutline, IoHeartOutline, IoHeart, IoFitness, IoBookmarkOutline, IoShareSocialOutline } from "react-icons/io5";

import ActionButtons from "@/components/ProjectPublic/ActionButtons";
import { Badge, BadgeRounded } from "@/components/Badges/Badges";
import { ButtonCircle } from "@/components/Buttons/Buttons";

const Cover = ({ project }) => {
	return (
		<>
			<div className="relative mb-3">
				{/* Project cover */}
				<Image src={project.cover} className="w-full h-110 object-cover rounded-xl" alt="Project cover" width={0} height={0} sizes="100vw" />

				{/* Transparent veil on the cover */}
				<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent rounded-xl" />

				<div className="absolute bottom-4 left-4 flex flex-col">
					{/* Title */}
					<h1 className="text-5xl sm:text-6xl font-semibold mb-5">{project.title}</h1>

					{/* Creator */}
					<div className="text-lg flex items-center ml-2">
						<span className="">by</span>
						<div className="flex items-center justify-center hover:text-blue-400 duration-100 transition ease-in-out mr-14">
							<Link href={`/users/${project.owner.userId}`} className="ml-1 mr-2 font-semibold">
								{project.owner.username}
							</Link>
							<Link href={`/users/${project.owner.userId}`}>
								<Image src={project.owner.profilePicture} className="object-cover rounded-full w-10 h-10" alt="creator profile picture" height={0} width={0} sizes="100vw" />
							</Link>
						</div>

						{/* Buttons Like and Share */}
						<div className="flex justify-center gap-4">
							<ButtonCircle btnProps={{ btnSize: "xl", type: "button", btnColor: "grayBorder" }}>
								<IoBookmarkOutline />
							</ButtonCircle>

							<ButtonCircle btnProps={{ btnSize: "xl", type: "button", btnColor: "grayBorder" }}>
								<IoShareSocialOutline />
							</ButtonCircle>
						</div>
					</div>
				</div>
			</div>

			{/* Category, location, likes, project status */}
			<div className="mb-4 sm:mb-8">
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

				{/* Project summary */}
				<div className="lg:mx-4 border rounded-xl p-6 bg-slate-800/50 border-slate-700 backdrop-blur-sm shadow-xl">
					<h2 className="text-xl font-bold mb-6">Project summary</h2>
					<p className="text-justify text-slate-300 leading-relaxed">{project.summary}</p>
				</div>
			</div>
		</>
	);
};
export default Cover;
