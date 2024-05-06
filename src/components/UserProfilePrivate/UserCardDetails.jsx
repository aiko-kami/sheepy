"use client";

import ButtonBlue from "../Buttons/ButtonBlue";
import FormField from "../Forms/FormField";

import { IoLocationOutline, IoEarthOutline, IoBusinessOutline, IoChatbubbleEllipsesOutline, IoLinkOutline, IoAtOutline, IoMailOutline } from "react-icons/io5";

const UserCardDetails = ({ user }) => {
	const onSubmit = () => {};
	const onChange = () => {};

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
							<FormField inputName={"city"} label={"City"} inputValue={user.locationCity}>
								<IoLocationOutline className="w-5 h-5 text-gray-400" />
							</FormField>

							{/* Country */}
							<FormField inputName={"country"} label={"Country"} inputValue={user.locationCountry}>
								<IoEarthOutline className="w-5 h-5 text-gray-400" />
							</FormField>

							{/* Language */}
							<FormField inputName={"languages"} label={"Languages"} inputValue={user.languages.join(", ")}>
								<IoChatbubbleEllipsesOutline className="w-5 h-5 text-gray-400" />
							</FormField>

							{/* Company */}
							<FormField inputName={"company"} label={"Company"} inputValue={user.company}>
								<IoBusinessOutline className="w-5 h-5 text-gray-400" />
							</FormField>

							{/* Website */}
							<FormField inputName={"website"} label={"Website"} inputValue={user.website}>
								<IoLinkOutline className="w-5 h-5 text-gray-400" />
							</FormField>

							{/* Email */}
							<FormField inputName={"email"} label={"Email"} inputValue={user.email}>
								<IoAtOutline className="w-5 h-5 text-gray-400" />
							</FormField>
						</div>
						{/* Button Update profile (submit form) */}
						<div className="relative z-0 w-full text-center">
							<ButtonBlue btnSize={"std"}>Update my details</ButtonBlue>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
export default UserCardDetails;
