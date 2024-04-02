import Mosaic from "@/components/Cards/Mosaic";
import PresentationBanner from "@/components/PresentationBanner";
import RecentProjects from "@/components/Cards/RecentProjects";

const HomePage = () => {
	return (
		<div className="relative">
			<h2 className="font-semibold text-xl">Selected projects</h2>
			<Mosaic />
			<PresentationBanner />
			<h2 className="font-semibold text-xl">Recent projects</h2>
			<RecentProjects />
		</div>
	);
};
export default HomePage;
