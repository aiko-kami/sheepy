import Image from "next/image";
import Link from "next/link";
import selectedProjects from "@/mock/selectedProjects.json";

import { Badge } from "@/components/Badges/Badges";

const MosaicFour = () => {
	return (
		<>
			<div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
				<div className="lg:col-span-2 relative h-50 lg:h-70 xl:h-100">
					<Image src={selectedProjects[0].cover} height={0} width={0} sizes="100vw" alt="Project picture" className="object-cover h-full w-full" />
					<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-black/0">
						<div className="absolute top-2 right-2">
							<Badge badge={selectedProjects[0].category} size={"xs"} />
						</div>
						<Link href={`/projects/${selectedProjects[0].link}`} className="absolute bottom-1.5 left-2 m-1 md:max-w-4/5">
							<h2 className="font-semibold text-xl line-clamp-1">{selectedProjects[0].title}</h2>
							<p className="line-clamp-5">{selectedProjects[0].summary}</p>
						</Link>
					</div>
				</div>
				<div className="relative h-50 lg:h-70 xl:h-100">
					<Image src={selectedProjects[1].cover} height={0} width={0} sizes="100vw" alt="Project picture" className="object-cover h-full w-full" />
					<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-black/0">
						<div className="absolute top-2 right-2">
							<Badge badge={selectedProjects[1].category} size={"xs"} />
						</div>
						<Link href={`/projects/${selectedProjects[1].link}`} className="absolute bottom-1.5 left-2 m-1">
							<h2 className="font-semibold text-xl">{selectedProjects[1].title}</h2>
							<p className="line-clamp-5">{selectedProjects[1].summary}</p>
						</Link>
					</div>
				</div>
				<div className="relative h-50 lg:h-70 xl:h-100">
					<Image src={selectedProjects[2].cover} height={0} width={0} sizes="100vw" alt="Project picture" className="object-cover h-full w-full" />
					<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-black/0">
						<div className="absolute top-2 right-2">
							<Badge badge={selectedProjects[2].category} size={"xs"} />
						</div>
						<Link href={`/projects/${selectedProjects[2].link}`} className="absolute bottom-1.5 left-2 m-1">
							<h2 className="font-semibold text-xl">{selectedProjects[2].title}</h2>
							<p className="line-clamp-5">{selectedProjects[2].summary}</p>
						</Link>
					</div>
				</div>
				<div className="lg:col-span-2 relative h-50 lg:h-70 xl:h-100">
					<Image src={selectedProjects[3].cover} height={0} width={0} sizes="100vw" alt="Project picture" className="object-cover h-full w-full" />
					<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-black/0">
						<div className="absolute top-2 right-2">
							<Badge badge={selectedProjects[3].category} size={"xs"} />
						</div>
						<Link href={`/projects/${selectedProjects[3].link}`} className="absolute bottom-1.5 right-2 text-right m-1 md:max-w-4/5">
							<h2 className="font-semibold text-xl line-clamp-1">{selectedProjects[3].title}</h2>
							<p className="line-clamp-5">{selectedProjects[3].summary}</p>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default MosaicFour;
