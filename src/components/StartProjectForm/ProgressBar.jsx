const ProgressBar = ({ currentStep, totalSteps, percent }) => {
	return (
		<>
			<div className="flex justify-between md:mx-4 pt-3 md:pt-6 relative">
				<span className="text-2xl mb-1 lg:mb-3 font-medium text-white">
					Step {currentStep} of {totalSteps}
				</span>
				<span className="text-2xl mb-1 absolute right-0 bottom-0 text-gray-400">{percent}%</span>
			</div>
			<div className="md:mx-4 rounded-full h-2.5 bg-gray-700 mb-8">
				<div
					className="			
				bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 shadow-lg shadow-blue-500/25 h-2.5 rounded-full"
					style={{ width: `${percent}%` }}
				></div>
			</div>
		</>
	);
};
export default ProgressBar;
