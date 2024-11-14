import React, { useState, useEffect } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import DraggableItem from "@/components/ProjectEdit/StepsTab/DraggableItem";

// Main draggable list component
const DraggableStepsList = ({ formState, onChange }) => {
	const [items, setItems] = useState([]);
	const [activeItem, setActiveItem] = useState(null);

	// Initialize items based on formState.projectSteps
	useEffect(() => {
		if (formState?.projectSteps) {
			const transformedItems = formState.projectSteps.map((step, index) => ({
				id: `${index + 1}`,
				title: step.title,
				details: step.details,
				status: step.status,
				published: step.published,
			}));
			setItems(transformedItems);
		}
	}, [formState]);

	// Update a specific field for an item
	const updateField = (id, field, value) => {
		setItems((prevItems) => {
			const updatedItems = prevItems.map((item) => (item.id === id ? { ...item, [field]: value } : item));

			const updatedSteps = updatedItems.map(({ title, details, status, published }) => ({
				title,
				details,
				status,
				published,
			}));

			// Call onChange with the updated list
			onChange(updatedSteps);
			return updatedItems;
		});
	};

	// Handle the start of dragging
	const handleDragStart = (event) => {
		const { id } = event.active;
		const item = items.find((item) => item.id === id);
		setActiveItem(item);
	};

	// Handle the end of dragging
	const handleDragEnd = (event) => {
		const { active, over } = event;
		setActiveItem(null);

		if (active.id !== over?.id) {
			setItems((prevItems) => {
				const oldIndex = prevItems.findIndex((item) => item.id === active.id);
				const newIndex = prevItems.findIndex((item) => item.id === over?.id);

				const updatedItems = arrayMove(prevItems, oldIndex, newIndex);
				const updatedSteps = updatedItems.map(({ title, details, status, published }) => ({
					title,
					details,
					status,
					published,
				}));

				// Call onChange with the updated list
				onChange(updatedSteps);
				return updatedItems;
			});
		}
	};

	return (
		<DndContext collisionDetection={closestCenter} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
			<SortableContext items={items.map((item) => item.id)}>
				<div>
					{items.map((item) => (
						<DraggableItem key={item.id} id={item.id} title={item.title} details={item.details} status={item.status} published={item.published} updateField={updateField} />
					))}
				</div>
			</SortableContext>
		</DndContext>
	);
};

export default DraggableStepsList;
