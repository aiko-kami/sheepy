import Rights from "@/components/ProjectEdit/RightsTab/Rights";

const FormRights = ({ projectId, membersProjectRights, userPermissions }) => {
	return (
		<>
			{/* Project rights information */}
			<Rights projectId={projectId} membersProjectRights={membersProjectRights} userPermissions={userPermissions} />
		</>
	);
};
export default FormRights;
