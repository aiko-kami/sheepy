"use client";

import Link from "next/link";
import { useState } from "react";

import { IoSearch } from "react-icons/io5";
import FormField from "@/components/Forms/FormField";
import ButtonBlue from "@/components/Buttons/ButtonBlue";

const SearchPopover = () => {
	return (
		<div className="w-full inline-flex pt-4">
			{/* Search input field */}
			<FormField inputName={"search"} inputType={"text"} label={"Search"} inputValue={""}>
				<IoSearch className="w-5 h-5 text-gray-400" />
			</FormField>
			{/* Button search */}
			<div className="pl-4">
				<ButtonBlue btnSize={"std"}>Search</ButtonBlue>
			</div>
		</div>
	);
};
export default SearchPopover;
