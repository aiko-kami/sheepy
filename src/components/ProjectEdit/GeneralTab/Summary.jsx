import { IoDocumentText } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";
import { TextAreaField } from "@/components/Forms/TextAreaField";

const Summary = ({ formInputs, onChange, userPermissions }) => {
	return (
		<>
			{/* Project summary, description and goals */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoDocumentText className="mr-2 text-2xl" />
				Project summary, description and goals
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="md:pl-4">
				{/* Project summary */}
				<div className="mb-6 xl:mb-8">
					<TextAreaField
						label="Project summary:"
						labelStyle="block mb-2"
						inputName="projectSummary"
						inputValue={formInputs.projectSummary}
						onChange={onChange}
						placeholder="Summarize your project in a few sentences... (300 characters max)"
						maxLength={300}
						rows="6"
						required={true}
						disabled={!userPermissions.canEditSummary}
					/>
					{!userPermissions.canEditSummary && <p className="text-xs italic text-pink-700 mt-1 ml-1">You do not have permission to edit the project summary</p>}
				</div>
				{/* Project description */}
				<div className="mb-6 xl:mb-8">
					<TextAreaField
						label="Project description:"
						labelStyle="block mb-2"
						inputName="projectDescription"
						inputValue={formInputs.projectDescription}
						onChange={onChange}
						placeholder="What's the story behind your project?... (10 000 characters max)"
						maxLength={10000}
						rows="20"
						required={true}
						disabled={!userPermissions.canEditDescription}
					/>
					{!userPermissions.canEditDescription && <p className="text-xs italic text-pink-700 mt-1 ml-1">You do not have permission to edit the project description</p>}
				</div>
				{/* Project goals */}
				<div className="mb-8">
					<TextAreaField
						label="Project goal:"
						labelStyle="block mb-2"
						inputName="projectGoal"
						inputValue={formInputs.projectGoal}
						onChange={onChange}
						placeholder="What is the main goal of your project?... (500 characters max)"
						maxLength={500}
						rows="6"
						required={true}
						disabled={!userPermissions.canEditGoal}
					/>
					{!userPermissions.canEditGoal && <p className="text-xs italic text-pink-700 mt-1 ml-1">You do not have permission to edit the project goal</p>}
				</div>
				{(userPermissions.canEditSummary || userPermissions.canEditDescription || userPermissions.canEditGoal) && (
					<div className="flex justify-center">
						<Button
							btnProps={{
								type: "submit",
								btnColor: "blue",
								disabled: !userPermissions.canEditSummary && !userPermissions.canEditDescription && !userPermissions.canEditGoal,
							}}
						>
							Save project
						</Button>
					</div>
				)}
			</div>
		</>
	);
};
export default Summary;
