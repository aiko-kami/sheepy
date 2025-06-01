"use client";

import { useState } from "react";
import { ApiForgotPassword } from "@/lib/api/auth";
import { Button } from "@/components/Buttons/Buttons";
import InputField from "@/components/Forms/InputField";

const ForgotPasswordModal = ({ closeModal }) => {
	const [formData, setFormData] = useState({
		email: "",
	});
	const [formError, setFormError] = useState("");
	const [isSubmitted, setIsSubmitted] = useState(false);

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

		// Simple email validation regex
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!formData.email.trim()) {
			setFormError("Email is required");
			return;
		} else if (!emailPattern.test(formData.email)) {
			setFormError("Please enter a valid email address");
			return;
		}

		try {
			await ApiForgotPassword(formData.email);
			setIsSubmitted(true);
		} catch (error) {
			console.error("Forgot password error:", error.message);
			setFormError(error.message || "Something went wrong");
		}
	};

	return (
		<>
			{!isSubmitted ? (
				/* Forgot password form */
				<div>
					<form onSubmit={handleSubmit}>
						{/* Email */}
						<div className="mb-1">
							<InputField inputName="email" inputType="text" label="Your email" inputValue={formData.email} onChange={handleChange} />
						</div>
						<div className="min-h-7 mb-6">{formError && <p className="text-sm text-red-600">{formError}</p>}</div>
						{/* Buttons */}
						<div className="flex gap-8 justify-center">
							<Button
								btnProps={{
									type: "button",
									btnColor: "grayBorder",
									action: closeModal,
								}}
							>
								Cancel
							</Button>
							<Button
								btnProps={{
									type: "submit",
								}}
							>
								Reset password
							</Button>
						</div>
					</form>
				</div>
			) : (
				/* Success message */
				<div className="text-center">
					<p className="text-green-500 font-semibold text-xl mb-1">Success</p>
					<p className="mb-2">Check your inbox! We've sent you a link to reset your password.</p>
					<p className="mb-6">If you don't see it, be sure to check your spam or junk folder.</p>
					<Button
						btnProps={{
							type: "button",
							action: closeModal,
						}}
					>
						Close
					</Button>
				</div>
			)}
		</>
	);
};

export default ForgotPasswordModal;
