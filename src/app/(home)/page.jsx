import { MosaicFour, MosaicSix, MosaicCategories } from "@/components/Cards/Projects/Mosaic";
import PresentationBanner from "@/components/PresentationBanner";
import CarouselProjects from "@/components/Carousel/CarouselProjects";
import RecentProjects from "@/components/Cards/Projects/RecentProjects";
import RecentTalents from "@/components/Cards/Talents/RecentTalents";
import TalentsYouNeed from "@/components/Cards/Talents/TalentsYouNeed";
import Link from "next/link";

export const metadata = {
	title: "Sheepy",
	description: "Home page",
};

const HomePage = async () => {
	const response = await fetch("https://server.neutroneer.com/projectsExtended/crushProjects", {
		//const response = await fetch("http://localhost:8080/projectsExtended/crushProjects", {
		cache: "no-store",
		credentials: "include",
	});
	const data = await response.json();

	return (
		<div className="relative">
			<div className="mb-12">
				<h2 className="font-semibold text-xl mb-4">Selected projects</h2>
				<MosaicSix />
			</div>

			<div className="mb-12">
				<PresentationBanner />
			</div>

			<div className="mb-12">
				<CarouselProjects />
			</div>

			<div className="mb-12">
				<div className="inline-flex">
					<h2 className="font-semibold text-xl mr-4 mb-4">Recent projects</h2>
					<Link href="/projects/01" className="text-xs mt-2.5 hover:underline">
						See more...
					</Link>
				</div>
				<RecentProjects />
			</div>

			<div className="mb-12">
				<div className="inline-flex">
					<h2 className="font-semibold text-xl mr-4 mb-4">New Talents</h2>
					<Link href="/users/01" className="text-xs mt-2.5 hover:underline">
						See more...
					</Link>
				</div>
				<RecentTalents />
			</div>

			<div className="mb-12">
				<h2 className="font-semibold text-xl mb-4">Selected projects</h2>
				<MosaicFour />
			</div>

			<div className="mb-12">
				<h2 className="font-semibold text-xl mb-4">Selected projects by categories</h2>
				<MosaicCategories />
			</div>

			<div className="mb-12">
				<div className="inline-flex">
					<h2 className="font-semibold text-xl mr-4 mb-4">Talents you need</h2>
					<Link href="/users/01" className="text-xs mt-2.5 hover:underline">
						See more...
					</Link>
				</div>
				<TalentsYouNeed />
			</div>
		</div>
	);
};
export default HomePage;
