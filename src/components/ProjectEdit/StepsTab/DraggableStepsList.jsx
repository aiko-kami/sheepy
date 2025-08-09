import React, { useState, useEffect } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";

import DraggableStepItem from "@/components/ProjectEdit/StepsTab/DraggableStepItem";

const DraggableStepsList = ({ formInputs, onChange }) => {
	const [items, setItems] = useState([]);

	// Initialize items based on formInputs.projectSteps
	useEffect(() => {
		if (formInputs?.projectSteps) {
			const transformedItems = formInputs.projectSteps.map((step, index) => ({
				id: `${index + 1}`,
				title: step.title,
				details: step.details,
				status: step.status,
				published: step.published,
			}));
			setItems(transformedItems);
		}
	}, [formInputs.projectSteps]);

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

	return (
		<DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
			<SortableContext items={items.map((item) => item.id)}>
				<div>
					{items.map((item) => (
						<DraggableStepItem
							key={item.id}
							item={item}
							items={items}
							setItems={setItems} // Pass down the state setter
							onChange={onChange}
						/>
					))}
				</div>
			</SortableContext>
		</DndContext>
	);
};

export default DraggableStepsList;
