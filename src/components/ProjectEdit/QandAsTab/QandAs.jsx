import QandAsDetails from "@/components/ProjectEdit/QandAsTab/QandAsDetails";

const QandAs = ({ formState, onChange, addQna }) => {
	return (
		<>
			{/* Project Q&As */}
			<div className="mb-8 lg:mb-14">
				<QandAsDetails formState={formState} onChange={onChange} addQna={addQna} />
			</div>
		</>
	);
};
export default QandAs;
