import { IoLocationSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/Buttons/Buttons";
import { ToggleField } from "@/components/Forms/ToggleField";
import InputField from "@/components/Forms/InputField";

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
				<div className="mb-8">
					<ToggleField inputName="locationOnlineOnly" checked={formInputs.locationOnlineOnly} label="Project online only" onChange={onChange} />
				</div>
				<AnimatePresence mode="wait">
					{!formInputs.locationOnlineOnly && (
						<motion.div
							key="location-fields"
							initial={{ opacity: 0, height: 0, y: -10 }}
							animate={{ opacity: 1, height: "auto", y: 0 }}
							exit={{ opacity: 0, height: 0, y: -10 }}
							transition={{ duration: 0.3, ease: "easeOut" }}
							className="overflow-hidden"
						>
							<div className="max-w-140 mb-8 pt-2">
								<div className="mb-6 xl:mb-8">
									<InputField
										inputName="projectLocationCountry"
										inputType="text"
										label="Project country"
										inputValue={formInputs.projectLocationCountry}
										onChange={onChange}
										disabled={formInputs.locationOnlineOnly}
									/>
								</div>
								<div>
									<InputField inputName="projectLocationCity" inputType="text" label="City" inputValue={formInputs.projectLocationCity} onChange={onChange} disabled={formInputs.locationOnlineOnly} />
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
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
