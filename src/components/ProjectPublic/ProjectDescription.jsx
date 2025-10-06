import Image from "next/image";

const ProjectDescription = ({ project }) => {
	return (
		<>
			<div className="lg:mx-4 border rounded-xl p-6 bg-slate-800/50 border-slate-700 backdrop-blur-sm shadow-xl">
				<h2 className="text-xl font-bold mb-6">The project in details</h2>
				<p className="text-justify text-slate-300 leading-relaxed">{project.description}</p>
				<Image src={project.cover.link} className="w-full h-80 object-cover my-4" alt="Card" width={600} height={225} />
				<p className="text-justify text-slate-300 leading-relaxed">{project.description}</p>
			</div>
		</>
	);
};
export default ProjectDescription;
