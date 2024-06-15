"use client";

import { Button } from "../Buttons/Buttons";
import FormField from "../Forms/FormField";

import { IoLocationOutline, IoEarthOutline, IoBusinessOutline, IoChatbubbleEllipsesOutline, IoLinkOutline } from "react-icons/io5";

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
							<FormField inputName={"city"} inputType={"text"} label={"City"} inputValue={user.locationCity}>
								<IoLocationOutline className="w-5 h-5 text-gray-400" />
							</FormField>

							{/* Country */}
							<FormField inputName={"country"} inputType={"text"} label={"Country"} inputValue={user.locationCountry}>
								<IoEarthOutline className="w-5 h-5 text-gray-400" />
							</FormField>

							{/* Language */}
							<FormField inputName={"languages"} inputType={"text"} label={"Languages"} inputValue={user.languages.join(", ")}>
								<IoChatbubbleEllipsesOutline className="w-5 h-5 text-gray-400" />
							</FormField>

							{/* Company */}
							<FormField inputName={"company"} inputType={"text"} label={"Company"} inputValue={user.company}>
								<IoBusinessOutline className="w-5 h-5 text-gray-400" />
							</FormField>

							{/* Website */}
							<FormField inputName={"website"} inputType={"text"} label={"Website"} inputValue={user.website}>
								<IoLinkOutline className="w-5 h-5 text-gray-400" />
							</FormField>
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
