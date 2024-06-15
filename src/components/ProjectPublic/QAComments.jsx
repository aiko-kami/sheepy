const HeadSection = ({ project }) => {
	return (
		<>
			{/* Q&A */}
			<p className="mb-2">
				<span className="font-semibold">Q&As:</span> {project.qnas.map((qna) => `${qna.question} ${qna.answer}`).join(", ")}
			</p>
			{/* Comments */}
			<p className="mb-2">
				<span className="font-semibold">Comments:</span> {project.comments}
			</p>
		</>
	);
};
export default HeadSection;
