"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/Buttons/Buttons";
import InputField from "@/components/Forms/InputField";
import Triforce from "@/components/Loaders/Triforce";

import { ApiSignUp } from "@/lib/api/auth";

import { handleFormChange } from "@/utils/formHandlers";
import { showErrorToast } from "@/utils/toast";
import { ERRORS } from "@/lib/constants";

const SignUpForm = ({ setModalDisplay }) => {
	const router = useRouter();

	const [formInputs, setFormInputs] = useState({
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const { username, email, password, confirmPassword } = formInputs;

	const [isSignedUp, setIsSignedUp] = useState(false);
	const [loading, setLoading] = useState(false);

	const onChange = handleFormChange(setFormInputs);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!username.trim()) {
			showErrorToast(ERRORS.AUTHENTIFICATION.USERNAME_REQUIRED);
			return;
		}
		if (!email.trim()) {
			showErrorToast();
			return;
		}
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailPattern.test(email)) {
			showErrorToast(ERRORS.AUTHENTIFICATION.VALID_EMAIL_REQUIRED);
			return;
		}
		if (!password.trim()) {
			showErrorToast(ERRORS.AUTHENTIFICATION.PASSWORD_REQUIRED);
			return;
		}
		if (!confirmPassword.trim()) {
			showErrorToast(ERRORS.AUTHENTIFICATION.PASSWORD_CONFIRM_REQUIRED);
			return;
		}
		if (password !== confirmPassword) {
			showErrorToast(ERRORS.AUTHENTIFICATION.PASSWORD_MATCH);
			return;
		}

		setLoading(true);

		try {
			await ApiSignUp({ username, email, password, confirmPassword });
			setIsSignedUp(true);
		} catch (error) {
			showErrorToast(error.message || ERRORS.AUTHENTIFICATION.REGISTER_FAILED);
		} finally {
			setLoading(false);
		}
	};

	const showModal = () => {
		setModalDisplay(true);
	};

	return (
		<>
			{!isSignedUp ? (
				<div className="relative">
					{/* Loader overlay */}
					{loading && (
						<div className="absolute inset-0 flex items-center justify-center z-10">
							<Triforce />
						</div>
					)}

					<h1 className="text-center text-2xl mb-4">Create an account</h1>
					<form onSubmit={handleSubmit}>
						{/* Username */}
						<div className="mb-6">
							<InputField inputName="username" inputType="text" label="Username" inputValue={username} onChange={onChange} />
						</div>

						{/* Email */}
						<div className="mb-6">
							<InputField inputName="email" inputType="email" label="Email address" inputValue={email} onChange={onChange} />
						</div>

						{/* Password */}
						<div className="mb-6">
							<InputField inputName="password" inputType="password" label="Password" inputValue={password} onChange={onChange} />
						</div>

						{/* Confirm Password */}
						<div className="mb-10">
							<InputField inputName="confirmPassword" inputType="password" label="Confirm password" inputValue={confirmPassword} onChange={onChange} />
						</div>

						{/* Terms and conditions */}
						<div className="text-center text-xs mb-3">
							<p>
								By clicking on Register, you agree to our&nbsp;
								<br className="sm:hidden" />
								<button type="button" className="underline hover:text-gray-400 transition" onClick={showModal}>
									Terms of use
								</button>
							</p>
						</div>

						{/* Submit */}
						<button
							type="submit"
							className="inline-block px-7 py-2 bg-blue-600 font-medium leading-snug text-white rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out w-full"
							disabled={loading}
						>
							{loading ? "Loading..." : "Register"}
						</button>
					</form>
				</div>
			) : (
				<div className="text-center">
					<p className="text-green-400 font-semibold text-xl mb-1">Account created!</p>
					<p className="mb-2">Check your email for the verification link to complete your registration.</p>
					<p className="mb-6">If you don't see it, be sure to check your spam or junk folder.</p>
					<Button btnProps={{ type: "button", action: () => router.push("/") }}>Go to home page</Button>
				</div>
			)}
		</>
	);
};

export default SignUpForm;
