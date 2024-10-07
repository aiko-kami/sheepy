import Link from "next/link";
import Image from "next/image";
import { Status } from "@/components/Badges/Badges";
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
					{invitations.map((inviation, index) => {
						return (
							<tr key={index} className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
								<td scope="row" className="p-2 md:px-4 md:py-2">
									<div className="flex items-center">
										<Link href={`/users/${inviation.user.userId}`}>
											<Image src={inviation.user.profilePicture} height={0} width={0} sizes="100vw" alt="User profile picture" className="object-cover min-w-9 h-9 rounded-full shadow-md mr-4" />
										</Link>
										<div className="font-semibold text-base lg:whitespace-nowrap">
											<Link href={`/users/${inviation.user.userId}`}>{inviation.user.username}</Link>
										</div>
									</div>
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2 text-center">
									<div className="text-gray-400 whitespace-nowrap">{inviation.role}</div>
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2 text-center">
									<div className="text-gray-400 whitespace-nowrap">{inviation.message}</div>
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2 text-center">
									<div className="text-gray-400 whitespace-nowrap">
										<button type="button">
											<Status name={inviation.status.name} size={"xs"} rounded={"xs"} bgColor={inviation.status.bgColor} />
										</button>
									</div>
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2 text-center">
									<div className="flex justify-center flex-nowrap">
										<ProjectInvitationsActions projectId={projectId} inviation={inviation} projectPermissions={projectPermissions} />
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
