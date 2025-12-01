import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { TbGripVertical } from "react-icons/tb";
import { IoCaretUpOutline, IoCaretDown, IoTrashOutline } from "react-icons/io5";
import InputField from "@/components/Forms/InputField";
import { TextAreaField } from "@/components/Forms/TextAreaField";
import { ToggleField } from "@/components/Forms/ToggleField";

const DraggableStepItem = ({ item, index, items, setItems, onChange }) => {
	const { id, title, details, status, published } = item;

	const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
		opacity: isDragging ? 0.8 : 1,
		zIndex: isDragging ? 1000 : "auto",
	};

	// Update a specific field
	const updateField = (fieldName, value) => {
		setItems((prevItems) => {
			const updatedItems = prevItems.map((i) => (i.id === id ? { ...i, [fieldName]: value } : i));
			onChange(updatedItems);
			return updatedItems;
		});
	};

	// Move the item up or down
	const moveItem = (direction) => {
		const index = items.findIndex((i) => i.id === id);
		if ((index === 0 && direction === "up") || (index === items.length - 1 && direction === "down")) {
			return; // Prevent out-of-bounds movement
		}
		const newIndex = direction === "up" ? index - 1 : index + 1;
		setItems((prevItems) => {
			const updatedItems = [...prevItems];
			[updatedItems[index], updatedItems[newIndex]] = [updatedItems[newIndex], updatedItems[index]];
			onChange(updatedItems);
			return updatedItems;
		});
	};

	// Delete the item
	const handleDelete = () => {
		const updatedItems = items.filter((i) => i.id !== id);
		setItems(updatedItems);
		onChange(updatedItems);
	};

	return (
		<div ref={setNodeRef} style={style} className="flex p-4 relative bg-slate-800/70 text-white rounded-md shadow-lg">
			{/* Icons for Move Up, Move Down, and Drag Handle */}
			<div className="flex flex-col items-center justify-between mr-4 min-h-full text-gray-300">
				<IoCaretUpOutline className="w-5 h-5 cursor-pointer hover:text-blue-400 mb-1" onClick={() => moveItem("up")} title="Move before" />
				<TbGripVertical className="w-6 h-6 hidden md:block cursor-grab hover:text-blue-400" {...listeners} {...attributes} title="Drag" />
				<IoCaretDown className="w-5 h-5 cursor-pointer hover:text-blue-400 mt-1" onClick={() => moveItem("down")} title="Move after" />
			</div>

			{/* Draggable item content */}
			<div className="w-9/10 mx-auto">
				<h2 className="font-semibold text-xl mb-6">
					Step {index + 1}: {title}
				</h2>
				<div className="ml-2 mb-4 max-w-160">
					<InputField label="Step Title:" inputName={`title-${id}`} inputType="text" inputValue={title} onChange={(e) => updateField("title", e.target.value)} />
				</div>
				<div className="ml-2 mb-6">
					<TextAreaField
						label="Step Details:"
						labelStyle="block mb-2"
						inputName={`details-${id}`}
						inputValue={details}
						placeholder="Add details about this step...(1000 characters max)"
						maxLength={1000}
						rows="6"
						required={true}
						onChange={(e) => updateField("details", e.target.value)}
					/>
				</div>
				<div className="ml-2 mb-4 max-w-80">
					<InputField label="Status:" inputName={`status-${id}`} inputType="text" inputValue={status.status} onChange={(e) => updateField("status", e.target.value)} />
				</div>
				<div className="ml-2 mb-2">
					<ToggleField label="Published" inputName={`published-${id}`} checked={published} onChange={(e) => updateField("published", e.target.checked)} />
				</div>
			</div>
			<button
				type="button"
				className="text-gray-400 bg-transparent rounded-lg text-sm w-9 h-9 absolute right-3 top-3 inline-flex justify-center items-center hover:bg-gray-600 hover:text-blue-400"
				data-modal-hide="default-modal"
				onClick={handleDelete}
			>
				<IoTrashOutline className="w-6 h-6 cursor-pointer" title="Remove step" />
			</button>
		</div>
	);
};

export default DraggableStepItem;
