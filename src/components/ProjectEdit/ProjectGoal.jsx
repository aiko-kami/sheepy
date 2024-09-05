const HeadSection = ({ goal }) => {
	return (
		<>
			<h2 className="font-semibold text-3xl mb-3">Goal</h2>
			<hr className="h-px mb-3 bg-gray-200 border-0 dark:bg-gray-700" />
			<p className="mb-8 text-justify">{goal}</p>
		</>
	);
};
export default HeadSection;
