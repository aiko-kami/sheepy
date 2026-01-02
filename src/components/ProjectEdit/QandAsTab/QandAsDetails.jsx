import { IoChatbubblesSharp, IoAddOutline } from "react-icons/io5";

import DraggableQnasList from "@/components/ProjectEdit/QandAsTab/DraggableQnasList";
import StaticQnasList from "@/components/ProjectEdit/QandAsTab/StaticQnasList";
import LastUpdateBy from "@/components/ProjectEdit/LastUpdateBy";
import { PermissionsErrorPane } from "@/components/Errors/PermissionsError";
import { Button } from "@/components/Buttons/Buttons";
import ERRORS from "@/lib/constants/errors";

const QandAsDetails = ({ formInputs, onChange, addQna, userPermissions }) => {
	return (
		<>
			{/* Project Q&As */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoChatbubblesSharp className="mr-2 text-2xl" />
				Project Q&As
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="md:px-4">
				{/* Project Q&As*/}
				<div className="mb-6">
					{!userPermissions.canEditQAs && (
						<div className="mb-4">
							<PermissionsErrorPane message={ERRORS.PROJECT_EDIT.EDIT_QNAS} />
						</div>
					)}
					{formInputs.projectQnas && formInputs.projectQnas.length !== 0 ? (
						<>
							{userPermissions.canEditQAs ? <DraggableQnasList formInputs={formInputs} onChange={onChange} /> : <StaticQnasList qnas={formInputs.projectQnas} />}
							<LastUpdateBy updatedBy={formInputs.updatedBy} updatedAt={formInputs.updatedAt} />
						</>
					) : (
						<p className=" text-xl text-center pt-10">
							<span className="italic">Your project does not have any Q&A yet</span>
						</p>
					)}
				</div>
				{userPermissions.canEditQAs && (
					<>
						<div className="mb-8">
							<Button
								btnProps={{
									type: "button",
									btnColor: "blue",
									action: addQna,
									disabled: !userPermissions.canEditQAs,
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
									disabled: !userPermissions.canEditQAs,
								}}
							>
								Save project
							</Button>
						</div>
					</>
				)}
			</div>
		</>
	);
};
export default QandAsDetails;
