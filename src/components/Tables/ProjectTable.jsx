import Link from "next/link";

import { Badge } from "@/components/Badges/Badges";

const ProjectTable = ({ projects }) => {
	return (
		<>
			<table className="w-full text-xs md:text-sm shadow-lg">
				<thead className="uppercase bg-gray-700 text-gray-300">
					<tr>
						<th scope="col" className="text-center p-2 md:px-4 md:py-3 ">
							Project title
						</th>
						<th scope="col" className="text-center p-2 md:px-4 md:py-3">
							Category
						</th>
						<th scope="col" className="text-center p-2 md:px-4 md:py-3 hidden md:table-cell">
							Summary
						</th>
					</tr>
				</thead>
				<tbody>
					{projects.map((project, index) => {
						return (
							<tr key={index} className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
								<td scope="row" className="p-2 md:px-4 md:py-2">
									<div className="font-semibold text-base lg:whitespace-nowrap">
										<Link href={`/projects/${project.projectId}`}>{project.title}</Link>
									</div>
								</td>
								<td className="p-2 md:px-4 md:py-2">
									<div className="text-center">
										<Badge badge={project.category} size={"xs"} />
									</div>
								</td>
								<td className="p-2 md:px-4 md:py-2 hidden md:table-cell">
									<div className="text-gray-400 line-clamp-2">{project.summary}</div>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default ProjectTable;
