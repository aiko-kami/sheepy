import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { TbGripVertical } from "react-icons/tb";
import InputField from "@/components/Forms/InputField";
import { TextAreaField } from "@/components/Forms/TextAreaField";
import { ToggleField } from "@/components/Forms/ToggleField";

// Draggable item component
const DraggableItem = ({ id, title, details, status, published, updateField }) => {
	const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
		opacity: isDragging ? 0.5 : 1,
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
		<div ref={setNodeRef} style={style} className="flex items-center p-4 mb-4 bg-gray-600 text-white rounded-md shadow-lg">
			{/* Drag handle on the left side */}
			<div className="cursor-grab mr-4" {...listeners} {...attributes}>
				<TbGripVertical className="w-6 h-6 text-gray-300" />
			</div>

			{/* Draggable item content */}
			<div className="w-full">
				<h2 className="font-semibold mb-4">Step {id}</h2>
				<div className="mb-2">
					<InputField label="Step Title:" inputName={`title-${id}`} inputType="text" inputValue={title} onChange={handleTitleChange} />
				</div>
				<div className="mb-4">
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
				<div className="mb-2">
					<InputField label="Status:" inputName={`status-${id}`} inputType="text" inputValue={status} onChange={handleStatusChange} />
				</div>

				<ToggleField label="Published" inputName={`published-${id}`} checked={published} onChange={handlePublishedChange} />
			</div>
		</div>
	);
};

export default DraggableItem;
