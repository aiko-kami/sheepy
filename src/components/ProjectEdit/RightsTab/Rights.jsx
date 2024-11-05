import RightsDetails from "@/components/ProjectEdit/RightsTab/RightsDetails";

const Rights = ({ formState, project, onChange }) => {
	return (
		<>
			{/* Project status */}
			<div className="mb-8 lg:mb-14">
				<RightsDetails formState={formState} project={project} onChange={onChange} />
			</div>
		</>
	);
};
export default Rights;
