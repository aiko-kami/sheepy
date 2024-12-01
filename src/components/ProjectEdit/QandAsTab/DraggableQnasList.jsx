import React, { useState, useEffect } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import DraggableQnaItem from "@/components/ProjectEdit/QandAsTab/DraggableQnaItem";

const DraggableQnasList = ({ formState, onChange }) => {
	const [items, setItems] = useState([]);

	// Initialize items based on formState.projectQnas
	useEffect(() => {
		if (formState?.projectQnas) {
			const transformedItems = formState.projectQnas.map((qna, index) => ({
				id: `${index + 1}`,
				question: qna.question,
				response: qna.response,
				published: qna.published,
			}));
			setItems(transformedItems);
		}
	}, [formState.projectQnas]);

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
						<DraggableQnaItem
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

export default DraggableQnasList;
