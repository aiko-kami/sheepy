const ProjectSummary = ({ summary }) => {
	return (
		<>
			{/* Project summary */}
			<div className="border rounded-xl p-6 bg-slate-800/50 border-slate-700 shadow-xl">
				<h2 className="text-xl font-bold mb-6">Project summary</h2>
				<p className="text-justify text-slate-300 leading-relaxed">{summary !== null && summary !== undefined ? summary : <span className="italic text-gray-400">Project summary not found</span>}</p>
			</div>
		</>
	);
};
export default ProjectSummary;
