"use client";

import Image from "next/image";
import InputField from "@/components/Forms/InputField";
import { Button } from "@/components/Buttons/Buttons";
import { IoAddCircleOutline, IoCloseCircleOutline } from "react-icons/io5";

const StepSix = ({
	formInputs,
	talentNeededTalentInput,
	talentNeededDescriptionInput,
	addTalentNeeded,
	removeTalentNeeded,
	handleTalentNeededTalentInputChange,
	handleTalentNeededDescriptionInputChange,
	talentNeededError,
	talentNeededProfilePicture,
}) => {
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
								<div className="">
									<div className="relative">
										<div className="flex items-end my-6">
											<div className="w-full mr-2">
												<div className="mb-4">
													<InputField
														inputName="talentNeeded"
														inputType="text"
														label="Add a talent you're looking for"
														inputValue={talentNeededTalentInput}
														onChange={handleTalentNeededTalentInputChange}
														onKeyDown={(e) => {
															if (e.key === "Enter") {
																e.preventDefault();
																addTalentNeeded();
															}
														}}
													/>
												</div>
												<InputField
													inputName="talentNeeded"
													inputType="text"
													label="Add a short description"
													inputValue={talentNeededDescriptionInput}
													onChange={handleTalentNeededDescriptionInputChange}
													onKeyDown={(e) => {
														if (e.key === "Enter") {
															e.preventDefault();
															addTalentNeeded();
														}
													}}
												/>
											</div>
											<div className="min-w-fit">
												<Button btnProps={{ btnSize: "sm", type: "button", btnColor: "blue", btnRounded: "std", action: addTalentNeeded }}>
													<div className="flex">
														Add talent <IoAddCircleOutline className="text-xl ml-2" />
													</div>
												</Button>
											</div>
										</div>
										<div className="absolute left-0 top-28 text-sm">{talentNeededError && <p className="text-xs text-red-600">{talentNeededError}</p>}</div>
									</div>
									{/* List of talents needed */}
									<div className="min-h-32">
										{formInputs.talentsNeeded.length > 0 && (
											<div className="flex flex-col gap-2">
												{formInputs.talentsNeeded.map((talentNeeded, index) => (
													<div key={index} className="flex items-center p-2">
														<button
															title="Remove talent"
															type="button"
															className="text-gray-300 mr-8 hover:text-white transition duration-150 ease-in-out"
															onClick={() => removeTalentNeeded(talentNeeded.talent)}
														>
															<IoCloseCircleOutline className="text-2xl" />
														</button>
														<span className="flex items-center">
															<Image src={talentNeededProfilePicture} className="object-cover rounded-full w-10 h-10 mr-3" alt="talent profile picture" height={0} width={0} sizes="100vw" />
															<div className="flex flex-col">
																<span className="font-semibold">{talentNeeded.talent}</span>
																<p className="text-sm">{talentNeeded.description}</p>
															</div>
														</span>
													</div>
												))}
											</div>
										)}
									</div>
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
