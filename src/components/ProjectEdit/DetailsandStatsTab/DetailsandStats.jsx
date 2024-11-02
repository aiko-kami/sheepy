import DetailsandStatsDetails from "@/components/ProjectEdit/DetailsandStatsTab/DetailsandStatsDetails";

const DetailsandStats = ({ formState, onChange }) => {
	return (
		<>
			{/* Project details and stats */}
			<div className="mb-8 lg:mb-14">
				<DetailsandStatsDetails formState={formState} onChange={onChange} />
			</div>
		</>
	);
};
export default DetailsandStats;
