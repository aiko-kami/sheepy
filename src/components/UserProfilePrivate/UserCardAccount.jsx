"use client";

import { Button } from "@/components/Buttons/Buttons";
import FormField from "@/components/Forms/FormField";

import { IoAtOutline, IoLockClosed } from "react-icons/io5";

const UserCardDetails = ({ user }) => {
	let oldPassword = "";
	let newPassword = "";
	let repeatNewPassword = "";

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		// You can perform actions like searching here
		console.log("Search string:", searchInput);
	};

	const onChange = () => {};

	return (
		<div className="bg-base-450 shadow-2xl p-6 pb-8">
			<h2 className="text-2xl font-semibold mb-6">My account</h2>
			{/* User account information */}
			<div className="mx-0 px-6 pl-8">
				<form onSubmit={handleSubmit}>
					{/* List of fields */}
					<div className="mb-10">
						{/* Email */}
						<FormField inputName={"email"} inputType={"email"} label={"Email"} inputValue={user.email}>
							<IoAtOutline className="w-5 h-5 text-gray-400" />
						</FormField>

						{/* Old password */}
						<FormField inputName={"oldPassword"} inputType={"password"} label={"Old Password"} inputValue={oldPassword}>
							<IoLockClosed className="w-5 h-5 text-gray-400" />
						</FormField>

						{/* New password */}
						<FormField inputName={"newPassword"} inputType={"password"} label={"New password"} inputValue={newPassword}></FormField>

						{/* Repeat new password */}
						<FormField inputName={"repeatNewPassword"} inputType={"password"} label={"Repeat new password"} inputValue={repeatNewPassword}></FormField>
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
