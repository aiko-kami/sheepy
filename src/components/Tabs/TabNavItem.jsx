"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { updateUrlParameters } from "@/utils/urlParameter";

const TabNavItem = ({ children, id, activeTab, setActiveTab, stdClass, inactiveClass, activeClass, updateUrl }) => {
	//Get current path
	const pathname = usePathname();

	//Get current URL search parameters
	const searchParams = useSearchParams();
	const currentParams = new URLSearchParams(searchParams);

	const router = useRouter();

	const handleClick = () => {
		if (updateUrl) {
			setActiveTab(id);
			updateUrlParameters(router, pathname, currentParams, { tab: id });
		} else setActiveTab(id);
	};

	return (
		<div onClick={handleClick} className={`${stdClass} ${activeTab === id ? activeClass : inactiveClass}`}>
			{children}
		</div>
	);
};
export default TabNavItem;
