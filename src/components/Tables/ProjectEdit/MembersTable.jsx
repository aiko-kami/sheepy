import MemberUserCell from "@/components/Tables/ProjectEdit/MemberUserCell";
import MembersActions from "@/components/IconsActions/MembersActions";
import { formatIsoTimestamp } from "@/utils/dateHandlers";

const MembersTable = ({ members, projectId, projectPermissions }) => {
	return (
		<>
			<table className="w-full text-xs md:text-sm shadow-lg">
				<thead className="uppercase bg-gray-700 text-gray-300">
					<tr>
						<th scope="col" className="text-center p-2 md:px-4 md:py-3">
							User
						</th>
						<th scope="col" className="text-center p-2 md:px-4 md:py-3 ">
							Talent
						</th>
						<th scope="col" className="text-center p-2 md:px-4 md:py-3">
							Start date
						</th>
						<th scope="col" className="text-center p-2 md:px-4 md:py-3">
							Actions
						</th>
					</tr>
				</thead>
				<tbody>
					{members.map((member, index) => {
						const user = member.user;
						const role = member.role;
						const talent = member.talent;
						const startDate = formatIsoTimestamp(member.startDate);

						return (
							<tr key={index} className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
								<td scope="row" className="p-2 md:px-4 md:py-2">
									<MemberUserCell user={user} role={role} />
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2 text-center">
									<div className="text-gray-400 whitespace-nowrap">{talent}</div>
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2 text-center">
									<div className="text-gray-400 whitespace-nowrap">{startDate.formatted ? startDate.formatted : <span className="italic">No start date defined</span>}</div>
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2">
									<div className="flex justify-center flex-nowrap">
										<MembersActions projectId={projectId} user={user} role={role} talent={talent} startDate={startDate.formatted} projectPermissions={projectPermissions} />
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

export default MembersTable;
