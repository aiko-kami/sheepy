"use client";

import { useState } from "react";
import Members from "@/components/ProjectEdit/MembersTab/Members";
import SideMenu from "@/components/ProjectEdit/SideMenu";

const FormMembers = ({ project, user }) => {
	return (
		<>
			<div className="lg:grid grid-cols-5">
				<div className="p-2 mb-6">
					{/* Project Status and links */}
					<SideMenu project={project} />
				</div>
				<div className="col-span-4 lg:px-2 lg:pl-10">
					{/* Project members information */}
					<Members project={project} user={user} />
				</div>
			</div>
		</>
	);
};
export default FormMembers;
