"use client";

import { Button } from "@/components/Buttons/Buttons";
import { useRouter } from "next/navigation";

const CloseWindowFrameModal = ({ closeModalCloseWindow }) => {
	const router = useRouter();

	const stopProjectCreation = () => {
		router.push("/");
	};

	return (
		<>
			{/* Stop project creation */}
			<h2 className="text-lg font-semibold text-center mb-6">Are you sure you want to stop your project creation?</h2>

			{/* Buttons */}
			<div className="flex justify-between items-center">
				<Button
					btnProps={{
						type: "button",
						btnColor: "grayBorder",
						action: closeModalCloseWindow,
					}}
				>
					Cancel
				</Button>
				<div className="flex gap-2">
					<Button
						btnProps={{
							type: "button",
							btnColor: "red",
							action: stopProjectCreation,
						}}
					>
						Don't save
					</Button>
					<Button
						btnProps={{
							type: "submit",
							name: "action",
							value: "save-draft-modal",
							btnColor: "blue",
						}}
					>
						Save draft
					</Button>
				</div>
			</div>
		</>
	);
};

export default CloseWindowFrameModal;
