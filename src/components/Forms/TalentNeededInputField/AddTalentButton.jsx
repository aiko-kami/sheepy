import { IoAddCircleOutline } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";

const AddTalentButton = ({ handleAddTalent }) => (
	<Button btnProps={{ btnSize: "sm", type: "button", btnColor: "blue", btnRounded: "std", action: handleAddTalent }}>
		<div className="flex items-center">
			Add talent <IoAddCircleOutline className="text-xl ml-2" />
		</div>
	</Button>
);

export default AddTalentButton;
