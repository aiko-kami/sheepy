import ProjectCard from "@/components/Cards/Projects/ProjectCard";
import ProjectCardSkeleton from "@/components/Cards/Projects/ProjectCardSkeleton";
import projectsToJoin from "@/mock/projectsToJoin.json";
import { Badge, BadgeRounded } from "@/components/Badges/Badges";

const JoinAProjectPage = () => {
	return (
		<div className="container min-w-full mx-auto py-8 px-2 md:px-8">
			<h1 className="text-4xl mb-12 text-center">Looking for a project?</h1>
			<p className="mb-4 md:mb-8 text-center">Here are some projects waiting for you to help them...</p>
			<div className="grid justify-evenly grid-cols-2 gap-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-5">
				{projectsToJoin.map((project, index) => {
					return (
						<div className="flex justify-center" key={index}>
							<ProjectCard key={index} project={project} animate={true} />
						</div>
					);
				})}
				<ProjectCardSkeleton />
				<ProjectCardSkeleton />
				<ProjectCardSkeleton />
				<ProjectCardSkeleton />
			</div>

			<div className="mt-8 relative overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left rtl:text-right">
					<thead className="text-xs uppercase bg-gray-700 text-gray-400">
						<tr>
							<th scope="col" className="px-6 py-3">
								Project title
							</th>
							<th scope="col" className="px-6 py-3">
								Category
							</th>
							<th scope="col" className="px-6 py-3">
								Summary
							</th>
						</tr>
					</thead>
					<tbody>
						{projectsToJoin.map((project, index) => {
							return (
								<tr key={index} className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
									<td scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
										<p className="font-bold">{project.title}</p>
									</td>
									<td className="px-6 py-4 text-center">
										<Badge badge={project.category} size={"xs"} />
									</td>
									<td className="px-6 py-4 text-gray-400">{project.summary}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default JoinAProjectPage;
