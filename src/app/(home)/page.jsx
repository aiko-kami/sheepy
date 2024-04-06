import Mosaic from "@/components/Cards/Mosaic";
import PresentationBanner from "@/components/PresentationBanner";
import RecentProjects from "@/components/Cards/RecentProjects";
import RecentTalents from "@/components/Cards/RecentTalents";

const HomePage = () => {
	return (
		<div className="relative">
			<h2 className="font-semibold text-xl">Selected projects</h2>
			<Mosaic />
			<PresentationBanner />
			<h2 className="font-semibold text-xl">Recent projects</h2>
			<RecentProjects />
			<h2 className="font-semibold text-xl">New Talents</h2>
			<RecentTalents />
			<h2 className="font-semibold text-xl">Talents you need</h2>
			<RecentTalents />
		</div>
	);
};
export default HomePage;
