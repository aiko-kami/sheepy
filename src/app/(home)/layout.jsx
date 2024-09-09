import "../../app/globals.css";

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
			<main className="relative my-auto mx-2 md:mx-10 lg:mx-36">{children}</main>
			<Footer />
		</>
	);
}
