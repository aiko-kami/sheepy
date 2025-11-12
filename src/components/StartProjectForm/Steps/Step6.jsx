import TalentInputField from "@/components/Forms/TalentNeededInputField/TalentInputField";

const StepSix = ({ formInputs, setFormInputs }) => {
	return (
		<>
			<div className="container min-w-full m-auto pr-2 lg:px-8 text-justify xl:grid grid-cols-5 gap-8">
				<div className="col-span-2 xl:pl-14">
					<p className="text-xl mb-4 text-center">You reached the last step!</p>
					<p className="mb-6 text-justify">Now the most important, list all the talents required to bring your project to life.</p>
				</div>
				<div className="col-span-3">
					{/* List of fields */}
					<div className="flex justify-end items-center">
						<div className="flex flex-col items-center w-full">
							<div className="w-full sm:w-100 xl:w-120">
								{/* Talents needed input field */}
								<div className="mb-6">
									<TalentInputField talentsNeeded={formInputs.talentsNeeded} setFormInputs={setFormInputs} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default StepSix;
