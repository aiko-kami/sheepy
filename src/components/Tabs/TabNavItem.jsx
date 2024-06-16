"use client";

import { useRouter } from "next/navigation";

const TabNavItem = ({ children, id, activeTab, setActiveTab, stdClass, inactiveClass, activeClass, url }) => {
	const router = useRouter();

	const handleClick = () => {
		if (url) {
			setActiveTab(id);
			const path = `${id}`;
			router.push(`${url}${path}`);
		} else setActiveTab(id);
	};

	return (
		<div onClick={handleClick} className={`${stdClass} ${activeTab === id ? activeClass : inactiveClass}`}>
			{children}
		</div>
	);
};
export default TabNavItem;
