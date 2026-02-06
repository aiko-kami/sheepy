import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

export default function RootLayout({ children }) {
	return (
		<>
			<Navbar isHomePage={true} />
			<div className="relative">
				<Hero />
			</div>
			<main className="relative">{children}</main>
			<Footer />
		</>
	);
}
