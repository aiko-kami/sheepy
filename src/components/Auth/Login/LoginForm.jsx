"use client";

import { useState } from "react";
import InputField from "@/components/Forms/InputField";

const LoginForm = ({ setModalDisplay }) => {
	const [formData, setFormData] = useState({
		login: "",
		password: "",
	});
	const { login, password } = formData;

	const [loginError, setLoginError] = useState("");

	const onChange = (e) => {
		setLoginError("");
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		// You can perform actions like searching here
		console.log("Login submitted:", formData);
	};

	const showModal = () => {
		setModalDisplay(true);
	};

	return (
		<>
			<h1 className="text-center text-2xl mb-4">Log in</h1>
			<form onSubmit={handleSubmit}>
				{/* Email input */}
				<div className="mb-6">
					<InputField inputName="login" inputType="text" label="Email address or Username" inputValue={login} onChange={onChange} />
				</div>
				<div className="mb-3">
					<InputField inputName="password" inputType="text" label="Password" inputValue={password} onChange={onChange} />
				</div>
				<div className="flex justify-between mb-3 min-h-14">
					{/* Error message (displayed only if an error) */}
					<div>{loginError && <p className="text-xs text-red-600">{loginError}</p>}</div>

					{/* Forgot Password link */}
					<div className="text-right ml-4">
						<button type="button" className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out whitespace-nowrap" onClick={showModal}>
							Forgot password?
						</button>
					</div>
				</div>
				{/* Sign in button (submit form) */}
				<button
					type="submit"
					className="inline-block px-7 py-2 bg-blue-600 text-white font-medium leading-snug rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
					data-mdb-ripple="true"
					data-mdb-ripple-color="light"
				>
					Sign in
				</button>
			</form>
		</>
	);
};

export default LoginForm;
