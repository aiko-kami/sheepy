const ProjectCounter = ({ projectsCount = {} }) => {
	return (
		<div className="flex justify-evenly text-gray-300">
			<div className="text-center">
				<span className="text-4xl font-bold block uppercase tracking-wide text-white">{projectsCount.onGoing || projectsCount.onGoing === 0 ? projectsCount.onGoing : "?"}</span>
				<div className="text-sm ">projects</div>
				<div className="text-sm">on-going</div>
			</div>
			<div className="text-center">
				<span className="text-4xl font-bold block uppercase tracking-wide text-white">{projectsCount.created || projectsCount.created === 0 ? projectsCount.created : "?"}</span>
				<div className="text-sm">projects</div>
				<div className="text-sm">created</div>
			</div>
			<div className="text-center">
				<span className="text-4xl font-bold block uppercase tracking-wide text-white">{projectsCount.completed || projectsCount.completed === 0 ? projectsCount.completed : "?"}</span>
				<div className="text-sm">projects</div>
				<div className="text-sm">completed</div>
			</div>
		</div>
	);
};
export default ProjectCounter;
