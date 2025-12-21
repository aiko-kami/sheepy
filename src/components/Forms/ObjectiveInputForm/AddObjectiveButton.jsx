import { IoAddCircleOutline } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";

const AddObjectiveButton = ({ handleAddObjective }) => (
	<Button btnProps={{ btnSize: "sm", type: "button", btnColor: "blue", btnRounded: "std", action: handleAddObjective }}>
		<div className="flex items-center">
			Add objective <IoAddCircleOutline className="text-xl ml-2" />
		</div>
	</Button>
);

export default AddObjectiveButton;
