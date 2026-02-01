import { IoPricetag } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";
import TagInputForm from "@/components/Forms/TagInputForm/TagInputForm";
import { PermissionsErrorPane } from "@/components/Errors/PermissionsError";
import { ERRORS } from "@/lib/constants";

const Tags = ({ projectId, tags, tagsList = [], userPermissions }) => {
	return (
		<div>
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoPricetag className="mr-2 text-2xl" />
				Project tags
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="md:px-4">
				<div className="mb-8">
					{!userPermissions.canEditTags && (
						<div className="mb-4">
							<PermissionsErrorPane message={ERRORS.PROJECT_PERMISSIONS.EDIT_TAGS} />
						</div>
					)}
					<TagInputForm projectId={projectId} tags={tags} tagsList={tagsList} disabled={!userPermissions.canEditTags} />
				</div>
			</div>
		</div>
	);
};

export default Tags;
