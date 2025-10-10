import Link from "next/link";

const Dropdown = ({ submenus = [], dropdown = false, closeSandwich }) => {
	if (!Array.isArray(submenus) || submenus.length === 0) return null;
	return (
		<ul className={`${dropdown ? "m-0 z-10 absolute top-0 left-42 bg-white rounded-lg shadow w-36 tn:w-40 py-1 text-sm text-gray-700" : "hidden"}`}>
			{submenus.map((submenu, index) => (
				<li key={index} className="flex items-center justify-between">
					<Link href={submenu.url} onClick={closeSandwich} className="w-full px-4 py-2 hover:bg-gray-200 duration-200 active:text-base-450">
						{submenu.title}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default Dropdown;
