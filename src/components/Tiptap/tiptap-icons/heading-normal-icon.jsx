import { memo } from "react";

export const HeadingNormalIcon = memo(({ className, ...props }) => {
	return (
		<div className="w-4 h-4">
			<span className="font-inter">N</span>
		</div>
	);
});

HeadingNormalIcon.displayName = "HeadingNormalIcon";
