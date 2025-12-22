import TitleCategory from "@/components/ProjectEdit/GeneralTab/TitleCategory";
import Information from "@/components/ProjectEdit/GeneralTab/Information";
import Cover from "@/components/ProjectEdit/GeneralTab/Cover";
import Tags from "@/components/ProjectEdit/GeneralTab/Tags";
import Objectives from "@/components/ProjectEdit/GeneralTab/Objectives";

const General = ({ projectId, formInputs, setFormInputs, onChange, objectives, tags, tagsList, userPermissions, closeModalCoverRemove, modalDisplayCoverRemove, confirmRemoveCover }) => {
	return (
		<>
			{/* Project title and category */}
			<div className="mb-8 lg:mb-10">
				<TitleCategory formInputs={formInputs} setFormInputs={setFormInputs} onChange={onChange} userPermissions={userPermissions} />
			</div>
			{/* Project summary, description, goal and creator motivation */}
			<div className="mb-8 lg:mb-10">
				<Information formInputs={formInputs} onChange={onChange} userPermissions={userPermissions} />
			</div>
			{/* Project cover */}
			<div className="mb-8 lg:mb-10">
				<Cover
					formInputs={formInputs}
					setFormInputs={setFormInputs}
					userPermissions={userPermissions}
					closeModalCoverRemove={closeModalCoverRemove}
					modalDisplayCoverRemove={modalDisplayCoverRemove}
					confirmRemoveCover={confirmRemoveCover}
				/>
			</div>
			{/* Project tags */}
			<div className="mb-8 lg:mb-10">
				<Tags projectId={projectId} tags={tags} tagsList={tagsList} userPermissions={userPermissions} />
			</div>
			{/* Project objectives */}
			<div className="mb-8 lg:mb-10">
				<Objectives projectId={projectId} objectives={objectives} userPermissions={userPermissions} />
			</div>
		</>
	);
};
export default General;
