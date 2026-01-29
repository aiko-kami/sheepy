"use client";

import React, { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { TbGripVertical } from "react-icons/tb";
import { IoCaretUpOutline, IoCaretDown, IoTrashOutline, IoChevronUpOutline, IoChevronDownOutline } from "react-icons/io5";
import InputField from "@/components/Forms/InputField";
import { TextAreaField } from "@/components/Forms/TextAreaField";
import SkillInputForm from "@/components/Forms/SkillInputForm/SkillInputForm";
import { ToggleField } from "@/components/Forms/ToggleField";

const DraggableTalentItem = ({ item, index, items, onChange }) => {
	const { id, name, description, skills, experience, portfolio, certifications, published, expanded } = item;

	const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
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
		const updated = items.map((i) => (i.id === id ? { ...i, expanded: !i.expanded } : i));
		onChange(updated);
	};

	// Move the item up or down
	const moveItem = (direction) => {
		const index = items.findIndex((i) => i.id === id);
		if ((index === 0 && direction === "up") || (index === items.length - 1 && direction === "down")) {
			return; // Prevent out-of-bounds movement
		}

		const newIndex = direction === "up" ? index - 1 : index + 1;
		const updatedItems = [...items];
		[updatedItems[index], updatedItems[newIndex]] = [updatedItems[newIndex], updatedItems[index]];

		onChange(updatedItems);
	};

	const handleDelete = () => {
		const updatedItems = items.filter((i) => i.id !== id);
		onChange(updatedItems);
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
						onClick={handleDelete}
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
				<button className="top-0 left-0 w-full h-full absolute z-0 cursor-grab" {...listeners} {...attributes} />
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
					<div className="max-w-160">
						<InputField label="Talent name:" inputName={`name-${id}`} inputType="text" inputValue={name} required={true} onChange={(e) => updateField("name", e.target.value)} />
					</div>

					<TextAreaField
						label="Talent Description:"
						labelStyle="block mb-2"
						inputName={`description-${id}`}
						inputValue={description}
						placeholder="Add description about this talent...(1000 characters max)"
						maxLength={1000}
						rows="6"
						required={true}
						onChange={(e) => updateField("description", e.target.value)}
					/>

					<SkillInputForm skills={skills} />

					<ToggleField label="Published" inputName={`published-${id}`} checked={published} onChange={(e) => updateField("published", e.target.checked)} />
				</div>
			</div>
		</div>
	);
};

export default DraggableTalentItem;
