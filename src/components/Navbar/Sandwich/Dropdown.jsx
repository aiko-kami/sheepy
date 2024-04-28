import Link from "next/link";

const Dropdown = ({ submenus, dropdown }) => {
	return (
		<ul className={`${dropdown ? "m-0 z-10 absolute top-0 left-42 bg-white rounded-lg shadow w-36 tn:w-40 py-1 text-sm text-gray-700" : "hidden"}`}>
			{submenus.map((submenu, index) => (
				<li key={index} className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-200 duration-200 active:text-base-450">
					<Link href={submenu.url}>{submenu.title}</Link>
				</li>
			))}
		</ul>
	);
};

export default Dropdown;
