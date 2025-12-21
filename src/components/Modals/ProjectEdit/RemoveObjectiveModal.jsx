import { Button } from "@/components/Buttons/Buttons";

const RemoveObjectiveModal = ({ objective, onConfirm, closeModalRemove }) => {
	return (
		<>
			{/* Confirmation */}
			<h2 className="text-lg text-center mb-6">Are you sure you want to remove the following objective?</h2>
			<div className="mb-10 max-w-120 mx-auto flex items-center px-2 py-3 rounded-2xl bg-purple-100 text-purple-800 border border-purple-200">
				<span className="flex items-center ml-3">
					<div className="flex flex-col">
						<p>{objective}</p>
					</div>
				</span>
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
						Remove objective
					</Button>
				</div>
			</div>
		</>
	);
};

export default RemoveObjectiveModal;
