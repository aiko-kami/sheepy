import TitleCategory from "@/components/ProjectEdit/GeneralTab/TitleCategory";
import Summary from "@/components/ProjectEdit/GeneralTab/Summary";
import Cover from "@/components/ProjectEdit/GeneralTab/Cover";
import Tags from "@/components/ProjectEdit/GeneralTab/Tags";
import Motivation from "@/components/ProjectEdit/GeneralTab/Motivation";

const General = ({ formState, setFormState, onChange }) => {
	return (
		<>
			{/* Project title and category */}
			<div className="mb-8 lg:mb-10">
				<TitleCategory formState={formState} setFormState={setFormState} onChange={onChange} />
			</div>
			{/* Project summary, description and goals */}
			<div className="mb-8 lg:mb-10">
				<Summary formState={formState} onChange={onChange} />
			</div>
			{/* Project cover */}
			<div className="mb-8 lg:mb-10">
				<Cover setFormState={setFormState} />
			</div>
			{/* Project tags */}
			<div className="mb-8 lg:mb-10">
				<Tags formState={formState} setFormState={setFormState} />
			</div>
			{/* Project creator motivation, objectives, phases */}
			<div className="mb-8 lg:mb-10">
				<Motivation formState={formState} onChange={onChange} />
			</div>
		</>
	);
};
export default General;
