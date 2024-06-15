import Image from "next/image";

const ProjectDescription = ({ project }) => {
	return (
		<>
			<h2 className="font-semibold text-3xl mb-4">The project in details</h2>
			<p className="mb-2 text-justify">{project.description}</p>
			<Image src={project.coverDescription} className="w-full h-80 object-cover my-4" alt="Card" width={600} height={225} />
			<p className="mb-2 text-justify">{project.description}</p>
		</>
	);
};
export default ProjectDescription;
