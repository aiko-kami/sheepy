import Image from "next/image";
import Link from "next/link";
import { BadgeRounded } from "@/components/Badges/Badges";
import { IoLocationOutline } from "react-icons/io5";

const LocationHorizontalCard = ({ location }) => {
	const { city, country, nbProjects, nbTalents, map } = location;

	return (
		<>
			<div className="grid grid-cols-2 p-2 items-center shadow-xl rounded-lg bg-blue-900 w-full sm:w-140">
				{/* Map picture */}
				<div className="sm:flex justify-center">
					<Link href="/users/01" className="">
						<Image src={map} height={0} width={0} sizes="100vw" alt="Map picture" className="object-cover w-44 h-44 border-3 border-red-500 rounded-full shadow-md" />
					</Link>
				</div>
				{/* City, country, number of projects and talents */}
				<div className="pl-4">
					{/* City */}
					<div className="flex">
						<IoLocationOutline className="tn:text-3xl mt-1 -ml-6 mr-1" />
						<Link href="/users/01">
							<h3 className="inline-block font-semibold text-center tn:text-left text-xl tn:text-3xl overflow-hidden text-ellipsis">{city}</h3>
						</Link>
					</div>
					{/* Country */}
					<p className="mb-1 tn:mb-4">{country}</p>
					{/* Number of projects and talents */}
					<p className="text-sm tn:text-base line-clamp-4">{nbProjects} projects</p>
					<p className="text-sm tn:text-base line-clamp-4">{nbTalents} talents</p>
				</div>
			</div>
		</>
	);
};

export default LocationHorizontalCard;
