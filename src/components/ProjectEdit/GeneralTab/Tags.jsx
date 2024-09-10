import { IoLocationSharp, IoPushOutline } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";
import InputField from "@/components/Forms/InputField";

const Tags = ({ formState, onChange }) => {
	return (
		<>
			{/* Project tags */}
			<div className="mb-8 lg:mb-12">
				<h2 className="flex items-center text-xl mb-3 sm:ml-4">
					<IoLocationSharp className="mr-2 text-2xl" />
					Project tags
				</h2>
				<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-3 xl:mb-9" />
				{/* Project tags */}
				<div className="mb-8">
					<InputField inputName="projectTags" inputType="text" label="Project tags" inputValue={formState.projectTags} onChange={onChange} />
				</div>
				<div className="mb-8">
					<InputField inputName="projectLocationCity" inputType="text" label="City" inputValue={formState.projectLocationCity} onChange={onChange} />
				</div>
			</div>
		</>
	);
};
export default Tags;
