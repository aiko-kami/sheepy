import Link from "next/link";
import { IoEyeOutline, IoScanCircleOutline } from "react-icons/io5";
import { Status } from "@/components/Badges/Badges";

const SideMenu = ({ projectLink, status, statusBgColor }) => {
	return (
		<>
			<ul className="inline-block rounded-lg bg-slate-800/70 border border-slate-700 py-6 px-4 text-center w-full">
				<li className="mb-8">
					<div className="flex justify-center">
						<Status name={`Project ${status}`} bgColor={statusBgColor} rounded={"xl"} />
					</div>
				</li>
				<li className="mb-3 rounded-lg bg-slate-800/70 border border-slate-700 hover:bg-slate-700 hover:text-blue-500 transition duration-150 ease-in-out">
					<Link href={`/projects/${projectLink}`} prefetch={false} className="flex justify-center w-full h-full p-2.5 rounded-lg">
						<IoEyeOutline className="mr-2 text-xl mt-0.5" />
						View project public page
					</Link>
				</li>
				<li className="rounded-lg bg-slate-800/70 border border-slate-700 hover:bg-slate-700 hover:text-blue-500 transition duration-150 ease-in-out">
					<Link href={`/projects/${projectLink}`} className="flex justify-center w-full h-full p-2.5 rounded-lg">
						<IoScanCircleOutline className="mr-2 text-2xl" />
						Preview project
					</Link>
				</li>
			</ul>
		</>
	);
};
export default SideMenu;
