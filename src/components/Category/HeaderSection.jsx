import Image from "next/image";

const HeadSection = ({ category }) => {
	return (
		<>
			<div className="relative mb-2 sm:mb-4">
				<Image src={category.cover} className="w-full sm:h-80 object-cover rounded-3xl" alt="Category cover" width={0} height={0} sizes="100vw" />
				<div className="absolute -translate-y-2 inset-0 flex items-center justify-center">
					<h1
						className="text-center leading-tight font-rowdies text-transparent bg-clip-text text-[60px] sm:text-[110px] lg:text-[150px] p-0 m-0 drop-shadow-[2px_2px_5px_rgba(0,0,0,0.9)]"
						style={{ backgroundImage: `url(${category.coverText})`, backgroundPosition: "center" }}
					>
						{category.name}
					</h1>
				</div>
			</div>
		</>
	);
};
export default HeadSection;
