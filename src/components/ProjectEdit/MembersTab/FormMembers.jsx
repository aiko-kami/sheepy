import Members from "@/components/ProjectEdit/MembersTab/Members";

const FormMembers = ({ projectId, user, userPermissions, members, talentsNeeded, joinProject }) => {
	return (
		<>
			{/* Project members information */}
			<Members projectId={projectId} user={user} userPermissions={userPermissions} members={members} talentsNeeded={talentsNeeded} joinProject={joinProject} />
		</>
	);
};
export default FormMembers;
