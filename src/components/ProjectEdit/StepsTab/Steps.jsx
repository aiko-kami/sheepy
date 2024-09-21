import StepsDetails from "@/components/ProjectEdit/StepsTab/StepsDetails";

const Steps = ({ formState, onChange }) => {
	return (
		<>
			{/* Project status */}
			<div className="mb-8 lg:mb-14">
				<StepsDetails formState={formState} onChange={onChange} />
			</div>
		</>
	);
};
export default Steps;
