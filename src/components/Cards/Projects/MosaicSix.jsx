"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/Badges/Badges";
import MosaicSixSkeleton from "@/components/Cards/Projects/MosaicSixSkeleton";
import { useCrushProjects } from "@/hooks/useCrushProjects";

const MosaicSix = () => {
	const { projects: selectedProjects, isLoading: loading, error } = useCrushProjects();

	return (
		<>
			{loading ? (
				<div className="inset-0 flex items-center justify-center z-10">
					<MosaicSixSkeleton />
				</div>
			) : error ? (
				<p className="text-center text-red-600">Error: {error}</p>
			) : selectedProjects && selectedProjects.length >= 6 ? (
				<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
					<div className="col-span-2 md:row-span-2 block">
						<div className="relative w-full">
							<Link href={`/projects/${selectedProjects[0].link}`}>
								<Image src={selectedProjects[0].cover.link} height={0} width={0} sizes="100vw" alt="Project picture" className="object-cover w-full max-h-96" />
							</Link>
							<div className="absolute top-2 right-2">
								<Badge badge={selectedProjects[0].category} size={"xs"} />
							</div>
						</div>
						<Link href={`/projects/${selectedProjects[0].link}`}>
							<h2 className="font-semibold text-xl line-clamp-1">{selectedProjects[0].title}</h2>
							<p className="line-clamp-2">{selectedProjects[0].summary}</p>
						</Link>
					</div>
					<div className="col-span-2 flex h-32 lg:h-40 xl:h-full">
						<div className="w-2/5 relative">
							<Link href={`/projects/${selectedProjects[1].link}`}>
								<Image src={selectedProjects[1].cover.link} height={0} width={0} sizes="100vw" alt="Project picture" className="object-cover h-full w-full" />
							</Link>
							<div className="absolute top-2 right-2">
								<Badge badge={selectedProjects[1].category} size={"xs"} />
							</div>
						</div>
						<Link href={`/projects/${selectedProjects[1].link}`} className="w-3/5">
							<h2 className="font-semibold text-xl ml-2 line-clamp-2 xl:mb-3">{selectedProjects[1].title}</h2>
							<p className="ml-2 line-clamp-3 lg:line-clamp-5">{selectedProjects[1].summary}</p>
						</Link>
					</div>
					<div className="col-span-2 flex h-32 lg:h-40 xl:h-full">
						<div className="w-2/5 relative">
							<Link href={`/projects/${selectedProjects[2].link}`}>
								<Image src={selectedProjects[2].cover.link} height={0} width={0} sizes="100vw" alt="Project picture" className="object-cover h-full w-full" />
							</Link>
							<div className="absolute top-2 right-2">
								<Badge badge={selectedProjects[2].category} size={"xs"} />
							</div>
						</div>
						<Link href={`/projects/${selectedProjects[2].link}`} className="w-3/5">
							<h2 className="font-semibold text-xl ml-2 line-clamp-2 xl:mb-3">{selectedProjects[2].title}</h2>
							<p className="ml-2 line-clamp-3 lg:line-clamp-5">{selectedProjects[2].summary}</p>
						</Link>
					</div>
					<div className="relative h-32 lg:h-40 xl:h-48">
						<Link href={`/projects/${selectedProjects[3].link}`}>
							<Image src={selectedProjects[3].cover.link} height={0} width={0} sizes="100vw" alt="Project picture" className="object-cover h-full w-full" />
							<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-black/0"></div>
						</Link>
						<div className="absolute top-2 right-2">
							<Badge badge={selectedProjects[3].category} size={"xs"} />
						</div>
						<Link href={`/projects/${selectedProjects[3].link}`}>
							<h2 className="absolute bottom-1.5 left-2 m-1 font-semibold text-xl">{selectedProjects[3].title}</h2>
						</Link>
					</div>
					<div className="relative h-32 lg:h-40 xl:h-48">
						<Link href={`/projects/${selectedProjects[4].link}`}>
							<Image src={selectedProjects[4].cover.link} height={0} width={0} sizes="100vw" alt="Project picture" className="object-cover h-full w-full" />
							<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-black/0"></div>
						</Link>
						<div className="absolute top-2 right-2">
							<Badge badge={selectedProjects[4].category} size={"xs"} />
						</div>
						<Link href={`/projects/${selectedProjects[4].link}`}>
							<h2 className="absolute bottom-1.5 left-2 m-1 font-semibold text-xl">{selectedProjects[4].title}</h2>
						</Link>
					</div>
					<div className="col-span-2 flex h-32 lg:h-40 xl:h-48">
						<div className="w-2/5 relative">
							<Link href={`/projects/${selectedProjects[5].link}`}>
								<Image src={selectedProjects[5].cover.link} height={0} width={0} sizes="100vw" alt="Project picture" className="object-cover h-full w-full" />
							</Link>
							<div className="absolute top-2 right-2">
								<Badge badge={selectedProjects[5].category} size={"xs"} />
							</div>
						</div>
						<Link href={`/projects/${selectedProjects[5].link}`} className="w-3/5">
							<h2 className="font-semibold text-xl ml-2 line-clamp-2 xl:mb-3">{selectedProjects[5].title}</h2>
							<p className="ml-2 line-clamp-3 lg:line-clamp-5">{selectedProjects[5].summary}</p>
						</Link>
					</div>
				</div>
			) : (
				<p className=" text-xl text-center py-10">
					<span className="italic">Selected projects not found</span> 😕
				</p>
			)}
		</>
	);
};

export default MosaicSix;
