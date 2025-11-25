import { IoFitness } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";
import DatePickerField from "@/components/Forms/DatePickerFieldNew";
import { SelectField } from "@/components/Forms/SelectField";
import InputField from "@/components/Forms/InputField";

const StatusDetails = ({ formInputs, onChange, handleStartDateChange, userPermissions }) => {
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
				<div className="mb-8 max-w-170">
					<div className="flex flex-col lg:flex-row justify-between">
						{/* Project status input */}
						<div className="mb-6 lg:mb-0 sm:mr-2">
							<div className="flex-1 sm:min-w-60 max-w-80">
								<div className="text-sm">Project status</div>
								<SelectField inputName="projectStatus" possibleValues={optionsList} inputValue={formInputs.projectStatus} onChange={onChange} disabled={!userPermissions.canEditStatus} />
							</div>
							{!userPermissions.canEditStatus && <p className="text-xs italic text-pink-700 mt-1">You do not have permission to edit the project status</p>}
						</div>

						{/* Project start date input */}
						<div>
							<div className="flex-1">
								<div className="text-sm">Project start date</div>
								<DatePickerField value={formInputs.projectStartDate} label={"Select a start date"} onChange={handleStartDateChange} disabled={!userPermissions.canEditStartDate} />
							</div>
							{!userPermissions.canEditStartDate && <p className="text-xs italic text-pink-700 mt-1">You do not have permission to edit the project start date</p>}
						</div>
					</div>
				</div>

				{/* Project status reason */}
				{userPermissions.canEditStatus && (
					<div className="max-w-180 mb-8">
						<InputField
							inputName="statusReason"
							inputType="text"
							label="Reason to change project status"
							inputValue={formInputs.statusReason}
							onChange={onChange}
							disabled={!userPermissions.canEditStatus}
						/>
					</div>
				)}
				{(userPermissions.canEditStatus || userPermissions.canEditStartDate) && (
					<div className="flex justify-center">
						<Button
							btnProps={{
								type: "submit",
								btnColor: "blue",
								disabled: !userPermissions.canEditStatus && !userPermissions.canEditStartDate,
							}}
						>
							Update status
						</Button>
					</div>
				)}
			</div>
		</>
	);
};
export default StatusDetails;
