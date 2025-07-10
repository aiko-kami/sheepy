import { DateTime } from "luxon";

import { IoCalendarOutline, IoGlobeOutline, IoSparkles, IoLocationOutline, IoEyeOutline, IoEyeOffOutline, IoTimeOutline, IoPricetagsOutline } from "react-icons/io5";

const CardProjectLocationSettingsTags = ({ formInputs }) => {
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
			{/* Project Overview Card */}
			<div className="bg-white rounded-lg shadow-lg border-0 overflow-hidden w-2/3 mx-auto">
				<div className="bg-gray-200 p-6">
					<h2 className="flex items-center gap-2 text-xl font-semibold text-gray-800">
						<IoSparkles className="h-6 w-6 text-blue-600" />
						Location & Settings
					</h2>
				</div>
				<div className="p-6 space-y-4">
					<div>
						<div className="flex items-center gap-2 mb-2">
							<IoLocationOutline className="h-5 w-5 text-blue-600" />
							<h3 className="font-semibold text-gray-900">Project Location</h3>
						</div>
						<div className="ml-8 text-gray-800 flex items-center gap-1">
							{formInputs.locationOnlineOnly ? (
								<>
									<IoGlobeOutline className="h-4 w-4 text-green-600" />
									<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm bg-green-100 text-green-800 border border-green-200">Online only</span>
								</>
							) : (
								<>
									<span className="text-gray-800">{formInputs.locationCity}, </span>
									<span className="text-gray-800">{formInputs.locationCountry}</span>
								</>
							)}
						</div>
					</div>
					<div className="grid md:grid-cols-2 gap-6">
						<div>
							<div className="flex items-center gap-2 mb-2">
								<IoEyeOutline className="h-5 w-5 text-blue-600" />
								<h3 className="font-semibold text-gray-900">Visibility</h3>
							</div>
							<div className="ml-8 text-gray-800 flex items-center gap-2">
								{formInputs.projectVisibility === "public" ? (
									<>
										<IoEyeOutline className="text-green-600 w-5 h-5" />
										<span className="text-gray-800">Public</span>
									</>
								) : (
									<>
										<IoEyeOffOutline className="text-gray-800 w-5 h-5" />
										<span className="text-gray-800">Private</span>
									</>
								)}
							</div>
						</div>
						<div>
							<div className="flex items-center gap-2 mb-2">
								<IoCalendarOutline className="h-5 w-5 text-blue-600" />
								<h3 className="font-semibold text-gray-900">Start Date</h3>
							</div>
							<div className="ml-8 text-gray-800">
								<div className="flex items-center gap-1">
									<IoTimeOutline className="h-4 w-4 text-gray-500" />
									<span className={`leading-relaxed ${formatDate(formInputs.projectStartDate) === "Not set" ? "text-gray-700 italic" : "text-gray-800"}`}>
										{formatDate(formInputs.projectStartDate)}
									</span>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="flex items-center gap-2 mb-2">
							<IoPricetagsOutline className="h-5 w-5 text-blue-600" />
							<h3 className="font-semibold text-gray-900">Tags</h3>
						</div>
						<div className="ml-8 text-gray-800 flex gap-1">
							{Array.isArray(formInputs.tags) && formInputs.tags.length > 0 ? (
								formInputs.tags.map((tag, index) => (
									<span key={index} className="inline-flex items-center px-3 pt-0.5 pb-1 mt-1 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
										{tag}
									</span>
								))
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
export default CardProjectLocationSettingsTags;
