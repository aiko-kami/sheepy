const ProgressBar = ({ currentStep, percent }) => {
	return (
		<>
			<div className="flex justify-between mx-4 relative">
				<span className="text-4xl mb-3 font-medium text-blue-700 dark:text-white">Step {currentStep}</span>
				<span className="text-2xl mb-1 absolute right-0 bottom-0 text-blue-700 dark:text-white">{percent}%</span>
			</div>
			<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
				<div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${percent}%` }}></div>
			</div>
		</>
	);
};
export default ProgressBar;
