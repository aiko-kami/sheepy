import { BadgeRounded } from "@/components/Badges/Badges";

const ProjectTags = ({ tags }) => {
	tags = (tags || []).map((tag) => ({
		name: tag.name,
		colors: {
			colorBase: "gray-700",
			bgColor: "bg-gray-100",
			bgColorHover: "bg-gray-200",
		},
	}));

	return (
		<>
			<div className="border rounded-xl p-6 bg-slate-800/50 border-slate-700 shadow-xl">
				<h2 className="text-xl font-bold mb-6">Tags</h2>
				<div className="flex flex-wrap">
					{tags.map((tag, index) => (
						<div key={index} className="mx-1 my-2">
							<BadgeRounded badge={tag} size={"xs"} />
						</div>
					))}
				</div>
			</div>
		</>
	);
};
export default ProjectTags;
