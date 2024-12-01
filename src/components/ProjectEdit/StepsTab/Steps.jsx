import StepsDetails from "@/components/ProjectEdit/StepsTab/StepsDetails";

const Steps = ({ formState, onChange, addStep }) => {
	return (
		<>
			{/* Project steps */}
			<div className="mb-8 lg:mb-14">
				<StepsDetails formState={formState} onChange={onChange} addStep={addStep} />
			</div>
		</>
	);
};
export default Steps;
