import Members from "@/components/ProjectEdit/MembersTab/Members";

const FormMembers = ({ project, user, projectId, projectLink, status, statusBgColor, members, talentsNeeded }) => {
	return (
		<>
			{/* Project members information */}
			<Members project={project} user={user} members={members} talentsNeeded={talentsNeeded} />
		</>
	);
};
export default FormMembers;
