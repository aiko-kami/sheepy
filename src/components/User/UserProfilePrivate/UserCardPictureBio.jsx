"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";

import { Button } from "@/components/Buttons/Buttons";
import ProfilePicture from "@/components/User/UserProfilePrivate/ProfilePicture";
import ProjectCounter from "@/components/Common/ProjectCounter";
import { TextAreaField } from "@/components/Forms/TextAreaField";

import { ApiUpdateUserBioDescription } from "@/lib/api/usersClient";

import { showSuccessToast, showErrorToast } from "@/utils/toast";
import { handleFormChange } from "@/utils/formHandlers";

const UserCardPictureBio = ({ username, profilePicture, backgroundPicture, description, bio }) => {
	const router = useRouter();

	const [formInputs, setFormInputs] = useState({
		description: description || "",
		bio: bio || "",
	});

	const onChange = handleFormChange(setFormInputs);

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Prepare payload, replacing empty strings with special marker
		const payload = {
			description: formInputs.description.trim() === "" ? "@--empty--string" : formInputs.description,
			bio: formInputs.bio.trim() === "" ? "@--empty--string" : formInputs.bio,
		};

		try {
			await ApiUpdateUserBioDescription(payload);
			showSuccessToast("Profile updated successfully!");
			router.push("/users/my-profile");
		} catch (error) {
			showErrorToast(error.message || "Something went wrong");
		}
	};

	return (
		<div className="row-span-3">
			<div className="bg-slate-900/50 backdrop-blur-lg border border-slate-800 rounded-xl shadow-xl relative pb-8 overflow-hidden">
				<ProfilePicture profilePicture={profilePicture} backgroundPicture={backgroundPicture} />

				{/* User card text */}
				<div className="px-6">
					{/* Username and description */}
					<div className="text-center my-5">
						<h1 className="text-3xl font-semibold">{username}</h1>
					</div>
					{/* Projects counters */}
					{/* <ProjectCounter projectCount={user.projects.projectCount} /> */}
					{/* User details */}
					<div>
						<h2 className="text-2xl font-semibold mb-4">About me</h2>
						{/* Profile introduction section */}
						<div>
							<form onSubmit={handleSubmit}>
								{/* Description */}
								<div className="relative z-0 mb-6 w-full">
									<TextAreaField
										label="Description"
										labelStyle="block mb-2 text-sm font-medium text-gray-400"
										inputStyle="h-30 xl:h-24"
										inputName="description"
										inputValue={formInputs.description}
										onChange={onChange}
										placeholder="Say few words about yourself with 100 characters maximum..."
										maxLength={200}
										rows="2"
										required={false}
									/>
								</div>

								{/* Bio */}
								<div className="relative z-0 mb-10 w-full">
									<TextAreaField
										label="Bio"
										labelStyle="block mb-2 text-sm font-medium text-gray-400"
										inputName="bio"
										inputValue={formInputs.bio}
										onChange={onChange}
										placeholder="Add your bio or resumé..."
										maxLength={700}
										rows="8"
										required={false}
									/>
								</div>
								{/* Button Update profile (submit form) */}
								<div className="text-center">
									<Button btnProps={{ type: "submit" }}>Update my introduction</Button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default UserCardPictureBio;
