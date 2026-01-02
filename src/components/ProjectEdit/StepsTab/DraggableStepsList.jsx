import { useState, useEffect } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import DraggableStepItem from "@/components/ProjectEdit/StepsTab/DraggableStepItem";

const DraggableStepsList = ({ formInputs, onChange, statusesList }) => {
	const [items, setItems] = useState([]);

	// Initialize items from formInputs
	useEffect(() => {
		if (Array.isArray(formInputs.projectSteps)) {
			setItems(
				formInputs.projectSteps.map((step, index) => ({
					...step,
					id: step.id ?? `step-${index}`,
				}))
			);
		}
	}, [formInputs.projectSteps]);

	// Drag & drop
	const handleDragEnd = (event) => {
		const { active, over } = event;
		if (!over || active.id === over.id) return;

		const oldIndex = items.findIndex((i) => i.id === active.id);
		const newIndex = items.findIndex((i) => i.id === over.id);

		const newItems = arrayMove(items, oldIndex, newIndex);
		setItems(newItems);
		onChange(newItems);
	};

	return (
		<DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
			<SortableContext items={items.map((item) => item.id)}>
				<div className="flex flex-col space-y-4">
					{items.map((item, index) => (
						<DraggableStepItem
							key={item.id}
							item={item}
							index={index}
							items={items}
							setItems={setItems} // <-- pass setItems
							statusesList={statusesList}
							onChange={onChange}
						/>
					))}
				</div>
			</SortableContext>
		</DndContext>
	);
};

export default DraggableStepsList;
