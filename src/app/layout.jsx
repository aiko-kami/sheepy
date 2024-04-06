import "./globals.css";

export const metadata = {
	title: "Sheepy",
	description: "Bring your projects to life",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="flex flex-col h-screen text-base-100 bg-base-500">{children}</body>
		</html>
	);
}
