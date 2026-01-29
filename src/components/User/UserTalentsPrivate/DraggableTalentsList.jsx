import { useState, useEffect } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import DraggableTalentItem from "@/components/User/UserTalentsPrivate/DraggableTalentItem";

const DraggableTalentsList = ({ formInputs, onChange }) => {
	const items = formInputs.userTalents;

	// Drag & drop
	const handleDragEnd = (event) => {
		const { active, over } = event;
		if (!over || active.id === over.id) return;

		const oldIndex = items.findIndex((i) => i.id === active.id);
		const newIndex = items.findIndex((i) => i.id === over.id);

		const newItems = arrayMove(items, oldIndex, newIndex);
		onChange(newItems);
	};

	return (
		<DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
			<SortableContext items={items.map((item) => item.id)}>
				<div className="flex flex-col space-y-5">
					{items.map((item, index) => (
						<DraggableTalentItem key={item.id} item={item} index={index} items={items} onChange={onChange} />
					))}
				</div>
			</SortableContext>
		</DndContext>
	);
};

export default DraggableTalentsList;
