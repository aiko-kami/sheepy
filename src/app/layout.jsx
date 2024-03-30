import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
	title: "Sheepy",
	description: "Bring your projects to life",
};

export default function RootLayout({ children }) {
	return <html lang="en">{children}</html>;
}
