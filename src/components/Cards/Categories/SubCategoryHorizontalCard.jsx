import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/Badges/Badges";

const SubCategoryHorizontalCard = ({ category }) => {
	const { title, summary, cover, logo } = category;

	return (
		<>
			<div className="relative grid grid-cols-4 items-center shadow-xl rounded-lg bg-blue-900 hover:-translate-y-1 transition ease-in duration-75">
				<div className="col-span-1 relative min-h-40 h-full">
					<Link href="/projects/01">
						<Image src={cover} fill alt="Project picture" className="object-cover h-full shadow-md rounded-l-lg" />
					</Link>
				</div>
				<div className="px-6 col-span-3 h-full py-8 relative">
					<Link href="/projects/01">
						<h3 className="font-semibold text-2xl pb-1">{title}</h3>
					</Link>
					<div className="inline-block">
						<Badge badge={logo} size={"xs"} />
					</div>
					<p className="line-clamp-2">{summary}</p>
				</div>
			</div>
		</>
	);
};

export default SubCategoryHorizontalCard;
