import { redirect } from "next/navigation";

import SideMenu from "@/components/ProjectEdit/SideMenu";
import ProjectEditNavbar from "@/components/ProjectEdit/ProjectEditNavbar";
import Error from "@/components/Errors/Error";

import { ApiGetEditUserRights } from "@/lib/api/projectEditionServer";
import { ERRORS } from "@/lib/constants";

export default async function RootLayout({ params, children }) {
	const { projectLink } = params;

	const result = await ApiGetEditUserRights(projectLink);
	if (!result.ok || !result.data || !result.data.projectRights || !result.data.projectStatus) {
		if (result.status === 401 || result.status === 403) {
			redirect("/access-denied");
		}

		return <Error title={ERRORS.NOT_FOUND.PROJECT_TITLE} message={ERRORS.NOT_FOUND.PROJECT_MESSAGE} extraMessage={result.message} />;
	}

	const projectRights = result.data.projectRights;
	const projectStatus = result.data.projectStatus;
	const status = projectStatus?.status;
	const statusBgColor = projectStatus?.colors.bgColor;

	return (
		<>
			<div className="sm:mt-10 xl:mb-16">
				<h1 className="text-center text-3xl font-semibold mb-8">Project edition</h1>
			</div>
			<div className="container mx-auto hyphens-auto">
				<div className="lg:grid grid-cols-5">
					<div className="px-2 mb-6">
						{/* Project Status and links */}
						<SideMenu projectLink={projectLink} status={status} statusBgColor={statusBgColor} />
					</div>
					<div className="col-span-4 lg:px-2 lg:pl-10">
						{/* Project edition navbar */}
						<ProjectEditNavbar projectRights={projectRights} />
						{/* Project information */}
						{children}
					</div>
				</div>
			</div>
		</>
	);
}
