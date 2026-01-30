import { IoAddCircleOutline } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";

const AddCertificationButton = ({ handleAddCertification }) => (
	<Button btnProps={{ btnSize: "sm", type: "button", btnColor: "blue", btnRounded: "std", action: handleAddCertification }}>
		<div className="flex items-center">
			Add certification <IoAddCircleOutline className="text-xl ml-2" />
		</div>
	</Button>
);

export default AddCertificationButton;
