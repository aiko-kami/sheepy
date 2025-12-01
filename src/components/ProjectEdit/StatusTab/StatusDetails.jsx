import { IoFitness } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";
import { SelectField } from "@/components/Forms/SelectField";
import InputField from "@/components/Forms/InputField";
import { PermissionsErrorPane } from "@/components/Errors/PermissionsError";
import ERRORS from "@/lib/constants/errors";

const StatusDetails = ({ formInputs, onChange, statusesList, userPermissions }) => {
	const optionsList = statusesList.map((item) => ({
		value: item.statusId,
		option: item.status.charAt(0).toUpperCase() + item.status.slice(1),
	}));
	return (
		<>
			{/* Project status */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoFitness className="mr-2 text-2xl" />
				Project status
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="md:px-4">
				<div className="mb-8">
					{!userPermissions.canEditStatus && (
						<div className="mb-4">
							<PermissionsErrorPane messages={ERRORS.PROJECT_EDIT.EDIT_STATUS} />
						</div>
					)}
					<div className="flex flex-col lg:flex-row justify-between">
						{/* Project status input */}
						<div className="mb-6 lg:mb-0 sm:mr-2 w-full">
							<div className="flex-1 sm:min-w-60 max-w-80">
								<div className="text-sm">Project status</div>
								<SelectField inputName="statusId" possibleValues={optionsList} inputValue={formInputs.statusId} onChange={onChange} disabled={!userPermissions.canEditStatus} />
							</div>
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
				{userPermissions.canEditStatus && (
					<div className="flex justify-center">
						<Button
							btnProps={{
								type: "submit",
								name: "action",
								value: "submit-status",
								btnColor: "blue",
								disabled: !userPermissions.canEditStatus,
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
