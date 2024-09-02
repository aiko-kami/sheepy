import Link from "next/link";
import Image from "next/image";

import { IoLocationOutline } from "react-icons/io5";
import { BadgeRounded } from "@/components/Badges/Badges";

const LocationTable = ({ locations }) => {
	return (
		<>
			<table className="w-full text-xs md:text-sm shadow-lg">
				<thead className="uppercase bg-gray-700 text-gray-300">
					<tr>
						<th scope="col" className="text-center p-2 md:px-4 md:py-3 ">
							City
						</th>
						<th scope="col" className="text-center p-2 md:px-4 md:py-3">
							Country
						</th>
						<th scope="col" className="text-center p-2 md:px-4 md:py-3">
							Projects
						</th>
						<th scope="col" className="text-center p-2 md:px-4 md:py-3">
							Talents
						</th>
					</tr>
				</thead>
				<tbody>
					{locations.map((location, index) => {
						return (
							<tr key={index} className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
								<td scope="row" className="p-2 md:px-4 md:py-2">
									<div className="font-semibold text-base lg:whitespace-nowrap">
										<Link href={`/users/123`}>{location.city}</Link>
									</div>
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2">
									<div className="text-gray-400 line-clamp-2">{location.country}</div>
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2 text-center">
									<div className="text-gray-400 line-clamp-2">{location.nbProjects}</div>
								</td>
								<td scope="row" className="p-2 md:px-4 md:py-2 text-center">
									<div className="text-gray-400 line-clamp-2">{location.nbTalents}</div>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
};

export default LocationTable;
