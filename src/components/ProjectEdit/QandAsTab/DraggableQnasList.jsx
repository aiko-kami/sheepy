import { useState, useEffect } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import DraggableQnaItem from "@/components/ProjectEdit/QandAsTab/DraggableQnaItem";

const DraggableQnasList = ({ formInputs, onChange }) => {
	const [items, setItems] = useState([]);

	// Initialize items based on formInputs.projectQnas
	useEffect(() => {
		if (Array.isArray(formInputs.projectQnas)) {
			setItems(
				formInputs.projectQnas.map((QA, index) => ({
					...QA,
					id: QA.id ?? `QA-${index}`,
				}))
			);
		}
	}, [formInputs.projectQnas]);

	// Handle the end of dragging
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
				<div>
					{items.map((item, index) => (
						<DraggableQnaItem
							key={item.id}
							item={item}
							index={index}
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

export default DraggableQnasList;
