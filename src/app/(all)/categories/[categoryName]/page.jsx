import Image from "next/image";
import Link from "next/link";
import categories from "@/mock/categories.json";

export const metadata = {
	title: "Category - Sheepy",
	description: "Category page with projects linked to the category",
};

const ProjectDescriptionPage = ({ params }) => {
	const { categoryName } = params;

	// Find the category object that matches the category link
	const category = categories.find((cat) => cat.link === `/categories/${categoryName}`);

	// If the category is not found
	if (!category) {
		return (
			<div className="container mx-auto py-8">
				<h1 className="text-3xl font-semibold mb-4">Category not found</h1>
			</div>
		);
	}

	return (
		<div className="container mx-auto py-8">
			<Image src={category.cover} className="w-full h-80 object-cover rounded-3xl mb-3" alt="Category cover" width={0} height={0} sizes="100vw" />
			<div className="p-6">
				<h1 className="text-3xl font-semibold mb-4">Category {category.name}</h1>
				<p>{category.description}</p>
				<div className="mt-4">
					{category.subCategories.map((subCategory, index) => (
						<Link key={index} href={subCategory.link} legacyBehavior>
							<a className={`block ${subCategory.bgColor} hover:${subCategory.bgColorHover} text-white rounded-lg p-2 mb-2`}>
								{subCategory.symbol && <span className="mr-2">{subCategory.symbol}</span>}
								{subCategory.name}
							</a>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectDescriptionPage;
