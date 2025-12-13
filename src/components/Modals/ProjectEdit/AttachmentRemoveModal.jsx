import { IoDocumentOutline, IoAlertCircleOutline } from "react-icons/io5";

import { Button } from "@/components/Buttons/Buttons";
import { Avatar } from "@/components/Badges/Avatar";

const AttachmentRemoveModal = ({ closeModalRemove, attachment, projectId }) => {
	const removeAttachment = () => {
		console.log("🚀 ~ removeAttachment: the attachment has been removed");
		closeModalRemove();
	};
	return (
		<>
			{/* Attachment details */}
			<div className="mb-4 p-3 xs:flex items-center justify-between gap-3 bg-slate-800/70 rounded-lg border border-slate-700">
				<div>
					<div className="flex items-start gap-3">
						<IoDocumentOutline className="w-5 h-5 text-slate-500 mt-0.5" />
						<span className="font-medium text-white truncate">{attachment.title}</span>
					</div>
					<p className="pl-8 text-slate-400 text-sm">{attachment.size}</p>
				</div>
				<div className="justify-center xs:justify-end mt-4 xs:mt-0 flex items-center text-sm">
					<span className="mr-2">by</span>
					<div className="mr-2">
						<Avatar img={attachment.updatedBy.profilePicture.link} size={"sm"} alt={"user profile picture"} />
					</div>

					<div className="whitespace-nowrap font-semibold">{attachment.updatedBy.username}</div>
				</div>
			</div>

			{/* Warning message */}
			<div className="flex items-start mb-10 gap-3 p-4 bg-red-950/30 border border-red-900/50 rounded-lg max-w-120 mx-auto">
				<IoAlertCircleOutline className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
				<div>
					<p className="text-sm text-red-200 leading-relaxed font-semibold">This action cannot be undone.</p>
					<p className="text-sm text-red-200 leading-relaxed">The file will be permanently removed.</p>
				</div>
			</div>

			{/* Buttons */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 justify-center">
				<div className="col-span-2 md:col-span-1 grid">
					<Button
						btnProps={{
							type: "button",
							action: closeModalRemove,
						}}
					>
						Close
					</Button>
				</div>
				<div className="col-span-2 md:col-span-1 grid">
					<Button
						btnProps={{
							type: "button",
							btnColor: "red",
							action: removeAttachment,
						}}
					>
						Remove file
					</Button>
				</div>
			</div>
		</>
	);
};

export default AttachmentRemoveModal;
