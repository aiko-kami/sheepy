const Notification = ({ value, size, notifColor, ringMode }) => {
	let textSize;
	switch (size) {
		case "xs":
			textSize = "text-[10px] px-2 h-5 w-5";
			break;
		case "sm":
			textSize = "text-[12px] px-2 h-6 w-6";
			break;
		case "std":
			textSize = "text-sm px-2 py-3 h-6 w-6";

			break;
		case "xl":
			textSize = "text-lg";
			break;
		default:
			textSize = "text-sm px-2 py-3 h-6 w-6";
	}

	let color;
	switch (notifColor) {
		case "gray":
			color = "text-white bg-gray-600";
			break;
		case "pink":
			color = "text-white bg-pink-600 ";
			break;
		case "blue":
			color = "text-white bg-blue-600 ";
			break;
		case "red":
			color = "text-white bg-red-600 ";
			break;
		case "green":
			color = "text-white bg-green-600";
			break;
		case "grayOutline":
			color = "text-gray-600 border border-2 box-border border-gray-600";
			break;
		default:
			color = "text-white bg-gray-600";
	}

	let ring;
	switch (ringMode) {
		case "std":
			ring = "ring-4 ring-base-500";
			break;
		case "none":
			ring = "";
			break;
		default:
			ring = "";
	}

	const displayValue = typeof value === "number" && value > 99 ? "99+" : value;

	return <span className={`inline-flex items-center justify-center font-bold rounded-full ${textSize} ${color} ${ring}`}>{displayValue}</span>;
};

export default Notification;
