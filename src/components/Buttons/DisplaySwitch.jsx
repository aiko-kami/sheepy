import { IoGridOutline, IoReorderFour } from "react-icons/io5";

const DisplaySwitch = ({ displayMode, setDisplayMode }) => {
	const switchDisplay = () => {
		displayMode === "table" && setDisplayMode("cards");
		displayMode === "cards" && setDisplayMode("table");
	};

	return (
		<>
			{/* Change display buttons */}
			<div className="flex justify-end">
				{displayMode === "table" && (
					<>
						<button onClick={switchDisplay}>
							<IoGridOutline className="text-3xl hover:text-blue-400 duration-100 transition ease-in-out" title="Display project as cards" />
						</button>
					</>
				)}
				{displayMode === "cards" && (
					<button onClick={switchDisplay}>
						<IoReorderFour className="text-3xl hover:text-blue-400 duration-100 transition ease-in-out" title="Display project as a table" />
					</button>
				)}
			</div>
		</>
	);
};

export default DisplaySwitch;
