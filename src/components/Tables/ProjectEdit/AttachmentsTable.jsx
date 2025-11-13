import Image from "next/image";
import { DateTime } from "luxon";
import AttachmentsActions from "@/components/IconsActions/AttachmentsActions";

const AttachmentsTable = ({ attachments, projectId, userPermissions }) => {
	return (
		<>
			<table className="w-full text-xs md:text-sm shadow-lg">
				<thead className="uppercase bg-gray-700 text-gray-300">
					<tr>
						<th scope="col" className="text-center p-2 md:px-4 md:py-3">
							File name
						</th>
						<th scope="col" className="text-center p-2 md:px-4 md:py-3 ">
							Type
						</th>
						<th scope="col" className="text-center p-2 md:px-4 md:py-3">
							Size
						</th>
						<th scope="col" className="text-center p-2 md:px-4 md:py-3">
							Uploaded by
						</th>
						<th scope="col" className="text-center p-2 md:px-4 md:py-3">
							Uploaded at
						</th>
						<th scope="col" className="text-center p-2 md:px-4 md:py-3">
							Actions
						</th>
					</tr>
				</thead>
				<tbody>
					{attachments.map((attachment, index) => {
						return (
							<tr key={index} className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
								<td scope="row" className="p-2 md:px-4 md:py-2">
									<div className="font-semibold text-base whitespace-nowrap">{attachment.title}</div>
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2 text-center">
									<div className="flex items-center">
										{/* <Image src={attachment.extension} height={0} width={0} sizes="100vw" alt="File type picture" className="object-cover min-w-10 h-10 shadow-md mr-2" /> */}
										<div className="text-gray-400 whitespace-nowrap">{attachment.extension}</div>
									</div>
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2 text-center">
									<div className="text-gray-400 whitespace-nowrap">{attachment.size}</div>
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2 text-center">
									<div className="flex items-center justify-start">
										<Image
											src={attachment.updatedBy.profilePicture.link}
											height={0}
											width={0}
											sizes="100vw"
											alt="User profile picture"
											className="object-cover min-w-9 h-9 rounded-full shadow-md mr-2 lg:ml-6"
										/>
										<div className="text-gray-400 whitespace-nowrap">{attachment.updatedBy.username}</div>
									</div>
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2 text-center">
									<div className="text-gray-400 whitespace-nowrap" title={DateTime.fromISO(attachment.createdAt, { locale: "en" }).toJSDate().toString()}>
										{DateTime.fromISO(attachment.createdAt, { locale: "en" }).toRelative()}
									</div>
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2">
									<div className="flex justify-center flex-nowrap">
										<AttachmentsActions projectId={projectId} attachment={attachment} userPermissions={userPermissions} />
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

export default AttachmentsTable;
