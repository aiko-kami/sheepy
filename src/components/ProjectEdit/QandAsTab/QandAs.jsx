import QandAsDetails from "@/components/ProjectEdit/QandAsTab/QandAsDetails";

const QandAs = ({ formInputs, onChange, addQna }) => {
	return (
		<>
			{/* Project Q&As */}
			<div className="mb-8 lg:mb-14">
				<QandAsDetails formInputs={formInputs} onChange={onChange} addQna={addQna} />
			</div>
		</>
	);
};
export default QandAs;
