"use client";

import { useState } from "react";

import Image from "next/image";
import { Button } from "@/components/Buttons/Buttons";
import DatePickerField from "@/components/Forms/DatePickerField";
import InputField from "@/components/Forms/InputField";

const UpdateMemberModal = ({ closeModal, member }) => {
	const [formState, setFormState] = useState({
		memberId: member.userId,
		role: "",
		memberStartDate: null,
	});

	const onChange = (e) => {
		const { name, value, type, checked } = e.target;
		const inputValue = type === "checkbox" ? checked : value;
		setFormState((prevState) => ({
			...prevState,
			[name]: inputValue,
		}));
	};

	const setMemberStartDate = (newValue) => {
		setFormState((prevState) => ({
			...prevState,
			memberStartDate: newValue,
		}));
	};

	const onSubmit = (event) => {
		event.preventDefault();
		// Handle form submission
		console.log("🚀 ~ onSubmit ~ The member has been updated:", formState);
	};

	return (
		<>
			{/* Modal content */}
			<form onSubmit={onSubmit}>
				<div className="max-h-110 overflow-y-auto text-base text-white">
					<div className="px-4 md:px-10 pb-8">
						{/* Member */}

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
								<h2 className="text-lg text-gray-400 font-semibold mb-1">Current role:</h2>
								<div className="pl-1">{member.role}</div>
							</div>

							{/* New role */}
							<div className="mb-6 max-w-80 pt-5">
								<InputField inputName="role" inputType="text" label="New role" inputValue={formState.role} onChange={onChange} />
							</div>

							{/* User current start date on the project */}
							<div className="mb-6">
								<h2 className="text-lg text-gray-400 font-semibold mb-1">Start date:</h2>
								<p className="pl-1">{member.startDate}</p>
							</div>

							{/* Start date picker */}
							<div className="mb-6 max-w-80 pt-4">
								<DatePickerField label="Change member start date" value={formState.memberStartDate} onChange={(newValue) => setMemberStartDate(newValue)} />
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
									Update member
								</Button>
							</div>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};

export default UpdateMemberModal;
