import { IoChatbubblesSharp, IoAddOutline } from "react-icons/io5";

import DraggableQnasList from "@/components/ProjectEdit/QandAsTab/DraggableQnasList";
import LastUpdateBy from "@/components/ProjectEdit/LastUpdateBy";
import { Button } from "@/components/Buttons/Buttons";

const QandAsDetails = ({ formInputs, onChange, addQna, userPermissions }) => {
	return (
		<>
			{/* Project Q&As */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoChatbubblesSharp className="mr-2 text-2xl" />
				Project Q&As
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="md:pl-4">
				{/* Project Q&As*/}
				<div className="mb-8">
					<LastUpdateBy updatedBy={formInputs.updatedBy} updatedAt={formInputs.updatedAt} />

					{formInputs.projectQnas && formInputs.projectQnas.length !== 0 ? (
						<DraggableQnasList formInputs={formInputs} onChange={onChange} />
					) : (
						<p className=" text-xl text-center pt-10">
							<span className="italic">Your project does not have any Q&A yet</span>
						</p>
					)}
				</div>
				<div className="mb-8">
					<Button
						btnProps={{
							type: "button",
							btnColor: "blue",
							action: addQna,
						}}
					>
						<div className="flex items-center">
							New Q&A <IoAddOutline className="text-2xl ml-2 mt-0.5" />
						</div>
					</Button>
				</div>
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
export default QandAsDetails;
