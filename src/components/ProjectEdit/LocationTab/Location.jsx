import LocationDetails from "@/components/ProjectEdit/LocationTab/LocationDetails";

const Location = ({ formInputs, onChange, userPermissions }) => {
	return (
		<>
			{/* Project location */}
			<div className="mb-8 lg:mb-10">
				<LocationDetails formInputs={formInputs} onChange={onChange} userPermissions={userPermissions} />
			</div>
		</>
	);
};
export default Location;
