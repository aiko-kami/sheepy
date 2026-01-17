import "./globals.scss";
import "rsuite/dist/rsuite-no-reset.min.css";
import { AppProvider } from "../contexts/AppProvider";
import { CustomProvider } from "rsuite";
import { Toaster } from "react-hot-toast";
import { toastOptions } from "@/config/toastConfig";

export const metadata = {
	title: "Make It",
	description: "Bring your projects to life",
	robots: "index, follow",
	openGraph: {
		title: "Make It",
		description: "Bring your projects to life",
		type: "website",
		url: "https://www.makeit-lab.com",
		siteName: "Make It",
		images: [
			{
				url: "https://www.makeit-lab.com/logo_MakeIt_yellow.png",
				width: 1023,
				height: 297,
				alt: "Make It — bring your projects to life",
			},
		],
	},
	icons: {
		icon: "/images/favicon-32x32.png",
		apple: "/images/apple-touch-icon.png",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="flex flex-col h-screen text-primary bg-base-500">
				<link rel="shortcut icon" href="/images/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
				<link rel="android-chrome-192x192" sizes="192x192" href="/images/android-chrome-192x192.png" />
				<link rel="android-chrome-512x512" sizes="512x512" href="/images/android-chrome-512x512.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
				<AppProvider>
					<CustomProvider theme="dark">
						{children}
						<Toaster {...toastOptions} />
					</CustomProvider>
				</AppProvider>
			</body>
		</html>
	);
}
