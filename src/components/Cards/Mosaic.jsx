import Image from "next/image";
import Link from "next/link";

import moz01 from "../../../public/assets/mosaic/moz01.png";
import moz02 from "../../../public/assets/mosaic/moz02.png";
import moz03 from "../../../public/assets/mosaic/moz03.png";
import moz04 from "../../../public/assets/mosaic/moz04.png";
import moz05 from "../../../public/assets/mosaic/moz05.png";
import moz06 from "../../../public/assets/mosaic/moz06.png";

const Mosaic = () => {
	return (
		<>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-4">
				<div className="col-span-2 md:row-span-2">
					<div className="relative w-full">
						<Link href="/projects/01">
							<Image src={moz01} width={1280} alt="Project picture" className="object-cover w-full max-h-96" />
						</Link>
						<Link href="/categories/culture">
							<span className="absolute top-2 right-2 text-xs inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-600 hover:bg-blue-500 duration-200 text-white rounded">
								Culture
							</span>
						</Link>
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
						<Link href="/categories/nature">
							<span className="absolute top-2 right-2 text-xs inline-block ml-2 py-1 px-2 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-600 hover:bg-green-500 duration-200 text-white rounded">
								Nature
							</span>
						</Link>
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
						<Link href="/categories/video-games">
							<span className="absolute top-2 right-2 text-xs inline-block ml-2 py-1 px-2 leading-none text-center whitespace-nowrap align-baseline font-bold bg-red-600 hover:bg-red-500 duration-200 text-white rounded">
								Video Games
							</span>
						</Link>
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
					<Link href="/categories/art">
						<span className="absolute top-2 right-2 text-xs inline-block py-1 px-2 leading-none text-center whitespace-nowrap align-baseline font-bold bg-black hover:bg-gray-800 duration-200 text-white rounded">
							Art
						</span>
					</Link>
					<Link href="/projects/01" className="absolute bottom-1.5 left-2 m-1">
						<h2 className="font-semibold text-xl">Lorem ipsum dolor sit amet</h2>
					</Link>
				</div>
				<div className="relative h-32 lg:h-40 xl:h-48">
					<Link href="/projects/01">
						<Image src={moz05} width={1280} alt="Project picture" className="object-cover h-full w-full" />
					</Link>
					<Link href="/categories/music">
						<span className="absolute top-2 right-2 text-xs inline-block py-1 px-2 leading-none text-center whitespace-nowrap align-baseline font-bold bg-purple-800 hover:bg-purple-500 duration-200 text-white rounded">
							Music
						</span>
					</Link>
					<Link href="/sign-up" className="absolute bottom-1.5 left-2 m-1">
						<h2 className="font-semibold text-xl">Lorem ipsum dolor sit amet</h2>
					</Link>
				</div>
				<div className="col-span-2 flex h-32 lg:h-40 xl:h-48">
					<div className="w-2/5 relative">
						<Link href="/projects/01">
							<Image src={moz06} width={1280} alt="Project picture" className="object-cover h-full w-full" />
						</Link>
						<Link href="/categories/lgbt">
							<span className="absolute top-2 right-2 text-xs inline-block ml-2 py-1 px-2 leading-none text-center whitespace-nowrap align-baseline font-bold bg-pink-600 hover:bg-pink-500 duration-200 text-white rounded">
								LGBT
							</span>
						</Link>
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
