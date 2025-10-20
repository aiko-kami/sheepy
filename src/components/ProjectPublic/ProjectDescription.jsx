const ProjectDescription = ({ description }) => {
	return (
		<>
			<div className="lg:mx-4 border rounded-xl p-6 bg-slate-800/50 border-slate-700 shadow-xl mb-4 sm:mb-8">
				<h2 className="text-xl font-bold mb-6">The project in details</h2>
				<p className="text-justify text-slate-300 leading-relaxed">{description}</p>
			</div>
		</>
	);
};
export default ProjectDescription;
