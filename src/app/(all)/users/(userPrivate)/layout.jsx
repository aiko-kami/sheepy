import UserNavbar from "@/components/User/UserNavbar";

export default function RootLayout({ children }) {
	return (
		<>
			<div className="mb-4 sm:mt-10 sm:mb-14">
				<UserNavbar />
			</div>
			{children}
		</>
	);
}
