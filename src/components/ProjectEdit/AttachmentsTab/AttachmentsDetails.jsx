import { IoDocuments } from "react-icons/io5";

const AttachmentsDetails = ({ formState, onChange }) => {
	return (
		<>
			{/* Project attachments */}
			<div className="mb-8 lg:mb-12">
				<h2 className="flex items-center text-xl mb-3 sm:ml-4">
					<IoDocuments className="mr-2 text-2xl" />
					Project attachments
				</h2>
				<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />
				{/* Project attachments */}
				<div className="mb-8 max-w-140 relative">
					{/* Attachments input field */}
					Attachments
				</div>
			</div>
		</>
	);
};
export default AttachmentsDetails;
