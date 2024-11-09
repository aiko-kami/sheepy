import { useState, useRef } from "react";

import { IoPersonAdd, IoAddCircleOutline, IoCloseCircleOutline } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";
import InputField from "@/components/Forms/InputField";

import MembersTable from "@/components/Tables/ProjectEdit/MembersTable";

const TalentsNeeded = ({ project, user }) => {
	const roleList = project.talentsNeeded.map((talent) => talent.role);
	const [formState, setFormState] = useState({
		userUpdater: user.userId,
		projectId: project.projectId,
		projectTalentsNeeded: roleList,
	});

	const inputRef = useRef(null); // Create a reference to the input field
	const [talentInput, setTalentInput] = useState("");
	const [talentError, setTalentError] = useState("");

	const addTalent = () => {
		if (!talentInput) {
			setTalentError("Please enter a talent needed.");
		}
		if (talentInput && formState.projectTalentsNeeded.includes(talentInput)) {
			setTalentError("This talent is already present in the list.");
		}
		if (talentInput && formState.projectTalentsNeeded.length >= 40) {
			setTalentError("You can only add up to 40 talents needed.");
		}
		if (talentInput && !formState.projectTalentsNeeded.includes(talentInput) && formState.projectTalentsNeeded.length < 40) {
			setFormState((prevState) => ({
				...prevState,
				projectTalentsNeeded: [...prevState.projectTalentsNeeded, talentInput],
			}));
			setTalentInput("");
			setTalentError("");
		}
	};

	const removeTalent = (talentToRemove) => {
		setFormState((prevState) => ({
			...prevState,
			projectTalentsNeeded: prevState.projectTalentsNeeded.filter((talent) => talent !== talentToRemove),
		}));
	};

	const handleTalentInputChange = (e) => {
		setTalentError("");
		setTalentInput(e.target.value);
	};

	const handleAddTalent = () => {
		addTalent();
		if (inputRef.current) {
			inputRef.current.focus(); // Focus on the input field after adding the talent
		}
	};

	const onSubmit = (event) => {
		event.preventDefault();
		// Handle form submission
		console.log("🚀 ~ onSubmit ~ The project has been updated:", formState);
	};

	return (
		<>
			{/* Project members */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoPersonAdd className="mr-2 text-2xl" />
				Talents needed
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />
			<form onSubmit={onSubmit}>
				<div className="md:pl-4">
					{/* Project talents */}
					<div className="mb-6 max-w-140 relative">
						{/* Talent input field */}
						<div className="flex items-center">
							<div className="w-full mr-2">
								<InputField inputName="talentsNeeded" inputType="text" label="Talents needed for the project" inputValue={talentInput} onChange={handleTalentInputChange} ref={inputRef} />
							</div>
							<div className="min-w-fit">
								<Button btnProps={{ btnSize: "sm", type: "button", btnColor: "blue", btnRounded: "std", action: handleAddTalent }}>
									<div className="flex">
										Add talent needed <IoAddCircleOutline className="text-xl ml-2" />
									</div>
								</Button>
							</div>
						</div>
						<div className="absolute left-0 top-12 mb-2 min-h-6 text-sm">{talentError && <p className="text-xs text-red-600">{talentError}</p>}</div>
					</div>

					{/* List of talents needed */}
					<div className="mb-6">
						{formState.projectTalentsNeeded.length > 0 && (
							<div className="flex flex-wrap gap-2">
								{formState.projectTalentsNeeded.map((talent, index) => (
									<span key={index} className="flex items-center px-3 pt-0.5 pb-1 mt-1 bg-gray-200 text-gray-800 rounded-full">
										{talent}
										<button type="button" className="ml-1 text-gray-600 hover:text-gray-800 transition duration-150 ease-in-out" onClick={() => removeTalent(talent)}>
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
							Save talents
						</Button>
					</div>
				</div>
			</form>
		</>
	);
};
export default TalentsNeeded;
