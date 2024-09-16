import Link from "next/link";
import Image from "next/image";

import { IoLocationOutline } from "react-icons/io5";
import { BadgeRounded } from "@/components/Badges/Badges";

const TalentTable = ({ users }) => {
	return (
		<>
			<table className="w-full text-xs md:text-sm shadow-lg">
				<thead className="uppercase bg-gray-700 text-gray-300">
					<tr>
						<th scope="col" className="text-center p-2 md:px-4 md:py-3 ">
							User
						</th>
						<th scope="col" className="text-center p-2 md:px-4 md:py-3">
							Location
						</th>
						<th scope="col" className="text-center p-2 md:px-4 md:py-3 hidden md:table-cell">
							Description
						</th>
						<th scope="col" className="text-center p-2 md:px-4 md:py-3 hidden md:table-cell">
							Talents
						</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user, index) => {
						return (
							<tr key={index} className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
								<td scope="row" className="p-2 md:px-4 md:py-2">
									<div className="flex items-center">
										<Link href={`/users/${user.userId}`}>
											<Image src={user.profilePicture} height={0} width={0} sizes="100vw" alt="User profile picture" className="object-cover min-w-9 h-9 rounded-full shadow-md mr-4" />
										</Link>
										<div className="font-semibold text-base lg:whitespace-nowrap">
											<Link href={`/users/${user.userId}`}>{user.username}</Link>
										</div>
									</div>
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2">
									<div className="text-gray-400 line-clamp-2">
										<div className="flex">
											<div>
												<IoLocationOutline className="text-lg tn:text-xl" />
											</div>
											<p className="text-xs tn:text-sm">
												{user.locationCity}, <span className="uppercase">{user.locationCountry}</span>
											</p>
										</div>
									</div>
								</td>
								<td className="p-2 md:px-4 md:py-2 hidden md:table-cell">
									<div className="text-gray-400 line-clamp-2">
										<Link href={`/users/${user.userId}`}>{user.description}</Link>
									</div>
								</td>
								<td className="md:px-4 md:py-2 hidden md:table-cell">
									<div className="flex items-center flex-wrap overflow-hidden min-h-9">
										{user.talents.map((talent, index) => (
											<div key={index} className="mx-1 mt-1.5 mb-2">
												<BadgeRounded badge={talent} size={"xs"} />
											</div>
										))}
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

export default TalentTable;
