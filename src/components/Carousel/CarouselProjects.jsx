"use client";
import Carousel from "./Carousel";
import { ProjectCard } from "@/components/Cards/Projects/ProjectCards";
import LatestProjects from "@/mock/LatestProjects.json";
import "./styles.module.css";

const CarouselProjects = () => {
	const OPTIONS = { loop: true, align: "start" };
	const SLIDE_COUNT = 5;
	const SLIDES = [1, 4, 4];

	return (
		<>
			<h2 className="text-center text-4xl">Carousel projects</h2>
			<div className="w-1/2 mx-auto">
				<Carousel options={OPTIONS}>
					{LatestProjects.map((project, index) => (
						<div className="embla__slide embla__class-names" key={index}>
							<ProjectCard key={index} project={project} />
						</div>
					))}
				</Carousel>
			</div>
		</>
	);
};
export default CarouselProjects;
