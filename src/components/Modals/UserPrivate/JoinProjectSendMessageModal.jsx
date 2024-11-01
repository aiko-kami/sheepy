"use client";

import { useState } from "react";

import { Button } from "@/components/Buttons/Buttons";
import { Status, Badge } from "@/components/Badges/Badges";
import { TextAreaField } from "@/components/Forms/TextAreaField";

const JoinProjectSendMessageModal = ({ closeModalSendMessage, joinProject, type }) => {
	const [formState, setFormState] = useState({
		joinProjectId: joinProject.joinProjectId,
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
			{/* User, invitation message and talent requested */}
			<h2 className="text-xl text-center font-semibold mb-1">
				<span className="capitalize">{type}</span> details
			</h2>
			<div className="mb-6 border-2 border-gray-400 rounded-md p-4 pb-5">
				{/* Project title and category */}
				<div className="lg:grid lg:grid-cols-2 justify-around mb-8">
					<div className="xl:flex items-baseline mb-6 lg:mb-0">
						<h2 className="text-lg text-gray-400 font-semibold">Project:</h2>
						<p className="pl-1 xl:pl-2">{joinProject.project.title}</p>
					</div>
					<div className="xl:flex justify-center">
						<h2 className="text-lg text-gray-400 font-semibold mb-2 xl:mb-0">Category:</h2>
						<div className="pl-1 xl:pl-2">
							<Badge badge={joinProject.project.category} size={"sm"} />
						</div>
					</div>
				</div>

				{/* joinProject message sent */}
				<h2 className="text-lg text-gray-400 font-semibold mb-1">
					<span className="capitalize">{type}</span> message:
				</h2>
				<p className="mb-10 pl-1">{joinProject.message}</p>

				{/* Talent requested and joinProject status */}
				<div className="lg:grid lg:grid-cols-2 justify-around">
					<div className="xl:flex items-baseline mb-6 lg:mb-0">
						<h2 className="text-lg text-gray-400 font-semibold mb-2 xl:mb-0">Talent requested:</h2>
						<p className="pl-1">{joinProject.talent}</p>
					</div>
					<div className="xl:flex justify-center">
						<h2 className="text-lg text-gray-400 font-semibold mb-2 xl:mb-0">
							<span className="capitalize">{type}</span> status:
						</h2>
						<div className="pl-1 xl:pl-2">
							<Status name={joinProject.status.name} size={"sm"} bgColor={joinProject.status.bgColor} />
						</div>
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
