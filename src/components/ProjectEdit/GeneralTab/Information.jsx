import { IoDocumentText } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";
import { TextAreaField } from "@/components/Forms/TextAreaField";
import RichTextEditorField from "@/components/Forms/RichTextEditorField/RichTextEditorField";
import { ERRORS } from "@/lib/constants";

const Information = ({ formInputs, onChange, userPermissions }) => {
	return (
		<>
			{/* Project summary, description, goal and creator motivation */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoDocumentText className="mr-2 text-2xl" />
				Project information
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="md:px-4">
				{/* Project summary */}
				<div className="mb-6 xl:mb-8">
					<TextAreaField
						label="Project summary:"
						labelStyle="block"
						inputName="projectSummary"
						inputValue={formInputs.projectSummary}
						onChange={onChange}
						placeholder="Summarize your project in a few sentences... (300 characters max)"
						maxLength={300}
						rows="6"
						required={true}
						disabled={!userPermissions.canEditSummary}
						disabledMessage={!userPermissions.canEditSummary && ERRORS.PROJECT_PERMISSIONS.EDIT_SUMMARY}
					/>
				</div>
				{/* Project description */}
				<div className="mb-6 xl:mb-8">
					<RichTextEditorField
						label="Project description:"
						value={formInputs.projectDescription}
						onChange={(html) => onChange({ target: { name: "projectDescription", value: html } })}
						placeholder="What's the story behind your project?... (10 000 characters max)"
						maxLength={10000}
						rows="10"
						editable={userPermissions.canEditDescription}
						disabledMessage={!userPermissions.canEditDescription && ERRORS.PROJECT_PERMISSIONS.EDIT_DESCRIPTION}
					/>
				</div>
				{/* Project goal */}
				<div className="mb-6 xl:mb-8">
					<TextAreaField
						label="Project goal:"
						labelStyle="block"
						inputName="projectGoal"
						inputValue={formInputs.projectGoal}
						onChange={onChange}
						placeholder="What is the main goal of your project?... (500 characters max)"
						maxLength={500}
						rows="6"
						required={true}
						disabled={!userPermissions.canEditGoal}
						disabledMessage={!userPermissions.canEditGoal && ERRORS.PROJECT_PERMISSIONS.EDIT_GOAL}
					/>
				</div>
				{/* Creator motivation */}
				<div className="mb-6 xl:mb-8">
					<TextAreaField
						label="Creator motivation:"
						labelStyle="block"
						inputName="creatorMotivation"
						inputValue={formInputs.creatorMotivation}
						onChange={onChange}
						placeholder="What inspired you to start this project?..."
						maxLength={500}
						rows="4"
						required={true}
						disabled={!userPermissions.canEditCreatorMotivation}
						disabledMessage={!userPermissions.canEditCreatorMotivation && ERRORS.PROJECT_PERMISSIONS.EDIT_MOTIVATION}
					/>
				</div>

				{(userPermissions.canEditSummary || userPermissions.canEditDescription || userPermissions.canEditGoal || userPermissions.canEditCreatorMotivation) && (
					<div className="flex justify-center">
						<Button
							btnProps={{
								type: "submit",
								name: "action",
								value: "submit-information",
								btnColor: "blue",
								disabled: !userPermissions.canEditSummary && !userPermissions.canEditDescription && !userPermissions.canEditGoal && !userPermissions.canEditCreatorMotivation,
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
export default Information;
