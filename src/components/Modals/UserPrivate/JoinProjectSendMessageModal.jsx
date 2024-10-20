"use client";

import { useState } from "react";

import { Button } from "@/components/Buttons/Buttons";
import { Badge } from "@/components/Badges/Badges";
import { TextAreaField } from "@/components/Forms/TextAreaField";

const JoinProjectSendMessageModal = ({ closeModalSendMessage, joinProject }) => {
	const [formState, setFormState] = useState({
		projectId: joinProject.project.projectId,
		message: "",
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
		console.log("🚀 ~ onSubmit ~ The message has been sent:", formState);
		closeModalSendMessage();
	};

	return (
		<>
			{/* Project title and category */}
			<div className="sm:grid grid-cols-2">
				<div className="">
					<h2 className="text-lg text-gray-400 font-semibold mb-1">Project:</h2>
					<p className="mb-6 font-semibold pl-1">{joinProject.project.title}</p>
				</div>
				<div>
					<h2 className="text-lg text-gray-400 font-semibold mb-1">Category:</h2>
					<div className="mb-10 pl-1">
						<Badge badge={joinProject.project.category} size={"sm"} />
					</div>
				</div>
			</div>
			{/* Send message form */}
			<form onSubmit={onSubmit}>
				<div className="mb-8">
					<TextAreaField
						label="Your message for the project owner"
						labelStyle="block mb-2"
						inputName="message"
						inputValue={formState.message}
						onChange={onChange}
						placeholder="Write your message...(1000 characters max)"
						maxLength={1000}
						rows="6"
						required={true}
					/>
				</div>
				{/* Buttons */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 justify-center">
					<div className="col-span-2 md:col-span-1 grid xl:px-1/5">
						<Button
							btnProps={{
								type: "button",
								action: closeModalSendMessage,
							}}
						>
							Close
						</Button>
					</div>
					<div className="col-span-2 md:col-span-1 grid xl:px-1/5">
						<Button
							btnProps={{
								type: "submit",
								btnColor: "blue",
							}}
						>
							Send message
						</Button>
					</div>
				</div>
			</form>
		</>
	);
};

export default JoinProjectSendMessageModal;
