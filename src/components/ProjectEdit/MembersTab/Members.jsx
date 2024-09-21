"use client";

import MembersDetails from "@/components/ProjectEdit/MembersTab/MembersDetails";
import JoinRequests from "@/components/ProjectEdit/MembersTab/JoinRequests";
import JoinInvitations from "@/components/ProjectEdit/MembersTab/JoinInvitations";

const Members = ({ formState, onChange, members }) => {
	return (
		<>
			{/* Project members */}
			<div className="mb-8 lg:mb-14">
				<MembersDetails formState={formState} onChange={onChange} members={members} />
			</div>
			{/* Project members */}
			<div className="mb-8 lg:mb-14">
				<JoinRequests formState={formState} onChange={onChange} />
			</div>
			{/* Project members */}
			<div className="mb-8 lg:mb-14">
				<JoinInvitations formState={formState} onChange={onChange} />
			</div>
		</>
	);
};
export default Members;
