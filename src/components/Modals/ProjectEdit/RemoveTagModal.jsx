import { Button } from "@/components/Buttons/Buttons";

const RemoveTagModal = ({ tag, onConfirm, closeModalRemove }) => {
	return (
		<>
			{/* Confirmation */}
			<h2 className="text-lg text-center mb-6">Are you sure you want to remove the following tag?</h2>
			<div className="mb-10 flex justify-center">
				<span className="flex items-center px-3 pt-0.5 pb-1 bg-gray-200 text-gray-800 rounded-full shadow-sm">{tag.name}</span>
			</div>

			{/* Buttons */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 justify-center">
				<div className="col-span-2 md:col-span-1 grid xl:px-1/5">
					<Button
						btnProps={{
							type: "button",
							action: closeModalRemove,
						}}
					>
						Cancel
					</Button>
				</div>
				<div className="col-span-2 md:col-span-1 grid xl:px-1/5">
					<Button
						btnProps={{
							type: "button",
							action: onConfirm,
							btnColor: "red",
						}}
					>
						Remove tag
					</Button>
				</div>
			</div>
		</>
	);
};

export default RemoveTagModal;
