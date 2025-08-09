import StepsDetails from "@/components/ProjectEdit/StepsTab/StepsDetails";

const Steps = ({ formInputs, onChange, addStep }) => {
	return (
		<>
			{/* Project steps */}
			<div className="mb-8 lg:mb-14">
				<StepsDetails formInputs={formInputs} onChange={onChange} addStep={addStep} />
			</div>
		</>
	);
};
export default Steps;
