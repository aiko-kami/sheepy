"use client";

import { useState } from "react";

import { IoAddCircle } from "react-icons/io5";
import { FilesDropField } from "@/components/Forms/FileDropField";
import { Button } from "@/components/Buttons/Buttons";

const AddAttachments = ({ projectId, userPermissions }) => {
	const [formInputs, setFormInputs] = useState({
		projectId: projectId,
		newAttachments: [],
	});

	const onSubmit = (event) => {
		event.preventDefault();
		// Handle form submission
		console.log("🚀 ~ onSubmit ~ The project has been updated:", formInputs);
	};

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
			{/* Add project attachments */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoAddCircle className="mr-2 text-2xl" />
				Add attachments
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="md:pl-4">
				{userPermissions.canViewAttachments && userPermissions.canAddAttachments ? (
					<form onSubmit={onSubmit}>
						<div className="mb-8">
							<FilesDropField onFilesSelected={setFormInputs} fileTypesAllowed={fileTypesAllowed} maxFileSizeAllowed={maxFileSizeAllowed} />
						</div>
						<div className="flex justify-center mb-6 xl:mb-10">
							<Button
								btnProps={{
									type: "submit",
									btnColor: "blue",
								}}
							>
								Save attachments
							</Button>
						</div>
					</form>
				) : (
					<p className="text-center italic text-pink-700">You do not have permission to add attachments to the project</p>
				)}
			</div>
		</>
	);
};
export default AddAttachments;
