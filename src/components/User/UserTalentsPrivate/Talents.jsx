"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import DraggableTalentsList from "@/components/User/UserTalentsPrivate/DraggableTalentsList";

import { ApiUpdateProjectSteps } from "@/lib/api/projectEditionServer";
import ERRORS from "@/lib/constants/errors";
import { showErrorToast, showSuccessToast } from "@/utils/toast";

import { IoStarOutline, IoAddOutline } from "react-icons/io5";
import { Button } from "@/components/Buttons/Buttons";

const Talents = ({ talents = [] }) => {
	const router = useRouter();

	const [formInputs, setFormInputs] = useState({
		userTalents: talents.map((talent, index) => ({
			id: talent.id ?? `talent-${index}`,
			name: talent.name ?? "",
			description: talent.description ?? "",
			experience: talent.experience ?? "",
			portfolio: talent.portfolio ?? "",
			skills: talent.skills ?? [],
			certifications: talent.certifications ?? [],
			published: Boolean(talent.published),
			expanded: false,
		})),
	});

	const onChange = (updatedTalents) => {
		setFormInputs((prevState) => ({
			...prevState,
			userTalents: updatedTalents,
		}));
	};

	const addTalent = () => {
		if (formInputs.userTalents.length >= 10) {
			showErrorToast("You can only add up to 10 talents.");
			return;
		}

		const newTalent = {
			id: `${(formInputs.userTalents.length || 0) + 1}`,
			name: "",
			description: "",
			experience: "",
			portfolio: "",
			skills: [],
			certifications: [],
			published: false,
		};

		// Update the form state with the new step
		const updatedTalents = [...formInputs.userTalents, newTalent];
		onChange(updatedTalents);
	};

	const onSubmit = async (event) => {
		event.preventDefault();
		try {
			const payload = {
				talents: formInputs.userTalents.map(({ name, description, experience, portfolio, skills, certifications, published }) => ({
					name,
					description,
					experience,
					portfolio,
					skills,
					certifications,
					published,
				})),
			};

			const result = await ApiUpdateUserTalents(payload);
			if (!result.ok) {
				showErrorToast(result.message || "Failed to update user talents.");
				return;
			}

			showSuccessToast("Talents have been updated successfully.");
			router.refresh();
		} catch (error) {
			showErrorToast(error.message);
		}
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				<div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 space-y-8">
					<div className="flex items-center justify-between">
						<h1 className="text-xl font-semibold text-white">
							<IoStarOutline className="inline mr-2" />
							Talents
						</h1>
						<Button
							btnProps={{
								type: "button",
								btnColor: "blue",
								btnRounded: "lg",
								btnSize: "sm",
								action: addTalent,
							}}
						>
							<div className="flex items-center">
								<IoAddOutline className="text-xl mr-2" />
								Add Talent
							</div>
						</Button>
					</div>

					{/* Talents List */}
					{formInputs.userTalents && formInputs.userTalents.length > 0 ? (
						<DraggableTalentsList formInputs={formInputs} onChange={onChange} />
					) : (
						<p className=" text-xl text-center pt-10">
							<span className="italic">You have not added any talents yet</span>
						</p>
					)}

					<div className="mb-6">
						<Button
							btnProps={{
								type: "button",
								btnColor: "blue",
								btnRounded: "lg",
								btnSize: "sm",
								action: addTalent,
							}}
						>
							<div className="flex items-center">
								<IoAddOutline className="text-xl mr-2" />
								Add Talent
							</div>
						</Button>
					</div>
					<div className="flex justify-center mb-6">
						<Button
							btnProps={{
								type: "submit",
								btnColor: "blue",
							}}
						>
							Save My Talents
						</Button>
					</div>
				</div>
			</form>
		</>
	);
};
export default Talents;
