import CategoryHorizontalCard from "@/components/Cards/Categories/CategoryHorizontalCard";

import categories from "@/mock/categories.json";

const AllCategoriesPage = () => {
	return (
		<div className="container min-w-full mx-auto py-8 px-2 md:px-8">
			<h1 className="text-4xl mb-12 text-center">Navigate through categories</h1>
			<p className="mb-4 md:mb-8 text-center">Discover all the categories available to guide your next project...</p>
			{categories && categories.length !== 0 ? (
				<ul className="grid gap-8 xl:gap-10 sm:grid-cols-2 xl:grid-cols-3 xl:mx-auto max-w-350">
					{categories.map((category, index) => (
						<li key={index} className="flex justify-center">
							<CategoryHorizontalCard category={category} animate={true} />
						</li>
					))}
				</ul>
			) : (
				<p className=" text-xl text-center pt-10"> No category found 😕</p>
			)}
		</div>
	);
};

export default AllCategoriesPage;
