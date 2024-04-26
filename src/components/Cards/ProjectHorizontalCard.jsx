import Image from "next/image";
import Link from "next/link";

const ProjectHorizontalCard = ({ projectData }) => {
	const { projectTitle, projectSummary, projectCover, projectLikes, projectCategory, projectSubCategory, projectLocation, projectTags, projectStatus } = projectData;

	return (
		<>
			<div className="relative grid grid-cols-4 items-center shadow-xl rounded-lg bg-blue-900">
				<div className="col-span-1 relative min-h-40 ">
					<Link href="/projects/01">
						<Image src={projectCover} fill alt="Project picture" className="object-cover h-full shadow-md rounded-l-lg" />
					</Link>
				</div>
				<div className="ml-6 col-span-3">
					<Link href="/projects/01">
						<h3 className="font-semibold text-2xl pb-1">{projectTitle}</h3>
					</Link>
					<p>{projectSummary}</p>
				</div>
			</div>
		</>
	);
};

export default ProjectHorizontalCard;
