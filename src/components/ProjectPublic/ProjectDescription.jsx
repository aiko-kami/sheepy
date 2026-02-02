import { richTextRenderer } from "@/utils/richTextRenderer";

const ProjectDescription = ({ description }) => {
	return (
		<>
			<div className="border rounded-xl p-6 bg-slate-800/50 border-slate-700 shadow-xl">
				<h2 className="text-xl font-bold mb-6">The project in details</h2>
				<div className="text-justify text-slate-300 leading-relaxed">
					{description !== null && description !== undefined ? richTextRenderer(description) : <span className="italic text-gray-400">Description not found</span>}
				</div>
			</div>
		</>
	);
};
export default ProjectDescription;
