import Image from "next/image";
import { IoDocumentText, IoDocumentTextOutline, IoHeartOutline, IoCompassOutline, IoTrailSignOutline } from "react-icons/io5";

const CardProjectDetails = ({ formInputs }) => {
	return (
		<>
			<div className="bg-white rounded-lg shadow-lg border-0 overflow-hidden w-7/9 mx-auto">
				<div className="bg-gray-200 p-6">
					<h2 className="flex items-center gap-2 text-xl font-semibold text-gray-800">
						<IoDocumentText className="h-6 w-6 text-gray-400" />
						Project Details
					</h2>
				</div>
				<div className="p-6 space-y-4">
					<div>
						<div className="flex items-center gap-2 mb-2">
							<IoCompassOutline className="h-5 w-5 text-blue-600" />
							<h3 className="font-semibold text-gray-900">Project Goal</h3>
						</div>
						<div className="ml-8 text-gray-800">
							<p className="leading-relaxed">{formInputs.projectGoal?.trim() || "___________________________________"}</p>
						</div>
					</div>
					<div>
						<div className="flex items-center gap-2 mb-2">
							<IoDocumentTextOutline className="h-5 w-5 text-blue-600" />
							<h3 className="font-semibold text-gray-900">Description</h3>
						</div>
						<div className="ml-8 text-gray-800">
							<p className="leading-relaxed">{formInputs.projectDescription?.trim() || "___________________________________"}</p>
						</div>
					</div>
					<div>
						<div className="flex items-center gap-2 mb-2">
							<IoHeartOutline className="h-5 w-5 text-blue-600" />
							<h3 className="font-semibold text-gray-900">Creator Motivations</h3>
						</div>
						<div className="ml-8 text-gray-800">
							<p className="leading-relaxed">{formInputs.creatorMotivations?.trim() || "___________________________________"}</p>
						</div>
					</div>
					<div>
						<div className="flex items-center gap-2 mb-2">
							<IoTrailSignOutline className="h-5 w-5 text-blue-600" />
							<h3 className="font-semibold text-gray-900">Objectives</h3>
						</div>
						<div className="ml-8 text-gray-800">
							{Array.isArray(formInputs.projectObjectives) && formInputs.projectObjectives.length > 0 ? (
								<ul className="list-disc list-inside space-y-1">
									{formInputs.projectObjectives.map((objective, index) => (
										<li key={index}>{objective.trim()}</li>
									))}
								</ul>
							) : (
								<p className="text-gray-600 italic">N/A</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default CardProjectDetails;
