"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ApiSignUp } from "@/lib/api/auth";
import { Button } from "@/components/Buttons/Buttons";
import InputField from "@/components/Forms/InputField";
import Triforce from "@/components/Loaders/Triforce";

const SignUpForm = ({ setModalDisplay }) => {
	const router = useRouter();

	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const { username, email, password, confirmPassword } = formData;

	const [signupError, setSignupError] = useState("");
	const [isSignedUp, setIsSignedUp] = useState(false);
	const [loading, setLoading] = useState(false);

	const onChange = (e) => {
		setSignupError("");
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();

		// Validate inputs before calling the server
		if (!username.trim()) {
			setSignupError("Username is required.");
			return;
		}
		if (!email.trim()) {
			setSignupError("Email is required.");
			return;
		}
		// Simple email validation regex
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!emailPattern.test(email)) {
			setSignupError("Please enter a valid email address");
			return;
		}
		if (!password.trim()) {
			setSignupError("Password is required.");
			return;
		}
		if (!confirmPassword.trim()) {
			setSignupError("Password confirmation is required.");
			return;
		}
		if (password !== confirmPassword) {
			setSignupError("Passwords do not match.");
			return;
		}

		setLoading(true);
		setSignupError("");

		try {
			await ApiSignUp({ username, email, password, confirmPassword });
			setIsSignedUp(true);
		} catch (error) {
			setSignupError(error.message || "Something went wrong");
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
					{/* Overlay when loading */}
					{loading && (
						<div className="absolute inset-0 flex items-center justify-center z-10">
							<Triforce />
						</div>
					)}

					<h1 className="text-center text-2xl mb-4">Create an account</h1>
					<form onSubmit={handleSubmit}>
						<div>
							{/* Username input */}
							<div className="mb-6">
								<InputField inputName="username" inputType="text" label="Username" inputValue={username} onChange={onChange} />
							</div>

							{/* Email input */}
							<div className="mb-6">
								<InputField inputName="email" inputType="email" label="Email address" inputValue={email} onChange={onChange} />
							</div>

							{/* Password input */}
							<div className="mb-6">
								<InputField inputName="password" inputType="password" label="Password" inputValue={password} onChange={onChange} />
							</div>

							{/* Confirm password */}
							<div className="mb-3">
								<InputField inputName="confirmPassword" inputType="password" label="Confirm password" inputValue={confirmPassword} onChange={onChange} />
							</div>

							{/* Error message (displayed only if an error) */}
							<div className="min-h-14 mb-3">{signupError && <p className="text-xs text-red-600">{signupError}</p>}</div>
						</div>

						{/* Terms and conditions link */}
						<div className="text-center text-xs mb-3">
							<p>
								By clicking on Register, you agree to our&nbsp;
								<br className="sm:hidden" />
								<button type="button" className="underline hover:text-gray-400 duration-200 transition ease-in-out" onClick={showModal}>
									Terms of use
								</button>
							</p>
						</div>

						{/* Submit button */}
						<button
							type="submit"
							className="inline-block px-7 py-2 bg-blue-600 font-medium leading-snug rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
							data-mdb-ripple="true"
							data-mdb-ripple-color="light"
						>
							{!loading && <span>Register</span>}
							{loading && <span>Loading...</span>}
						</button>
					</form>
				</div>
			) : (
				/* Success message */
				<div className="text-center">
					<p className="text-green-400 font-semibold text-xl mb-1">Account created!</p>
					<p className="mb-2">Check your email for the verification link to complete your registration.</p>
					<p className="mb-6">If you don't see it, be sure to check your spam or junk folder.</p>
					<Button
						btnProps={{
							type: "button",
							action: () => router.push("/"),
						}}
					>
						Go to home page
					</Button>
				</div>
			)}
		</>
	);
};

export default SignUpForm;
