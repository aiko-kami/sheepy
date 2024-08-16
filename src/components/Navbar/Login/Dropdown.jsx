import Link from "next/link";

const Dropdown = ({ username, userId, notifications, dropdownOpen, closeDropdown }) => {
	const { myProfileNotif, myProjectsNotif, settingsNotif, helpNotif } = notifications;

	return (
		<div className={`z-10 absolute top-16 right-2 bg-white rounded-lg shadow w-36 tn:w-44 divide-y text-sm text-center divide-gray-300 ${dropdownOpen ? "inline-block" : "hidden"}`}>
			<div className="py-1 text-gray-900">
				<div className="font-semibold truncate py-2">{username}</div>
			</div>
			<ul className="py-1 text-gray-700">
				<li className="relative">
					{myProfileNotif > 0 && (
						<span className="absolute top-1.5 right-4 inline-flex items-center justify-center px-2 pb-0.5 h-6 text-[12px] font-bold text-white bg-pink-600 rounded-full">{myProfileNotif}</span>
					)}
					<Link href="/users/my-profile" onClick={closeDropdown} className="block py-2 hover:bg-gray-200 duration-200 active:text-base-450">
						My profile
					</Link>
				</li>
				<li className="relative">
					{myProjectsNotif > 0 && (
						<span className="absolute top-1.5 right-4 inline-flex items-center justify-center px-2 pb-0.5 h-6 text-[12px] font-bold text-white bg-pink-600 rounded-full">{myProjectsNotif}</span>
					)}
					<Link href="/users/my-projects" onClick={closeDropdown} className="block py-2 hover:bg-gray-200 duration-200 active:text-base-450">
						My projects
					</Link>
				</li>
				<li className="relative">
					{settingsNotif > 0 && (
						<span className="absolute top-1.5 right-4 inline-flex items-center justify-center px-2 pb-0.5 h-6 text-[12px] font-bold text-white bg-pink-600 rounded-full">{settingsNotif}</span>
					)}
					<Link href="/users/settings" onClick={closeDropdown} className="block py-2 hover:bg-gray-200 duration-200 active:text-base-450">
						Settings
					</Link>
				</li>
				<li className="relative">
					{helpNotif > 0 && (
						<span className="absolute top-1.5 right-4 inline-flex items-center justify-center px-2 pb-0.5 h-6 text-[12px] font-bold text-white bg-pink-600 rounded-full">{helpNotif}</span>
					)}
					<Link href="#" onClick={closeDropdown} className="block py-2 hover:bg-gray-200 duration-200 active:text-base-450">
						Help
					</Link>
				</li>
			</ul>
			<div className="py-1">
				<Link href="/logout" onClick={closeDropdown} className="block py-2 text-gray-700 hover:bg-gray-200 duration-200 active:text-base-450">
					Sign out
				</Link>
			</div>
		</div>
	);
};
export default Dropdown;
