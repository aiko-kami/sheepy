import Image from "next/image";
import Link from "next/link";
import selectedProjects from "@/mock/selectedProjects.json";

import { Badge } from "@/components/Badges/Badges";

const Mosaic = () => {
	return (
		<>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-4">
				<div className="col-span-2 md:row-span-2">
					<div className="relative w-full">
						<Link href={`/projects/${selectedProjects[0].projectId}`}>
							<Image src={selectedProjects[0].cover} height={0} width={0} sizes="100vw" alt="Project picture" className="object-cover w-full max-h-96" />
						</Link>
						<div className="absolute top-2 right-2">
							<Badge badge={selectedProjects[0].category} size={"xs"} />
						</div>
					</div>
					<Link href={`/projects/${selectedProjects[0].projectId}`}>
						<h2 className="font-semibold text-xl line-clamp-1">{selectedProjects[0].title}</h2>
						<p className="line-clamp-2">{selectedProjects[0].summary}</p>
					</Link>
				</div>
				<div className="col-span-2 flex h-32 lg:h-40 xl:h-48">
					<div className="w-2/5 relative">
						<Link href={`/projects/${selectedProjects[1].projectId}`}>
							<Image src={selectedProjects[1].cover} height={0} width={0} sizes="100vw" alt="Project picture" className="object-cover h-full w-full" />
						</Link>
						<div className="absolute top-2 right-2">
							<Badge badge={selectedProjects[1].category} size={"xs"} />
						</div>
					</div>
					<Link href={`/projects/${selectedProjects[1].projectId}`} className="w-3/5">
						<h2 className="font-semibold text-xl ml-2 line-clamp-2">{selectedProjects[1].title}</h2>
						<p className="ml-2 line-clamp-3 lg:line-clamp-5">{selectedProjects[1].summary}</p>
					</Link>
				</div>
				<div className="col-span-2 flex h-32 lg:h-40 xl:h-48">
					<div className="w-2/5 relative">
						<Link href={`/projects/${selectedProjects[2].projectId}`}>
							<Image src={selectedProjects[2].cover} height={0} width={0} sizes="100vw" alt="Project picture" className="object-cover h-full w-full" />
						</Link>
						<div className="absolute top-2 right-2">
							<Badge badge={selectedProjects[2].category} size={"xs"} />
						</div>
					</div>
					<Link href={`/projects/${selectedProjects[2].projectId}`} className="w-3/5">
						<h2 className="font-semibold text-xl ml-2 line-clamp-2">{selectedProjects[2].title}</h2>
						<p className="ml-2 line-clamp-3 lg:line-clamp-5">{selectedProjects[2].summary}</p>
					</Link>
				</div>
				<div className="relative h-32 lg:h-40 xl:h-48">
					<Link href={`/projects/${selectedProjects[3].projectId}`}>
						<Image src={selectedProjects[3].cover} height={0} width={0} sizes="100vw" alt="Project picture" className="object-cover h-full w-full" />
					</Link>
					<div className="absolute top-2 right-2">
						<Badge badge={selectedProjects[3].category} size={"xs"} />
					</div>
					<Link href={`/projects/${selectedProjects[3].projectId}`} className="absolute bottom-1.5 left-2 m-1">
						<h2 className="font-semibold text-xl">{selectedProjects[3].title}</h2>
					</Link>
				</div>
				<div className="relative h-32 lg:h-40 xl:h-48">
					<Link href={`/projects/${selectedProjects[4].projectId}`}>
						<Image src={selectedProjects[4].cover} height={0} width={0} sizes="100vw" alt="Project picture" className="object-cover h-full w-full" />
					</Link>
					<div className="absolute top-2 right-2">
						<Badge badge={selectedProjects[4].category} size={"xs"} />
					</div>
					<Link href={`/projects/${selectedProjects[4].projectId}`} className="absolute bottom-1.5 left-2 m-1">
						<h2 className="font-semibold text-xl">{selectedProjects[4].title}</h2>
					</Link>
				</div>
				<div className="col-span-2 flex h-32 lg:h-40 xl:h-48">
					<div className="w-2/5 relative">
						<Link href={`/projects/${selectedProjects[5].projectId}`}>
							<Image src={selectedProjects[5].cover} height={0} width={0} sizes="100vw" alt="Project picture" className="object-cover h-full w-full" />
						</Link>
						<div className="absolute top-2 right-2">
							<Badge badge={selectedProjects[5].category} size={"xs"} />
						</div>
					</div>
					<Link href={`/projects/${selectedProjects[5].projectId}`} className="w-3/5">
						<h2 className="font-semibold text-xl ml-2 line-clamp-2">{selectedProjects[5].title}</h2>
						<p className="ml-2 line-clamp-3 lg:line-clamp-5">{selectedProjects[5].summary}</p>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Mosaic;
