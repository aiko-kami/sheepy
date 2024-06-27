"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import sheepLogo from "@/public/sheepyLogo.png";

const LoginPage = () => {
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

	const { login, password } = formData;
	return (
		<>
			<div className="flex flex-col py-20 md:flex-row justify-evenly items-center flex-wrap h-full">
				<div className="md:w-2/5 md:mb-0 text-center">
					<h1 className="text-center text-5xl mb-4">Welcome back!</h1>
					<Image src={sheepLogo} alt="Sheepy Logo" width={75} height={75} className="mx-auto" />
				</div>
				<div className="md:w-3/5 w-full max-w-md px-10">
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
							<Link href="#" className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out">
								Forgot password?
							</Link>
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

					<div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
						<p className="text-center font-semibold mx-4 mb-0">OR</p>
					</div>

					{/* Github login */}
					<Link
						href="/sign-up"
						className="px-7 py-3 bg-zinc-800 font-medium text-sm leading-snug rounded shadow-md hover:shadow-lg hover:bg-zinc-900 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3"
						data-mdb-ripple="true"
						data-mdb-ripple-color="light"
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 mr-2">
							<path
								fill="currentColor"
								d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
							/>
						</svg>
						Continue with Github
					</Link>

					{/* Sign up link */}
					<div className="mt-10 text-center text-sm">
						New here?&nbsp;
						<Link href="/sign-up" className="underline">
							Sign-up
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};
export default LoginPage;
