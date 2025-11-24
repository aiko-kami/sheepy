import { IoLocationSharp, IoGlobeOutline, IoLocationOutline } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";
import LocationInputField from "@/components/Forms/LocationInputField";

const LocationDetails = ({ formInputs, onChange, userPermissions }) => {
	return (
		<>
			{/* Project location */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoLocationSharp className="mr-2 text-2xl" />
				Project location
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="md:pl-4">
				{userPermissions?.canEditLocation ? (
					<>
						{/* Project location */}
						<LocationInputField
							locationOnlineOnly={formInputs.locationOnlineOnly}
							locationCountry={formInputs.projectLocationCountry}
							locationCity={formInputs.projectLocationCity}
							onChange={onChange}
						/>

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
					</>
				) : (
					<>
						<p className="text-xs italic text-pink-700 mb-3">You do not have permission to edit the project location</p>
						<div className="flex items-center gap-1">
							{formInputs.locationOnlineOnly ? (
								<>
									<div className="flex items-center gap-3 px-5 py-4 w-full sm:w-100 bg-blue-900/30 border border-blue-700/40 rounded-lg">
										<IoGlobeOutline className="w-6 h-6 text-teal-400" />
										<div>
											<p className="text-lg font-medium text-white">Online only</p>
											<p className="text-sm italic text-slate-400">No physical location required for this project</p>
										</div>
									</div>
								</>
							) : (
								<>
									{!formInputs.projectLocationCity & !formInputs.projectLocationCountry ? (
										<div className="w-full sm:w-100 p-3 bg-red-100 border-l-4 border-red-500 rounded-r-md">
											<p className="text-red-700 text-sm font-medium italic">Missing field</p>
										</div>
									) : (
										<>
											<div className="flex items-center gap-3 px-5 py-4 w-full sm:w-100 bg-blue-900/30 border border-blue-700/40 rounded-lg">
												<IoLocationOutline className="w-6 h-6 text-blue-300" />
												<div>
													<p className="text-lg font-medium text-white">
														{formInputs.projectLocationCity && <span>{formInputs.projectLocationCity}</span>}
														{formInputs.projectLocationCity && formInputs.projectLocationCountry && <span>, </span>}
														<span>{formInputs.projectLocationCountry}</span>
													</p>
												</div>
											</div>
										</>
									)}
								</>
							)}
						</div>
					</>
				)}
			</div>
		</>
	);
};
export default LocationDetails;
