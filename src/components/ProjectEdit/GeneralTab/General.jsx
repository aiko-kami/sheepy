import TitleCategory from "@/components/ProjectEdit/GeneralTab/TitleCategory";
import Summary from "@/components/ProjectEdit/GeneralTab/Summary";
import Cover from "@/components/ProjectEdit/GeneralTab/Cover";
import Tags from "@/components/ProjectEdit/GeneralTab/Tags";
import Motivation from "@/components/ProjectEdit/GeneralTab/Motivation";

const General = ({ formInputs, setFormInputs, onChange }) => {
	return (
		<>
			{/* Project title and category */}
			<div className="mb-8 lg:mb-10">
				<TitleCategory formInputs={formInputs} setFormInputs={setFormInputs} onChange={onChange} />
			</div>
			{/* Project summary, description and goals */}
			<div className="mb-8 lg:mb-10">
				<Summary formInputs={formInputs} onChange={onChange} />
			</div>
			{/* Project cover */}
			<div className="mb-8 lg:mb-10">
				<Cover setFormInputs={setFormInputs} />
			</div>
			{/* Project tags */}
			<div className="mb-8 lg:mb-10">
				<Tags formInputs={formInputs} setFormInputs={setFormInputs} />
			</div>
			{/* Project creator motivation, objectives, phases */}
			<div className="mb-8 lg:mb-10">
				<Motivation formInputs={formInputs} onChange={onChange} />
			</div>
		</>
	);
};
export default General;
