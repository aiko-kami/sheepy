import "../globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UserNavbar from "@/components/UserProfilePrivate/UserNavbar";

export default function RootLayout({ children }) {
	return (
		<>
			<Navbar />

			<main className="relative my-auto mx-2 md:mx-10 lg:mx-36">
				<div className="mt-10 mb-4 sm:mb-14">
					<UserNavbar />
				</div>
				{children}
			</main>
			<Footer />
		</>
	);
}
