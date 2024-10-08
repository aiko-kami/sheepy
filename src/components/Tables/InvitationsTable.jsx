import Link from "next/link";
import Image from "next/image";
import { Status } from "@/components/Badges/Badges";
import InvitationUserCell from "@/components/Tables/InvitationUserCell";
import InvitationMessageCell from "@/components/Tables/InvitationMessageCell";
import ProjectInvitationsActions from "@/components/IconsActions/ProjectInvitationsActions";

const InvitationsTable = ({ invitations, projectId, projectPermissions }) => {
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
							Message
						</th>
						<th scope="col" className="text-center p-2 md:px-4 md:py-3">
							Status
						</th>
						<th scope="col" className="text-center p-2 md:px-4 md:py-3">
							Actions
						</th>
					</tr>
				</thead>
				<tbody>
					{invitations.map((invitation, index) => {
						return (
							<tr key={index} className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
								<td scope="row" className="p-2 md:px-4 md:py-2">
									<InvitationUserCell invitation={invitation} />
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2 text-center">
									<div className="text-gray-400 whitespace-nowrap">{invitation.role}</div>
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2 text-center">
									<InvitationMessageCell invitation={invitation} />
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2 text-center">
									<div className="text-gray-400 whitespace-nowrap">
										<button type="button">
											<Status name={invitation.status.name} size={"xs"} rounded={"xs"} bgColor={invitation.status.bgColor} />
										</button>
									</div>
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2 text-center">
									<div className="flex justify-center flex-nowrap">
										<ProjectInvitationsActions projectId={projectId} invitation={invitation} projectPermissions={projectPermissions} />
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

export default InvitationsTable;
