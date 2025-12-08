const ProjectGoal = ({ goal }) => {
	return (
		<>
			<div className="border rounded-xl p-6 bg-slate-800/50 border-slate-700 shadow-xl">
				<h2 className="text-xl font-bold mb-6">Goal</h2>
				<p className="text-justify text-slate-300 leading-relaxed">{goal}</p>
			</div>
		</>
	);
};
export default ProjectGoal;
