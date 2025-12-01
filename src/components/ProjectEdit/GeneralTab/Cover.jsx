import { IoImages } from "react-icons/io5";
import { FileDropField } from "@/components/Forms/FileDropField";
import { Button } from "@/components/Buttons/Buttons";
import { PermissionsErrorPane } from "@/components/Errors/PermissionsError";
import ERRORS from "@/lib/constants/errors";

const Cover = ({ formInputs, setFormInputs, userPermissions }) => {
	const fileTypesAllowed = {
		"image/png": ".png",
		"image/jpeg": ".jpg",
	};
	const maxFileSizeAllowed = 5 * 1024 * 1024; // 5 MB in bytes

	return (
		<>
			{/* Project cover */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoImages className="mr-2 text-2xl" />
				Project cover
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="md:px-4">
				{/* Project cover */}
				{!userPermissions.canEditCover && (
					<div className="mb-4">
						<PermissionsErrorPane message={ERRORS.PROJECT_EDIT.EDIT_COVER} />
					</div>
				)}
				<div className="mb-8">
					<FileDropField formInputs={formInputs} setFormInputs={setFormInputs} fileTypesAllowed={fileTypesAllowed} maxFileSizeAllowed={maxFileSizeAllowed} disabled={!userPermissions.canEditCover} />
				</div>
				{userPermissions.canEditCover && (
					<div className="flex justify-center">
						<Button
							btnProps={{
								type: "submit",
								btnColor: "blue",
								disabled: !userPermissions.canEditCover,
							}}
						>
							Save cover
						</Button>
					</div>
				)}
			</div>
		</>
	);
};
export default Cover;
