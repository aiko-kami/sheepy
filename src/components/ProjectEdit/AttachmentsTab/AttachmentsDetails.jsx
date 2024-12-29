import { IoDocuments } from "react-icons/io5";
import { FilesDropField } from "@/components/Forms/FileDropField";
import { Button } from "@/components/Buttons/Buttons";

import AttachmentsTable from "@/components/Tables/ProjectEdit/AttachmentsTable";

const AttachmentsDetails = ({ setFormState, attachments }) => {
	const fileTypesAllowed = {
		"image/png": ".png",
		"image/jpeg": ".jpg",
		"application/pdf": ".pdf",
		"application/msword": ".doc",
		"application/vnd.openxmlformats-officedocument.wordprocessingml.document": ".docx",
		"application/vnd.ms-excel": ".xls",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": ".xlsx",
		"application/vnd.ms-powerpoint": ".ppt",
		"application/vnd.openxmlformats-officedocument.presentationml.presentation": ".pptx",
		"text/plain": ".txt",
	};

	const maxFileSizeAllowed = 5 * 1024 * 1024; // 5 MB in bytes

	return (
		<>
			{/* Project attachments */}
			<div className="mb-8 lg:mb-12">
				<h2 className="flex items-center text-xl mb-3 sm:ml-4">
					<IoDocuments className="mr-2 text-2xl" />
					Project attachments
				</h2>
				<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

				<div className="md:pl-4">
					{/* Add project attachments */}
					<div className="mb-6 xl:mb-10">
						<FilesDropField onFilesSelected={setFormState} fileTypesAllowed={fileTypesAllowed} maxFileSizeAllowed={maxFileSizeAllowed} />
					</div>
					<div className="flex justify-center mb-6 xl:mb-10">
						<Button
							btnProps={{
								type: "submit",
								btnColor: "blue",
							}}
						>
							Save project
						</Button>
					</div>

					<div className="md:px-4">
						{/* Project attachments */}
						<div className="mb-8 flex justify-center">
							{attachments && (
								<div className="w-full overflow-x-auto shadow-md sm:rounded-lg">
									<AttachmentsTable attachments={attachments} />
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default AttachmentsDetails;
