import { SelectField } from "@/components/Forms/SelectField";
import DatePickerField from "@/components/Forms/DatePickerField";
import TagInputField from "@/components/Forms/TagInputField/TagInputField";
import LocationInputField from "@/components/Forms/LocationInputField";

const StepFive = ({ formInputs, setFormInputs, onChange, tagsList, setProjectStartDate }) => {
	const optionsList = [
		{
			value: "public",
			option: "Public",
		},
		{
			value: "private",
			option: "Private",
		},
	];

	return (
		<>
			<div className="container min-w-full m-auto pr-2 lg:px-8 text-justify xl:grid grid-cols-5 gap-8">
				<div className="col-span-2 xl:pl-14">
					<p className="text-xl mb-4 text-center">Your project creation is almost complete! Just a few more details to finalize.</p>
					<div className="mb-6 text-justify">
						<ul className="list-disc list-inside">
							<li className="mb-4">Specify whether the project is online-only, meaning it doesn't require a physical location and participants can join remotely from anywhere.</li>
							<li className="mb-4">If the project is not online-only, provide the project's location.</li>
							<li className="mb-4">
								Set the visibility of the project:
								<ul className="list-['-__'] list-inside ml-4 text-left">
									<li>Public projects are accessible to everyone.</li>
									<li>Private projects are only visible to a selected audience.</li>
								</ul>
							</li>
							<li className="mb-4">Choose a start date for your project (Optional).</li>
							<li className="mb-4">Add relevant tags to help people find your project based on specific keywords (Optional).</li>
						</ul>
					</div>
				</div>
				<div className="col-span-3">
					{/* List of fields */}
					<div className="flex justify-end items-center">
						<div className="flex flex-col items-center w-full">
							<div className="w-full sm:w-100 xl:w-120">
								{/* Project location */}
								<LocationInputField locationOnlineOnly={formInputs.locationOnlineOnly} locationCountry={formInputs.locationCountry} locationCity={formInputs.locationCity} onChange={onChange} />

								{/* Project visibility */}
								<div className="mb-6">
									<SelectField inputName="projectVisibility" possibleValues={optionsList} inputValue={formInputs.projectVisibility} onChange={onChange} />
								</div>

								{/* Start date picker */}
								<div className="mb-6 w-60">
									<DatePickerField label="Set a start date (optional)" value={formInputs.projectStartDate} onChange={(newValue) => setProjectStartDate(newValue)} />
								</div>

								{/* Tags */}
								<div className="mb-6">
									<TagInputField formInputs={formInputs} setFormInputs={setFormInputs} tagsList={tagsList} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default StepFive;
