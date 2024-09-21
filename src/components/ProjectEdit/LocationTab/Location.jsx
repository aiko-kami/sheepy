import LocationDetails from "@/components/ProjectEdit/LocationTab/LocationDetails";

const Location = ({ formState, onChange }) => {
	return (
		<>
			{/* Project location */}
			<div className="mb-8 lg:mb-10">
				<LocationDetails formState={formState} onChange={onChange} />
			</div>
		</>
	);
};
export default Location;
