import Image from "next/image";
import { Badge } from "@/components/Badges/Badges";
import { IoLocationOutline, IoHeartOutline, IoFitness } from "react-icons/io5";

const Cover = ({ project }) => {
	return (
		<>
			<Image src={project.cover} className="w-full h-100 object-cover rounded-3xl mb-3" alt="Card" width={0} height={0} sizes="100vw" />
			{/* Category, location, likes, project status */}
			<ul className="sm:flex mb-4 sm:mb-10 lg:pl-26 grid grid-cols-2">
				<li className="flex mb-2 sm:mb-0 justify-center">
					<Badge badge={project.category} size={"sm"} />
				</li>
				<li className="flex mb-2 sm:mb-0 sm:ml-4 justify-center">
					<Badge badge={project.subCategory} size={"xs"} />
				</li>
				<li className="flex mb-2 sm:mb-0 sm:ml-4 col-span-2 justify-center">
					<IoLocationOutline className="text-gray-400 mr-1 text-2xl" />
					<p>{project.locationCity}</p>
				</li>
				<li className="flex mb-2 sm:mb-0 sm:ml-4 justify-center">
					<IoHeartOutline className="text-pink-600 mr-1 text-2xl" />
					<p>{project.likes} likes</p>
				</li>
				<li className="flex sm:ml-4">
					<IoFitness className={`${project.status.textColor} mr-1 text-2xl justify-center`} />
					<p className={`${project.status.textColor} font-semibold`}>{project.status.name}</p>
				</li>
			</ul>
		</>
	);
};
export default Cover;
