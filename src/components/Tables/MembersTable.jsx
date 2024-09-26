import Link from "next/link";
import Image from "next/image";

import MembersActions from "@/components/ProjectEdit/MembersTab/MembersActions";

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
						return (
							<tr key={index} className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
								<td scope="row" className="p-2 md:px-4 md:py-2">
									<div className="flex items-center">
										<Link href={`/users/${member.userId}`}>
											<Image src={member.profilePicture} height={0} width={0} sizes="100vw" alt="User profile picture" className="object-cover min-w-9 h-9 rounded-full shadow-md mr-4" />
										</Link>
										<div className="font-semibold text-base lg:whitespace-nowrap">
											<Link href={`/users/${member.userId}`}>{member.username}</Link>
										</div>
										{member.isOwner && (
											<div className="sm:ml-3">
												<span className="py-1 px-2.5 text-white font-bold text-xs text-nowrap duration-200 rounded cursor-default bg-blue-500">Project Owner</span>
											</div>
										)}
									</div>
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2 text-center">
									<div className="text-gray-400 whitespace-nowrap">{member.role}</div>
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2 text-center">
									<div className="text-gray-400 whitespace-nowrap">{member.startDate}</div>
								</td>
								<td className="p-2 md:px-4 md:py-2">
									<div className="flex justify-center flex-wrap md:flex-nowrap">
										<MembersActions projectId={projectId} projectPermissions={projectPermissions} />
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
