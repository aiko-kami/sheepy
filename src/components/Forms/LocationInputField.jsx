import { motion, AnimatePresence } from "framer-motion";
import { ToggleField } from "@/components/Forms/ToggleField";
import InputField from "@/components/Forms/InputField";

const LocationInputField = ({ locationOnlineOnly, locationCountry, locationCity, onChange }) => {
	return (
		<>
			<div className="mb-8">
				<ToggleField inputName="locationOnlineOnly" checked={locationOnlineOnly} label="Project online only" onChange={onChange} />
			</div>
			<AnimatePresence mode="wait">
				{!locationOnlineOnly && (
					<motion.div
						key="location-fields"
						initial={{ opacity: 0, height: 0, y: -10 }}
						animate={{ opacity: 1, height: "auto", y: 0 }}
						exit={{ opacity: 0, height: 0, y: -10 }}
						transition={{ duration: 0.3, ease: "easeOut" }}
						className="overflow-hidden"
					>
						<div className="max-w-140 mb-8 pt-2">
							<div className="mb-8">
								<InputField inputName="locationCountry" inputType="text" label="Country" inputValue={locationCountry} onChange={onChange} disabled={locationOnlineOnly} />
							</div>
							<div>
								<InputField inputName="locationCity" inputType="text" label="City" inputValue={locationCity} onChange={onChange} disabled={locationOnlineOnly} />
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default LocationInputField;
