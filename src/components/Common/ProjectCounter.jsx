const ProjectCounter = ({ projectCount }) => {
	return (
		<div className="flex justify-evenly my-8 text-gray-300">
			<div className="text-center">
				<span className="text-4xl font-bold block uppercase tracking-wide text-white">{projectCount.onGoing || projectCount.onGoing === 0 ? projectCount.onGoing : "?"}</span>
				<div className="text-sm ">projects</div>
				<div className="text-sm">on-going</div>
			</div>
			<div className="text-center">
				<span className="text-4xl font-bold block uppercase tracking-wide text-white">{projectCount.created || projectCount.created === 0 ? projectCount.created : "?"}</span>
				<div className="text-sm">projects</div>
				<div className="text-sm">created</div>
			</div>
			<div className="text-center">
				<span className="text-4xl font-bold block uppercase tracking-wide text-white">{projectCount.completed || projectCount.completed === 0 ? projectCount.completed : "?"}</span>
				<div className="text-sm">projects</div>
				<div className="text-sm">completed</div>
			</div>
		</div>
	);
};
export default ProjectCounter;
