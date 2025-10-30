import React, { useState, useEffect } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";

import DraggableQnaItem from "@/components/ProjectEdit/QandAsTab/DraggableQnaItem";

const DraggableQnasList = ({ formInputs, onChange }) => {
	const [items, setItems] = useState([]);

	// Initialize items based on formInputs.projectQnas
	useEffect(() => {
		if (formInputs?.projectQnas) {
			const transformedItems = formInputs.projectQnas.map((qna, index) => ({
				id: qna.id ?? `generated-${index}-${qna.question ?? ""}`,
				// preserve all original fields
				...qna,
			}));
			setItems(transformedItems);
		}
	}, [formInputs.projectQnas]);

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
