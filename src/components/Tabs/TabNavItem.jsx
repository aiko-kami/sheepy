"use client";

import { useRouter } from "next/navigation";

const TabNavItem = ({ id, title, activeTab, setActiveTab, activeClass, url }) => {
	const router = useRouter();
	const handleClick = () => {
		if (url) {
			setActiveTab(id);
			const path = `${id}`;
			router.push(`${url}${path}`);
		} else setActiveTab(id);
	};

	return (
		<div onClick={handleClick} className={`pb-2 sm:px-4 ${activeTab === id ? activeClass : ""}`}>
			{title}
		</div>
	);
};
export default TabNavItem;
