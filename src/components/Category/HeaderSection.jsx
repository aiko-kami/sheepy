import Image from "next/image";
import Link from "next/link";

const HeadSection = ({ project }) => {
	return (
		<>
			{/* Title */}
			<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold mb-4 text-center">{project.title}</h1>
			{/* Summary */}
			<p className="mb-2 text-lg lg:mx-1/7 text-justify">{project.summary}</p>
			{/* Creator */}
			<div className="text-gray-300 text-lg mb-6 flex items-center justify-center">
				<span className="">by</span>
				<Link href={`/users/${project.userId}`} className="ml-1 mr-2 font-semibold">
					{project.creator}
				</Link>
				<Link href={`/users/${project.userId}`}>
					<Image src={project.creatorProfilePicture} className="object-cover rounded-full w-10 h-10" alt="creator profile picture" height={0} width={0} sizes="100vw" />
				</Link>
			</div>
		</>
	);
};
export default HeadSection;
