import { Button } from "@/components/Buttons/Buttons";

const RemoveTalentNeededModal = ({ talent, onConfirm, closeModalRemove }) => {
	return (
		<>
			{/* Confirmation */}
			<h2 className="text-lg text-center mb-6">
				Are you sure you want to remove the talent
				<strong> {talent}</strong>?
			</h2>

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
						Remove talent
					</Button>
				</div>
			</div>
		</>
	);
};

export default RemoveTalentNeededModal;
