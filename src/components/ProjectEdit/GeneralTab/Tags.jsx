import { IoPricetag, IoAddCircleOutline, IoCloseCircleOutline } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";
import InputField from "@/components/Forms/InputField";
import { useRef } from "react";

const Tags = ({ formState, tagInput, addTag, removeTag, handleTagInputChange, tagError }) => {
	const inputRef = useRef(null); // Create a reference to the input field

	const handleAddTag = () => {
		addTag();
		if (inputRef.current) {
			inputRef.current.focus(); // Focus on the input field after adding the tag
		}
	};
	return (
		<>
			{/* Project tags */}
			<div className="mb-8 lg:mb-12">
				<h2 className="flex items-center text-xl mb-3 sm:ml-4">
					<IoPricetag className="mr-2 text-2xl" />
					Project tags
				</h2>
				<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />
				{/* Project tags */}
				<div className="mb-8 max-w-140 relative">
					{/* Tag input field */}
					<div className="flex items-center">
						<div className="w-full mr-2 mb-6">
							<InputField inputName="projectTags" inputType="text" label="Project tags (optional)" inputValue={tagInput} onChange={handleTagInputChange} ref={inputRef} />
						</div>
						<div className="min-w-fit">
							<Button btnProps={{ btnSize: "sm", type: "button", btnColor: "blue", btnRounded: "std", action: handleAddTag }}>
								<div className="flex">
									Add tag <IoAddCircleOutline className="text-xl ml-2" />
								</div>
							</Button>
						</div>
					</div>
					<div className="absolute left-0 top-12 mb-2 min-h-6 text-sm">{tagError && <p className="text-xs text-red-600">{tagError}</p>}</div>

					{/* List of tags */}
					<div className="mt-2">
						{formState.projectTags.length > 0 && (
							<div className="flex flex-wrap gap-2">
								{formState.projectTags.map((tag, index) => (
									<span key={index} className="flex items-center px-3 pt-0.5 pb-1 mt-1 bg-gray-200 text-gray-800 rounded-full">
										{tag}
										<button type="button" className="ml-1 text-gray-600 hover:text-gray-800 transition duration-150 ease-in-out" onClick={() => removeTag(tag)}>
											<IoCloseCircleOutline className="text-lg" title="Remove tag" />
										</button>
									</span>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};
export default Tags;
