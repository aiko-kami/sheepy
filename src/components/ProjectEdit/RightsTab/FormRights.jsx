import Rights from "@/components/ProjectEdit/RightsTab/Rights";

const FormRights = ({ project, projectLink }) => {
	return (
		<>
			{/* Project rights information */}
			<Rights project={project} />
		</>
	);
};
export default FormRights;
