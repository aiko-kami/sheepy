"use client";

import { useState } from "react";
import Image from "next/image";

import { Button } from "@/components/Buttons/Buttons";
import { TextAreaField } from "@/components/Forms/TextAreaField";

const SendMessageMemberModal = ({ closeModalMessage, member }) => {
	const [formState, setFormState] = useState({
		memberId: member.userId,
		message: "",
	});

	const onChange = (e) => {
		const { name, value, type, checked } = e.target;
		const inputValue = type === "checkbox" ? checked : value;
		setFormState((prevState) => ({
			...prevState,
			[name]: inputValue,
		}));
	};

	const onSubmit = (event) => {
		event.preventDefault();
		// Handle form submission
		console.log("🚀 ~ onSubmit ~ The member has been updated:", formState);
		closeModalMessage();
	};

	return (
		<>
			{/* User, invitation message and talent requested */}
			<h2 className="text-xl text-center font-semibold mb-1">Member details</h2>
			<div className="mb-6 border-2 border-gray-400 rounded-md p-4 pb-5">
				<div className="lg:grid lg:grid-cols-2 justify-around">
					{/* Member */}
					<div className="mb-6 xl:flex items-center">
						<h2 className="text-lg text-gray-400 font-semibold mb-1">Member:</h2>
						<div className="flex items-center pl-1 xl:pl-4">
							<Image src={member.profilePicture} height={0} width={0} sizes="100vw" alt="User profile picture" className="object-cover min-w-7 h-7 rounded-full shadow-md mr-4" />
							<div className="font-semibold">{member.username}</div>
						</div>
					</div>
				</div>

				{/* Role and start date */}
				<div className="lg:grid lg:grid-cols-2 justify-around">
					<div className="xl:flex items-baseline mb-6 lg:mb-0">
						<h2 className="text-lg text-gray-400 font-semibold mb-2 xl:mb-0">Role:</h2>
						<p className="pl-1 xl:pl-2">{member.role}</p>
					</div>
					<div className="xl:flex justify-center">
						<h2 className="text-lg text-gray-400 font-semibold mb-2 xl:mb-0">Start date:</h2>
						<p className="pl-1 xl:pl-2">{member.startDate}</p>
					</div>
				</div>
			</div>

			{/* Send message form */}
			<form onSubmit={onSubmit}>
				<div className="mb-8">
					<TextAreaField
						label="Your message for the member:"
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
