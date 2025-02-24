import { Button } from "@/components/Buttons/Buttons";
import { DateTime } from "luxon";
import Image from "next/image";

const AttachmentRemoveModal = ({ closeModalRemove, attachment, projectId }) => {
	const removeAttachment = () => {
		console.log("🚀 ~ removeAttachment: the attachment has been removed");
		closeModalRemove();
	};
	return (
		<>
			{/* Attachment details */}
			<h2 className="text-xl text-center font-semibold mb-1">Attachment details</h2>
			<div className="mb-10 border-2 border-gray-400 rounded-md p-4 pb-5">
				{/* File name */}
				<div className="mb-6 lg:mb-4">
					<div className="xl:flex items-center">
						<h2 className="text-lg text-gray-400 font-semibold mb-2 lg:mb-0">File name:</h2>
						<p className="pl-1 xl:pl-2 font-semibold">{attachment.fileName}</p>
					</div>
				</div>

				{/* File type and file size */}
				<div className="lg:grid lg:grid-cols-2">
					<div className="xl:flex items-center mb-6 lg:mb-4">
						<h2 className="text-lg text-gray-400 font-semibold mb-2 lg:mb-0 mr-2">File type:</h2>
						<div className="flex items-center">
							<Image src={attachment.fileTypeIcon} height={0} width={0} sizes="100vw" alt="File type picture" className="object-cover min-w-8 h-8 shadow-md mr-2" />
							<div className="text-base whitespace-nowrap">{attachment.fileType}</div>
						</div>
					</div>
					<div className="xl:flex items-center min-h-full mb-6 lg:mb-4">
						<h2 className="text-lg text-gray-400 font-semibold mb-2 lg:mb-0">File size:</h2>
						<p className="pl-1 xl:pl-2">{attachment.fileSize}</p>
					</div>
				</div>

				{/* Uploaded by and Uploaded at */}
				<div className="lg:grid lg:grid-cols-2">
					<div className="xl:flex items-center mb-6 lg:mb-0">
						<h2 className="text-lg text-gray-400 font-semibold mb-2 lg:mb-0 mr-2">Uploaded by:</h2>
						<div className="flex items-center">
							<Image src={attachment.uploadedBy.profilePicture} height={0} width={0} sizes="100vw" alt="User profile picture" className="object-cover min-w-9 h-9 rounded-full shadow-md mr-2" />
							<div className="whitespace-nowrap">{attachment.uploadedBy.username}</div>
						</div>
					</div>
					<div>
						<div className="xl:flex items-center min-h-full">
							<h2 className="text-lg text-gray-400 font-semibold mb-2 lg:mb-0">Uploaded at:</h2>
							<div className="pl-1 xl:pl-2">
								<div className="whitespace-nowrap" title={DateTime.fromISO(attachment.createdAt, { locale: "en" }).toJSDate().toString()}>
									{DateTime.fromISO(attachment.createdAt, { locale: "en" }).toRelative()}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Remove validation */}
			<h2 className="text-lg font-semibold text-center mb-6">Are you sure you want to remove this attachment from the project?</h2>

			{/* Buttons */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 justify-center">
				<div className="col-span-2 md:col-span-1 grid xl:px-1/5">
					<Button
						btnProps={{
							type: "button",
							action: closeModalRemove,
						}}
					>
						Close
					</Button>
				</div>
				<div className="col-span-2 md:col-span-1 grid xl:px-1/5">
					<Button
						btnProps={{
							type: "button",
							btnColor: "red",
							action: removeAttachment,
						}}
					>
						Remove attachment
					</Button>
				</div>
			</div>
		</>
	);
};

export default AttachmentRemoveModal;
