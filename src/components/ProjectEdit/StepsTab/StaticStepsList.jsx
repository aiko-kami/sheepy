import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { Status } from "@/components/Badges/Badges";

const StaticStepsList = ({ steps }) => {
	return (
		<>
			{steps.map((step, index) => {
				console.log("🚀 ~ StaticStepsList ~ step:", step);
				return (
					<div key={step.id} className="p-4 mb-4 bg-slate-800/70 text-white rounded-md shadow-lg border border-gray-700">
						<h2 className="font-semibold text-xl mb-6">
							Step {index + 1}: {step.title}
						</h2>
						<div className="ml-2 mb-6">
							<p>{step.details}</p>
						</div>
						<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-4" />
						<div className="flex items-center gap-8 ml-2">
							<div className="flex flex-col gap-1">
								<span className="text-slate-400 text-xs ml-1">Status:</span>
								<Status name={step.status.status} size={"xs"} rounded={"lg"} bgColor={step.status.colors.bgColor} />
							</div>
							<div className="flex flex-col gap-1">
								<span className="text-slate-400 text-xs ml-1">Visibility:</span>
								<span
									className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-sm border ${
										step.published ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" : "bg-slate-500/20 text-slate-400 border-slate-500/30"
									}`}
								>
									{step.published ? <IoEyeOutline className="w-4 h-4" /> : <IoEyeOffOutline className="w-4 h-4" />}
									{step.published ? "Published" : "Unpublished"}
								</span>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default StaticStepsList;
