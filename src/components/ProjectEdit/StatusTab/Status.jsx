import StatusDetails from "@/components/ProjectEdit/StatusTab/StatusDetails";
import Visibility from "@/components/ProjectEdit/StatusTab/Visibility";
import StatusHistory from "@/components/ProjectEdit/StatusTab/StatusHistory";

const Status = ({ formInputs, onChange, handleStartDateChange, statusHistory, statusesList, userPermissions }) => {
	return (
		<>
			{/* Project status */}
			<div className="mb-8 lg:mb-10">
				<StatusDetails formInputs={formInputs} onChange={onChange} statusesList={statusesList} userPermissions={userPermissions} />
			</div>
			{/* Project visibility and start date */}
			<div className="mb-8 lg:mb-10">
				<Visibility formInputs={formInputs} onChange={onChange} handleStartDateChange={handleStartDateChange} userPermissions={userPermissions} />
			</div>
			{/* Project status history */}
			<StatusHistory statusHistory={statusHistory} />
		</>
	);
};
export default Status;
