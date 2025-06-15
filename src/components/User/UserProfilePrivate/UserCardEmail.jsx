"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoAtOutline } from "react-icons/io5";

import { Button } from "@/components/Buttons/Buttons";
import InputField from "@/components/Forms/InputField";
import { ApiUpdateUserEmail } from "@/lib/api/usersClient";
import { showSuccessToast, showErrorToast } from "@/utils/toast";

const UserCardEmail = ({ user }) => {
	const router = useRouter();

	const [formInputs, setFormInputs] = useState({
		email: user.email,
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

		if (!formInputs.email.trim()) {
			showErrorToast("Email is required.");
			return;
		}
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailPattern.test(formInputs.email)) {
			showErrorToast("Please enter a valid email address.");
			return;
		}

		// Prepare payload, replacing empty strings with special marker
		const payload = {
			email: formInputs.email,
		};

		try {
			await ApiUpdateUserEmail(payload);
			showSuccessToast("Email updated successfully!.....");
			router.push("/users/my-profile");
		} catch (error) {
			showErrorToast(error.message);
		}
	};

	return (
		<div className="bg-base-450 shadow-2xl p-6 pb-8">
			<h2 className="text-2xl font-semibold mb-6">My email</h2>
			{/* User email information */}
			<div className="mx-0 px-6 pl-8">
				<form onSubmit={handleSubmit}>
					{/* List of fields */}
					<div className="mb-10">
						{/* Email */}
						<div className="mb-6">
							<InputField inputName={"email"} inputType={"email"} label={"Email"} inputValue={formInputs.email} onChange={onChange}>
								<IoAtOutline className="w-5 h-5 text-gray-400" />
							</InputField>
						</div>
					</div>
					{/* Button Update email (submit form) */}
					<div className="text-center">
						<Button btnProps={{ type: "submit" }}>Update my email</Button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default UserCardEmail;
