"use client";

import { useState } from "react";

import InputField from "@/components/Forms/InputField";
import { Button } from "@/components/Buttons/Buttons";
import { Badge } from "@/components/Badges/Badges";

const ProjectInvitationReportModal = ({ closeModalReport, invitation }) => {
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
		console.log("🚀 ~ onSubmit ~ The invitation has been reported:", formState);
		closeModalReport();
	};

	return (
		<>
			{/* Modal content */}
			<div className="max-h-110 overflow-y-auto text-base text-white">
				<div className="px-4 md:px-10 pb-8">
					{/* Project title and category */}
					<div className="sm:grid grid-cols-2">
						<div className="">
							<h2 className="text-lg text-gray-400 font-semibold mb-1">Project:</h2>
							<p className="mb-6 font-semibold pl-1">{invitation.project.title}</p>
						</div>
						<div>
							<h2 className="text-lg text-gray-400 font-semibold mb-1">Category:</h2>
							<div className="mb-10 pl-1">
								<Badge badge={invitation.project.category} size={"sm"} />
							</div>
						</div>
					</div>
					{/* Report form */}
					<form onSubmit={onSubmit}>
						<div className="mb-6">
							<label htmlFor="role" className="block mb-2">
								Why do you want to report this invitation?
							</label>
							<select
								id="role"
								name="reportReason"
								value={formState.reportReason}
								onChange={onChange}
								className="bg-gray-700 focus:bg-gray-600 border border-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
							>
								<option className="" value="phishing">
									Attempts to deceive the recipient into providing sensitive information
								</option>
								<option className="" value="spam">
									Unsolicited and irrelevant, possibly part of a mass spam campaign
								</option>
								<option className="" value="scam">
									Suspected to be part of a scam or fraudulent activity
								</option>
								<option className="" value="harassment">
									Contains offensive or harassing content
								</option>
								<option className="" value="inappropriate">
									Includes inappropriate language
								</option>
								<option className="" value="misleading">
									Deceptive or intentionally misleading
								</option>
								<option className="" value="other">
									Other
								</option>
							</select>
						</div>

						<div className="mb-6">
							<InputField inputName="reportReasonText" inputType="text" label="Provide additional information if needed" inputValue={formState.reportReasonText} onChange={onChange} />
						</div>

						{/* Report validation */}
						<h2 className="text-lg text-center mb-6">Are you sure you want to report this invitation to join the project?</h2>

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
				</div>
			</div>
		</>
	);
};

export default ProjectInvitationReportModal;
