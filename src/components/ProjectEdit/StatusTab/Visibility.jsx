import { IoEyeSharp } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";
import { SelectField } from "@/components/Forms/SelectField";

const Visibility = ({ formInputs, onChange, userPermissions }) => {
	const optionsList = [
		{ value: "public", option: "Public" },
		{ value: "private", option: "Private" },
	];

	return (
		<>
			{/* Project visibility */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoEyeSharp className="mr-2 text-2xl" />
				Project visibility
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="md:pl-4">
				{/* Project visibility input */}
				<div className="mb-8">
					<div className="max-w-50">
						<div className="text-sm">Project visibility</div>
						<SelectField inputName="projectVisibility" possibleValues={optionsList} inputValue={formInputs.projectVisibility} onChange={onChange} disabled={!userPermissions.canEditVisibility} />
					</div>
					{!userPermissions.canEditVisibility && <p className="text-xs italic text-pink-700 mt-1">You do not have permission to edit the project visibility</p>}
				</div>
				{userPermissions.canEditVisibility && (
					<div className="flex justify-center">
						<Button
							btnProps={{
								type: "submit",
								btnColor: "blue",
								disabled: !userPermissions.canEditVisibility,
							}}
						>
							Update visibility
						</Button>
					</div>
				)}
			</div>
		</>
	);
};
export default Visibility;
