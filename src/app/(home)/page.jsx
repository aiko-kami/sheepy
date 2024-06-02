import Mosaic from "@/components/Cards/Projects/Mosaic";
import PresentationBanner from "@/components/PresentationBanner";
import CarouselProjects from "@/components/Carousel/CarouselProjects";
import RecentProjects from "@/components/Cards/Projects/RecentProjects";
import RecentTalents from "@/components/Cards/Talents/RecentTalents";
import TalentsYouNeed from "@/components/Cards/Talents/TalentsYouNeed";
import Link from "next/link";

const HomePage = () => {
	return (
		<div className="relative">
			<h2 className="font-semibold text-xl">Selected projects</h2>
			<Mosaic />

			<PresentationBanner />
			<CarouselProjects />

			<div className="inline-flex">
				<h2 className="font-semibold text-xl mr-4">Recent projects</h2>
				<Link href="/projects/01" className="text-xs mt-2.5 hover:underline">
					See more...
				</Link>
			</div>
			<RecentProjects />

			<div className="inline-flex">
				<h2 className="font-semibold text-xl mr-4">New Talents</h2>
				<Link href="/users/01" className="text-xs mt-2.5 hover:underline">
					See more...
				</Link>
			</div>
			<RecentTalents />

			<div className="inline-flex">
				<h2 className="font-semibold text-xl mr-4">Talents you need</h2>
				<Link href="/users/01" className="text-xs mt-2.5 hover:underline">
					See more...
				</Link>
			</div>
			<TalentsYouNeed />
		</div>
	);
};
export default HomePage;
