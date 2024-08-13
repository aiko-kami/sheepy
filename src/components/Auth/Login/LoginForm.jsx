"use client";

import { useState } from "react";

const LoginForm = ({ setModalDisplay }) => {
	const [formData, setFormData] = useState({
		login: "",
		password: "",
	});
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

	const { login, password } = formData;

	return (
		<>
			<h1 className="text-center text-2xl mb-4">Log in</h1>
			<form onSubmit={handleSubmit}>
				{/* Email input */}
				<div className="relative z-0 mb-6 w-full group">
					<input
						type="text"
						name="login"
						id="login"
						value={login}
						onChange={onChange}
						className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
					/>
					<label
						htmlFor="login"
						className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Email address or Username
					</label>
				</div>

				{/* Password input */}
				<div className="relative z-0 mb-2 w-full group">
					<input
						type="password"
						name="password"
						id="password"
						value={password}
						onChange={onChange}
						className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
						placeholder=" "
						required
					/>
					<label
						htmlFor="password"
						className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
					>
						Password
					</label>
				</div>

				{/* Error message (displayed only if an error) */}

				{/* Forgot Password link */}
				<div className="text-right mb-2">
					<button type="button" className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out" onClick={showModal}>
						Forgot password?
					</button>
				</div>
				<div className="min-h-7 mb-3">{loginError && <p className="text-xs text-red-600">{loginError}</p>}</div>

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
