import "./globals.css";
import { AppProvider } from "../contexts/AppProvider";
import { Toaster } from "react-hot-toast";
import { toastOptions } from "@/config/toastConfig";

export const metadata = {
	title: "Make It",
	description: "Bring your projects to life",
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
					{children}
					<Toaster {...toastOptions} />
				</AppProvider>
			</body>
		</html>
	);
}
