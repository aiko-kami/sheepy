"use client";

import { useState } from "react";
import { ApiResetPassword } from "@/lib/api/auth";
import { Button } from "@/components/Buttons/Buttons";
import InputField from "@/components/Forms/InputField";
import Triforce from "@/components/Loaders/Triforce";

import { useRouter } from "next/navigation";

const ForgotPasswordMenu = ({ resetToken }) => {
	const router = useRouter();

	const [formData, setFormData] = useState({
		newPassword: "",
		confirmPassword: "",
	});

	const { newPassword, confirmPassword } = formData;

	const [formError, setFormError] = useState("");
	const [formSuccess, setFormSuccess] = useState("");
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		setFormError("");

		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!newPassword.trim() || !confirmPassword.trim()) {
			setFormError("Both fields are required.");
			return;
		}

		if (newPassword !== confirmPassword) {
			setFormError("Passwords do not match.");
			return;
		}

		setLoading(true);
		setFormError("");
		setFormSuccess("");

		try {
			await ApiResetPassword({
				resetToken,
				newPassword: newPassword,
				confirmPassword: confirmPassword,
			});

			setFormSuccess("Password reset successfully! Redirecting to login...");
			setTimeout(() => {
				router.push("/login");
			}, 3000);
		} catch (error) {
			setFormError(error.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="flex flex-col py-20 items-center h-full">
			{/* Overlay when loading */}
			{loading && (
				<div className="absolute inset-0 flex items-center justify-center z-10">
					<Triforce />
				</div>
			)}

			<h1 className="text-center text-2xl mb-4">Reset Your Password</h1>
			<form onSubmit={handleSubmit} className={`tn:w-90 sm:w-110 max-w-110 ${loading ? "opacity-50 pointer-events-none" : ""}`}>
				{/* New Password input */}
				<div className="mb-6">
					<InputField inputName="newPassword" inputType="text" label="New Password" inputValue={newPassword} onChange={handleChange} />
				</div>
				<div className="mb-3">
					<InputField inputName="confirmPassword" inputType="text" label="Confirm New Password" inputValue={confirmPassword} onChange={handleChange} />
				</div>
				<div className="mb-6 min-h-6">
					{/* Error message */}
					<div>{formError && <p className="text-xs text-red-600">{formError}</p>}</div>
				</div>
				{/* Reset password button */}
				<div className="flex justify-center">
					<Button
						btnProps={{
							type: "submit",
						}}
					>
						{loading ? "Resetting password..." : "Reset Password"}
					</Button>
				</div>
			</form>
		</div>
	);
};

export default ForgotPasswordMenu;
