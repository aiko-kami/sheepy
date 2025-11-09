import Members from "@/components/ProjectEdit/MembersTab/Members";

const FormMembers = ({ project, user, projectId, members, talentsNeeded }) => {
	return (
		<>
			{/* Project members information */}
			<Members project={project} projectId={projectId} user={user} members={members} talentsNeeded={talentsNeeded} />
		</>
	);
};
export default FormMembers;
