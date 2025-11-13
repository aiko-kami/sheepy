"use client";

import { useState } from "react";
import Image from "next/image";
import { IoDocumentOutline } from "react-icons/io5";
import { SelectRoundedField } from "@/components/Forms/SelectField";
import InputField from "@/components/Forms/InputField";
import { Button } from "@/components/Buttons/Buttons";

import { handleFormChange } from "@/utils/formHandlers";

const AttachmentReportModal = ({ closeModalReport, attachment, projectId }) => {
	const [formInputs, setFormInputs] = useState({
		reportReason: "spam",
		reportReasonText: "",
		projectId: projectId,
	});

	const onChange = handleFormChange(setFormInputs);

	const onSubmit = (event) => {
		event.preventDefault();
		// Handle form submission
		console.log("🚀 ~ onSubmit ~ The attachment has been reported:", formInputs);
		closeModalReport();
	};

	const optionsList = [
		{ value: "malware", option: "Suspected to contain malware or harmful software" },
		{ value: "copyright", option: "Violates copyright or intellectual property rights" },
		{ value: "explicit", option: "Contains explicit or inappropriate content that violates the website's policy" },
		{ value: "misleading", option: "Misleading or deceptive content" },
		{ value: "irrelevant", option: "Irrelevant or unrelated to the project" },
		{ value: "spam", option: "Part of a spam or promotional campaign" },
		{ value: "other", option: "Other" },
	];

	return (
		<>
			{/* Attachment details */}
			<div className="mb-4 p-3 flex items-center justify-between gap-3 bg-slate-800/70 rounded-lg border border-slate-700">
				<div className="">
					<div className="flex items-start gap-3">
						<IoDocumentOutline className="w-5 h-5 text-slate-500 mt-0.5" />
						<span className="font-medium text-white truncate">{attachment.title}</span>
					</div>
					<p className="pl-8 text-slate-400 text-sm">{attachment.size}</p>
				</div>
				<div className="flex items-center text-sm">
					<span className="mr-2">by</span>
					<Image src={attachment.updatedBy.profilePicture.link} height={0} width={0} sizes="100vw" alt="User profile picture" className="object-cover min-w-7 h-7 rounded-full shadow-md mr-2" />
					<div className="whitespace-nowrap font-semibold">{attachment.updatedBy.username}</div>
				</div>
			</div>

			{/* Report form */}
			<form onSubmit={onSubmit}>
				<div className="mb-6">
					<SelectRoundedField inputName="reportReason" possibleValues={optionsList} inputValue={formInputs.reportReason} label="Why do you want to report this attachment?" onChange={onChange} />
				</div>

				<div className="mb-12">
					<InputField inputName="reportReasonText" inputType="text" label="Provide additional information if needed" inputValue={formInputs.reportReasonText} onChange={onChange} />
				</div>

				{/* Buttons */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 justify-center">
					<div className="col-span-2 md:col-span-1 grid">
						<Button
							btnProps={{
								type: "button",
								action: closeModalReport,
							}}
						>
							Close
						</Button>
					</div>
					<div className="col-span-2 md:col-span-1 grid">
						<Button
							btnProps={{
								type: "submit",
								btnColor: "yellow",
							}}
						>
							Report attachment
						</Button>
					</div>
				</div>
			</form>
		</>
	);
};

export default AttachmentReportModal;
