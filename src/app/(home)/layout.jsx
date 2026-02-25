import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpaceHero from "@/components/Hero/SpaceHero";
import BackgroundStarfield from "@/components/Backgrounds/BackgroundStarfield";

export default function RootLayout({ children }) {
	return (
		<>
			<BackgroundStarfield />
			<Navbar isHomePage={true} />
			<SpaceHero />
			<main className="relative my-auto mx-2 md:mx-10 lg:mx-auto lg:max-w-410">{children}</main>
			<Footer />
		</>
	);
}
