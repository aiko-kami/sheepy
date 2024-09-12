import "../../../../globals.css";

import ProjectEditNavbar from "@/components/ProjectEdit/ProjectEditNavbar";

export default function RootLayout({ children }) {
	return (
		<>
			<div className="mb-4 sm:mt-10 sm:mb-6">
				<h1 className="text-center text-3xl font-semibold mb-8">Project edition</h1>
				<ProjectEditNavbar />
			</div>
			{children}
		</>
	);
}
