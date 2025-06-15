"use client";

import { useEffect, useState } from "react";
import { ApiValidateEmailChange } from "@/lib/api/usersClient";
import { Button } from "@/components/Buttons/Buttons";
import Triforce from "@/components/Loaders/Triforce";

import { useRouter } from "next/navigation";

const VerifyEmailChangeMenu = ({ emailChangeValidationId }) => {
	const router = useRouter();

	const [status, setStatus] = useState("pending"); // 'pending', 'success', 'error'
	const [message, setMessage] = useState("");

	useEffect(() => {
		if (!emailChangeValidationId) {
			setStatus("error");
			setMessage("Missing email validation ID.");
			return;
		}

		// Call your API endpoint
		const validateEmailChange = async () => {
			try {
				const response = await ApiValidateEmailChange(emailChangeValidationId);
				setStatus("success");
				setMessage("Your new email has been successfully verified!");
			} catch (error) {
				setStatus("error");
				setMessage(error.message || "An unexpected error occurred during the email change verification.");
			}
		};

		validateEmailChange();
	}, [emailChangeValidationId]);

	return (
		<div className="flex flex-col py-30 items-center relative">
			<div className="flex flex-col items-center justify-center px-4 text-center mb-30">
				<div className="h-12 flex items-center justify-center">
					{status === "pending" && (
						<div className="absolute inset-0 z-10">
							<Triforce />
						</div>
					)}
					{status === "success" && <p className="text-green-400 font-medium text-xl">{message}</p>}
					{status === "error" && <p className="text-red-600 font-medium text-xl">{message}</p>}
				</div>
			</div>
			<Button
				btnProps={{
					type: "button",
					btnSize: "xl",
					action: () => router.push("/"),
				}}
			>
				Go to home page
			</Button>
		</div>
	);
};

export default VerifyEmailChangeMenu;
