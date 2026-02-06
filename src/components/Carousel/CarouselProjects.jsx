"use client";
import Carousel from "./Carousel";
import { ProjectCard } from "@/components/Cards/Projects/ProjectCards";
import LatestProjects from "@/mock/LatestProjects.json";
import "./styles.css";

const CarouselProjects = () => {
	const OPTIONS = { loop: true, align: "start" };

	return (
		<div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
			<Carousel options={OPTIONS}>
				{LatestProjects.map((project, index) => (
					<div className="embla__slide embla__class-names" key={index}>
						<ProjectCard key={index} project={project} />
					</div>
				))}
			</Carousel>
		</div>
	);
};
export default CarouselProjects;
