import { Status } from "@/components/Badges/Badges";
import UserCell from "@/components/Tables/ProjectEdit/UserCell";
import InvitationMessageCell from "@/components/Tables/ProjectEdit/InvitationMessageCell";
import ProjectInvitationsActions from "@/components/IconsActions/ProjectInvitationsActions";

const InvitationsTable = ({ joinProjectInvitations, talentsNeeded, projectId, userPermissions }) => {
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
					{joinProjectInvitations.map((invitation, index) => {
						return (
							<tr key={index} className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
								<td scope="row" className="p-2 md:px-4 md:py-2">
									<UserCell userId={invitation.receiver.userId} profilePicture={invitation.receiver.profilePicture} username={invitation.receiver.username} />
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2 text-left">
									<div className="text-gray-400 whitespace-nowrap">{invitation.talent}</div>
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2 text-left max-w-100">
									<InvitationMessageCell invitation={invitation} />
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2 text-center">
									<div className="text-gray-400 whitespace-nowrap">
										<Status name={invitation.status.status} size={"xs"} rounded={"xs"} bgColor={invitation.status.colors.bgColor} />
									</div>
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2">
									<div className="flex justify-center flex-nowrap">
										<ProjectInvitationsActions projectId={projectId} invitation={invitation} talentsNeeded={talentsNeeded} userPermissions={userPermissions} />
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
