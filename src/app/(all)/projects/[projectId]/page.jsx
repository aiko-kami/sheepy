import Image from "next/image";
import Link from "next/link";
import { IoLocationOutline, IoHeartOutline, IoFitness } from "react-icons/io5";

import Badge from "@/components/Badges/Badge";
import BadgeRounded from "@/components/Badges/BadgeRounded";

import project from "@/mock/project.json";

const ProjectDescriptionPage = ({ params }) => {
	return (
		<div className="container mx-auto py-8">
			{/* Title */}
			<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold mb-4 text-center">{project.title}</h1>
			{/* Summary */}
			<p className="mb-2 text-lg lg:mx-1/7 text-justify">{project.summary}</p>
			{/* Creator */}
			<div className="text-gray-300 text-lg mb-12 flex items-center justify-center">
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
			<ul className="sm:flex mb-4 sm:mb-12 lg:pl-26">
				<li className="flex mb-2 sm:mb-0">
					<Badge badge={project.category} />
				</li>
				<li className="flex mb-2 sm:mb-0 sm:ml-4">
					<IoLocationOutline className="text-gray-400 mr-1 text-2xl" />
					<p>{project.locationCity}</p>
				</li>
				<li className="flex mb-2 sm:mb-0 sm:ml-4">
					<IoHeartOutline className="text-pink-600 mr-1 text-2xl" />
					<p>{project.likes} likes</p>
				</li>
				<li className="flex sm:ml-4">
					<IoFitness className="text-green-600 mr-1 text-2xl" />
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
					{/* Goal */}
					<h2 className="font-semibold text-3xl mb-3">Goal</h2>
					<hr class="h-px mb-3 bg-gray-200 border-0 dark:bg-gray-700" />
					<p className="mb-8 text-justify">{project.goal}</p>
					{/* Sub-category */}
					<h2 className="font-semibold text-3xl mb-3">Sub-category</h2>
					<hr class="h-px mb-3 bg-gray-200 border-0 dark:bg-gray-700" />
					<div className="mb-8 text-justify">
						<Badge badge={project.subCategory} />
					</div>
					{/* Tags */}
					<h2 className="font-semibold text-3xl mb-3">Tags</h2>
					<hr class="h-px mb-3 bg-gray-200 border-0 dark:bg-gray-700" />
					<div className="flex flex-wrap justify-center mb-8">
						{project.tags.map((tag, index) => (
							<div key={index} className="mx-1 my-2">
								<BadgeRounded badge={tag} />
							</div>
						))}
					</div>
					{/* Members */}
					<h2 className="font-semibold text-3xl mb-3">Members</h2>
					<hr class="h-px mb-3 bg-gray-200 border-0 dark:bg-gray-700" />
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
					{/* Talents needed */}
					<h2 className="font-semibold text-3xl mb-3">Talents needed</h2>
					<hr class="h-px mb-3 bg-gray-200 border-0 dark:bg-gray-700" />
					<div className="mt-5 mb-8">
						{project.talentsNeeded.map((talent, index) => (
							<div key={index} className="text-gray-300 text-lg mb-4 flex items-center">
								<Image src={project.talentProfilePicture} className="object-cover rounded-full w-10 h-10 mr-3" alt="talent profile picture" height={0} width={0} sizes="100vw" />
								<p>{talent.role}</p>
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
