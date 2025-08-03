import { IoDocumentText, IoDocumentTextOutline, IoHeartOutline, IoCompassOutline, IoTrailSignOutline } from "react-icons/io5";

const CardProjectDetails = ({ formInputs }) => {
	return (
		<>
			<div className="bg-white rounded-lg shadow-lg border-0 overflow-hidden w-2/3 mx-auto">
				<div className="bg-gray-200 p-6">
					<h2 className="flex items-center gap-2 text-xl font-semibold text-gray-800">
						<IoDocumentText className="h-6 w-6 text-blue-600" />
						Project Details
					</h2>
				</div>
				<div className="p-6 pe-12 space-y-4">
					<div className="space-y-3">
						<div className="flex items-center gap-2">
							<IoCompassOutline className="h-5 w-5 text-blue-600" />
							<h3 className="font-semibold text-gray-900">Project Goal</h3>
						</div>
						<div className="ml-7">
							{formInputs.projectGoal?.trim() ? (
								<p className="leading-relaxed text-gray-800">{formInputs.projectGoal.trim()}</p>
							) : (
								<div className="w-9/10 p-3 bg-red-100 border-l-4 border-red-500 rounded-r-md">
									<p className="text-red-700 text-sm font-medium">
										<span className="italic">Required field</span> – Please add Project Goal information
									</p>
								</div>
							)}
						</div>
					</div>

					<div className="space-y-3">
						<div className="flex items-center gap-2">
							<IoDocumentTextOutline className="h-5 w-5 text-blue-600" />
							<h3 className="font-semibold text-gray-900">Description</h3>
						</div>
						<div className="ml-7">
							{formInputs.projectDescription?.trim() ? (
								<p className="leading-relaxed text-gray-800">{formInputs.projectDescription.trim()}</p>
							) : (
								<div className="w-9/10 p-3 bg-red-100 border-l-4 border-red-500 rounded-r-md">
									<p className="text-red-700 text-sm font-medium">
										<span className="italic">Required field</span> – Please add Project Description information
									</p>
								</div>
							)}
						</div>
					</div>

					<div className="space-y-3">
						<div className="flex items-center gap-2">
							<IoHeartOutline className="h-5 w-5 text-blue-600" />
							<h3 className="font-semibold text-gray-900">Creator Motivations</h3>
						</div>
						<div className="ml-7">
							{formInputs.creatorMotivations?.trim() ? (
								<p className="leading-relaxed text-gray-800">{formInputs.creatorMotivations.trim()}</p>
							) : (
								<div className="w-9/10 p-3 bg-teal-100 border-l-4 border-teal-500 rounded-r-md">
									<p className="text-teal-700 text-sm font-medium">
										<span className="italic">Optional field</span> – You can add this later
									</p>
								</div>
							)}
						</div>
					</div>

					<div className="space-y-3">
						<div className="flex items-center gap-2">
							<IoTrailSignOutline className="h-5 w-5 text-blue-600" />
							<h3 className="font-semibold text-gray-900">Objectives</h3>
						</div>
						<div className="ml-7 flex gap-1">
							{Array.isArray(formInputs.projectObjectives) && formInputs.projectObjectives.length > 0 ? (
								formInputs.projectObjectives.map((objective, index) => (
									<span key={index} className="inline-flex items-center px-3 pt-0.5 pb-1 mt-1 rounded-full bg-purple-100 text-purple-800 border border-purple-200">
										{objective}
									</span>
								))
							) : (
								<div className="w-9/10 p-3 bg-teal-100 border-l-4 border-teal-500 rounded-r-md">
									<p className="text-teal-700 text-sm font-medium">
										<span className="italic">Optional field</span> – You can add this later
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
export default CardProjectDetails;
