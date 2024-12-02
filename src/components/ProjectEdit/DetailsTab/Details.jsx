import DetailsDetails from "@/components/ProjectEdit/DetailsTab/DetailsDetails";

const Details = ({ formState, onChange }) => {
	return (
		<>
			{/* Project details and stats */}
			<div className="mb-8 lg:mb-14">
				<DetailsDetails formState={formState} onChange={onChange} />
			</div>
		</>
	);
};
export default Details;
