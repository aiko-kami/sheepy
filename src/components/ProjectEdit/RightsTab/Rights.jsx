import RightsDetails from "@/components/ProjectEdit/RightsTab/RightsDetails";

const Rights = ({ formState, onChange }) => {
	return (
		<>
			{/* Project status */}
			<div className="mb-8 lg:mb-14">
				<RightsDetails formState={formState} onChange={onChange} />
			</div>
		</>
	);
};
export default Rights;
