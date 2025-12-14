import MembersDetails from "@/components/ProjectEdit/MembersTab/MembersDetails";
import TalentsNeeded from "@/components/ProjectEdit/MembersTab/TalentsNeeded";
import TalentsNeededTest from "@/components/ProjectEdit/MembersTab/TalentsNeededTest";
import JoinRequests from "@/components/ProjectEdit/MembersTab/JoinRequests";
import JoinInvitations from "@/components/ProjectEdit/MembersTab/JoinInvitations";

const Members = ({ projectId, user, userPermissions, members, talentsNeeded, joinProject }) => {
	return (
		<>
			{/* Project members */}
			<div className="mb-8 lg:mb-14">
				<MembersDetails user={user} projectId={projectId} userPermissions={userPermissions} members={members} />
			</div>
			{/* Talents needed */}
			<div className="mb-8 lg:mb-14">
				<TalentsNeeded projectId={projectId} user={user} talentsNeeded={talentsNeeded} userPermissions={userPermissions} />
			</div>
			{/* Talents needed Test*/}
			<div className="mb-8 lg:mb-14">
				<TalentsNeededTest projectId={projectId} talentsNeeded={talentsNeeded} userPermissions={userPermissions} />
			</div>
			{/* Requests to join the project */}
			<div className="mb-8 lg:mb-14">
				<JoinRequests projectId={projectId} joinProjectRequests={joinProject?.joinRequests} user={user} userPermissions={userPermissions} />
			</div>
			{/* Invitations to join the project */}
			<div className="mb-8 lg:mb-14">
				<JoinInvitations projectId={projectId} talentsNeeded={talentsNeeded} joinProjectInvitations={joinProject?.joinInvitations} user={user} userPermissions={userPermissions} />
			</div>
		</>
	);
};
export default Members;
