import { DateTime } from "luxon";
import Image from "next/image";
import CardProjectOverview from "@/components/StartProjectForm/CardsStepFinalValidation/CardProjectOverview";
import CardProjectDetails from "@/components/StartProjectForm/CardsStepFinalValidation/CardProjectDetails";
import CardProjectLocationSettingsTags from "@/components/StartProjectForm/CardsStepFinalValidation/CardProjectLocationSettingsTags";

const StepFinalValidation = ({ formInputs, talentNeededProfilePicture, categories }) => {
	const formatDate = (date) => {
		if (DateTime.isDateTime(date)) {
			return date.toLocaleString(DateTime.DATE_FULL);
		}
		if (date instanceof Date && !isNaN(date)) {
			return date.toDateString();
		}
		return "Not set";
	};

	const selectedCategory = categories.find((cat) => cat.categoryId === formInputs.selectedCategoryId);
	const selectedSubCategory = selectedCategory?.subCategories.find((sub) => sub.name === formInputs.selectedSubCategory);

	return (
		<>
			<div className="container min-w-full m-auto pr-2 sm:px-4 xl:px-30 text-justify">
				<h1 className="text-4xl md:text-7xl mb-8 text-center">Review your project</h1>
				<p className="mb-8 text-center">Take a moment to review all the information before submitting. Once you're confident that everything is in order, you can proceed to submit your project.</p>
				<div className="sm:px-6 xl:px-14 space-y-5">
					{/* Project Overview Card */}
					<CardProjectOverview formInputs={formInputs} selectedCategory={selectedCategory} selectedSubCategory={selectedSubCategory} />
					<CardProjectDetails formInputs={formInputs} />
					<CardProjectLocationSettingsTags formInputs={formInputs} />
					<div className="mb-6">
						<h2 className="text-xl font-bold mb-2">Talents needed</h2>
						{formInputs.talentsNeeded.length > 0 ? (
							<div className="min-h-32">
								{formInputs.talentsNeeded.length > 0 && (
									<div className="flex flex-col gap-2">
										{formInputs.talentsNeeded.map((talent, index) => (
											<div key={index} className="flex items-center p-2">
												<span className="flex items-center">
													<Image src={talentNeededProfilePicture} className="object-cover rounded-full w-10 h-10 mr-3" alt="talent profile picture" height={0} width={0} sizes="100vw" />
													{talent}
												</span>
											</div>
										))}
									</div>
								)}
							</div>
						) : (
							<p>"No talents specified"</p>
						)}
					</div>
				</div>
			</div>
		</>
	);
};
export default StepFinalValidation;
