import Image from "next/image";
import Link from "next/link";
import BadgeCategory from "@/components/Badges/BadgeCategory";

const ProjectHorizontalCard = ({ project }) => {
	const { title, summary, cover, likes, category, subCategory, location, tags, status } = project;

	return (
		<>
			<div className="relative grid grid-cols-4 items-center shadow-xl rounded-lg bg-blue-900">
				<div className="col-span-1 relative min-h-40 h-full">
					<Link href="/projects/01">
						<Image src={cover} fill alt="Project picture" className="object-cover h-full shadow-md rounded-l-lg" />
					</Link>
				</div>
				<div className="px-6 col-span-3 h-full py-8 relative">
					<Link href="/projects/01">
						<h3 className="font-semibold text-2xl pb-1">{title}</h3>
					</Link>
					<div className="inline-block">
						<BadgeCategory category={category} />
					</div>
					<p className="line-clamp-2">
						{summary} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus labore odio praesentium vel odit repellat assumenda, nulla necessitatibus ipsa iure rerum perferendis ex
						at perspiciatis deleniti aut ea sed molestias aperiam consectetur vero. Nobis dolore repellat, iusto aliquid voluptates a optio, sapiente magnam impedit mollitia unde laborum, maiores
						labore.
					</p>
				</div>
			</div>
		</>
	);
};

export default ProjectHorizontalCard;
