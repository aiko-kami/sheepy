const ProjectCounter = ({ projectsCount = {} }) => {
	const safe = (value) => (value === 0 || value ? value : "?");

	const stats = [
		{ key: "onGoing", label: ["projects", "on-going"] },
		{ key: "created", label: ["projects", "created"] },
		{ key: "completed", label: ["projects", "completed"] },
	];

	return (
		<div className="flex justify-evenly text-gray-300">
			{stats.map(({ key, label }) => (
				<div key={key} className="text-center">
					<span className="text-4xl font-bold block uppercase tracking-wide text-white">{safe(projectsCount[key])}</span>
					<div className="text-sm">{label[0]}</div>
					<div className="text-sm">{label[1]}</div>
				</div>
			))}
		</div>
	);
};

export default ProjectCounter;
