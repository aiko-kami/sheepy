"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import DraggableTalentsList from "@/components/User/UserTalentsPrivate/DraggableTalentsList";

import { ApiUpdateTalents } from "@/lib/api/userServer";
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
			expanded: true,
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
			showErrorToast(ERRORS.TALENTS_EDIT.MAXIMUM_LIMIT);
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
			expanded: true,
		};

		// Update the form state with the new step
		const updatedTalents = [...formInputs.userTalents, newTalent];
		onChange(updatedTalents);
	};

	const onSubmit = async (event) => {
		event.preventDefault();

		// Validation: Check if all talent names are filled
		for (const talent of formInputs.userTalents) {
			if (!talent.name || talent.name.trim() === "") {
				showErrorToast(ERRORS.TALENTS_EDIT.NAME_REQUIRED);
				return;
			}
			if (!talent.description || talent.description.trim() === "") {
				showErrorToast(ERRORS.TALENTS_EDIT.DESCRIPTION_REQUIRED);
				return;
			}
		}

		// Validation: Check for duplicate talent names
		const talentNames = formInputs.userTalents.map((talent) => talent.name.trim().toLowerCase());
		const uniqueTalentNames = new Set(talentNames);
		if (uniqueTalentNames.size !== talentNames.length) {
			showErrorToast(ERRORS.TALENTS_EDIT.NAME_DUPLICATE);
			return;
		}

		// All validations passed, proceed to submit the data
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

			const result = await ApiUpdateTalents(payload);
			if (!result.ok) {
				showErrorToast(result.message || ERRORS.TALENTS_EDIT.UPDATE_FAILED);
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
