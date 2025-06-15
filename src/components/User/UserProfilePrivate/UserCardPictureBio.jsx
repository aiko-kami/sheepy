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

const UserCardPictureBio = ({ user }) => {
	const router = useRouter();

	const [formInputs, setFormInputs] = useState({
		description: user.description || "",
		bio: user.bio.data || "",
	});

	const onChange = (e) => {
		const { name, value } = e.target;
		setFormInputs((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

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
			<div className="bg-base-450 shadow-2xl relative pb-8">
				<ProfilePicture user={user} />

				{/* User card text */}
				<div className="px-6">
					{/* Username and description */}
					<div className="text-center my-5">
						<h1 className="text-3xl font-semibold">{user.username}</h1>
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
