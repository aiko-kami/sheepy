import DetailsDetails from "@/components/ProjectEdit/DetailsTab/DetailsDetails";

const Details = ({ project }) => {
	return (
		<>
			{/* Project details and stats */}
			<div className="mb-8 lg:mb-14">
				<DetailsDetails project={project} />
			</div>
		</>
	);
};
export default Details;
