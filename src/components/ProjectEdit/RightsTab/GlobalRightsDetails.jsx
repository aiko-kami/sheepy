import { IoLockOpen } from "react-icons/io5";
import GlobalRightsTable from "@/components/Tables/ProjectEdit/GlobalRightsTable";

const GlobalRightsDetails = ({ formState, project, onChange }) => {
	return (
		<>
			{/* Project rights */}
			<h2 className="flex items-center text-xl mb-3 sm:ml-4">
				<IoLockOpen className="mr-2 text-2xl" />
				Global users rights
			</h2>
			<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-6" />

			<div className="md:px-4">
				{/* Project members */}
				<div className="mb-8 flex justify-center">
					{/* Status history table */}
					{project.members && project.members.length !== 0 ? (
						<div className="w-full overflow-x-auto shadow-md sm:rounded-lg">
							<GlobalRightsTable members={project.members} projectId={project.projectId} projectPermissions={project.permissions} />
						</div>
					) : (
						<p className=" text-xl text-center pt-10">
							<span className="italic">No members found</span>
						</p>
					)}
				</div>
			</div>
		</>
	);
};
export default GlobalRightsDetails;
