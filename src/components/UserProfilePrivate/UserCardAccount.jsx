"use client";

import { useState } from "react";
import { Button } from "@/components/Buttons/Buttons";
import InputField from "@/components/Forms/InputField";

import { IoAtOutline, IoLockClosed } from "react-icons/io5";

const UserCardDetails = ({ user }) => {
	const [formInputs, setFormInputs] = useState({
		email: user.email,
		oldPassword: "",
		newPassword: "",
		repeatNewPassword: "",
	});

	const onChange = (e) => {
		const { name, value } = e.target;
		setFormInputs((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form data:", formInputs);
	};

	return (
		<div className="bg-base-450 shadow-2xl p-6 pb-8">
			<h2 className="text-2xl font-semibold mb-6">My account</h2>
			{/* User account information */}
			<div className="mx-0 px-6 pl-8">
				<form onSubmit={handleSubmit}>
					{/* List of fields */}
					<div className="mb-10">
						{/* Email */}
						<InputField inputName={"email"} inputType={"email"} label={"Email"} inputValue={formInputs.email} onChange={onChange}>
							<IoAtOutline className="w-5 h-5 text-gray-400" />
						</InputField>

						{/* Old password */}
						<InputField inputName="oldPassword" inputType="password" label="Old Password" inputValue={formInputs.oldPassword} onChange={onChange}>
							<IoLockClosed className="w-5 h-5 text-gray-400" />
						</InputField>

						{/* New password */}
						<InputField inputName="newPassword" inputType="password" label="New Password" inputValue={formInputs.newPassword} onChange={onChange}>
							<IoLockClosed className="w-5 h-5 text-gray-400" />
						</InputField>

						{/* Repeat new password */}
						<InputField inputName="repeatNewPassword" inputType="password" label="Repeat New Password" inputValue={formInputs.repeatNewPassword} onChange={onChange}>
							<IoLockClosed className="w-5 h-5 text-gray-400" />
						</InputField>
					</div>
					{/* Button Update account (submit form) */}
					<div className="text-center">
						<Button btnProps={{ type: "submit" }}>Update my account</Button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default UserCardDetails;
