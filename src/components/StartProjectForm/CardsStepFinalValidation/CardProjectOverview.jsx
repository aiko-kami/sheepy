import { IoFlagOutline, IoPricetagOutline, IoDocumentTextOutline, IoStar } from "react-icons/io5";
import { Badge, BadgeRounded } from "@/components/Badges/Badges";

const CardProjectOverview = ({ formInputs, selectedCategory, selectedSubCategory }) => {
	return (
		<>
			<div className="bg-white rounded-lg shadow-lg border-0 overflow-hidden w-2/3 mx-auto">
				<div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
					<h2 className="flex items-center gap-2 text-xl font-semibold">
						<IoStar className="h-6 w-6" />
						Project Overview
					</h2>
				</div>
				<div className="p-6 pe-12 space-y-4">
					<div className="space-y-3">
						<div className="flex items-center gap-2">
							<IoFlagOutline className="h-5 w-5 text-blue-600" />
							<h3 className="font-semibold text-gray-900">
								Project Title
								<span className="text-red-500 ml-1 text-sm">*</span>
							</h3>
						</div>
						<div className="ml-7">
							{formInputs.projectTitle?.trim() ? (
								<h2 className="text-xl font-semibold text-gray-900">{formInputs.projectTitle.trim()}</h2>
							) : (
								<div className="w-9/10 p-3 bg-red-100 border-l-4 border-red-500 rounded-r-md">
									<p className="text-red-700 text-sm font-medium">
										<span className="italic">Required field</span> – Please add Project Title information
									</p>
								</div>
							)}
						</div>
					</div>

					<div className="grid md:grid-cols-2 gap-6">
						<div>
							<div className="flex items-center gap-2 mb-3">
								<IoPricetagOutline className="h-5 w-5 text-blue-600" />
								<h3 className="font-semibold text-gray-900">Category</h3>
							</div>
							<div className="ml-7">
								{selectedCategory ? (
									<Badge badge={selectedCategory} size={"sm"} clickable={false} />
								) : (
									<div className="w-9/10 p-3 bg-red-100 border-l-4 border-red-500 rounded-r-md">
										<p className="text-red-700 text-sm font-medium">
											<span className="italic">Required field</span> – Please add Category information
										</p>
									</div>
								)}
							</div>
						</div>

						<div>
							<div className="flex items-center gap-2 mb-3">
								<IoPricetagOutline className="h-5 w-5 text-blue-600" />
								<h3 className="font-semibold text-gray-900">Sub-category</h3>
							</div>
							<div className="ml-7">
								{selectedSubCategory ? (
									<BadgeRounded badge={selectedSubCategory} size={"sm"} clickable={false} />
								) : (
									<div className="w-9/10 p-3 bg-red-100 border-l-4 border-red-500 rounded-r-md">
										<p className="text-red-700 text-sm font-medium">
											<span className="italic">Required field</span> – Please add Sub-category information
										</p>
									</div>
								)}
							</div>
						</div>
					</div>

					<div className="space-y-3">
						<div className="flex items-center gap-2">
							<IoDocumentTextOutline className="h-5 w-5 text-blue-600" />
							<h3 className="font-semibold text-gray-900">
								Project Summary
								<span className="text-red-500 ml-1 text-sm">*</span>
							</h3>
						</div>
						<div className="ml-7">
							{formInputs.projectSummary?.trim() ? (
								<h2 className="text-xl font-semibold text-gray-900">{formInputs.projectSummary.trim()}</h2>
							) : (
								<div className="w-9/10 p-3 bg-red-100 border-l-4 border-red-500 rounded-r-md">
									<p className="text-red-700 text-sm font-medium">
										<span className="italic">Required field</span> – Please add Project Summary information
									</p>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default CardProjectOverview;
