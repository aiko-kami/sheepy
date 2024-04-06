import "../globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
	return (
		<>
			<Navbar isHomePage={false} />
			<main className="relative my-auto mx-2 md:mx-10 xl:mx-36">{children}</main>
			<Footer />
		</>
	);
}
