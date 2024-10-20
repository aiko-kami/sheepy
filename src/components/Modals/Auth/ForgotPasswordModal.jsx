"use client";

import { useState } from "react";

import { Button } from "@/components/Buttons/Buttons";
import InputField from "@/components/Forms/InputField";

const ForgotPasswordModal = ({ closeModal }) => {
	const [formData, setFormData] = useState({
		email: "",
	});
	const [formError, setFormError] = useState("");
	const [isSubmitted, setIsSubmitted] = useState(false);

	const onChange = (e) => {
		setFormError("");

		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (event) => {
		event.preventDefault();

		// Simple email validation regex
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!formData.email) {
			setFormError("Email is required");
			return;
		} else if (!emailPattern.test(formData.email)) {
			setFormError("Please enter a valid email address");
			return;
		}

		// If validation passes
		setIsSubmitted(true);
		console.log("🚀 ~ onSubmit ~ form data:", formData);
	};

	return (
		<>
			{!isSubmitted ? (
				/* Forgot password form */
				<div>
					<form onSubmit={onSubmit}>
						{/* Email */}
						<div className="mb-1">
							<InputField inputName="email" inputType="text" label="Your email" inputValue={formData.email} onChange={onChange} />
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
					<p className="mb-6">Check your inbox! We've sent you a link to reset your password.</p>
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
