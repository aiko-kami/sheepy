"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { ApiLogin } from "@/lib/api/auth";
import InputField from "@/components/Forms/InputField";
import Triforce from "@/components/Loaders/Triforce";

const LoginForm = ({ setModalDisplay }) => {
	const router = useRouter();
	const { loginUser } = useAuth();

	const [formData, setFormData] = useState({
		identifier: "",
		password: "",
	});
	const { identifier, password } = formData;

	const [loginError, setLoginError] = useState("");
	const [loading, setLoading] = useState(false);

	const onChange = (e) => {
		setLoginError("");
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();

		// Validate inputs before calling the server
		if (!identifier.trim()) {
			setLoginError("Email or username is required.");
			return;
		}
		if (!password.trim()) {
			setLoginError("Password is required.");
			return;
		}

		setLoading(true);
		setLoginError("");

		try {
			const user = await ApiLogin({ identifier, password });
			router.push("/");
			loginUser(user);
		} catch (error) {
			setLoginError(error.message || "Something went wrong");
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
				<div className="mb-3">
					<InputField inputName="password" inputType="password" label="Password" inputValue={password} onChange={onChange} />
				</div>
				<div className="flex justify-between mb-3 min-h-14">
					{/* Error message */}
					<div>{loginError && <p className="text-xs text-red-600">{loginError}</p>}</div>

					{/* Forgot Password link */}
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
				{/* Sign in button */}
				<button
					type="submit"
					className="inline-block px-7 py-2 bg-blue-600 text-white font-medium leading-snug rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
					data-mdb-ripple="true"
					data-mdb-ripple-color="light"
					disabled={loading} // Disable button while loading
				>
					{loading ? "Signing in..." : "Sign in"}
				</button>
			</form>
		</div>
	);
};

export default LoginForm;
