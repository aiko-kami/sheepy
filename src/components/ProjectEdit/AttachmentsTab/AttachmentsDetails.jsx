import { IoDocuments } from "react-icons/io5";
import AttachmentsTable from "@/components/Tables/ProjectEdit/AttachmentsTable";
import { PermissionsErrorPane } from "@/components/Errors/PermissionsError";
import ERRORS from "@/lib/constants/errors";

const AttachmentsDetails = ({ projectId, attachments, userPermissions }) => {
	return (
		<>
			{/* Project attachments */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoDocuments className="mr-2 text-2xl" />
				Project attachments
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="md:px-4">
				{/* Project attachments */}
				{userPermissions.canViewAttachments ? (
					<div className="md:px-4 mb-12">
						<div className="flex justify-center">
							{attachments && (
								<div className="w-full overflow-x-auto shadow-md sm:rounded-lg">
									<AttachmentsTable attachments={attachments} projectId={projectId} userPermissions={userPermissions} />
								</div>
							)}
						</div>
					</div>
				) : (
					<PermissionsErrorPane message={ERRORS.PROJECT_EDIT.VIEW_ATTACHMENTS} />
				)}
			</div>
		</>
	);
};
export default AttachmentsDetails;
