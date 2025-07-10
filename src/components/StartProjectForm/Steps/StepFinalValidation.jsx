import { DateTime } from "luxon";
import Image from "next/image";
import CardProjectOverview from "@/components/StartProjectForm/CardsStepFinalValidation/CardProjectOverview";
import CardProjectDetails from "@/components/StartProjectForm/CardsStepFinalValidation/CardProjectDetails";
import CardProjectLocationSettingsTags from "@/components/StartProjectForm/CardsStepFinalValidation/CardProjectLocationSettingsTags";
import CardProjectTalents from "@/components/StartProjectForm/CardsStepFinalValidation/CardProjectTalents";

const StepFinalValidation = ({ formInputs, talentNeededProfilePicture, categories, isProjectReadyToSubmit }) => {
	const canSubmitProject = isProjectReadyToSubmit(formInputs);

	const selectedCategory = categories.find((cat) => cat.categoryId === formInputs.selectedCategoryId);
	const selectedSubCategory = selectedCategory?.subCategories.find((sub) => sub.name === formInputs.selectedSubCategory);

	return (
		<>
			<div className="container min-w-full m-auto pr-2 sm:px-4 xl:px-30 text-justify mb-6">
				<h1 className="text-4xl md:text-7xl mb-8 text-center">Review your project</h1>
				<p className="mb-8 text-center">Take a moment to review all the information before submitting. Once you're confident that everything is in order, you can proceed to submit your project.</p>
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
