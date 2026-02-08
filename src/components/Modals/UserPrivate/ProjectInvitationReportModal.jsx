"use client";

import { useState } from "react";

import { SelectRoundedField } from "@/components/Forms/SelectField";
import InputField from "@/components/Forms/InputField";
import { Button } from "@/components/Buttons/Buttons";
import { Badge, Status } from "@/components/Badges/Badges";

import { handleFormChange } from "@/utils/formHandlers";

const ProjectInvitationReportModal = ({ closeModalReport, invitation }) => {
	const [formInputs, setFormInputs] = useState({
		reportReason: "spam",
		reportReasonText: "",
	});

	const onChange = handleFormChange(setFormInputs);

	const onSubmit = (event) => {
		event.preventDefault();
		// Handle form submission
		console.log("🚀 ~ onSubmit ~ The invitation has been reported:", formInputs);
		closeModalReport();
	};

	const optionsList = [
		{ value: "phishing", option: "Attempts to deceive the recipient into providing sensitive information" },
		{ value: "spam", option: "Unsolicited and irrelevant, possibly part of a mass spam campaign" },
		{ value: "scam", option: "Suspected to be part of a scam or fraudulent activity" },
		{ value: "harassment", option: "Contains offensive or harassing content" },
		{ value: "inappropriate", option: "Includes inappropriate language" },
		{ value: "misleading", option: "Deceptive or intentionally misleading" },
		{ value: "other", option: "Other" },
	];

	return (
		<>
			{/* User, invitation message and talent requested */}
			<h2 className="text-xl text-center font-semibold mb-1">Invitation details</h2>
			<div className="mb-6 border-2 border-gray-400 rounded-md p-4 pb-5">
				{/* Project title and category */}
				<div className="lg:grid lg:grid-cols-2 justify-around mb-8">
					<div className="xl:flex items-baseline mb-6 lg:mb-0">
						<h2 className="text-lg text-gray-400 font-semibold">Project:</h2>
						<p className="pl-1 xl:pl-2">{invitation.project.title}</p>
					</div>
					<div className="xl:flex justify-center">
						<h2 className="text-lg text-gray-400 font-semibold mb-2 xl:mb-0">Category:</h2>
						<div className="pl-1 xl:pl-2">
							<Badge badge={invitation.project.category} size={"sm"} />
						</div>
					</div>
				</div>

				{/* Invitation message sent */}
				<h2 className="text-lg text-gray-400 font-semibold mb-1">Invitation message:</h2>
				<p className="mb-10 pl-1">{invitation.message}</p>

				{/* Talent requested and invitation status */}
				<div className="lg:grid lg:grid-cols-2 justify-around">
					<div className="xl:flex items-baseline mb-6 lg:mb-0">
						<h2 className="text-lg text-gray-400 font-semibold mb-2 xl:mb-0">Talent requested:</h2>
						<p className="pl-1">{invitation.talent}</p>
					</div>
					<div className="xl:flex justify-center">
						<h2 className="text-lg text-gray-400 font-semibold mb-2 xl:mb-0">Invitation status:</h2>
						<div className="pl-1 xl:pl-2">
							<Status name={invitation.status.status} size={"sm"} bgColor={invitation.status.colors.bgColor} />
						</div>
					</div>
				</div>
			</div>

			{/* Report form */}
			<form onSubmit={onSubmit}>
				<div className="mb-6">
					<SelectRoundedField inputName="reportReason" possibleValues={optionsList} inputValue={formInputs.reportReason} label="Why do you want to report this invitation?" onChange={onChange} />
				</div>

				<div className="mb-6">
					<InputField inputName="reportReasonText" inputType="text" label="Provide additional information if needed" inputValue={formInputs.reportReasonText} onChange={onChange} />
				</div>

				{/* Report validation */}
				<h2 className="text-lg font-semibold text-center mb-6">Are you sure you want to report this invitation to join the project?</h2>

				{/* Buttons */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 justify-center">
					<div className="col-span-2 md:col-span-1 grid xl:px-1/5">
						<Button
							btnProps={{
								type: "button",
								action: closeModalReport,
							}}
						>
							Close
						</Button>
					</div>
					<div className="col-span-2 md:col-span-1 grid xl:px-1/5">
						<Button
							btnProps={{
								type: "submit",
								btnColor: "yellow",
							}}
						>
							Report invitation
						</Button>
					</div>
				</div>
			</form>
		</>
	);
};

export default ProjectInvitationReportModal;
