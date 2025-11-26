import StepsDetails from "@/components/ProjectEdit/StepsTab/StepsDetails";

const Steps = ({ formInputs, onChange, addStep, userPermissions }) => {
	return (
		<>
			{/* Project steps */}
			<div className="mb-8 lg:mb-14">
				<StepsDetails formInputs={formInputs} onChange={onChange} addStep={addStep} userPermissions={userPermissions} />
			</div>
		</>
	);
};
export default Steps;
