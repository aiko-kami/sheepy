"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/contexts/AuthContext";

import InputField from "@/components/Forms/InputField";
import Triforce from "@/components/Loaders/Triforce";

import { ApiLogin } from "@/lib/api/auth";

import { showErrorToast } from "@/utils/toast";
import { handleFormChange } from "@/utils/formHandlers";

const LoginForm = ({ setModalDisplay }) => {
	const router = useRouter();
	const { loginUser } = useAuth();

	const [formInputs, setFormInputs] = useState({
		identifier: "",
		password: "",
	});
	const { identifier, password } = formInputs;

	const [loading, setLoading] = useState(false);

	const onChange = handleFormChange(setFormInputs);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!identifier.trim()) {
			showErrorToast("Email or username is required.");
			return;
		}
		if (!password.trim()) {
			showErrorToast("Password is required.");
			return;
		}

		setLoading(true);

		try {
			const user = await ApiLogin({ identifier, password });
			router.push("/");
			loginUser(user);
		} catch (error) {
			showErrorToast(error.message || "Something went wrong");
		} finally {
			setLoading(false);
		}
	};

	const showModal = () => {
		setModalDisplay(true);
	};

	return (
		<div className="relative">
			{/* Overlay when loading */}
			{loading && (
				<div className="absolute inset-0 flex items-center justify-center z-10">
					<Triforce />
				</div>
			)}

			<h1 className="text-center text-2xl mb-4">Log in</h1>
			<form onSubmit={handleSubmit} className={loading ? "opacity-50 pointer-events-none" : ""}>
				{/* Email input */}
				<div className="mb-6">
					<InputField inputName="identifier" inputType="text" label="Email address or Username" inputValue={identifier} onChange={onChange} />
				</div>
				{/* Password input */}
				<div className="mb-3">
					<InputField inputName="password" inputType="password" label="Password" inputValue={password} onChange={onChange} />
				</div>
				{/* Forgot Password link */}
				<div className="flex justify-between mb-8">
					<div></div>
					<div className="text-right ml-4">
						<button
							type="button"
							disabled={loading}
							className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out whitespace-nowrap"
							onClick={showModal}
						>
							Forgot password?
						</button>
					</div>
				</div>
				{/* Submit button */}
				<button
					type="submit"
					className="inline-block px-7 py-2 bg-blue-600 text-white font-medium leading-snug rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
					disabled={loading}
				>
					{loading ? "Signing in..." : "Sign in"}
				</button>
			</form>
		</div>
	);
};

export default LoginForm;
