import { IoPricetag } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";
import TagInputField from "@/components/Forms/TagInputField/TagInputField";

const Tags = ({ formInputs, setFormInputs, tagsList = [] }) => {
	return (
		<div>
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoPricetag className="mr-2 text-2xl" />
				Project tags
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="md:pl-4">
				<div className="mb-8">
					<TagInputField formInputs={formInputs} setFormInputs={setFormInputs} tagsList={tagsList} />
				</div>
				<div className="flex justify-center">
					<Button
						btnProps={{
							type: "submit",
							btnColor: "blue",
						}}
					>
						Save project
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Tags;
