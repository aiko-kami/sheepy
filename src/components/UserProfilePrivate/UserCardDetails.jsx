"use client";

import { useState } from "react";
import { Button } from "@/components/Buttons/Buttons";
import InputField from "@/components/Forms/InputField";

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
							<InputField inputName={"locationCity"} inputType={"text"} label={"City"} inputValue={formInputs.locationCity} onChange={onChange}>
								<IoLocationOutline className="w-5 h-5 text-gray-400" />
							</InputField>
							{/* Country */}
							<InputField inputName={"locationCountry"} inputType={"text"} label={"Country"} inputValue={formInputs.locationCountry} onChange={onChange}>
								<IoEarthOutline className="w-5 h-5 text-gray-400" />
							</InputField>
							{/* Language */}
							<InputField inputName={"languages"} inputType={"text"} label={"Languages"} inputValue={formInputs.languages} onChange={onChange}>
								<IoChatbubbleEllipsesOutline className="w-5 h-5 text-gray-400" />
							</InputField>
							{/* Company */}
							<InputField inputName={"company"} inputType={"text"} label={"Company"} inputValue={formInputs.company} onChange={onChange}>
								<IoBusinessOutline className="w-5 h-5 text-gray-400" />
							</InputField>
							{/* Website */}
							<InputField inputName={"website"} inputType={"text"} label={"Website"} inputValue={formInputs.website} onChange={onChange}>
								<IoLinkOutline className="w-5 h-5 text-gray-400" />
							</InputField>
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
