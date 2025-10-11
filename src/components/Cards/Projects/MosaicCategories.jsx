import Image from "next/image";
import Link from "next/link";
import selectedProjectsCategories from "@/mock/selectedProjectsCategories.json";

import { Badge } from "@/components/Badges/Badges";

const MosaicCategories = () => {
	return (
		<>
			<div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
				{selectedProjectsCategories.map((projectsCat, index) => {
					const { category } = projectsCat;
					const colorClassBorderCat = "border-" + category?.colors?.colorBase || "border-gray-500";
					const colorClassBgCat = category?.colors?.bgColor || "bg-gray-500";

					return (
						<div key={index}>
							<div className={`${colorClassBorderCat} border-b-2 mb-3`}>
								<div className={`${colorClassBgCat} text-white p-2 inline-block rounded-t-md uppercase`}>{projectsCat.category.name}</div>
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
					);
				})}
			</div>
		</>
	);
};

export default MosaicCategories;
