import Link from "next/link";
import Image from "next/image";
import { Status } from "@/components/Badges/Badges";

const StatusHistoryTable = ({ status }) => {
	return (
		<>
			<table className="w-full text-xs md:text-sm shadow-lg">
				<thead className="uppercase bg-gray-700 text-gray-300">
					<tr>
						<th scope="col" className="text-center p-2 md:px-4 md:py-3 ">
							Status
						</th>
						<th scope="col" className="text-center p-2 md:px-4 md:py-3">
							Updated by
						</th>
						<th scope="col" className="text-center p-2 md:px-4 md:py-3">
							Reason
						</th>
						<th scope="col" className="text-center p-2 md:px-4 md:py-3">
							Date
						</th>
					</tr>
				</thead>
				<tbody>
					{status.map((stat, index) => {
						return (
							<tr key={index} className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
								<td scope="row" className="p-2 md:px-4 md:py-2 text-center">
									<Status name={stat.name} size={"xs"} rounded={"xs"} bgColor={stat.bgColor} />
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2 text-center">
									<div className="flex items-center">
										<Link href={`/users/${stat.updater.userId}`}>
											<Image src={stat.updater.profilePicture} height={0} width={0} sizes="100vw" alt="User profile picture" className="object-cover w-9 h-9 rounded-full shadow-md mr-4" />
										</Link>
										<div className="font-semibold text-base lg:whitespace-nowrap">
											<Link href={`/users/${stat.updater.userId}`}>{stat.updater.username}</Link>
										</div>
									</div>
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2">
									<div className="text-gray-400 line-clamp-2">{stat.reason}</div>
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2 text-center">
									<div className="text-gray-400 line-clamp-2">{stat.date}</div>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default StatusHistoryTable;
