import { IoInformationCircleOutline } from "react-icons/io5";

import CardProjectOverview from "@/components/StartProjectForm/CardsStepFinalValidation/CardProjectOverview";
import CardProjectDetails from "@/components/StartProjectForm/CardsStepFinalValidation/CardProjectDetails";
import CardProjectLocationSettingsTags from "@/components/StartProjectForm/CardsStepFinalValidation/CardProjectLocationSettingsTags";
import CardProjectTalents from "@/components/StartProjectForm/CardsStepFinalValidation/CardProjectTalents";

const StepFinalValidation = ({ formInputs, requiredFields, talentNeededProfilePicture, categories, isProjectReadyToSubmit }) => {
	const canSubmitProject = isProjectReadyToSubmit(formInputs);

	const isEmpty = (value) => {
		if (value == null) return true; // null or undefined
		if (typeof value === "string" || Array.isArray(value)) return value.length === 0;
		if (typeof value === "object") return Object.keys(value).length === 0;
		return false;
	};

	const emptyRequiredFields = Object.entries(requiredFields)
		.filter(([fieldKey, fieldValue]) => isEmpty(fieldValue))
		.map(([fieldKey]) => fieldKey);

	const selectedCategory = categories.find((cat) => cat.categoryId === formInputs.selectedCategoryId);
	const selectedSubCategory = selectedCategory?.subCategories.find((sub) => sub.name === formInputs.selectedSubCategory);

	return (
		<>
			<div className="container min-w-full m-auto pr-2 sm:px-4 xl:px-30 text-justify mb-6">
				<h1 className="text-4xl md:text-4xl font-bold mb-8 text-center drop-shadow-md">Review your project</h1>
				<p className="text-center text-lg text-gray-300 mb-4 mx-auto">Take a moment to review all the information before submitting.</p>

				{/* alert for empty fields */}
				{!canSubmitProject && (
					<div className="mb-6 p-4 bg-rose-100 rounded-lg w-2/3 mx-auto">
						<div className="flex items-start gap-3">
							<IoInformationCircleOutline className="h-5 w-5 text-rose-400 flex-shrink-0 mt-0.5" />
							<div>
								<p className="font-medium text-rose-700 mb-1">A few more details needed</p>
								<p className="text-rose-600 text-sm">
									{emptyRequiredFields.length} required field{emptyRequiredFields.length > 1 ? "s" : ""} need your attention.
								</p>
							</div>
						</div>
					</div>
				)}

				<div className="space-y-5">
					{/* Project Overview Card */}
					<CardProjectOverview formInputs={formInputs} selectedCategory={selectedCategory} selectedSubCategory={selectedSubCategory} />
					<CardProjectDetails formInputs={formInputs} />
					<CardProjectLocationSettingsTags formInputs={formInputs} />
					<CardProjectTalents formInputs={formInputs} talentNeededProfilePicture={talentNeededProfilePicture} />
				</div>
			</div>
		</>
	);
};
export default StepFinalValidation;
