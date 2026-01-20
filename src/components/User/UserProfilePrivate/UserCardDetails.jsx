"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoLocationOutline, IoEarthOutline, IoBusinessOutline, IoLinkOutline, IoClose } from "react-icons/io5";

import UserLanguages from "@/components/User/UserProfilePrivate/UserLanguages";
import { Button } from "@/components/Buttons/Buttons";
import InputField from "@/components/Forms/InputField";

import { ApiUpdateUserDetails } from "@/lib/api/usersClient";

import { showSuccessToast, showErrorToast } from "@/utils/toast";
import { handleFormChange } from "@/utils/formHandlers";

const UserCardDetails = ({ locationCity, locationCountry, languages, company, website }) => {
	const router = useRouter();

	const [formInputs, setFormInputs] = useState({
		locationCity: locationCity,
		locationCountry: locationCountry,
		languages: languages,
		company: company,
		website: website,
	});

	const onChange = handleFormChange(setFormInputs);

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();

		// Prepare payload, replacing empty strings with special marker
		const payload = {
			locationCity: formInputs.locationCity.trim() === "" ? "@--empty--string" : formInputs.locationCity,
			locationCountry: formInputs.locationCountry.trim() === "" ? "@--empty--string" : formInputs.locationCountry,
			languages: formInputs.languages.length === 0 ? ["@--empty--string"] : formInputs.languages,
			company: formInputs.company.trim() === "" ? "@--empty--string" : formInputs.company,
			website: formInputs.website.trim() === "" ? "@--empty--string" : formInputs.website,
		};

		try {
			await ApiUpdateUserDetails(payload);
			showSuccessToast("Profile updated successfully!");
			router.push("/users/my-profile");
		} catch (error) {
			showErrorToast(error.message);
		}
	};

	return (
		<div>
			<div className="bg-base-450 shadow-2xl p-6 pb-8">
				<h2 className="text-2xl font-semibold mb-6">My details</h2>
				{/* User details */}
				<div className="mx-0 px-6 pl-8">
					<form onSubmit={handleSubmit}>
						{/* List of fields */}
						<div className="mb-10">
							{/* City */}
							<div className="mb-6">
								<InputField inputName={"locationCity"} inputType={"text"} label={"City"} inputValue={formInputs.locationCity} onChange={onChange}>
									<IoLocationOutline className="w-5 h-5 text-gray-400" />
								</InputField>
							</div>
							{/* Country */}
							<div className="mb-6">
								<InputField inputName={"locationCountry"} inputType={"text"} label={"Country"} inputValue={formInputs.locationCountry} onChange={onChange}>
									<IoEarthOutline className="w-5 h-5 text-gray-400" />
								</InputField>
							</div>
							{/* Language */}
							<UserLanguages formInputs={formInputs} setFormInputs={setFormInputs} />
							{/* Company */}
							<div className="mb-6">
								<InputField inputName={"company"} inputType={"text"} label={"Company"} inputValue={formInputs.company} onChange={onChange}>
									<IoBusinessOutline className="w-5 h-5 text-gray-400" />
								</InputField>
							</div>
							{/* Website */}
							<div className="mb-6">
								<InputField inputName={"website"} inputType={"text"} label={"Website"} inputValue={formInputs.website} onChange={onChange}>
									<IoLinkOutline className="w-5 h-5 text-gray-400" />
								</InputField>
							</div>
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
