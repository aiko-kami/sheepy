import Link from "next/link";
import { Badge } from "@/components/Badges/Badges";

const ProjectTable = ({ projects }) => {
	return (
		<>
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
					{projects.map((project, index) => {
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
		</>
	);
};

export default ProjectTable;
