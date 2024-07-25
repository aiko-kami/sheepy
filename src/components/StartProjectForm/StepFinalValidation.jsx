import { DateTime } from "luxon";
import Image from "next/image";

const StepFinalValidation = ({ formInputs, talentNeededProfilePicture }) => {
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
			<div className="container min-w-full m-auto pr-2 sm:px-4 xl:px-30 text-justify">
				<h1 className="text-4xl md:text-7xl mb-8 text-center">Final step</h1>
				<p className="mb-8">
					Before you submit your project, please take a moment to review all the information you have provided. Carefully check each field for any errors or omissions. Make sure that your project
					description is clear, your goals are well-defined, and all necessary details are included. This final review is crucial to ensure that your project has the best chance of success. Once
					you're confident that everything is in order, you can proceed to submit your project. Good luck!
				</p>
				<div className="sm:px-6 xl:px-14">
					<div className="mb-6">
						<h2 className="text-xl font-bold mb-2">Project title</h2>
						<p className="pl-4 sm:pl-10 xl:pl-60">{formInputs.projectTitle}</p>
					</div>
					<div className="mb-6">
						<h2 className="text-xl font-bold mb-2">Category</h2>
						<p className="pl-4 sm:pl-10 xl:pl-60">{formInputs.selectedCategory}</p>
					</div>
					<div className="mb-6">
						<h2 className="text-xl font-bold mb-2">Sub-category</h2>
						<p className="pl-4 sm:pl-10 xl:pl-60">{formInputs.selectedSubCategory}</p>
					</div>
					<div className="mb-6">
						<h2 className="text-xl font-bold mb-2">Project summary</h2>
						<p className="pl-4 sm:pl-10 xl:pl-60">{formInputs.projectSummary}</p>
					</div>
					<div className="mb-6">
						<h2 className="text-xl font-bold mb-2">Project goal</h2>
						<p className="pl-4 sm:pl-10 xl:pl-60">{formInputs.projectGoal}</p>
					</div>
					<div className="mb-6">
						<h2 className="text-xl font-bold mb-2">Project description</h2>
						<p className="pl-4 sm:pl-10 xl:pl-60">{formInputs.projectDescription}</p>
					</div>
					<div className="mb-6">
						<h2 className="text-xl font-bold mb-2">Creator motivations</h2>
						<p className="pl-4 sm:pl-10 xl:pl-60">{formInputs.creatorMotivations}</p>
					</div>
					<div className="mb-6">
						<h2 className="text-xl font-bold mb-2">Project objectives</h2>
						<p className="pl-4 sm:pl-10 xl:pl-60">{formInputs.projectObjectives}</p>
					</div>
					<div className="mb-6">
						<h2 className="text-xl font-bold mb-2">Project online Only</h2>
						<p className="pl-4 sm:pl-10 xl:pl-60">{formInputs.locationOnlineOnly ? "Yes" : "No"}</p>
					</div>
					{!formInputs.locationOnlineOnly && (
						<>
							<div className="mb-6">
								<h2 className="text-xl font-bold mb-2">Country</h2>
								<p className="pl-4 sm:pl-10 xl:pl-60">{formInputs.locationCountry}</p>
							</div>
							<div className="mb-6">
								<h2 className="text-xl font-bold mb-2">City</h2>
								<p className="capitalize pl-4 sm:pl-10 xl:pl-60">{formInputs.locationCity}</p>
							</div>
						</>
					)}
					<div className="mb-6">
						<h2 className="text-xl font-bold mb-2">Project visibility</h2>
						<p className="capitalize pl-4 sm:pl-10 xl:pl-60">{formInputs.projectVisibility}</p>
					</div>
					<div className="mb-6">
						<h2 className="text-xl font-bold mb-2">Start date</h2>
						<p className="pl-4 sm:pl-10 xl:pl-60">{formatDate(formInputs.projectStartDate)}</p>
					</div>
					<div className="mb-6">
						<h2 className="text-xl font-bold mb-2">Tags</h2>
						{formInputs.tags.length > 0 ? (
							<div className="pl-4 sm:pl-10 xl:pl-60 flex flex-wrap gap-2">
								{formInputs.tags.map((tag, index) => (
									<span key={index} className="flex items-center px-3 pt-0.5 pb-1 mt-1 bg-gray-200 text-gray-800 rounded-full">
										{tag}
									</span>
								))}
							</div>
						) : (
							<p>"No tags added"</p>
						)}
					</div>
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
