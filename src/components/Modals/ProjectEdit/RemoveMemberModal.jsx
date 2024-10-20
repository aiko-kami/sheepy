"use client";

import { useState } from "react";

import Image from "next/image";
import { Button } from "@/components/Buttons/Buttons";
import DatePickerField from "@/components/Forms/DatePickerField";
import InputField from "@/components/Forms/InputField";

const RemoveMemberModal = ({ closeModal, member }) => {
	const [formState, setFormState] = useState({
		memberId: member.userId,
	});

	const onSubmit = (event) => {
		event.preventDefault();
		// Handle form submission
		console.log("🚀 ~ onSubmit ~ The member has been removed:", formState);
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				{/* User profile picture and username */}
				<div className="flex items-center px-8 mb-6">
					<Image src={member.profilePicture} height={0} width={0} sizes="100vw" alt="User profile picture" className="object-cover min-w-16 h-16 rounded-full shadow-md mr-4" />
					<div className="font-semibold text-lg lg:whitespace-nowrap">{member.username}</div>
					{member.isOwner && (
						<div className="sm:ml-3">
							<span className="py-1 px-2.5 text-white font-bold text-nowrap duration-200 rounded cursor-default bg-blue-500">Project Owner</span>
						</div>
					)}
				</div>

				<div className="sm:grid sm:grid-cols-1 xl:grid-cols-2 px-8 mb-6">
					{/* User current role on the project */}
					<div className="mb-6">
						<h2 className="text-lg text-gray-400 font-semibold mb-1">
							Current role: <span className="text-white font-normal text-base">{member.role}</span>
						</h2>
					</div>

					{/* User current start date on the project */}
					<div className="mb-6">
						<h2 className="text-lg text-gray-400 font-semibold mb-1">
							Start date: <span className="text-white font-normal text-base">{member.startDate}</span>
						</h2>
					</div>

					{/* User current start date on the project */}
					<div className="col-span-2 mb-6 text-center">
						<h2 className="text-lg font-semibold mb-1">Are you sure you want to remove {member.username} from the project?</h2>
					</div>
				</div>

				{/* Buttons */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 justify-center">
					<div className="col-span-2 md:col-span-1 grid xl:px-1/5">
						<Button
							btnProps={{
								type: "button",
								action: closeModal,
							}}
						>
							Cancel
						</Button>
					</div>
					<div className="col-span-2 md:col-span-1 grid xl:px-1/5">
						<Button
							btnProps={{
								type: "submit",
								btnColor: "red",
							}}
						>
							Remove member
						</Button>
					</div>
				</div>
			</form>
		</>
	);
};

export default RemoveMemberModal;
