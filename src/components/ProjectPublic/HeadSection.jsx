const HeadSection = ({ project }) => {
	return (
		<>
			{/* Summary */}
			<p className="mb-2 text-lg lg:mx-1/7 text-justify">{project.summary}</p>
		</>
	);
};
export default HeadSection;
