import { IoLocationSharp } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";
import LocationInputField from "@/components/Forms/LocationInputField";

const LocationDetails = ({ formInputs, onChange }) => {
	return (
		<>
			{/* Project location */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoLocationSharp className="mr-2 text-2xl" />
				Project location
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="md:pl-4">
				{/* Project location */}
				<LocationInputField locationOnlineOnly={formInputs.locationOnlineOnly} locationCountry={formInputs.projectLocationCountry} locationCity={formInputs.projectLocationCity} onChange={onChange} />

				<div className="flex justify-center">
					<Button
						btnProps={{
							type: "submit",
							btnColor: "blue",
						}}
					>
						Save project
					</Button>
				</div>
			</div>
		</>
	);
};
export default LocationDetails;
