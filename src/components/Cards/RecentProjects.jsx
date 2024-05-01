import ProjectCard from "./ProjectCard";

const RecentProjects = () => {
	const project1 = {
		id: 12345,
		title: "Create a submarine",
		summary: "Hello! I am looking for people who want to explore the ocean.",
		cover: "https://superawesomevectors.com/wp-content/uploads/2021/04/yellow-submarine-vector.jpg",
		likes: 5,
		category: {
			name: "Nature",
			link: "/categories/nature",
			bgColor: "bg-green-600",
			bgColorHover: "bg-green-500",
			size: "sm",
		},
		subCategory: "Cinema",
		location: "Sydney",
		tags: [
			{
				name: "Ocean",
				link: "/tags/ocean",
				bgColor: "bg-blue-300",
				size: "xs",
			},
			{
				name: "Mecanics",
				link: "/tags/mecanics",
				bgColor: "bg-orange-400",
				size: "xs",
			},
			{
				name: "Exploration",
				link: "/tags/exploration",
				bgColor: "bg-green-400",
				size: "xs",
			},
		],
		status: "Active",
	};
	const project2 = {
		title: "Build a Treehouse",
		summary: "Hey everyone! I'm planning to build a cozy treehouse in my backyard. Join me in this fun project!",
		cover: "https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/home-improvement/wp-content/uploads/2023/07/unnamed-5.jpg",
		likes: 8,
		category: {
			name: "DIY",
			link: "/categories/diy",
			bgColor: "bg-yellow-500",
			bgColorHover: "bg-yellow-400",
			size: "sm",
		},
		subCategory: "Construction",
		location: "Seattle",
		tags: [
			{
				name: "Home Improvement",
				link: "/tags/diy",
				bgColor: "bg-stone-400",
				size: "xs",
			},
			{
				name: "Nature",
				link: "/tags/nature",
				bgColor: "bg-green-400",
				size: "xs",
			},
		],
		status: "Active",
	};

	const project3 = {
		title: "Start a Podcast",
		summary: "Hi friends! I'm launching a new podcast series about technology and its impact on society. Join me for some insightful conversations!",
		cover: "https://www.thomann.de/blog/wp-content/uploads/2023/01/podcastStart_header_770x425.png",
		likes: 12,
		category: {
			name: "Media",
			link: "/categories/media",
			bgColor: "bg-purple-500",
			bgColorHover: "bg-purple-400",
			size: "sm",
		},
		subCategory: "Technology",
		location: "San Francisco",
		tags: [
			{
				name: "Podcast",
				link: "/tags/podcast",
				bgColor: "bg-blue-400",
				size: "xs",
			},
			{
				name: "Tech",
				link: "/tags/tech",
				bgColor: "bg-indigo-400",
				size: "xs",
			},
			{
				name: "Society",
				link: "/tags/society",
				bgColor: "bg-purple-400",
				size: "xs",
			},
		],
		status: "Active",
	};

	const project4 = {
		title: "Organize a Charity Event",
		summary: "Hello everyone! Let's come together to organize a charity event to support local shelters and food banks. Your help can make a big difference!",
		cover: "https://www.eventbrite.com.au/blog/wp-content/uploads/2022/06/Promote-charity-event-1-768x348.png",
		likes: 6,
		category: {
			name: "Community",
			link: "/categories/community",
			bgColor: "bg-red-500",
			bgColorHover: "bg-red-400",
			size: "sm",
		},
		subCategory: "Social Cause",
		location: "New York",
		tags: [
			{
				name: "Charity",
				link: "/tags/charity",
				bgColor: "bg-pink-400",
				size: "xs",
			},
			{
				name: "Volunteering",
				link: "/tags/volunteering",
				bgColor: "bg-yellow-400",
				size: "xs",
			},
		],
		status: "Active",
	};
	return (
		<>
			<div className="my-4 flex flex-wrap justify-center gap-6">
				<ProjectCard project={project1} />
				<ProjectCard project={project2} />
				<ProjectCard project={project3} />
				<ProjectCard project={project4} />
			</div>
		</>
	);
};

export default RecentProjects;
