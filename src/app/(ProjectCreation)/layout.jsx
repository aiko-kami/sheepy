import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
	return (
		<>
			<div className="flex flex-col min-h-screen">
				<Navbar />
				<main className="m-4 mt-8 p-8">{children}</main>
				<div className="min-h-6"></div>
			</div>
		</>
	);
}
