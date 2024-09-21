import { IoImages, IoPushOutline } from "react-icons/io5";
import FileDropField from "@/components/Forms/FileDropField";

const Cover = ({ formState, onChange }) => {
	return (
		<>
			{/* Project cover */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoImages className="mr-2 text-2xl" />
				Project cover
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="md:pl-4">
				{/* Project cover */}
				<FileDropField />
			</div>
		</>
	);
};
export default Cover;
