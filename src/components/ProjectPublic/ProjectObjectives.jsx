const ProjectObjectives = ({ objectives = [] }) => {
	return (
		<>
			<div className="border rounded-xl p-6 bg-slate-800/50 border-slate-700 shadow-xl">
				<h2 className="text-xl font-bold mb-6">Objectives</h2>
				<ul className="list-disc pl-5">
					{objectives.map((objective) => (
						<li className="text-justify indent-2 text-slate-300 leading-relaxed mb-2">{objective}</li>
					))}
				</ul>
			</div>
		</>
	);
};
export default ProjectObjectives;
