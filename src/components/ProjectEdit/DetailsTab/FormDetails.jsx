"use client";

import Details from "@/components/ProjectEdit/DetailsTab/Details";
import SideMenu from "@/components/ProjectEdit/SideMenu";

const FormDetails = ({ project }) => {
	return (
		<>
			<div className="lg:grid grid-cols-5">
				<div className="p-2 mb-6">
					{/* Project Status and links */}
					<SideMenu project={project} />
				</div>
				<div className="col-span-4 lg:px-2 lg:pl-10">
					{/* Project details and stats information */}
					<Details project={project} />
				</div>
			</div>
		</>
	);
};
export default FormDetails;
