import { BadgeRounded } from "@/components/Badges/Badges";

const HeadSection = ({ project }) => {
	return (
		<>
			<h2 className="font-semibold text-3xl mb-3">Tags</h2>
			<hr className="h-px mb-3 bg-gray-200 border-0 dark:bg-gray-700" />
			<div className="flex flex-wrap justify-center mb-8">
				{project.tags.map((tag, index) => (
					<div key={index} className="mx-1 my-2">
						<BadgeRounded badge={tag} />
					</div>
				))}
			</div>
		</>
	);
};
export default HeadSection;
