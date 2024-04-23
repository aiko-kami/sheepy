import Image from "next/image";
import Link from "next/link";

const ProjectHorizontalCard = ({ projectData }) => {
	const { projectTitle, projectSummary, projectCover, projectLikes, projectCategory, projectSubCategory, projectLocation, projectTags, projectStatus } = projectData;

	return (
		<>
			<div className="relative grid grid-cols-4 items-center mx-2 lg:mx-14 mb-3 test">
				<Image src={projectCover} width={1280} height={1280} alt="Project picture" className="object-cover h-full shadow-md rounded-lg" />

				<div className="ml-6 col-span-2">
					<h3 className="font-semibold text-xl pb-1">{projectTitle}</h3>
					<p>{projectSummary}</p>
				</div>
			</div>
		</>
	);
};

export default ProjectHorizontalCard;
