import Image from "next/image";
import Link from "next/link";
import projects from "@/mock/projects.json";

import BadgeCategory from "@/components/Badges/BadgeCategory";

const Mosaic = () => {
	return (
		<>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-4">
				<div className="col-span-2 md:row-span-2">
					<div className="relative w-full">
						<Link href={`/projects/${projects[0].projectId}`}>
							<Image src={projects[0].cover} height={0} width={0} sizes="100vw" alt="Project picture" className="object-cover w-full max-h-96" />
						</Link>
						<div className="absolute top-2 right-2">
							<BadgeCategory category={projects[0].category} />
						</div>
					</div>
					<Link href={`/projects/${projects[0].projectId}`}>
						<h2 className="font-semibold text-xl line-clamp-1">{projects[0].title}</h2>
						<p className="line-clamp-2">{projects[0].summary}</p>
					</Link>
				</div>
				<div className="col-span-2 flex h-32 lg:h-40 xl:h-48">
					<div className="w-2/5 relative">
						<Link href={`/projects/${projects[1].projectId}`}>
							<Image src={projects[1].cover} height={0} width={0} sizes="100vw" alt="Project picture" className="object-cover h-full w-full" />
						</Link>
						<div className="absolute top-2 right-2">
							<BadgeCategory category={projects[1].category} />
						</div>
					</div>
					<Link href={`/projects/${projects[1].projectId}`} className="w-3/5">
						<h2 className="font-semibold text-xl ml-2 line-clamp-2">{projects[1].title}</h2>
						<p className="ml-2 line-clamp-3 lg:line-clamp-5">{projects[1].summary}</p>
					</Link>
				</div>
				<div className="col-span-2 flex h-32 lg:h-40 xl:h-48">
					<div className="w-2/5 relative">
						<Link href={`/projects/${projects[2].projectId}`}>
							<Image src={projects[2].cover} height={0} width={0} sizes="100vw" alt="Project picture" className="object-cover h-full w-full" />
						</Link>
						<div className="absolute top-2 right-2">
							<BadgeCategory category={projects[2].category} />
						</div>
					</div>
					<Link href={`/projects/${projects[2].projectId}`} className="w-3/5">
						<h2 className="font-semibold text-xl ml-2 line-clamp-2">{projects[2].title}</h2>
						<p className="ml-2 line-clamp-3 lg:line-clamp-5">{projects[2].summary}</p>
					</Link>
				</div>
				<div className="relative h-32 lg:h-40 xl:h-48">
					<Link href={`/projects/${projects[3].projectId}`}>
						<Image src={projects[3].cover} height={0} width={0} sizes="100vw" alt="Project picture" className="object-cover h-full w-full" />
					</Link>
					<div className="absolute top-2 right-2">
						<BadgeCategory category={projects[3].category} />
					</div>
					<Link href={`/projects/${projects[3].projectId}`} className="absolute bottom-1.5 left-2 m-1">
						<h2 className="font-semibold text-xl">{projects[3].title}</h2>
					</Link>
				</div>
				<div className="relative h-32 lg:h-40 xl:h-48">
					<Link href={`/projects/${projects[4].projectId}`}>
						<Image src={projects[4].cover} height={0} width={0} sizes="100vw" alt="Project picture" className="object-cover h-full w-full" />
					</Link>
					<div className="absolute top-2 right-2">
						<BadgeCategory category={projects[4].category} />
					</div>
					<Link href={`/projects/${projects[4].projectId}`} className="absolute bottom-1.5 left-2 m-1">
						<h2 className="font-semibold text-xl">{projects[4].title}</h2>
					</Link>
				</div>
				<div className="col-span-2 flex h-32 lg:h-40 xl:h-48">
					<div className="w-2/5 relative">
						<Link href={`/projects/${projects[5].projectId}`}>
							<Image src={projects[5].cover} height={0} width={0} sizes="100vw" alt="Project picture" className="object-cover h-full w-full" />
						</Link>
						<div className="absolute top-2 right-2">
							<BadgeCategory category={projects[5].category} />
						</div>
					</div>
					<Link href={`/projects/${projects[5].projectId}`} className="w-3/5">
						<h2 className="font-semibold text-xl ml-2 line-clamp-2">{projects[5].title}</h2>
						<p className="ml-2 line-clamp-3 lg:line-clamp-5">{projects[5].summary}</p>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Mosaic;
