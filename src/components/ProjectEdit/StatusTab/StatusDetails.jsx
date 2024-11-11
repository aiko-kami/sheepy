import { IoFitness } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";
import DatePickerField from "@/components/Forms/DatePickerField";
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
				<div className="mb-8 max-w-130">
					<div className="flex flex-col lg:flex-row justify-between">
						{/* Project status input */}
						<div className="flex-1 mb-6 lg:mb-0 max-w-60 sm:mr-2">
							<div className="text-sm">Project status</div>
							<SelectField inputName="projectStatus" possibleValues={optionsList} inputValue={formState.projectStatus} onChange={onChange} />
						</div>

						{/* Project start date input */}
						<div className="flex-1 max-w-60">
							<div className="text-sm">Project start date</div>
							<DatePickerField value={formState.projectStartDate} onChange={onChange} />
						</div>
					</div>
				</div>

				{/* Project status reason */}
				<div className="max-w-180 mb-6 xl:mb-8">
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
