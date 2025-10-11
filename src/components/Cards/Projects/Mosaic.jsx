import Image from "next/image";
import Link from "next/link";
import selectedProjects from "@/mock/selectedProjects.json";
import selectedProjectsCategories from "@/mock/selectedProjectsCategories.json";

import { Badge } from "@/components/Badges/Badges";

const MosaicFour = () => {
	return (
		<>
			<div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
				<div className="lg:col-span-2 relative h-50 lg:h-70 xl:h-100">
					<Image src={selectedProjects[0].cover} height={0} width={0} sizes="100vw" alt="Project picture" className="object-cover h-full w-full" />
					<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/90 to-black/0">
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
					<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/90 to-black/0">
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
					<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/90 to-black/0">
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
					<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/90 to-black/0">
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

const MosaicSix = () => {
	return (
		<>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
				<div className="col-span-2 md:row-span-2">
					<div className="relative w-full">
						<Link href={`/projects/${selectedProjects[0].link}`}>
							<Image src={selectedProjects[0].cover} height={0} width={0} sizes="100vw" alt="Project picture" className="object-cover w-full max-h-96" />
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
				<div className="col-span-2 flex h-32 lg:h-40 xl:h-48">
					<div className="w-2/5 relative">
						<Link href={`/projects/${selectedProjects[1].link}`}>
							<Image src={selectedProjects[1].cover} height={0} width={0} sizes="100vw" alt="Project picture" className="object-cover h-full w-full" />
						</Link>
						<div className="absolute top-2 right-2">
							<Badge badge={selectedProjects[1].category} size={"xs"} />
						</div>
					</div>
					<Link href={`/projects/${selectedProjects[1].link}`} className="w-3/5">
						<h2 className="font-semibold text-xl ml-2 line-clamp-2">{selectedProjects[1].title}</h2>
						<p className="ml-2 line-clamp-3 lg:line-clamp-5">{selectedProjects[1].summary}</p>
					</Link>
				</div>
				<div className="col-span-2 flex h-32 lg:h-40 xl:h-48">
					<div className="w-2/5 relative">
						<Link href={`/projects/${selectedProjects[2].link}`}>
							<Image src={selectedProjects[2].cover} height={0} width={0} sizes="100vw" alt="Project picture" className="object-cover h-full w-full" />
						</Link>
						<div className="absolute top-2 right-2">
							<Badge badge={selectedProjects[2].category} size={"xs"} />
						</div>
					</div>
					<Link href={`/projects/${selectedProjects[2].link}`} className="w-3/5">
						<h2 className="font-semibold text-xl ml-2 line-clamp-2">{selectedProjects[2].title}</h2>
						<p className="ml-2 line-clamp-3 lg:line-clamp-5">{selectedProjects[2].summary}</p>
					</Link>
				</div>
				<div className="relative h-32 lg:h-40 xl:h-48">
					<Link href={`/projects/${selectedProjects[3].link}`}>
						<Image src={selectedProjects[3].cover} height={0} width={0} sizes="100vw" alt="Project picture" className="object-cover h-full w-full" />
					</Link>
					<div className="absolute top-2 right-2">
						<Badge badge={selectedProjects[3].category} size={"xs"} />
					</div>
					<Link href={`/projects/${selectedProjects[3].link}`} className="absolute bottom-1.5 left-2 m-1">
						<h2 className="font-semibold text-xl">{selectedProjects[3].title}</h2>
					</Link>
				</div>
				<div className="relative h-32 lg:h-40 xl:h-48">
					<Link href={`/projects/${selectedProjects[4].link}`}>
						<Image src={selectedProjects[4].cover} height={0} width={0} sizes="100vw" alt="Project picture" className="object-cover h-full w-full" />
					</Link>
					<div className="absolute top-2 right-2">
						<Badge badge={selectedProjects[4].category} size={"xs"} />
					</div>
					<Link href={`/projects/${selectedProjects[4].link}`} className="absolute bottom-1.5 left-2 m-1">
						<h2 className="font-semibold text-xl">{selectedProjects[4].title}</h2>
					</Link>
				</div>
				<div className="col-span-2 flex h-32 lg:h-40 xl:h-48">
					<div className="w-2/5 relative">
						<Link href={`/projects/${selectedProjects[5].link}`}>
							<Image src={selectedProjects[5].cover} height={0} width={0} sizes="100vw" alt="Project picture" className="object-cover h-full w-full" />
						</Link>
						<div className="absolute top-2 right-2">
							<Badge badge={selectedProjects[5].category} size={"xs"} />
						</div>
					</div>
					<Link href={`/projects/${selectedProjects[5].link}`} className="w-3/5">
						<h2 className="font-semibold text-xl ml-2 line-clamp-2">{selectedProjects[5].title}</h2>
						<p className="ml-2 line-clamp-3 lg:line-clamp-5">{selectedProjects[5].summary}</p>
					</Link>
				</div>
			</div>
		</>
	);
};

const MosaicCategories = () => {
	return (
		<>
			<div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
				{selectedProjectsCategories.map((projectsCat, index) => (
					<div>
						<div className={`border-${projectsCat.category.colors.colorBase} border-b-2 mb-3`}>
							<div className={`${projectsCat.category.colors.bgColor} text-white p-2 inline-block rounded-t-md uppercase`}>{projectsCat.category.name}</div>
						</div>
						<div className="mb-6 relative h-100">
							<Link href={`/projects/${projectsCat.projects[0].link}`}>
								<Image src={projectsCat.projects[0].cover} height={0} width={0} sizes="100vw" alt="Project picture" className="object-cover h-full w-full" />
								<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t bg-black/50">
									<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col justify-center items-center text-center w-full px-4">
										<h3 className="text-2xl font-semibold mb-2">{projectsCat.projects[0].title}</h3>
										<p>{projectsCat.projects[0].summary}</p>
									</div>
								</div>
							</Link>
						</div>
						<div className="px-2 space-y-3">
							{projectsCat.projects.slice(1).map((project, index) => (
								<div key={index + 1} className="flex items-start">
									<Image src={project.cover} height={0} width={0} sizes="100vw" alt="Project picture" className="object-cover w-20 h-20 mr-4" />
									<div className="p-1">
										<div className="mb-2">
											<Badge badge={project.category} size={"xs"} />
										</div>
										<p className="font-semibold line-clamp-2">{project.title}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export { MosaicFour, MosaicSix, MosaicCategories };
