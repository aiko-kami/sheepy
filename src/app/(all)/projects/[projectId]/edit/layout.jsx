import ProjectEditNavbar from "@/components/ProjectEdit/ProjectEditNavbar";

export default function RootLayout({ children }) {
	return (
		<>
			<div className="sm:mt-10 xl:mb-16">
				<h1 className="text-center text-3xl font-semibold mb-8">Project edition</h1>
				<ProjectEditNavbar />
			</div>
			{children}
		</>
	);
}
