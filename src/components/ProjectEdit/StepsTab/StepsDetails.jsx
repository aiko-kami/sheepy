import Link from "next/link";
import Image from "next/image";
import { IoExtensionPuzzle, IoAddOutline } from "react-icons/io5";

import DraggableStepsList from "@/components/ProjectEdit/StepsTab/DraggableStepsList";
import { Button } from "@/components/Buttons/Buttons";

const StepsDetails = ({ formInputs, onChange, addStep }) => {
	return (
		<>
			{/* Project steps */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoExtensionPuzzle className="mr-2 text-2xl" />
				Project steps
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="pl-4">
				{/* Project steps*/}
				<div className="mb-8">
					{formInputs.updatedBy.userId && (
						<>
							<div className="mb-4 flex items-center justify-end italic text-sm">
								<span className="mr-2">Last update by</span>
								<span className="flex items-center mr-2">
									<Link href={`/users/${formInputs.updatedBy.userId}`}>
										<Image src={formInputs.updatedBy.profilePicture} height={0} width={0} sizes="100vw" alt="User profile picture" className="object-cover min-w-9 h-9 rounded-full shadow-md mr-1" />
									</Link>
									<div className="lg:whitespace-nowrap">
										<Link href={`/users/${formInputs.updatedBy.userId}`}>{formInputs.updatedBy.username}</Link>
									</div>
									,
								</span>
								{formInputs.updatedAt}
							</div>
						</>
					)}
					{formInputs.projectSteps && formInputs.projectSteps.length !== 0 ? (
						<DraggableStepsList formInputs={formInputs} onChange={onChange} />
					) : (
						<p className=" text-xl text-center pt-10">
							<span className="italic">Your project does not have any step yet</span>
						</p>
					)}
				</div>
				<div className="mb-6">
					<Button
						btnProps={{
							type: "button",
							btnColor: "blue",
							action: addStep,
						}}
					>
						<div className="flex items-center">
							New step <IoAddOutline className="text-2xl ml-2 mt-0.5" />
						</div>
					</Button>
				</div>
			</div>
		</>
	);
};

export default StepsDetails;
