import { IoImages, IoPushOutline } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";

const Cover = ({ formState, onChange }) => {
	return (
		<>
			{/* Project cover */}
			<div className="mb-8 lg:mb-12">
				<h2 className="flex items-center text-xl mb-3 sm:ml-4">
					<IoImages className="mr-2 text-2xl" />
					Project cover
				</h2>
				<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />
				{/* Project cover */}
				<div className="mb-8 flex justify-center">
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
			</div>
		</>
	);
};
export default Cover;
