import { IoPushOutline } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";

// Using forwardRef to pass the ref down to the input element
const FileDropField = ({}) => {
	return (
		<div className="flex justify-center">
			<div className="rounded-3xl border-2 border-dashed border-blue-400 w-2/3 h-70">
				<div className="flex justify-center items-center h-full">
					<div className="flex flex-col justify-center items-center">
						<div>
							<IoPushOutline className="text-6xl text-blue-400" />
						</div>
						<div className="">Drag and drop file here</div>
						<div className="mb-2">or</div>
						<Button
							btnProps={{
								type: "button",
							}}
						>
							Choose a file
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FileDropField;
