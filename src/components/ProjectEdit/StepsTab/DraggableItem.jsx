import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { TbGripVertical } from "react-icons/tb";
import { IoCaretUpOutline, IoCaretDown, IoTrashOutline } from "react-icons/io5";
import InputField from "@/components/Forms/InputField";
import { TextAreaField } from "@/components/Forms/TextAreaField";
import { ToggleField } from "@/components/Forms/ToggleField";

// Draggable item component
const DraggableItem = ({ id, title, details, status, published, updateField, onMoveUp, onMoveDown, onDelete }) => {
	const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
		opacity: isDragging ? 0.8 : 1,
		zIndex: isDragging ? 1000 : "auto",
	};

	// Change handlers for each field
	const handleTitleChange = (e) => {
		updateField(id, "title", e.target.value);
	};

	const handleDetailsChange = (e) => {
		updateField(id, "details", e.target.value);
	};

	const handleStatusChange = (e) => {
		updateField(id, "status", e.target.value);
	};

	const handlePublishedChange = (e) => {
		updateField(id, "published", e.target.checked);
	};

	return (
		<div ref={setNodeRef} style={style} className="flex p-4 mb-4 relative bg-gray-700 text-white rounded-md shadow-lg">
			{/* Icons for Move Up, Move Down, and Drag Handle */}
			<div className="flex flex-col items-center justify-between mr-4 min-h-full text-gray-300">
				<IoCaretUpOutline className="w-5 h-5 cursor-pointer hover:text-blue-400 mb-1" onClick={() => onMoveUp(id)} title="Move before" />
				<TbGripVertical className="w-6 h-6 cursor-grab hover:text-blue-400" {...listeners} {...attributes} title="Drag" />
				<IoCaretDown className="w-5 h-5 cursor-pointer hover:text-blue-400 mt-1" onClick={() => onMoveDown(id)} title="Move after" />
			</div>

			{/* Draggable item content */}
			<div className="w-9/10 mx-auto">
				<h2 className="font-semibold text-xl mb-6">Step {id}</h2>
				<div className="ml-2 mb-4 max-w-160">
					<InputField label="Step Title:" inputName={`title-${id}`} inputType="text" inputValue={title} onChange={handleTitleChange} />
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
						onChange={handleDetailsChange}
					/>
				</div>
				<div className="ml-2 mb-4 max-w-80">
					<InputField label="Status:" inputName={`status-${id}`} inputType="text" inputValue={status} onChange={handleStatusChange} />
				</div>
				<div className="ml-2 mb-2">
					<ToggleField label="Published" inputName={`published-${id}`} checked={published} onChange={handlePublishedChange} />
				</div>
			</div>
			<button
				type="button"
				className="text-gray-400 bg-transparent rounded-lg text-sm w-9 h-9 absolute right-3 top-3 inline-flex justify-center items-center hover:bg-gray-600 hover:text-blue-400"
				data-modal-hide="default-modal"
				onClick={() => onDelete(id)}
			>
				<IoTrashOutline className="w-6 h-6 cursor-pointer" title="Remove step" />
			</button>
		</div>
	);
};

export default DraggableItem;
