"use client";

import MembersDetails from "@/components/ProjectEdit/MembersTab/MembersDetails";
import TalentsNeeded from "@/components/ProjectEdit/MembersTab/TalentsNeeded";
import JoinRequests from "@/components/ProjectEdit/MembersTab/JoinRequests";
import JoinInvitations from "@/components/ProjectEdit/MembersTab/JoinInvitations";

const Members = ({ project, user }) => {
	return (
		<>
			{/* Project members */}
			<div className="mb-8 lg:mb-14">
				<MembersDetails project={project} user={user} />
			</div>
			{/* Talents needed */}
			<div className="mb-8 lg:mb-14">
				<TalentsNeeded project={project} user={user} />
			</div>
			{/* Project members */}
			<div className="mb-8 lg:mb-14">
				<JoinRequests project={project} user={user} />
			</div>
			{/* Project members */}
			<div className="mb-8 lg:mb-14">
				<JoinInvitations project={project} user={user} />
			</div>
		</>
	);
};
export default Members;
