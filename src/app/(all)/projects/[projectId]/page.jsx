import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLocationOutline, IoHeartOutline, IoFitness, IoArrowForward, IoBookmarkOutline, IoShareSocialOutline } from "react-icons/io5";

import Badge from "@/components/Badges/Badge";
import BadgeRounded from "@/components/Badges/BadgeRounded";
import ButtonBlue from "@/components/Buttons/ButtonBlue";
import ButtonRoundGray from "@/components/Buttons/ButtonRoundGray";

import project from "@/mock/project.json";

const ProjectDescriptionPage = ({ params }) => {
	return (
		<div className="container mx-auto py-8">
			{/* Title */}
			<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold mb-4 text-center">{project.title}</h1>
			{/* Summary */}
			<p className="mb-2 text-lg lg:mx-1/7 text-justify">This is project {params.projectId}.</p>
			<p className="mb-2 text-lg lg:mx-1/7 text-justify">{project.summary}</p>
			{/* Creator */}
			<div className="text-gray-300 text-lg mb-6 flex items-center justify-center">
				<span className="">by</span>
				<Link href={`/users/${project.userId}`} className="ml-1 mr-2 font-semibold">
					{project.creator}
				</Link>
				<Link href={`/users/${project.userId}`}>
					<Image src={project.creatorProfilePicture} className="object-cover rounded-full w-10 h-10" alt="creator profile picture" height={0} width={0} sizes="100vw" />
				</Link>
			</div>
			{/* Project cover */}
			<Image src={project.cover} className="w-full h-100 object-cover rounded-3xl mb-3" alt="Card" width={0} height={0} sizes="100vw" />
			{/* Category, location, likes, project status */}
			<ul className="sm:flex mb-4 sm:mb-10 lg:pl-26 grid grid-cols-2">
				<li className="flex mb-2 sm:mb-0 justify-center">
					<Badge badge={project.category} />
				</li>
				<li className="flex mb-2 sm:mb-0 sm:ml-4 justify-center">
					<Badge badge={project.subCategory} />
				</li>
				<li className="flex mb-2 sm:mb-0 sm:ml-4 col-span-2 justify-center">
					<IoLocationOutline className="text-gray-400 mr-1 text-2xl" />
					<p>{project.locationCity}</p>
				</li>
				<li className="flex mb-2 sm:mb-0 sm:ml-4 justify-center">
					<IoHeartOutline className="text-pink-600 mr-1 text-2xl" />
					<p>{project.likes} likes</p>
				</li>
				<li className="flex sm:ml-4">
					<IoFitness className="text-green-600 mr-1 text-2xl justify-center" />
					<p className="text-green-600 font-semibold">{project.status}</p>
				</li>
			</ul>
			<div className="grid sm:grid-cols-3 mb-4 sm:mb-12">
				<div className="sm:col-span-2 sm:pr-8 lg:px-26 mb-4 sm:mb-0">
					{/* About the project */}
					<h2 className="font-semibold text-3xl mb-4">The project in details</h2>
					<p className="mb-2 text-justify">{project.description}</p>
					<Image src={project.coverDescription} className="w-full h-80 object-cover my-4" alt="Card" width={600} height={225} />
					<p className="mb-2 text-justify">{project.description}</p>
				</div>
				<div>
					{/* Button join project */}
					<div className="text-center mb-8">
						<button
							type="submit"
							className={`text-2xl pb-2.5 px-4 pt-2 bg-blue-600 text-white leading-snug rounded hover:bg-blue-700 hover:shadow-lg active:bg-blue-800 transition duration-150 ease-in-out`}
							data-mdb-ripple="true"
							data-mdb-ripple-color="light"
						>
							<div className="flex items-center">
								Apply for this project <IoArrowForward className="text-2xl ml-2 mt-2" />
							</div>
						</button>

						<ButtonBlue btnSize={"xl"}>
							<div className="flex items-center">
								Apply for this project <IoArrowForward className="text-2xl ml-2 mt-1" />
							</div>
						</ButtonBlue>
					</div>

					{/* Buttons Like and Share */}
					<div className="flex justify-center gap-8 mb-2">
						<ButtonRoundGray btnSize={"xl"}>
							<div className="flex">
								<IoBookmarkOutline className="text-2xl mt-1" />
							</div>
						</ButtonRoundGray>

						<ButtonRoundGray btnSize={"xl"}>
							<div className="flex">
								<IoShareSocialOutline className="text-2xl mt-1" />
							</div>
						</ButtonRoundGray>
					</div>

					{/* Goal */}
					<h2 className="font-semibold text-3xl mb-3">Goal</h2>
					<hr className="h-px mb-3 bg-gray-200 border-0 dark:bg-gray-700" />
					<p className="mb-8 text-justify">{project.goal}</p>

					{/* Talents needed */}
					<h2 className="font-semibold text-3xl mb-3">Talents needed</h2>
					<hr className="h-px mb-3 bg-gray-200 border-0 dark:bg-gray-700" />
					<div className="mt-5 mb-0 grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 lg:mx-8">
						{project.talentsNeeded.map((talent, index) => (
							<React.Fragment key={index}>
								<div className="text-gray-300 text-lg mb-8 mr-2 flex items-center h-full col-span-2">
									<Image src={project.talentProfilePicture} className="object-cover rounded-full w-10 h-10 mr-3" alt="talent profile picture" height={0} width={0} sizes="100vw" />
									<p className="overflow-auto hyphens-auto ">{talent.role}</p>
								</div>
								<div className="flex items-center">
									<ButtonBlue btnSize={"std"}>
										<div className="flex">
											Apply
											<IoArrowForward className="text-2xl ml-2 mt-0.5" />
										</div>
									</ButtonBlue>
								</div>
							</React.Fragment>
						))}
					</div>

					{/* Tags */}
					<h2 className="font-semibold text-3xl mb-3">Tags</h2>
					<hr className="h-px mb-3 bg-gray-200 border-0 dark:bg-gray-700" />
					<div className="flex flex-wrap justify-center mb-8">
						{project.tags.map((tag, index) => (
							<div key={index} className="mx-1 my-2">
								<BadgeRounded badge={tag} />
							</div>
						))}
					</div>
					{/* Members */}
					<h2 className="font-semibold text-3xl mb-3">Members</h2>
					<hr className="h-px mb-3 bg-gray-200 border-0 dark:bg-gray-700" />
					<div className="mt-5 mb-8">
						{project.members.map((member, index) => (
							<div key={index} className="text-gray-300 text-lg mb-4 flex items-center">
								<Link href={`/users/${member.userId}`}>
									<Image src={member.profilePicture} className="object-cover rounded-full w-16 h-16 mr-3" alt="member profile picture" height={0} width={0} sizes="100vw" />
								</Link>
								<Link href={`/users/${member.userId}`} className="font-semibold">
									{member.username}
								</Link>
								<span className="mr-1">, </span>
								<p>{member.role}</p>
							</div>
						))}
					</div>
				</div>
			</div>
			{/* Q&A */}
			<p className="mb-2">
				<span className="font-semibold">Q&As:</span> {project.qnas.map((qna) => `${qna.question} ${qna.answer}`).join(", ")}
			</p>
			{/* Comments */}
			<p className="mb-2">
				<span className="font-semibold">Comments:</span> {project.comments}
			</p>
		</div>
	);
};

export default ProjectDescriptionPage;
