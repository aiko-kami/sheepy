import { IoChatbubblesSharp } from "react-icons/io5";

const QandAsDetails = ({ formState, onChange }) => {
	return (
		<>
			{/* Project Q&As */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoChatbubblesSharp className="mr-2 text-2xl" />
				Project Q&As
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="pl-4">
				{/* Project Q&As */}
				<div className="mb-8">
					{/* Q&As input field */}
					Q&As
				</div>
			</div>
		</>
	);
};
export default QandAsDetails;
