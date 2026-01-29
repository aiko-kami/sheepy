import { IoAddCircleOutline } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";

const AddSkillButton = ({ handleAddSkill }) => (
	<Button btnProps={{ btnSize: "sm", type: "button", btnColor: "blue", btnRounded: "std", action: handleAddSkill }}>
		<div className="flex items-center">
			Add skill <IoAddCircleOutline className="text-xl ml-2" />
		</div>
	</Button>
);

export default AddSkillButton;
