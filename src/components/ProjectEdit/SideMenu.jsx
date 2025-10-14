import Link from "next/link";
import { Status } from "@/components/Badges/Badges";

const SideMenu = ({ project }) => {
	const status = project?.statusInfo?.currentStatus;
	const projectId = project?.projectId;

	if (!project || !status) {
		return <div className="border-2 border-slate-500 bg-slate-300 rounded-2xl py-6 px-4 text-center text-gray-500">No project data available</div>;
	}

	return (
		<>
			<ul className="border-2 rounded-2xl py-6 px-4 text-center">
				<li className="mb-8">
					<div className="flex justify-center">
						<Status name={`Project ${status.status}`} bgColor={status.colors.bgColor} />
					</div>
				</li>
				<li className="mb-2">
					<Link href={`/projects/${projectId}`} className="hover:underline text-lg text-blue-500">
						View project public page
					</Link>
				</li>
				<li className="mb-2">
					<Link href={`/projects/${projectId}`} className="hover:underline text-lg text-blue-500">
						Preview project
					</Link>
				</li>
			</ul>
		</>
	);
};
export default SideMenu;
