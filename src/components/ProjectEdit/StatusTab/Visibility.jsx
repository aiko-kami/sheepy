import { IoEyeSharp } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";
import DatePickerField from "@/components/Forms/DatePickerFieldNew";
import { SelectField } from "@/components/Forms/SelectField";
import { PermissionsErrorPane } from "@/components/Errors/PermissionsError";
import ERRORS from "@/lib/constants/errors";

const Visibility = ({ formInputs, onChange, handleStartDateChange, userPermissions }) => {
	const optionsList = [
		{ value: "public", option: "Public" },
		{ value: "private", option: "Private" },
	];

	userPermissions.canEditVisibility = true;
	userPermissions.canEditStartDate = false;

	const messages = [];
	if (!userPermissions.canEditVisibility) messages.push(ERRORS.PROJECT_EDIT.EDIT_VISIBILITY);
	if (!userPermissions.canEditStartDate) messages.push(ERRORS.PROJECT_EDIT.EDIT_START_DATE);

	return (
		<>
			{/* Project visibility */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoEyeSharp className="mr-2 text-2xl" />
				Project visibility
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="md:px-4">
				<div className="mb-8">
					{(!userPermissions.canEditVisibility || !userPermissions.canEditStartDate) && (
						<div className="mb-4">
							<PermissionsErrorPane messages={messages} />
						</div>
					)}

					<div className="flex flex-col lg:flex-row justify-between max-w-150">
						{/* Project visibility input */}
						<div className="mb-6 lg:mb-0 sm:mr-2">
							<div className="flex-1 sm:min-w-60 max-w-70">
								<div className="text-sm">Project visibility</div>
								<SelectField inputName="projectVisibility" possibleValues={optionsList} inputValue={formInputs.projectVisibility} onChange={onChange} disabled={!userPermissions.canEditVisibility} />
							</div>
						</div>

						{/* Project start date input */}
						<div>
							<div className="flex-1">
								<div className="text-sm mb-2">Project start date</div>
								<DatePickerField value={formInputs.projectStartDate} label={"Select a start date"} onChange={handleStartDateChange} disabled={!userPermissions.canEditStartDate} />
							</div>
						</div>
					</div>
				</div>
				{userPermissions.canEditVisibility && (
					<div className="flex justify-center">
						<Button
							btnProps={{
								type: "submit",
								name: "action",
								value: "submit-visibility",
								btnColor: "blue",
								disabled: !userPermissions.canEditVisibility,
							}}
						>
							Update project
						</Button>
					</div>
				)}
			</div>
		</>
	);
};
export default Visibility;
