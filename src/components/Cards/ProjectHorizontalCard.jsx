import Image from "next/image";
import Link from "next/link";

const ProjectHorizontalCard = () => {
	return (
		<>
			<div className="relative grid grid-cols-4 items-center mx-8 mb-3">
				<Image src="https://tailwindcss.com/_next/static/media/headlessui@75.c1d50bc1.jpg" width={1280} height={1280} alt="Project picture" className="object-cover h-full shadow-md rounded-lg" />

				<div className="sm:ml-6 col-span-2">
					<h3 className="font-semibold text-xl pb-1">My Indie Film Project</h3>
					<p>Create a compelling indie film with a unique storyline.</p>
				</div>
			</div>
			<div className="relative grid grid-cols-4 items-center mx-8 mb-3">
				<Image src="https://tailwindcss.com/_next/static/media/heroicons@75.4a558f35.jpg" width={1280} height={1280} alt="Project picture" className="object-cover h-full shadow-md rounded-lg" />

				<div className="sm:ml-6 col-span-2">
					<h3 className="font-semibold text-xl pb-1">My Indie Film Project</h3>
					<p>Create a compelling indie film with a unique storyline.</p>
				</div>
			</div>
			<div className="relative grid grid-cols-4 items-center mx-8 mb-3">
				<Image src="https://tailwindcss.com/_next/static/media/heropatterns@75.82a09697.jpg" width={1280} height={1280} alt="Project picture" className="object-cover h-full shadow-md rounded-lg" />

				<div className="sm:ml-6 col-span-2">
					<h3 className="font-semibold text-xl pb-1">My Indie Film Project</h3>
					<p>Create a compelling indie film with a unique storyline.</p>
				</div>
			</div>
		</>
	);
};

export default ProjectHorizontalCard;
