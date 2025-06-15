"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoLockClosed } from "react-icons/io5";

import { Button } from "@/components/Buttons/Buttons";
import InputField from "@/components/Forms/InputField";
import { ApiUpdateUserPassword } from "@/lib/api/usersClient";
import { showSuccessToast, showErrorToast } from "@/utils/toast";

const UserCardPassword = ({ user }) => {
	const router = useRouter();

	const [formInputs, setFormInputs] = useState({
		oldPassword: "",
		newPassword: "",
		confirmNewPassword: "",
	});

	const onChange = (e) => {
		const { name, value } = e.target;
		setFormInputs((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();

		// Prepare payload, replacing empty strings with special marker
		const payload = {
			oldPassword: formInputs.oldPassword,
			newPassword: formInputs.newPassword,
			confirmNewPassword: formInputs.confirmNewPassword,
		};

		try {
			await ApiUpdateUserPassword(payload);
			showSuccessToast("Password updated successfully!");
			router.push("/users/my-profile");
		} catch (error) {
			showErrorToast(error.message);
		}
	};

	return (
		<div className="bg-base-450 shadow-2xl p-6 pb-8">
			<h2 className="text-2xl font-semibold mb-6">My password</h2>
			{/* User password */}
			<div className="mx-0 px-6 pl-8">
				<form onSubmit={handleSubmit}>
					{/* List of fields */}
					<div className="mb-10">
						{/* Old password */}
						<div className="mb-6">
							<InputField inputName="oldPassword" inputType="password" label="Old Password" inputValue={formInputs.oldPassword} onChange={onChange}>
								<IoLockClosed className="w-5 h-5 text-gray-400" />
							</InputField>
						</div>

						{/* New password */}
						<div className="mb-6">
							<InputField inputName="newPassword" inputType="password" label="New Password" inputValue={formInputs.newPassword} onChange={onChange}>
								<IoLockClosed className="w-5 h-5 text-gray-400" />
							</InputField>
						</div>

						{/* Repeat new password */}
						<div className="mb-6">
							<InputField inputName="confirmNewPassword" inputType="password" label="Repeat New Password" inputValue={formInputs.confirmNewPassword} onChange={onChange}>
								<IoLockClosed className="w-5 h-5 text-gray-400" />
							</InputField>
						</div>
					</div>
					{/* Button Update password (submit form) */}
					<div className="text-center">
						<Button btnProps={{ type: "submit" }}>Update my password</Button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default UserCardPassword;
