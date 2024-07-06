"use client";

import Link from "next/link";
import { Button } from "@/components/Buttons/Buttons";
import FormField from "@/components/Forms/FormField";

import { IoAtOutline, IoLockClosed } from "react-icons/io5";

const StepOne = () => {
	// Handle form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		// You can perform actions like searching here
		console.log("Search string:", searchInput);
	};

	const onChange = () => {};

	return (
		<>
			<div className="container mx-auto p-8 mt-12 mb-20 text-justify test">
				<p className="mb-4 text-center">Content of step 1 </p>
				<form onSubmit={handleSubmit}>
					{/* List of fields */}
					<div className="mb-10">
						{/* Project Title */}
						<FormField inputName="projectTitle" inputType="text" label="Project title" inputValue=""></FormField>
					</div>
					{/* Button Update account (submit form) */}
					<div className="text-center">
						<Button btnProps={{ type: "submit" }}>Back to introduction</Button>
						<Button btnProps={{ type: "submit" }}>Go to next step</Button>
					</div>
				</form>
			</div>
		</>
	);
};
export default StepOne;
