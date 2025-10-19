import Link from "next/link";
import Image from "next/image";
import { Status } from "@/components/Badges/Badges";
import { DateTime } from "luxon";

const StatusHistoryTable = ({ statusHistory }) => {
	return (
		<>
			<table className="w-full text-xs md:text-sm shadow-lg">
				<thead className="uppercase bg-gray-700 text-gray-300">
					<tr>
						<th scope="col" className="text-center p-2 md:px-4 md:py-3">
							Date
						</th>
						<th scope="col" className="text-center p-2 md:px-4 md:py-3 ">
							Status
						</th>
						<th scope="col" className="text-center p-2 md:px-4 md:py-3">
							Updated by
						</th>
						<th scope="col" className="text-center p-2 md:px-4 md:py-3">
							Reason
						</th>
					</tr>
				</thead>
				<tbody>
					{statusHistory.map((stat, index) => {
						const dt = DateTime.fromISO(stat.timestamp).toLocal();
						const now = DateTime.local();

						const diffInHours = now.diff(dt, "hours").hours;

						const dateTime =
							diffInHours < 1
								? dt.toRelative({ base: now }) // "23 minutes ago"
								: `${dt.toFormat("dd LLL yyyy • HH:mm")} (${dt.zoneName})`; // absolute time
						const statusName = stat?.status?.status;
						const statusColor = stat?.status?.colors?.bgColor;
						const statusReason = stat?.reason;
						const updaterUserId = stat?.updatedBy?.userId;
						const updaterUsername = stat?.updatedBy?.username;
						const updaterProfilePicture = stat?.updatedBy?.profilePicture?.link;

						return (
							<tr key={index} className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
								<td scope="row" className="p-2 md:px-4 md:py-2 text-center">
									<div className="text-gray-400 whitespace-nowrap">{dateTime}</div>
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2 text-center">
									<Status name={statusName} size={"xs"} rounded={"xs"} bgColor={statusColor} />
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2 text-center">
									<div className="flex items-center">
										<Link href={`/users/${updaterUserId}`}>
											<Image src={updaterProfilePicture} height={0} width={0} sizes="100vw" alt="User profile picture" className="object-cover min-w-9 h-9 rounded-full shadow-md mr-4" />
										</Link>
										<div className="font-semibold text-base lg:whitespace-nowrap">
											<Link href={`/users/${updaterUserId}`}>{updaterUsername}</Link>
										</div>
									</div>
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2">
									<div className="text-gray-400 whitespace-nowrap">{statusReason}</div>
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
