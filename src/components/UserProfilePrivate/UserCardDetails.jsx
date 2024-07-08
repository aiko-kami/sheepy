"use client";

import { useState } from "react";
import { Button } from "@/components/Buttons/Buttons";
import FormInputField from "@/components/Forms/FormInputField";

import { IoLocationOutline, IoEarthOutline, IoBusinessOutline, IoChatbubbleEllipsesOutline, IoLinkOutline } from "react-icons/io5";

const UserCardDetails = ({ user }) => {
	const [formInputs, setFormInputs] = useState({
		locationCity: user.locationCity,
		locationCountry: user.locationCountry,
		languages: user.languages.join(", "),
		company: user.company,
		website: user.website,
	});

	const onChange = (e) => {
		const { name, value } = e.target;
		setFormInputs((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};
	// Handle form submission
	const onSubmit = (e) => {
		e.preventDefault();
		console.log("Form data:", formInputs);
	};

	return (
		<div>
			<div className="bg-base-450 shadow-2xl p-6 pb-8">
				<h2 className="text-2xl font-semibold mb-6">My details</h2>
				{/* User details */}
				<div className="mx-0 px-6 pl-8">
					<form onSubmit={onSubmit}>
						{/* List of fields */}
						<div className="mb-10">
							{/* City */}
							<FormInputField inputName={"city"} inputType={"text"} label={"City"} inputValue={formInputs.locationCity} onChange={onChange}>
								<IoLocationOutline className="w-5 h-5 text-gray-400" />
							</FormInputField>
							{/* Country */}
							<FormInputField inputName={"country"} inputType={"text"} label={"Country"} inputValue={formInputs.locationCountry} onChange={onChange}>
								<IoEarthOutline className="w-5 h-5 text-gray-400" />
							</FormInputField>
							{/* Language */}
							<FormInputField inputName={"languages"} inputType={"text"} label={"Languages"} inputValue={formInputs.languages} onChange={onChange}>
								<IoChatbubbleEllipsesOutline className="w-5 h-5 text-gray-400" />
							</FormInputField>
							{/* Company */}
							<FormInputField inputName={"company"} inputType={"text"} label={"Company"} inputValue={formInputs.company} onChange={onChange}>
								<IoBusinessOutline className="w-5 h-5 text-gray-400" />
							</FormInputField>
							{/* Website */}
							<FormInputField inputName={"website"} inputType={"text"} label={"Website"} inputValue={formInputs.website} onChange={onChange}>
								<IoLinkOutline className="w-5 h-5 text-gray-400" />
							</FormInputField>
						</div>
						{/* Button Update profile (submit form) */}
						<div className="text-center">
							<Button btnProps={{ type: "submit" }}>Update my details</Button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
export default UserCardDetails;
