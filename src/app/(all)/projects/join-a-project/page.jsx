import projectsToJoin from "@/mock/projectsToJoin.json";
import JoinProject from "@/components/JoinProject/JoinProject";

const JoinAProjectPage = () => {
	return (
		<div className="container min-w-full mx-auto py-8 px-2 md:px-8">
			<h1 className="text-4xl mb-12 text-center">Looking for a project?</h1>
			<p className="mb-4 md:mb-8 text-center">Here are some projects waiting for you to help them...</p>
			<JoinProject projects={projectsToJoin} />
		</div>
	);
};

export default JoinAProjectPage;
