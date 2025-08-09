import StatusDetails from "@/components/ProjectEdit/StatusTab/StatusDetails";
import Visibility from "@/components/ProjectEdit/StatusTab/Visibility";
import StatusHistory from "@/components/ProjectEdit/StatusTab/StatusHistory";

const Status = ({ formInputs, onChange, status }) => {
	return (
		<>
			{/* Project status */}
			<div className="mb-8 lg:mb-10">
				<StatusDetails formInputs={formInputs} onChange={onChange} />
			</div>
			{/* Project visibility */}
			<div className="mb-8 lg:mb-10">
				<Visibility formInputs={formInputs} onChange={onChange} />
			</div>
			{/* Project status history */}
			<StatusHistory status={status} />
		</>
	);
};
export default Status;
