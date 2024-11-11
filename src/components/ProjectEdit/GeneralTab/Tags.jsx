import { IoPricetag, IoAddCircleOutline, IoCloseCircleOutline } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";
import InputField from "@/components/Forms/InputField";
import { useState, useRef } from "react";

const Tags = ({ formState, setFormState }) => {
	const inputRef = useRef(null); // Create a reference to the input field

	const [tagInput, setTagInput] = useState("");
	const [tagError, setTagError] = useState("");

	const addTag = () => {
		if (!tagInput) {
			setTagError("Please enter a tag.");
		}
		if (tagInput && formState.projectTags.includes(tagInput)) {
			setTagError("This tag is already present in the list.");
		}
		if (tagInput && formState.projectTags.length >= 8) {
			setTagError("You can only add up to 8 tags.");
		}
		if (tagInput && !formState.projectTags.includes(tagInput) && formState.projectTags.length < 8) {
			setFormState((prevState) => ({
				...prevState,
				projectTags: [...prevState.projectTags, tagInput],
			}));
			setTagInput("");
			setTagError("");
		}
	};

	const removeTag = (tagToRemove) => {
		setFormState((prevState) => ({
			...prevState,
			projectTags: prevState.projectTags.filter((tag) => tag !== tagToRemove),
		}));
	};

	const handleTagInputChange = (e) => {
		setTagError("");
		setTagInput(e.target.value);
	};

	const handleAddTag = () => {
		addTag();
		if (inputRef.current) {
			inputRef.current.focus(); // Focus on the input field after adding the tag
		}
	};
	return (
		<>
			{/* Project tags */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoPricetag className="mr-2 text-2xl" />
				Project tags
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="md:pl-4">
				{/* Project tags */}
				<div className="mb-6 max-w-140 relative">
					{/* Tag input field */}
					<div className="flex items-center">
						<div className="w-full mr-2">
							<InputField inputName="projectTags" inputType="text" label="Project tags" inputValue={tagInput} onChange={handleTagInputChange} ref={inputRef} />
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
				</div>

				{/* List of tags */}
				<div className="mb-8">
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
		</>
	);
};
export default Tags;
