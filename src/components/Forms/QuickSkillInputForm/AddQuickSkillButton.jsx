import { IoAddCircleOutline } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";

const AddQuickSkillButton = ({ handleAddQuickSkill }) => (
	<Button btnProps={{ btnSize: "sm", type: "button", btnColor: "blue", btnRounded: "std", action: handleAddQuickSkill }}>
		<div className="flex items-center">
			Add Quick skill <IoAddCircleOutline className="text-xl ml-2" />
		</div>
	</Button>
);

export default AddQuickSkillButton;
