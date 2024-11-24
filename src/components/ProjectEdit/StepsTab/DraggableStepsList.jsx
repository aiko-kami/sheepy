import React, { useState, useEffect } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import DraggableItem from "./DraggableItem";

// Main draggable list component
const DraggableStepsList = ({ formState, onChange }) => {
	const [items, setItems] = useState([]);

	// Initialize items based on formState.projectSteps
	useEffect(() => {
		if (formState?.projectSteps) {
			const transformedItems = formState.projectSteps.map((step, index) => ({
				id: `${index + 1}`, // Unique ID for each step
				title: step.title,
				details: step.details,
				status: step.status,
				published: step.published,
			}));
			setItems(transformedItems);
		}
	}, [formState.projectSteps]);

	// Function to update fields
	const updateField = (id, fieldName, value) => {
		setItems((prevItems) => {
			const updatedItems = prevItems.map((item) => (item.id === id ? { ...item, [fieldName]: value } : item));
			onChange(updatedItems); // Call onChange with the updated list
			return updatedItems;
		});
	};

	// Move item up or down
	const moveItem = (id, direction) => {
		const index = items.findIndex((item) => item.id === id);
		if ((index === 0 && direction === "up") || (index === items.length - 1 && direction === "down")) {
			return; // Prevent out-of-bounds movement
		}
		const newIndex = direction === "up" ? index - 1 : index + 1;
		setItems((prevItems) => {
			const updatedItems = arrayMove(prevItems, index, newIndex);
			onChange(updatedItems); // Call onChange with the updated list
			return updatedItems;
		});
	};

	// Handle the end of dragging
	const handleDragEnd = (event) => {
		const { active, over } = event;
		if (active.id !== over?.id) {
			setItems((prevItems) => {
				const oldIndex = prevItems.findIndex((item) => item.id === active.id);
				const newIndex = prevItems.findIndex((item) => item.id === over?.id);
				const updatedItems = arrayMove(prevItems, oldIndex, newIndex);
				onChange(updatedItems);
				return updatedItems;
			});
		}
	};

	// Handle deleting an item
	const handleDelete = (id) => {
		const updatedItems = items.filter((item) => item.id !== id);
		setItems(updatedItems);
		onChange(updatedItems);
	};

	return (
		<>
			<DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
				<SortableContext items={items.map((item) => item.id)}>
					<div>
						{items.map((item) => (
							<DraggableItem
								key={item.id}
								id={item.id}
								title={item.title}
								details={item.details}
								status={item.status}
								published={item.published}
								onMoveUp={() => moveItem(item.id, "up")}
								onMoveDown={() => moveItem(item.id, "down")}
								updateField={updateField}
								onDelete={handleDelete}
							/>
						))}
					</div>
				</SortableContext>
			</DndContext>
		</>
	);
};

export default DraggableStepsList;
