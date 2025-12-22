import Image from "next/image";
import Link from "next/link";
import { IoBookmarkOutline, IoShareSocialOutline } from "react-icons/io5";

import { ButtonCircle } from "@/components/Buttons/Buttons";
import { Avatar } from "@/components/Badges/Avatar";

const Cover = ({ title, coverLink, ownerUserId, ownerUsername, ownerProfilePicture }) => {
	return (
		<>
			<div className="relative mb-3">
				{/* Project cover */}
				{coverLink && coverLink !== "" ? (
					<Image src={coverLink} className="w-full h-60 md:h-110 object-cover rounded-xl" alt="Project cover" width={0} height={0} sizes="100vw" />
				) : (
					<svg viewBox="0 0 66.854 66.854" color="#2C3F5C" xmlns="http://www.w3.org/2000/svg" className="w-full h-60 md:h-110 object-cover rounded-xl py-14 bg-gray-200">
						<path
							fill="currentColor"
							d="M33.427,66.854c16.16,0,29.677-11.527,32.765-26.792c0.004-0.013,0.006-0.024,0.008-0.04 c0.431-2.133,0.654-4.338,0.654-6.595c0-2.252-0.227-4.452-0.652-6.58c-0.002-0.015-0.004-0.028-0.008-0.042 C63.111,11.534,49.592,0,33.427,0C14.995,0,0,14.996,0,33.427c0,2.369,0.25,4.733,0.741,7.032 C4.016,55.754,17.762,66.854,33.427,66.854z M65.754,30.995c-0.049-0.007-0.098-0.014-0.146-0.006l-22.851,3.647l-12.904-6.762 l7.623-12.012l6.945,7.11c0.103,0.103,0.235,0.155,0.384,0.15c0.146-0.008,0.275-0.077,0.366-0.189l4.841-6.117L65.25,27.208 C65.49,28.447,65.656,29.711,65.754,30.995z M42.441,35.598c0.07,0.038,0.149,0.059,0.23,0.059c0.025,0,0.053-0.002,0.079-0.006 l23.014-3.675c0.021-0.003,0.034-0.014,0.054-0.02c0.021,0.488,0.035,0.978,0.035,1.471c0,2.122-0.211,4.194-0.602,6.205 c-12.917,8.097-18.365,6.292-29.156,2.708c-2.923-0.973-6.237-2.071-10.152-3.123c-0.658-0.213-15.837-5.014-23.843,2.604 c-0.139-0.521-0.269-1.043-0.383-1.571c-0.458-2.14-0.693-4.339-0.711-6.542l17.764-10.512L42.441,35.598z M33.427,65.854 c-14.267,0-26.893-9.49-31.012-22.93c7.458-7.738,23.063-2.809,23.245-2.748c3.912,1.051,7.211,2.146,10.122,3.111 c5.184,1.723,9.244,3.07,13.561,3.07c4.439,0,9.15-1.438,15.613-5.369C61.535,55.234,48.701,65.854,33.427,65.854z M33.427,1 C48.675,1,61.49,11.581,64.936,25.785L50.191,15.728c-0.219-0.147-0.513-0.103-0.675,0.103l-4.776,6.037l-6.987-7.156 c-0.106-0.109-0.261-0.166-0.41-0.148c-0.149,0.016-0.289,0.1-0.371,0.229l-8.006,12.615l-9.976-5.227 c-0.154-0.081-0.338-0.076-0.486,0.013L1.022,32.537C1.497,15.068,15.845,1,33.427,1z"
						/>
					</svg>
				)}
				{/* Transparent veil on the cover */}
				<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent rounded-xl" />

				<div className="absolute bottom-4 left-4 flex flex-col">
					{/* Title */}
					<h1 className="text-4xl md:text-6xl font-semibold mb-5">{title}</h1>

					{/* Creator */}
					<div className="text-lg flex items-center ml-2">
						<span className="">by</span>
						<div className="flex items-center justify-center hover:text-blue-400 duration-100 transition ease-in-out mr-14">
							<Link href={`/users/${ownerUserId}`} className="ml-1 mr-2 font-semibold">
								{ownerUsername}
							</Link>
							<Link href={`/users/${ownerUserId}`}>
								<Avatar img={ownerProfilePicture} size={"xl"} alt={"creator profile picture"} />
							</Link>
						</div>

						{/* Buttons Like and Share */}
						<div className="flex justify-center gap-4">
							<ButtonCircle btnProps={{ btnSize: "xl", type: "button", btnColor: "grayBorder" }}>
								<IoBookmarkOutline />
							</ButtonCircle>

							<ButtonCircle btnProps={{ btnSize: "xl", type: "button", btnColor: "grayBorder" }}>
								<IoShareSocialOutline />
							</ButtonCircle>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Cover;
