import { IoAddCircleOutline } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";

const AddTagButton = ({ handleAddTag }) => (
	<Button btnProps={{ btnSize: "sm", type: "button", btnColor: "blue", btnRounded: "std", action: handleAddTag }}>
		<div className="flex items-center">
			Add tag <IoAddCircleOutline className="text-xl ml-2" />
		</div>
	</Button>
);

export default AddTagButton;
