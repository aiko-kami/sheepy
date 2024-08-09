import Image from "next/image";
import Link from "next/link";
import { Badge, BadgeRounded } from "@/components/Badges/Badges";

const ProjectCard = ({ project, animate }) => {
	const { id, title, summary, cover, category, tags } = project;

	// Conditional classes for animation
	const animationClasses = animate ? "duration-100 transform hover:-translate-y-2 transition ease-in" : "";

	return (
		<>
			<div className={`rounded-lg max-w-72 shadow-2xl my-auto overflow-hidden ${animationClasses}`}>
				{/* Card image and category */}
				<div className="relative w-full">
					<Link href={`/projects/${id}`}>
						<Image src={cover} className="w-full h-36 sm:h-62 object-cover rounded-t-lg" alt="Card" height={0} width={0} sizes="100vw" />
					</Link>
					<div className="absolute bottom-2 right-2">
						<Badge badge={category} size={"xs"} />
					</div>
				</div>

				{/* Card body */}
				<div className="px-1 md:px-4 py-2 bg-blue-900 min-h-54 rounded-b-lg">
					<div className="flex flex-wrap justify-center h-12 overflow-hidden">
						{tags.map((tag, index) => (
							<div key={index} className="mx-1 my-2">
								<BadgeRounded badge={tag} size={"xs"} />
							</div>
						))}
					</div>
					<Link href={`/projects/${id}`}>
						<h2 className="font-semibold text-lg md:text-xl line-clamp-2 mb-4">{title}</h2>
						<p className="line-clamp-3 text-sm md:text-base">{summary}</p>
					</Link>
				</div>
			</div>
		</>
	);
};

export default ProjectCard;
