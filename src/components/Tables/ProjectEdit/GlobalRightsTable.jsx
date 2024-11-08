import MemberUserCell from "@/components/Tables/MemberUserCell";

const GlobalRightsTable = ({ members, projectId, projectPermissions }) => {
	const headers = ["project status", "project visibility", "project location", "project steps", "project Q&As", "members rights"];
	return (
		<>
			<table className="w-full text-xs md:text-sm shadow-lg">
				<thead className="bg-gray-700 text-gray-300">
					<tr>
						<th rowSpan="2" scope="col" className="text-center align-bottom p-2 md:px-4 md:py-3 uppercase">
							User
						</th>
						<th rowSpan="2" scope="col" className="text-center align-bottom p-2 md:px-4 md:py-3 uppercase">
							Talent
						</th>
						<th colSpan={headers.length} scope="col" className="font-normal text-center md:px-4 py-1">
							Can update...
						</th>
					</tr>
					<tr>
						{headers.map((header, index) => (
							<th key={index} scope="col" className="font-normal text-center p-2 md:pb-3 md:px-3 text-xs">
								<p className="first-letter:uppercase">{header}</p>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{members.map((member, index) => {
						return (
							<tr key={index} className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
								<td scope="row" className="p-2 md:px-4 md:py-2">
									<MemberUserCell member={member} />
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2 text-center">
									<div className="text-gray-400 whitespace-nowrap">{member.role}</div>
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2 text-center">
									<div className="text-gray-400 whitespace-nowrap">A</div>
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2 text-center">
									<div className="text-gray-400 whitespace-nowrap">A</div>
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2 text-center">
									<div className="text-gray-400 whitespace-nowrap">A</div>
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2 text-center">
									<div className="text-gray-400 whitespace-nowrap">A</div>
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2 text-center">
									<div className="text-gray-400 whitespace-nowrap">A</div>
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2 text-center">
									<div className="text-gray-400 whitespace-nowrap">A</div>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default GlobalRightsTable;
