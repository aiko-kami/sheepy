import Image from "next/image";

const AttachmentsTable = ({ attachments }) => {
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
							Actions
						</th>
					</tr>
				</thead>
				<tbody>
					{attachments.map((attachment, index) => {
						return (
							<tr key={index} className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
								<td scope="row" className="p-2 md:px-4 md:py-2">
									<div className="text-base whitespace-nowrap">{attachment.fileName}</div>
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2 text-center">
									<div className="flex justify-center">
										<Image src={attachment.fileType} height={0} width={0} sizes="100vw" alt="File type picture" className="object-cover min-w-10 h-10 shadow-md" />
									</div>
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2 text-center">
									<div className="text-gray-400 whitespace-nowrap">{attachment.fileSize}</div>
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2 text-center">
									<div className="text-gray-400 whitespace-nowrap">{attachment.fileSize}</div>
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
