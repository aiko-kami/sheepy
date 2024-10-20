"use client";

import { Button } from "@/components/Buttons/Buttons";
import atlas from "@/mock/atlas.json";

const TermsOfUseModal = ({ closeModal }) => {
	// Helper function to recursively render JSON content
	const renderElement = (element) => {
		const { tag, content, className, children } = element;
		const Tag = tag; // Use the tag name as the component

		// Render children elements if they exist
		return (
			<Tag className={className} key={content}>
				{content}
				{children && children.map((child) => renderElement(child))}
			</Tag>
		);
	};

	return (
		<>
			<div className="mb-6">{atlas.terms_of_use.map((element, index) => renderElement(element, index))}</div>
			{/* Buttons */}
			<div className="flex gap-8 justify-center">
				<Button
					btnProps={{
						type: "button",
						action: closeModal,
					}}
				>
					Close
				</Button>
			</div>
		</>
	);
};

export default TermsOfUseModal;
