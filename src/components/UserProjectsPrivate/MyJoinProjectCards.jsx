import { JoinProjectHorizontalCardActions } from "@/components/Cards/Projects/ProjectCards";

const MyJoinProjectsCards = ({ joinProjects, type }) => {
	return (
		<>
			<ul className="grid sm:grid-cols-2 gap-4">
				{joinProjects.map((joinProject, index) => (
					<li key={index}>
						<JoinProjectHorizontalCardActions joinProject={joinProject} type={type} />
					</li>
				))}
			</ul>
		</>
	);
};
export default MyJoinProjectsCards;
