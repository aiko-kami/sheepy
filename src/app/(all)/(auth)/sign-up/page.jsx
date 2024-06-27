"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import sheepLogo from "@/public/sheepyLogo.png";

const SignUpPage = () => {
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

	return (
		<>
			<div className="flex flex-col-reverse py-20 md:flex-row justify-evenly items-center flex-wrap h-full">
				<div className="md:w-3/5 w-full max-w-md px-10">
					<h1 className="text-center text-2xl mb-4">Create an account</h1>
					<form onSubmit={handleSubmit}>
						<div>
							{/* Username input */}
							<div className="relative z-0 mb-6 w-full group">
								<input
									type="text"
									name="username"
									id="username"
									value={username}
									onChange={onChange}
									className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
									placeholder=" "
									required
								/>
								<label
									htmlFor="username"
									className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
								>
									Username
								</label>
							</div>

							{/* Email input */}
							<div className="relative z-0 mb-6 w-full group">
								<input
									type="email"
									name="email"
									id="email"
									value={email}
									onChange={onChange}
									className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
									placeholder=" "
									required
								/>
								<label
									htmlFor="email"
									className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
								>
									Email address
								</label>
							</div>

							{/* Password input */}
							<div className="relative z-0 mb-6 w-full group">
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
									className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
								>
									Password
								</label>
							</div>

							{/* Confirm password */}
							<div className="relative z-0 mb-4 w-full group">
								<input
									type="password"
									name="password2"
									id="password2"
									value={password2}
									onChange={onChange}
									className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
									placeholder=" "
									required
								/>
								<label
									htmlFor="password2"
									className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
								>
									Confirm password
								</label>
							</div>
							<div className="min-h-7 mb-3">{signupError && <p className="text-xs text-red-600">{signupError}</p>}</div>
						</div>

						{/* Terms and conditions link */}
						<div className="text-center text-xs mb-3">
							<p>
								By clicking on Register, you agree to our&nbsp;
								<br className="sm:hidden" />
								<Link href="#" className="underline">
									Terms of use
								</Link>
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

					{/* Login link */}
					<div className="mt-10 text-center text-sm">
						Already have an account?&nbsp;
						<Link href="/login" className="underline">
							Log in
						</Link>
					</div>
				</div>
				<div className="md:w-2/5 md:mb-0 text-center">
					<h1 className="text-center text-5xl mb-4">
						Join the&nbsp;
						<br className="lg:hidden" />
						community!
					</h1>

					<Image src={sheepLogo} width={75} height={75} alt="Sheepy Logo" className="mx-auto" />
				</div>
			</div>
		</>
	);
};
export default SignUpPage;
