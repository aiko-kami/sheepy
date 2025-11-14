"use client";

import { useState } from "react";
import Image from "next/image";

import { Button } from "@/components/Buttons/Buttons";
import DatePickerField from "@/components/Forms/DatePickerField";
import InputField from "@/components/Forms/InputField";

import { handleFormChange } from "@/utils/formHandlers";

const UpdateMemberModal = ({ member, role, talent, startDate, closeModalUpdate }) => {
	const [formInputs, setFormInputs] = useState({
		memberId: member.userId,
		newTalent: "",
		memberStartDate: null,
	});

	const onChange = handleFormChange(setFormInputs);

	const setMemberStartDate = (newValue) => {
		setFormInputs((prevState) => ({
			...prevState,
			memberStartDate: newValue,
		}));
	};

	const onSubmit = (event) => {
		event.preventDefault();
		// Handle form submission
		console.log("🚀 ~ onSubmit ~ The member has been updated:", formInputs);
		closeModalUpdate();
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				{/* User profile picture and username */}
				<div className="md:flex items-center mb-6">
					<div className="flex items-center mb-4 md:mb-0">
						<Image src={member.profilePicture.link} height={0} width={0} sizes="100vw" alt="User profile picture" className="object-cover min-w-16 h-16 rounded-full shadow-md mr-4" />
						<div className="font-semibold text-lg lg:whitespace-nowrap">{member.username}</div>
					</div>
					{role === "owner" && (
						<div className="sm:ml-3">
							<span className="py-1 px-2.5 text-white font-bold text-nowrap duration-200 rounded cursor-default bg-blue-500">Project Owner</span>
						</div>
					)}
				</div>

				<div className="sm:grid sm:grid-cols-1 xl:grid-cols-2 mb-6 items-end">
					{/* User current talent on the project */}
					<div className="flex items-baseline mb-2 xl:mb-6">
						<h2 className="text-lg text-gray-400 font-semibold">Current talent:</h2>
						<p className="pl-1 xl:pl-2">{talent}</p>
					</div>

					{/* New talent */}
					<div className="max-w-80 mb-6">
						<InputField inputName="talent" inputType="text" label="New talent" inputValue={formInputs.newTalent} onChange={onChange} />
					</div>

					{/* User current start date on the project */}
					<div className="flex items-baseline mb-2 xl:mb-6">
						<h2 className="text-lg text-gray-400 font-semibold">Start date:</h2>
						<p className="pl-1 xl:pl-2">{startDate}</p>
					</div>

					{/* Start date picker */}
					<div className="max-w-80 mb-6">
						<DatePickerField label="Change member start date" value={formInputs.memberStartDate} onChange={(newValue) => setMemberStartDate(newValue)} />
					</div>
				</div>

				{/* Buttons */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 justify-center">
					<div className="col-span-2 md:col-span-1 grid xl:px-1/5">
						<Button
							btnProps={{
								type: "button",
								action: closeModalUpdate,
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
			</form>
		</>
	);
};

export default UpdateMemberModal;
