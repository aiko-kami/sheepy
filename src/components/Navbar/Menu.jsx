"use client";

import Link from "next/link";
import { useState } from "react";

import SubmenuStart from "./SubmenuStart";
import SubmenuHowItWorks from "./SubmenuHowItWorks";
import Popover from "@/components/Popover";
import PopoverSearch from "@/components/Search/PopoverSearch";

const Menu = () => {
	const [displayPopover, setDisplayPopover] = useState(false);

	return (
		<>
			<div className="flex h-full m-auto">
				<div className="group relative">
					<button className="inline-flex items-center px-10 py-1.5 tn:m-2">
						Start
						<svg className="fill-current ml-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
							<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
						</svg>
					</button>
					<div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 left-1/2 -translate-x-1/2">
						<SubmenuStart />
					</div>
				</div>
				<div className="group relative">
					<button className="inline-flex items-center px-10 py-1.5 tn:m-2">
						How it works
						<svg className="fill-current ml-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
							<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
						</svg>
					</button>
					<div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 left-1/2 -translate-x-1/2">
						<SubmenuHowItWorks />
					</div>
				</div>
				<Link href="/discover" className="inline-flex items-center duration-200 active:text-base-450 px-10 py-1.5 tn:m-2">
					Discover
				</Link>
				<button className="inline-flex relative items-center duration-200 active:text-base-450 px-10 py-1.5 tn:m-2" onClick={() => setDisplayPopover(!displayPopover)}>
					Search
					<Popover displayPopover={displayPopover} position={"mt-40 -mx-50"}>
						<PopoverSearch />
					</Popover>
				</button>
			</div>
		</>
	);
};
export default Menu;
