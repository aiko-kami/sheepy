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
				<div className="p-6 space-y-4">
					<div>
						<div className="flex items-center gap-2 mb-2">
							<IoFlagOutline className="h-5 w-5 text-blue-600" />
							<h3 className="font-semibold text-gray-900">Project Title</h3>
						</div>
						<div className="ml-7">
							<h2 className="text-xl font-semibold text-gray-900"> {formInputs.projectTitle?.trim() || "___________________________________"}</h2>
						</div>
					</div>
					<div className="grid md:grid-cols-2 gap-6">
						<div>
							<div className="flex items-center gap-2 mb-3">
								<IoPricetagOutline className="h-5 w-5 text-blue-600" />
								<h3 className="font-semibold text-gray-900">Category</h3>
							</div>
							<div className="ml-7">
								<Badge badge={selectedCategory} size={"sm"} clickable={false} />
							</div>
						</div>
						<div>
							<div className="flex items-center gap-2 mb-3">
								<IoPricetagOutline className="h-5 w-5 text-blue-600" />
								<h3 className="font-semibold text-gray-900">Sub-category</h3>
							</div>
							<div className="ml-7">
								<BadgeRounded badge={selectedSubCategory} size={"sm"} clickable={false} />
							</div>
						</div>
					</div>
					<div>
						<div className="flex items-center gap-2 mb-2">
							<IoDocumentTextOutline className="h-5 w-5 text-blue-600" />
							<h3 className="font-semibold text-gray-900">Project Summary</h3>
						</div>
						<div className="ml-7 text-gray-800">
							<p className="leading-relaxed">{formInputs.projectSummary?.trim() || "___________________________________"}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default CardProjectOverview;
