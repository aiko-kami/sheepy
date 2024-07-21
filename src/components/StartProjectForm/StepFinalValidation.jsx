import { DateTime } from "luxon";

const StepFinalValidation = ({ formInputs }) => {
	const formatDate = (date) => {
		if (DateTime.isDateTime(date)) {
			return date.toLocaleString(DateTime.DATE_FULL);
		}
		if (date instanceof Date && !isNaN(date)) {
			return date.toDateString();
		}
		return "Not set";
	};

	return (
		<>
			<div className="container min-w-full m-auto lg:px-8 text-justify">
				<h1 className="text-4xl md:text-7xl pt-4 md:pt-6 mb-8 md:mb-20 text-center">Final step</h1>
				<p className="mb-20">
					Before you submit your project, please take a moment to review all the information you have provided. Carefully check each field for any errors or omissions. Make sure that your project
					description is clear, your goals are well-defined, and all necessary details are included. This final review is crucial to ensure that your project has the best chance of success. Once
					you're confident that everything is in order, you can proceed to submit your project. Good luck!
				</p>
				<div className="mb-8">
					<h2 className="text-3xl font-bold mb-4">Project Details</h2>
					<p>
						<strong>Project Title:</strong> {formInputs.projectTitle}
					</p>
					<p>
						<strong>Category:</strong> {formInputs.selectedCategory}
					</p>
					<p>
						<strong>Sub-Category:</strong> {formInputs.selectedSubCategory}
					</p>
				</div>

				<div className="mb-8">
					<h2 className="text-3xl font-bold mb-4">Project Summary</h2>
					<p>{formInputs.projectSummary}</p>
				</div>

				<div className="mb-8">
					<h2 className="text-3xl font-bold mb-4">Project Goal</h2>
					<p>{formInputs.projectGoal}</p>
				</div>

				<div className="mb-8">
					<h2 className="text-3xl font-bold mb-4">Project Description</h2>
					<p>
						<strong>Project Description:</strong> {formInputs.projectDescription}
					</p>
					<p>
						<strong>Creator Motivations:</strong> {formInputs.creatorMotivations}
					</p>
					<p>
						<strong>Project Objectives:</strong> {formInputs.projectObjectives}
					</p>
				</div>

				<div className="mb-8">
					<h2 className="text-3xl font-bold mb-4">Location</h2>
					<p>
						<strong>Online Only:</strong> {formInputs.locationOnlineOnly ? "Yes" : "No"}
					</p>
					<p>
						<strong>Country:</strong> {formInputs.locationCountry}
					</p>
					<p>
						<strong>City:</strong> {formInputs.locationCity}
					</p>
				</div>

				<div className="mb-8">
					<h2 className="text-3xl font-bold mb-4">Project Visibility</h2>
					<p>
						<strong>Visibility:</strong> {formInputs.projectVisibility}
					</p>
				</div>

				<div className="mb-8">
					<h2 className="text-3xl font-bold mb-4">Start Date</h2>
					<p>
						<strong>Start Date:</strong> {formatDate(formInputs.projectStartDate)}
					</p>
				</div>

				<div className="mb-8">
					<h2 className="text-3xl font-bold mb-4">Tags</h2>
					<p>{formInputs.tags.length > 0 ? formInputs.tags.join(", ") : "No tags added"}</p>
				</div>

				<div className="mb-8">
					<h2 className="text-3xl font-bold mb-4">Talents Needed</h2>
					<p>{formInputs.talentsNeeded.length > 0 ? formInputs.talentsNeeded.join(", ") : "No talents specified"}</p>
				</div>
			</div>
		</>
	);
};
export default StepFinalValidation;
