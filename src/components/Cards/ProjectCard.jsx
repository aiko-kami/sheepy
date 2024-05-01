import Image from "next/image";
import Link from "next/link";
import BadgeCategory from "@/components/Badges/BadgeCategory";
import BadgeTag from "@/components/Badges/BadgeTag";

const ProjectCard = ({ project }) => {
	const { id, title, summary, cover, category, tags } = project;

	return (
		<>
			<div className="rounded-lg max-w-72 shadow-2xl my-auto overflow-hidden">
				{/* Card image and category */}
				<div className="relative w-full">
					<Link href={`/projects/${id}`}>
						<Image src={cover} className="w-full h-62 object-cover rounded-t-lg" alt="Card" height={0} width={0} sizes="100vw" />
					</Link>
					<div className="absolute bottom-2 right-2">
						<BadgeCategory category={category} />
					</div>
				</div>

				{/* Card body */}
				<div className="px-4 py-2 bg-blue-900 h-54 rounded-b-lg">
					<div className="flex flex-wrap justify-center h-12 overflow-hidden">
						{tags.map((tag, index) => (
							<div key={index} className="mx-1 my-2">
								<BadgeTag tag={tag} />
							</div>
						))}
					</div>
					<Link href={`/projects/${id}`}>
						<h2 className="font-semibold text-xl line-clamp-2 mb-4">{title}</h2>
						<p className="line-clamp-3">{summary}</p>
					</Link>
				</div>
			</div>
		</>
	);
};

export default ProjectCard;
