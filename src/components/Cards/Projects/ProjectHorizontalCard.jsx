import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/Badges/Badge";

const ProjectHorizontalCard = ({ project, animate }) => {
	const { title, summary, cover, likes, category, subCategory, location, tags, status } = project;

	// Conditional classes for animation
	const animationClasses = animate ? "hover:-translate-y-1 transition ease-in duration-75" : "";

	return (
		<>
			<div className={`relative grid grid-cols-4 items-center shadow-xl rounded-lg bg-blue-900 ${animationClasses}`}>
				<div className="col-span-1 relative min-h-40 h-full">
					<Link href="/projects/01">
						<Image src={cover} fill alt="Project picture" className="object-cover h-full shadow-md rounded-l-lg" />
					</Link>
				</div>
				<div className="px-6 col-span-3 h-full py-8 relative">
					<Link href="/projects/01">
						<h3 className="inline-block font-semibold text-2xl">{title}</h3>
					</Link>
					<div className="py-2">
						<Badge badge={category} />
					</div>
					<p className="line-clamp-2">{summary}</p>
				</div>
			</div>
		</>
	);
};

export default ProjectHorizontalCard;
