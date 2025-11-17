import Details from "@/components/ProjectEdit/DetailsTab/Details";

const FormDetails = ({ project, creator, owners, createdAt, updatedAt, updatedBy, likes, crush }) => {
	return (
		<>
			{/* Project details and stats information */}
			<Details project={project} creator={creator} owners={owners} createdAt={createdAt} updatedAt={updatedAt} updatedBy={updatedBy} likes={likes} crush={crush} />
		</>
	);
};
export default FormDetails;
