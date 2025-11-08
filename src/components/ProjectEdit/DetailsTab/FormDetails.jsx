import Details from "@/components/ProjectEdit/DetailsTab/Details";

const FormDetails = ({ project, projectLink }) => {
	return (
		<>
			{/* Project details and stats information */}
			<Details project={project} />
		</>
	);
};
export default FormDetails;
