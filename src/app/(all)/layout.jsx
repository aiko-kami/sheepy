import Navbar from "@/components/Navbar";
import BackgroundStarfield from "@/components/Backgrounds/BackgroundStarfield";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
	return (
		<>
			<Navbar />
			<BackgroundStarfield />
			<main className="relative mx-0 md:mx-10 lg:mx-36">{children}</main>
			<Footer />
		</>
	);
}
