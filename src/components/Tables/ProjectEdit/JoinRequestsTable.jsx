import { Status } from "@/components/Badges/Badges";
import UserCell from "@/components/Tables/ProjectEdit/UserCell";
import JoinRequestMessageCell from "@/components/Tables/ProjectEdit/JoinRequestMessageCell";
import ProjectRequestsActions from "@/components/IconsActions/ProjectRequestsActions";

const JoinRequestsTable = ({ joinProjectRequests, projectId, userPermissions }) => {
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
					{joinProjectRequests.map((request, index) => {
						return (
							<tr key={index} className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
								<td scope="row" className="p-2 md:px-4 md:py-2">
									<UserCell userId={request.sender.userId} profilePicture={request.sender.profilePicture} username={request.sender.username} />
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2 text-left">
									<div className="text-gray-400 whitespace-nowrap">{request.talent}</div>
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2 text-left max-w-100">
									<JoinRequestMessageCell request={request} />
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2 text-center">
									<div className="text-gray-400 whitespace-nowrap">
										<Status name={request.status.status} size={"xs"} rounded={"xs"} bgColor={request.status.colors.bgColor} />
									</div>
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2">
									<div className="flex justify-center flex-nowrap">
										<ProjectRequestsActions projectId={projectId} request={request} userPermissions={userPermissions} />
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

export default JoinRequestsTable;
