import SkillInputForm from "@/components/Forms/QuickSkillInputForm/QuickSkillInputForm";

import { IoPricetagOutline } from "react-icons/io5";

const QuickSkills = ({ quickSkills = [] }) => {
	return (
		<>
			<div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 pb-10">
				<div className="flex items-center justify-between mb-8">
					<h1 className="text-xl font-semibold text-white">
						<IoPricetagOutline className="inline mr-2" />
						Quick Skills
					</h1>
				</div>
				<SkillInputForm quickSkills={quickSkills} />
			</div>
		</>
	);
};
export default QuickSkills;
