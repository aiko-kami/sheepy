const ProgressBar = ({ currentStep, percent }) => {
	return (
		<>
			<div className="flex justify-between md:mx-4 relative">
				<span className="text-2xl lg:text-4xl mb-1 lg:mb-3 font-medium text-white">Step {currentStep}</span>
				<span className="text-2xl mb-1 absolute right-0 bottom-0 text-white">{percent}%</span>
			</div>
			<div className="w-full rounded-full h-2.5 bg-gray-700 mb-8">
				<div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${percent}%` }}></div>
			</div>
		</>
	);
};
export default ProgressBar;
