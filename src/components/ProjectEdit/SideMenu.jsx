import Link from "next/link";
import { Status } from "@/components/Badges/Badges";

const SideMenu = ({ projectId, projectLink, status, statusBgColor }) => {
	return (
		<>
			<ul className="border-2 rounded-2xl py-6 px-4 text-center">
				<li className="mb-8">
					<div className="flex justify-center">
						<Status name={`Project ${status}`} bgColor={statusBgColor} />
					</div>
				</li>
				<li className="mb-2">
					<Link href={`/projects/${projectLink}`} className="hover:underline text-lg text-blue-500">
						View project public page
					</Link>
				</li>
				<li className="mb-2">
					<Link href={`/projects/${projectLink}`} className="hover:underline text-lg text-blue-500">
						Preview project
					</Link>
				</li>
			</ul>
		</>
	);
};
export default SideMenu;
