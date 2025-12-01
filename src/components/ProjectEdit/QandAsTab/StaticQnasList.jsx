import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const StaticQnasList = ({ qnas }) => {
	return (
		<div className="flex flex-col space-y-4">
			{qnas.map((qna, index) => {
				return (
					<div key={qna.id ?? `qna-${index}`} className="p-4 pb-6 bg-slate-800/70 text-white rounded-md shadow-lg border border-gray-700">
						<h2 className="font-semibold text-xl mb-6">
							Q&A {index + 1}: {qna.question}
						</h2>
						<div className="ml-2 mb-5">
							<p>{qna.response}</p>
						</div>
						<hr className="h-px bg-gray-200 border-0 dark:bg-gray-700 mb-4" />
						<div className="flex items-center gap-8 ml-2">
							<div className="flex flex-col gap-1">
								<span className="text-slate-400 text-xs ml-1">Visibility:</span>
								<span
									className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-sm border ${
										qna.published ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" : "bg-slate-500/20 text-slate-400 border-slate-500/30"
									}`}
								>
									{qna.published ? <IoEyeOutline className="w-4 h-4" /> : <IoEyeOffOutline className="w-4 h-4" />}
									{qna.published ? "Published" : "Unpublished"}
								</span>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default StaticQnasList;
