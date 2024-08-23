import "@/app/globals.css";

import UserNavbar from "@/components/UserProfilePrivate/UserNavbar";

export default function RootLayout({ children }) {
	return (
		<>
			<div className="mt-10 mb-4 sm:mb-14">
				<UserNavbar />
			</div>
			{children}
		</>
	);
}
