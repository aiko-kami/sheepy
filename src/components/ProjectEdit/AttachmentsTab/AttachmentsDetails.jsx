import { IoDocuments, IoPushOutline } from "react-icons/io5";
import FileDropField from "@/components/Forms/FileDropField";
import AttachmentsTable from "@/components/Tables/AttachmentsTable";

const AttachmentsDetails = ({ formState, onChange, attachments }) => {
	return (
		<>
			{/* Project attachments */}
			<div className="mb-8 lg:mb-12">
				<h2 className="flex items-center text-xl mb-3 sm:ml-4">
					<IoDocuments className="mr-2 text-2xl" />
					Project attachments
				</h2>
				<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

				<div className="md:pl-4">
					{/* Add project attachments */}
					<div className="mb-6 xl:mb-10">
						<FileDropField />
					</div>

					<div className="md:px-4">
						{/* Project attachments */}
						<div className="mb-8 flex justify-center">
							{attachments && (
								<div className="w-full overflow-x-auto shadow-md sm:rounded-lg">
									<AttachmentsTable attachments={attachments} />
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default AttachmentsDetails;
