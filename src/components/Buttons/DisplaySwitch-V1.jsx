import { IoGridOutline, IoListOutline } from "react-icons/io5";

const DisplaySwitch = ({ displayMode, setDisplayMode }) => {
	return (
		<>
			{/* Change display buttons */}
			<div className="flex justify-end">
				<div className="flex items-center bg-gray-800/50 rounded-lg p-1 border border-gray-600">
					<button
						onClick={() => setDisplayMode("cards")}
						className={`p-2 rounded-md transition-all ${displayMode === "cards" ? "bg-blue-600 text-white shadow-lg" : "text-gray-400 hover:text-gray-200"}`}
					>
						<IoGridOutline className="h-5 w-5" />
					</button>
					<button
						onClick={() => setDisplayMode("table")}
						className={`p-2 rounded-md transition-all ${displayMode === "table" ? "bg-blue-600 text-white shadow-lg" : "text-gray-400 hover:text-gray-200"}`}
					>
						<IoListOutline className="h-5 w-5" />
					</button>
				</div>
			</div>
		</>
	);
};

export default DisplaySwitch;
