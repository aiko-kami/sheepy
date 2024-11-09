import { IoEyeSharp } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";
import { SelectField } from "@/components/Forms/SelectField";

const Visibility = ({ formState, onChange }) => {
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
				<div className="max-w-50 mb-6 xl:mb-8">
					<div className="text-sm">Project visibility</div>
					<SelectField inputName="projectVisibility" possibleValues={optionsList} inputValue={formState.projectVisibility} onChange={onChange} />
				</div>
				<div className="flex justify-center">
					<Button
						btnProps={{
							type: "submit",
							btnColor: "blue",
						}}
					>
						Update visibility
					</Button>
				</div>
			</div>
		</>
	);
};
export default Visibility;
