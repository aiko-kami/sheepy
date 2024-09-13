import { IoFitness } from "react-icons/io5";

const QandAsDetails = ({ formState, onChange }) => {
	return (
		<>
			{/* Project Q&As */}
			<div className="mb-8 lg:mb-12">
				<h2 className="flex items-center text-xl mb-3 sm:ml-4">
					<IoFitness className="mr-2 text-2xl" />
					Project Q&As
				</h2>
				<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />
				{/* Project Q&As */}
				<div className="mb-8 max-w-140 relative">
					{/* Q&As input field */}
					Q&As
				</div>
			</div>
		</>
	);
};
export default QandAsDetails;
