"use client";

import { useState } from "react";
import Image from "next/image";

import { SelectRoundedField } from "@/components/Forms/SelectField";
import InputField from "@/components/Forms/InputField";
import { Button } from "@/components/Buttons/Buttons";
import { Status } from "@/components/Badges/Badges";

const ProjectRequestReportModal = ({ closeModalReport, request }) => {
	const [formState, setFormState] = useState({
		reportReason: "spam",
		reportReasonText: "",
	});

	const onChange = (event) => {
		const { name, value } = event.target;
		setFormState((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const onSubmit = (event) => {
		event.preventDefault();
		// Handle form submission
		console.log("🚀 ~ onSubmit ~ The request has been reported:", formState);
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
			{/* User, request message and talent requested */}
			<div className="mb-10 border-2 border-gray-400 rounded-md p-4 pb-5">
				<div className="mb-6 xl:flex items-center">
					<h2 className="text-lg text-gray-400 font-semibold mb-1">Sender:</h2>
					<div className="flex items-center pl-1 xl:pl-4">
						<Image src={request.user.profilePicture} height={0} width={0} sizes="100vw" alt="User profile picture" className="object-cover min-w-7 h-7 rounded-full shadow-md mr-4" />
						<div className="font-semibold">{request.user.username}</div>
					</div>
				</div>

				{/* joinProject message sent */}
				<div className="mb-6">
					<h2 className="text-lg text-gray-400 font-semibold mb-1">Request message:</h2>
					<p className="pl-1">{request.message}</p>
				</div>
				{/* Talent requested and joinProject status */}
				<div className="lg:grid lg:grid-cols-2 justify-around">
					<div className="xl:flex items-baseline mb-6 lg:mb-0">
						<h2 className="text-lg text-gray-400 font-semibold mb-2 xl:mb-0">Talent requested:</h2>
						<p className="pl-1 xl:pl-2">{request.role}</p>
					</div>
					<div>
						<div className="xl:flex">
							<h2 className="text-lg text-gray-400 font-semibold mb-2 xl:mb-0">Request status:</h2>
							<div className="pl-1 xl:pl-2">
								<Status name={request.status.name} size={"sm"} bgColor={request.status.bgColor} />
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Report form */}
			<form onSubmit={onSubmit}>
				<div className="mb-6">
					<SelectRoundedField inputName="reportReason" possibleValues={optionsList} inputValue={formState.reportReason} label="Why do you want to report this request?" onChange={onChange} />
				</div>

				<div className="mb-6">
					<InputField inputName="reportReasonText" inputType="text" label="Provide additional information if needed" inputValue={formState.reportReasonText} onChange={onChange} />
				</div>

				{/* Report validation */}
				<h2 className="text-lg text-center mb-6">Are you sure you want to report this request to join the project?</h2>

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
							Report request
						</Button>
					</div>
				</div>
			</form>
		</>
	);
};

export default ProjectRequestReportModal;
