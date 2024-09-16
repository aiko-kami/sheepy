import { IoFitness } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";
import { SelectField } from "@/components/Forms/SelectField";
import InputField from "@/components/Forms/InputField";

const StatusDetails = ({ formState, onChange }) => {
	const optionsList = [
		{ value: "draft", option: "Draft" },
		{ value: "submitted", option: "Submitted" },
		{ value: "active", option: "Active" },
		{ value: "on hold", option: "On hold" },
		{ value: "completed", option: "Completed" },
		{ value: "archived", option: "Archived" },
		{ value: "cancelled", option: "Cancelled" },
	];

	return (
		<>
			{/* Project status */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoFitness className="mr-2 text-2xl" />
				Project status
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="md:pl-4">
				{/* Project status input */}
				<div className="max-w-50 mb-6 xl:mb-8">
					<div className="text-sm">Select new status:</div>
					<SelectField inputName="projectStatus" possibleValues={optionsList} inputValue={formState.projectStatus} label="New status" onChange={onChange} />
				</div>
				{/* Project status reason */}
				<div className="max-w-160 mb-6 xl:mb-8">
					<InputField inputName="statusReason" inputType="text" label="Reason to change project status" inputValue={formState.statusReason} onChange={onChange} />
				</div>
				<div className="flex justify-center">
					<Button
						btnProps={{
							type: "submit",
							btnColor: "blue",
						}}
					>
						Update status
					</Button>
				</div>
			</div>
		</>
	);
};
export default StatusDetails;
