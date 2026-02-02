import Image from "next/image";
import Link from "next/link";

import { Badge, BadgeRounded, Status } from "@/components/Badges/Badges";
import MyProjectsActions from "@/components/IconsActions/MyProjectsActions";
import UserRequestsActions from "@/components/IconsActions/UserRequestsActions";
import UserInvitationsActions from "@/components/IconsActions/UserInvitationsActions";

const ProjectCard = ({ project, animate }) => {
	console.log("🚀 ~ ProjectCard ~ project:", project);

	const { projectId, title, summary, cover, category, tags } = project;

	// Conditional classes for animation
	const animationClasses = animate ? "duration-100 transform hover:-translate-y-2 transition ease-in" : "";

	return (
		<>
			<div className={`rounded-lg max-w-72 shadow-2xl my-auto overflow-hidden ${animationClasses}`}>
				{/* Card image and category */}
				<div className="relative w-full">
					<Link href={`/projects/${projectId}`}>
						<Image src={cover} className="w-full h-36 sm:h-62 object-cover rounded-t-lg" alt="Card" height={0} width={0} sizes="100vw" />
					</Link>
					<div className="absolute bottom-2 right-2">
						<Badge badge={category} size={"xs"} />
					</div>
				</div>

				{/* Card body */}
				<div className="px-1 md:px-4 py-2 bg-blue-900 min-h-54 rounded-b-lg">
					<div className="flex flex-wrap justify-center h-12 overflow-hidden">
						{tags.map((tag, index) => (
							<div key={index} className="mx-1 my-2">
								<BadgeRounded badge={tag} size={"xs"} />
							</div>
						))}
					</div>
					<Link href={`/projects/${projectId}`}>
						<h2 className="font-semibold text-lg md:text-xl line-clamp-2 mb-4">{title}</h2>
						<p className="line-clamp-3 text-sm md:text-base">{summary}</p>
					</Link>
				</div>
			</div>
		</>
	);
};

const ProjectCardSkeleton = () => {
	return (
		<div className="rounded-lg max-w-72 shadow-2xl my-auto overflow-hidden">
			{/* Skeleton Card image and category */}
			<div className="relative h-62 flex justify-center items-center bg-gray-600">
				<svg className="w-10 h-10 text-gray-500 animate-pulse" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
					<path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
				</svg>
				<div className="absolute bottom-2 right-2 bg-gray-500 rounded h-6 w-12 animate-pulse"></div>
			</div>

			{/* Skeleton Card body */}
			<div className="px-1 md:px-4 py-2 bg-blue-900 min-h-54 rounded-b-lg">
				<div className="flex flex-wrap justify-center h-12 overflow-hidden">
					{[...Array(2)].map((_, index) => (
						<div key={index} className="mx-1 mt-2 bg-gray-500 rounded-full h-6 w-16 animate-pulse"></div>
					))}
				</div>
				<div>
					<div className="bg-gray-500 h-5 rounded-xl mb-7 w-full animate-pulse"></div>
					<div className="bg-gray-500 h-3 rounded-xl mb-4 w-full animate-pulse"></div>
					<div className="bg-gray-500 h-3 rounded-xl mb-4 w-full animate-pulse"></div>
					<div className="bg-gray-500 h-3 rounded-xl mb-4 w-3/4 animate-pulse"></div>
				</div>
			</div>
		</div>
	);
};

const ProjectHorizontalCard = ({ project, animate }) => {
	const { title, projectId, link, summary, cover, likes, category, subCategory, location, tags, status } = project;

	// Conditional classes for animation
	const animationClasses = animate ? "hover:-translate-y-1 transition ease-in duration-75" : "";

	return (
		<>
			<div className={`relative grid grid-cols-4 items-center shadow-xl rounded-lg bg-blue-900 ${animationClasses}`}>
				<div className="col-span-1 relative h-46">
					<Link href={`/projects/${link}`}>
						<Image src={cover.link} fill alt="Project picture" className="object-cover h-full shadow-md rounded-l-lg" />
					</Link>
				</div>
				<div className="px-6 col-span-3 h-full py-8 relative">
					<Link href={`/projects/${link}`}>
						<h3 className="font-semibold text-2xl line-clamp-1">{title}</h3>
					</Link>
					<div className="py-2">
						<Badge badge={category} size={"xs"} />
					</div>
					<p className="line-clamp-2">{summary}</p>
				</div>
			</div>
		</>
	);
};

const ProjectHorizontalCardActions = ({ project, animate }) => {
	const { title, projectId, summary, cover, likes, category, subCategory, location, tags, status, permissions } = project;

	// Conditional classes for animation
	const animationClasses = animate ? "hover:-translate-y-1 transition ease-in duration-75" : "";

	return (
		<>
			<div className={`relative grid grid-cols-4 items-center shadow-xl rounded-lg bg-blue-900 ${animationClasses}`}>
				<div className="col-span-1 relative h-full">
					<Link href={`/projects/${projectId}`}>
						<Image src={cover} fill alt="Project picture" className="object-cover h-full shadow-md rounded-l-lg" />
					</Link>
				</div>
				<div className="px-6 col-span-3 h-full py-4">
					<Link href={`/projects/${projectId}`}>
						<h3 className="inline-block font-semibold text-2xl">{title}</h3>
					</Link>
					<div className="py-2">
						<Badge badge={category} size={"xs"} />
					</div>
					<p className="line-clamp-2 mb-3">{summary}</p>
					<div className="flex justify-end text-gray-300">
						<MyProjectsActions projectId={projectId} projectPermissions={permissions} iconSize={"lg"} />
					</div>
				</div>
			</div>
		</>
	);
};

const JoinProjectHorizontalCardActions = ({ joinProject, animate, type }) => {
	const { project, message, talent, recent, status, actions } = joinProject;

	// Conditional classes for animation
	const animationClasses = animate ? "hover:-translate-y-1 transition ease-in duration-75" : "";

	return (
		<>
			<div className={`relative grid items-center shadow-xl rounded-lg bg-blue-900 ${animationClasses}`}>
				<div className="px-6 h-full py-4">
					<h3 className="inline-block font-semibold text-2xl">{project.title}</h3>
					<div className="py-2">
						<Badge badge={project.category} size={"xs"} />
					</div>
					<p className="line-clamp-2 mb-3">{message}</p>
					<div className="flex items-center justify-end gap-2">
						<Status name={joinProject.status.name} size={"xs"} rounded={"std"} bgColor={joinProject.status.bgColor} />
						<div className="flex justify-end text-gray-300">
							{type === "invitation" && <UserInvitationsActions invitation={joinProject} iconSize={"lg"} />}
							{type === "request" && <UserRequestsActions request={joinProject} iconSize={"lg"} />}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export { ProjectCard, ProjectCardSkeleton, ProjectHorizontalCard, ProjectHorizontalCardActions, JoinProjectHorizontalCardActions };
