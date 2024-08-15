"use client";

import Link from "next/link";

import { Badge } from "@/components/Badges/Badges";
import MyProjectsActions from "@/components/UserProjectsPrivate/MyProjectsActions";

const MyProjectsTable = ({ projects }) => {
	return (
		<>
			<table className="w-full text-sm shadow-2xl">
				<thead className="uppercase bg-gray-700 text-gray-300">
					<tr>
						<th scope="col" className="text-center px-4 py-3 ">
							Project title
						</th>
						<th scope="col" className="text-center px-4 py-3">
							Category
						</th>
						<th scope="col" className="text-center px-4 py-3">
							Summary
						</th>
						<th scope="col" className="text-center px-4 py-3">
							Actions
						</th>
					</tr>
				</thead>
				<tbody>
					{projects.map((project, index) => {
						return (
							<tr key={index} className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
								<td scope="row" className="px-4 py-2">
									<div className="font-semibold text-base whitespace-nowrap">
										<Link href={`/projects/${project.projectId}`}>{project.title}</Link>
									</div>
								</td>
								<td className="px-4 py-2">
									<div className="text-center">
										<Badge badge={project.category} size={"xs"} />
									</div>
								</td>
								<td className="px-4 py-2">
									<div className="text-gray-400">{project.summary}</div>
								</td>
								<td className="px-4 py-2">
									<div className="flex justify-center">
										<MyProjectsActions projectId={project.projectId} projectPermissions={project.permissions} />
									</div>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default MyProjectsTable;
