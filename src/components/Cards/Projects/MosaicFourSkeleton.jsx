const MosaicSixSkeleton = () => {
	return (
		<>
			<div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full mb-10" role="status" aria-busy="true">
				{/* Tile 1 - top long tile */}
				<div className="col-span-2 relative block overflow-hidden shadow-sm">
					<div className="relative w-full">
						<div className="w-full h-48 md:h-90 bg-gray-200 rounded-sm dark:bg-slate-700 animate-pulse" />
						<div className="absolute top-2 right-2">
							<div className="w-10 h-6 rounded px-2 bg-gray-300 dark:bg-slate-600 animate-pulse" />
						</div>
					</div>
					<div className="absolute bottom-4 left-2 p-3 w-3/4">
						<div className="h-6 w-3/4 bg-gray-300 dark:bg-slate-600 rounded animate-pulse mb-3" />
						<div className="h-4 w-full bg-gray-300 dark:bg-slate-600 rounded animate-pulse" />
					</div>
				</div>

				{/* Tile 2 - top small tile */}
				<div className="block relative overflow-hidden shadow-sm dark:bg-slate-700 animate-pulse">
					<div className="absolute top-2 right-2">
						<div className="w-9 h-5 rounded bg-gray-300 dark:bg-slate-600 animate-pulse" />
					</div>
					<div className="absolute bottom-4 left-2 p-3 w-3/4">
						<div className="h-6 w-3/4 bg-gray-300 dark:bg-slate-600 rounded animate-pulse mb-3" />
						<div className="h-4 w-full bg-gray-300 dark:bg-slate-600 rounded animate-pulse" />
					</div>
				</div>

				{/* Tile 3 - bottom small tile */}
				<div className="block relative overflow-hidden shadow-sm dark:bg-slate-700 animate-pulse">
					<div className="absolute top-2 right-2">
						<div className="w-9 h-5 rounded bg-gray-300 dark:bg-slate-600 animate-pulse" />
					</div>
					<div className="absolute bottom-4 left-2 p-3 w-3/4">
						<div className="h-6 w-3/4 bg-gray-300 dark:bg-slate-600 rounded animate-pulse mb-3" />
						<div className="h-4 w-full bg-gray-300 dark:bg-slate-600 rounded animate-pulse" />
					</div>
				</div>

				{/* Tile 4 - bottom long tile */}
				<div className="col-span-2 relative block overflow-hidden shadow-sm">
					<div className="relative w-full">
						<div className="w-full h-48 md:h-90 bg-gray-200 rounded-sm dark:bg-slate-700 animate-pulse" />
						<div className="absolute top-2 right-2">
							<div className="w-10 h-6 rounded px-2 bg-gray-300 dark:bg-slate-600 animate-pulse" />
						</div>
					</div>
					<div className="absolute bottom-4 right-2 p-3 w-3/4 flex flex-col items-end">
						<div className="h-6 w-3/4 bg-gray-300 dark:bg-slate-600 rounded animate-pulse mb-3" />
						<div className="h-4 w-full bg-gray-300 dark:bg-slate-600 rounded animate-pulse" />
					</div>
				</div>
			</div>
		</>
	);
};

export default MosaicSixSkeleton;
