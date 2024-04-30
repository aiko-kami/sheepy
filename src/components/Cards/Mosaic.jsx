import Image from "next/image";
import Link from "next/link";

import moz01 from "../../../public/assets/mosaic/moz01.png";
import moz02 from "../../../public/assets/mosaic/moz02.png";
import moz03 from "../../../public/assets/mosaic/moz03.png";
import moz04 from "../../../public/assets/mosaic/moz04.png";
import moz05 from "../../../public/assets/mosaic/moz05.png";
import moz06 from "../../../public/assets/mosaic/moz06.png";
import BadgeCategory from "@/components/Badges/BadgeCategory";

const Mosaic = () => {
	const category1 = {
		name: "Culture",
		link: "/categories/culture",
		bgColor: "bg-blue-600",
		bgColorHover: "bg-blue-500",
	};
	const category2 = {
		name: "Nature",
		link: "/categories/nature",
		bgColor: "bg-green-600",
		bgColorHover: "bg-green-500",
	};
	const category3 = {
		name: "Video Games",
		link: "/categories/video-games",
		bgColor: "bg-red-600",
		bgColorHover: "bg-red-500",
	};
	const category4 = {
		name: "Art",
		link: "/categories/art",
		bgColor: "bg-black",
		bgColorHover: "bg-gray-800",
	};
	const category5 = {
		name: "Music",
		link: "/categories/music",
		bgColor: "bg-purple-800",
		bgColorHover: "bg-purple-500",
	};
	const category6 = {
		name: "LGBT",
		link: "/categories/lgbt",
		bgColor: "bg-pink-600",
		bgColorHover: "bg-pink-500",
	};

	return (
		<>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-4">
				<div className="col-span-2 md:row-span-2">
					<div className="relative w-full">
						<Link href="/projects/01">
							<Image src={moz01} width={1280} alt="Project picture" className="object-cover w-full max-h-96" />
						</Link>
						<div className="absolute top-2 right-2">
							<BadgeCategory category={category1} />
						</div>
					</div>
					<Link href="/projects/01">
						<h2 className="font-semibold text-xl">Lorem ipsum do lor sit amet</h2>
						<p className="line-clamp-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam mollitia, doloribus dolorum amet et libero nam modi unde atque</p>
					</Link>
				</div>
				<div className="col-span-2 flex h-32 lg:h-40 xl:h-48">
					<div className="w-2/5 relative">
						<Link href="/projects/01">
							<Image src={moz02} width={1280} alt="Project picture" className="object-cover h-full w-full" />
						</Link>
						<div className="absolute top-2 right-2">
							<BadgeCategory category={category2} />
						</div>
					</div>
					<Link href="/projects/01" className="w-3/5">
						<h2 className="font-semibold text-xl ml-2">Lorem ipsum dolor sit amet</h2>
						<p className="line-clamp-3 ml-2">Lorem ipsum dolor sit amet, cons ectetur adipisicing elit. Aliquam mollitia, doloribus</p>
					</Link>
				</div>
				<div className="col-span-2 flex h-32 lg:h-40 xl:h-48">
					<div className="w-2/5 relative">
						<Link href="/projects/01">
							<Image src={moz03} width={1280} alt="Project picture" className="object-cover h-full w-full" />
						</Link>
						<div className="absolute top-2 right-2">
							<BadgeCategory category={category3} />
						</div>
					</div>
					<Link href="/projects/01" className="w-3/5">
						<h2 className="font-semibold text-xl ml-2">Lorem ipsum dolor sit amet</h2>
						<p className="line-clamp-3 ml-2">Lorem ipsum dolor sit amet, cons ectetur adipisicing elit. Aliquam mollitia, doloribus</p>
					</Link>
				</div>
				<div className="relative h-32 lg:h-40 xl:h-48">
					<Link href="/projects/01">
						<Image src={moz04} width={1280} alt="Project picture" className="object-cover h-full w-full" />
					</Link>
					<div className="absolute top-2 right-2">
						<BadgeCategory category={category4} />
					</div>
					<Link href="/projects/01" className="absolute bottom-1.5 left-2 m-1">
						<h2 className="font-semibold text-xl">Lorem ipsum dolor sit amet</h2>
					</Link>
				</div>
				<div className="relative h-32 lg:h-40 xl:h-48">
					<Link href="/projects/01">
						<Image src={moz05} width={1280} alt="Project picture" className="object-cover h-full w-full" />
					</Link>
					<div className="absolute top-2 right-2">
						<BadgeCategory category={category5} />
					</div>
					<Link href="/sign-up" className="absolute bottom-1.5 left-2 m-1">
						<h2 className="font-semibold text-xl">Lorem ipsum dolor sit amet</h2>
					</Link>
				</div>
				<div className="col-span-2 flex h-32 lg:h-40 xl:h-48">
					<div className="w-2/5 relative">
						<Link href="/projects/01">
							<Image src={moz06} width={1280} alt="Project picture" className="object-cover h-full w-full" />
						</Link>
						<div className="absolute top-2 right-2">
							<BadgeCategory category={category6} />
						</div>
					</div>
					<Link href="/projects/01" className="w-3/5">
						<h2 className="font-semibold text-xl ml-2">Lorem ipsum dolor sit amet</h2>
						<p className="line-clamp-3 ml-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore sunt vero vel earum aperiam facere. Consequatur omnis labore consequun</p>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Mosaic;
