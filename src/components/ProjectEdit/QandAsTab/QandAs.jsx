import QandAsDetails from "@/components/ProjectEdit/QandAsTab/QandAsDetails";

const QandAs = ({ formState, onChange }) => {
	return (
		<>
			{/* Project Q&As */}
			<div className="mb-8 lg:mb-14">
				<QandAsDetails formState={formState} onChange={onChange} />
			</div>
		</>
	);
};
export default QandAs;
