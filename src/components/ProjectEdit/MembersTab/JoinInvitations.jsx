import { IoArrowUpCircle, IoAddOutline } from "react-icons/io5";
import InvitationsTable from "@/components/Tables/InvitationsTable";
import { Button } from "@/components/Buttons/Buttons";

const JoinInvitations = ({ project, user }) => {
	return (
		<>
			{/* Join inviations */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoArrowUpCircle className="mr-2 text-2xl" />
				Invitations to join the project
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="md:px-4">
				{/* Join inviations */}
				<div className="mb-8">
					<div className="pl-2 mb-6">
						<Button
							btnProps={{
								type: "button",
								btnColor: "blue",
							}}
						>
							<div className="flex items-center">
								New invitation <IoAddOutline className="text-2xl ml-2 mt-0.5" />
							</div>
						</Button>
					</div>

					{/* inviations */}
					{project.invitations && project.invitations.length !== 0 ? (
						<div className="w-full overflow-x-auto shadow-md sm:rounded-lg mb-6">
							<InvitationsTable invitations={project.invitations} projectId={project.projectId} projectPermissions={project.permissions} />
						</div>
					) : (
						<p className=" text-xl text-center pt-10">
							<span className="italic">No inviations found</span>
						</p>
					)}
				</div>
			</div>
		</>
	);
};
export default JoinInvitations;
