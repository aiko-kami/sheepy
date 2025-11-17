import DetailsDetails from "@/components/ProjectEdit/DetailsTab/DetailsDetails";

const Details = ({ project, creator, owners, createdAt, updatedAt, updatedBy, likes, crush }) => {
	return (
		<>
			{/* Project details and stats */}
			<div className="mb-8 lg:mb-14">
				<DetailsDetails project={project} creator={creator} owners={owners} createdAt={createdAt} updatedAt={updatedAt} updatedBy={updatedBy} likes={likes} crush={crush} />
			</div>
		</>
	);
};
export default Details;
