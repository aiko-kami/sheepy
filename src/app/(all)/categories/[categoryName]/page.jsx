import Image from "next/image";
import Link from "next/link";
import moz01 from "@/public/assets/mosaic/moz01.png";

export const metadata = {
	title: "Category - Sheepy",
	description: "Category page with projects linked to the category",
};

const ProjectDescriptionPage = ({ params }) => {
	return (
		<div className="container mx-auto py-8">
			<Image src={moz01} className="w-full h-64 object-cover" alt="Card" width={600} height={225} />
			<div className="p-6">
				<h1 className="text-3xl font-semibold mb-4">Category {params.categoryName}</h1>
			</div>
		</div>
	);
};

export default ProjectDescriptionPage;
