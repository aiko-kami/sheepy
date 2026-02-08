import Link from "next/link";
import { IoHomeOutline, IoRocketOutline, IoArrowRedoOutline } from "react-icons/io5";

import { Badge, BadgeRounded } from "@/components/Badges/Badges";
import { Avatar } from "@/components/Badges/Avatar";
import { Button } from "@/components/Buttons/Buttons";

const StepProjectSubmitted = ({ goToStep, formInputs, categories, talentNeededProfilePicture }) => {
	const selectedCategory = categories.find((cat) => cat.categoryId === formInputs.selectedCategoryId);
	const selectedSubCategory = selectedCategory?.subCategories.find((sub) => sub.name === formInputs.selectedSubCategory);
	const allTags = [...(formInputs.projectTagsExisting || []).map((t) => t.name), ...(formInputs.projectTagsNew || []).map((t) => t.name)];

	return (
		<>
			<div className="flex items-center justify-center pt-4">
				<div className="max-w-4xl mx-auto">
					{/* Hero Icon */}
					<div className="text-center">
						<div className="inline-flex items-center justify-center w-22 h-22 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full shadow-2xl shadow-green-500/25 text-center">
							<IoRocketOutline className="h-11 w-11 text-white" />
						</div>
					</div>

					{/* Title */}
					<h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-green-700 leading-[2.15] pt-4 pb-6 drop-shadow-md text-center">
						Project submitted!
					</h1>

					{/* Main content when user logged */}
					<div className="max-w-3xl mx-auto mb-8 text-lg md:text-xl text-gray-300 leading-relaxed text-center">
						<p>Congratulations on submitting your project!</p>
						<p>You've taken the first step towards bringing your vision to life.</p>
					</div>
					{/* Features Grid */}
					<div className="space-y-6 mb-10">
						{/* Your project card */}
						<div className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 shadow-2xl">
							<div className="flex items-center justify-between mb-4">
								<div className="w-full">
									<h2 className="text-2xl font-bold text-gray-100 mb-4 text-left">{formInputs.projectTitle}</h2>
									<div className="flex items-center justify-between">
										<div className="flex items-center space-x-3">
											<Badge badge={selectedCategory} size={"sm"} clickable={false} />
											<BadgeRounded badge={selectedSubCategory} size={"sm"} clickable={false} />
										</div>
										<div className="flex gap-2 pr-4">
											{Array.isArray(allTags) &&
												allTags.length > 0 &&
												allTags.map((tag, index) => (
													<span key={index} className="inline-flex text-sm items-center px-3 pt-0.5 pb-1 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
														{tag}
													</span>
												))}
										</div>
									</div>
								</div>
								<div className="text-right">
									<div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/25">
										<IoRocketOutline className="h-8 w-8 text-white" />
									</div>
								</div>
							</div>
							<p className="leading-relaxed text-gray-400 text-left mb-6">{formInputs.projectSummary}</p>
							<h3 className="text-lg font-semibold text-gray-100 mb-2 text-left">Talents</h3>

							<div className="grid grid-flow-row xl:grid-cols-3 gap-4">
								{formInputs.talentsNeeded.map((talentNeeded, index) => (
									<div key={index} className="flex items-center gap-3 p-3 bg-sky-200 rounded-lg border border-sky-300">
										<Avatar img={talentNeededProfilePicture} size={"std"} alt={"talent profile picture"} />
										<span className="font-medium text-sky-900">{talentNeeded.talent}</span>
									</div>
								))}
							</div>
						</div>

						{/* What's next */}
						<div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-700/50 rounded-2xl p-8 mb-12">
							<h3 className="text-2xl font-bold text-gray-100 mb-6 flex items-center">
								<IoArrowRedoOutline className="h-6 w-6 mr-3 text-yellow-400" />
								What Happens Next?
							</h3>

							<div className="space-y-6">
								<div className="grid md:grid-cols-2 gap-6">
									<div className="flex items-start space-x-3">
										<div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">1</div>
										<div>
											<h4 className="font-semibold text-gray-100 mb-1">Project Review</h4>
											<p className="text-gray-300 text-sm">We will review your project to ensure it complies with our chart. You'll hear from us within 24 hours.</p>
										</div>
									</div>

									<div className="flex items-start space-x-3">
										<div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">2</div>
										<div>
											<h4 className="font-semibold text-gray-100 mb-1">Collaboration Begins</h4>
											<p className="text-gray-300 text-sm">Start receiving applications or send invitations and begin building your dream project.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="mb-14 text-center">
						<Link href="/">
							<Button
								btnProps={{
									btnSize: "lg",
									type: "button",
									btnColor: "gradientBluePurple",
									btnRounded: "lg",
								}}
							>
								<div className="flex items-center">
									<IoHomeOutline className="text-xl mr-3" />
									Back to Home page
								</div>
							</Button>
						</Link>
					</div>
					{/* Progress Hint */}
					<div className="pb-3 text-center">
						<p className="text-sm text-gray-400">✨ Thank you for your dedication and effort. We're excited to see your project succeed!</p>
					</div>
				</div>
			</div>
		</>
	);
};
export default StepProjectSubmitted;
