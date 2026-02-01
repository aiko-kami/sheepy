import { useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { motion, LayoutGroup } from "framer-motion";

import DraggableTalentItem from "@/components/User/UserTalentsPrivate/DraggableTalentItem";

const DraggableTalentsList = ({ formInputs, onChange }) => {
	const items = formInputs.userTalents;

	const [isProgrammaticMove, setIsProgrammaticMove] = useState(false);

	// Drag & drop
	const handleDragEnd = (event) => {
		setIsProgrammaticMove(false);
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
				<LayoutGroup>
					<div className="flex flex-col">
						{items.map((item, index) => (
							<motion.div key={item.id} layout transition={isProgrammaticMove ? { type: "tween" } : { duration: 0 }} className="mb-5">
								<DraggableTalentItem item={item} index={index} items={items} onChange={onChange} setIsProgrammaticMove={setIsProgrammaticMove} />
							</motion.div>
						))}
					</div>
				</LayoutGroup>
			</SortableContext>
		</DndContext>
	);
};

export default DraggableTalentsList;
