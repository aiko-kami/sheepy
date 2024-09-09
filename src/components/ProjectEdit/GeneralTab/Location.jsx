import { IoLocationSharp, IoPushOutline } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";
import InputField from "@/components/Forms/InputField";

const Location = ({ formState, onChange }) => {
	return (
		<>
			{/* Project location */}
			<div className="mb-12">
				<h2 className="flex items-center text-xl mb-3 sm:ml-4">
					<IoLocationSharp className="mr-2 text-2xl" />
					Project location
				</h2>
				<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-3 xl:mb-9" />
				{/* Project location */}
				<div className="mb-8">
					<InputField inputName="projectLocationCountry" inputType="text" label="Project country" inputValue={formState.projectLocationCountry} onChange={onChange} />
				</div>
				<div className="mb-8">
					<InputField inputName="projectLocationCity" inputType="text" label="City" inputValue={formState.projectLocationCity} onChange={onChange} />
				</div>
			</div>
		</>
	);
};
export default Location;
