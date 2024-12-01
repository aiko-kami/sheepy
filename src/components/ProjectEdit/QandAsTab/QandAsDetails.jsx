import Link from "next/link";
import Image from "next/image";
import { IoChatbubblesSharp, IoAddOutline } from "react-icons/io5";
import DraggableQnasList from "@/components/ProjectEdit/QandAsTab/DraggableQnasList";
import { Button } from "@/components/Buttons/Buttons";

const QandAsDetails = ({ formState, onChange, addQna }) => {
	return (
		<>
			{/* Project Q&As */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoChatbubblesSharp className="mr-2 text-2xl" />
				Project Q&As
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="pl-4">
				{/* Project Q&As*/}
				<div className="mb-8">
					<div className="mb-4 flex items-center justify-end italic text-sm">
						<span className="mr-2">Last update by</span>
						<span className="flex items-center mr-2">
							<Link href={`/users/${formState.updatedBy.userId}`}>
								<Image src={formState.updatedBy.profilePicture} height={0} width={0} sizes="100vw" alt="User profile picture" className="object-cover min-w-9 h-9 rounded-full shadow-md mr-1" />
							</Link>
							<div className="lg:whitespace-nowrap">
								<Link href={`/users/${formState.updatedBy.userId}`}>{formState.updatedBy.username}</Link>
							</div>
							,
						</span>
						{formState.updatedAt}
					</div>
					<DraggableQnasList formState={formState} onChange={onChange} />
				</div>
				<div className="mb-6">
					<Button
						btnProps={{
							type: "button",
							btnColor: "blue",
							action: addQna,
						}}
					>
						<div className="flex items-center">
							New Q&A <IoAddOutline className="text-2xl ml-2 mt-0.5" />
						</div>
					</Button>
				</div>
			</div>
		</>
	);
};
export default QandAsDetails;
