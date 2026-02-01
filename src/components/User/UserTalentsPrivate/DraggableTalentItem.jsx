"use client";

import React, { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { TbGripVertical } from "react-icons/tb";
import { IoCaretUpOutline, IoCaretDown, IoTrashOutline, IoChevronUpOutline, IoChevronDownOutline } from "react-icons/io5";

import InputField from "@/components/Forms/InputField";
import { TextAreaField } from "@/components/Forms/TextAreaField";
import SkillInputForm from "@/components/Forms/SkillInputForm/SkillInputForm";
import CertificationInputForm from "@/components/Forms/CertificationInputForm/CertificationInputForm";
import { ToggleField } from "@/components/Forms/ToggleField";
import Modal from "@/components/Modals/Modal";
import RemoveTalentModal from "@/components/Modals/UserPrivate/RemoveTalentModal";
import { showErrorToast } from "@/utils/toast";
import { ERRORS } from "@/lib/constants";

const DraggableTalentItem = ({ item, index, items, onChange, setIsProgrammaticMove }) => {
	const { id, name, description, skills, experience, portfolio, certifications, published, expanded } = item;

	const [modalDisplayRemove, setModalDisplayRemove] = useState(false);
	const [talentToRemove, setTalentToRemove] = useState(null);

	const { attributes, listeners, setNodeRef, transform, transition, isDragging, isSorting } = useSortable({ id });

	const style = {
		transform: isDragging || isSorting ? CSS.Translate.toString(transform) : "none",
		transition: isDragging || isSorting ? transition : "none",
		opacity: isDragging ? 0.8 : 1,
		zIndex: isDragging ? 1000 : "auto",
	};

	// Update a specific field
	const updateField = (fieldName, value) => {
		const updatedItems = items.map((i) => (i.id === id ? { ...i, [fieldName]: value } : i));
		onChange(updatedItems);
	};

	// Manage expanded state
	const toggleExpanded = () => {
		setIsProgrammaticMove(false);
		const updated = items.map((i) => (i.id === id ? { ...i, expanded: !i.expanded } : i));
		onChange(updated);
	};

	// Move the item up or down
	const moveItem = (direction) => {
		setIsProgrammaticMove(true);
		const index = items.findIndex((i) => i.id === id);
		if ((index === 0 && direction === "up") || (index === items.length - 1 && direction === "down")) {
			return; // Prevent out-of-bounds movement
		}

		const newIndex = direction === "up" ? index - 1 : index + 1;
		const updatedItems = [...items];
		[updatedItems[index], updatedItems[newIndex]] = [updatedItems[newIndex], updatedItems[index]];

		onChange(updatedItems);
	};

	const closeModalRemove = () => {
		setTalentToRemove(null);
		setModalDisplayRemove(false);
	};

	const removeTalent = async (talent) => {
		// Basic validations with early returns
		if (!talent) {
			showErrorToast(ERRORS.USER_TALENTS.EMPTY_TALENT_REMOVE);
			return;
		}

		const { name, description, skills, experience, portfolio, certifications, published } = talent;

		// Check if at least one field is not empty
		const hasData =
			(name && name.trim() !== "") ||
			(description && description.trim() !== "") ||
			(experience && experience.trim() !== "") ||
			(portfolio && portfolio.trim() !== "") ||
			published === true ||
			(Array.isArray(skills) && skills.length > 0) ||
			(Array.isArray(certifications) && certifications.length > 0);

		setTalentToRemove(talent);

		if (!hasData) {
			// Nothing filled → remove immediately (or silently ignore)
			const updatedItems = items.filter((i) => i.id !== id);
			onChange(updatedItems);
			setTalentToRemove(null);
			return;
		}

		setModalDisplayRemove(true);
	};

	const confirmRemoveTalent = async () => {
		if (!talentToRemove) return;

		const updatedItems = items.filter((i) => i.id !== id);
		onChange(updatedItems);
		setTalentToRemove(null);
		setModalDisplayRemove(false);
	};

	return (
		<div ref={setNodeRef} style={style} className="relative border border-slate-700 bg-slate-800/70 text-white rounded-lg shadow-lg overflow-hidden">
			{/* Talent Header */}
			<div className="flex items-center justify-between p-4 bg-slate-600/50 cursor-pointer hover:bg-slate-500/70 transition-colors relative">
				<div className="flex items-center gap-2">
					<span className="text-white font-medium">{name || "New Talent"}</span>
					{skills.length > 0 && <span className="text-slate-500 text-sm">({skills.length} skills)</span>}
				</div>
				<div className="flex items-center space-x-3 z-20">
					<button
						type="button"
						className="text-gray-400 bg-transparent rounded-lg text-sm w-9 h-9 inline-flex justify-center items-center hover:bg-gray-600 hover:text-red-400"
						data-modal-hide="default-modal"
						onClick={() => removeTalent(item)}
					>
						<IoTrashOutline className="w-6 h-6 cursor-pointer" title="Remove talent" />
					</button>
					<button
						type="button"
						className="text-gray-400 bg-transparent rounded-lg text-sm w-9 h-9 inline-flex justify-center items-center hover:bg-gray-600 hover:text-blue-400"
						data-modal-hide="default-modal"
						onClick={(e) => {
							e.stopPropagation();
							toggleExpanded();
						}}
					>
						{expanded ? <IoChevronUpOutline className="w-6 h-6 cursor-pointer" title="Close talent" /> : <IoChevronDownOutline className="w-6 h-6 cursor-pointer" title="Open talent" />}
					</button>
				</div>
				<button type="button" className="top-0 left-0 w-full h-full absolute z-0 cursor-grab" {...listeners} {...attributes} />
			</div>

			{/* Talent Details */}
			<div className={`flex p-4 relative ${!expanded ? "hidden" : "block"}`}>
				{/* Icons for Move Up, Move Down, and Drag Handle */}
				<div className="flex flex-col items-center justify-between mr-4 min-h-full text-gray-300">
					<IoCaretUpOutline className="w-5 h-5 cursor-pointer hover:text-blue-400 mb-1" onClick={() => moveItem("up")} title="Move before" />
					<TbGripVertical className="w-6 h-6 hidden md:block cursor-grab hover:text-blue-400" {...listeners} {...attributes} title="Drag" />
					<IoCaretDown className="w-5 h-5 cursor-pointer hover:text-blue-400 mt-1" onClick={() => moveItem("down")} title="Move after" />
				</div>

				{/* Draggable item content */}
				<div className="w-9/10 mx-auto py-4 space-y-6">
					{/* Talent name */}
					<div className="max-w-160">
						<InputField label="Talent name:" inputName={`name-${id}`} inputType="text" inputValue={name} required={true} onChange={(e) => updateField("name", e.target.value)} />
					</div>

					{/* Talent description */}
					<TextAreaField
						label="Talent Description:"
						labelStyle="block mb-2"
						inputName={`description-${id}`}
						inputValue={description}
						placeholder="Add description about this talent...(1000 characters max)"
						maxLength={1000}
						rows="6"
						required={false}
						onChange={(e) => updateField("description", e.target.value)}
					/>

					{/* Experience */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<InputField
							label="Experience:"
							inputName={`experience-${id}`}
							inputType="text"
							inputValue={experience}
							placeholder="e.g.: 3 years, 2 projects completed, etc."
							min="0"
							required={false}
							onChange={(e) => updateField("experience", e.target.value)}
						/>

						{/* Portfolio */}
						<InputField
							label="Portfolio:"
							inputName={`portfolio-${id}`}
							inputType="text"
							inputValue={portfolio}
							placeholder="e.g.: https://myportfolio.com"
							required={false}
							onChange={(e) => updateField("portfolio", e.target.value)}
						/>
					</div>

					{/* Certifications */}
					<CertificationInputForm certifications={certifications} />

					{/* Skills */}
					<SkillInputForm skills={skills} />

					{/* Published Toggle */}
					<ToggleField label="Published" inputName={`published-${id}`} checked={published} onChange={(e) => updateField("published", e.target.checked)} />
				</div>
			</div>
			<Modal modalDisplay={modalDisplayRemove} closeModal={closeModalRemove} closeModalWithBackground={closeModalRemove} modalSize={"sm"} modalTitle={"Remove talent"}>
				<RemoveTalentModal talent={talentToRemove} onConfirm={confirmRemoveTalent} closeModalRemove={closeModalRemove} />
			</Modal>
		</div>
	);
};

export default DraggableTalentItem;
