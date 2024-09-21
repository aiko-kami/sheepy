import TitleCategory from "@/components/ProjectEdit/GeneralTab/TitleCategory";
import Summary from "@/components/ProjectEdit/GeneralTab/Summary";
import Cover from "@/components/ProjectEdit/GeneralTab/Cover";
import Tags from "@/components/ProjectEdit/GeneralTab/Tags";

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
				<Cover formState={formState} onChange={onChange} />
			</div>
			{/* Project tags */}
			<div className="mb-8 lg:mb-10">
				<Tags formState={formState} setFormState={setFormState} />
			</div>
		</>
	);
};
export default General;
