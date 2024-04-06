import "../globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
	title: "Sheepy",
	description: "Bring your projects to life",
};

export default function RootLayout({ children }) {
	return (
		<body className="flex flex-col h-screen text-base-100 bg-base-500">
			<Navbar isHomePage={false} />
			<main className="relative my-auto mx-2 md:mx-10 xl:mx-36">{children}</main>
			<Footer />
		</body>
	);
}
