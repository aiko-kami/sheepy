import Rights from "@/components/ProjectEdit/RightsTab/Rights";

const FormRights = ({ projectId, membersProjectRights }) => {
	return (
		<>
			{/* Project rights information */}
			<Rights projectId={projectId} membersProjectRights={membersProjectRights} />
		</>
	);
};
export default FormRights;
