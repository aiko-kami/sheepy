import { IoSparklesSharp } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";
import { TextAreaField } from "@/components/Forms/TextAreaField";

const Motivation = ({ formInputs, onChange }) => {
	return (
		<>
			{/* Creator motivation, project objectives and phases */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoSparklesSharp className="mr-2 text-2xl" />
				Creator motivation, objectives and project phases
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="md:pl-4">
				{/* Creator motivation */}
				<div className="mb-6 xl:mb-8">
					<TextAreaField
						label="Creator motivation (optional):"
						labelStyle="block mb-2"
						inputName="creatorMotivation"
						inputValue={formInputs.creatorMotivation}
						onChange={onChange}
						placeholder="What inspired you to start this project?..."
						maxLength={500}
						rows="4"
						required={true}
					/>
				</div>
				{/* Project objectives */}
				<div className="mb-6 xl:mb-8">
					<TextAreaField
						label="Objectives (optional):"
						labelStyle="block mb-2"
						inputName="projectObjectives"
						inputValue={formInputs.projectObjectives}
						onChange={onChange}
						placeholder="What are the intermediate steps or milestones necessary for your project to succeed?..."
						maxLength={500}
						rows="5"
						required={false}
					/>
				</div>
				{/* Project phases */}
				<div className="mb-8">
					<TextAreaField
						label="Project phases:"
						labelStyle="block mb-2"
						inputName="projectGoal"
						inputValue={formInputs.projectGoal}
						onChange={onChange}
						placeholder="What is the main goal of your project?... (500 characters max)"
						maxLength={500}
						rows="6"
						required={true}
					/>
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
export default Motivation;
