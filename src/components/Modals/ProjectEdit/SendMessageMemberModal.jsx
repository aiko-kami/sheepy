"use client";

import { useState } from "react";
import Image from "next/image";

import { Button } from "@/components/Buttons/Buttons";
import { TextAreaField } from "@/components/Forms/TextAreaField";

import { handleFormChange } from "@/utils/formHandlers";

const SendMessageMemberModal = ({ member, closeModalMessage }) => {
	const [formInputs, setFormInputs] = useState({
		memberId: member.userId,
		message: "",
	});

	const MESSAGE_MAX_LENGTH = 1000;
	const onChange = handleFormChange(setFormInputs);

	const onSubmit = (event) => {
		event.preventDefault();
		// Handle form submission
		console.log("🚀 ~ onSubmit ~ The member has been updated:", formInputs);
		closeModalMessage();
	};

	return (
		<>
			{/* User, invitation message and talent requested */}
			<div className="flex items-center gap-3 ml-1 mb-6">
				<span className="text-gray-400">To:</span>
				<div className="flex items-center gap-2 bg-slate-900 rounded-full pr-4 py-1">
					<img src={member.profilePicture.link || "/placeholder.svg"} alt={member.username} className="w-10 h-10 rounded-full" />
					<span className="text-white font-medium">{member.username}</span>
				</div>
			</div>

			{/* Send message form */}
			<form onSubmit={onSubmit}>
				<div className="mb-8">
					<TextAreaField
						labelStyle="block mb-2"
						inputName="message"
						inputValue={formInputs.message}
						onChange={onChange}
						placeholder="Write your message..."
						maxLength={MESSAGE_MAX_LENGTH}
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
								action: closeModalMessage,
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

export default SendMessageMemberModal;
