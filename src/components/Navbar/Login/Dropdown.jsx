import Link from "next/link";

import { useAuth } from "@/contexts";
import { ApiLogout } from "@/lib/api/auth";
import Notification from "@/components/Badges/Notification";

const Dropdown = ({ username, userId, notifications, dropdownOpen, closeDropdown }) => {
	const { logoutUser } = useAuth();
	const { myProfileNotif, myProjectsNotif, myTalentsNotif, myMessagesNotif, mySettingsNotif, helpNotif } = notifications;

	const handleLogout = async () => {
		try {
			const user = await ApiLogout();

			logoutUser();
			window.location.href = "/";
		} catch (error) {
			console.error("Logout error:", error);
		}
	};

	return (
		<div className={`z-10 absolute top-16 right-2 bg-white rounded-lg shadow w-36 tn:w-44 divide-y text-sm text-center divide-gray-300 ${dropdownOpen ? "inline-block" : "hidden"}`}>
			<div className="py-1 text-gray-900">
				<div className="font-semibold truncate py-2">{username}</div>
			</div>
			<ul className="py-1 text-gray-700">
				<li className="relative">
					{myProfileNotif > 0 && (
						<div className="absolute top-1.5 right-4">
							<Notification value={myProfileNotif} size={"sm"} notifColor={"pink"} />
						</div>
					)}
					<Link href="/users/my-profile" onClick={closeDropdown} className="block py-2 hover:bg-gray-200 duration-200 active:text-base-450">
						My Profile
					</Link>
				</li>
				<li className="relative">
					{myProjectsNotif > 0 && (
						<div className="absolute top-1.5 right-4">
							<Notification value={myProjectsNotif} size={"sm"} notifColor={"pink"} />
						</div>
					)}
					<Link href="/users/my-projects" onClick={closeDropdown} className="block py-2 hover:bg-gray-200 duration-200 active:text-base-450">
						My Projects
					</Link>
				</li>
				<li className="relative">
					{myTalentsNotif > 0 && (
						<div className="absolute top-1.5 right-4">
							<Notification value={myTalentsNotif} size={"sm"} notifColor={"pink"} />
						</div>
					)}
					<Link href="/users/my-talents" onClick={closeDropdown} className="block py-2 hover:bg-gray-200 duration-200 active:text-base-450">
						My Talents
					</Link>
				</li>
				<li className="relative">
					{myMessagesNotif > 0 && (
						<div className="absolute top-1.5 right-4">
							<Notification value={myMessagesNotif} size={"sm"} notifColor={"pink"} />
						</div>
					)}
					<Link href="/users/my-messages" onClick={closeDropdown} className="block py-2 hover:bg-gray-200 duration-200 active:text-base-450">
						My Messages
					</Link>
				</li>
				<li className="relative">
					{mySettingsNotif > 0 && (
						<div className="absolute top-1.5 right-4">
							<Notification value={mySettingsNotif} size={"sm"} notifColor={"pink"} />
						</div>
					)}
					<Link href="/users/my-settings" onClick={closeDropdown} className="block py-2 hover:bg-gray-200 duration-200 active:text-base-450">
						My Settings
					</Link>
				</li>
				<li className="relative">
					{helpNotif > 0 && (
						<div className="absolute top-1.5 right-4">
							<Notification value={helpNotif} size={"sm"} notifColor={"pink"} />
						</div>
					)}
					<Link href="/users/help" onClick={closeDropdown} className="block py-2 hover:bg-gray-200 duration-200 active:text-base-450">
						Help
					</Link>
				</li>
			</ul>
			<div className="py-1">
				<button onClick={handleLogout} className="block w-full py-2 text-gray-700 hover:bg-gray-200 duration-200 active:text-base-450">
					Sign out
				</button>
			</div>
		</div>
	);
};
export default Dropdown;
