import { BadgeRounded } from "@/components/Badges/Badges";

const ProjectTags = ({ tags }) => {
	return (
		<>
			<div className="lg:mx-4 border rounded-xl p-6 bg-slate-800/50 border-slate-700 backdrop-blur-sm shadow-xl mb-4 sm:mb-8">
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
