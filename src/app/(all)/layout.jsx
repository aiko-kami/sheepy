import "@/app/globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
	return (
		<>
			<Navbar />

			<main className="relative mx-2 md:mx-10 lg:mx-36">{children}</main>
			<Footer />
		</>
	);
}
