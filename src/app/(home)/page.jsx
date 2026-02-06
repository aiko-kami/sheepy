import MosaicSix from "@/components/Cards/Projects/MosaicSix";
import MosaicCategories from "@/components/Cards/Projects/MosaicCategories";
import PresentationBanner from "@/components/PresentationBanner";
import CarouselProjects from "@/components/Carousel/CarouselProjects";
import RecentProjects from "@/components/Cards/Projects/RecentProjects";
import TalentsShowcase from "@/components/Cards/Talents/TalentsShowcase";
import HomeSection from "@/components/HomeSection";

export const metadata = {
	title: "Make It",
	description: "Bring your projects to life",
};

const HomePage = async () => {
	return (
		<div className="relative">
			{/* 1. Value proposition -- trust builder right after hero */}
			<HomeSection>
				<PresentationBanner />
			</HomeSection>

			{/* 2. Featured projects -- main showcase */}
			<HomeSection title="Featured projects">
				<MosaicSix />
			</HomeSection>

			{/* 3. Browse by category -- discovery */}
			<HomeSection title="Browse by category" alternate>
				<MosaicCategories />
			</HomeSection>

			{/* 4. Recent projects -- fresh content */}
			<HomeSection title="Recent projects" href="/projects/01">
				<RecentProjects />
			</HomeSection>

			{/* 5. Project carousel -- visual break */}
			<HomeSection title="Trending projects" alternate>
				<CarouselProjects />
			</HomeSection>

			{/* 6. Talents -- combined with tabs */}
			<HomeSection title="Discover talents" href="/talents/meet-talents">
				<TalentsShowcase />
			</HomeSection>
		</div>
	);
};
export default HomePage;
