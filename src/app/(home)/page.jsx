import Mosaic from "@/components/Cards/Mosaic";
import PresentationBanner from "@/components/PresentationBanner";
import LatestProjects from "@/components/Cards/LatestProjects";

const HomePage = () => {
	return (
		<div className="relative">
			<h2 className="font-semibold text-xl mt-8">Selected projects</h2>
			<Mosaic />
			<PresentationBanner />
			<h2 className="font-semibold text-xl">Recent projects</h2>
			<LatestProjects />
		</div>
	);
};
export default HomePage;
