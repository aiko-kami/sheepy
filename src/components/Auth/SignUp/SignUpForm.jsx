"use client";

import { useState } from "react";
import InputField from "@/components/Forms/InputField";

const SignUpForm = ({ setModalDisplay }) => {
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
		password2: "",
	});
	const { username, email, password, password2 } = formData;

	const [signupError, setSignupError] = useState("");
	const [loading, setLoading] = useState(false);

	const onChange = (e) => {
		setSignupError("");
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		// You can perform actions like searching here
		console.log("Register inputs:", formData);
	};

	const showModal = () => {
		setModalDisplay(true);
	};

	return (
		<>
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
						<InputField inputName="password2" inputType="password" label="Confirm password" inputValue={password2} onChange={onChange} />
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
		</>
	);
};

export default SignUpForm;
