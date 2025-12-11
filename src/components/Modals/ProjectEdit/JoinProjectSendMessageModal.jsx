"use client";

import { useState } from "react";
import Image from "next/image";

import { Button } from "@/components/Buttons/Buttons";
import { Status } from "@/components/Badges/Badges";
import { TextAreaField } from "@/components/Forms/TextAreaField";
import { Avatar } from "@/components/Badges/Avatar";

import { handleFormChange } from "@/utils/formHandlers";

const JoinProjectSendMessageModal = ({ closeModalSendMessage, joinProject, type }) => {
	const user = type === "request" ? joinProject.sender : joinProject.receiver;
	const label = type === "request" ? "Sender:" : "Receiver:";

	const [formInputs, setFormInputs] = useState({
		joinProjectId: joinProject.joinProjectId,
		userId: user.userId,
		message: "",
	});

	const onChange = handleFormChange(setFormInputs);

	const onSubmit = (event) => {
		event.preventDefault();
		// Handle form submission
		console.log("🚀 ~ onSubmit ~ The message has been sent:", formInputs);
		closeModalSendMessage();
	};

	return (
		<>
			{/* User, invitation message and talent requested */}
			<h2 className="text-xl text-center font-semibold mb-1">
				<span className="capitalize">{type}</span> details
			</h2>
			<div className="mb-6 border-2 border-gray-400 rounded-md p-4 pb-5">
				<div className="lg:grid lg:grid-cols-2 justify-around">
					{/* joinProject user */}
					<div className="mb-6 xl:flex items-center">
						<h2 className="text-lg text-gray-400 font-semibold mb-1">{label}</h2>
						<div className="flex items-center pl-1 xl:pl-4">
							<div className="mr-2">
								<Avatar img={user.profilePicture.link} size={"sm"} alt={"user profile picture"} />
							</div>
							<div className="font-semibold">{user.username}</div>
						</div>
					</div>

					{/* For invitation - Sender from the project */}
					{type == "invitation" && (
						<div className="mb-6 xl:flex items-center justify-center">
							<h2 className="text-lg text-gray-400 font-semibold mb-1">Sent by:</h2>
							<div className="flex items-center pl-1 xl:pl-4">
								<div className="mr-2">
									<Avatar img={joinProject.sender.profilePicture.link} size={"sm"} alt={"user profile picture"} />
								</div>
								<div className="font-semibold">{joinProject.sender.username}</div>
							</div>
						</div>
					)}
				</div>

				{/* joinProject message sent */}
				<div className="mb-6">
					<h2 className="text-lg text-gray-400 font-semibold mb-1">
						<span className="capitalize">{type}</span> message:
					</h2>
					<p className="pl-1">{joinProject.message}</p>
				</div>

				{/* Talent requested and joinProject status */}
				<div className="lg:grid lg:grid-cols-2 justify-around">
					<div className="xl:flex items-baseline mb-6 lg:mb-0">
						<h2 className="text-lg text-gray-400 font-semibold mb-2 xl:mb-0">Talent requested:</h2>
						<p className="pl-1 xl:pl-2">{joinProject.talent}</p>
					</div>
					<div>
						<div className="xl:flex justify-center">
							<h2 className="text-lg text-gray-400 font-semibold mb-2 xl:mb-0">
								<span className="capitalize">{type}</span> status:
							</h2>
							<div className="pl-1 xl:pl-2">
								<Status name={joinProject.status.status} size={"sm"} bgColor={joinProject.status.colors.bgColor} />
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Send message form */}
			<form onSubmit={onSubmit}>
				<div className="mb-8">
					<TextAreaField
						label="Your message for the user:"
						labelStyle="block mb-2"
						inputName="message"
						inputValue={formInputs.message}
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
								btnColor: "green",
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
