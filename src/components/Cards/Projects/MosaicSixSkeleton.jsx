const MosaicSixSkeleton = () => {
	return (
		<>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full" role="status" aria-busy="true">
				{/* Large tile (col-span-2 md:row-span-2) */}
				<div className="col-span-2 md:row-span-2 block overflow-hidden shadow-sm">
					<div className="relative w-full">
						<div className="w-full h-48 md:h-90 bg-gray-200 rounded-sm dark:bg-slate-700 animate-pulse" />
						<div className="absolute top-2 right-2">
							<div className="w-10 h-6 rounded px-2 bg-gray-300 dark:bg-slate-600 animate-pulse" />
						</div>
					</div>
					<div className="p-3">
						<div className="h-6 w-3/4 bg-gray-200 dark:bg-slate-700 rounded animate-pulse mb-3" />
						<div className="h-4 w-full bg-gray-200 dark:bg-slate-700 rounded animate-pulse" />
					</div>
				</div>

				{/* Tile 2 */}
				<div className="col-span-2 block overflow-hidden shadow-sm">
					<div className="flex h-32 lg:h-40 xl:h-full">
						<div className="w-2/5 relative">
							<div className="h-full w-full bg-gray-200 rounded-sm dark:bg-slate-700 animate-pulse" />
							<div className="absolute top-2 right-2">
								<div className="w-9 h-5 rounded bg-gray-300 dark:bg-slate-600 animate-pulse" />
							</div>
						</div>
						<div className="w-3/5 p-3">
							<div className="h-5 w-4/5 bg-gray-200 dark:bg-slate-700 rounded animate-pulse mb-4" />
							<div className="h-4 w-full bg-gray-200 dark:bg-slate-700 rounded animate-pulse mb-3" />
							<div className="h-4 w-full bg-gray-200 dark:bg-slate-700 rounded animate-pulse" />
						</div>
					</div>
				</div>

				{/* Tile 3 */}
				<div className="col-span-2 block overflow-hidden shadow-sm">
					<div className="flex h-32 lg:h-40 xl:h-full">
						<div className="w-2/5 relative">
							<div className="h-full w-full bg-gray-200 rounded-sm dark:bg-slate-700 animate-pulse" />
							<div className="absolute top-2 right-2">
								<div className="w-9 h-5 rounded bg-gray-300 dark:bg-slate-600 animate-pulse" />
							</div>
						</div>
						<div className="w-3/5 p-3">
							<div className="h-5 w-4/5 bg-gray-200 dark:bg-slate-700 rounded animate-pulse mb-4" />
							<div className="h-4 w-full bg-gray-200 dark:bg-slate-700 rounded animate-pulse mb-3" />
							<div className="h-4 w-full bg-gray-200 dark:bg-slate-700 rounded animate-pulse" />
						</div>
					</div>
				</div>

				{/* Tile 4 - Tall gradient tile */}
				<div className="relative h-32 lg:h-40 xl:h-48 overflow-hidden shadow-sm">
					<div className="h-full w-full bg-gradient-to-t from-black/10 to-black/0">
						<div className="h-full w-full bg-gray-200 rounded-sm dark:bg-slate-700 animate-pulse" />
					</div>
					<div className="absolute top-2 right-2">
						<div className="w-9 h-5 rounded bg-gray-300 dark:bg-slate-600 animate-pulse" />
					</div>
					<div className="absolute bottom-4 left-2 w-3/4">
						<div className="h-5 bg-gray-200 dark:bg-slate-700 rounded animate-pulse" />
					</div>
				</div>

				{/* Tile 5 - Tall gradient tile */}
				<div className="relative h-32 lg:h-40 xl:h-48 overflow-hidden shadow-sm">
					<div className="h-full w-full bg-gradient-to-t from-black/10 to-black/0">
						<div className="h-full w-full bg-gray-200 rounded-sm dark:bg-slate-700 animate-pulse" />
					</div>
					<div className="absolute top-2 right-2">
						<div className="w-9 h-5 rounded bg-gray-300 dark:bg-slate-600 animate-pulse" />
					</div>
					<div className="absolute bottom-4 left-2 w-3/4">
						<div className="h-5 bg-gray-200 dark:bg-slate-700 rounded animate-pulse" />
					</div>
				</div>

				{/* Tile 6 - Last tile */}
				<div className="col-span-2 block overflow-hidden shadow-sm">
					<div className="flex h-32 lg:h-40 xl:h-48">
						<div className="w-2/5 relative">
							<div className="h-full w-full bg-gray-200 rounded-sm dark:bg-slate-700 animate-pulse" />
							<div className="absolute top-2 right-2">
								<div className="w-9 h-5 rounded bg-gray-300 dark:bg-slate-600 animate-pulse" />
							</div>
						</div>
						<div className="w-3/5 p-3">
							<div className="h-5 w-4/5 bg-gray-200 dark:bg-slate-700 rounded animate-pulse mb-4" />
							<div className="h-4 w-full bg-gray-200 dark:bg-slate-700 rounded animate-pulse mb-3" />
							<div className="h-4 w-full bg-gray-200 dark:bg-slate-700 rounded animate-pulse" />
						</div>
					</div>
				</div>
			</div>{" "}
		</>
	);
};

export default MosaicSixSkeleton;
